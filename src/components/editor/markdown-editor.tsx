import { observer } from "mobx-react";
import * as React from "react";

import { editorStore } from "../../build-stores";
import { Size } from "../../utils";
import { EditorProps } from "../common";
import { StyleProps } from "../common/style-props";
import { HeaderBar } from "../header";
import { Layout } from "../layout";

import { DiffEditorProps } from "./diff-editor";

export interface RegularEditorProps extends EditorProps, StyleProps {
  onChange(begin: number, end: number, value: string): void;
}

interface RegularState {
  value: string;
}

@observer
export class MarkDownEditor extends React.Component<
  RegularEditorProps & DiffEditorProps,
  RegularState
> {
  constructor(props: RegularEditorProps & DiffEditorProps) {
    super(props);

    editorStore.content = this.props.initialContent;

    this.state = {
      value: this.props.initialContent
    };

    editorStore.currentView = this.props.mode || "regular";
  }

  handleEditorClick(): void {
    editorStore.isView = false;
  }

  render(): JSX.Element {
    let style = this.props.style || { width: "100%", height: "100%" };
    let inline = this.props.inline || false;

    let { width, height } = Size(style);
    editorStore.width = width;
    editorStore.height = height;

    return (
      <div>
        <div>
          <HeaderBar style={this.props.style} />
        </div>
        <div onClick={this.handleEditorClick}>
          <Layout
            style={this.props.style}
            onChange={this.props.onChange}
            initialContent={this.props.initialContent}
            editorOption={this.props.editorOption}
            readonly={this.props.readonly}
            inline={inline}
          />
        </div>
      </div>
    );
  }
}
