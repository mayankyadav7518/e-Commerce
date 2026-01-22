import React, { useState } from "react";
import Back from "../Back";

const mockOrders = [
  {
    id: "#ORD-1024",
    customer: "Sarah Connor",
    email: "sarah.c@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Blvd, Suite 500, San Francisco, CA",
    date: "Oct 24, 2023",
    total: "$424.20",
    subtotal: "$378.00",
    shipping: "$12.00",
    tax: "$34.20",
    payment: "Paid",
    status: "Processing",
    dotColor: "blue",
    paymentMethod: "Visa ending 4242",
    transactionId: "tx_123456789abc",
    items: [
      {
        name: "Premium Leather Jacket",
        desc: "Size: M • Black",
        price: "$249.00",
      },
      { name: "Minimalist Watch", desc: "Silver", price: "$129.00" },
    ],
  },
  {
    id: "#ORD-1023",
    customer: "Michael Chen",
    date: "Oct 23, 2023",
    total: "$89.50",
    payment: "Paid",
    status: "Delivered",
    dotColor: "green",
  },
  // ... you can add more
];

export default function OrdersManagement() {
  const [selectedOrder, setSelectedOrder] = useState(mockOrders[0]);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    // On mobile → show full screen details
    if (window.innerWidth < 1024) {
      // lg breakpoint
      setShowMobileDetails(true);
    }
  };

  const closeMobileDetails = () => {
    setShowMobileDetails(false);
  };

  const OrderDetails = ({ order, isMobile = false }) => {
    if (!order) return null;

    return (
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 overflow-y-auto
        ${isMobile ? "min-h-screen" : "h-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-3">
            {isMobile && <Back onClick={closeMobileDetails} />}
            <h3 className="text-lg font-semibold text-gray-800">
              Order {order.id}
            </h3>
          </div>
          <span className="flex items-center space-x-2 whitespace-nowrap">
            <span
              className={`w-2 h-2 rounded-full bg-${order.dotColor}-500`}
            ></span>
            <span className="text-sm font-medium">{order.status}</span>
          </span>
        </div>

        {/* Customer */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Customer Details
          </h4>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full shrink-0" />
            <div>
              <p className="font-medium text-gray-900">{order.customer}</p>
              <p className="text-sm text-gray-500">{order.email || "—"}</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">Phone:</span> {order.phone || "—"}
            </p>
            <p>
              <span className="font-medium">Shipping:</span>{" "}
              {order.address || "—"}
            </p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Payment Information
          </h4>
          <div className="space-y-3 text-sm bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Method</span>
              <span>{order.paymentMethod || order.payment}</span>
            </div>
            {order.transactionId && (
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID</span>
                <span className="font-mono text-xs">{order.transactionId}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Status</span>
              <span className="text-green-600 font-medium">
                {order.payment}
              </span>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Order Items
          </h4>
          <div className="space-y-4">
            {order.items?.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{item.price}</p>
                  <p className="text-xs text-gray-500">{item.price} × 1</p>
                </div>
              </div>
            )) || <p className="text-gray-500">No items</p>}
          </div>
        </div>

        {/* Totals */}
        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>{order.subtotal || order.total}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>{order.shipping || "$0.00"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span>{order.tax || "$0.00"}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg pt-3 border-t">
            <span>Total</span>
            <span className="text-teal-600">{order.total}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Update Status
          </h4>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg">
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          <button className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition">
            Update Order Status
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2 h-full">
        {/* Orders List */}
        <div
          className={`lg:col-span-2 ${
            showMobileDetails ? "hidden" : "block"
          } h-full overflow-y-auto space-y-6 pr-2`}
        >
          {/* Filters */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search order ID, customer..."
              className="w-full sm:flex-1 px-4 py-2 text-sm border border-gray-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Filters */}
            <div className="flex w-full gap-2 sm:w-auto">
              <select
                className="flex-1 sm:w-36 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option>All Status</option>
              </select>

              <select
                className="flex-1 sm:w-40 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option>Last 30 Days</option>
              </select>
            </div>

            {/* Export Button */}
            <button
              className="w-full sm:w-auto px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition"
            >
              Export
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-160">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {[
                      "Order ID",
                      "Customer",
                      "Date",
                      "Total",
                      "Payment",
                      "Status",
                    ].map((h) => (
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
                  {mockOrders.map((order) => (
                    <tr
                      key={order.id}
                      onClick={() => handleSelectOrder(order)}
                      className={`cursor-pointer hover:bg-gray-50 transition ${
                        selectedOrder?.id === order.id ? "bg-teal-50" : ""
                      }`}
                    >
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {order.id}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full shrink-0" />
                          <span className="text-sm text-gray-900 truncate max-w-40 sm:max-w-none">
                            {order.customer}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {order.date}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {order.total}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            order.payment === "Paid"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {order.payment}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="flex items-center space-x-2 whitespace-nowrap">
                          <span
                            className={`w-2 h-2 rounded-full bg-${order.dotColor}-500`}
                          ></span>
                          <span className="text-sm text-gray-900">
                            {order.status}
                          </span>
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
            <OrderDetails order={selectedOrder} />
          </div>
        </div>
      </div>

      {/* Mobile Full-screen Details */}
      {showMobileDetails && selectedOrder && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white overflow-y-auto">
          <OrderDetails order={selectedOrder} isMobile={true} />
        </div>
      )}
    </div>
  );
}
