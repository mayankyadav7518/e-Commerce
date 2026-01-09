// src/components/Admin/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'Orders', path: '/admin/orders-management' },
  { name: 'Categories', path: '/admin/category-management' },
  { name: 'Products', path: '/admin/products-management' },
  { name: 'Customers', path: '/admin/customer-management' },
  { name: 'Payment', path: '/admin/payment-management' },
  { name: 'Analytics', path: '/admin/analytics' },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="px-6 py-4.5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 hidden lg:block">
              Swadeshi
            </h2>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => window.innerWidth < 1024 && toggleSidebar()} // Close on mobile
              className={({ isActive }) =>
                `flex items-center px-4 py-3 mb-1 rounded-lg text-gray-700 transition-all ${
                  isActive
                    ? 'bg-teal-50 text-teal-600 font-medium shadow-sm'
                    : 'hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* User Profile */}
        <div className="px-6 py-5 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="hidden lg:block">
              <p className="font-medium text-gray-800 text-sm">Alex Morgan</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;