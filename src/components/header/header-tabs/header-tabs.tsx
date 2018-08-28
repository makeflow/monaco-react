import * as React from "react";

import "../../../styles/header-tabs.css";
import "../../../styles/row.css";

export class HeaderTabs extends React.Component {
  render(): JSX.Element {
    return (
      <div className="Row">
        <div className="Tab">Code</div>
        <div className="Tab">PreView</div>
      </div>
    );
  }
}
