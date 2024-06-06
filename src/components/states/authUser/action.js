import api from '../../../utils/api';

export const authRequest = () => ({
  type: 'AUTH_REQUEST',
});

export const authSuccess = (token, user) => ({
  type: 'AUTH_SUCCESS',
  payload: { token, user },
});

export const authFailure = (error) => ({
  type: 'AUTH_FAILURE',
  payload: error,
});

export const asyncLoginUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await api.post('/users/login', credentials);
    const { token, user } = response.data;
    dispatch(authSuccess(token, user));

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    dispatch(authFailure(error.message));
    alert(error.response.data.message);
    return null;
  }
};

export const asyncRegisterUser = (userData) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await api.post('/users/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data.user });
    return response.data.user;
  } catch (error) {
    dispatch(authFailure(error.message));
    alert(error.response.data.message);
    return null;
  }
};

export const asyncGoogleAuth = () => async () => {
  window.location.href = '/auth/google';
};

export const asyncGoogleLoginCallback = (token, user) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const response = await api.post('/auth/login/success', {
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
