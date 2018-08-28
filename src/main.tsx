import * as React from "react";
import * as ReactDOM from "react-dom";

// import { DiffEditor } from "./components/editor";
import { RegularEditor } from "./components/editor";
import "./styles/main.css";

// ReactDOM.render(<DiffEditor />, document.getElementById("root") as HTMLElement);
ReactDOM.render(
  <RegularEditor
    style={{
      height: "500"
    }}
    readonly={false}
    initialContent="hello"
    onChange={(value: string) => console.info(value)}
  />,
  document.getElementById("root") as HTMLElement
);
