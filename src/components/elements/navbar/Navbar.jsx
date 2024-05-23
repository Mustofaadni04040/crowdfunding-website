import React, { useState } from 'react';
import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import useIsDesktop from '../../../hooks/useIsDesktop';
import Button from '../button/Button';

export default function Navbar() {
  const isDesktop = useIsDesktop(1024);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  function getClassnameLocation(path) {
    return location.pathname === path
      ? 'text-primary font-bold border-b-2 pb-2 border-primary'
      : 'text-slate-500 font-bold hover:text-primary duration-200';
  }

  if (isDesktop) {
    return (
      <div className="flex items-center justify-between">
        <nav>
          <ul className="DESKTOP-MENU flex space-x-8 ">
            <li className={getClassnameLocation('/')}>
              <a href="/">Tentang</a>
            </li>
            <li className={getClassnameLocation('/fundraisers')}>
              <a href="/fundraisers">Donasi</a>
            </li>
            <li className={getClassnameLocation('/news')}>
              <a href="/news">Berita</a>
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
          <div className="flex items-center justify-center gap-3">
            <Button submit="submit" classname="button-primary">
              <Link to="/login">Masuk</Link>
            </Button>
            <Button submit="submit" classname="button-primary">
              <Link to="/register">Daftar</Link>
            </Button>
          </div>
          <nav>
            <ul>
              <li className="li-responsive">
                <a href="/">Tentang</a>
              </li>
              <li className="li-responsive">
                <a href="/fundraisers">Donasi</a>
              </li>
              <li className="li-responsive">
                <a href="/news">Berita</a>
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
