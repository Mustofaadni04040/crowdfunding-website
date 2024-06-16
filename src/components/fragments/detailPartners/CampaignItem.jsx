import React from 'react';
import PropTypes from 'prop-types';

export default function CampaignItem({ campaign }) {
  return (
    <div className="border-b-[1px] p-5 border-slate-200 last:border-b-0">
      <p className="font-bold text-sm text-slate-500">{campaign}</p>
    </div>
  );
}

CampaignItem.propTypes = {
  campaign: PropTypes.string.isRequired,
};
