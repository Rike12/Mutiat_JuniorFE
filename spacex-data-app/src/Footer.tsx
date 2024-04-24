import React from 'react';
import Twitter from './assets/twitter.svg';
import Facebook from './assets/facebook.svg';
import Github from './assets/github.svg';
import LinkedIn from './assets/linkedin.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-lg font-bold">Follow us:</p>
          <div className="ml-4 flex space-x-4">
            {/* Social media icons */}
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Logo"className="w-6 h-10"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Logo"className=" w-6 h-10"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Logo"className="w-6 h-10"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="Logo"className="w-6 h-10"/>
            </a>
            
          </div>
        </div>
        <div>
       
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          <a href="#" className=" hover:underline">New Launch Updates</a>
          </button>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          <a href="#">Contact Us</a>
        </button>
      </div>
      <div className="mt-4 text-center">&copy; {new Date().getFullYear()} SpaceX. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
