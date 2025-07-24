import React from 'react';
import { Download, Copy, FileText, Layers } from 'lucide-react';

export default function PredictionResults({ 
  predictions, 
  metrics, 
  onCopyMetrics, 
  onExportMetrics,
  selectedBand,
  savedImages
}) {
  const bands = ['Infrared 1', 'Infrared 2', 'Mid Infrared', 'Short Wave Infrared', 'Visible', 'Water Vapour'];
  const savedBands = bands.filter(band => savedImages[band]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Predictions</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Layers className="w-4 h-4" />
          <span>Bands: <span className="font-medium text-blue-600">{savedBands.length} of {bands.length} uploaded</span></span>
        </div>
      </div>

      {savedBands.length > 0 ? (
        <div className="space-y-8">
          {savedBands.map((band) => (
            <div key={band} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Band: {band}</h3>
                <div className="flex items-center space-x-1 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">Uploaded</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Predictions for the next time intervals
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {predictions.map((prediction, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full h-24 bg-gray-200 rounded-lg mb-2 flex items-center justify-center border">
                      {prediction.image ? (
                        <img 
                          src={prediction.image} 
                          alt={`${band} prediction ${prediction.time}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="text-gray-400 text-xs">
                          Prediction Image
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{prediction.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-6 p-6 bg-gray-50 rounded-lg text-center">
          <Layers className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 mb-2">No bands uploaded yet</p>
          <p className="text-sm text-gray-500">
            Upload and save images for all spectral bands to see predictions
          </p>
        </div>
      )}

      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Metrics</h3>
          <div className="flex space-x-2">
            <button
              onClick={onCopyMetrics}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>Copy Metrics</span>
            </button>
            <button
              onClick={onExportMetrics}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{metrics.ssim.toFixed(4)}</div>
            <div className="text-sm font-medium text-blue-800">SSIM</div>
            <div className="text-xs text-blue-600 mt-1">Structural Similarity</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{metrics.psnr.toFixed(1)} dB</div>
            <div className="text-sm font-medium text-green-800">PSNR</div>
            <div className="text-xs text-green-600 mt-1">Peak Signal-to-Noise Ratio</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{metrics.mse.toFixed(6)}</div>
            <div className="text-sm font-medium text-purple-800">MSE</div>
            <div className="text-xs text-purple-600 mt-1">Mean Square Error</div>
          </div>
        </div>
      </div>
    </div>
  );
}