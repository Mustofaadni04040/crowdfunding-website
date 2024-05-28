import { Card } from 'flowbite-react';
import React from 'react';
import PropTypes from 'prop-types';
import { CgCalendarDates } from 'react-icons/cg';
import { FaRegHandshake } from 'react-icons/fa';

export default function PartnerItem({ imageUrl, title, activeFrom, campaign }) {
  return (
    <Card className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-3">
        <img
          src={imageUrl}
          alt={title}
          className="mx-auto rounded-full w-20 h-20"
        />
        <p className="text-sm font-bold text-slate-500 md:text-lg">{title}</p>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-1">
          <CgCalendarDates className="text-primary" />
          <p className="text-[12px] text-slate-500">
            Aktif Sejak: {activeFrom}
          </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <FaRegHandshake className="text-primary" />
          <p className="text-[12px] text-slate-500">Campaign: {campaign}</p>
        </div>
      </div>
    </Card>
  );
}

PartnerItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  activeFrom: PropTypes.string.isRequired,
  campaign: PropTypes.string.isRequired,
};
