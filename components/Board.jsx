import React from "react";
import SingleNode from "./SingleNode";

function Board({
  grid,
  walls,
  setWalls,
  start,
  end,
  mousePress,
  setMousePress,
}) {
  return (
    <div className="Board-Container">
      <div className="w-full">
        {grid.map((e, i) => {
          return (
            <div className="Column" key={i}>
              {e.map((x, j) => (
                <SingleNode
                  key={`col${i}-row${j}`}
                  col={j}
                  row={i}
                  animation={x.animation}
                  start={start}
                  end={end}
                  blocked={x.blockWall}
                  walls={walls}
                  setWalls={setWalls}
                  mousePress={mousePress}
                  setMousePress={setMousePress}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
