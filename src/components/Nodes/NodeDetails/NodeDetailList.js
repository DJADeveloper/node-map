import React from "react";

const NodeDetailList = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <div
          className="d-flex justify-content-between border container-fluid"
          key={item.id}
        >
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.level}</p>
          <p>{item.rootId}</p>
          <p>{item.ParentId}</p>
        </div>
      ))}
    </>
  );
};

export default NodeDetailList;
