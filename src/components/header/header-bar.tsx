import {
  faBold,
  faCode,
  faHeading,
  faImage,
  faItalic,
  faLink,
  faListOl,
  faListUl,
  faQuoteRight,
  faStrikethrough,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

import { editorStore } from "../../build-stores";
import "../../styles/header-bar.css";
import "../../styles/row.css";
import { Size, attachSymbol } from "../../utils";
import { BuildIcon, BuildIcons } from "../../utils/build-icon";
import { StyleProps } from "../common/style-props";

import { HeaderGroups } from "./header-groups";
import { HeaderPop } from "./header-pop/header-pop";
import { HeaderTabs } from "./header-tabs";

export class HeaderBar extends React.Component<StyleProps> {
  render(): JSX.Element {
    const style = {
      width: Size(this.props.style).width,
      height: "46px"
    };
    const textIcons = BuildIcons([
      BuildIcon(faHeading, () => (editorStore.isView = !editorStore.isView)),
      BuildIcon(faBold, () => {
        editorStore.content = attachSymbol("**", "**");
      }),
      BuildIcon(faItalic, () => {
        editorStore.content = attachSymbol("_", "_");
      }),
      BuildIcon(faStrikethrough, () => {
        editorStore.content = attachSymbol("~~", "~~");
      })
    ]);

    const funcIcons = BuildIcons([
      BuildIcon(faLink, () => {
        editorStore.content = attachSymbol("[", "](url)");
      }),
      BuildIcon(faQuoteRight, () => {
        editorStore.content = attachSymbol("> ", "");
      }),
      BuildIcon(faCode, () => {
        editorStore.content = attachSymbol("", "", true);
      }),
      BuildIcon(faImage, () => {
        editorStore.content = attachSymbol("![", "](image-url)");
      })
    ]);

    const orderIcons = BuildIcons([
      BuildIcon(faListUl, () => {
        editorStore.content = attachSymbol("- ", "");
      }),
      BuildIcon(faListOl, () => {
        editorStore.content = attachSymbol("1.", "");
      }),
      BuildIcon(faTasks, () => {
        editorStore.content = attachSymbol("-[] ", "");
      })
    ]);

    return (
      <div className="HeaderBar" style={style}>
        <div className="Row">
          <HeaderGroups icons={textIcons} />
          <HeaderGroups icons={funcIcons} />
          <HeaderGroups icons={orderIcons} />
        </div>
        <div>
          <HeaderTabs />
        </div>
        <div className="HeaderPop">
          <HeaderPop />
        </div>
      </div>
    );
  }
}
