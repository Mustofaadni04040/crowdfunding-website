import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncFetchFundraiserDetail } from '../../states/fundraiserDetail/action';

export default function FundraiserPaymentDetail() {
  const fundraiser = useSelector((state) => state.fundraiserDetail.fundraiser);
  const loading = useSelector((state) => state.fundraiserDetail.loading);
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(asyncFetchFundraiserDetail(_id));
  }, [dispatch, _id]);

  if (!fundraiser) return null;

  return (
    <section className="max-w-[900px] mx-auto p-5 grid grid-cols-1 gap-5 md:grid-cols-2 md:items-center">
      {loading ? null : (
        <>
          <div className="w-full h-60 mx-auto">
            <img
              src={fundraiser.image}
              alt="donation-detail"
              className="w-full h-full object-center"
            />
          </div>

          <div>
            <p className="text-sm text-primary md:text-base">
              Kamu akan berdonasi untuk:
            </p>
            <h1 className="text-xl font-bold text-slate-500 mb-2 py-2 lg:text-2xl border-b-[1px] border-slate-200">
              {fundraiser.title}
            </h1>
            <div className="flex items-center gap-3">
              <img
                src="../../../assets/logo.svg"
                alt="logo"
                className="w-7 h-7 md:w-10 md:h-10"
              />
              <p className="text-xs text-primary md:text-sm">
                Bersama Palestina
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
