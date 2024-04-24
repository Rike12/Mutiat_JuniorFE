import React from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import Banner from './Banner';
import SearchForm from './SearchForm'; 
import Footer from './Footer'


const App = () => {
  const handleSearch = (query: { status: string; originalLaunch: string; type: string }) => {

    console.log('Search query:', query);
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <SearchForm onSearch={handleSearch} /> 
      <Footer/>
      
    </div>
  );
};

export default App;
