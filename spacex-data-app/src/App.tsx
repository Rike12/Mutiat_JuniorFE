import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import SearchForm from './SearchForm'; // 

const App = () => {
  const handleSearch = (query: { status: string; originalLaunch: string; type: string }) => {

    console.log('Search query:', query);
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <SearchForm onSearch={handleSearch} /> 
    </div>
  );
};

export default App;
