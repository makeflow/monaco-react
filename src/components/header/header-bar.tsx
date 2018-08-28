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

import "../../styles/header-bar.css";
import "../../styles/row.css";
import { Size } from "../../utils";
import { StyleProps } from "../common/style-props";

import { HeaderGroups } from "./header-groups";
import { HeaderTabs } from "./header-tabs";

export class HeaderBar extends React.Component<StyleProps> {
  render(): JSX.Element {
    const style = {
      width: Size(this.props.style).width,
      height: "46px"
    };

    const textIcons = [faHeading, faBold, faItalic, faStrikethrough];
    const funcIcons = [faLink, faQuoteRight, faCode, faImage];
    const orderIcons = [faListUl, faListOl, faTasks];

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
      </div>
    );
  }
}
