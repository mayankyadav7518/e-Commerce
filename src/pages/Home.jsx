
import { 
  Heart, ShoppingCart, Package, Clock, Star, Gift, 
  ChevronRight, IndianRupee, Truck, ShieldCheck, 
  Zap, Users, ArrowRight, TrendingUp, MapPin, CreditCard, User,
  Sparkles, Megaphone,
  RotateCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data (replace with real data later)
const featuredProducts = [
  { id: 1, name: "Premium Cotton Kurta", price: 1499, discount: 25, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400" },
  { id: 2, name: "Floral Midi Dress", price: 2499, discount: 30, image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400" },
  { id: 3, name: "Kids Cotton Set", price: 1099, discount: 20, image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400" },
  { id: 4, name: "Leather Tote Bag", price: 2799, discount: 15, image: "https://images.unsplash.com/photo-1584917865446-de89df76afd3?w=400" },
];

const recommended = [
  { id: 1, name: "Premium Cotton Kurta", price: 1499, discount: 25, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400" },
  { id: 2, name: "Floral Midi Dress", price: 2499, discount: 30, image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400" },
  { id: 3, name: "Kids Cotton Set", price: 1099, discount: 20, image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400" },
  { id: 4, name: "Leather Tote Bag", price: 2799, discount: 15, image: "https://images.unsplash.com/photo-1584917865446-de89df76afd3?w=400" },
];

const trendingCategories = [
  { name: "Kurtas & Sets", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300" },
  { name: "Sarees", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300" },
  { name: "Jewellery", image: "https://images.unsplash.com/photo-1599643478518-a78422f5c0a2?w=300" },
  { name: "Kids Ethnic", image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=300" },
  { name: "Spices & Masala", image: "https://images.unsplash.com/photo-1596042534901-2b2b3a5b8b8b?w=300" },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section — kept exactly as in your original code */}
      <section className="px-4 sm:px-8 py-12 sm:py-14 bg-linear-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 text-sm bg-teal-100 text-teal-700 rounded-full font-medium">
              Up to 50% OFF
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your everyday marketplace <br />
              <span className="text-teal-600">for style & taste.</span>
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl">
              Shop curated fashion, accessories, kids wear and authentic spices
              — all in one seamless shopping experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 md:gap-4">
              <button className="px-4 md:mx-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition shadow-sm">
                Start shopping →
              </button>
              <button className="px-4 md:mx-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition">
                Today’s best deals
              </button>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100">
            <p className="text-sm text-gray-500 mb-3 font-medium">Featured pick • Limited stock</p>
            <div className="h-48 sm:h-56 bg-linear-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-gray-400 text-lg font-medium">Premium Product Image</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Star size={16} className="text-amber-500 fill-current" /> 4.8 rating
              </span>
              <span className="flex items-center gap-1">
                <Truck size={16} className="text-teal-600" /> Free returns
              </span>
              <span className="text-teal-600 font-medium">Only 12 left</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Tiles (Meesho-style big visual shortcuts) */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="bg-linear-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 sm:p-10 shadow-xl text-white">
          
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Welcome to Swadeshi Store 🛍️
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Login or create an account to unlock exclusive deals, faster checkout,
              order tracking, and wishlist features.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm opacity-90">
            <span className="bg-white/20 px-3 py-1 rounded-full">🔥 Limited Stock</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🚚 Free Shipping*</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🔒 Secure Checkout</span>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              {
                icon: Package,
                title: "Track Orders",
                desc: "Check real-time order status & history",
              },
              {
                icon: Heart,
                title: "Save Wishlist",
                desc: "Save products & buy later easily",
              },
              {
                icon: MapPin,
                title: "Quick Checkout",
                desc: "Save addresses for faster delivery",
              },
              {
                icon: User,
                title: "Personal Profile",
                desc: "Manage profile & preferences",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/15 backdrop-blur-md rounded-xl p-5 text-center"
              >
                <item.icon size={28} className="mx-auto mb-3 text-white" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/login"
              className="px-8 py-3 bg-white text-teal-700 rounded-xl font-semibold hover:bg-gray-100 transition shadow-sm text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition text-center"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Categories – Meesho-style big visual tiles */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {trendingCategories.map((cat) => (
            <Link
              key={cat.name}
              to={`/guest/${cat.name.toLowerCase().replace(/ /g, "-")}-products`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group"
            >
              <div className="aspect-square relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm sm:text-base font-semibold text-center drop-shadow-md">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended / Trending Products */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Trending & Recommended
          </h2>
          <Link
            // to="/user/men-products"
            className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 text-sm sm:text-base"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {[...featuredProducts, ...recommended].map((item) => (
            <Link
              key={item.id}
              to={`/login`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100 group"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                    {item.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-teal-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm font-bold text-teal-600 mt-1">
                  ₹{item.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 sm:p-10 text-white shadow-2xl">
          
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              New Here? Unlock Exclusive Offers 🎉
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Create an account or login to enjoy special discounts, coupons,
              free shipping, and members-only deals.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            
            {/* Offer 1 */}
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 relative">
              <span className="absolute top-3 right-3 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                Login Required
              </span>
              <h3 className="font-semibold text-lg mb-1">🎁 Welcome Bonus</h3>
              <p className="text-sm text-white/90 mb-3">
                Flat <span className="font-bold">₹300 OFF</span> on your first order.
              </p>
              <span className="inline-block bg-white/20 px-3 py-1 rounded-md text-sm font-mono opacity-70">
                NEW300
              </span>
            </div>

            {/* Offer 2 */}
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 relative">
              <span className="absolute top-3 right-3 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                Members Only
              </span>
              <h3 className="font-semibold text-lg mb-1">🔥 Limited-Time Sale</h3>
              <p className="text-sm text-white/90 mb-3">
                Extra <span className="font-bold">20% OFF</span> on orders above ₹1999.
              </p>
              <span className="inline-block bg-white/20 px-3 py-1 rounded-md text-sm font-mono opacity-70">
                SALE20
              </span>
            </div>

            {/* Offer 3 */}
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 relative">
              <span className="absolute top-3 right-3 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                Auto After Login
              </span>
              <h3 className="font-semibold text-lg mb-1">🚚 Free Shipping</h3>
              <p className="text-sm text-white/90 mb-3">
                Free delivery on prepaid orders above ₹999.
              </p>
              <span className="inline-block bg-white/20 px-3 py-1 rounded-md text-sm opacity-70">
                Auto Applied
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/login"
              className="px-8 py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-gray-100 transition shadow-sm text-center"
            >
              Login to Unlock Offers
            </a>
            <a
              href="/register"
              className="px-8 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition text-center"
            >
              Create Free Account
            </a>
          </div>
        </div>
      </section>


      {/* Trust & Support */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-xl">
            <Truck size={36} className="mx-auto text-teal-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders above ₹999</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <RotateCcw size={36} className="mx-auto text-teal-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600">7 days no-questions-asked</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <ShieldCheck size={36} className="mx-auto text-teal-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Checkout</h3>
            <p className="text-gray-600">100% safe & encrypted</p>
          </div>
        </div>
      </section>
    </div>
  );
}