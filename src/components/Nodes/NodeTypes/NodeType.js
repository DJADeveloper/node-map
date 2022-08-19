import { Typography } from "@mui/material";
import React from "react";
import Icon from "../../Icon/Icon";
import "../styles/NodeType.css";

const NodeType = ({ icon, text }) => {
  return (
    <div className="container-fluid">
      <Icon icon={icon} cn="d-flex jusity-content-center container-fluid" />
      <Typography className="text">{text}</Typography>
    </div>
  );
};

export default NodeType;
