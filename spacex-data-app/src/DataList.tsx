import React, { useState, useEffect } from "react";
import SearchForm from "./search/SearchForm";
import { DataItem } from './Types'; 



interface GridListProps {
  items: DataItem[];
  onItemClick: (items: DataItem) => void;
}
const ITEMS_PER_PAGE = 10;
const GridList: React.FC<GridListProps> = ({ items, onItemClick }) => {
  const [filteredItems, setFilteredItems] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  setFilteredItems(items.slice(startIndex, endIndex));
  setTotalPages(Math.ceil(items.length / ITEMS_PER_PAGE));
}, [items, currentPage, ITEMS_PER_PAGE]);


  const handleSearch = (query: { status: string; originalLaunch: string; type: string }) => {
    const { status, originalLaunch, type } = query;
    
    
    const filtered = items.filter((item) =>
      item.status?.toLowerCase().includes(status.toLowerCase()) &&
      item.original_launch?.toLowerCase().includes(originalLaunch.toLowerCase()) &&
      item.type?.toLowerCase().includes(type.toLowerCase())
    );
  
    setFilteredItems(filtered);
  };
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-4 p-6 ">
       {filteredItems.map((item) => (
          <div
            key={item.capsule_id}
            className="border border-gray-300 rounded-md p-4 bg-gray-200" onClick={() => onItemClick(item)}
          >
            <h2 className="text-xl font-semibold">{item.details}</h2>
            <p>Status: {item.status}</p>
            <p>Type: {item.type}</p>
            <p>Original Launch: {new Date(item.original_launch).toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-6 mb-5">
        <button  className="bg-gray-400  hover:bg-gray-600 text-white font-semibold mt-7 py-2 px-6 rounded-md" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button  className="bg-gray-400  hover:bg-gray-600 text-white font-semibold mt-7 py-2 px-6 rounded-md" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default GridList;
