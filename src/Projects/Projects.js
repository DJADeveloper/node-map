import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";
import Card from "../components/Card/Card";
import { NodeContext } from "../components/Context/NodeRepository";
import "../Projects/styles/projects.css";

const Projects = () => {
  const { repository, nodeList, deleteNode, setNodeList, id, setId } =
    useContext(NodeContext);

  const isSelected = (id) => {
    setId(id);
  };

  const deleteProject = (id) => {
    repository.delete(id);
    setNodeList(repository.getList({ level: 0 }));
  };

  return (
    <div className="container-fluid bg-dark vh-100">
      <h1>Projects</h1>
      <div className="list">
        {nodeList.map((item) => (
          <div
            className="item"
            key={item.id}
            // onClick={() => deleteNode(item.id)}
          >
            <Card
              id={item.id}
              onClick={() => isSelected(item.id)}
              // onDoubleClick=<Link to={`/Node/${item.id}`} />
              isSelected={item.id === id}
              projectName={item.name}
              projectDetail={item.id}
              linkTo={`/Node/${item.id}`}
            />
          </div>
        ))}
      </div>
      <Button cn="btn btn-danger px-4" onClick={() => deleteProject(id)}>
        Delete
      </Button>
    </div>
  );
};

export default Projects;
