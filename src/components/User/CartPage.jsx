// src/pages/Cart.jsx
import { useState } from "react";
import {
  Trash2,
  Plus,
  Minus,
  Heart,
  ArrowRight,
  ShieldCheck,
  Truck,
  Percent,
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample cart items
const initialCart = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    brand: "Urban Threads",
    price: 1299,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    size: "M",
    color: "Black",
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    brand: "BlueWear",
    price: 2199,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    size: "32",
    color: "Dark Blue",
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToWishlist = (item) => {
    alert(`Moved "${item.name}" to Wishlist!`);
    removeItem(item.id);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = appliedCoupon ? Math.min(subtotal * 0.15, 500) : 0; // example 15% off up to ₹500
  const shipping = subtotal > 1499 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05); // 5% GST example
  const total = subtotal - discount + shipping + tax;

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "SAVE15") {
      setAppliedCoupon("SAVE15");
      alert("Coupon applied! 15% off (up to ₹500)");
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/70 py-6 px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Your Cart ({cart.length})
          </h1>
          <Link
            to="/user/men-products"
            className="text-teal-600 hover:text-teal-700 text-sm font-medium hover:underline flex items-center gap-1"
          >
            Continue Shopping <ArrowRight size={14} />
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Add items to your cart to proceed with checkout.
            </p>
            <Link
              to="/user/men-products"
              className="inline-flex px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items - small & compact */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden 
                             hover:shadow transition-all duration-200"
                >
                  <div className="flex">
                    {/* Very small image */}
                    <div className="w-20 sm:w-24 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-20 sm:h-24 object-cover"
                      />
                    </div>

                    {/* Compact content */}
                    <div className="flex-1 p-3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.brand} • {item.color} • {item.size}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-sm">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-40"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-gray-600 hover:text-gray-900"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <p className="text-base font-bold text-teal-600">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>

                      <div className="flex gap-3 mt-2 text-xs">
                        <button
                          onClick={() => moveToWishlist(item)}
                          className="flex items-center gap-1 text-teal-600 hover:text-teal-800"
                        >
                          <Heart size={14} />
                          Save for Later
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary - attractive & detailed */}
            <div className="lg:sticky lg:top-6 h-fit bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">
                Order Summary
              </h2>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal ({cart.reduce((sum, i) => sum + i.quantity, 0)}{" "}
                    items)
                  </span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (Coupon)</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <Truck size={14} />
                    Shipping
                  </span>
                  <span
                    className={
                      shipping === 0 ? "text-green-600 font-medium" : ""
                    }
                  >
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">GST (5%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>

                <div className="border-t pt-3 mt-2 flex justify-between text-base font-bold">
                  <span>Total Amount</span>
                  <span className="text-teal-600">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Coupon Input */}
              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Apply Coupon
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) =>
                      setCouponCode(e.target.value.toUpperCase())
                    }
                    placeholder="Enter code (e.g. SAVE15)"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <p className="mt-1.5 text-xs text-green-600 flex items-center gap-1">
                    <Percent size={14} />
                    Coupon applied successfully!
                  </p>
                )}
              </div>

              {/* Trust & Delivery Info */}
              <div className="mt-5 pt-4 border-t space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-teal-600" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-teal-600" />
                  <span>Estimated Delivery: 3–5 days</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                className="w-full mt-6 py-3 bg-linear-to-r from-teal-600 to-teal-500 
                                hover:from-teal-700 hover:to-teal-600 text-white font-medium 
                                rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <ArrowRight size={16} />
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
