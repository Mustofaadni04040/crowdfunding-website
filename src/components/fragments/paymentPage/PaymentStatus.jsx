/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncPaymentNotify } from '../../states/payment/action';

export default function PaymentStatus() {
  const dispatch = useDispatch();

  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      order_id: params.get('order_id'),
      status_code: params.get('status_code'),
      transaction_status: params.get('transaction_status'),
    };
  }

  useEffect(() => {
    const { order_id, status_code, transaction_status } = getQueryParams();
    if (order_id && status_code && transaction_status) {
      dispatch(
        asyncPaymentNotify({ order_id, status_code, transaction_status }),
      );
    }
  }, [dispatch]);
  return <h1>Processing Payment</h1>;
}
