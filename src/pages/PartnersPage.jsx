import React from 'react';
import Breadcrumbs from '../components/elements/breadcrumb/Breadcrumbs';
import PartnersList from '../components/fragments/partnersPage/PartnersList';

export default function PartnerPage() {
  return (
    <main>
      <Breadcrumbs />
      <PartnersList />
    </main>
  );
}
