import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate(); // 2. Call the hook to get the navigate function

  return (
    <div className="px-32 mt-4 bg-brand-dark ">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          {/* Use Link for the logo to navigate home */}
          <Link to="/" className="flex items-center gap-1">
            <img src={logo} alt="OptiSol Logo" />
            <p className="text-2xl font-bold text-white">
              Opti<span className="text-primary">Sol</span>
            </p>
          </Link>
        </div>
        <div className="flex gap-2 font-bold">
          {/* Your onClick handlers will now work */}
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 text-white transition-colors border-2 rounded-lg border-stroke hover:bg-stroke"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-2 text-black transition-colors bg-white rounded-lg hover:bg-slate-200"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
