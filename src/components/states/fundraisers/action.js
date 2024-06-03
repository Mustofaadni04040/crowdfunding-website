import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionTypes = {
  FETCH_FUNDRAISERS: 'FETCH_FUNDRAISERS',
  SET_FUNDRAISERS: 'SET_FUNDRAISERS',
  REMOVE_SELECTED_FUNDRAISER: 'REMOVE_SELECTED_FUNDRAISER',
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

export const setFundraisers = (fundraisers) => ({
  type: ActionTypes.SET_FUNDRAISERS,
  payload: fundraisers,
});
export const removeSelectedFundraiser = () => ({
  type: ActionTypes.REMOVE_SELECTED_FUNDRAISER,
});
