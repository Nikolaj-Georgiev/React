import React from 'react';
import { SquareValue } from '../types';

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: SquareValue[][];
}

const GameBoard: React.FC<GameBoardProps> = ({ onSelectSquare, board }) => {
  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((player, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={player !== null}
                >
                  {player}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
