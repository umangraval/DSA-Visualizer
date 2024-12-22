/* eslint-disable react/prop-types */
import React from "react";

export default function Square({ element, top }) {
  return (
    <div className={"Square " + (top ? "bg-orange-400" : "bg-pink-500")}>
      {element}
    </div>
  );
}
