import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProptTypes from 'prop-types';
import Logo from '../elements/logo/Logo';
import SearchInput from '../elements/searchInput/SearchInput';
import Button from '../elements/button/Button';
import Navbar from '../elements/navbar/Navbar';
import useIsDesktop from '../../hooks/useIsDesktop';

export default function Header({ signout }) {
  const isDesktop = useIsDesktop(1024);
  const { pathname } = useLocation();
  const user = useSelector((state) => state.authUser.user);
  console.log('adasd', user);

  // mobile login and register without header
  if (pathname === '/login' && pathname === '/register' && !isDesktop) {
    return (
      <section className="shadow bg-white sticky top-0 left-0 z-50">
        <header className="container p-5 mx-auto flex items-center justify-between">
          <Logo />
          <SearchInput />
          <Navbar signout={signout} />
        </header>
      </section>
    );
  }

  // desktop login and register without header
  if (pathname !== '/login' && pathname !== '/register') {
    return (
      <section className="shadow bg-white sticky top-0 left-0 z-50">
        <header className="container p-5 mx-auto flex items-center justify-between">
          <Logo />
          <SearchInput />
          {user !== null && <p>Halo, {user.displayName}</p>}

          {user === null ? (
            <Button classname="border border-primary px-4 py-2 rounded text-primary hover:bg-primary hover:text-white duration-200 lg:order-2">
              <Link to="/login">Masuk</Link>
            </Button>
          ) : (
            <Button classname="border border-primary px-4 py-2 rounded text-primary hover:bg-primary hover:text-white duration-200 lg:order-2">
              <Link to="/" onClick={signout}>
                Logout
              </Link>
            </Button>
          )}
          <div className="lg:order-1">
            <Navbar signout={signout} />
          </div>
        </header>
      </section>
    );
  }
}
Header.propTypes = {
  signout: ProptTypes.func.isRequired,
};
