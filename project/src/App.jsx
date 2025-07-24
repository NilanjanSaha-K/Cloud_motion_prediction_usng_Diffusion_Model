import React, { useState } from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import PredictionResults from './components/PredictionResults';
import TimeRangeSelector from './components/TimeRangeSelector';
import ModelSelector from './components/ModelSelector';
import BandSelector from './components/BandSelector';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import DocumentationSection from './components/DocumentationSection';
import { Cloud, Play, AlertCircle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedModel, setSelectedModel] = useState('gan');
  const [selectedBand, setSelectedBand] = useState('Infrared 1');
  const [selectedTimeRanges, setSelectedTimeRanges] = useState(['30m', '1h', '1h30m', '2h']);
  const [isLoading, setIsLoading] = useState(false);
  
  const bands = ['Infrared 1', 'Infrared 2', 'Mid Infrared', 'Short Wave Infrared', 'Visible', 'Water Vapour'];
  
  const [images, setImages] = useState({
    'Infrared 1': null,
    'Infrared 2': null,
    'Mid Infrared': null,
    'Short Wave Infrared': null,
    'Visible': null,
    'Water Vapour': null
  });
  
  const [savedImages, setSavedImages] = useState({
    'Infrared 1': false,
    'Infrared 2': false,
    'Mid Infrared': false,
    'Short Wave Infrared': false,
    'Visible': false,
    'Water Vapour': false
  });

  const [predictions, setPredictions] = useState([
    { time: '+30 min', image: '' },
    { time: '+1 hour', image: '' },
    { time: '+1h 30min', image: '' },
    { time: '+2 hours', image: '' }
  ]);

  const [metrics, setMetrics] = useState({
    ssim: 0.82,
    psnr: 26.3,
    mse: 0.0013
  });

  const handleImageUpload = (band, file) => {
    setImages(prev => ({ ...prev, [band]: file }));
    if (!file) {
      setSavedImages(prev => ({ ...prev, [band]: false }));
    }
  };

  const handleImageSave = (band) => {
    if (images[band]) {
      setSavedImages(prev => ({ ...prev, [band]: true }));
    }
  };

  const handlePredict = async () => {
    const allBandsSaved = bands.every(band => savedImages[band]);
    
    if (!allBandsSaved) {
      alert('Please upload and save images for all spectral bands before prediction.');
      return;
    }

    setIsLoading(true);
    
    // Simulate prediction process
    setTimeout(() => {
      // Generate mock predictions based on selected time ranges
      const newPredictions = selectedTimeRanges.map(range => {
        const timeLabels = {
          '30m': '+30 min',
          '1h': '+1 hour',
          '1h30m': '+1h 30min',
          '2h': '+2 hours',
          '3h': '+3 hours',
          '6h': '+6 hours'
        };
        
        return {
          time: timeLabels[range] || range,
          image: `https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop`
        };
      });
      
      setPredictions(newPredictions);
      
      // Update metrics with slight variations
      setMetrics({
        ssim: 0.82 + (Math.random() - 0.5) * 0.1,
        psnr: 26.3 + (Math.random() - 0.5) * 5,
        mse: 0.0013 + (Math.random() - 0.5) * 0.001
      });
      
      setIsLoading(false);
    }, 3000);
  };

  const handleCopyMetrics = () => {
    const metricsText = `SSIM: ${metrics.ssim.toFixed(4)}\nPSNR: ${metrics.psnr.toFixed(1)} dB\nMSE: ${metrics.mse.toFixed(6)}`;
    navigator.clipboard.writeText(metricsText);
    alert('Metrics copied to clipboard!');
  };

  const handleExportMetrics = () => {
    // Simulate PDF export
    alert('Metrics exported as PDF! (This would trigger a download in a real implementation)');
  };

  const allBandsSaved = bands.every(band => savedImages[band]);

  if (activeTab === 'about') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <AboutSection />
        </main>
      </div>
    );
  }

  if (activeTab === 'contact') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </main>
      </div>
    );
  }

  if (activeTab === 'documentation') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <DocumentationSection />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Welcome to our<br />
                <span className="text-blue-600">Cloud Motion Predictor</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced satellite-based cloud motion prediction using state-of-the-art machine learning models 
              developed by Team Megh Vaani for meteorological research and weather forecasting.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Controls */}
            <div className="lg:col-span-1 space-y-6">
              {/* Image Upload Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Satellite Image Upload</h2>
                <BandSelector selectedBand={selectedBand} onBandChange={setSelectedBand} />
                <div className="mt-4">
                  <ImageUpload
                    band={selectedBand}
                    image={images[selectedBand]}
                    onImageUpload={handleImageUpload}
                    onImageSave={handleImageSave}
                    isSaved={savedImages[selectedBand]}
                  />
                </div>
                
                {/* Band Status Overview */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Upload Progress</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {bands.map(band => (
                      <div key={band} className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${savedImages[band] ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <span className={savedImages[band] ? 'text-green-700' : 'text-gray-500'}>
                          {band}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Model Selection */}
              <ModelSelector selectedModel={selectedModel} onModelChange={setSelectedModel} />

              {/* Time Range Selection */}
              <TimeRangeSelector 
                selectedRanges={selectedTimeRanges} 
                onRangeChange={setSelectedTimeRanges} 
              />

              {/* Predict Button */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                {!allBandsSaved && (
                  <div className="flex items-center space-x-2 mb-4 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <p className="text-sm text-yellow-800">
                      Upload and save all spectral band images to enable prediction
                    </p>
                  </div>
                )}
                
                <button
                  onClick={handlePredict}
                  disabled={!allBandsSaved || isLoading}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 text-lg font-semibold rounded-lg transition-all ${
                    !allBandsSaved || isLoading
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      <span>Predict</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="lg:col-span-2">
              <PredictionResults
                predictions={predictions}
                metrics={metrics}
                onCopyMetrics={handleCopyMetrics}
                onExportMetrics={handleExportMetrics}
                selectedBand={selectedBand}
                savedImages={savedImages}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;