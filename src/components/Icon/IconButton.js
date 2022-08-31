import React from "react";
import Button from "../Buttons/Button";
import Icon from "./Icon";

const IconButton = (props) => {
  return (
    <Button cn={props.cn} onClick={props.onClick}>
      <Icon icon={props.icon} />
    </Button>
  );
};

export default IconButton;
