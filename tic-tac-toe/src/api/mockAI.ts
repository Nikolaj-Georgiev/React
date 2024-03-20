// src/api/mockAI.ts
import { Square, SquareValue } from '../types';

export const getAIMove = async (
  gameBoard: SquareValue[][]
): Promise<Square> => {
  console.log(gameBoard);
  const availableMoves: Square[] = gameBoard.flatMap((row, rowIndex) =>
    row
      .map((_, columnIndex) => ({ row: rowIndex, column: columnIndex }))
      .filter(({ row, column }) => gameBoard[row][column] === null)
  );
  console.log(availableMoves);
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Randomly select an available move
  const move =
    availableMoves[Math.floor(Math.random() * availableMoves.length)];
  console.log(move);
  return move;
};
