import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { NodeContext } from "../../../Context/NodeRepository";
import NodeDetails from "../../NodeDetails/NodeDetails";
import IconButton from "../../../Icon/IconButton";
import icons from "../../../Icon/Icons";
import TableView from "../../../TableView/TableView";
import Chart from "../../../Chart/Chart";

const Map = () => {
  const { repository } = useContext(NodeContext);
  const { id } = useParams();
  const [currentId, setCurrentId] = useState();

  const rootId = Number(id);
  const list = repository.getList({ rootId });
  const item = list[0];

  //Project Item
  const [nodeItem, setNodeItem] = useState({
    id: item.id,
    name: item.name,
    level: item.level,
    rootId,
    list,
    // list: repository.getList({ rootId: numeberId }),
  });

  const changeName = (e) => {
    const name = e.target.value;
    const nodeItem = { id: item.id, name: name };
    repository.save(nodeItem);
    const list = repository.getList({ rootId: nodeItem.rootId });
    setNodeItem({ name: name, list: list });
  };

  const isSelected = (id) => {
    const item = repository.getItem(id);
    console.log(item, "ITEMS");
    console.log("Clicked");
    // setNodeItem({ id: item.id, name: item.name, level: item.level });
  };

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
    console.log(list);
    setNodeItem({
      id: item.id,
      name: item.name,
      level: item.level,
      list,
    });
  };

  const deleteNodeItem = () => {
    repository.delete(nodeItem.id);
    const list = repository.getList({ rootId: nodeItem.rootId });
    if (!list.length) {
      //navigate back to projects page
    }
    const item = list[0];
    console.log(item, "current Item");
    setCurrentId(id);
    setNodeItem({
      id: item.id,
      name: item.name,
      level: item.level,
      list,
    });
    console.log("NODE DELETED");
  };

  const [mapView, setMapView] = useState(true);

  return (
    <div className="flex-grow-1 p-4 ">
      <TableView id={nodeItem.id} onClick={isSelected} list={list} />
      {!mapView && (
        <div>
          <div className="my-3"></div>
          {/* Details for Project */}
          <NodeDetails
            id={nodeItem.id}
            level={nodeItem.level}
            name={nodeItem.name}
            onChangeName={changeName}
          />
        </div>
      )}
      <h1>Map</h1>

      <div>
        <Chart list={list} />
      </div>
      <div className=" my-3">
        <IconButton
          icon={icons.add}
          cn="btn btn-primary"
          onClick={addNodeItem}
        />
        <IconButton
          icon={icons.delete}
          cn="btn btn-danger"
          onClick={deleteNodeItem}
        />
      </div>
    </div>
  );
};

export default Map;
