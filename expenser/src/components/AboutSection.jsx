import Card from '../UI/Card';
import { CARDS_INFO } from '../Util/config';
import * as classes from './AboutSection.module.css';

export default function AboutSectionPage() {
  return (
    <section className={classes.about}>
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
