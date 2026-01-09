import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample data - in real project this would come from API / context
const menProducts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    rating: 4.6,
    reviews: 1240,
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    price: 2499,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f60f8?w=500",
    rating: 4.7,
    reviews: 890,
  },
  {
    id: 3,
    name: "Urban Denim Jacket",
    price: 3499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    rating: 4.8,
    reviews: 650,
  },
  {
    id: 4,
    name: "Premium Polo T-Shirt",
    price: 1899,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500",
    rating: 4.5,
    reviews: 920,
  },
  {
    id: 5,
    name: "Casual Chinos",
    price: 2199,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1e?w=500",
    rating: 4.4,
    reviews: 410,
  },
  {
    id: 6,
    name: "Leather Belt",
    price: 999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    rating: 4.7,
    reviews: 320,
  },
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Men's Collection
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Discover premium men's wear - T-shirts, jeans, jackets and more
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {menProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    size={20}
                    className={`${
                      wishlist.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    } transition-colors`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-medium text-lg text-gray-900 line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xl font-bold text-teal-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-1 text-sm">
                  <span className="text-amber-500">★</span>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {/* Add to Cart */}
                  <button
                    className="group bg-teal-600 text-white px-1 py-2.5 rounded-xl font-medium flex items-center justify-center gap-1 shadow-sm hover:shadow-md hover:bg-teal-700 transition-all duration-200"
                  >
                    <ShoppingCart
                      size={18}
                      className="group-hover:scale-110 transition"
                    />
                    Add to Cart
                  </button>

                  {/* View Details */}
                  <button
                    onClick={() => navigate("/user/men-products/details", {
                        state: {product: product}
                    })}
                    className="group border border-gray-300 bg-white text-gray-700 py-2.5 rounded-xl font-medium hover:border-teal-600 hover:text-teal-600 hover:shadow-sm transition-all duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Load more / Pagination */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
