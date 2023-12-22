import classes from './Hero.module.css';
import smallPigImage from '../assets/logo-trans.png';
import bigPigImage from '../assets/logo-trans-bigger.png';

import Li from '../UI/Li';

export default function Hero() {
  return (
    <>
      <section className={classes['section-hero']}>
        <div className={classes.hero}>
          <div className={classes['hero-text-box']}>
            <div>
              <h1 className={classes['heading-primary']}>
                Money Matters: A Web App for Family Expense Management and
                Savings Goals
              </h1>
            </div>
            <div>
              <ul className={classes['hero-features-list']}>
                <Li className={classes['hero-feature-item']}>
                  <ion-icon
                    class={classes['hero-icon']}
                    name='pie-chart-outline'
                    size='large'
                  ></ion-icon>
                  <p className={classes['hero-feature-text']}>
                    Monthly budget for your household
                  </p>
                </Li>
                <Li className={classes['hero-feature-item']}>
                  <ion-icon
                    class={classes['hero-icon']}
                    name='wallet-outline'
                    size='large'
                  ></ion-icon>
                  <p className={classes['hero-feature-text']}>
                    Set up family savings goals
                  </p>
                </Li>
                <Li className={classes['hero-feature-item']}>
                  <ion-icon
                    class={classes['hero-icon']}
                    name='bulb-outline'
                    size='large'
                  ></ion-icon>
                  <p className={classes['hero-feature-text']}>
                    Get personalized tips and insights
                  </p>
                </Li>
                <Li className={classes['hero-feature-item']}>
                  <ion-icon
                    class={classes['hero-icon']}
                    name='cloud-done-outline'
                    size='large'
                  ></ion-icon>
                  <p className={classes['hero-feature-text']}>
                    Access your data from any device
                  </p>
                </Li>
                <Li className={classes['hero-feature-item']}>
                  <ion-icon
                    class={classes['hero-icon']}
                    name='people-outline'
                    size='large'
                  ></ion-icon>
                  <p className={classes['hero-feature-text']}>
                    Share your progress with your family
                  </p>
                </Li>
              </ul>
            </div>
          </div>

          <div className={classes['hero-img-box']}>
            <picture>
              <source
                srcSet={smallPigImage}
                type='image/png'
              />
              <source
                srcSet={bigPigImage}
                type='image/png'
              />

              <img
                src={bigPigImage}
                alt='Gold coin entering a piggy bank'
                className={classes['hero-img']}
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}
