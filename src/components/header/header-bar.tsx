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
import { Size } from "../../utils";
import {
  BuildIcon,
  BuildIcons,
  BuildNoActionIcons
} from "../../utils/build-icon";
import { StyleProps } from "../common/style-props";

import { HeaderGroups } from "./header-groups";
import { HeaderPop } from "./header-pop/header-pop";
import { HeaderTabs } from "./header-tabs";

interface HeaderBarProps {
  handlePreviewClick(): void;
}

export class HeaderBar extends React.Component<StyleProps & HeaderBarProps> {
  render(): JSX.Element {
    const style = {
      width: Size(this.props.style).width,
      height: "46px"
    };

    const textIcons = BuildIcons([
      BuildIcon(faHeading, () => {
        console.info(editorStore.isView);
        editorStore.isView = !editorStore.isView;
      }),
      BuildIcon(faBold, () => {}),
      BuildIcon(faItalic, () => {}),
      BuildIcon(faStrikethrough, () => {})
    ]);
    const funcIcons = BuildNoActionIcons([
      faLink,
      faQuoteRight,
      faCode,
      faImage
    ]);
    const orderIcons = BuildNoActionIcons([faListUl, faListOl, faTasks]);

    return (
      <div className="HeaderBar" style={style}>
        <div className="Row">
          <HeaderGroups icons={textIcons} />
          <HeaderGroups icons={funcIcons} />
          <HeaderGroups icons={orderIcons} />
        </div>
        <div onClick={this.props.handlePreviewClick}>
          <HeaderTabs />
        </div>
        <div className="HeaderPop">
          <HeaderPop />
        </div>
      </div>
    );
  }
}
