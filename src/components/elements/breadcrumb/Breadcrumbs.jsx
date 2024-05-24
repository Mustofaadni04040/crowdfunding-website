import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function Breadcrumbs({ href, title }) {
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href={href}>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

Breadcrumbs.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
