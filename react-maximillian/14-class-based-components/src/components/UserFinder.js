// import { Fragment, useState, useEffect } from 'react';
import { Component, Fragment } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';


class UserFinder extends Component {
  static contextType = UsersContext;// this works only for one state!!! if you have multiple you need to find another workaround

  constructor () {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    //HTTP request....
    this.setState({
      filteredUsers: this.context.users // which might have come from a server
    })
  } // this method will run only once

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      })
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

/*
const UserFinder = () => {
  useContext()
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {}, []) // same logic with http request etc. 

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};
*/
export default UserFinder;