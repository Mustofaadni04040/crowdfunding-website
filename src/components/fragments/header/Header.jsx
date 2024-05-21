import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../elements/logo/Logo';
import SearchInput from '../../elements/searchInput/SearchInput';
import Button from '../../elements/button/Button';
import Navbar from '../../elements/navbar/Navbar';
import useIsDesktop from '../../../hooks/useIsDesktop';

export default function Header() {
  const isDesktop = useIsDesktop(1024);

  if (!isDesktop) {
    return (
      <section className="shadow bg-white sticky top-0 left-0 z-50">
        <div className="container p-5 mx-auto flex items-center justify-between">
          <Logo />
          <SearchInput />
          <div>
            <Navbar />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="shadow bg-white sticky top-0 left-0 z-50">
      <div className="container p-5 mx-auto flex items-center justify-between">
        <Logo />
        <SearchInput />

        <Button
          submit="submit"
          classname="border border-primary px-4 py-2 rounded text-primary hover:bg-primary hover:text-white duration-200 lg:order-2"
        >
          <Link to="/login">Masuk</Link>
        </Button>
        <div className="lg:order-1">
          <Navbar />
        </div>
      </div>
    </section>
  );
}
