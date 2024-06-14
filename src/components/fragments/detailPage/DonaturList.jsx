import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DonaturItem from './DonaturItem';

export default function DonaturList() {
  const fundraiser = useSelector((state) => state.fundraiserDetail.fundraiser);
  const loading = useSelector((state) => state.fundraiserDetail.loading);
  const [filteredDonaturs, setFilteredDonaturs] = useState([]);

  useEffect(() => {
    if (fundraiser && fundraiser.donations) {
      const compeletedDonatursStatus = fundraiser.donations.filter(
        (donatur) => donatur.status === 'completed',
      );
      setFilteredDonaturs(compeletedDonatursStatus);
    }
  }, [fundraiser]);

  if (!fundraiser) return null;

  return (
    <section className="container p-5 mx-auto">
      {loading ? null : (
        <h1 className="border-b-2 pb-2 border-primary w-max text-slate-500 font-bold">
          Donatur{' '}
          <span className="ml-2 px-3 rounded-xl bg-white border border-primary text-xs text-primary font-bold">
            {filteredDonaturs.length}
          </span>
        </h1>
      )}

      {loading ? null : (
        <div className="w-full mt-5">
          {fundraiser.donations.length === 0 ? (
            <div className="flex flex-col items-center">
              <img
                src="../../../assets/empty-donation.png"
                alt="empty-donation-icon"
                className="w-36 h-36"
              />
              <p className="text-slate-500 text-lg lg:text-xl">
                Jadilah yang pertama berdonasi
              </p>
            </div>
          ) : (
            filteredDonaturs.map((item) => (
              <DonaturItem key={item._id} donatur={item} />
            ))
          )}
        </div>
      )}
    </section>
  );
}
