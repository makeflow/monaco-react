import * as React from "react";

import { editorStore } from "../../../build-stores";
import "../../../styles/header-tabs.css";
import "../../../styles/row.css";
import { markdownRender } from "../../../utils";

export class HeaderTabs extends React.Component {
  handlePreviewClick(): void {
    editorStore.markdownContent = markdownRender(editorStore.content);
    editorStore.currentView = "preview";
  }

  handleCodeClick(): void {
    editorStore.currentView = "regular";
  }

  render(): JSX.Element {
    return (
      <div className="Row">
        <div className="Tab" onClick={() => this.handleCodeClick()}>
          Code
        </div>
        <div className="Tab" onClick={() => this.handlePreviewClick()}>
          Preview
        </div>
      </div>
    );
  }
}
