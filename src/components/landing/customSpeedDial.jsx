import React, { useState } from 'react';
import { FaPlus, FaHome, FaCog, FaTh } from 'react-icons/fa';

const CustomSpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: <FaHome className="text-xl" />, label: 'Home' },
    { icon: <FaCog className="text-xl" />, label: 'Settings' },
    { icon: <FaTh className="text-xl" />, label: 'Dashboard' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Action Buttons */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        {actions.map((action, index) => (
          <button
            key={index}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors group"
            title={action.label}
          >
            {action.icon}
            <span className="absolute right-full mr-3 px-2 py-1 text-sm font-medium text-white bg-gray-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              {action.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Button */}
      <button
        className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl hover:bg-indigo-700 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaPlus className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
    </div>
  );
};

export default CustomSpeedDial;