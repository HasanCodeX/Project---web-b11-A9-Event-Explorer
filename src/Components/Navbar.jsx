// src/Components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../Context/firebase/firebase.config";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [user] = useAuthState(auth);

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-primary underline font-semibold" : "hover:text-primary";

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="bg-base-200 shadow">
      <div className="navbar max-w-7xl mx-auto px-4 relative justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={logo} alt="logo" className="w-8 h-8" />
            Event Explorer
          </Link>
        </div>

        {/* Center nav links */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-x-6">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/profile" className={navLinkStyle}>My Profile</NavLink>
        </div>

        {/* Right: Auth buttons or User Info */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              {/* User avatar with dropdown */}
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} />
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-44 text-center"
                >
                  <p className="text-sm font-medium">{user.displayName}</p>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-error mt-2 w-full"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary rounded-full px-5">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary rounded-full px-5">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/profile" className={navLinkStyle}>My Profile</NavLink></li>
            {user ? (
              <>
                <li><span className="text-xs text-gray-500">{user.displayName}</span></li>
                <li>
                  <button onClick={handleLogout} className="btn btn-sm btn-error w-full">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="btn btn-sm btn-primary w-full">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn btn-sm btn-primary w-full">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
