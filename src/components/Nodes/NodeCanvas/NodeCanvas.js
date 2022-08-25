import { Add, AddBox } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import Button from "../../Buttons/Button";
import { NodeContext } from "../../Context/NodeRepository";
import Toolbar from "../../Toolbar/Toolbar";

import "../styles/NodeCanvas.css";

const NodeCanvas = () => {
  const { repository, nodeList, setNodeList } = useContext(NodeContext);
  // const [list, setList] = useState([]);

  const addNode = () => {
    repository.save({
      name: "Node!",
      level: 0,
      parentId: null,
    });

    setNodeList(repository.getList({ level: 0 }));
    console.log(nodeList);
  };

  const deleteNode = (id) => {
    repository.delete(id);
    setNodeList(repository.getList({ level: 0 }));
    console.log("Delete was clicked");
  };

  return (
    <div className="canvas d-flex flex-column ">
      <h1>NODE CANVAS</h1>
      <div>
        <button type="button" onClick={() => addNode()}>
          ADD NODE
        </button>
        <Button css="text-danger" onClick={addNode}>
          <Add />
        </Button>
      </div>

      {nodeList.map((item) => (
        <div key={item.id} onClick={() => deleteNode(item.id)}>
          {item.name}
        </div>
      ))}
      <Toolbar />
    </div>
  );
};

export default NodeCanvas;
