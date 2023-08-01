import React from 'react';

const Popup = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 bg-white p-6 rounded shadow-lg text-center block">
        {message}
        <div>
        <button
          className="mt-4 px-4 py-2 bg-indigo-800 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
        </div>
      
      </div>
    </div>
  );
};

export default Popup;