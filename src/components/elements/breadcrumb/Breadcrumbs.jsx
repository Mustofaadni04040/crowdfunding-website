import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean); // generate an array that starting with the empty string because the home page page is "/"

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
