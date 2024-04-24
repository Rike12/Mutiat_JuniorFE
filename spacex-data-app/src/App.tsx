import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Banner from './Banner';
import SearchForm from './SearchForm';
import Footer from './Footer';
import DataGrid from './DataList';
import { DataItem } from './Types';

const App = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<DataItem[]>('https://api.spacexdata.com/v3/capsules');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (filters: any) => {
    // Filter the data based on the provided filters
    const filteredData = data.filter((item) => {
      // Check if each item matches the filter criteria
      const statusMatch = !filters.status || item.status === filters.status;
      const originalLaunchMatch = !filters.originalLaunch || item.originalLaunch === filters.originalLaunch;
      const typeMatch = !filters.type || item.type === filters.type;
      return statusMatch && originalLaunchMatch && typeMatch;
    });

    // Update the data state with the filtered data
    setData(filteredData);
  };

  const handleItemClick = (item: DataItem) => {
    setSelectedItem(item);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <SearchForm onSearch={handleSearch} />
        <DataGrid items={data} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
