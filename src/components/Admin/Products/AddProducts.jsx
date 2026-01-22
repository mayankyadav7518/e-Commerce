// src/pages/admin/AddProduct.jsx
import { useState } from 'react';
import { 
  Upload, 
  X, 
  Plus, 
  Save, 
  Image as ImageIcon, 
  DollarSign, 
  Percent, 
  Package, 
  Tag, 
  Info, 
  Shirt, 
  Palette, 
  Grid, 
  Globe, 
  Barcode, 
  IndianRupee,
} from 'lucide-react';
import Back from '../../Back';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    discount: '',
    stock: '',
    sku: '',
    status: 'active',
    sizes: [],
    brand: '',
    fabric: '',
    color: '',
    pattern: '',
    countryOfOrigin: '',
  });

  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImages, setSecondaryImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState({ primary: null, secondary: [] });

  const categories = [
    'Men\'s Wear', 'Women\'s Wear', 'Kids Wear', 
    'Accessories', 'Footwear', 'Home & Living', 'Electronics'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      sizes: checked 
        ? [...prev.sizes, value] 
        : prev.sizes.filter(s => s !== value)
    }));
  };

  const handlePrimaryImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrimaryImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => ({ ...prev, primary: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecondaryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + secondaryImages.length > 5) {
      alert('Maximum 5 secondary images allowed');
      return;
    }

    setSecondaryImages(prev => [...prev, ...files]);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => ({
          ...prev,
          secondary: [...prev.secondary, reader.result]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeSecondaryImage = (index) => {
    setSecondaryImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => ({
      ...prev,
      secondary: prev.secondary.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send data to backend (FormData with files)
    console.log('Submitting product:', formData, primaryImage, secondaryImages);
    alert('Product submitted! (Check console for data)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Add New Product</h1>
          <Back />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Info size={20} className="text-teal-600" />
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="e.g. Premium Cotton T-Shirt"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Detailed product description, features, material, fit, etc..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing & Stock */}
          <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <DollarSign size={20} className="text-teal-600" />
              Pricing & Inventory
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Price (₹) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <IndianRupee size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="0.00"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Discount (%)
                </label>
                <div className="relative">
                  <Percent size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="0"
                    min="0"
                    max="90"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Stock <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Package size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  SKU <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Barcode size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="SWD-TSH-001"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Status
              </label>
              <div className="flex flex-wrap gap-4">
                {['active', 'draft', 'out_of_stock'].map(status => (
                  <label key={status} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      value={status}
                      checked={formData.status === status}
                      onChange={handleInputChange}
                      className="text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-sm capitalize">{status.replace('_', ' ')}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ImageIcon size={20} className="text-teal-600" />
              Product Images
            </h2>

            {/* Primary Image */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Image <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-teal-400 transition-colors">
                <div className="space-y-1 text-center">
                  {imagePreviews.primary ? (
                    <div className="relative inline-block">
                      <img
                        src={imagePreviews.primary}
                        alt="Primary preview"
                        className="max-h-64 object-contain rounded"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPrimaryImage(null);
                          setImagePreviews(prev => ({ ...prev, primary: null }));
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 mt-4">
                        <label className="relative cursor-pointer rounded-md font-medium text-teal-600 hover:text-teal-500">
                          <span>Upload primary image</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePrimaryImageChange}
                            className="sr-only"
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        PNG, JPG, WEBP up to 5MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Secondary Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Images (max 5)
              </label>
              <div className="mt-1 flex flex-wrap gap-4">
                {imagePreviews.secondary.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-28 h-28 object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => removeSecondaryImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-md"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {secondaryImages.length < 5 && (
                  <label className="w-28 h-28 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-400 cursor-pointer transition-colors">
                    <Plus size={28} className="text-gray-400" />
                    <span className="text-xs text-gray-500 mt-1">Add</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleSecondaryImagesChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Attributes & Highlights */}
          <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Shirt size={20} className="text-teal-600" />
              Product Attributes & Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Available Sizes
                </label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map(size => (
                    <label key={size} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={size}
                        checked={formData.sizes.includes(size)}
                        onChange={handleSizeChange}
                        className="rounded text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. Nike, Levi's, Swadeshi"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Fabric
                </label>
                <input
                  type="text"
                  name="fabric"
                  value={formData.fabric}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. 100% Cotton, Cotton Blend"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. Black, Navy Blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Pattern
                </label>
                <input
                  type="text"
                  name="pattern"
                  value={formData.pattern}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. Solid, Striped, Checkered"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Country of Origin
                </label>
                <input
                  type="text"
                  name="countryOfOrigin"
                  value={formData.countryOfOrigin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. India, China, Vietnam"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 cursor-pointer bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-md"
            >
              <Save size={18} />
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}