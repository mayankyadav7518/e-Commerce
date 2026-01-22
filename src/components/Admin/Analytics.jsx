// src/pages/Admin/Analytics.jsx
import {
  BarChart3,
  DollarSign,
  Percent,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import React from "react";

export default function Analytics() {
  return (
    <div>
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {[
          {
            title: "Total Revenue",
            value: "$124,580",
            change: "+12.5%",
            positive: true,
            icon: DollarSign,
          },
          {
            title: "Total Orders",
            value: "8,429",
            change: "+18.2%",
            positive: true,
            icon: ShoppingCart,
          },
          {
            title: "Average Order Value",
            value: "$148.20",
            change: "+5.4%",
            positive: true,
            icon: BarChart3,
          },
          {
            title: "Conversion Rate",
            value: "3.24%",
            change: "-0.8%",
            positive: false,
            icon: Percent,
          },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return(
          <div
            key={index}
            className=" bg-white rounded-xl shadow-sm border border-gray-200 p-4
                     transition-all hover:shadow-md shrink-0"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>

              <div
                className={`p-2 rounded-lg ${
                  stat.positive ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <Icon
                  size={20}
                  className={stat.positive ? "text-green-600" : "text-red-600"}
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
              {stat.change} vs last month
            </p>
          </div>
        )})}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        {/* Revenue Over Time */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Revenue Over Time
            </h3>
            <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Last 12 Months</option>
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
          </div>

          {/* Responsive Bar Chart */}
          <div className="h-64 sm:h-72 md:h-80 flex items-end justify-between gap-1 sm:gap-2">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month, i) => {
              const heights = [
                40, 55, 50, 70, 85, 90, 105, 120, 110, 130, 125, 140,
              ];
              return (
                <div key={month} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-teal-500 rounded-t-lg transition-all"
                    style={{ height: `${heights[i]}%` }}
                  ></div>
                  <p className="mt-3 text-xs text-gray-600">{month}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Sales by Category
          </h3>
          <div className="space-y-5 sm:space-y-6">
            {[
              {
                category: "Men's Wear",
                amount: "$48,230",
                percent: 38.7,
                color: "bg-teal-500",
              },
              {
                category: "Women's Wear",
                amount: "$52,180",
                percent: 41.9,
                color: "bg-cyan-500",
              },
              {
                category: "Accessories",
                amount: "$18,450",
                percent: 14.8,
                color: "bg-purple-500",
              },
              {
                category: "Footwear",
                amount: "$5,720",
                percent: 4.6,
                color: "bg-orange-500",
              },
            ].map((cat) => (
              <div key={cat.category}>
                <div className="flex flex-col sm:flex-row justify-between mb-2 gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    {cat.category}
                  </span>
                  <span className="text-sm text-gray-900">{cat.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${cat.color} h-2 rounded-full transition-all`}
                    style={{ width: `${cat.percent}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {cat.percent.toFixed(1)}% of total sales
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Top Products & Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Top Performing Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Top Performing Products
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-125">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  <th className="pb-3">Product</th>
                  <th className="pb-3 text-center">Units Sold</th>
                  <th className="pb-3 text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    name: "Premium Leather Jacket",
                    sold: 320,
                    revenue: "$79,680",
                  },
                  {
                    name: "Summer Floral Dress",
                    sold: 580,
                    revenue: "$52,780",
                  },
                  { name: "Minimalist Watch", sold: 420, revenue: "$54,180" },
                  { name: "Running Sneakers", sold: 180, revenue: "$19,800" },
                ].map((product) => (
                  <tr key={product.name} className="py-3 hover:bg-gray-50">
                    <td className="py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0"></div>
                        <span className="text-sm font-medium text-gray-900 truncate max-w-45 sm:max-w-none">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 text-center text-sm text-gray-900">
                      {product.sold}
                    </td>
                    <td className="py-3 text-right text-sm font-medium text-gray-900 whitespace-nowrap">
                      {product.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Traffic Sources
          </h3>
          <div className="space-y-5 sm:space-y-6">
            {[
              {
                source: "Direct",
                visitors: "45,231",
                percent: 45.2,
                color: "bg-teal-500",
              },
              {
                source: "Google Search",
                visitors: "32,840",
                percent: 32.8,
                color: "bg-cyan-500",
              },
              {
                source: "Social Media",
                visitors: "14,220",
                percent: 14.2,
                color: "bg-purple-500",
              },
              {
                source: "Email Campaigns",
                visitors: "5,890",
                percent: 5.9,
                color: "bg-orange-500",
              },
              {
                source: "Referral",
                visitors: "1,890",
                percent: 1.9,
                color: "bg-gray-500",
              },
            ].map((traffic) => (
              <div key={traffic.source}>
                <div className="flex flex-col sm:flex-row justify-between mb-2 gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    {traffic.source}
                  </span>
                  <span className="text-sm text-gray-900">
                    {traffic.visitors}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${traffic.color} h-2 rounded-full`}
                    style={{ width: `${traffic.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
