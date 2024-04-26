import React from 'react';
import rocketImage from './assets/rocket.png';



const Banner = () => {
  return (
    <div className="bg-gray-900 text-white py-20  banner  bg-center h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center">
        
        
        <div className="text-center sm:text-left sm:w-1/2 mt-6 sm:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore SpaceX Rockets</h1>
          <p className="text-lg sm:text-xl mb-8">Discover the latest rockets launched by SpaceX and explore their missions.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
        </div>


        <div className="mt-10 sm:mt-0 sm:w-1/2">
          <img src={rocketImage} alt="Rocket" className="w-full h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
