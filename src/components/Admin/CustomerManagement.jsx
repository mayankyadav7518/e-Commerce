// src/pages/Admin/CustomerManagement.jsx
import React, { useState } from 'react';

const mockCustomers = [
  {
    id: "#USR-9923",
    name: "Sarah Connor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    email: "sarah.c@example.com",
    phone: "+1 (555) 123-4567",
    joined: "Jan 12, 2023",
    orders: 24,
    totalSpend: "$3,420.50",
    location: "San Francisco, CA",
    status: "Active",
    dotColor: "green",
    recentOrders: [
      { id: "#ORD-1024", date: "Oct 24, 2025", amount: "$249.00", status: "Processing", color: "blue" },
      { id: "#ORD-0955", date: "Sep 15, 2025", amount: "$1,250.00", status: "Delivered", color: "green" },
      { id: "#ORD-0821", date: "Aug 05, 2025", amount: "$56.00", status: "Delivered", color: "green" },
    ],
  },
  {
    id: "#USR-9922",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    email: "m.chen@tech.co",
    phone: "+1 (555) 987-6543",
    joined: "Feb 28, 2023",
    orders: 8,
    totalSpend: "$890.00",
    location: "Seattle, WA",
    status: "Active",
    dotColor: "green",
    recentOrders: [],
  },
  {
    id: "#USR-9921",
    name: "Jessica Day",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    email: "jess.day@loft.com",
    phone: "+1 (555) 321-7654",
    joined: "Mar 15, 2023",
    orders: 0,
    totalSpend: "$0.00",
    location: "Los Angeles, CA",
    status: "Inactive",
    dotColor: "gray",
    recentOrders: [],
  },
  // ... more customers
];

export default function CustomerManagement() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    if (window.innerWidth < 1024) {
      setShowMobileDetails(true);
    }
  };

  const closeMobileDetails = () => {
    setShowMobileDetails(false);
  };

  const CustomerDetails = ({ customer, isMobile = false }) => {
    if (!customer) return null;

    return (
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 overflow-y-auto
        ${isMobile ? "min-h-screen" : "h-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-3">
            {isMobile && (
              <button
                onClick={closeMobileDetails}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
            )}
            <h3 className="text-lg font-semibold text-gray-800">
              {customer.name}
            </h3>
          </div>
          <span className="flex items-center space-x-2 whitespace-nowrap">
            <span className={`w-2 h-2 rounded-full bg-${customer.dotColor}-500`}></span>
            <span className="text-sm font-medium">{customer.status}</span>
          </span>
        </div>

        {/* Profile Overview */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-100 mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-900">{customer.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{customer.email}</p>
          <span
            className={`mt-3 px-4 py-1 rounded-full text-sm font-medium ${
              customer.status === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {customer.status}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{customer.orders}</p>
            <p className="text-xs text-gray-600 mt-1">Total Orders</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{customer.totalSpend}</p>
            <p className="text-xs text-gray-600 mt-1">Lifetime Spend</p>
          </div>
        </div>

        {/* Information */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Customer Information
          </h4>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Customer ID</span>
              <span className="font-medium">{customer.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone</span>
              <span className="font-medium">{customer.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location</span>
              <span className="font-medium">{customer.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Joined</span>
              <span className="font-medium">{customer.joined}</span>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Recent Orders
          </h4>
          <div className="space-y-3">
            {customer.recentOrders.length > 0 ? (
              customer.recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm text-gray-900">{order.id}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm text-gray-900">{order.amount}</p>
                    <span
                      className={`flex items-center justify-end text-xs mt-1 ${
                        order.color === "blue"
                          ? "text-blue-600"
                          : order.color === "green"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-1.5 bg-${order.color}-500`}
                      ></span>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No recent orders</p>
            )}
          </div>
          {customer.orders > 3 && (
            <button className="mt-4 text-teal-600 hover:text-teal-700 text-sm font-medium">
              View All Orders →
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Account Actions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              Edit Details
            </button>
            <button className="py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              Reset Password
            </button>
          </div>
          <button className="w-full py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition">
            Deactivate Account
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
        {/* Left: Customers List - same structure as Orders/Categories/Products */}
        <div
          className={`lg:col-span-2 ${showMobileDetails ? "hidden" : "block"} h-full overflow-y-auto space-y-6 pr-2`}
        >
          {/* Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Search name, email, phone..."
              className="flex-1 min-w-full sm:min-w-64 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg">
              <option>All Status</option>
            </select>
            <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg">
              <option>Newest First</option>
            </select>
            <button className="w-full sm:w-auto px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
              Export List
            </button>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
              Add Customer
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-160">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Customer", "Contact Info", "Joined", "Orders", "Total Spend", ""].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      onClick={() => handleSelectCustomer(customer)}
                      className={`cursor-pointer hover:bg-gray-50 transition ${
                        selectedCustomer?.id === customer.id ? "bg-teal-50" : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-3">
                          <img
                            className="w-10 h-10 rounded-full object-cover shrink-0"
                            src={customer.avatar}
                            alt={customer.name}
                          />
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 truncate max-w-48">
                              {customer.name}
                            </p>
                            <p className="text-xs text-gray-500">{customer.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm text-gray-900 truncate max-w-56">
                          {customer.email}
                        </p>
                        <p className="text-xs text-gray-500">{customer.phone}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {customer.joined}
                      </td>
                      <td className="px-4 py-4 text-center text-sm font-medium text-gray-900">
                        {customer.orders}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {customer.totalSpend}
                      </td>
                      <td className="px-4 py-4">
                        <span className="flex items-center justify-center">
                          <span
                            className={`w-2 h-2 rounded-full bg-${customer.dotColor}-500`}
                          ></span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Desktop Details Panel */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-4 h-[calc(100vh-7rem)] overflow-y-auto">
            <CustomerDetails customer={selectedCustomer} />
          </div>
        </div>
      </div>

      {/* Mobile Full-screen Details */}
      {showMobileDetails && selectedCustomer && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white overflow-y-auto">
          <CustomerDetails customer={selectedCustomer} isMobile={true} />
        </div>
      )}
    </div>
  );
}