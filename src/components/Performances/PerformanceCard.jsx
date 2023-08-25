import { TextStyle } from '@syncfusion/ej2/svg-base';
import React from 'react';
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.1/dist/full.css" rel="stylesheet" type="text/css" />
const PerformanceCard = ({ metricName, percent,color,textColor}) => { 
    const circumference = 2 * Math.PI * 50;
    const dashOffset = circumference - (percent / 100) * circumference;
    const textStyle = {
        color: textColor, // Use the passed textColor prop here
      };
    return (
        <div className="w-64 p-4 mx-auto bg-white rounded-lg shadow-md">
        <h2 className="mb-2 text-lg font-semibold">{metricName}</h2>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full">
            <circle
              className="text-gray-300"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="65"
              cy="65"
            />
            <circle
              className='text-current'
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              stroke={color}
              fill="transparent"
              r="50"
              cx="65"
              cy="65"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl" style={textStyle}>
            {percent}%
          </span>
        </div>
      </div>
    );

};

export default PerformanceCard;