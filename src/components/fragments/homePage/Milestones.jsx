import React from 'react';
import { useSelector } from 'react-redux';
import formattedTotal from '../../../utils/FormattedTotal';

export default function Milestones() {
  const fundraisers = useSelector((state) => state.fundraisers.fundraisers);

  const totalCollectedDonations = fundraisers.reduce(
    (total, fundraiser) => total + fundraiser.collectedAmount,
    0,
  );

  const donationsTotal = fundraisers.reduce(
    (sum, donation) => sum + donation.donations.length,
    0,
  );

  return (
    <section className="container px-5 mx-auto">
      <div className="flex flex-col mx-auto text-center lg:flex-row lg:max-w-[700px]">
        <div className="w-full py-2 mx-auto border-b rounded-tl-lg rounded-tr-lg border-slate-300 bg-primary lg:rounded-tr-none lg:rounded-bl-lg lg:border-b-0 lg:border-r lg:py-5">
          <p className="text-sm text-white lg:text-lg">Program Donasi</p>
          <p className="text-sm font-bold text-white lg:text-xl">
            {fundraisers.length}
          </p>
        </div>
        <div className="w-full py-2 mx-auto border-b border-slate-300 bg-primary lg:border-b-0 lg:border-r lg:py-5">
          <p className="text-sm text-white lg:text-lg">Dana Terkumpul</p>
          <p className="text-sm font-bold text-white lg:text-xl">
            {formattedTotal(totalCollectedDonations)}
          </p>
        </div>
        <div className="w-full py-2 mx-auto rounded-bl-lg rounded-br-lg bg-primary lg:rounded-bl-none lg:rounded-tr-lg lg:py-5">
          <p className="text-sm text-white lg:text-lg">Donatur Terdaftar</p>
          <p className="text-sm font-bold text-white lg:text-xl">
            {donationsTotal}
          </p>
        </div>
      </div>
    </section>
  );
}
