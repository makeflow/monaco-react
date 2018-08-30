import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import { editorStore } from "../../../build-stores";
import "../../../styles/header-groups.css";
import { Icon } from "../../common/icon";

interface HeaderGroupsProps {
  icons: Icon[];
}

export class HeaderGroups extends React.Component<HeaderGroupsProps> {
  handleBlur(): void {
    editorStore.isView = false;
  }

  render(): JSX.Element {
    const icons = this.props.icons.map((iconData, index) => (
      <button
        className="IconButton"
        key={index}
        onClick={() => iconData.handleClick()}
        onBlur={() => this.handleBlur()}
      >
        <FontAwesomeIcon icon={iconData.body} />
      </button>
    ));

    return <div className="Row Group">{icons}</div>;
  }
}
