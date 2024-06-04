import React from 'react';
import { useSelector } from 'react-redux';
import DonaturItem from './DonaturItem';

export default function DonaturList() {
  const fundraiser = useSelector((state) => state.fundraiserDetail.fundraiser);
  const loading = useSelector((state) => state.fundraiserDetail.loading);

  if (!fundraiser) return null;

  return (
    <section className="container p-5 mx-auto">
      <h1 className="border-b-2 pb-2 border-primary w-max text-slate-500 font-bold">
        Donatur
      </h1>

      {loading ? null : (
        <div className="w-full mt-5">
          {fundraiser.donations.length === 0 ? (
            <p className="text-slate-500 text-center">Belum ada donatur</p>
          ) : (
            fundraiser.donations.map((item) => (
              <DonaturItem key={item._id} donatur={item} />
            ))
          )}
        </div>
      )}
    </section>
  );
}
