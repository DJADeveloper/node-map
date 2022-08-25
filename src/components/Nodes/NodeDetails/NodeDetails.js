import React from "react";

import "../styles/NodeDetails.css";

const NodeDetails = (props) => {
  return <div className={props.cn}>Detail ID {props.id}</div>;
};

export default NodeDetails;
