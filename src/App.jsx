import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/fragments/Header';
import HomePage from './pages/HomePage';
import FundraisersPage from './pages/FundraisersPage';
import PartnersPage from './pages/PartnersPage';
import FooterSection from './components/fragments/Footer';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fundraisers" element={<FundraisersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
        <FooterSection />
      </Router>
    </>
  );
}
