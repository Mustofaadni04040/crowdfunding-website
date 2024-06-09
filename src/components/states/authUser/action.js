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

export const updateAccount = (user) => ({
  type: 'UPDATE_ACCOUNT',
  payload: user,
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

// http://localhost:6005/
// https://crowdfunding-backend-drab.vercel.app/
export const asyncGoogleAuth = () => async () => {
  window.location.href =
    'https://crowdfunding-backend-drab.vercel.app/auth/google';
};

export const asyncLogout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const asyncGoogleLogin = (token, navigate) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await fetch(
      'https://crowdfunding-backend-drab.vercel.app/auth/login/success',
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      },
    );

    if (response.status === 200) {
      const resObject = await response.json();
      dispatch(authSuccess(token, resObject.user));
      localStorage.setItem('user', JSON.stringify(resObject.user));
      localStorage.setItem('token', token);
      navigate('/');
    } else {
      throw new Error('Failed to authenticate user');
    }
  } catch (error) {
    dispatch(authFailure(error.message));

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
    dispatch(authFailure(error));
    alert(error);
  } finally {
    dispatch(hideLoading());
  }
};

export const asyncUpdateAccount = (token, user, _id) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await api.put(`/users/${_id}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(updateAccount(response.data.user));

    localStorage.setItem('user', JSON.stringify(response.data.user));
  } catch (error) {
    console.log(error);
  }
};
