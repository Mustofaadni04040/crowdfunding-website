import React from 'react';
import { Footer } from 'flowbite-react';
import Sidenav from '../../components/elements/sidenav/Sidenav';
import AdminNavbar from '../../components/elements/adminNavbar/Navbar';
import Fundraisers from '../../components/fragments/mainAdmin/Fundraisers';

export default function AdminFundraisersPage() {
  return (
    <>
      <AdminNavbar />
      <div className="flex items-start">
        <Sidenav />
        <main className="relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <Fundraisers />
        </main>
      </div>
      <Footer container>
        <div className="w-full text-center">
          <Footer.Divider />
          <Footer.Copyright href="#" by="Bersama Palestina" year={2024} />
        </div>
      </Footer>
    </>
  );
}
