
import React, { useState } from 'react';

const mockProducts = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    sku: "JK-402",
    category: "Men's Wear",
    price: "$249.00",
    stock: 12,
    status: "Active",
    dotColor: "green",
    description: "Genuine leather jacket with premium stitching and multiple pockets.",
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=150",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=150"
    ],
    discount: 15,
    createdAt: "Oct 15, 2025",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    sku: "DR-112",
    category: "Women's Wear",
    price: "$89.50",
    stock: 45,
    status: "Active",
    dotColor: "green",
    description: "Lightweight floral print dress perfect for summer occasions.",
    images: ["https://images.unsplash.com/photo-1515378960530-7c0da6231fb4?w=150"],
    discount: 0,
    createdAt: "Nov 03, 2025",
  },
  {
    id: 3,
    name: "Minimalist Watch",
    sku: "WA-990",
    category: "Accessories",
    price: "$129.00",
    stock: 0,
    status: "Out of Stock",
    dotColor: "red",
    description: "Elegant minimalist design with Japanese quartz movement.",
    images: ["https://images.unsplash.com/photo-1524592094714-0f25c5025c32?w=150"],
    discount: 10,
    createdAt: "Sep 28, 2025",
  },
  {
    id: 4,
    name: "Running Sneakers",
    sku: "SN-202",
    category: "Footwear",
    price: "$110.00",
    stock: 8,
    status: "Low Stock",
    dotColor: "yellow",
    description: "Breathable mesh running shoes with excellent cushioning.",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150"],
    discount: 5,
    createdAt: "Dec 10, 2025",
  },
];

export default function ProductsManagement() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    if (window.innerWidth < 1024) {
      setShowMobileDetails(true);
    }
  };

  const closeMobileDetails = () => {
    setShowMobileDetails(false);
  };

  const ProductDetails = ({ product, isMobile = false }) => {
    if (!product) return null;

    return (
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 overflow-y-auto
        ${isMobile ? 'min-h-screen' : 'h-full'}`}
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
              {product.name}
            </h3>
          </div>
          <span className="flex items-center space-x-2 whitespace-nowrap">
            <span className={`w-2 h-2 rounded-full bg-${product.dotColor}-500`}></span>
            <span className="text-sm font-medium">{product.status}</span>
          </span>
        </div>

        {/* Gallery */}
        <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                placeholder="e.g., Slim Fit Chinos"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>

            {/* Description */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows="3"
                placeholder="Product description and features..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              />
            </div>

            {/* Media Upload */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                Media
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500 mb-3">Click to upload or drag images</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <img
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="preview"
                  />
                  <img
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="preview"
                  />
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                Organization
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg">
                <option>Select category</option>
              </select>
            </div>

            {/* Pricing & Inventory */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                Pricing & Inventory
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input
                    type="text"
                    value="0.00"
                    readOnly
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
                  <input
                    type="text"
                    value="0"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                  <input
                    type="text"
                    value="0"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                  <input
                    type="text"
                    placeholder="e.g., M-01"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Product Status Toggle */}
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Product Status</span>
              <div className="flex items-center space-x-3">
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                </button>
                <span className="text-sm text-gray-600">Enabled</span>
              </div>
            </div>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Quick Actions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition">
              Save Changes
            </button>
            <button className="py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              Cancel
            </button>
          </div>
          <button className="w-full py-3 bg-red-50 text-red-700 font-medium rounded-lg hover:bg-red-100 transition">
            Delete Product
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
        {/* Products List */}
        <div
          className={`lg:col-span-2 ${showMobileDetails ? 'hidden' : 'block'} h-full overflow-y-auto space-y-6 pr-2`}
        >
          {/* Filters & Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Search products, SKUs..."
              className="flex-1 min-w-full sm:min-w-64 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg">
              <option>All Categories</option>
              <option>Men's Wear</option>
              <option>Women's Wear</option>
              <option>Accessories</option>
            </select>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
              Add New Product
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-175">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {['Image', 'Product', 'Category', 'Price', 'Stock', 'Status'].map((h) => (
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
                  {mockProducts.map((product) => (
                    <tr
                      key={product.id}
                      onClick={() => handleSelectProduct(product)}
                      className={`cursor-pointer hover:bg-gray-50 transition ${
                        selectedProduct?.id === product.id ? 'bg-teal-50' : ''
                      }`}
                    >
                      <td className="px-4 py-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-medium text-gray-900 truncate max-w-64">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">{product.sku}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {product.category}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {product.price}
                      </td>
                      <td className="px-4 py-4 text-center text-sm font-medium">
                        <span
                          className={
                            product.stock === 0
                              ? 'text-red-600'
                              : product.stock <= 10
                              ? 'text-orange-600'
                              : 'text-green-600'
                          }
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            product.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : product.status === 'Low Stock'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {product.status}
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
            <ProductDetails product={selectedProduct} />
          </div>
        </div>
      </div>

      {/* Mobile Full-screen Details */}
      {showMobileDetails && selectedProduct && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white overflow-y-auto">
          <ProductDetails product={selectedProduct} isMobile={true} />
        </div>
      )}
    </div>
  );
}