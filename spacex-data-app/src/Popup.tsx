import React from 'react';

interface PopupProps {
  item: { name: string; description: string }; // Define the type for 'item'
  onClose: () => void; // Define the type for 'onClose' function
}

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 max-w-sm">
        <h2 className="text-lg font-semibold mb-4">{item.name}</h2>
        <p>{item.description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
