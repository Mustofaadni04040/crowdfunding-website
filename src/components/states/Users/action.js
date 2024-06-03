import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

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

export const getUserById = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await api.get(`/users/${id}`);
    dispatch({ type: 'GET_USER', payload: response.data });
  } catch (error) {
    console.error(error);
  }
  dispatch(hideLoading());
};

export const createUser = (userData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await api.post('/users', userData);
    dispatch({ type: 'CREATE_USER', payload: response.data });
  } catch (error) {
    console.error(error);
  }
  dispatch(hideLoading());
};

export const updateUser = (id, userData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await api.put(`/users/${id}`, userData);
    dispatch({ type: 'UPDATE_USER', payload: response.data });
  } catch (error) {
    console.error(error);
  }
  dispatch(hideLoading());
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.delete(`/users/${id}`);
    dispatch({ type: 'DELETE_USER', payload: id });
  } catch (error) {
    console.error(error);
  }
  dispatch(hideLoading());
};
