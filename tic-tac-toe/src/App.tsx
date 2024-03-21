import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS, PLAYERS, INITIAL_GAME_BOARD } from './config';
import * as helper from './helpers';
import { Players, SquarePosition } from './types';
import { getAIMove } from './api/mockAI';
import GameModeModal from './components/GameModeModal';

const App: React.FC = () => {
  const [players, setPlayers] = useState<Players>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<
    Array<{ square: SquarePosition; player: 'X' | 'O' }>
  >([]);
  const [isGameModeSelected, setIsGameModeSelected] = useState<boolean>(false);
  const [isAIMode, setIsAiMode] = useState<boolean>(false);

  let activePlayer = helper.deriveActivePlayer(gameTurns);
  const gameBoard = helper.deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);
  const winner = helper.deriveWinner(gameBoard, players, WINNING_COMBINATIONS);
  const hasDraw = gameTurns.length === 9 && !winner;

  useEffect(() => {
    const makeAIMove = async () => {
      if (isAIMode && !winner && activePlayer === 'O') {
        const depth = 6;
        const aiMove = await getAIMove(gameBoard, depth);
        handleSelectSquare(aiMove.row, aiMove.column);
      }
    };

    if (isGameModeSelected) {
      makeAIMove();
    }
  }, [gameTurns, isAIMode, isGameModeSelected, activePlayer, gameBoard]);

  const handleGameModeSelect = (isAI: boolean) => {
    setIsAiMode(isAI);
    setIsGameModeSelected(true);
  };

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
    setIsGameModeSelected(false);
    setIsAiMode(false);
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
        {!isGameModeSelected && (
          <GameModeModal onSelectMode={handleGameModeSelect} />
        )}
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
