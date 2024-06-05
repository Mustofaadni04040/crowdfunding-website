import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionTypes = {
  SELECTED_PARTNER: 'FETCH_PARTNER_DETAIL',
  SET_LOADING: 'SET_LOADING',
};

export const setLoading = (loading) => ({
  type: ActionTypes.SET_LOADING,
  payload: loading,
});

export const asyncSelectedPartner = (_id) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(showLoading());
  try {
    const response = await api.get(`/mitra/${_id}`);
    dispatch({
      type: ActionTypes.SELECTED_PARTNER,
      payload: response.data.mitra,
    });
  } catch (error) {
    alert(error);
  }
  dispatch(hideLoading());
  dispatch(setLoading(false));
};
