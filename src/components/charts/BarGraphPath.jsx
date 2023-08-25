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
      data: [5641,160,284,316,240,100,32,6],
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
      labels: ['COPD', '', 'Wheezes', 'Bothe'],
      datasets,
    };
  
    const options = {
      indexAxis: 'x', // Display bar graph vertically
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div className="bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Pathologies respiratoires</h2>
        <div className="grid-rows-2">
          <div>
            <label className="block font-semibold mb-2">Sélectionnez le split:</label>
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