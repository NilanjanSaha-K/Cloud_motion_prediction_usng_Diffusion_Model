import React from 'react';
import { Brain, Zap } from 'lucide-react';

export default function ModelSelector({ selectedModel, onModelChange }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Selection</h3>
      
      <div className="space-y-3">
        <label className="flex items-start space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="model"
            value="gan"
            checked={selectedModel === 'gan'}
            onChange={() => onModelChange('gan')}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-900">GAN Model</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Previously Developed By Team Megh Vaani
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Generative Adversarial Network for cloud motion prediction
            </p>
          </div>
        </label>

        <label className="flex items-start space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="model"
            value="diffusion"
            checked={selectedModel === 'diffusion'}
            onChange={() => onModelChange('diffusion')}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-900">Diffusion Model</span>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                New
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Newly Developed by Team Megh Vaani
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Advanced diffusion-based approach for enhanced accuracy
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}