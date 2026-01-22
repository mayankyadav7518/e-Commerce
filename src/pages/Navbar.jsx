// src/components/GuestNavbar.jsx  (or just Navbar for public routes)
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function GuestNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileOpen]);

  const navClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2.5 text-teal-700 font-semibold bg-teal-50/60 rounded-lg transition-colors"
      : "px-4 py-2.5 text-gray-700 hover:text-teal-700 hover:bg-teal-50/40 rounded-lg transition-colors duration-200";

  const mobileNavClass = ({ isActive }) =>
    isActive
      ? "block px-5 py-3.5 text-teal-700 font-medium bg-teal-50 rounded-lg"
      : "block px-5 py-3.5 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-lg transition-colors";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-teal-600 tracking-tight">
              Swadeshi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/guest/men-products" className={navClass}>
              Men
            </NavLink>
            <NavLink to="/guest/women-products" className={navClass}>
              Women
            </NavLink>
            <NavLink to="/guest/kids-products" className={navClass}>
              Kids
            </NavLink>
            <NavLink to="/guest/accessories" className={navClass}>
              Accessories
            </NavLink>
          </div>

          {/* Desktop Actions - Guest */}
          <div className="hidden md:flex items-center gap-5">

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 px-4 py-2 text-teal-600 hover:text-teal-700 font-medium border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
              >
                <LogIn size={20} />
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
              >
                <UserPlus size={20} />
                Register
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/admin-login")}
                className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
              >
                Admin Login
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50
          ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <span className="text-2xl font-bold text-teal-600">Swadeshi</span>
          <button onClick={() => setIsMobileOpen(false)}>
            <X size={28} className="text-gray-700" />
          </button>
        </div>

        <div className="p-5 space-y-2">
          <NavLink
            to="/"
            className={mobileNavClass}
            onClick={() => setIsMobileOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/guest/men-products"
            className={mobileNavClass}
            onClick={() => setIsMobileOpen(false)}
          >
            Men
          </NavLink>

          <NavLink
            to="/guest/women-products"
            className={mobileNavClass}
            onClick={() => setIsMobileOpen(false)}
          >
            Women
          </NavLink>

          <NavLink
            to="/guest/kids-products"
            className={mobileNavClass}
            onClick={() => setIsMobileOpen(false)}
          >
            Kids
          </NavLink>

          <NavLink
            to="/guest/accessories"
            className={mobileNavClass}
            onClick={() => setIsMobileOpen(false)}
          >
            Accessories
          </NavLink>
        </div>

        {/* Mobile Auth Actions */}
        <div className="px-5 py-6 border-t mt-auto space-y-4">
          <button
            onClick={() => {
              setIsMobileOpen(false);
              navigate("/login");
            }}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 text-teal-600 font-medium border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
          >
            <LogIn size={22} />
            Login
          </button>

          <button
            onClick={() => {
              setIsMobileOpen(false);
              navigate("/register");
            }}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            <UserPlus size={22} />
            Create Account
          </button>

          <button
            onClick={() => {
              setIsMobileOpen(false);
              navigate("/admin-login");
            }}
            className="w-full px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            Admin Login
          </button>

          {/* Small hint for wishlist/cart */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Login to use wishlist & save your cart
          </p>
        </div>
      </div>
    </nav>
  );
}