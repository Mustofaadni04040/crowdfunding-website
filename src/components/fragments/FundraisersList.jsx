import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Pagination } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import useIsDesktop from '../../hooks/useIsDesktop';
import Button from '../elements/button/Button';
import FundraisersItem, { dataShape } from './FundraisersItem';
import formattedTotal from '../../utils/FormattedTotal';
import { asyncFetchFundraisers } from '../states/fundraisers/action';

export default function FundraisersList({ namePage }) {
  const isDesktop = useIsDesktop(1024);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const fundraisers = useSelector((state) => state.fundraisers);
  console.log(fundraisers);

  const ITEMS_PER_PAGE = namePage === 'home' ? 3 : 6;

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    if (Array.isArray(fundraisers)) {
      return fundraisers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }
    return startIndex;
  };

  useEffect(() => {
    dispatch(asyncFetchFundraisers());
  }, [dispatch]);

  return (
    <section className="container py-5 px-1 md:p-5 mx-auto">
      <RenderHeader
        // header section
        namePage={namePage}
        isDesktop={isDesktop}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        fundraisers={fundraisers}
      />

      <div className="flex flex-col gap-5 md:flex-row md:gap-5 md:flex-wrap">
        {getCurrentPageData().map((fundraiser) => (
          <FundraisersItem
            key={fundraiser._id}
            data={fundraiser}
            formattedTotal={formattedTotal}
          />
        ))}
      </div>

      <RenderPagination
        // pagination
        namePage={namePage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        fundraisers={fundraisers}
      />
      <RenderButtonAll isDesktop={isDesktop} namePage={namePage} />
    </section>
  );
}

export const RenderHeader = ({ isDesktop, namePage, fundraisers }) => (
  <>
    <div className="flex items-center justify-between">
      <div className="mb-7">
        <h1 className="uppercase text-2xl text-primary font-bold lg:text-4xl">
          Mari Bantu Mereka
        </h1>
        {namePage !== 'home' && (
          <p className="text-sm text-slate-500">
            Menampilkan{' '}
            <strong className="text-slate-700">
              {fundraisers.length < 6 ? fundraisers.length : 6}
            </strong>{' '}
            donasi dari{' '}
            <strong className="text-slate-700">{fundraisers.length}</strong>{' '}
            donasi
          </p>
        )}
      </div>

      {isDesktop && namePage === 'home' && (
        <a
          href="/fundraisers"
          className="flex items-center justify-between text-sm text-slate-500"
        >
          Lihat Semua
          <MdKeyboardDoubleArrowRight />
        </a>
      )}
    </div>
  </>
);

// render pagination when namePage is not home
export const RenderPagination = ({
  namePage,
  currentPage,
  setCurrentPage,
  ITEMS_PER_PAGE,
  fundraisers,
}) => (
  <>
    {namePage !== 'home' && (
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(fundraisers.length / ITEMS_PER_PAGE)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    )}
  </>
);

// render button all when namePage is home
export const RenderButtonAll = ({ isDesktop, namePage }) => (
  <>
    {!isDesktop && namePage === 'home' && (
      <div className="flex justify-center mt-5">
        <Button classname="button-primary">
          <a href="/fundraisers">Lihat Semua</a>
        </Button>
      </div>
    )}
  </>
);

RenderHeader.propTypes = {
  namePage: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  fundraisers: PropTypes.arrayOf(PropTypes.shape(dataShape)).isRequired,
};
RenderPagination.propTypes = {
  namePage: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  ITEMS_PER_PAGE: PropTypes.number.isRequired,
  fundraisers: PropTypes.arrayOf(PropTypes.shape(dataShape)).isRequired,
};
RenderButtonAll.propTypes = {
  namePage: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};
FundraisersList.propTypes = {
  namePage: PropTypes.string.isRequired,
};
