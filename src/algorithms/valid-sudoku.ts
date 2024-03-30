export function isValidSudoku(board: string[][]): boolean {
  const numberOfRows = board.length;
  const numberOfColumns = board[0].length;

  // rows
  for (let row = 0; row < numberOfRows; row++) {
    const rowSet = new Set<string>();
    for (let col = 0; col < numberOfColumns; col++) {
      const cell = board[row][col];
      if (cell === '.') {
        continue;
      }
      if (rowSet.has(cell)) {
        return false;
      }
      rowSet.add(cell);
    }
  }

  // columns
  for (let col = 0; col < numberOfColumns; col++) {
    const colSet = new Set<string>();
    for (let row = 0; row < numberOfRows; row++) {
      const cell = board[row][col];
      if (cell === '.') {
        continue;
      }
      if (colSet.has(cell)) {
        return false;
      }
      colSet.add(cell);
    }
  }

  // 3x3 boxes
  for (let c = 0; c <= 6; c += 3) {
    for (let r = 0; r <= 6; r += 3) {
      const boxSet = new Set<string>();
      for (let i = c; i <= c + 2; i++) {
        for (let j = r; j <= r + 2; j++) {
          const cell = board[i][j];
          if (cell === '.') {
            continue;
          }
          if (boxSet.has(cell)) {
            return false;
          }
          boxSet.add(cell);
        }
      }
    }
  }

  return true;
}
