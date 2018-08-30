import { observer } from "mobx-react";
import * as React from "react";
import MonacoEditor from "react-monaco-editor";

import * as monacoEditor from "monaco-editor";

import { editorStore } from "../../build-stores";
import { getSelectText } from "../../utils";
import { mark } from "../../utils/markdown";
import { EditorOption, EditorProps } from "../common";
import { StyleProps } from "../common/style-props";
import { HeaderBar } from "../header";

export interface RegularEditorProps extends EditorProps, StyleProps {
  onChange(begin: number, end: number, value: string): void;
}

interface RegularState {
  value: string;
}

@observer
export class RegularEditor extends React.Component<
  RegularEditorProps,
  RegularState
> {
  constructor(props: RegularEditorProps) {
    super(props);

    editorStore.content = this.props.initialContent;

    this.state = {
      value: this.props.initialContent
    };
  }

  handlePreviewClick(): void {
    let value = editorStore.content;
    console.info(mark(value));
  }

  handleChange(value: string): void {
    editorStore.content = value;
  }

  handleEditorDidMount(
    editor: monacoEditor.editor.IStandaloneCodeEditor
  ): void {
    editor.onDidChangeCursorSelection(
      (e: monacoEditor.editor.ICursorSelectionChangedEvent) => {
        editorStore.selectContent = getSelectText(
          e.selection.startColumn - 1,
          e.selection.endColumn - 1,
          e.selection.startLineNumber - 1,
          e.selection.endLineNumber - 1,
          editorStore.content
        );
        this.props.onChange(
          e.selection.startColumn,
          e.selection.endColumn,
          editorStore.content
        );
      }
    );
  }

  handleEditorClick(): void {
    editorStore.isView = false;
  }

  render(): JSX.Element {
    const options: monacoEditor.editor.IEditorConstructionOptions = {
      readOnly: this.props.readonly
    };

    const style = this.props.style || { width: "100%", height: "100%" };

    return (
      <div>
        <div>
          <HeaderBar
            style={this.props.style}
            handlePreviewClick={() => this.handlePreviewClick()}
          />
        </div>
        <div onClick={this.handleEditorClick}>
          <MonacoEditor
            width={style.width}
            height={style.height}
            onChange={(value: string) => this.handleChange(value)}
            defaultValue={this.props.initialContent}
            value={editorStore.content}
            options={Object.assign(
              {},
              EditorOption,
              options,
              this.props.editorOption
            )}
            editorDidMount={(
              editor: monacoEditor.editor.IStandaloneCodeEditor
            ) => this.handleEditorDidMount(editor)}
          />
        </div>
      </div>
    );
  }
}
