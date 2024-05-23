import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import HomePageData from '../../../json/HomePage.json';
import useIsDesktop from '../../../hooks/useIsDesktop';
import Button from '../../elements/button/Button';
import FundraisersItem from './FundraisersItem';
import formattedTotal from '../../../utils/FormattedTotal';

export default function FundraisersList() {
  const isDesktop = useIsDesktop(1024);

  return (
    <section className="container p-5 mx-auto mt-7 w-full">
      <div className="flex items-center justify-between">
        <h1 className="uppercase mb-7 text-2xl text-primary font-bold lg:text-4xl">
          Mari Bantu Mereka
        </h1>

        {isDesktop && (
          <Link
            to="/fundraisers"
            className="flex items-center justify-between text-sm text-slate-500"
          >
            Lihat Semua
            <MdKeyboardDoubleArrowRight />
          </Link>
        )}
      </div>
      <div className="flex flex-col md:flex-row md:gap-3 lg:flex-wrap">
        {HomePageData.fundraisers.map((fundraiser) => (
          <FundraisersItem
            key={fundraiser._id}
            data={fundraiser}
            formattedTotal={formattedTotal}
          />
        ))}
      </div>

      {!isDesktop && (
        <div className="flex justify-center mt-5">
          <Button classname="button-primary">
            <Link to="/fundraisers">Lihat Semua</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
