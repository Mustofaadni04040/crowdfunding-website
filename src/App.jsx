import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/fragments/Header';
import HomePage from './pages/HomePage';
import FundraisersPage from './pages/FundraisersPage';
import PartnersPage from './pages/PartnersPage';
import FooterSection from './components/fragments/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GoogleLoginRedirect from './components/fragments/GoogleLoginRedirect';
import Loading from './components/elements/loading/Loading';
import { asyncLogout } from './components/states/authUser/action';
import ProfilePage from './pages/ProfilePage';
import DetailFundraiser from './pages/DetailFundraiser';

export default function App() {
  const user = useSelector((state) => state.authUser.user);
  const dispatch = useDispatch();
  console.log(user);

  const onSignout = () => {
    dispatch(asyncLogout());
  };

  return (
    <>
      <Loading />
      <Router>
        <Header signout={onSignout} />
        <Routes>
          <Route
            path="/auth/google/callback"
            component={<GoogleLoginRedirect />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/fundraisers" element={<FundraisersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/fundraisers/:_id" element={<DetailFundraiser />} />
        </Routes>
        <FooterSection />
      </Router>
    </>
  );
}
