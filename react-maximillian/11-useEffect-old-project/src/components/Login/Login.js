import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    };
  };

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    };
  };

  return {
    value: '',
    isValid: false
  }
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASS') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    };
  };

  if (action.type === 'PASS_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    };
  };
  return {
    value: '',
    isValid: false
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();


  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });
  const [formIsValid, setFormIsValid] = useState(false);


  useEffect(() => {
    console.log('EFFECT');

    return () => {
      console.log('EFFECT CLEAN UP');
    };
  }, [])

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    //debouncing 
    const identifier = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)
    return () => {
      clearTimeout(identifier);

      console.log('CLEAN UP');
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      //the val is the extra payload. it can be named payload also as part of a convention
      val: event.target.value
    })


    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({
      type: 'USER_PASS',
      val: event.target.value
    })

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: 'INPUT_BLUR'
    })

  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type: 'PASS_BLUR'
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
