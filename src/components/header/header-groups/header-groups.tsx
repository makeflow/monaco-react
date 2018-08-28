import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import "../../../styles/header-groups.css";

interface HeaderGroupsProps {
  icons: IconProp[];
}

export class HeaderGroups extends React.Component<HeaderGroupsProps> {
  render(): JSX.Element {
    const icons = this.props.icons.map(icon => (
      <button className="IconButton">
        <FontAwesomeIcon icon={icon} />
      </button>
    ));

    return <div className="Row Group">{icons}</div>;
  }
}
