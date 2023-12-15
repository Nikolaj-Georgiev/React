// import redux from 'redux';
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {

  //////////////////////////////////////
  // N.B. objects that we return from the reducer will override the existing one. It will not merge but it will replace the old one with a new one!!!!!!!!!

  // !!! NEVER CHANGE THE EXISTING STATE !!!
  // !!! ALWAYS OVERRIDE IT BY RETURNING A BRAND NEW STATE OBJECT !!!

  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
};

// const store = redux.createStore(counterReducer);

const store = createStore(counterReducer);

export default store;