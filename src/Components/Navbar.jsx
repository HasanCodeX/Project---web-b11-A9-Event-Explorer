// src/Components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../Context/firebase/firebase.config";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-primary font-semibold underline underline-offset-4" : "hover:text-primary transition-colors duration-200";

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="bg-base-200 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-6 justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={logo} alt="logo" className="w-9 h-9 rounded-full" />
            <span className="hidden sm:inline">Event Explorer</span>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-x-6 items-center">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/profile" className={navLinkStyle}>My Profile</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
        </div>

        {/* Right Auth Section */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} alt="User" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 z-[50] p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
              >
                <li className="text-center">
                  <p className="text-sm font-medium">{user.displayName || "User"}</p>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-error w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-primary rounded-full px-5">
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
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-3 shadow bg-base-100 rounded-box w-56"
          >
            <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/profile" className={navLinkStyle}>My Profile</NavLink></li>
            <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
            

            {user ? (
              <>
                <li className="text-sm text-gray-500 px-2">{user.displayName}</li>
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
