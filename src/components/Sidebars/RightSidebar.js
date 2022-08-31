import React from "react";
import NodeDetails from "../Nodes/NodeDetails/NodeDetails";
import NodeInputForm from "../Nodes/NodeInputForm/NodeInputForm";
import "./styles/sidebar.css";

const RightSidebar = () => {
  return (
    <div className="right-sideMenu">
      <NodeInputForm />
      {/* <NodeDetails /> */}
    </div>
  );
};

export default RightSidebar;
