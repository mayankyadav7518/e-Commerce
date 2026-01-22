// src/pages/User/Addresses.jsx
import { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2, CheckCircle, Home, Building, X } from 'lucide-react';

export default function Addresses() {
  // Sample addresses (in real app → from API / context)
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      full: "123, Gomti Nagar, Near Eldeco Udyan, Lucknow, Uttar Pradesh 226010",
      phone: "+91 98765 43210",
      isDefault: true,
      type: "home",
    },
    {
      id: 2,
      label: "Office",
      full: "456, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
      phone: "+91 98765 43210",
      isDefault: false,
      type: "work",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    label: '',
    full: '',
    phone: '',
    type: 'home',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAddress) {
      // Edit existing
      setAddresses(prev =>
        prev.map(addr =>
          addr.id === editingAddress.id ? { ...addr, ...formData } : addr
        )
      );
    } else {
      // Add new
      setAddresses(prev => [
        ...prev,
        { id: Date.now(), ...formData, isDefault: prev.length === 0 },
      ]);
    }
    setShowAddModal(false);
    setEditingAddress(null);
    setFormData({ label: '', full: '', phone: '', type: 'home' });
  };

  const deleteAddress = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setAddresses(prev => prev.filter(addr => addr.id !== id));
    }
  };

  const setDefault = (id) => {
    setAddresses(prev =>
      prev.map(addr => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const startEdit = (addr) => {
    setFormData({
      label: addr.label,
      full: addr.full,
      phone: addr.phone,
      type: addr.type,
    });
    setEditingAddress(addr);
    setShowAddModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-50 rounded-full">
              <MapPin className="text-teal-600" size={28} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Addresses
            </h1>
          </div>

          <button
            onClick={() => {
              setEditingAddress(null);
              setFormData({ label: '', full: '', phone: '', type: 'home' });
              setShowAddModal(true);
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <Plus size={18} />
            Add New Address
          </button>
        </div>

        {/* Address List */}
        {addresses.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <MapPin size={56} className="mx-auto text-gray-300 mb-5" strokeWidth={1.2} />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              No Addresses Added
            </h2>
            <p className="text-gray-600 mb-6">
              Add your delivery addresses for faster checkout.
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Add Address
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className={`bg-white rounded-xl shadow-sm border ${
                  addr.isDefault ? 'border-teal-500 border-2' : 'border-gray-200'
                } overflow-hidden hover:shadow-md transition-all`}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      {addr.type === 'home' ? (
                        <Home size={20} className="text-teal-600 mt-1" />
                      ) : (
                        <Building size={20} className="text-teal-600 mt-1" />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-base text-gray-900">
                            {addr.label}
                          </h3>
                          {addr.isDefault && (
                            <span className="inline-flex items-center px-2 py-0.5 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                              <CheckCircle size={12} className="mr-1" />
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{addr.full}</p>
                        <p className="text-sm text-gray-600 mt-1">{addr.phone}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(addr)}
                        className="p-2 text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      {!addr.isDefault && (
                        <button
                          onClick={() => deleteAddress(addr.id)}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </div>

                  {!addr.isDefault && (
                    <button
                      onClick={() => setDefault(addr.id)}
                      className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Set as Default
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add/Edit Address Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingAddress ? 'Edit Address' : 'Add New Address'}
                </h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Address Label (e.g., Home, Office)
                  </label>
                  <input
                    type="text"
                    name="label"
                    value={formData.label}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Home / Office / Hostel"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Address
                  </label>
                  <textarea
                    name="full"
                    value={formData.full}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="House no, Street, Area, City, State, PIN"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Address Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="type"
                        value="home"
                        checked={formData.type === 'home'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span>Home</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="type"
                        value="work"
                        checked={formData.type === 'work'}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span>Work</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium transition-colors"
                  >
                    {editingAddress ? 'Update Address' : 'Save Address'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}