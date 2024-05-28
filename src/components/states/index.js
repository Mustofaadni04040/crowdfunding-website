import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './authUser/reducer';

const store = configureStore({
  reducer: {
    authUser: authReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
