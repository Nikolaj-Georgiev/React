import React, { useState, ChangeEvent } from 'react';

// Define the props type
interface PlayerProps {
  initialName: string;
  symbol: 'X' | 'O'; // Assuming the symbol can only be 'X' or 'O'
  isActive: boolean;
  onChangeName: (symbol: 'X' | 'O', newName: string) => void;
}

const Player: React.FC<PlayerProps> = ({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) => {
  const [playerName, setPlayerName] = useState<string>(initialName);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditClick = (): void => {
    // Change the state only after the update has been applied
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPlayerName(event.target.value);
  };

  const editablePlayerName = isEditing ? (
    <input
      type='text'
      required
      value={playerName}
      onChange={handleChange}
      autoFocus // Automatically focus the input when it appears
    />
  ) : (
    <span className='player-name'>{playerName}</span>
  );

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;

// import { useState } from 'react';

// export default function Player({
//   initialName,
//   symbol,
//   isActive,
//   onChangeName,
// }) {
//   const [playerName, setPlayerName] = useState(initialName);
//   const [isEditing, setIsEditing] = useState(false);

//   function handleEditClick() {
//     setIsEditing((editing) => !editing);

//     if (isEditing) {
//       onChangeName(symbol, playerName);
//     }
//   }

//   function handleChange(event) {
//     setPlayerName(event.target.value);
//   }

//   let editablePlayerName = <span className='player-name'>{playerName}</span>;
//   // let btnCaption = 'EDIT';

//   if (isEditing) {
//     editablePlayerName = (
//       <input
//         type='text'
//         required
//         value={playerName}
//         onChange={handleChange}
//       />
//     );
//     // btnCaption = 'SAVE';
//   }

//   return (
//     <li className={isActive ? 'active' : undefined}>
//       <span className='player'>
//         {/* {!isEditing ? (
//           <span className='player-name'>{name}</span>
//         ) : (
//           <input></input>
//         )} */}
//         {editablePlayerName}
//         <span className='player-symbol'>{symbol}</span>
//       </span>
//       <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
//     </li>
//   );
// }
