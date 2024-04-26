import React from 'react';
import Twitter from './assets/twitter.png';
import Github from './assets/github.jpg';
import LinkedIn from './assets/linkedin.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
          <p className="text-lg font-bold mr-4 lg:mr-8">Follow us:</p>
          <div className="ml-4 flex space-x-4">
            
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Logo"className="w-6  hover:bg-blue-600"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Logo"className=" w-6 hover:bg-blue-600"/>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="Logo"className="w-6 "/>
            </a>
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
       
          <button className="bg-gray-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2">
          <a href="#" className=" hover:underline">New Launch Updates</a>
          </button>
        </div>
        <button className="bg-gray-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          <a href="#">Contact Us</a>
        </button>
      </div>
      <div className="mt-4 text-center">&copy; {new Date().getFullYear()} SpaceX. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
