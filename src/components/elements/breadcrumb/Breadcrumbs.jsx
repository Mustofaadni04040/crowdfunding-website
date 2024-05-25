import React from 'react';
// import PropTypes from 'prop-types';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean); // menghasilkan array yang dimulai dengan string kosong karena awal path "/"

  return (
    <section className="container py-5 px-1 md:p-5 mx-auto">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        {pathParts.map((pathPart, index) => {
          const href = `/${pathParts.slice(0, index + 1).join('/')}`;

          return (
            <Breadcrumb.Item key={href} href={href}>
              {pathPart}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </section>
  );
}

// Breadcrumbs.propTypes = {
//   href: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };
