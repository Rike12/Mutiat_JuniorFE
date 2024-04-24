import React from 'react';
import rocketImage from './assets/rocket.png';



const Banner = () => {
  return (
    <div className="bg-gray-900 text-white py-20  banner  bg-center h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        
        {/* Text Content */}
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold mb-4">Explore SpaceX Rockets</h1>
          <p className="text-lg mb-8">Discover the latest rockets launched by SpaceX and explore their missions.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
        </div>

        {/* Rocket Image */}
        <div className="mr-10">
          <img src={rocketImage} alt="Rocket" className="w-74 h-70 " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
