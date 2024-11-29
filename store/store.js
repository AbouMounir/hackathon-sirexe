// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import exploitantReducer from './exploitantSlice';

export const store = configureStore({
  reducer: {
    exploitants: exploitantReducer,
  },
});
