import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* with Link/anchor would be the correct way but it is made like this to show that it can */}
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
