import React, { useEffect } from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CampaignList from './CampaignList';
import { asyncSelectedPartner } from '../../states/partnerDetail/action';
import join from '../../../utils';

export default function PartnersDetail() {
  const partner = useSelector((state) => state.partnerDetail.partner);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.partnerDetail.loading);
  const { _id } = useParams();

  useEffect(() => {
    dispatch(asyncSelectedPartner(_id));
  }, [dispatch]);

  if (!partner) return null;

  return (
    <section className="container mx-auto p-5">
      {loading ? null : (
        <>
          <div className="flex flex-col items-center gap-1 mb-10 md:flex-row md:gap-5">
            <div className="w-32 h-32">
              <img
                src={partner.image}
                alt="partner-profile"
                className="rounded-full object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center gap-1 md:items-start">
              <p className="text-primary font-bold text-lg md:text-xl">
                {partner.name}
              </p>

              <div className="flex items-center justify-center gap-1">
                <CgCalendarDates className="text-primary" />
                <p className="text-[12px] text-slate-500 md:text-sm">
                  Bergabung Sejak: {join(partner.createdAt)}
                </p>
              </div>
            </div>
          </div>

          <div>
            <CampaignList campaign={partner.campaign} />
          </div>
        </>
      )}
    </section>
  );
}
