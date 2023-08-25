import React from 'react'

const ConfusionMatrix = ({ matrix }) => {
    return (
      <div className="grid grid-cols-5 gap-1">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((value, colIndex) => (
              <div
                key={colIndex}
                className="border border-gray-300 p-2 text-center flex-1"
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  export default ConfusionMatrix;