import { configureStore } from '@reduxjs/toolkit';
const counterReducer  = {}//from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
