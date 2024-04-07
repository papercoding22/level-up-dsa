export function isValidSudoku(board: string[][]): boolean {
  const boardSize = 9;

  const set = new Set();

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === '.') {
        continue;
      }
      const currentBox = `${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
      console.log('TCL: currentBox', currentBox);

      if (
        set.has(`row${i}-${board[i][j]}`) ||
        set.has(`col${j}-${board[i][j]}`) ||
        set.has(`box${currentBox}-${board[i][j]}`)
      ) {
        return false;
      }

      set.add(`row${i}-${board[i][j]}`);
      set.add(`col${j}-${board[i][j]}`);
      set.add(`box${currentBox}-${board[i][j]}`);
    }
  }

  return true;
}
