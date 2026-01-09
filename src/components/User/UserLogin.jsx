import { useNavigate, Link } from "react-router-dom";

export default function UserLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/user/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
        <p className="text-gray-500 text-center mb-6">
          Sign in to continue shopping
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Email or Mobile"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
          />

          <button className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?
          <Link to="/register" className="text-emerald-500 ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
