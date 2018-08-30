import * as React from "react";

import { editorStore } from "../../build-stores";
import "../../styles/preview.css";

export class Preview extends React.Component {
  render(): JSX.Element {
    const style = {
      width: editorStore.width,
      height: editorStore.height
    };

    return (
      <div
        className="Preview"
        style={style}
        dangerouslySetInnerHTML={{ __html: editorStore.markdownContent }}
      />
    );
  }
}
