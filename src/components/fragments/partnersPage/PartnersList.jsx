import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartnerItem from './PartnerItem';
import Button from '../../elements/button/Button';
import { asyncFetchPartners } from '../../states/partners/action';

export default function PartnersList() {
  const [currentCard, setCurrentCard] = useState(6);
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partners.partners);

  useEffect(() => {
    dispatch(asyncFetchPartners());
  }, [dispatch]);

  function getCurrentPageData() {
    return partners.slice(0, currentCard);
  }

  const handleShowMore = () => {
    setCurrentCard(currentCard + 6);
  };
  return (
    <section className="container p-5 mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl text-primary font-bold lg:text-4xl">
          Mitra Penyaluran Dana Kami
        </h1>
        <p className="text-sm text-slate-500">
          Menampilkan{' '}
          <strong className="text-slate-700">
            {partners.length < 6 ? partners.length : 6}
          </strong>{' '}
          mitra dari{' '}
          <strong className="text-slate-700">{partners.length}</strong> mitra
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {partners.map((partner) => (
          <PartnerItem key={partner._id} {...partner} />
        ))}
      </div>

      {getCurrentPageData().length < partners.length && (
        <div className="flex justify-center mt-7">
          <Button classname="button-primary" onClick={handleShowMore}>
            Lihat Lebih Banyak
          </Button>
        </div>
      )}
    </section>
  );
}
