import React from "react";

const Button = (props) => {
  return (
    <button className={`btn ${props.cn}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
