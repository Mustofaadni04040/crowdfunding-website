import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProptTypes from 'prop-types';
import { Dropdown } from 'flowbite-react';
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
    return <HeaderMobile signout={signout} />;
  }

  // desktop login and register without header
  if (pathname !== '/login' && pathname !== '/register') {
    return (
      <section className="shadow bg-white sticky top-0 left-0 z-50">
        <header className="container p-5 mx-auto flex items-center justify-between">
          <Logo />
          <SearchInput />

          <div
            className={`flex items-center lg:gap-10 xl:gap-20  ${
              user !== null && 'lg:flex-row-reverse'
            }`}
          >
            {user === null && isDesktop ? (
              <Button classname="border border-primary px-4 py-2 rounded text-primary hover:bg-primary hover:text-white duration-200 lg:order-2">
                <Link to="/login">Masuk</Link>
              </Button>
            ) : (
              <div className="flex items-center">
                {isDesktop && <UserProfile signout={signout} user={user} />}
              </div>
            )}
            <Navbar signout={signout} />
          </div>
        </header>
      </section>
    );
  }
}

export const HeaderMobile = ({ signout }) => (
  <section className="shadow bg-white sticky top-0 left-0 z-50">
    <header className="container p-5 mx-auto flex items-center justify-between">
      <Logo />
      <SearchInput />
      <Navbar signout={signout} />
    </header>
  </section>
);

export const UserProfile = ({ signout, user }) => (
  <>
    <img
      src="https://www.lightsong.net/wp-content/uploads/2020/12/blank-profile-circle-300x300.png"
      alt="profile"
      className="w-5 h-5 md:w-8 md:h-8 rounded-full"
    />
    <Dropdown inline>
      <Dropdown.Header className="min-w-[150px]">
        <span className="block text-sm">Hallo, {user.displayName}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item href="/profile">Profile</Dropdown.Item>
      <Dropdown.Item onClick={signout}>Logout</Dropdown.Item>
    </Dropdown>
  </>
);

export const userShape = {
  createdAt: ProptTypes.string.isRequired,
  displayName: ProptTypes.string.isRequired,
  email: ProptTypes.string.isRequired,
  password: ProptTypes.string.isRequired,
  role: ProptTypes.string.isRequired,
  updatedAt: ProptTypes.string.isRequired,
  _id: ProptTypes.string.isRequired,
};

UserProfile.propTypes = {
  signout: ProptTypes.func.isRequired,
  user: ProptTypes.shape(ProptTypes.userShape).isRequired,
};
HeaderMobile.propTypes = {
  signout: ProptTypes.func.isRequired,
};
Header.propTypes = {
  signout: ProptTypes.func.isRequired,
};
