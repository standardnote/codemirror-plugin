import React from 'react';
import EditorKit, { EditorKitDelegate } from '@standardnotes/editor-kit';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { Commands } from '@uiw/react-markdown-editor/cjs/components/ToolBar';
import type { OutgoingItemMessagePayload } from '@standardnotes/snjs';

export interface EditorInterface {
  preview: boolean;
  text: string;
  colorMode: string;
}

const initialState = {
  preview: false,
  text: '',
  colorMode: 'light',
};

// let keyMap = new Map();

export default class Editor extends React.Component<{}, EditorInterface> {
  private editorKit?: EditorKit;

  constructor(props: EditorInterface) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.configureEditorKit();
  }

  configureEditorKit = () => {
    const delegate: EditorKitDelegate = {
      /** This loads every time a different note is loaded */
      onNoteValueChange: async (note: OutgoingItemMessagePayload) => {
        this.setState({
          preview: this.editorKit?.getComponentDataValueForKey('mode') || false,
        });
      },
      setEditorRawText: (text: string) => {
        this.setState({ text: text });
      },
      clearUndoHistory: () => {},
      handleRequestForContentHeight: () => undefined,
      onThemesChange: () => {
        this.setColorMode(
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

  saveText = (text: string) => {
    this.saveNote(text);
    this.setState({
      text: text,
    });
  };

  saveNote = (text: string) => {
    /**
     * This will work in an SN context, but breaks the standalone editor,
     * so we need to catch the error
     */
    try {
      this.editorKit?.onEditorValueChanged(text);
    } catch (error) {
      console.log('Error saving note:', error);
    }
  };

  onFocus = (e: React.FocusEvent) =>
    this.editorKit?.componentRelay?.sendCustomEvent('focus', {});

  onBlur = (e: React.FocusEvent) =>
    this.editorKit?.componentRelay?.sendCustomEvent('blur', {});

  onPreviewMode = (isPreview: boolean) => {
    document.querySelector('.sn-editor')!.className = isPreview
      ? 'sn-editor sn-preview'
      : 'sn-editor';
    this.editorKit?.setComponentDataValueForKey('mode', isPreview);
  };

  isMobile: boolean = window.innerWidth < 768;

  toolbars: Commands[] = this.isMobile
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

  render() {
    const { text, preview, colorMode } = this.state;
    return (
      <div
        className={preview ? 'sn-editor sn-preview' : 'sn-editor'}
        data-color-mode={colorMode}
      >
        <MarkdownEditor
          value={text}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          visible={preview}
          toolbars={this.toolbars}
          onPreviewMode={this.onPreviewMode}
          onChange={(value, viewUpdate) => this.saveText(value)}
        />
      </div>
    );
  }
}
