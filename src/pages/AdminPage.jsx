import React from 'react';
import { Footer } from 'flowbite-react';
import Sidenav from '../components/elements/sidenav/Sidenav';
import AdminNavbar from '../components/elements/adminNavbar/Navbar';
import Users from '../components/fragments/adminPage/Users';

export default function AdminPage() {
  return (
    <>
      <AdminNavbar />
      <div className="flex items-start">
        <Sidenav />
        <main className="relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <Users />
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
