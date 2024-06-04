import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FundraiserItemDetail from './FundraiserItemDetail';
import { asyncFetchFundraiserDetail } from '../../states/fundraiserDetail/action';

export default function FundraiserListDetail() {
  const fundraiser = useSelector((state) => state.fundraiserDetail.fundraiser);
  const loading = useSelector((state) => state.fundraiserDetail.loading);
  console.log(fundraiser);
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(asyncFetchFundraiserDetail(_id));
  }, [dispatch, _id]);

  if (!fundraiser) return null;

  return (
    <section className="container mx-auto p-5">
      <div className="md:grid md:gap-5 md:grid-cols-3">
        {loading ? null : (
          <>
            <div className="mb-5 w-full col-span-2">
              <img
                src={fundraiser.image}
                alt="donation-detail"
                className="w-full h-80 lg:h-[550px] object-center rounded-md"
              />
            </div>

            <div className="w-full md:col-span-1">
              <FundraiserItemDetail data={fundraiser} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
