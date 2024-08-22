import React from 'react';
import EditorKit, { EditorKitDelegate } from '@standardnotes/editor-kit';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { Commands } from '@uiw/react-markdown-editor/cjs/components/ToolBar'
import type { OutgoingItemMessagePayload } from '@standardnotes/snjs';

export interface EditorInterface {
  preview: boolean;
  text: string;
}

const initialState = {
  preview: false,
  text: '',
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
          preview: this.editorKit?.getComponentDataValueForKey('mode') || false
        })
      },
      setEditorRawText: (text: string) => {
        this.setState({
          text: text,
        });
      },
      clearUndoHistory: () => { },
      handleRequestForContentHeight: () => undefined,
      onThemesChange: () => {
        const themes = this.editorKit?.componentRelay?.component.activeThemes || []
        if (themes.length) {
          console.log(themes)
          const isDark = [
            'dark',
            'org.standardnotes.theme-focus',
            'com.standardnotes.theme-proton',
            'org.standardnotes.theme-futura',
            'org.standardnotes.theme-midnight',
            'org.standardnotes.theme-github',
          ].some((theme: string) => themes[0].includes(theme.toLowerCase()))
          document.documentElement.setAttribute('data-color-mode', isDark ? 'dark' : 'light')
        }
      },
    };

    this.editorKit = new EditorKit(delegate, {
      mode: 'plaintext',
    });
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
    this.editorKit?.componentRelay?.sendCustomEvent('focus', {})

  onBlur = (e: React.FocusEvent) =>
    this.editorKit?.componentRelay?.sendCustomEvent('blur', {})

  onPreviewMode = (isPreview: boolean) => {
    this.editorKit?.setComponentDataValueForKey('mode', isPreview)
  }

  //   onKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
  //     keyMap.set(e.key, true);
  //     // Do nothing if 'Control' and 's' are pressed
  //     if (keyMap.get('Control') && keyMap.get('s')) {
  //       e.preventDefault();
  //     }
  //   };

  //   onKeyUp = (e: React.KeyboardEvent | KeyboardEvent) => {
  //     keyMap.delete(e.key);
  //   };

  isMobile: boolean = window.innerWidth < 768

  toolbars: Commands[] = this.isMobile ? ['undo', 'redo', 'bold', 'italic'] :
    ['undo', 'redo', 'bold', 'italic', 'header', 'strike', 'underline', 'code', 'quote', 'olist', 'ulist', 'todo', 'link', 'image']

  render() {
    const { text, preview } = this.state;
    return (
      <MarkdownEditor
        value={text}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        visible={preview}
        toolbars={this.toolbars}
        onPreviewMode={this.onPreviewMode}
        onChange={(value, viewUpdate) => this.saveText(value)}
      />
    );
  }
}