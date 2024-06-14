import api from '../../../utils/api';

export const ActionTypes = {
  CREATE_DONATIONS_REQUEST: 'CREATE_DONATIONS_REQUEST',
  CREATE_DONATIONS_SUCCESS: 'CREATE_DONATIONS_SUCCESS',
  CREATE_DONATIONS_FAILURE: 'CREATE_DONATIONS_FAILURE',
  NOTIFY_PAYMENT_REQUEST: 'NOTIFY_PAYMENT_REQUEST',
  NOTIFY_PAYMENT_SUCCESS: 'NOTIFY_PAYMENT_SUCCESS',
  NOTIFY_PAYMENT_FAILURE: 'NOTIFY_PAYMENT_FAILURE',
};

export const asyncCreateDonation = (donationData) => async (dispatch) => {
  dispatch({ type: ActionTypes.CREATE_DONATIONS_REQUEST });

  try {
    const response = await api.post('/donations', donationData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const { data } = response;
    console.log(data);
    if (response.status === 201) {
      dispatch({ type: ActionTypes.CREATE_DONATIONS_SUCCESS, payload: data });
      window.location.href = data.data.redirectUrl;
    } else {
      dispatch({
        type: ActionTypes.CREATE_DONATIONS_FAILURE,
        payload: data.message,
      });
      alert(`Failed to create donation: ${data.message}`);
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.CREATE_DONATIONS_FAILURE,
      payload: error.message,
    });
    alert(`Failed to create donation: ${error}`);
  }
};

export const asyncPaymentNotify = (paymentData) => async (dispatch) => {
  dispatch({ type: ActionTypes.NOTIFY_PAYMENT_REQUEST });

  try {
    const response = await api.post(
      '/payment-notification/donation',
      paymentData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );

    const { data } = response;
    console.log(data);
    if (response === 200) {
      dispatch({ type: ActionTypes.NOTIFY_PAYMENT_SUCCESS, payload: data });
      console.log('Payment status updated successfully', data);
    } else {
      dispatch({
        type: ActionTypes.NOTIFY_PAYMENT_FAILURE,
        payload: data.message,
      });
      console.error('Failed to updated payment status', data);
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.NOTIFY_PAYMENT_FAILURE,
      payload: error.message,
    });
    alert(`Failed to updated payment notification: ${error}`);
  }
};
