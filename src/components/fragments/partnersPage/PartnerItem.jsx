import { Card } from 'flowbite-react';
import React from 'react';
import PropTypes from 'prop-types';
import { CgCalendarDates } from 'react-icons/cg';
import { FaRegHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import join from '../../../utils';

export default function PartnerItem({ image, name, createdAt, campaign, _id }) {
  const navigate = useNavigate();
  const onDonationsClick = () => {
    navigate(`/mitra/${_id}`);
    window.scrollTo(0, 0);
  };
  const onFundraiserPress = (e) => {
    if (e.key === 'Enter' && e.key === ' ') {
      onDonationsClick();
      navigate(`/mitra/${_id}`);
      window.scrollTo(0, 0);
    }
  };
  return (
    <div
      onClick={onDonationsClick}
      onKeyDown={onFundraiserPress}
      tabIndex={0}
      role="button"
    >
      <Card className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-3">
          <img
            src={image}
            alt={name}
            className="mx-auto rounded-full w-20 h-20 object-cover"
          />
          <p className="text-sm font-bold text-primary md:text-lg">{name}</p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1">
            <CgCalendarDates className="text-primary" />
            <p className="text-[12px] text-slate-500">
              Aktif Sejak: {join(createdAt)}
            </p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaRegHandshake className="text-primary" />
            <p className="text-[12px] text-slate-500">Tentang: {campaign}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

PartnerItem.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  campaign: PropTypes.string.isRequired,
};
