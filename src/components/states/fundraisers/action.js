import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../../utils/api';

const getToken = (getState) => {
  const { authUser } = getState();
  return authUser?.token;
};

export const ActionTypes = {
  FETCH_FUNDRAISERS: 'FETCH_FUNDRAISERS',
  FETCH_FUNDRAISER_BY_ID: 'FETCH_FUNDRAISER_BY_ID',
  CREATE_FUNDRAISER: 'CREATE_FUNDRAISER',
  EDIT_FUNDRAISER: 'EDIT_FUNDRAISER',
  DELETE_FUNDRAISER: 'DELETE_FUNDRAISER',
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

export const asyncFetchFundraiserById = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await api.get(`/fundraisers/${id}`);
    dispatch({
      type: ActionTypes.FETCH_FUNDRAISER_BY_ID,
      payload: response.data.fundraiser,
    });
  } catch (error) {
    alert(error);
  }
  dispatch(hideLoading());
};

export const asyncCreateFundraiser =
  (fundraiserData) => async (dispatch, getState) => {
    dispatch(showLoading());
    const token = getToken(getState);
    try {
      const responsePromise = api.post('/fundraisers', fundraiserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.promise(responsePromise, {
        pending: 'Membuat fundraiser ...',
        success: 'Berhasil membuat fundraiser 👌',
        error: 'Gagal membuat fundraiser 🤯',
      });

      const response = await responsePromise;
      dispatch({
        type: ActionTypes.CREATE_FUNDRAISER,
        payload: response.data.fundraiser,
      });
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

export const asyncEditFundraiser =
  (id, fundraiserData) => async (dispatch, getState) => {
    dispatch(showLoading());
    const token = getToken(getState);

    try {
      const responsePromise = api.put(`/fundraisers/${id}`, fundraiserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.promise(responsePromise, {
        pending: 'Editing fundraiser...',
        success: 'Berhasil mengedit fundraiser 👌',
        error: 'Gagal mengedit fundraiser 🤯',
      });

      const response = await responsePromise;
      dispatch({
        type: ActionTypes.EDIT_FUNDRAISER,
        payload: response.data.fundraiser,
      });
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };

export const asyncDeleteFundraiser = (id) => async (dispatch, getState) => {
  dispatch(showLoading());
  const token = getToken(getState);

  try {
    const responsePromise = api.delete(`/fundraisers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.promise(responsePromise, {
      pending: 'Deleting fundraiser...',
      success: 'Berhasil menghapus fundraiser',
      error: 'Gagal menghapus fundraiser',
    });

    await responsePromise;
    dispatch({
      type: ActionTypes.DELETE_FUNDRAISER,
      payload: id,
    });
  } catch (error) {
    alert(error);
  }
  dispatch(hideLoading());
};
