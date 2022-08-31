import React from "react";
import Map from "../Nodes/NodeCanvas/Map/Map";
import NodeCanvas from "../Nodes/NodeCanvas/NodeCanvas";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RightSidebar from "../Sidebars/RightSidebar";

const NodeView = () => {
  return (
    <div className="d-flex">
      <LeftSidebar />
      {/* <NodeCanvas /> */}
      <Map />
      <RightSidebar />
    </div>
  );
};

export default NodeView;
