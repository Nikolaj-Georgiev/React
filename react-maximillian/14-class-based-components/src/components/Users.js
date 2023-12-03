import { Component } from 'react';
// import {  useState } from 'react';
import User from './User';

import classes from './Users.module.css';



class Users extends Component {
  constructor () {
    super();
    this.state = {
      showUsers: true,
      more: 'Test'
    };//in class components state ALWAYS is an OBJECT!!! and also has to be property named 'state'! -> N.B.
  }
  toggleUsersHandler() {
    // this.state.showUsers = !this.state.showUsers; this is NOT how you do it!!! instead you call a special method this.setState()
    // this.setState({showUsers: false}) // always pass an object { } behind the scenes React MERGES the ne object with the old one, DOES NOT OVERRIDE IT!!!
    // or you can pass a function:
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers
      }
    })
  }
  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);// REACT OVERRIDE THE OLD STATE WITH THE NEW STATE WHEN setShowUsers() is called!!! /or any setState() function/ 

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};
*/
export default Users;
