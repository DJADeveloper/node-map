import React from "react";
import ChartElement from "./ChartElement";

const Chart = (props) => {
  const WIDTH = 400;
  const HEIGHT = 200;
  const R = 90;
  const setElements = (list) => {
    const elements = [];
    const x0 = WIDTH / 2;
    const y0 = HEIGHT / 2;
    const root = list.find((item) => item.level === 0);
    elements.push({
      id: root.id,
      name: root.name,
      level: root.level,
      x: x0,
      y: y0,
    });
    const children = list.filter((item) => item.level === 1);
    for (let i = 0; i < children.length; i++) {
      let item = children[i];
      elements.push({
        id: item.id,
        name: item.name,
        level: item.level,
        x: x0 + R * Math.cos((i * Math.PI * 2) / children.length),
        x: y0 + R * Math.cos((i * Math.PI * 2) / children.length),
      });
    }
    return elements;
  };
  const elements = setElements(props.list);
  return (
    <div className="h-75 w-100 bg-warning">
      <svg viewBox="0 0 400 200">
        {elements.map((element) => (
          <ChartElement x={element.x} y={element.y} name={element.name} />
        ))}
      </svg>
    </div>
  );
};

export default Chart;
