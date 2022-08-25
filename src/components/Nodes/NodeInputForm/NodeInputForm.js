import React from "react";
import Button from "../../Buttons/Button";
import Input from "../../Inputs/Input";

const NodeInputForm = () => {
  return (
    <div>
      <Input label="Name:" type="text" />
      <Input label="Name:" type="text" />
      <Input label="Name:" type="text" />
      <Input label="Name:" type="text" />
      <Button cn="btn-primary mt-3">Add Node</Button>
    </div>
  );
};

export default NodeInputForm;
