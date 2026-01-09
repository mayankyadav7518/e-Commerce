// AdminDashboard.jsx
import React from 'react';

export default function AdminDashboard() {
  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 md:mb-8">
        {[
          { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', positive: true },
          { title: 'Total Orders', value: '+2,350', change: '+15.2%', positive: true },
          { title: 'Pending Orders', value: '42', change: '-4.5%', positive: false },
          { title: 'Active Users', value: '+12,234', change: '+8.7%', positive: true },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6"
          >
            <p className="text-sm text-gray-600 truncate">{stat.title}</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <p
              className={`text-sm mt-2 ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
        {/* Sales Overview */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Sales Overview
            </h3>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 w-full sm:w-auto">
              Weekly
            </button>
          </div>

          {/* Responsive Chart */}
          <div className="h-60 sm:h-64 md:h-72 flex items-end justify-between gap-2 sm:gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full rounded-t-md bg-teal-500 transition-all ${
                    day === 'Thu' ? 'h-40 sm:h-48' : 'h-20 sm:h-24'
                  }`}
                ></div>
                <span className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
            Top Products
          </h3>
          <div className="space-y-5 sm:space-y-6">
            {[
              { name: 'Cotton T-Shirt', category: 'Mens Wear', sales: '$2,400' },
              { name: 'Leather Watch', category: 'Accessories', sales: '$1,850' },
              { name: 'Running Shoes', category: 'Sports', sales: '$1,200' },
            ].map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-md shrink-0"></div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 truncate">{product.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
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

      {/* Recent Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Recent Orders
          </h3>
          <button className="text-teal-600 font-medium hover:text-teal-700 text-sm">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-150">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Order ID', 'Customer', 'Date', 'Amount', 'Status', 'Action'].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: '#ORD-7231', name: 'Sarah Williams', date: 'Oct 24, 2023', amount: '$124.00', status: 'Completed', color: 'green' },
                { id: '#ORD-7230', name: 'Michael Brown', date: 'Oct 24, 2023', amount: '$85.50', status: 'Pending', color: 'yellow' },
                { id: '#ORD-7229', name: 'Emily Davis', date: 'Oct 23, 2023', amount: '$230.00', status: 'Completed', color: 'green' },
                { id: '#ORD-7228', name: 'James Wilson', date: 'Oct 22, 2023', amount: '$54.20', status: 'Cancelled', color: 'red' },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        className="w-8 h-8 rounded-full shrink-0"
                        src={`https://randomuser.me/api/portraits/${
                          order.name.includes('Sarah') || order.name.includes('Emily')
                            ? 'women'
                            : 'men'
                        }/${Math.floor(Math.random() * 90)}.jpg`}
                        alt=""
                      />
                      <span className="text-sm text-gray-900 truncate max-w-35 sm:max-w-none">
                        {order.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                        order.color === 'green'
                          ? 'bg-green-100 text-green-800'
                          : order.color === 'yellow'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-teal-600 hover:text-teal-700 cursor-pointer whitespace-nowrap">
                    Details
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}