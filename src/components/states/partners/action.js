import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionTypes = {
  FETCH_PARTNERS: 'FETCH_PARTNERS',
  SET_LOADING: 'SET_LOADING',
};

export const setLoading = (loading) => ({
  type: ActionTypes.SET_LOADING,
  payload: loading,
});

export const asyncFetchPartners = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await api.get('/mitra');
    dispatch({
      type: ActionTypes.FETCH_PARTNERS,
      payload: response.data.mitra,
    });
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};
