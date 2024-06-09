const initialState = {
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return { ...state, loading: true, error: null };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'REGISTER_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'AUTH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
