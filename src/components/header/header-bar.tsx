import * as React from "react";

import "../../styles/header-bar.css";
import "../../styles/row.css";
import { Size } from "../../utils";
import { Icon, IconData, buildIcon, iconConfigs } from "../common";
import { StyleProps } from "../common/style-props";

import { HeaderGroups } from "./header-groups";
import { HeaderPop } from "./header-pop/header-pop";
import { HeaderTabs } from "./header-tabs";

function groupFactory(iconDatas: IconData[]): any {
  return iconDatas.map(item => buildIcon(item.icon, item.attach, item.isCode));
}

export class HeaderBar extends React.Component<StyleProps> {
  private textIcons: Icon[];
  private funcIcons: Icon[];
  private orderIcons: Icon[];

  constructor(props: StyleProps) {
    super(props);

    this.textIcons = groupFactory(iconConfigs.textGroup);
    this.funcIcons = groupFactory(iconConfigs.funcGroup);
    this.orderIcons = groupFactory(iconConfigs.orderGroup);
  }

  render(): JSX.Element {
    const style = {
      width: Size(this.props.style).width,
      height: "46px"
    };

    return (
      <div className="HeaderBar" style={style}>
        <div className="Row">
          <HeaderGroups icons={this.textIcons} />
          <HeaderGroups icons={this.funcIcons} />
          <HeaderGroups icons={this.orderIcons} />
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
