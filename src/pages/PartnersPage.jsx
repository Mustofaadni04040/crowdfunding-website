import React from 'react';
import Breadcrumbs from '../components/elements/breadcrumb/Breadcrumbs';
import PartnersList from '../components/fragments/partners/PartnersList';

export default function PartnerPage() {
  return (
    <main>
      <Breadcrumbs />
      <PartnersList />
    </main>
  );
}
