import React, { useState } from 'react';
import { Book, Code, Download, ChevronDown, ChevronRight, FileText, Zap, Brain } from 'lucide-react';

export default function DocumentationSection() {
  const [expandedSections, setExpandedSections] = useState(['getting-started']);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Welcome to the Megh Vaani Cloud Motion Predictor. This guide will help you get started with using our advanced prediction models.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Quick Start Steps:</h4>
            <ol className="list-decimal list-inside text-blue-800 space-y-1">
              <li>Upload satellite images for all required spectral bands</li>
              <li>Save each uploaded image to confirm selection</li>
              <li>Choose your preferred prediction model (GAN or Diffusion)</li>
              <li>Select time intervals for prediction</li>
              <li>Click "Predict" to generate cloud motion forecasts</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'image-requirements',
      title: 'Image Requirements',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Supported Image Formats</h4>
          <p className="text-gray-600">
            Our system supports all major image formats including JPG, PNG, GIF, TIFF, and BMP files.
          </p>
          
          <h4 className="font-semibold text-gray-900">File Size Limitations</h4>
          <p className="text-gray-600">
            Maximum file size: 5MB per image. Larger files may result in processing delays or errors.
          </p>
          
          <h4 className="font-semibold text-gray-900">Required Spectral Bands</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Infrared 1</li>
                <li>• Infrared 2</li>
                <li>• Mid Infrared</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Short Wave Infrared</li>
                <li>• Visible</li>
                <li>• Water Vapour</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> All spectral bands must be uploaded and saved before prediction can be performed.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'models',
      title: 'Prediction Models',
      icon: Brain,
      content: (
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">GAN Model</h4>
            </div>
            <p className="text-gray-600 mb-3">
              Our Generative Adversarial Network model, previously developed by Team Megh Vaani, provides reliable cloud motion predictions.
            </p>
            <div className="bg-blue-50 p-3 rounded">
              <h5 className="font-medium text-blue-900 mb-2">Key Features:</h5>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Proven accuracy across diverse weather conditions</li>
                <li>• Optimized for real-time processing</li>
                <li>• Extensive validation on historical data</li>
                <li>• Stable performance characteristics</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-gray-900">Diffusion Model</h4>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Latest
              </span>
            </div>
            <p className="text-gray-600 mb-3">
              Our newly developed diffusion-based model represents the cutting edge of cloud motion prediction technology.
            </p>
            <div className="bg-green-50 p-3 rounded">
              <h5 className="font-medium text-green-900 mb-2">Advanced Capabilities:</h5>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Enhanced temporal consistency</li>
                <li>• Superior handling of complex weather patterns</li>
                <li>• Improved long-term prediction accuracy</li>
                <li>• State-of-the-art architecture</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'metrics',
      title: 'Understanding Metrics',
      icon: Code,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Our system provides three key metrics to evaluate prediction quality:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900">SSIM (Structural Similarity Index)</h4>
              <p className="text-gray-600 text-sm">
                Measures structural similarity between predicted and actual images. Values range from 0 to 1, with 1 indicating perfect similarity.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900">PSNR (Peak Signal-to-Noise Ratio)</h4>
              <p className="text-gray-600 text-sm">
                Measures image quality in decibels (dB). Higher values indicate better quality, typically ranging from 20-40 dB for good predictions.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-900">MSE (Mean Square Error)</h4>
              <p className="text-gray-600 text-sm">
                Measures average squared differences between predicted and actual pixel values. Lower values indicate better accuracy.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            For developers interested in integrating our prediction capabilities into their applications.
          </p>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`// Example API usage
const prediction = await fetch('/api/predict', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'diffusion',
    bands: {
      'infrared1': 'base64_image_data',
      'infrared2': 'base64_image_data',
      // ... other bands
    },
    timeRanges: ['30m', '1h', '2h']
  })
});

const result = await prediction.json();`}
            </pre>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> API access is currently available for research collaborators. Contact us for access credentials.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive guide to using the Megh Vaani Cloud Motion Predictor system.
        </p>
      </div>

      <div className="space-y-4">
        {documentationSections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSections.includes(section.id);
          
          return (
            <div key={section.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <Download className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900">Additional Resources</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <button className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-900">Download User Manual (PDF)</span>
          </button>
          
          <button className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Code className="w-5 h-5 text-green-600" />
            <span className="font-medium text-gray-900">API Documentation (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}