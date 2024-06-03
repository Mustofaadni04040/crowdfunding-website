import { ActionTypes } from './action';

const fundraiserDetailReducer = (fundraiser = null, action = {}) => {
  switch (action.type) {
    case ActionTypes.SELECTED_FUNDRAISER:
      return action.payload;
    default:
      return fundraiser;
  }
};

export default fundraiserDetailReducer;
