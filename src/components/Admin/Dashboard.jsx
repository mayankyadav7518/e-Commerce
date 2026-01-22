// src/components/Admin/Dashboard.jsx
import React from "react";
import {
  BarChart2,
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      positive: true,
      icon: TrendingUp,
    },
    {
      title: "Total Orders",
      value: "2,350",
      change: "+15.2%",
      positive: true,
      icon: ShoppingBag,
    },
    {
      title: "Pending Orders",
      value: "42",
      change: "-4.5%",
      positive: false,
      icon: Package,
    },
    {
      title: "Active Users",
      value: "12,234",
      change: "+8.7%",
      positive: true,
      icon: Users,
    },
  ];

  const topProducts = [
    { name: "Cotton T-Shirt", category: "Mens Wear", sales: "$2,400" },
    { name: "Leather Watch", category: "Accessories", sales: "$1,850" },
    { name: "Running Shoes", category: "Sports", sales: "$1,200" },
  ];

  const recentOrders = [
    {
      id: "#ORD-7231",
      name: "Sarah Williams",
      date: "Oct 24, 2025",
      amount: "$124.00",
      status: "Completed",
      color: "green",
    },
    {
      id: "#ORD-7230",
      name: "Michael Brown",
      date: "Oct 24, 2025",
      amount: "$85.50",
      status: "Pending",
      color: "yellow",
    },
    {
      id: "#ORD-7229",
      name: "Emily Davis",
      date: "Oct 23, 2025",
      amount: "$230.00",
      status: "Completed",
      color: "green",
    },
    {
      id: "#ORD-7228",
      name: "James Wilson",
      date: "Oct 22, 2025",
      amount: "$54.20",
      status: "Cancelled",
      color: "red",
    },
  ];

  return (
    <div>
      {/* Stats Cards */}
      <div className="gap-4 overflow-x-auto pb-2 grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 mb-6 lg:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className=" bg-white rounded-xl shadow-sm border border-gray-200 p-4
                     transition-all hover:shadow-md shrink-0"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>

                <div
                  className={`p-2 rounded-lg ${
                    stat.positive ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <Icon
                    size={20}
                    className={
                      stat.positive ? "text-green-600" : "text-red-600"
                    }
                  />
                </div>
              </div>

              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </p>

              <p
                className={`text-sm font-medium ${
                  stat.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change} from last month
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-6 lg:mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-7">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Sales Overview
            </h3>

            <div className="flex gap-2">
              <button className="px-3 sm:px-4 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 transition">
                Weekly
              </button>
              <button className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition">
                Monthly
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-130 h-56 sm:h-64 lg:h-80 flex items-end gap-3 sm:gap-4 px-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div
                  key={day}
                  className="flex-1 min-w-15 flex flex-col items-center justify-end"
                >
                  <div
                    className={`w-full rounded-t-lg bg-linear-to-t from-teal-600 to-teal-400 transition-transform duration-300 hover:scale-105 ${
                      day === "Thu"
                        ? "h-3/4"
                        : day === "Sat"
                        ? "h-2/3"
                        : "h-1/2"
                    }`}
                  />
                  <span className="mt-2 text-xs sm:text-sm text-gray-600 font-medium">
                    {day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-7">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">
            Top Products
          </h3>

          <div className="space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-linear-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center shrink-0">
                    <ShoppingBag size={22} className="text-teal-600" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {product.category}
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-gray-900 whitespace-nowrap">
                  {product.sales}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="shadow-sm border border-gray-200 p-5 sm:p-6 flex justify-between">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Recent Orders
            </h3>
            <button onClick={() => navigate("/admin/orders-management")} className="text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors cursor-pointer">
              View All Orders →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-160">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "Order ID",
                    "Customer",
                    "Date",
                    "Amount",
                    "Status",
                    "Action",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-4 sm:px-6 text-left text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-4 py-2 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full shrink-0"></div>
                        <span className="text-sm font-medium text-gray-900 truncate max-w-35 sm:max-w-none">
                          {order.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2 sm:px-6 text-sm text-gray-600 whitespace-nowrap">
                      {order.date}
                    </td>
                    <td className="px-4 py-2 sm:px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {order.amount}
                    </td>
                    <td className="px-4 py-2 sm:px-6 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                          order.color === "green"
                            ? "bg-green-100 text-green-800"
                            : order.color === "yellow"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 sm:px-6 whitespace-nowrap text-sm">
                      <button className="text-teal-600 hover:text-teal-800 font-medium transition-colors">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
