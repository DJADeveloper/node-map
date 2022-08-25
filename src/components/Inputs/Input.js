import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

export default Input;
