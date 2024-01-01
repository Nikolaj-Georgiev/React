import { useState } from 'react';
import * as classes from './Card.module.css';

export default function Card({
  img,
  imgAlt,
  title,
  frontDescription,
  backDescription,
  icon,
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
      <div
        className={
          isFrontSide ? classes.inner : `${classes.inner} ${classes.clicked} `
        }
      >
        {isFrontSide && (
          <div className={classes.front}>
            <div>
              <img
                src={img}
                alt={imgAlt}
              />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{frontDescription}</p>
            </div>
          </div>
        )}
        {!isFrontSide && (
          <div className={classes.back}>
            <span>
              <ion-icon
                class={classes.icon}
                name={icon}
                size='large'
              ></ion-icon>
            </span>
            <p>{backDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}
