import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './authUser/reducer';
import fundraiserReducer from './fundraisers/reducer';
import fundraiserDetailReducer from './fundraiserDetail/reducer';
import usersReducer from './Users/reducer';

const store = configureStore({
  reducer: {
    authUser: authReducer,
    loadingBar: loadingBarReducer,
    fundraisers: fundraiserReducer,
    fundraiserDetail: fundraiserDetailReducer,
    users: usersReducer,
  },
});

export default store;
