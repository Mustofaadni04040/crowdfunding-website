import { ActionTypes } from './action';

const fundraiserReducer = (fundraisers = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_FUNDRAISERS:
      return { ...fundraisers, ...action.payload };
    case ActionTypes.FETCH_FUNDRAISERS:
      return action.payload;
    default:
      return fundraisers;
  }
};

export default fundraiserReducer;
