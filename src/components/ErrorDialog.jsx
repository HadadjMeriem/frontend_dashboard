import React from 'react';
import Modal from 'react-modal';

const ErrorDialog = ({ isOpen, onClose,errorMessage}) => {
  return (
    <>
    {/* Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-gray-800 opacity-50 z-10"
        onClick={onClose}
      ></div>
    )}

    {/* Error Dialog */}
    <div
      className={`fixed inset-0 flex justify-center items-center z-20 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-64">
        <div className="text-red-600 text-4xl mb-4">!</div>
        <h2 className="text-xl font-semibold mb-2">Error</h2>
        <p className="text-sm mb-4">{errorMessage}</p>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  </>
  );
};

export default ErrorDialog;