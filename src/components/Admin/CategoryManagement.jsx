// src/pages/Admin/CategoryManagement.jsx
import React, { useState } from 'react';

const mockCategories = [
  {
    id: 1,
    name: "Men's Wear",
    description: "T-shirts, Jeans, Suits, Jackets and more",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=100&h=100&fit=crop",
    productsCount: 1240,
    active: true,
    slug: "mens-wear",
  },
  {
    id: 2,
    name: "Women's Wear",
    description: "Dresses, Tops, Skirts, Blouses",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    productsCount: 2850,
    active: true,
    slug: "womens-wear",
  },
  {
    id: 3,
    name: "Accessories",
    description: "Watches, Belts, Hats, Sunglasses",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    productsCount: 840,
    active: true,
    slug: "accessories",
  },
  {
    id: 4,
    name: "Seasonal Deals",
    description: "Limited time promotions & collections",
    image: null,
    productsCount: 0,
    active: false,
    slug: "seasonal-deals",
  },
];

export default function CategoryManagement() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (window.innerWidth < 1024) {
      setShowMobileDetails(true);
    }
  };

  const closeMobileDetails = () => {
    setShowMobileDetails(false);
  };

  const CategoryDetails = ({ category, isMobile = false }) => {
    if (!category) return null;

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
              {category.name}
            </h3>
          </div>
          <span className="flex items-center space-x-2 whitespace-nowrap">
            <span
              className={`w-2 h-2 rounded-full ${
                category.active ? 'bg-green-500' : 'bg-gray-400'
              }`}
            ></span>
            <span className="text-sm font-medium">
              {category.active ? 'Active' : 'Inactive'}
            </span>
          </span>
        </div>

        {/* Image & Basic Info */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Category Image
          </h4>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {category.image ? (
              <img
                src={category.image}
                alt={category.name}
                className="mx-auto w-full max-w-60 h-48 object-cover rounded-lg"
              />
            ) : (
              <div className="mx-auto w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <p className="mt-3 text-sm text-gray-500">Click to upload new image</p>
          </div>
        </div>

        {/* Details */}
        <div className="mb-8 space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Basic Information
            </h4>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name</span>
                <span className="font-medium">{category.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Slug</span>
                <span className="font-mono text-xs">{category.slug}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Products</span>
                <span className="font-medium">{category.productsCount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Description
            </h4>
            <textarea
              rows="4"
              defaultValue={category.description}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Actions
          </h4>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition">
              Save Changes
            </button>
            <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              Cancel
            </button>
          </div>
          <button className="w-full py-3 bg-red-50 text-red-700 font-medium rounded-lg hover:bg-red-100 transition">
            Delete Category
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
        {/* Categories List */}
        <div
          className={`lg:col-span-2 ${showMobileDetails ? 'hidden' : 'block'} h-full overflow-y-auto space-y-6 pr-2`}
        >
          {/* Filters & Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Search category name..."
              className="flex-1 min-w-full sm:min-w-64 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="w-full sm:w-auto px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
              Add New Category
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-160">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {['Image', 'Category', 'Products', 'Status', 'Actions'].map((h) => (
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
                  {mockCategories.map((cat) => (
                    <tr
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat)}
                      className={`cursor-pointer hover:bg-gray-50 transition ${
                        selectedCategory?.id === cat.id ? 'bg-teal-50' : ''
                      }`}
                    >
                      <td className="px-4 py-4">
                        {cat.image ? (
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-medium text-gray-900">{cat.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-64">
                          {cat.description}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {cat.productsCount.toLocaleString()}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            cat.active
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {cat.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-gray-600 hover:text-teal-600 mr-3 text-lg">✏️</button>
                        <button className="text-gray-600 hover:text-red-600 text-lg">🗑️</button>
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
            <CategoryDetails category={selectedCategory} />
          </div>
        </div>
      </div>

      {/* Mobile Full-screen Details */}
      {showMobileDetails && selectedCategory && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white overflow-y-auto">
          <CategoryDetails category={selectedCategory} isMobile={true} />
        </div>
      )}
    </div>
  );
}