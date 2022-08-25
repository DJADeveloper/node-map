import { Box } from "@mui/material";
import React from "react";
import icons from "../Icon/Icons";

import NodeType from "../Nodes/NodeTypes/NodeType";
import SubTitle from "../Titles/SubTitle";
import Title from "../Titles/Title";
import "./styles/sidebar.css";

const LeftSidebar = () => {
  const nodeTypes = [{ icon: "language", title: "Geo Fence" }];

  return (
    <div className="left-sideMenu">
      <Title title="Node Types" />
      <SubTitle subTitle="Drag and drop the node you are looking for onto the canvas" />
      <Box className="node_typeRow">
        <NodeType icon={icons.language} text="GEO FENCE" />
        <NodeType icon={icons.language} text="COUNTRY" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={icons.deviceId} text="DEVICE ID" />
        <NodeType icon={icons.language} text="LANGUAGE" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={icons.behaviors} text="BEHAVIORS" />
        <NodeType icon={icons.ipAddress} text="IP ADDRESS" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={icons.temporal} text="TEMPORAL" />
        <NodeType icon={icons.bssid} text="BSSID" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={icons.ssid} text="SSID" />
      </Box>
    </div>
  );
};

export default LeftSidebar;
