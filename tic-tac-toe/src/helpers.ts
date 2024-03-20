import { SquareValue } from './types';

export function deriveActivePlayer(turns: { player: string }[]): string {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

export function deriveWinner(
  gameBoard: SquareValue[][],
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
  initialGameBoard: SquareValue[][],
  gameTurns?: { square: { row: number; column: number }; player: SquareValue }[]
): SquareValue[][] {
  // Create a deep copy of the initial game board
  const gameBoard: SquareValue[][] = JSON.parse(
    JSON.stringify(initialGameBoard)
  );

  gameTurns?.forEach((turn) => {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  });

  return gameBoard;
}
