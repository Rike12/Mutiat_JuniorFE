// DataGrid.tsx
import React, { useState } from 'react';
import { DataItem } from './Types'; // Define your ItemType interface

const DataGrid: React.FC<{ items: DataItem[] }> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  const handleClick = (item: DataItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="grid grid-cols gap-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border cursor-pointer" onClick={() => handleClick(item)}>
          <p>{item.name}</p>
          <p>{item.description}</p>
         
        </div>
      ))}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-around items-center">
          <div className="bg-white p-8">
            <p>{selectedItem.name}</p>
            <p>{selectedItem.description}</p>

            <button onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataGrid;
