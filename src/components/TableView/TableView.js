import React from "react";
import "./styles/tableview.css";

const TableView = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Level</th>
          <th>RootId</th>
          <th>ParentId</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item) => (
          <tr
            key={item.id}
            onClick={() => props.onClick(item.id)}
            className={`${item.id === props.id ? "selected" : ""}`}
          >
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.level}</td>
            <td>{item.rootId}</td>
            <td>{item.parentId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
