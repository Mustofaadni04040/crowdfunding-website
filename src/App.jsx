import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/fragments/header/Header';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import NewsPage from './pages/NewsPage';
import PartnerPage from './pages/PartnerPage';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donations" element={<DonationPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/partners" element={<PartnerPage />} />
        </Routes>
      </Router>
    </>
  );
}
