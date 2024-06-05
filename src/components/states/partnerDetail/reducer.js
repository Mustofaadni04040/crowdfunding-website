import { ActionTypes } from './action';

const initialState = {
  partner: null,
  loading: false,
};

const partnerDetailReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PARTNER:
      return { ...state, partner: action.payload, loading: false };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default partnerDetailReducer;
