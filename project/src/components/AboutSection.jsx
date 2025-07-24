import React from 'react';
import { Cloud, Users, Award, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Megh Vaani</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced cloud motion prediction system developed by Team Megh Vaani for meteorological research and weather forecasting applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Cloud className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To provide cutting-edge cloud motion prediction capabilities using advanced machine learning models, 
            enabling researchers and meteorologists to better understand atmospheric dynamics and improve weather forecasting accuracy.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Team Megh Vaani</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our interdisciplinary team combines expertise in meteorology, machine learning, and atmospheric sciences 
            to develop innovative solutions for weather prediction and climate research.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Technology & Innovation</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">GAN Model</h3>
            <p className="text-gray-600 mb-4">
              Our previously developed Generative Adversarial Network model provides robust cloud motion predictions 
              with proven accuracy in various meteorological conditions.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Established baseline performance</li>
              <li>• Validated across multiple datasets</li>
              <li>• Optimized for real-time processing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Diffusion Model</h3>
            <p className="text-gray-600 mb-4">
              Our newly developed diffusion-based approach represents the latest advancement in cloud motion prediction, 
              offering enhanced accuracy and improved temporal consistency.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• State-of-the-art architecture</li>
              <li>• Superior temporal coherence</li>
              <li>• Enhanced prediction accuracy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Research Applications</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Weather Forecasting</h3>
            <p className="text-sm text-gray-600">
              Enhance short-term weather predictions with accurate cloud motion analysis
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Climate Research</h3>
            <p className="text-sm text-gray-600">
              Support climate studies with detailed atmospheric dynamics analysis
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Academic Studies</h3>
            <p className="text-sm text-gray-600">
              Enable advanced research in atmospheric sciences and meteorology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}