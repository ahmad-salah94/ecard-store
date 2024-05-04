// src/app/store.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import websiteReducer from './slices/websiteSlice';
import authReducer from './slices/auth';

const rootReducer = combineReducers({
  website: websiteReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
