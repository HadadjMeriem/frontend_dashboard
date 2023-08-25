import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const PieChartPath= () => {
  const [selectedDataset, setSelectedDataset] = useState('A'); // Initial selection (can be 'A', 'B', or 'C')

  // Dummy data for three datasets (A, B, and C)
  const datasetA = {
    label: 'Dataset global',
    data: [3034, 1874, 886, 495],
    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
  };

  const datasetB = {
    label: 'Dataset d entrainement',
    data: [2023, 1200, 760, 345],
    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
  };

  const datasetC = {
    label: 'Dataset de validation',
    data: [70, 60, 80, 90],
    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
  };

  // Create the datasets array based on the filter selection
  const datasets = selectedDataset === 'A' ? [datasetA] : selectedDataset === 'B' ? [datasetB] : [datasetC];

  const data = {
    labels: ['Healthy', 'Crackles', 'Wheezes', 'Both'],
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white rounded shadow-lg p-6 h-500">
      <h2 className="text-2xl font-bold mb-4">Pathologies respiratoires</h2>
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
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PieChartPath;