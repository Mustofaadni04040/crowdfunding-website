import { ActionTypes } from './action';

const initialState = {
  partners: [],
  loading: false,
};

const partnersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_PARTNERS:
      return { ...state, partners: action.payload, loading: false };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default partnersReducer;
