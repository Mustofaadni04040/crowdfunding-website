import { ActionTypes } from './action';

const initialState = {
  fundraisers: [],
  fundraiser: null,
};

const fundraiserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_FUNDRAISERS:
      return {
        ...state,
        fundraisers: action.payload,
      };

    case ActionTypes.FETCH_FUNDRAISER_BY_ID:
      return {
        ...state,
        fundraiser: action.payload,
      };

    case ActionTypes.CREATE_FUNDRAISER:
      return {
        ...state,
        fundraisers: [...state.fundraisers, action.payload],
      };

    case ActionTypes.EDIT_FUNDRAISER:
      return {
        ...state,
        fundraisers: state.fundraisers.map((fundraiser) =>
          fundraiser._id === action.payload._id ? action.payload : fundraiser,
        ),
      };

    case ActionTypes.DELETE_FUNDRAISER:
      return {
        ...state,
        fundraisers: state.fundraisers.filter(
          (fundraiser) => fundraiser._id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default fundraiserReducer;
