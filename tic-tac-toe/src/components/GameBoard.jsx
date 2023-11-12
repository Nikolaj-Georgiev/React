// import { useState } from 'react';

export default function GameBoard({ onSelectSquare, board }) {
  /////////////////////
  //N.B. think and work in React! You should MANAGE as LITTLE STATE as needed and try to DERIVE as MUCH information and as many values, as possible!!!!
  /////////////////////

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((player, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={() => handleUserChoice(rowIndex, colIndex)}> */}
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
}

// old code before optimizations

// add prop{activePlayerSymbol} as a param to GameBoard
// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleUserChoice(rowIndex, colIndex) {
//   setGameBoard((prevGameBoard) => {
//     // N.B. prevGameBoard is automatically passed to the setGameBoard - this is the previous state of gameBoard!!!
//     const updatedBoard = [...prevGameBoard].map((initialArr) => [
//       ...initialArr,
//     ]);
//     updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // N.B. state that depends on object or arrays should be updated in an immutable way!!!
//     return updatedBoard;
//   });
//   onSelectSquare();
// }

// some upgrade on the optimizations :)
// for (const turn of turns) {
//   const { square, player } = turn;
//   const { row, col } = square;

//   gameBoard[row][col] = player;
// }
