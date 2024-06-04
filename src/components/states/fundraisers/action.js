import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionTypes = {
  FETCH_FUNDRAISERS: 'FETCH_FUNDRAISERS',
};

export const asyncFetchFundraisers = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await api.get('/fundraisers');
    dispatch({
      type: ActionTypes.FETCH_FUNDRAISERS,
      payload: response.data.fundraisers,
    });
  } catch (error) {
    alert(error);
  }
  dispatch(hideLoading());
};
