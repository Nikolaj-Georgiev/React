import React from 'react';

interface GameModeModalProps {
  onSelectMode: (isAI: boolean) => void;
}

const GameModeModal: React.FC<GameModeModalProps> = ({ onSelectMode }) => {
  return (
    <div className='modal'>
      <h2>Choose Your Opponent</h2>
      <button onClick={() => onSelectMode(false)}>Human</button>
      <button onClick={() => onSelectMode(true)}>Computer</button>
    </div>
  );
};

export default GameModeModal;
