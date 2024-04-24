import React, { useState, useEffect } from "react";
import SearchForm from "./search/SearchForm";

interface Item {
  capsule_id: string;
  capsule_serial: string;
  details: string;
  status: string;
  type: string;
  original_launch: string;
}

interface GridListProps {
  items: Item[];
}

const GridList: React.FC<GridListProps> = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [items, searchTerm]);

  const handleSearch = (query: { status: string; originalLaunch: string; type: string }) => {
    const { status, originalLaunch, type } = query;
    
    
    const filtered = items.filter((item) =>
      item.status?.toLowerCase().includes(status.toLowerCase()) &&
      item.original_launch?.toLowerCase().includes(originalLaunch.toLowerCase()) &&
      item.type?.toLowerCase().includes(type.toLowerCase())
    );
  
    setFilteredItems(filtered);
  };
  

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-4 p-6 ">
       {filteredItems.map((item) => (
          <div
            key={item.capsule_id}
            className="border border-gray-300 rounded-md p-4 bg-gray-200"
          >
            <h2 className="text-xl font-semibold">{item.details}</h2>
            <p>Status: {item.status}</p>
            <p>Type: {item.type}</p>
            <p>Original Launch: {new Date(item.original_launch).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridList;
