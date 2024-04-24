import React, { useState } from 'react';
import { Link } from "react-router-dom";
import google from './assets/google.png';


const SignIn = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
     

      {/* Signup Content */}
      <div className="flex ">
        <div className="w-3/5 p-8 justify-center">
          {/* Register with Email */}
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Log In</h2>
         
          <div className="mb-2">
            <input
              type="email"
              className="block w-full  mb-6 px-4 py-2 mt-2 text-black bg-green opacity-6 border border-gray-300 rounded-md  focus:bg-green-200 focus:border-[#568302] focus:bg-green-450 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder='email or username'
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 mb-8 text-black  bg-white border rounded-md focus:bg-green-200 focus:border-[#568302] focus:ring-[#568302] focus:outline-none focus:bg-green-200 focus:ring focus:ring-opacity-40"
              placeholder='password'
            />
           
          </div>
                   
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-blue-600 text-white rounded-md hover:bg-black focus:outline-none ">
              Log In
            </button>
            <div className='mb-8'>
              <span className='text-white float-right text-sm '>Forgotten your password?</span>
            </div>
          </div>

          <div className="my-4 mt-12 mb-12 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              OR
            </p>
          </div>

          <button
            className="w-full max-w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
          >
            <div className="bg-white p-1 rounded-full">
              <img
                src={google}
                alt="google Image"
                className="w-6" 
              />
            </div>
            <span className="ml-4 text-white">
              Register with Google
            </span>
          </button>
            
          {/* Footer */}
          <div className="text-center w-full p-4">
            <p className="text-gray-600">
              <a href="#" className="text-white">Having trouble?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
