import React, { useEffect, useState } from 'react';
import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useIsDesktop from '../../../hooks/useIsDesktop';
import Button from '../button/Button';
import { asyncGoogleLogin } from '../../states/authUser/action';

export default function Navbar({ signout }) {
  const isDesktop = useIsDesktop(1024);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authUser.user);

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      dispatch(asyncGoogleLogin(token, navigate));
    }
  }, [location.search, dispatch, navigate]);

  function getClassnameLocation(path) {
    return location.pathname === path
      ? 'text-primary font-bold border-b-2 pb-1 border-primary'
      : 'text-slate-500 font-bold hover:text-primary duration-200';
  }

  if (isDesktop) {
    return (
      <div className="flex items-center justify-between">
        <nav>
          <ul className="flex gap-5 space-x-8 DESKTOP-MENU">
            <li className={getClassnameLocation('/')}>
              <Link to="/">Tentang</Link>
            </li>
            <li className={getClassnameLocation('/donasi')}>
              <Link to="/donasi">Donasi</Link>
            </li>
            <li className={getClassnameLocation('/mitra')}>
              <Link to="/mitra">Mitra Kami</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <section className="flex MOBILE-MENU">
      <button
        className="space-y-2 cursor-pointer HAMBURGER-ICON"
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
          className="absolute top-0 right-0 px-8 py-8 cursor-pointer CROSS-ICON"
          onClick={() => setIsNavOpen(false)}
          type="button"
          aria-label="close-menu"
        >
          <IoCloseOutline className="text-2xl text-slate-700" />
        </button>

        <div className="mt-20 MENU-LINK-MOBILE-OPEN">
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
                <Link to="/profile">Profil Saya</Link>
              </li>
              <li className="li-responsive">
                <Link to="/">Tentang</Link>
              </li>
              <li className="li-responsive">
                <Link to="/donasi">Donasi</Link>
              </li>
              <li className="li-responsive">
                <Link to="/mitra">Mitra Kami</Link>
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
