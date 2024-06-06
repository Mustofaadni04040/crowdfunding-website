import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  // generate an array that starting with the empty string because the home page page is "/"
  const fundraiser = useSelector((state) => state.fundraiserDetail.fundraiser);
  const partner = useSelector((state) => state.partnerDetail.partner);
  const loading = useSelector((state) => state.fundraiserDetail.loading);

  return (
    <section className="container py-5 px-1 md:p-5 mx-auto">
      {loading ? null : (
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          {pathParts.map((pathPart, index) => {
            const href = `/${pathParts.slice(0, index + 1).join('/')}`;
            const isLast = index === pathParts.length - 1;

            let label = null;

            if (isLast && fundraiser && location.pathname !== '/fundraisers') {
              label = fundraiser.title;
            } else if (isLast && partner && location.pathname !== '/partners') {
              label = partner.name;
            } else {
              label = pathPart;
            }

            return (
              <Breadcrumb.Item key={href} href={href}>
                {label}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      )}
    </section>
  );
}
