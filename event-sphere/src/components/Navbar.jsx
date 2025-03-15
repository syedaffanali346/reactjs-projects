import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className='fixed top-0 left-0 right-0 w-full z-10 bg-transparent'>
      <div className='mx-auto flex justify-between items-center py-4 px-6 md:px-2 lg:px-32 bg-gray-900'>
        <Link to="/"><img src={assets.logo} alt="" /></Link>
        <ul className='hidden md:flex gap-7 text-white'>
          <Link to="/" className='cursor-pointer hover:text-gray-400'>Home</Link>
          <Link to="/find-events" className='cursor-pointer hover:text-gray-400'>Find Events</Link>
          <Link to="/testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</Link>
          <Link to="/contact" className='cursor-pointer hover:text-gray-400'>Contact</Link>
        </ul>

        {/* Buttons: Sign Up and Login */}
        <div className='hidden md:flex gap-4'>
          {/* Sign Up Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className='bg-white px-8 py-2 rounded-full focus:outline-none'
            >
              Sign up
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md'>
                <Link
                  to="/signup-form"
                  onClick={() => setShowDropdown(false)}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Sign up as User
                </Link>
                <Link
                  to="/signup-form"
                  onClick={() => setShowDropdown(false)}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Sign up as Organizer
                </Link>
                <Link
                  to="/signup-form"
                  onClick={() => setShowDropdown(false)}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Sign up as Admin
                </Link>
              </div>
            )}
          </div>

          {/* Login Button */}
          <Link
            to="/login-form"
            className='bg-blue-500 text-white px-8 py-2 rounded-full focus:outline-none hover:bg-blue-600'
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt=""
          className='md:hidden w-7 cursor-pointer'
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className='flex justify-end p-6 cursor-pointer'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt=""
            className='w-6'
          />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <Link onClick={() => setShowMobileMenu(false)} to="/" className='px-4 py-2 rounded-full inline-block'>Home</Link>
          <Link onClick={() => setShowMobileMenu(false)} to="/find-events" className='px-4 py-2 rounded-full inline-block'>Find Events</Link>
          <Link onClick={() => setShowMobileMenu(false)} to="/testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</Link>
          <Link onClick={() => setShowMobileMenu(false)} to="/contact" className='px-4 py-2 rounded-full inline-block'>Contact</Link>
        </ul>
        <div className='flex flex-col items-center gap-4 mt-5'>
          {/* Sign Up with Dropdown */}
          <div className="relative w-3/4 text-center">
            <button
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              className='px-6 py-2 bg-blue-500 text-white rounded-full w-full text-center focus:outline-none'
            >
              Sign Up
            </button>
            {showMobileDropdown && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md w-full">
                <Link
                  to="/signup/user"
                  onClick={() => {
                    setShowMobileDropdown(false);
                    setShowMobileMenu(false);
                  }}
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                >
                  Sign up as User
                </Link>
                <Link
                  to="/signup/organizer"
                  onClick={() => {
                    setShowMobileDropdown(false);
                    setShowMobileMenu(false);
                  }}
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                >
                  Sign up as Organizer
                </Link>
                <Link
                  to="/signup/admin"
                  onClick={() => {
                    setShowMobileDropdown(false);
                    setShowMobileMenu(false);
                  }}
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                >
                  Sign up as Admin
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/login-form"
            className='px-6 py-2 bg-gray-300 text-gray-900 rounded-full w-3/4 text-center'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
