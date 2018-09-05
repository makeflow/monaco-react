import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import "../../../styles/header-groups.css";
import { Icon } from "../../common/icon-type";

interface HeaderGroupsProps {
  icons: Icon[];
}

export class HeaderGroups extends React.Component<HeaderGroupsProps> {
  render(): JSX.Element {
    const icons = this.props.icons.map((iconData, index) => (
      <button
        className="IconButton"
        key={index}
        onClick={() => iconData.handleClick()}
      >
        <FontAwesomeIcon className="Icon" icon={iconData.body} />
      </button>
    ));

    return <div className="Row Group">{icons}</div>;
  }
}
