import Card from '../UI/Card.jsx';
import { CARDS_INFO } from '../Util/config.js';
import * as classes from './AboutSection.module.css';

export default function AboutSectionPage() {
  return (
    <section className={classes.about}>
      <h2 className={classes.heading}>
        How Expenser Helps You Track and Manage Your Expenses
      </h2>
      <div className={classes.cards}>
        {CARDS_INFO.map((card) => (
          <Card
            key={card.id}
            img={card.front.img}
            imgAlt={card.front.imgAlt}
            title={card.front.title}
            frontDescription={card.front.description}
            backDescription={card.back.description}
            icon={card.back.icon}
          />
        ))}
      </div>
    </section>
  );
}
