import { Add, AddBox } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Buttons/Button";
import { NodeContext } from "../../Context/NodeRepository";
import icons from "../../Icon/Icons";
import Toolbar from "../../Toolbar/Toolbar";

import "../styles/NodeCanvas.css";

const NodeCanvas = () => {
  const { repository, nodeList, setNodeList, addNode, deleteNode } =
    useContext(NodeContext);
  // const [list, setList] = useState([]);
  const list = [{ id: 1, rootId: 1, name: "fakeNodeItem", level: 1 }];

  const { rootId } = useParams();
  // const list = repository.getList({ rootId });
  const item = list[0];
  console.log(list, "This is a Item");
  const [nodeItem, setNodeItem] = useState({
    id: item.id,
    name: item.name,
    level: item.level,
    rootId,
    list,
  });

  const zoomMenu = [
    { name: icons.zoomIn, onClick: () => alert("Zooming In") },
    { name: icons.zoomOut, onClick: () => alert("Zooming Out") },
  ];

  // const addDeleteMenu = [
  //   { name: icons.add, onClick: () => addNodeItem() },
  //   { name: icons.delete, onClick: () => alert("Zooming Out") },
  // ];

  const addNodeItem = () => {
    const item = repository.save({
      name: "New item",
      level: nodeItem.level + 1,
      rootId: nodeItem.rootId,
      parentId: nodeItem.id,
    });
    const list = repository.getList({
      rootId: nodeItem.rootId,
    });
    setNodeItem({
      id: item.id,
      name: item.name,
      level: item.level,
      list,
    });
  };

  return (
    <div className="canvas d-flex flex-column ">
      <h1>NODE CANVAS - {rootId}</h1>

      <Toolbar list={zoomMenu} />
      <Button onClick={addNodeItem}>AddNode</Button>
      {/* <Toolbar list={addDeleteMenu} /> */}
    </div>
  );
};

export default NodeCanvas;
