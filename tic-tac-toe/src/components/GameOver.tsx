// src/components/GameOver.tsx
import React from 'react';

interface GameOverProps {
  winner?: string;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ winner, onRestart }) => {
  const name = winner?.toUpperCase() ?? null;

  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner ? <p>{name} won!</p> : <p>It&apos;s a draw!</p>}
      <button onClick={onRestart}>New game!</button>
    </div>
  );
};

export default GameOver;
