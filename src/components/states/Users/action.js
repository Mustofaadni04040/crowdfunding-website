import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

const getToken = (getState) => {
  const { authUser } = getState();
  return authUser?.token;
};

export const getUsers =
  (page = 1, limit = 9) =>
  async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.get('/users', {
        params: { page, limit },
      });
      dispatch({ type: 'GET_USERS', payload: response.data });
    } catch (error) {
      console.error(error);
    }
    dispatch(hideLoading());
  };

export const getUserById = (id) => async (dispatch, getState) => {
  dispatch(showLoading());
  const token = getToken(getState);
  try {
    const response = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: 'GET_USER', payload: response.data });
  } catch (error) {
    console.error(error);
  }
  dispatch(hideLoading());
};

export const updateUser = (id, userData) => async (dispatch, getState) => {
  dispatch(showLoading());
  const token = getToken(getState);
  try {
    await api.put(`/users/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: 'UPDATE_USER', payload: userData });
  } catch (error) {
    console.error(error);
  }
  dispatch(hideLoading());
};

export const deleteUser = (id) => async (dispatch, getState) => {
  dispatch(showLoading());
  const token = getToken(getState);
  try {
    await api.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: 'DELETE_USER', payload: id });
  } catch (error) {
    console.error(error);
  }
  dispatch(hideLoading());
};
