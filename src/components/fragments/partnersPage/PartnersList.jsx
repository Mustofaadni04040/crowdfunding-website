import React, { useState } from 'react';
import PartnersData from '../../../json/PartnersData.json';
import PartnerItem from './PartnerItem';
import Button from '../../elements/button/Button';

export default function PartnersList() {
  const [currentCard, setCurrentCard] = useState(6);

  function getCurrentPageData() {
    return PartnersData.partners.slice(0, currentCard);
  }

  const handleShowMore = () => {
    setCurrentCard(currentCard + 6);
  };
  return (
    <section className="container p-5 mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl text-primary font-bold lg:text-4xl">
          Mitra Kami
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {getCurrentPageData().map((partner) => (
          <PartnerItem key={partner._id} {...partner} />
        ))}
      </div>

      {getCurrentPageData().length < PartnersData.partners.length && (
        <div className="flex justify-center mt-7">
          <Button classname="button-primary" onClick={handleShowMore}>
            Lihat Lebih Banyak
          </Button>
        </div>
      )}
    </section>
  );
}
