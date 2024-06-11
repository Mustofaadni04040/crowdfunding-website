import React, { useState } from 'react';
import PaymentButton from '../../elements/paymentButton/PaymentButton';

export default function FundraiserPayment() {
  const [isFocused, setIfocused] = useState(false);

  function handleFocus() {
    setIfocused(true);
  }

  function handleBlur() {
    setIfocused(false);
  }

  return (
    <section className="max-w-[900px] mx-auto p-5">
      <form className="w-full flex flex-col gap-5 items-center">
        <h1 className="text-xl text-slate-500 font-bold md:text-2xl">
          Masukan Nominal Donasi
        </h1>
        <div
          className={`w-full flex items-center gap-2 px-2 py-0 bg-white border-none ring-1 ${
            isFocused ? 'ring-primary' : 'ring-slate-200'
          } outline-none rounded-md`}
        >
          <p className="text-slate-500">Rp</p>
          <input
            type="number"
            className="w-full outline-none border-none focus:ring-0 bg-white placeholder:text-sm placeholder:text-slate-700 text-sm text-slate-700"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <label
          htmlFor="isAnonymous"
          className="flex items-center gap-3 self-start text-sm text-primary"
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
          Lanjutkan Pembayaran
        </PaymentButton>
      </form>
    </section>
  );
}
