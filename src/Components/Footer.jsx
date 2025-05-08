import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary underline font-semibold"
      : "text-gray-600 hover:text-primary transition duration-200";

  return (
    <footer className=" bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Top: Logo + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <Link
            to="/"
            className="flex items-center gap-2 text-3xl font-bold text-gray-800"
          >
            <img src={logo} alt="logo" className="w-8 h-8" />
            Event Explorer
          </Link>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            
            <NavLink to="/profile" className={navLinkStyle}>My Profile</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
            
          </div>
        </div>

       
        <hr className="my-8 border-gray-300" />

       
        <div className="md:flex justify-between">
         
          <div className="md:w-5/12 text-sm text-gray-600 mb-6 md:mb-0" id="terms">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Terms</h2>
            <p>
              By using our platform, you agree to our terms of service and user guidelines.
            </p>
          </div>



       
          <div className="md:w-5/12 text-sm text-gray-600" id="privacy">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Privacy</h2>
            <p>
              We prioritize your privacy. Read our policy to understand how we handle your data.
            </p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
         
          <div className="flex gap-6 text-xl text-gray-600 mb-6 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-600 transition duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-500 transition duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-sky-700 transition duration-200" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-red-600 transition duration-200" />
            </a>
          </div>

          
          <p className="text-sm text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Event Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
