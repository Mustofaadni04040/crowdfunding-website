import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import PaymentButton from '../../elements/paymentButton/PaymentButton';
import { asyncCreateDonation } from '../../states/payment/action';
import formattedTotal from '../../../utils/FormattedTotal';

export default function FundraiserPayment() {
  const [amount, setAmount] = useState('');
  const [isFocused, setIfocused] = useState(false);
  const [errorMinAmount, setErrorMinAmount] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.payment.loading);

  const MINIMUM_DONATION_AMOUNT = 10000;

  const handleFocus = () => setIfocused(true);
  const handleBlur = () => setIfocused(false);

  const handleAmountChange = (e) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/\D/g, '');
    const formattedValue = new Intl.NumberFormat('id-ID').format(cleanedValue);
    setAmount(formattedValue);
  };

  const handleDonation = (e) => {
    e.preventDefault();
    const fundraiserId = window.location.pathname.split('/').pop();
    const numericAmount = parseInt(amount.replace(/\D/g, ''), 10);
    const isAnonymous = document.getElementById('isAnonymous').checked;

    if (numericAmount < MINIMUM_DONATION_AMOUNT) {
      setErrorMinAmount(
        `Mohon isi ${formattedTotal(MINIMUM_DONATION_AMOUNT)} atau lebih `,
      );
    } else {
      setErrorMinAmount(null);
      dispatch(
        asyncCreateDonation({
          fundraiserId,
          amount: numericAmount,
          isAnonymous,
        }),
      );
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
          <p className="text-slate-500">Rp</p>
          <input
            id="amount"
            value={amount}
            type="number"
            onChange={handleAmountChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="w-full outline-none border-none focus:ring-0 bg-white placeholder:text-sm placeholder:text-slate-700 text-sm text-slate-700"
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
