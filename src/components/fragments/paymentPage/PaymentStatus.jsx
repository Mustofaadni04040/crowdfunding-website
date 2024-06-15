import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncPaymentNotify } from '../../states/payment/action';
import Button from '../../elements/button/Button';

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
  return (
    <div className="container h-screen mx-auto flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="../../../../assets/process-payment.png"
          alt="payment-process-icon"
          className="w-40 mb-3 md:w-52"
        />
        <div className="text-center mb-5">
          <p className="text-2xl font-bold text-slate-700 md:text-3xl">
            Terima kasih atas donasi anda
          </p>
          <p className="text-sm text-slate-500">
            Saat ini pembayaran anda sedang diproses
          </p>
        </div>
        <Button classname="flex items-center justify-center py-1 px-3 rounded bg-primary text-white hover:bg-[#228211] duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
          <Link to="/">Kembali ke Home</Link>
        </Button>
      </div>
    </div>
  );
}
