import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionTypes = {
  SELECTED_FUNDRAISER: 'SELECTED_FUNDRAISER',
  SET_LOADING: 'SET_LOADING',
};

export const setLoading = (loading) => ({
  type: ActionTypes.SET_LOADING,
  payload: loading,
});

export const asyncFetchFundraiserDetail = (_id) => async (dispatch) => {
  dispatch(showLoading());
  dispatch(setLoading(true));
  try {
    const response = await api.get(`/fundraisers/${_id}`);
    dispatch({
      type: ActionTypes.SELECTED_FUNDRAISER,
      payload: response.data.fundraiser,
    });
  } catch (error) {
    alert(error);
  }
  dispatch(hideLoading());
  dispatch(setLoading(false));
};
