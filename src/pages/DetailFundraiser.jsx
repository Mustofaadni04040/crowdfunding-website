import React from 'react';
import Breadcrumbs from '../components/elements/breadcrumb/Breadcrumbs';
import FundraiserListDetail from '../components/fragments/detailPage/FundraiserListDetail';
import DonaturList from '../components/fragments/detailPage/DonaturList';

export default function DetailFundraiser() {
  return (
    <main>
      <Breadcrumbs />
      <FundraiserListDetail />
      <DonaturList />
    </main>
  );
}
