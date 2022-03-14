const Tile = require("./tile");

class Board {
  #grid = [];
  #rows = [];
  #cols = [];

  constructor(grid) {
    this.#grid = grid.map((row, y) =>
      row.map((tile, x) => new Tile(tile, x, y))
    );

    let rowCount = 0;
    this.#rows = grid.reduce(
      (rows, row) => [
        ...rows,
        // Check each tile in each row in the grid
        row.reduce((tiles, tile, tileIndex) => {
          // If falsey...
          if (!tile) {
            // Either save the current count or continue on if it is 0
            let finished = rowCount;
            rowCount = 0;
            return finished ? [...tiles, finished] : tiles;
            // If truthy...
          } else {
            // Iterate the count
            rowCount++;
            // If it's the last tile in the row, save the current count
            if (tileIndex === row.length - 1) {
              let finished = rowCount;
              rowCount = 0;
              return [...tiles, finished];
            }

            return tiles;
          }
        }, []),
      ],
      []
    );

    let colCount = grid[0].map((_) => 0);
    this.#cols = grid[0].map((_) => []);
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      let row = grid[rowIndex];

      for (let tileIndex = 0; tileIndex < row.length; tileIndex++) {
        let tile = row[tileIndex];

        if (!tile) {
          let finished = colCount[tileIndex];
          colCount[tileIndex] = 0;
          if (finished) {
            this.cols[tileIndex] = [...this.cols[tileIndex], finished];
          }
        } else {
          colCount[tileIndex]++;
          // If it's the last tile in the row, save the current count
          if (rowIndex === grid.length - 1) {
            let finished = colCount[tileIndex];
            colCount[tileIndex] = 0;
            this.cols[tileIndex] = [...this.cols[tileIndex], finished];
          }
        }
      }
    }
  }

  get grid() {
    return this.#grid;
  }

  get rows() {
    return this.#rows;
  }

  get cols() {
    return this.#cols;
  }
}

module.exports = Board;