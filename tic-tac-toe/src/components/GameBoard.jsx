import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleUserChoice(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // N.B. prevGameBoard is automatically passed to the setGameBoard - this is the previous state of gameBoard!!!
      const updatedBoard = [...prevGameBoard].map((initialArr) => [
        ...initialArr,
      ]);
      console.log(updatedBoard);
      updatedBoard[rowIndex][colIndex] = 'X'; // N.B. state that depends on object or arrays should be updated in an immutable way!!!
      return updatedBoard;
    });
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleUserChoice(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
