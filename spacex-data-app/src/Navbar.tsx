import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import logo from './assets/logo.png';
import google from './assets/google.png';
import hide from './assets/hide.png';
import SignIn from './Signin';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false); // State to manage visibility of sign-in form

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSignInForm = () => {
    setIsSignInVisible(!isSignInVisible);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="object-cover object-center w-60 h-10" />
          </div>

          {/* Hamburger Menu */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-800"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>

        
          <div className="hidden md:block">
            <div className="flex items-center">
              <a href="#" className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">Mission</a>
              <a href="#" className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">Launches</a>
              <a href="#" className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">Careers</a>
            </div>
          </div>

          
          <div className="hidden md:block">

            <Link to='/signin' className="text-white block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium" onClick={toggleSignInForm}>Sign In</Link>
         
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-white block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-white block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <Link to='/signin' className="text-white block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Sign In</Link>
          </div>
        </div>
      )}

    
      {isSignInVisible && (
        <Routes>
          <Route path="./signin" element={<SignIn />} />
        </Routes>
      )}
    </nav>
  );
};

export default Navbar;
