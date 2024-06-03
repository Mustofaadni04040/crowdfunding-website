import React, { useEffect, useState } from 'react';
import { Sidebar, TextInput } from 'flowbite-react';
import {
  HiChartPie,
  HiInformationCircle,
  HiSearch,
  HiUsers,
} from 'react-icons/hi';

const Sidenav = () => {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const newPage = window.location.pathname;
    setCurrentPage(newPage);
  }, []);

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="!rounded-none h-screen"
    >
      <div className="flex flex-col justify-between h-full py-2">
        <div>
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={32}
            />
          </form>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/admin/dashboard"
                icon={HiChartPie}
                className={
                  currentPage === '/admin/dashboard'
                    ? 'bg-gray-300 dark:bg-gray-700'
                    : ''
                }
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/users"
                icon={HiUsers}
                className={
                  currentPage === '/admin/users'
                    ? 'bg-gray-300 dark:bg-gray-700'
                    : ''
                }
              >
                Pengguna
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/help" icon={HiInformationCircle}>
                Bantuan
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default Sidenav;
