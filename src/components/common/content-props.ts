import MonacoEditor from "react-monaco-editor";

export interface ContentProps {
  getValue(editor: MonacoEditor): void;
}
