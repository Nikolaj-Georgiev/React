import React from 'react';

interface GameModeModalProps {
  onSelectMode: (isAI: boolean) => void;
}

const GameModeModal: React.FC<GameModeModalProps> = ({ onSelectMode }) => {
  return (
    <div id='modal'>
      <h2>Choose Your Opponent</h2>
      <button onClick={() => onSelectMode(true)}>Solo vs Computer</button>
      <button onClick={() => onSelectMode(false)}>Multiplayer vs Human</button>
    </div>
  );
};

export default GameModeModal;
