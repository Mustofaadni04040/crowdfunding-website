import React from 'react';
import DonaturItem from './DonaturItem';
import DonaturData from '../../../json/DonaturData.json';

export default function DonaturList() {
  return (
    <section className="container p-5 mx-auto">
      <h1 className="border-b-2 pb-2 border-primary w-max text-slate-500 font-bold">
        Donatur
      </h1>

      <div className="w-full mt-5">
        {DonaturData.donations.map((item) => (
          <DonaturItem key={item._id} donatur={item} />
        ))}
      </div>
    </section>
  );
}
