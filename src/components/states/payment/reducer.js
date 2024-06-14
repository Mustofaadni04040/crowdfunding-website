import { ActionTypes } from './action';

const initialState = {
  donation: null,
  paymentStatus: null,
  loading: false,
  error: null,
};

const paymentReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.CREATE_DONATIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.CREATE_DONATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        donation: action.payload,
      };
    case ActionTypes.CREATE_DONATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ActionTypes.NOTIFY_PAYMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.NOTIFY_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentStatus: action.payload,
      };
    case ActionTypes.NOTIFY_PAYMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
