import * as React from "react";
import { MonacoDiffEditor } from "react-monaco-editor";

import { EditorProps } from "../common";

export interface DiffEditorProps extends EditorProps {
  inline: boolean;
  onChange(value: string): void;
}

export class DiffEditor extends React.Component<DiffEditorProps> {
  render(): JSX.Element {
    return <MonacoDiffEditor options={this.props.editorOption} />;
  }
}
