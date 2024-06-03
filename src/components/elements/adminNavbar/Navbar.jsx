import React from 'react';
import { DarkThemeToggle, Navbar, Dropdown, Avatar } from 'flowbite-react';

export default function AdminNavbar() {
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="../../../assets/logo.svg"
                className="h-6 mr-3 sm:h-8"
              />
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            <Dropdown
              arrowIcon={false}
              inline
              label={(
                <Avatar
                  alt="User settings"
                  img="https://i.pinimg.com/736x/18/2f/9d/182f9d9b5ddb1322ce8ea231e49300c3.jpg"
                  rounded
                />
              )}
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block text-sm font-medium truncate">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
}
