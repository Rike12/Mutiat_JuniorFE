import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Banner from './Banner';
import SearchForm from './SearchForm'; 
import Footer from './Footer';
import SignIn from './Signin';


// Define the type for the query parameter
interface SearchQuery {
  status: string;
  originalLaunch: string;
  type: string;
}

const App = () => {
  // Use the defined type for the query parameter
  const handleSearch = (query: SearchQuery) => {
    console.log('Search query:', query);

    // Example: Making a GET request using axios
    axios.get('https://api.example.com/search', { params: query })
      .then(response => {
        console.log('Search results:', response.data);
        // Handle response data
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        // Handle error
      });
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
       
        <SearchForm onSearch={handleSearch} /> 
        <Footer />
      </div>
    </Router>
  );
};

export default App;
