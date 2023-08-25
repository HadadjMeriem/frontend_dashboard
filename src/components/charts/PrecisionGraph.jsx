import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    registerables,
  } from 'chart.js';
ChartJS.register(...registerables);
const PrecisionGraph = ({ labels, precisionData }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Precision',
        data: precisionData,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className='h-full w-full'>
        {console.log(precisionData)}
      <Line className='h-full' data={data} options={options} />
    </div>
  );
};

export default PrecisionGraph;