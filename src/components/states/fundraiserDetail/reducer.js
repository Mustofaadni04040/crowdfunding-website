import { ActionTypes } from './action';

const initialState = {
  fundraiser: null,
  loading: false,
};

const fundraiserDetailReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SELECTED_FUNDRAISER:
      return { ...state, fundraiser: action.payload, loading: false };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default fundraiserDetailReducer;
