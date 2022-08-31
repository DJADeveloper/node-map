import React from "react";

const ChartElement = (props) => {
  return (
    <g>
      {" "}
      <circle cx={props.x} cy={props.y} r="40" fill="none" stroke="black" />
      <text x={props.x} y={props.y}>
        {props.name}
      </text>
    </g>
  );
};

export default ChartElement;
