// src/api/mockAI.ts
import { minimax } from '../helpers';
import { Square, SquareValue } from '../types';

export const getAIMove = async (
  gameBoard: SquareValue[][],
  depth: number
): Promise<Square> => {
  let bestVal = Infinity;
  let bestMove: Square = { row: -1, column: -1 };

  gameBoard.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === null) {
        gameBoard[rowIndex][colIndex] = 'O'; // AI plays as 'O'
        let moveVal = minimax(gameBoard, false, -Infinity, Infinity, depth);
        gameBoard[rowIndex][colIndex] = null;

        if (moveVal < bestVal) {
          bestMove = { row: rowIndex, column: colIndex };
          bestVal = moveVal;
        }
      }
    });
  });

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return bestMove;
};

// export const getAIMove = async (
//   gameBoard: SquareValue[][]
// ): Promise<Square> => {
//   console.log(gameBoard);
//   const availableMoves: Square[] = gameBoard.flatMap((row, rowIndex) =>
//     row
//       .map((_, columnIndex) => ({ row: rowIndex, column: columnIndex }))
//       .filter(({ row, column }) => gameBoard[row][column] === null)
//   );
//   console.log(availableMoves);
//   // Simulate API call delay
//   await new Promise((resolve) => setTimeout(resolve, 500));

//   // Randomly select an available move
//   const move =
//     availableMoves[Math.floor(Math.random() * availableMoves.length)];
//   console.log(move);
//   return move;
// };
