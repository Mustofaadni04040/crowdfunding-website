import React from 'react';
import Breadcrumbs from '../components/elements/breadcrumb/Breadcrumbs';
import FundraisersList from '../components/fragments/FundraisersList';

export default function FundraisersPage() {
  return (
    <main>
      <Breadcrumbs />
      <FundraisersList namePage="fundraisers" />
    </main>
  );
}
