import { observer } from "mobx-react";
import * as React from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";

import * as monacoEditor from "monaco-editor";

import { editorPositionInfo } from "../../build-service";
import { editorStore } from "../../build-stores";
import { getSelectText } from "../../utils";
import { EditorOption } from "../common";
import { DiffEditor, DiffEditorProps, RegularEditorProps } from "../editor";
import { Preview } from "../preview";

@observer
export class Layout extends React.Component<
  RegularEditorProps & DiffEditorProps
> {
  constructor(props: RegularEditorProps & DiffEditorProps) {
    super(props);

    editorStore.content = this.props.initialContent;

    this.state = {
      value: this.props.initialContent
    };
  }

  handleChange(value: string): void {
    editorStore.content = value;
  }

  handleDiffEditorDidMount(_: monacoEditor.editor.IStandaloneDiffEditor): void {
    console.info("editor");
  }

  handleRegularEditorDidMount(
    editor: monacoEditor.editor.IStandaloneCodeEditor
  ): void {
    editor.onDidChangeCursorSelection(
      (e: monacoEditor.editor.ICursorSelectionChangedEvent) => {
        editorPositionInfo.updateAll(
          e.selection.startColumn - 1,
          e.selection.endColumn - 1,
          e.selection.startLineNumber - 1,
          e.selection.endLineNumber - 1
        );

        let {
          startIndex,
          endIndex,
          startLine,
          endLine
        } = editorPositionInfo.getAll();

        editorStore.selectContent = getSelectText(
          startIndex,
          endIndex,
          startLine,
          endLine,
          editorStore.content
        );
        this.props.onChange(startIndex, endIndex, editorStore.content);
      }
    );
  }

  render(): JSX.Element {
    let currentView = editorStore.currentView;
    let options: monacoEditor.editor.IEditorConstructionOptions = {
      readOnly: this.props.readonly
    };
    let editorOptions = Object.assign(
      {},
      EditorOption,
      options,
      this.props.editorOption
    );

    let pane: typeof DiffEditor | JSX.Element | typeof Preview | undefined;

    let style = this.props.style || { width: "100%", height: "100%" };

    if (currentView === "diff") {
      pane = (
        <MonacoDiffEditor
          width={style.width}
          height={style.height}
          value={editorStore.content}
          original={"Hello"}
          options={editorOptions}
        />
      );
    } else if (currentView === "regular") {
      pane = (
        <MonacoEditor
          width={style.width}
          height={style.height}
          onChange={(value: string) => this.handleChange(value)}
          defaultValue={this.props.initialContent}
          value={editorStore.content}
          options={editorOptions}
          editorDidMount={(editor: monacoEditor.editor.IStandaloneCodeEditor) =>
            this.handleRegularEditorDidMount(editor)
          }
        />
      );
    } else {
      pane = <Preview />;
    }

    return <div>{pane}</div>;
  }
}
