import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import "../../../styles/header-groups.css";
import { Icon } from "../../common/icon";

interface HeaderGroupsProps {
  icons: Icon[];
}

export class HeaderGroups extends React.Component<HeaderGroupsProps> {
  render(): JSX.Element {
    const icons = this.props.icons.map(iconData => (
      <button className="IconButton" onClick={iconData.handleClick.bind(this)}>
        <FontAwesomeIcon icon={iconData.body} />
      </button>
    ));

    return <div className="Row Group">{icons}</div>;
  }
}
