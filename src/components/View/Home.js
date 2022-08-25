import React from "react";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RightSidebar from "../Sidebars/RightSidebar";
import NodeCanvas from "../Nodes/NodeCanvas/NodeCanvas";

const Home = () => {
  return (
    <div className="d-flex">
      <LeftSidebar />
      <NodeCanvas />
      <RightSidebar />
    </div>
  );
};

export default Home;
