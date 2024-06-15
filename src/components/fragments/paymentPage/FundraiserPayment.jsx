import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import CurrencyInput from 'react-currency-input-field';
import PaymentButton from '../../elements/paymentButton/PaymentButton';
import { asyncCreateDonation } from '../../states/payment/action';
import formattedTotal from '../../../utils/FormattedTotal';

export default function FundraiserPayment() {
  const [isFocused, setIfocused] = useState(false);
  const [errorMinAmount, setErrorMinAmount] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.payment.loading);

  const MINIMUM_DONATION_AMOUNT = 10000;

  function handleFocus() {
    setIfocused(true);
  }

  function handleBlur() {
    setIfocused(false);
  }

  const handleDonation = (e) => {
    e.preventDefault();
    const fundraiserId = window.location.pathname.split('/').pop();
    const amount = document.getElementById('amount').value.replace(/\D/g, '');
    console.log(amount);
    const isAnonymous = document.getElementById('isAnonymous').checked;
    if (parseFloat(amount) < MINIMUM_DONATION_AMOUNT) {
      setErrorMinAmount(
        `Mohon isi ${formattedTotal(MINIMUM_DONATION_AMOUNT)} atau lebih `,
      );
    } else {
      setErrorMinAmount(null);
      dispatch(asyncCreateDonation({ fundraiserId, amount, isAnonymous }));
    }
  };

  return (
    <section className="max-w-[900px] mx-auto p-5 mb-10">
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleDonation}
      >
        <h1 className="mb-2 text-xl text-slate-500 font-bold md:text-2xl">
          Masukan Nominal Donasi
        </h1>
        <div
          className={`w-full flex items-center gap-2 mb-2 px-2 py-0 bg-white border-none ring-1 ${
            isFocused ? 'ring-primary' : 'ring-slate-300'
          } outline-none rounded-md`}
        >
          <CurrencyInput
            id="amount"
            defaultValue={0}
            decimalsLimit={2}
            intlConfig={{ locale: 'id-ID', currency: 'IDR' }}
            min={MINIMUM_DONATION_AMOUNT}
            required
            className="w-full text-sm bg-white border-none outline-none focus:ring-0 placeholder:text-sm placeholder:text-slate-700 text-slate-700"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        {errorMinAmount && (
          <p className="text-xs text-red-500 mb-5">{errorMinAmount}</p>
        )}
        <label
          htmlFor="isAnonymous"
          className="flex items-center gap-3 mb-5 self-start text-sm text-primary"
        >
          <input
            type="checkbox"
            id="isAnonymous"
            className="w-3 h-3 rounded-sm focus:ring-0"
          />
          Tampilkan sebagai donatur anonim
        </label>

        <PaymentButton
          submit
          classname="w-full p-2 rounded flex items-center justify-center bg-primary text-white hover:bg-[#228211] duration-200"
        >
          {loading ? (
            <>
              <Spinner color="success" size="sm" /> Loading...
            </>
          ) : (
            'Lanjutkan Pembayaran'
          )}
        </PaymentButton>
      </form>
    </section>
  );
}
