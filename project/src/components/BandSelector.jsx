import React from 'react';
import { Layers } from 'lucide-react';

export default function BandSelector({ selectedBand, onBandChange }) {
  const bands = [
    'Infrared 1',
    'Infrared 2', 
    'Mid Infrared',
    'Short Wave Infrared',
    'Visible',
    'Water Vapour'
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Layers className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Band Selection</h3>
      </div>
      
      <select
        value={selectedBand}
        onChange={(e) => onBandChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {bands.map((band) => (
          <option key={band} value={band}>
            {band}
          </option>
        ))}
      </select>
      
      <p className="text-xs text-gray-500 mt-2">
        Select the spectral band for prediction analysis
      </p>
    </div>
  );
}