import React, { useState } from 'react';

interface SearchFormProps {
  onSearch?: (query: { status: string; originalLaunch: string; type: string }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [status, setStatus] = useState('');
  const [originalLaunch, setOriginalLaunch] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    // Construct the search query based on selected filters
    const query = {
      status: status,
      originalLaunch: originalLaunch,
      type: type
    };

    // Pass the query to the parent component for processing
    onSearch && onSearch(query);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Search Rockets</h2>
      <div className="flex flex-wrap gap-4">
        {/* Status Filter */}
        <div>
          <label htmlFor="status" className="block mb-1">Status:</label>
          <input
            type="text"
            id="status"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>

        {/* Original Launch Filter */}
        <div>
          <label htmlFor="originalLaunch" className="block mb-1">Original Launch:</label>
          <input
            type="text"
            id="originalLaunch"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={originalLaunch}
            onChange={(e) => setOriginalLaunch(e.target.value)}
          />
        </div>

        {/* Type Filter */}
        <div>
          <label htmlFor="type" className="block mb-1">Type:</label>
          <input
            type="text"
            id="type"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <div >
          <button
            className="bg-blue-500  hover:bg-blue-600 text-white font-semibold mt-7 py-2 px-6 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
