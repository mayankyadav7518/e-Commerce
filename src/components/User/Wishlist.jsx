// src/pages/Wishlist.jsx
import { useState } from "react";
import { Heart, ShoppingCart, Trash2, X, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data (replace with real state/context later)
const initialWishlist = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    brand: "Urban Threads",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    brand: "BlueWear",
    price: 2199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
  },
  {
    id: 3,
    name: "Classic Cotton T-Shirt",
    brand: "Urban Threads",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 4,
    name: "Slim Fit Denim Jeans",
    brand: "BlueWear",
    price: 2199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
  },
  {
    id: 5,
    name: "Classic Cotton T-Shirt",
    brand: "Urban Threads",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 6,
    name: "Slim Fit Denim Jeans",
    brand: "BlueWear",
    price: 2199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
  },
];

export default function Wishlist() {
  const [items, setItems] = useState(initialWishlist);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    // In real app → add to cart logic
    alert(`Added "${item.name}" to cart!`);
    removeItem(item.id); // Optional: remove from wishlist after adding to cart
  };

  const addAllToCart = () => {
    alert(`Added all ${items.length} items to cart!`);
    setItems([]); // Clear wishlist after adding all
  };

  const clearWishlist = () => {
    setItems([]);
    setShowClearConfirm(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-50 rounded-full shadow-sm">
              <Heart className="text-red-500" size={28} fill="currentColor" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Wishlist
            </h1>
          </div>

          {items.length > 0 && (
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-2 px-5 py-2.5 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
              >
                <Trash2 size={16} />
                Clear All
              </button>
              <button
                onClick={addAllToCart}
                className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors shadow-sm text-sm font-medium"
              >
                <ShoppingCart size={16} />
                Add All to Cart
              </button>
            </div>
          )}
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-10 sm:p-16 text-center border border-gray-100">
            <div className="relative inline-block mb-8">
              <Heart
                size={80}
                className="text-gray-200 animate-pulse"
                strokeWidth={1}
              />
              <Heart
                size={80}
                className="absolute inset-0 text-red-300 opacity-40 animate-ping-slow"
                fill="currentColor"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Wishlist is Empty
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
              Start adding items you love — they'll wait here until you're ready
              to buy.
            </p>
            <Link
              to="/user/men-products"
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-teal-600 to-teal-500 
                         hover:from-teal-700 hover:to-teal-600 text-white font-semibold 
                         rounded-xl shadow-lg transform hover:-translate-y-0.5 
                         transition-all duration-300"
            >
              Explore Products →
            </Link>
          </div>
        ) : (
          <>
            {/* Wishlist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden 
                             hover:shadow-2xl hover:border-teal-100 transition-all duration-300 
                             group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-44 sm:h-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <h3
                        className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 
                                     group-hover:text-teal-700 transition-colors"
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {item.brand}
                      </p>
                    </div>

                    <p className="text-xl font-bold text-teal-600 tracking-tight">
                      ₹{item.price.toLocaleString()}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <button
                        className="flex-1 bg-linear-to-r from-teal-600 to-teal-500 
                                  hover:from-teal-700 hover:to-teal-600 text-white 
                                  py-2.5 rounded-xl text-sm font-medium transition-all 
                                  flex items-center justify-center gap-2 shadow-sm"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2.5 border border-gray-200 rounded-xl 
                                  hover:bg-red-50 hover:border-red-200 
                                  text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Summary & Actions */}
            <div
              className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-5 
                           bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="text-lg font-medium text-gray-800">
                {items.length} {items.length === 1 ? "item" : "items"} saved
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/user/men-products"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl 
                            hover:bg-gray-50 font-medium transition-colors text-center"
                >
                  Explore More
                </Link>
                <button
                  onClick={addAllToCart}
                  className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl 
                            font-medium transition-colors shadow-sm"
                >
                  Add All to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Clear All Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle className="text-amber-500" size={28} />
              <h3 className="text-xl font-bold text-gray-900">
                Clear Wishlist?
              </h3>
            </div>
            <p className="text-gray-600 mb-8">
              This will remove all {items.length} items from your wishlist. This
              action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={clearWishlist}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
