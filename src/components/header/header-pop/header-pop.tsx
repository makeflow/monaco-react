import { observer } from "mobx-react";
import * as React from "react";

import { editorStore } from "../../../build-stores";
import "../../../styles/header-pop.css";
import { attachSymbol, createSymbol } from "../../../utils";

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

  handleClick(headerIndex: number): void {
    editorStore.isView = !editorStore.isView;
    editorStore.content = attachSymbol(
      createSymbol("#", headerIndex, true, "end"),
      ""
    );
  }

  render(): JSX.Element {
    const headerPop = editorStore.isView ? (
      <div className="PopBody" onClick={(): void => console.info("hello")}>
        {this.headers.map((header, index) => (
          <div
            key={index}
            onClick={() => this.handleClick(index + 1)}
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
