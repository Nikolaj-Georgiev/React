import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

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
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

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
      val: event.target.value
    })
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_PASS',
      val: event.target.value
    })
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR'
    })

  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'PASS_BLUR'
    })
  };


  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id='email'
          label='E-Mail'
          type='email'
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid}
          value={emailState.value} />
        <Input
          ref={passwordInputRef}
          id='password'
          label='Password'
          type='password'
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
          value={passwordState.value} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
