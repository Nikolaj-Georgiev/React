import { useState } from 'react';
import * as classes from './Card.module.css';

export default function Card({
  img,
  title,
  frontDescription,
  backDescription,
  ...props
}) {
  const [isFrontSide, setIsFrontSide] = useState(true);

  const handleClick = () => {
    setIsFrontSide((isFrontSide) => !isFrontSide);
  };

  return (
    <div
      className={classes.card}
      onClick={handleClick}
    >
      <div className='inner'>
        {isFrontSide && (
          <div className='front'>
            <img
              src={img}
              alt={title}
            />
            <h3>{title}</h3>
            <p>{frontDescription}</p>
          </div>
        )}
        {!isFrontSide && (
          <div className='back'>
            <p>{backDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}
