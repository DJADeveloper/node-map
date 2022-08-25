import React from "react";
import Icon from "./Icon";

const IconButton = (props) => {
  return (
    <div>
      <Icon icon={props.icon} />
    </div>
  );
};

export default IconButton;
