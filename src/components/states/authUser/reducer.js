const initialState = {
  users: [],
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
  loading: null,
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
        token: action.payload,
        user: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'AUTH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
        user: null,
      };
    case 'UPDATE_ACCOUNT':
      return {
        ...state,
        user: action.payload,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user,
        ),
        loading: false,
      };
    case 'LOGOUT':
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
