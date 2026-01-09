import Navbar from "../pages/Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Shop Smarter with <span className="text-emerald-500">Luxe</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Discover premium products, best prices, and fast delivery at your doorstep.
            </p>

            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                Shop Now
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-white">
                Explore
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-400">
              Product Image
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-semibold text-lg">{cat}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Explore latest {cat.toLowerCase()} products
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500">
          © {new Date().getFullYear()} Luxe. All rights reserved.
        </div>
      </footer>
    </>
  );
}
