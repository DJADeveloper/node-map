import React, { useContext } from "react";
import { NodeContext } from "../../Context/NodeRepository";
import Input from "../../Inputs/Input";
import NodeInputForm from "../NodeInputForm/NodeInputForm";

import "../styles/NodeDetails.css";
import NodeDetailList from "./NodeDetailList";

const NodeDetails = (props) => {
  const nodeList = [
    { name: "dj", level: 1 },
    { name: "emily", level: 0 },
    { name: "bryson", level: 0 },
  ];

  return (
    <div className={props.cn}>
      Detail ID {props.id}
      {/* <NodeDetailList list={nodeList} /> */}
      <NodeInputForm
        id={props.id}
        level={props.level}
        name={props.name}
        onChangeName={props.onChangeName}
      />
    </div>
  );
};

export default NodeDetails;
