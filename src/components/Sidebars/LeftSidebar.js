import {
  CalendarMonth,
  DeviceHub,
  Language,
  LocationCity,
  Router,
  Settings,
  Wifi,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

import NodeType from "../Nodes/NodeTypes/NodeType";
import SubTitle from "../Titles/SubTitle";
import Title from "../Titles/Title";
import "./styles/sidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-sideMenu">
      <Title title="Node Types" />
      <SubTitle subTitle="Drag and drop the node you are looking for onto the canvas" />
      <Box className="node_typeRow">
        <NodeType icon={<Language />} text="GEO FENCE" />
        <NodeType icon={<Language />} text="COUNTRY" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={<DeviceHub />} text="DEVICE ID" />
        <NodeType icon={<Language />} text="LANGUAGE" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={<Settings />} text="BEHAVIORS" />
        <NodeType icon={<LocationCity />} text="IP ADDRESS" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={<CalendarMonth />} text="TEMPORAL" />
        <NodeType icon={<Router />} text="BSSID" />
      </Box>
      <Box className="node_typeRow">
        <NodeType icon={<Wifi />} text="SSID" />
      </Box>
    </div>
  );
};

export default LeftSidebar;
