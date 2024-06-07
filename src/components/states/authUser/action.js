import { hideLoading } from 'react-redux-loading-bar';
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

export const asyncGoogleLogin = () => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await api.get('/auth/login/success');
    const { token, user } = response.data;
    dispatch(authSuccess(token, user));

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(authFailure(error.message));
    alert(error.response.data.message);
  }
};

export const asyncDeleteUser = (_id, token) => async (dispatch) => {
  try {
    await api.delete(`/users/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: 'DELETE_USER', payload: _id });

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(hideLoading());
  }
};

export const asyncLogout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
