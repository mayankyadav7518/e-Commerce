// components/Admin/AdminLogin.jsx
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-teal-50 via-cyan-50 to-teal-50">
      {/* Soft animated background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Compact Login Card */}
      <div className="relative z-10 w-full max-w-sm mx-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-8">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-teal-600 to-cyan-500 rounded-xl shadow-lg mb-4">
              <span className="text-3xl font-bold text-white">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Swadeshi</h1>
            <p className="text-sm text-gray-600 mt-1">Admin Sign In</p>
          </div>

          {/* Tight Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="admin@swadeshi.in"
                required
                className="w-full px-4 py-3 bg-teal-50/60 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition placeholder-gray-500 text-gray-900"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 bg-teal-50/60 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-teal-600 to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:from-teal-700 hover:to-cyan-700 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Minimal footer */}
        <p className="text-center mt-6 text-white/70 text-xs">
          🇮🇳 Swadeshi Admin • 2026
        </p>
      </div>
    </div>
  );
}