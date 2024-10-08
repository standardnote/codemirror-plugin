import React from 'react';
import EditorKit, { EditorKitDelegate } from '@standardnotes/editor-kit';
import MarkdownEditor, { ICommand } from '@uiw/react-markdown-editor';
import { Commands } from '@uiw/react-markdown-editor/cjs/components/ToolBar';
import { Sandbox } from './Sandbox';
import type { OutgoingItemMessagePayload } from '@standardnotes/snjs';

enum AppDataField {
  Pinned = 'pinned',
  Archived = 'archived',
  Locked = 'locked',
  UserModifiedDate = 'client_updated_at',
  DefaultEditor = 'defaultEditor',
  MobileRules = 'mobileRules',
  NotAvailableOnMobile = 'notAvailableOnMobile',
  MobileActive = 'mobileActive',
  LastSize = 'lastSize',
  LegacyPrefersPlainEditor = 'prefersPlainEditor',
  ComponentInstallError = 'installError',
}

enum DisplayMode {
  editor = 'edit',
  preview = 'preview',
  sandbox = 'split',
}

export interface EditorInterface {
  mode: DisplayMode;
  text: string;
  colorMode: string;
  readOnly: boolean;
}

export default class Editor extends React.Component<{}, EditorInterface> {
  private editorKit?: EditorKit;
  private isMobile: boolean = window.innerWidth < 768;
  private initialState = {
    mode: DisplayMode.editor,
    text: '',
    colorMode: this.isMobile ? 'dark' : 'light',
    readOnly: false,
  };
  private note?: OutgoingItemMessagePayload;

  constructor(props: EditorInterface) {
    super(props);
    this.state = this.initialState;
  }

  componentDidMount() {
    this.configureEditorKit();
  }

  configureEditorKit = () => {
    const delegate: EditorKitDelegate = {
      onNoteValueChange: async (note) => {
        this.note = note;
        this.setState({
          readOnly:
            this.editorKit?.getItemAppDataValue(AppDataField.Locked) || false,
        });
        this.onModeChange(
          // this.editorKit?.getComponentDataValueForKey('mode') || DisplayMode.editor
          (note.clientData?.mode as DisplayMode) || DisplayMode.editor,
        );
      },
      setEditorRawText: (text: string) => {
        this.setState({ text });
      },
      clearUndoHistory: () => {},
      handleRequestForContentHeight: () => undefined,
      onThemesChange: () => {
        this.setColorMode(
          // @ts-ignore
          this.editorKit?.componentRelay?.component.activeThemes || [],
        );
      },
    };

    this.editorKit = new EditorKit(delegate, {
      mode: 'plaintext',
    });
  };

  setColorMode = (themes: string) => {
    if (themes.length) {
      const isDark = [
        'dark',
        'org.standardnotes.theme-focus',
        'com.standardnotes.theme-proton',
        'org.standardnotes.theme-futura',
        'org.standardnotes.theme-midnight',
        'org.standardnotes.theme-github',
      ].some((theme: string) => themes[0].includes(theme.toLowerCase()));
      this.setState({ colorMode: isDark ? 'dark' : 'light' });
    }
  };

  saveNote = (text: string) => {
    this.setState({ text });
    try {
      this.editorKit?.onEditorValueChanged(text);
    } catch (error) {
      console.log('Error saving note:', error);
    }
  };

  saveMetadata = (key: string, value: any) => {
    if (!this.note) return;
    const note = this.note;
    this.editorKit?.componentRelay?.saveItemWithPresave(note, () => {
      note.clientData = {
        ...note.clientData,
        [key]: value,
      };
    });
  };

  onFocus = (e: React.FocusEvent) =>
    this.editorKit?.componentRelay?.sendCustomEvent('focus', {});

  onBlur = (e: React.FocusEvent) =>
    this.editorKit?.componentRelay?.sendCustomEvent('blur', {});

  getEditorClassName = (mode: DisplayMode) =>
    mode === DisplayMode.preview
      ? 'sn-preview'
      : mode === DisplayMode.sandbox
        ? 'sn-sandbox'
        : '';

  onModeChange = (mode: DisplayMode) => {
    if (this.state.mode !== mode) {
      this.setState({ mode });
      // this.editorKit?.setComponentDataValueForKey('mode', mode);
      this.saveMetadata('mode', mode);
      document.getElementById('sn-editor')!.className =
        this.getEditorClassName(mode);

      const btnExec = document.querySelector(
        '.md-editor-toolbar-mode button:first-child',
      );
      if (btnExec) {
        btnExec.className = mode === DisplayMode.sandbox ? 'active' : '';
      }
    }
  };

  getToolbars = (postion?: string): Commands[] => {
    if (postion === 'mode') {
      const exec: ICommand = {
        name: 'exec',
        keyCommand: 'exec',
        icon: (
          <svg viewBox="0 0 48 48" fill="none" height="15" width="15">
            <path
              d="M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="m32 6-4 4 4 4m6-8 4 4-4 4M14 42h20"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        execute: ({ state, view }) => {
          if (!state || !view) return;
          this.onModeChange(
            this.state.mode !== DisplayMode.sandbox
              ? DisplayMode.sandbox
              : DisplayMode.editor,
          );
        },
      };
      return [exec, 'preview'];
    }

    return this.isMobile
      ? ['undo', 'redo', 'bold', 'italic']
      : [
          'undo',
          'redo',
          'bold',
          'italic',
          'header',
          'strike',
          'underline',
          'code',
          'quote',
          'olist',
          'ulist',
          'todo',
          'link',
          'image',
        ];
  };

  render() {
    const { text, mode, colorMode, readOnly } = this.state;
    return (
      <div
        id="sn-editor"
        className={this.getEditorClassName(mode)}
        data-color-mode={colorMode}
      >
        <MarkdownEditor
          value={text}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          visible={mode === DisplayMode.preview}
          toolbars={this.getToolbars()}
          toolbarsMode={this.getToolbars('mode')}
          autoFocus={true}
          // renderPreview={() => null}
          previewWidth={this.isMobile ? '100%' : '50%'}
          readOnly={readOnly}
          onPreviewMode={(isPreview) =>
            this.onModeChange(
              isPreview ? DisplayMode.preview : DisplayMode.editor,
            )
          }
          onChange={(value, viewUpdate) => this.saveNote(value)}
        />
        <Sandbox
          isVisible={mode === DisplayMode.sandbox}
          content={text}
          runInDoc={this.isMobile}
        />
      </div>
    );
  }
}
