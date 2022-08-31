import React from "react";
import Icon from "../Icon/Icon";

import "../Toolbar/styles/Toolbar.css";

const Toolbar = (props) => {
  return (
    <div className={props.cn}>
      {props.list.map((item) => (
        <div className="button">
          <Icon icon={item.name} onClick={item.onClick} />
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
