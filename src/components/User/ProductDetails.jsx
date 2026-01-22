// src/pages/ProductDetailPage.jsx
import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const product = {
  id: 1,
  name: "Classic Cotton T-Shirt",
  brand: "Urban Threads",
  price: 1299,
  originalPrice: 1799,
  discount: 28,
  rating: 4.6,
  reviewsCount: 1240,
  description:
    "Premium 180 GSM 100% combed cotton t-shirt with enzyme wash for ultra-soft feel. Bio-washed, pre-shrunk fabric that maintains shape and color even after multiple washes. Perfect everyday essential with a modern slim fit.",
  features: [
    "100% premium combed cotton",
    "180 GSM - medium weight",
    "Enzyme washed for softness",
    "Bio-washed & pre-shrunk",
    "Double-stitched hems",
    "Tagless comfort neck label",
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#ffffff" },
    { name: "Navy", hex: "#1e3a8a" },
    { name: "Grey", hex: "#6b7280" },
    { name: "Olive", hex: "#4b5e40" },
  ],
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800",
    "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800",
  ],
};

export default function ProductDetailPage() {
  const location = useLocation();
  const productData = location?.state?.product;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [inWishlist, setInWishlist] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10">
          <div className="space-y-4">
            <nav className="flex mb-6 text-sm text-gray-600">
              <Link to="/user/dashboard" className="hover:text-teal-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/user/men-products" className="hover:text-teal-600">
                Men
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>

            <div className="relative bg-white rounded-lg overflow-hidden shadow aspect-square max-w-md mx-auto">
              <img
                src={productData.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
              />

              {product.discount > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded-md text-xs font-semibold">
                  {product.discount}% OFF
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2.5 sm:gap-3 max-w-md mx-auto">
              {(product.images || []).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300
                    ${
                      selectedImage === index
                        ? "border-teal-500 shadow-lg scale-[1.06] ring-2 ring-teal-200/60"
                        : "border-gray-200 hover:border-teal-400 hover:shadow-md hover:scale-105"
                    }
                  `}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />

                  {/* Subtle active indicator bar */}
                  {selectedImage === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.brand}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      } `}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">
                  {productData.rating}
                </span>
                <span className="text-gray-500">
                  ({productData.reviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-end gap-4">
                <span className="text-4xl font-bold text-teal-600">
                  ₹{productData.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-lg font-semibold text-green-600">
                      {product.discount}% off
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium text-lg mb-1">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-teal-600 scale-110 shadow-lg"
                        : "border-gray-200 hover:border-teal-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-lg">Size</h3>
                <button className="text-teal-600 text-sm hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-lg border font-medium transition-all ${
                      selectedSize === size
                        ? "bg-teal-600 text-white border-teal-600"
                        : "border-gray-300 hover:border-teal-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="py-2 font-medium w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg shadow-teal-200/30">
                  <ShoppingCart size={22} />
                  Add to Cart
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setInWishlist(!inWishlist)}
                  className="flex-1 border-2 border-gray-300 hover:border-red-400 text-gray-700 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Heart
                    size={22}
                    className={inWishlist ? "fill-red-500 text-red-500" : ""}
                  />
                  {inWishlist ? "In Wishlist" : "Add to Wishlist"}
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-blue-100 rounded-lg">
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-teal-600" size={28} />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-500">On orders above ₹999</p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto mb-2 text-teal-600" size={28} />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-500">7 days return policy</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto mb-2 text-teal-600" size={28} />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-gray-500">100% safe checkout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Highlights</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
