import React from "react";

const Icon = (props) => {
  return (
    <div className={props.cn} onClick={props.onClick}>
      {props.icon}
    </div>
  );
};

export default Icon;
