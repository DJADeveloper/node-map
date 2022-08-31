import React from "react";
import Button from "../../Buttons/Button";
import Input from "../../Inputs/Input";

const NodeInputForm = (props) => {
  return (
    <div>
      <Input label="ID:" type="text" value={props.id} />
      <Input label="Level:" type="text" value={props.level} />
      <Input
        label="Name:"
        type="text"
        value={props.name}
        onChange={props.onChangeName}
      />

      <Button cn="btn-primary mt-3" onClick={props.onClick}>
        Add Node
      </Button>
    </div>
  );
};

export default NodeInputForm;
