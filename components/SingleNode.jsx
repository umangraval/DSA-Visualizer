import React from "react";
import { helpers } from "utils/helpers";

function SingleNode({
  row,
  col,
  animation,
  start,
  end,
  blocked,
  walls,
  setWalls,
  mousePress,
  setMousePress,
}) {
  const isStart = row === start.row && col === start.col;
  const isFinish = row === end.row && col === end.col;

  const setOrDeleteWall = (node) => {
    setWalls([...helpers.isInWallOrNot(walls, node)]);
  };
  const onMouseDownHandler = () => {
    if (!(isFinish || isStart)) {
      setMousePress();
      setOrDeleteWall({ row, col });
    }
  };

  const onMouseUpHandler = () => {
    if (!(isFinish || isStart)) {
      if (mousePress) {
        setMousePress();
      }
    }
  };

  const onMouseEnterHandler = (e) => {
    if (!(isFinish || isStart)) {
      if (!mousePress) return;

      setOrDeleteWall({ row, col });
    }
  };

  return (
    <div
      key={`singleNode${row - col}`}
      onMouseDown={onMouseDownHandler}
      onMouseUp={onMouseUpHandler}
      onMouseEnter={onMouseEnterHandler}
      className={
        !isStart && animation
          ? `SingleNode_Animation h-8 w-8 inline-block text-center rounded-sm border ${
              blocked ? "bg-black" : "bg-indigo-500"
            }`
          : `h-8 w-8 inline-block text-center rounded-sm border border-black ${
              blocked ? "bg-black" : "bg-yellow-300"
            }`
      }
    >
      {(isStart || isFinish) &&
        (isStart ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="blue"
          >
            <path
              fillRule="evenodd"
              d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        ))}
    </div>
  );
}

export default SingleNode;
