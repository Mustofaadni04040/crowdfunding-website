import React from 'react';
import FundraiserPaymentDetail from '../components/fragments/paymentPage/FundraiserPaymentDetail';
import FundraiserPayment from '../components/fragments/paymentPage/FundraiserPayment';

export default function PaymentDonation() {
  return (
    <main>
      <FundraiserPaymentDetail />
      <FundraiserPayment />
    </main>
  );
}
