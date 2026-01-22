// src/pages/User/Profile.jsx
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit2, Save, X, LogOut, Heart, Package, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  // Initial user data (in real app → from auth / API)
  const [user, setUser] = useState({
    name: "Mayank Yadav",
    email: "mayank.yadav@example.com",
    phone: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    joined: "Joined January 2025",
    defaultAddress: "123, Gorakhpur, Uttar Pradesh 226010",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Please fill all required fields");
      return;
    }

    setUser({ ...formData });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-8">
          {/* Cover + Avatar */}
          <div className="relative h-40 sm:h-48 bg-linear-to-r from-teal-600 to-teal-400">
            <div className="absolute -bottom-14 left-6 sm:left-10">
              <div className="relative group">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-1 right-1 bg-teal-600 p-2 rounded-full text-white shadow hover:bg-teal-700">
                    <Edit2 size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="pt-16 pb-8 px-6 sm:px-10">
            {/* Name & Joined */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-teal-500 focus:outline-none w-full"
                    placeholder="Your Name"
                  />
                ) : (
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {user.name}
                  </h1>
                )}
                <p className="text-gray-600 mt-1 text-sm">{user.joined}</p>
              </div>

              <div className="flex gap-3">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      <X size={16} /> Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium shadow-sm"
                    >
                      <Save size={16} /> Save
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-6 py-2 border border-teal-200 text-teal-600 rounded-lg hover:bg-teal-50 text-sm font-medium"
                  >
                    <Edit2 size={16} /> Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-gray-500 mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email Address</p>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b-2 border-teal-500 focus:outline-none font-medium"
                    />
                  ) : (
                    <p className="font-medium text-gray-900">{user.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-gray-500 mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Phone Number</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b-2 border-teal-500 focus:outline-none font-medium"
                    />
                  ) : (
                    <p className="font-medium text-gray-900">{user.phone}</p>
                  )}
                </div>
              </div>

              {/* Default Address */}
              <div className="flex items-start gap-4 md:col-span-2">
                <MapPin size={20} className="text-gray-500 mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Default Address</p>
                  {isEditing ? (
                    <textarea
                      name="defaultAddress"
                      value={formData.defaultAddress || user.defaultAddress}
                      onChange={handleChange}
                      rows={2}
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-teal-500 focus:border-teal-500"
                    />
                  ) : (
                    <p className="font-medium text-gray-900">{user.defaultAddress}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <Link
            to="/user/orders"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md hover:border-teal-100 transition-all group"
          >
            <Package size={24} className="mx-auto text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">My Orders</p>
          </Link>

          <Link
            to="/user/wishlist"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md hover:border-teal-100 transition-all group"
          >
            <Heart size={24} className="mx-auto text-red-500 mb-2 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">Wishlist</p>
          </Link>

          <Link
            to="/user/addresses"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md hover:border-teal-100 transition-all group"
          >
            <MapPin size={24} className="mx-auto text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">Addresses</p>
          </Link>

          <Link
            to="/user/payments"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md hover:border-teal-100 transition-all group"
          >
            <CreditCard size={24} className="mx-auto text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">Payments</p>
          </Link>
        </div>

        {/* Logout */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
          <button className="flex items-center justify-center gap-2 mx-auto text-red-600 hover:text-red-700 font-medium">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}