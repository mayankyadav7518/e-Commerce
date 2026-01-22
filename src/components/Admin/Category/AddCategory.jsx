// src/pages/admin/AddCategory.jsx
import { useState } from "react";
import {
  Save,
  Info,
  ToggleLeft,
  ToggleRight,
  FileText,
  AlertCircle,
} from "lucide-react";
import Back from "../../Back";

export default function AddCategory() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active", // 'active' | 'inactive' | 'archived'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Category name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Category name must be at least 2 characters";
    }

    if (formData.description && formData.description.trim().length > 500) {
      newErrors.description = "Description should not exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In real app → await axios.post('/api/categories', formData);
      console.log("Submitting category:", formData);

      // Success feedback
      alert("Category created successfully!");

      // Reset form
      setFormData({
        name: "",
        description: "",
        status: "active",
      });
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Add New Category
          </h1>
          <Back />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Main Card */}
          <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Info size={18} className="text-teal-600" />
                Category Information
              </h2>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Category Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5 items-center gap-1"
                >
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Men's Ethnic Wear, Organic Spices, Kids Footwear"
                  className={`w-full px-4 py-2.5 border ${
                    errors.name
                      ? "border-red-400 focus:ring-red-500"
                      : "border-gray-300 focus:ring-teal-500"
                  } rounded-lg focus:outline-none focus:ring-2 transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Brief description of this category (optional but recommended)"
                  className={`w-full px-4 py-2.5 border ${
                    errors.description
                      ? "border-red-400 focus:ring-red-500"
                      : "border-gray-300 focus:ring-teal-500"
                  } rounded-lg focus:outline-none focus:ring-2 transition-colors resize-y min-h-25`}
                />
                {errors.description && (
                  <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.description}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-gray-500">
                  {formData.description.length} / 500 characters
                </p>
              </div>

              {/* Status Toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Status
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, status: "active" }))
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      formData.status === "active"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {formData.status === "active" ? (
                      <ToggleRight className="text-green-600" size={20} />
                    ) : (
                      <ToggleLeft className="text-gray-500" size={20} />
                    )}
                    Active
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, status: "inactive" }))
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      formData.status === "inactive"
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {formData.status === "inactive" ? (
                      <ToggleRight className="text-amber-600" size={20} />
                    ) : (
                      <ToggleLeft className="text-gray-500" size={20} />
                    )}
                    Inactive
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Inactive categories won't appear in the storefront
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Discard changes?")) {
                  window.history.back();
                }
              }}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors order-2 sm:order-1"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 px-8 py-2.5 bg-teal-600 text-white font-medium rounded-lg shadow-sm transition-colors order-1 sm:order-2 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-teal-700"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Create Category
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
