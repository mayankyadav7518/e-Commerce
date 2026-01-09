import { useNavigate, Link } from "react-router-dom";

export default function UserRegister() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">
          Create an account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Start shopping with us
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input placeholder="Full Name" className="w-full p-3 border rounded-lg" />
          <input placeholder="Mobile Number" className="w-full p-3 border rounded-lg" />
          <input placeholder="Email" className="w-full p-3 border rounded-lg" />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
          />

          <button className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <Link to="/login" className="text-emerald-500 ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
