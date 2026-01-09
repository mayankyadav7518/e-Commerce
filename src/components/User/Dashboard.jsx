// src/components/User/Dashboard.jsx
export default function UserDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-14 bg-linear-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">
              Up to 50% OFF
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your everyday marketplace <br />
              <span className="text-teal-600">for style & taste.</span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl">
              Shop curated fashion, accessories, kids wear and authentic spices
              — all in one seamless shopping experience.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition">
                Start shopping →
              </button>
              <button className="px-6 py-3 bg-white border rounded-xl text-gray-700 hover:bg-gray-100 transition">
                Today’s best deals
              </button>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-sm text-gray-500 mb-2">Featured pick</p>
            <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center">
              <span className="text-gray-400">Product image</span>
            </div>
            <div className="mt-4 flex gap-3 text-sm text-gray-500">
              ⭐ 4.8 rating
              <span>Free returns</span>
              <span className="text-teal-600">Limited stock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Shop by category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            "Men's Wear",
            "Women's Wear",
            "Kids' Wear",
            "Accessories",
            "Spices",
          ].map((cat) => (
            <div
              key={cat}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <p className="font-medium text-gray-800">{cat}</p>
              <p className="text-sm text-gray-500 mt-1">
                Explore collection →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured products
          </h2>
          <button className="text-teal-600 font-medium hover:underline">
            View all →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="h-48 bg-gray-100 rounded-t-xl"></div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800">
                  Premium Product
                </h3>
                <p className="text-teal-600 font-semibold mt-1">₹1,299</p>

                <button className="mt-4 w-full py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <div className="bg-linear-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Extra 20% off on your first order
            </h3>
            <p className="text-white/80 mt-2">
              Use code <b>LUXE20</b> on orders above ₹1999
            </p>
          </div>

          <button className="px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold hover:bg-gray-100">
            Browse best offers →
          </button>
        </div>
      </section>
    </div>
  );
}
