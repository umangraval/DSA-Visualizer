import React from "react";

function SingleBar({ width, height, color }) {
  return (
    <div
      className="Bar"
      style={{
        height: `${3 * height}px`,
        background: color,
        width: `${Math.floor(1300 / width)}px`,
      }}
    ></div>
  );
}

export default SingleBar;
