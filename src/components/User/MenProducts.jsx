import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample data
const menProducts = [
  { id: 1, name: "Classic Cotton T-Shirt", price: 1299, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", rating: 4.6, reviews: 1240 },
  { id: 2, name: "Slim Fit Denim Jeans", price: 2499, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f60f8?w=500", rating: 4.7, reviews: 890 },
  { id: 3, name: "Urban Denim Jacket", price: 3499, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", rating: 4.8, reviews: 650 },
  { id: 4, name: "Premium Polo T-Shirt", price: 1899, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500", rating: 4.5, reviews: 920 },
  { id: 5, name: "Casual Chinos", price: 2199, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1e?w=500", rating: 4.4, reviews: 410 },
  { id: 6, name: "Leather Belt", price: 999, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", rating: 4.7, reviews: 320 },
];

export default function MenProducts() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Men's Collection</h1>
          <p className="mt-2 text-base text-gray-600">
            Premium T-shirts, jeans, jackets & more
          </p>
        </div>

        {/* Products Grid - smaller cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {menProducts.map((product) => (
            <div
              key={product.id}
              onClick={() =>
                navigate("/user/men-products/details", { state: { product } })
              }
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 group cursor-pointer"
            >
              {/* Image - smaller height */}
              <div className="relative overflow-hidden h-44 sm:h-48 md:h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    size={18}
                    className={`${
                      wishlist.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    } transition-colors`}
                  />
                </button>
              </div>

              {/* Content - compact */}
              <div className="p-3 sm:p-4">
                <h3 className="font-medium text-sm sm:text-base text-gray-900 line-clamp-2 mb-1.5">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-bold text-teal-600">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <div className="flex items-center gap-1 text-xs sm:text-sm">
                    <span className="text-amber-500">★</span>
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>

                {/* Optional: small reviews count */}
                <p className="text-xs text-gray-500 mt-0.5">
                  {product.reviews.toLocaleString()} reviews
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-10 text-center">
          <button className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}