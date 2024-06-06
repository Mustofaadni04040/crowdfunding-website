import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import UsersPage from './pages/Admin/UsersPage';
import EditUser from './pages/Admin/EditUserPage';
import ProtectedRoute from './components/fragments/ProtectedRoute';
import DetailPartner from './pages/DetailPartner';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const dispatch = useDispatch();

  const onSignout = () => {
    dispatch(asyncLogout());
  };

  return (
    <>
      {!isAdminRoute && <Header signout={onSignout} />}
      {children}
      {!isAdminRoute && <FooterSection />}
    </>
  );
};

export default function App() {
  return (
    <>
      <Loading />
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/auth/google/callback"
              element={<GoogleLoginRedirect />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/fundraisers" element={<FundraisersPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/fundraisers/:_id" element={<DetailFundraiser />} />
            <Route path="/partner/:_id" element={<DetailPartner />} />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <UsersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users/edit/:id"
              element={
                <ProtectedRoute>
                  <EditUser />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
