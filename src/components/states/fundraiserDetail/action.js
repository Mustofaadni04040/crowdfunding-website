import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionTypes = {
  SELECTED_FUNDRAISER: 'SELECTED_FUNDRAISER',
};

export const asyncFetchFundraiserDetail = (_id) => async (dispatch) => {
  dispatch(showLoading());
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
};
