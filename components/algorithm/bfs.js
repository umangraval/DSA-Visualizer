import { helpers } from "utils/helpers";

const bfs = async (matrix, setGrid, startNode, endNode) => {
  function isValidPath(gridArg, idx) {
    const x = idx.row;
    const y = idx.col;
    return (
      x >= 0 &&
      x < gridArg.length &&
      y >= 0 &&
      y < gridArg[x].length &&
      gridArg[x][y].val === 0
    );
  }

  const hasPath = async (grid, start, end) => {
    grid[start.row][start.col].val = 1;

    return await searchInGrid(grid, start, end);
  };

  const searchInGrid = async (grid, current, end) => {
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    const queue = [];
    queue.push(current);
    while (queue.length) {
      const currentLocation = queue.shift();
      console.log(currentLocation);
      if (currentLocation.row === end.row && currentLocation.col === end.col) {
        return true;
      }
      grid[currentLocation.row][currentLocation.col].val = 1;

      let neighborIdx;

      for (const direction of directions) {
        neighborIdx = {
          row: currentLocation.row + direction[0],
          col: currentLocation.col + direction[1],
        };

        if (isValidPath(grid, neighborIdx)) {
          console.log("push: " + neighborIdx.row + " " + neighborIdx.col);
          queue.push(neighborIdx);
        }
      }

      const newGrid = grid.map((e, i) =>
        e.map((x, j) => {
          if (x.val === 1 && !x.blockWall) {
            x.color = "#12d0f4";
            x.animation = true;
          }
          return x;
        })
      );
      await helpers.sleep(20);
      setGrid(newGrid);
    }

    return false;
  };

  return await hasPath(matrix, startNode, endNode);
};

export default bfs;
