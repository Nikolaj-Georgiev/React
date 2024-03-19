// src/components/Log.tsx
import React from 'react';
import { Square } from '../types'; // Assuming this is defined in your types

interface Turn {
  square: Square;
  player: 'X' | 'O';
}

interface LogProps {
  turns: Turn[];
}

const Log: React.FC<LogProps> = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}> {/* Using index as a key since turns might not have unique identifiers */}
          {turn.player} selected position {turn.square.row + 1}, {turn.square.column + 1}
        </li>
      ))}
    </ol>
  );
};

export default Log;


// export default function Log({ turns }) {
//   return (
//     <ol id='log'>
//       {turns.map((turn) => (
//         <li key={`${turn.square.row} ${turn.square.col}`}>
//           {turn.player} selected position{' '}
//           {`${turn.square.row + 1}, ${turn.square.col + 1}`}
//         </li>
//       ))}
//     </ol>
//   );
// }
