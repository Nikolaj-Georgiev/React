import React, { useState } from 'react';
import GameBoard from './components/GameBoard'; // Ensure this is .tsx
import Player from './components/Player'; // Ensure this is .tsx
import Log from './components/Log'; // Ensure this is .tsx
import GameOver from './components/GameOver'; // Ensure this is .tsx
import { WINNING_COMBINATIONS, PLAYERS, INITIAL_GAME_BOARD } from './config'; // Ensure config is properly typed
import * as helper from './helpers'; // Ensure helpers are properly typed
import { Players, SquarePosition } from './types'; // Assuming these types are defined in your types.ts

const App: React.FC = () => {
  const [players, setPlayers] = useState<Players>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<
    Array<{ square: SquarePosition; player: 'X' | 'O' }>
  >([]);

  let activePlayer = helper.deriveActivePlayer(gameTurns);
  const gameBoard = helper.deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);
  const winner = helper.deriveWinner(gameBoard, players, WINNING_COMBINATIONS);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex: number, colIndex: number): void => {
    setGameTurns((prevTurns) => [
      {
        square: { row: rowIndex, column: colIndex },
        player: activePlayer as 'X' | 'O',
      },
      ...prevTurns,
    ]);
  };

  const handleRestart = (): void => {
    setGameTurns([]);
    setPlayers(PLAYERS);
  };

  const handlePlayerNameSymbol = (symbol: 'X' | 'O', newName: string): void => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  };

  return (
    <main>
      <div id='game-container'>
        <ol
          id='players'
          className='highlight-player'
        >
          <Player
            initialName={players.X}
            symbol='X'
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameSymbol}
          />
          <Player
            initialName={players.O}
            symbol='O'
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameSymbol}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner ?? undefined}
            onRestart={handleRestart}
          />
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;

// import { useState } from 'react';
// import GameBoard from './components/GameBoard.jsx';
// import Player from './components/Player.jsx';
// import Log from './components/Log.jsx';
// import GameOver from './components/GameOver.jsx';
// import { WINNING_COMBINATIONS, PLAYERS, INITIAL_GAME_BOARD } from './config.js';
// import * as helper from './helpers.js';

// function App() {
//   const [players, setPlayers] = useState<Record<string, string>>(PLAYERS);
//   const [gameTurns, setGameTurns] = useState<
//     { square: { row: number; col: number }; player: string }[]
//   >([]);

//   let activePlayer = helper.deriveActivePlayer(gameTurns);
//   const gameBoard = helper.deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);
//   const winner = helper.deriveWinner(gameBoard, players, WINNING_COMBINATIONS);
//   const hasDraw = gameTurns.length === 9 && !winner;

//   function handleSelectSquare(rowIndex: number, colIndex: number) {
//     setGameTurns((prevTurns) => {
//       let currentPlayer = helper.deriveActivePlayer(prevTurns);

//       const updatedTurns = [
//         { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
//         ...prevTurns,
//       ];

//       return updatedTurns;
//     });
//   }

//   function handleRestart() {
//     setGameTurns([]);
//     setPlayers(() => {
//       return {
//         X: 'Player 1',
//         O: 'Player 2',
//       };
//     });
//   }

//   function handlePlayerNameSymbol(symbol: string, newName: string) {
//     setPlayers((prevPlayers) => {
//       return {
//         ...prevPlayers,
//         [symbol]: newName,
//       };
//     });
//   }

//   return (
//     <main>
//       <div id='game-container'>
//         <ol
//           id='players'
//           className='highlight-player'
//         >
//           <Player
//             initialName={PLAYERS.X}
//             symbol='X'
//             isActive={activePlayer === 'X'}
//             onChangeName={handlePlayerNameSymbol}
//           />
//           <Player
//             initialName={PLAYERS.O}
//             symbol='O'
//             isActive={activePlayer === 'O'}
//             onChangeName={handlePlayerNameSymbol}
//           />
//         </ol>
//         {(winner || hasDraw) && (
//           <GameOver
//             winner={winner}
//             onRestart={handleRestart}
//           />
//         )}
//         <GameBoard
//           onSelectSquare={handleSelectSquare}
//           // activePlayerSymbol={activePlayer} // old code, before optimizations
//           board={gameBoard}
//         />
//       </div>
//       <Log turns={gameTurns} />
//     </main>
//   );
// }

// export default App;

// function App() {
//   const [players, setPlayers] = useState(PLAYERS);
//   const [gameTurns, setGameTurns] = useState([]);

//   let activePlayer = helper.deriveActivePlayer(gameTurns);
//   const gameBoard = helper.deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);
//   const winner = helper.deriveWinner(gameBoard, players, WINNING_COMBINATIONS);
//   const hasDraw = gameTurns.length === 9 && !winner;

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameTurns((prevTurns) => {
//       let currentPlayer = helper.deriveActivePlayer(prevTurns);

//       const updatedTurns = [
//         { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
//         ...prevTurns,
//       ];

//       return updatedTurns;
//     });
//   }

//   function handleRestart() {
//     setGameTurns([]);
//     setPlayers(() => {
//       return {
//         X: 'Player 1',
//         O: 'Player 2',
//       };
//     });
//   }

//   function handlePlayerNameSymbol(symbol, newName) {
//     setPlayers((prevPlayers) => {
//       return {
//         ...prevPlayers,
//         [symbol]: newName,
//       };
//     });
//   }

//   return (
//     <main>
//       <div id='game-container'>
//         <ol
//           id='players'
//           className='highlight-player'
//         >
//           <Player
//             initialName={PLAYERS.X}
//             symbol='X'
//             isActive={activePlayer === 'X'}
//             onChangeName={handlePlayerNameSymbol}
//           />
//           <Player
//             initialName={PLAYERS.O}
//             symbol='O'
//             isActive={activePlayer === 'O'}
//             onChangeName={handlePlayerNameSymbol}
//           />
//         </ol>
//         {(winner || hasDraw) && (
//           <GameOver
//             winner={winner}
//             onRestart={handleRestart}
//           />
//         )}
//         <GameBoard
//           onSelectSquare={handleSelectSquare}
//           // activePlayerSymbol={activePlayer} // old code, before optimizations
//           board={gameBoard}
//         />
//       </div>
//       <Log turns={gameTurns} />
//     </main>
//   );
// }

// export default App;
