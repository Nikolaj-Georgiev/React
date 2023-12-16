import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  }
})




const store = configureStore({
  // reducer: { counter: counterSlice.reducer } // if we have multiple slices we can pass object wit every slice
  reducer: counterSlice.reducer
});

export default store;