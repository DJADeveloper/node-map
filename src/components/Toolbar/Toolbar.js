import React from "react";
import Icon from "../Icon/Icon";
import icons from "../Icon/Icons";
import "../Toolbar/styles/Toolbar.css";

const Toolbar = () => {
  const iconClicked = () => {
    console.log("Icon clicked");
  };
  return (
    <div className="ZoomMenu d-flex flex-column align-items-end  ">
      <Icon icon={icons.zoomIn} onClick={iconClicked} cn="button left" />
      <Icon icon={icons.zoomOut} onClick={iconClicked} cn="button left" />
    </div>
  );
};

export default Toolbar;
