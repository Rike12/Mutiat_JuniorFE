import React from "react";
import { DataItem } from './Types'; 

interface ItemModalProps {
  item: DataItem | null;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-md z-50">
        <h2 className="text-xl font-semibold">{item.details}</h2>
        <p>Status: {item.status}</p>
        <p>Type: {item.type}</p>
        <p>Original Launch: {new Date(item.original_launch).toLocaleString()}</p>
        <button className="mt-4 bg-gray-400 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ItemModal;
