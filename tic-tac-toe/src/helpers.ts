export function deriveActivePlayer(turns: { player: string }[]): string {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

export function deriveWinner(
  gameBoard: string[][],
  players: Record<string, string>,
  WINNING_COMBINATIONS: { row: number; column: number }[][]
): string | null {
  let winner: string | null = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

export function deriveGameBoard(
  initialGameBoard: string[][],
  gameTurns?: { square: { row: number; col: number }; player: string }[]
): string[][] {
  // Create a deep copy of the initial game board
  const gameBoard: string[][] = JSON.parse(JSON.stringify(initialGameBoard));

  gameTurns?.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return gameBoard;
}

// export function deriveActivePlayer(turns) {
//   let currentPlayer = 'X';

//   if (turns.length > 0 && turns[0].player === 'X') {
//     currentPlayer = 'O';
//   }
//   return currentPlayer;
// }

// export function deriveWinner(gameBoard, players, WINNING_COMBINATIONS) {
//   let winner = null;
//   for (const combination of WINNING_COMBINATIONS) {
//     const firstSquareSymbol =
//       gameBoard[combination[0].row][combination[0].column];
//     const secondSquareSymbol =
//       gameBoard[combination[1].row][combination[1].column];
//     const thirdSquareSymbol =
//       gameBoard[combination[2].row][combination[2].column];

//     if (
//       firstSquareSymbol &&
//       firstSquareSymbol === secondSquareSymbol &&
//       firstSquareSymbol === thirdSquareSymbol
//     ) {
//       winner = players[firstSquareSymbol];
//     }
//   }
//   return winner;
// }

// export function deriveGameBoard(initialGameBoard, gameTurns) {
//   // let gameBoard = [...initialGameBoard].map((arr) => [...arr]);
//   let gameBoard = JSON.parse(JSON.stringify(initialGameBoard));

//   gameTurns?.forEach((turn) => {
//     const { square, player } = turn;
//     const { row, col } = square;

//     gameBoard[row][col] = player;
//   });

//   return gameBoard;
// }