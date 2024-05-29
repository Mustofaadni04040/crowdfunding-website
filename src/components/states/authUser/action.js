import axios from 'axios';

const API_URL = 'https://crowdfunding-backend-drab.vercel.app';

export const authRequest = () => ({
  type: 'AUTH_REQUEST',
});

export const authSuccess = (token, userData) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(userData));

  return {
    type: 'AUTH_SUCCESS',
    payload: { token, userData },
  };
};

export const authFailure = (error) => ({
  type: 'AUTH_FAILURE',
  payload: error,
});

export const asyncLoginUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    dispatch(authSuccess(response.data.token, response.data.user));
    return response.data.user;
  } catch (error) {
    dispatch(authFailure(error.message));
    alert(error.response.data.message);
    return null;
  }
};

export const asyncRegisterUser = (userData) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    dispatch(authSuccess(response.data.user));
    return response.data.user;
  } catch (error) {
    dispatch(authFailure(error.message));
    alert(error.response.data.message);
    return null;
  }
};

export const asyncGoogleAuth = () => async () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const asyncGoogleLoginCallback = (token, user) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const response = await axios.post(`${API_URL}/auth/login/success`, {
      token,
      user,
    });
    console.log('google login success', response.data.message);
    dispatch(authSuccess(response.data.token, response.data.user));
  } catch (error) {
    console.error('Google auth error:', error.response?.data || error.message);
    dispatch(authFailure(error.message));
    alert(error.response.data.message);
    return null;
  }
};

export const asyncLogout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
