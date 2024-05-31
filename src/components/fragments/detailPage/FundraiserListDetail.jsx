import React from 'react';
import FundraiserItemDetail from './FundraiserItemDetail';

export default function FundraiserListDetail() {
  return (
    <section className="container mx-auto p-5">
      <div className="md:grid md:gap-5 md:grid-cols-3">
        <div className="mb-5 w-full col-span-2">
          <img
            src="../../assets/donations/donation-2.png"
            alt="donation-detail"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="w-full md:col-span-1">
          <FundraiserItemDetail />
        </div>
      </div>
    </section>
  );
}
