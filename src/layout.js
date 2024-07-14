// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

const Layout = () => {
  return (
    <div className='flex text-center h-screen overflow-hidden ml-0'>
      <Navbar className="top-0 fixed" />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
