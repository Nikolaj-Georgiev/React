import { PLAYERS, WINNING_COMBINATIONS } from './config';
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

export const evaluateBoard = (gameBoard: SquareValue[][]): number => {
  const winner = deriveWinner(gameBoard, PLAYERS, WINNING_COMBINATIONS);

  if (winner === PLAYERS['O']) {
    // AI wins
    return +1;
  } else if (winner === PLAYERS['X']) {
    // Human wins
    return -1;
  }

  // Check for a draw
  const isDraw = gameBoard.every((row) => row.every((cell) => cell !== null));
  if (isDraw) {
    return 0; // Draw
  }

  // Game is not yet decided
  return 0;
};

export const minimax = (
  board: SquareValue[][],
  isMaximizing: boolean,
  alpha: number,
  beta: number,
  depth: number
): number => {
  const evaluation = evaluateBoard(board);

  // Check for terminal state (win/loss/draw)
  if (evaluation !== 0) return evaluation;
  if (depth === 0) return 0;

  // Check for draw
  const isDraw = board.every((row) => row.every((cell) => cell !== null));
  if (isDraw) return 0; // Draw condition

  if (isMaximizing) {
    let best = -Infinity;
    best = Math.max(best, minimax(board, false, alpha, beta, depth - 1));

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
        if (board[rowIndex][colIndex] === null) {
          board[rowIndex][colIndex] = 'O'; // AI plays as 'O'
          best = Math.max(best, minimax(board, false, alpha, beta, depth - 1));
          board[rowIndex][colIndex] = null;
          alpha = Math.max(alpha, best);
          if (beta <= alpha) return best; // Pruning
        }
      }
    }
    return best;
  } else {
    let best = Infinity;
    best = Math.max(best, minimax(board, false, alpha, beta, depth - 1));

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
        if (board[rowIndex][colIndex] === null) {
          board[rowIndex][colIndex] = 'X'; // Human plays as 'X'
          best = Math.min(best, minimax(board, true, alpha, beta, depth - 1));
          board[rowIndex][colIndex] = null;
          beta = Math.min(beta, best);
          if (beta <= alpha) return best; // Pruning
        }
      }
    }
    return best;
  }
};
