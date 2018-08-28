import * as React from "react";
import MonacoEditor from "react-monaco-editor";

import * as monacoEditor from "monaco-editor";

import { EditorOption, EditorProps } from "../common";
import { StyleProps } from "../common/style-props";
import { HeaderBar } from "../header";

export interface RegularEditorProps extends EditorProps, StyleProps {
  onChange(value: string): void;
}

export class RegularEditor extends React.Component<RegularEditorProps> {
  render(): JSX.Element {
    const options: monacoEditor.editor.IEditorConstructionOptions = {
      readOnly: this.props.readonly,
      value: this.props.initialContent
    };

    const style = this.props.style || { width: "100%", height: "100%" };

    return (
      <div>
        <HeaderBar style={this.props.style} />
        <MonacoEditor
          width={style.width}
          height={style.height}
          onChange={this.props.onChange}
          options={Object.assign(
            {},
            EditorOption,
            options,
            this.props.editorOption
          )}
        />
      </div>
    );
  }
}
