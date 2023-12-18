import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';
// import authSlice from './auth-slice';

const store = configureStore({
  // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;