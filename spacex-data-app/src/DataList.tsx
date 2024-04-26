import React, { useState, useEffect } from "react";
import { DataItem } from './Types';
import ItemModal from './Popup'; 
import SearchForm from "./search/SearchForm";

interface ItemListProps {
  items: DataItem[];
  onItemClick: (item: DataItem) => void;
}

const ITEMS_PER_PAGE = 10;

const ItemList: React.FC<ItemListProps> = ({ items, onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [filteredItems, setFilteredItems] = useState<DataItem[]>(items);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(items.length / ITEMS_PER_PAGE));
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setFilteredItems(items.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(items.length / ITEMS_PER_PAGE));
  }, [items, currentPage]);

  const handleCardClick = (item: DataItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSearch = (query: { status: string; originalLaunch: string; type: string }) => {
    const { status, originalLaunch, type } = query;
    const filtered = items.filter((item) =>
      item.status?.toLowerCase().includes(status.toLowerCase()) &&
      item.original_launch?.toLowerCase().includes(originalLaunch.toLowerCase()) &&
      item.type?.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(1); 
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
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
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <SearchForm onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 ">
        {filteredItems.map((item) => (
          <div
            key={item.capsule_id}
            className="border border-gray-300 rounded-md p-4 bg-gray-200 cursor-pointer"
            onClick={() => {
              onItemClick(item);
              handleCardClick(item);
            }}
          >
            <h2 className="text-xl font-semibold">{item.details}</h2>
            <p>Status: {item.status}</p>
            <p>Type: {item.type}</p>
            <p>Original Launch: {new Date(item.original_launch).toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between px-6 mb-5">
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-semibold mt-7 py-2 px-6 rounded-md" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button className="bg-gray-400 hover:bg-gray-600 text-white font-semibold mt-7 py-2 px-6 rounded-md" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
      {selectedItem && <ItemModal item={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
};

export default ItemList;
