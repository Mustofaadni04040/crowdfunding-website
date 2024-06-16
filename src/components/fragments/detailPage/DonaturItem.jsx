import React from 'react';
import PropTypes from 'prop-types';
import join from '../../../utils/index';
import formattedTotal from '../../../utils/FormattedTotal';

export default function DonaturItem({ donatur }) {
  return (
    <div className="border-b-[1px] last:border-none p-5 border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-bold text-slate-500">
            {donatur.isAnonymous ? 'Anonim' : donatur.user.displayName}
          </p>
          <p className="text-xs text-slate-500">{join(donatur.date)}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-bold text-slate-500">Donasi</p>
          <p className="text-xs text-slate-500">
            {formattedTotal(donatur.amount)}
          </p>
        </div>
      </div>
    </div>
  );
}

const userDonaturShape = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
DonaturItem.propTypes = {
  donatur: PropTypes.shape(userDonaturShape).isRequired,
};
