import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import DataGrid from './DataList';
import { DataItem } from './Types'; 

const App = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null); // Annotate selectedItem as DataItem | null

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

  const handleItemClick = (item: DataItem) => {
    setSelectedItem(item);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <DataGrid items={data} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
