import React from 'react';
import { Clock } from 'lucide-react';

export default function TimeRangeSelector({ selectedRanges, onRangeChange }) {
  const predefinedRanges = [
    { value: '30m', label: '+30 min' },
    { value: '1h', label: '+1 hour' },
    { value: '1h30m', label: '+1h 30min' },
    { value: '2h', label: '+2 hours' },
    { value: '3h', label: '+3 hours' },
    { value: '6h', label: '+6 hours' }
  ];

  const handleRangeToggle = (range) => {
    if (selectedRanges.includes(range)) {
      onRangeChange(selectedRanges.filter(r => r !== range));
    } else {
      onRangeChange([...selectedRanges, range]);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Clock className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Time Range Selection</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Select the time intervals for cloud motion prediction
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {predefinedRanges.map((range) => (
          <button
            key={range.value}
            onClick={() => handleRangeToggle(range.value)}
            className={`p-3 text-sm font-medium rounded-lg border-2 transition-all ${
              selectedRanges.includes(range.value)
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      {selectedRanges.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-800 mb-1">Selected Intervals:</p>
          <p className="text-sm text-blue-600">
            {selectedRanges.map(range => predefinedRanges.find(r => r.value === range)?.label).join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}