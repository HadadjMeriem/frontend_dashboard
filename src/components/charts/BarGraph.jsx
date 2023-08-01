import React from 'react';
import { Bar} from 'react-chartjs-2';
import { useState } from 'react';
import {
    Chart as ChartJS,
    registerables,
  } from 'chart.js';

ChartJS.register(...registerables);
const BarGraph = () => {
    const [selectedDataset, setSelectedDataset] = useState('A'); // Initial selection (can be 'A', 'B', or 'C')
  
    // Dummy data for three datasets (A, B, and C)
    const datasetA = {
      label: 'Dataset global',
      data: [3034, 1874,886,495],
      backgroundColor: 'rgb(216,191,216)'
    };
  
    const datasetB = {
      label: 'Dataset d entrainement',
      data: [2023, 1200, 760,345],
      backgroundColor: 'rgb(216,191,216)'
    };
  
    const datasetC = {
      label: 'Dataset de validation',
      data: [70, 60, 80, 90],
      backgroundColor: 'rgb(216,191,216)'
    };
  
    // Create the datasets array based on the filter selection
    const datasets = selectedDataset === 'A' ? [datasetA] : selectedDataset === 'B' ? [datasetB] : [datasetC];
  
    const data = {
      labels: ['Healthy', 'Crackles', 'Wheezes', 'Both'],
      datasets,
    };
  
    const options = {
      indexAxis: 'x', // Display bar graph vertically
      scales: {
        y: {
          beginAtZero: true,
        },
        barPercentage: 0.8, // Adjust the bar height (default is 0.9, 1.0 is full height)
        categoryPercentage: 0.8, // Adjust the spacing between bars (default is 0.8, 1.0 is no spacing)
      },
    };
  
    return (
      <div className="bg-white rounded shadow-lg p-6 h-500">
        <h2 className="text-2xl font-bold mb-4">Sons respiratoires</h2>
        <div className="grid-rows-2">
          <div>
            <label className="block font-semibold mb-2">Séléctionner le split:</label>
            <select
              className="block w-full p-2 border rounded"
              value={selectedDataset}
              onChange={(e) => setSelectedDataset(e.target.value)}
            >
              <option value="A">Dataset global</option>
              <option value="B">Dataset entrainement</option>
              <option value="C">Dataset validation</option>
            </select>
          </div>
          <div>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    );
  };
  
  export default BarGraph;