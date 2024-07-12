// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

const Layout = () => {
  return (
    <div className='flex text-center h-screen overflow-hidden'>
      <Navbar className="left-0 fixed z-20" />
      <div className="ml-1 flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
