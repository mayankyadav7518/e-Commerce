// src/components/Admin/Navbar.jsx
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left: Hamburger + Page Title */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button - Visible only on lg and below */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            aria-label="Open sidebar"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dynamic Page Title - You can make this dynamic later */}
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Admin
          </h1>
        </div>

        {/* Right: Search Bar + Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar - Hidden on small screens, visible on md+ */}
          <div className="relative hidden md:block max-w-xs w-full">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Profile Avatar */}
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;