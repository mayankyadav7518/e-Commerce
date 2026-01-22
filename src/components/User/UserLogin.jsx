// src/components/User/UserLogin.jsx
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Heart, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function UserLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // In real app: add auth logic here
    navigate("/user/dashboard");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-300 hover:shadow-3xl">
          {/* Header */}
          <div className="p-6 text-center">
            <div className="inline-block mb-4 p-2.5 bg-linear-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-lg">
              <Heart className="h-7 w-7 text-white" fill="currentColor" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="px-8 pb-10 space-y-5 text-sm">
            {/* Email / Mobile */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Mobile Number"
                className="w-full pl-11 pr-4 py-3 bg-gray-50/70 border border-gray-200 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent 
                           placeholder-gray-400 text-gray-900 transition-all duration-200"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-11 pr-12 py-3 bg-gray-50/70 border border-gray-200 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent 
                           placeholder-gray-400 text-gray-900 transition-all duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-teal-600 hover:text-teal-700 hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r from-teal-600 to-teal-500 
                         hover:from-teal-700 hover:to-teal-600 text-white font-semibold 
                         rounded-xl shadow-lg transform hover:-translate-y-0.5 
                         transition-all duration-300 flex items-center justify-center gap-2 text-base"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="px-8 pb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>
          </div>

          {/* Register Link */}
          <div className="px-8 pb-10 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-teal-600 font-medium hover:text-teal-700 hover:underline transition-colors"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>

        {/* Trust badges */}
        {/* <div className="mt-8 flex justify-center gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-teal-600" />
            <span>Secure</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck size={16} className="text-teal-600" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RotateCcw size={16} className="text-teal-600" />
            <span>Easy Returns</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}