import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./styles/card.css";

const Card = (props) => {
  return (
    <div
      className={`projectContainer ${props.isSelected && "selected"}`}
      onClick={props.onClick}
    >
      <div className="text-light container-fluid ">
        <div className="status bg-primary-opacity-50">
          <p>Running</p>
        </div>
        <div className="title">{props.projectName}</div>
        <div className="d-flex">
          <p>Profile |</p>
          <p>USERNAME |</p>
          <p>1/22/2022 |</p>
        </div>
        <div className="text">{props.projectDetail}</div>
        <div className="buttonGroup d-flex justify-content-around">
          <Link to={props.linkTo} className="text-decoration-none">
            <Button cn="btn btn-warning">OPEN</Button>
          </Link>
          <Button cn="btn btn-primary">EDIT</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
