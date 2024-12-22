import bfs from "components/algorithm/bfs";
import Board from "components/Board";
import React, { useEffect, useState } from "react";
import { triggerToast } from "utils/handlers";

const Bfs = ({ start, end }) => {
  const [walls, setWalls] = useState([]);
  const [mousePress, setMousePress] = useState(false);
  const [disableGrid, setDisableGrid] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const colNum = 10;
  const rowNum = 20;

  const initGrid = [];

  for (let i = 0; i < colNum; i++) {
    const colArr = [];
    for (let j = 0; j < rowNum; j++) {
      colArr.push({
        neighbors: {
          right: {
            col: j + 1 < rowNum ? j + 1 : null,
            row: j + 1 < rowNum ? i : null,
          },
          left: {
            col: j - 1 >= 0 ? j - 1 : null,
            row: j - 1 >= 0 ? i : null,
          },
          down: {
            col: i + 1 < colNum ? j : null,
            row: i + 1 < colNum ? i + 1 : null,
          },
          up: {
            col: i - 1 >= 0 ? j : null,
            row: i - 1 >= 0 ? i - 1 : null,
          },
        },

        val: 0,
        animation: false,
        blockWall: false,
      });
    }

    initGrid.push(colArr);
  }

  const [grid, setGrid] = useState(initGrid);

  useEffect(() => {
    const newGrid = grid.map((e, row) =>
      e.map((x, col) => {
        x.val = 0;
        x.blockWall = false;
        for (const i of walls) {
          if (i.col === col && i.row === row) {
            x.val = 1;
            x.blockWall = true;
          }
        }
        return x;
      })
    );

    setGrid(newGrid);
  }, [walls.length]);

  const handleClick = async () => {
    setDisableGrid(true);
    setDisableBtn(true);
    const stime = new Date();
    const isFindElement = await bfs(grid, setGrid, start, end);
    const etime = new Date();

    if (isFindElement) {
      triggerToast({
        type: "success",
        message: `Element Found in ${(etime - stime) / 1000} secs !!`,
      });
    } else {
      triggerToast({ type: "error", message: "No Element Found!!" });
    }
    setDisableBtn(false);
  };

  const handleReset = () => {
    setWalls([]);

    const resetGrid = grid.map((e) =>
      e.map((x) => {
        x.animation = false;
        x.val = 0;
        x.blockWall = false;
        return x;
      })
    );
    setGrid(resetGrid);
    setDisableGrid(false);
  };

  return (
    <div className="h-full">
      <div className="text-4xl text-center mb-4">Breath First Search</div>

      <div style={disableGrid ? { pointerEvents: "none", opacity: "0.7" } : {}}>
        <Board
          grid={grid}
          setGrid={setGrid}
          walls={walls}
          setWalls={setWalls}
          start={start}
          end={end}
          mousePress={mousePress}
          setMousePress={setMousePress}
        />
      </div>

      <div className="text-center text-xl mt-5">
        Click on the nodes to block the path before the start
      </div>
      <div
        className="w-full flex justify-center items-center gap-2 p-5"
        style={disableBtn ? { pointerEvents: "none", opacity: "0.5" } : {}}
      >
        <div
          onClick={() => handleClick()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Start
        </div>
        <div
          onClick={() => handleReset()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default Bfs;
