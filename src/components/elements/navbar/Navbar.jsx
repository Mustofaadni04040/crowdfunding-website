import React, { useState } from 'react';
import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import useIsDesktop from '../../../hooks/useIsDesktop';
import Button from '../button/Button';

export default function Navbar({ signout }) {
  const isDesktop = useIsDesktop(1024);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const user = useSelector((state) => state.authUser.user);

  function getClassnameLocation(path) {
    return location.pathname === path
      ? 'text-primary font-bold border-b-2 pb-1 border-primary'
      : 'text-slate-500 font-bold hover:text-primary duration-200';
  }

  if (isDesktop) {
    return (
      <div className="flex items-center justify-between">
        <nav>
          <ul className="DESKTOP-MENU flex space-x-8 gap-5">
            <li className={getClassnameLocation('/')}>
              <a href="/">Tentang</a>
            </li>
            <li className={getClassnameLocation('/fundraisers')}>
              <a href="/fundraisers">Donasi</a>
            </li>
            <li className={getClassnameLocation('/partners')}>
              <a href="/partners">Mitra Kami</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <section className="MOBILE-MENU flex">
      <button
        className="HAMBURGER-ICON space-y-2 cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)}
        type="button"
        aria-label="burger-menu"
      >
        <IoMenu className="text-xl text-slate-700" />
      </button>

      <div
        className={
          isNavOpen
            ? 'absolute w-1/2 px-3 h-screen top-0 right-0 bg-white z-10 shadow-xl'
            : 'hidden'
        }
      >
        <button
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer"
          onClick={() => setIsNavOpen(false)}
          type="button"
          aria-label="close-menu"
        >
          <IoCloseOutline className="text-2xl text-slate-700" />
        </button>

        <div className="MENU-LINK-MOBILE-OPEN mt-20">
          {user === null ? (
            <div className="flex items-center justify-center gap-3">
              <Button classname="button-primary">
                <Link to="/login">Masuk</Link>
              </Button>
              <Button classname="button-primary">
                <Link to="/register">Daftar</Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Button classname="button-primary" onClick={signout}>
                <Link to="/">logout</Link>
              </Button>
            </div>
          )}
          <nav>
            <ul>
              <li className="li-responsive">
                <a href="/profile">profil Saya</a>
              </li>
              <li className="li-responsive">
                <a href="/">Tentang</a>
              </li>
              <li className="li-responsive">
                <a href="/fundraisers">Donasi</a>
              </li>
              <li className="li-responsive">
                <a href="/partners">Mitra Kami</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
Navbar.propTypes = {
  signout: PropTypes.func,
};
