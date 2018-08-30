import { observer } from "mobx-react";
import * as React from "react";

import { editorStore } from "../../../build-stores";
import "../../../styles/header-pop.css";

@observer
export class HeaderPop extends React.Component {
  private readonly headerCount = 4;
  private readonly headers: string[] = [];
  private readonly headerFontSize = 30;
  private readonly fontSizeIncrement = 5;

  constructor(props: {}) {
    super(props);

    for (let i = 1; i <= this.headerCount; i++) {
      this.headers.push(`Header${i}`);
    }
  }

  handleClick(): void {
    editorStore.isView = !editorStore.isView;
  }

  render(): JSX.Element {
    const headerPop = editorStore.isView ? (
      <div className="PopBody">
        {this.headers.map((header, index) => (
          <div
            key={index}
            onClick={() => this.handleClick()}
            className="HeaderPopItem"
            style={{
              fontSize: this.headerFontSize - index * this.fontSizeIncrement,
              cursor: "pointer"
            }}
          >
            {header}
          </div>
        ))}
      </div>
    ) : (
      undefined
    );

    return <div className="PopBox">{headerPop}</div>;
  }
}
