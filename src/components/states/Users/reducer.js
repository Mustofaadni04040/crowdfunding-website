const initialState = {
  users: [],
  user: null,
  totalPages: 1,
  currentPage: 1,
};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.users,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user,
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };
    default:
      return state;
  }
};

export default usersReducer;
