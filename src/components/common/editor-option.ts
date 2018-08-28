import * as monacoEditor from "monaco-editor";

export const EditorOption: monacoEditor.editor.IEditorConstructionOptions = {
  language: "markdown",
  overviewRulerBorder: false,
  lineHeight: 30,
  codeLens: false,
  minimap: {
    enabled: false
  },
  fontSize: 16,
  fontFamily: "PingFang SC",
  fontWeight: "normal"
};
