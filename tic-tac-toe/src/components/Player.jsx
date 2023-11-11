import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  // let btnCaption = 'EDIT';

  if (isEditing) {
    editablePlayerName = (
      <input
        type='text'
        required
        value={playerName}
        onChange={handleChange}
      />
    );
    // btnCaption = 'SAVE';
  }

  return (
    <li>
      <span className='player'>
        {/* {!isEditing ? (
          <span className='player-name'>{name}</span>
        ) : (
          <input></input>
        )} */}
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
