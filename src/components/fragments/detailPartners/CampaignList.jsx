import React from 'react';
import PropTypes from 'prop-types';
import CampaignItem from './CampaignItem';

export default function CampaignList({ campaign }) {
  return (
    <section className="container p-5 mx-auto">
      <h1 className="border-b-2 pb-2 border-primary w-max text-slate-500 font-bold">
        Campaign
      </h1>

      <div>
        <CampaignItem campaign={campaign} />
      </div>
    </section>
  );
}

CampaignList.propTypes = {
  campaign: PropTypes.string.isRequired,
};
