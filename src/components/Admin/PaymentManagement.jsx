// src/pages/Admin/PaymentManagement.jsx
import React, { useState } from 'react';

const mockTransactions = [
  {
    id: "#TRX-88291",
    customer: "Sarah Connor",
    customerEmail: "sarah.c@example.com",
    date: "Oct 24, 2025 10:42 AM",
    method: "Visa ending 4242",
    amount: "$249.00",
    status: "Succeeded",
    dotColor: "green",
    orderId: "#ORD-1024",
    risk: "Normal",
    breakdown: {
      subtotal: "$225.00",
      tax: "$18.50",
      fee: "$5.50",
      total: "$249.00"
    },
    expires: "12/25"
  },
  {
    id: "#TRX-88285",
    customer: "Michael Chen",
    customerEmail: "m.chen@tech.co",
    date: "Oct 24, 2025 09:15 AM",
    method: "PayPal",
    amount: "$89.50",
    status: "Succeeded",
    dotColor: "green",
    orderId: "#ORD-1023",
    risk: "Normal",
    breakdown: {
      subtotal: "$89.50",
      tax: "$0.00",
      fee: "$0.00",
      total: "$89.50"
    }
  },
  {
    id: "#TRX-88240",
    customer: "Jessica Day",
    customerEmail: "",
    date: "Oct 23, 2025 04:30 PM",
    method: "Mastercard ending 8821",
    amount: "$1,250.00",
    status: "Succeeded",
    dotColor: "green",
    orderId: "#ORD-1019",
    risk: "Normal",
    breakdown: {
      subtotal: "$1,136.36",
      tax: "$102.27",
      fee: "$11.37",
      total: "$1,250.00"
    }
  },
  {
    id: "#TRX-88112",
    customer: "David Rose",
    customerEmail: "david.r@store.com",
    date: "Oct 23, 2025 11:05 AM",
    method: "Amex ending 1002",
    amount: "$56.00",
    status: "Failed",
    dotColor: "red",
    orderId: "#ORD-1018",
    risk: "High",
    breakdown: {
      subtotal: "$56.00",
      tax: "$0.00",
      fee: "$0.00",
      total: "$56.00"
    }
  },
];

export default function PaymentManagement() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const handleSelectTransaction = (tx) => {
    setSelectedTransaction(tx);
    if (window.innerWidth < 1024) {
      setShowMobileDetails(true);
    }
  };

  const closeMobileDetails = () => {
    setShowMobileDetails(false);
  };

  const TransactionDetails = ({ transaction, isMobile = false }) => {
    if (!transaction) return null;

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
              {transaction.id}
            </h3>
          </div>
          <span className="flex items-center space-x-2 whitespace-nowrap">
            <span className={`w-2 h-2 rounded-full bg-${transaction.dotColor}-500`}></span>
            <span className="text-sm font-medium">{transaction.status}</span>
          </span>
        </div>

        {/* Amount & Status */}
        <div className="mb-8">
          <p className="text-3xl font-bold text-gray-900 mb-2">{transaction.amount}</p>
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
              transaction.status === "Succeeded"
                ? "bg-green-100 text-green-800"
                : transaction.status === "Failed"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            <span className={`w-2 h-2 rounded-full mr-2 bg-${transaction.dotColor}-500`}></span>
            Payment {transaction.status}
          </span>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Payment Method
          </h4>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-8 bg-gray-200 rounded border border-gray-300 shrink-0" />
            <div>
              <p className="font-medium text-gray-900">{transaction.method}</p>
              {transaction.expires && (
                <p className="text-sm text-gray-500">Expires {transaction.expires}</p>
              )}
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Payment Information
          </h4>
          <div className="space-y-3 text-sm bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span className="font-medium">{transaction.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Linked Order</span>
              <span className="font-medium text-teal-600 hover:underline cursor-pointer">
                {transaction.orderId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customer</span>
              <span className="font-medium">{transaction.customer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Risk</span>
              <span
                className={`font-medium ${
                  transaction.risk === "Normal" ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.risk}
              </span>
            </div>
          </div>
        </div>

        {/* Amount Breakdown */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Amount Breakdown
          </h4>
          <div className="space-y-3 text-sm bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>{transaction.breakdown.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>{transaction.breakdown.tax}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Processing Fee</span>
              <span>{transaction.breakdown.fee}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-3 border-t border-gray-200">
              <span>Total</span>
              <span>{transaction.breakdown.total}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
            Send Receipt
          </button>
          <button className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium">
            Refund Payment
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
        {/* Left: Transactions List - same structure as previous pages */}
        <div
          className={`lg:col-span-2 ${showMobileDetails ? "hidden" : "block"} h-full overflow-y-auto space-y-6 pr-2`}
        >
          {/* Filters & Export */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 flex-1">
              <input
                type="text"
                placeholder="Search transaction ID or customer..."
                className="flex-1 min-w-full sm:min-w-64 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg">
                <option>All Status</option>
              </select>
              <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg">
                <option>Last 30 Days</option>
              </select>
            </div>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
              Export History
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-160">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Transaction ID", "Customer", "Date", "Method", "Amount"].map((h) => (
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
                  {mockTransactions.map((tx) => (
                    <tr
                      key={tx.id}
                      onClick={() => handleSelectTransaction(tx)}
                      className={`cursor-pointer hover:bg-gray-50 transition ${
                        selectedTransaction?.id === tx.id ? "bg-teal-50" : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <p className="font-medium text-gray-900 whitespace-nowrap">{tx.id}</p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0" />
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 truncate max-w-48">
                              {tx.customer}
                            </p>
                            {tx.customerEmail && (
                              <p className="text-xs text-gray-500 truncate max-w-56">
                                {tx.customerEmail}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {tx.date}
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-700 whitespace-nowrap">
                          {tx.method}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        {tx.amount}
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
            <TransactionDetails transaction={selectedTransaction} />
          </div>
        </div>
      </div>

      {/* Mobile Full-screen Details */}
      {showMobileDetails && selectedTransaction && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white overflow-y-auto">
          <TransactionDetails transaction={selectedTransaction} isMobile={true} />
        </div>
      )}
    </div>
  );
}