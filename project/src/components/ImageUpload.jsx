import React, { useCallback } from 'react';
import { Upload, X, Check, Save } from 'lucide-react';

export default function ImageUpload({ band, image, onImageUpload, onImageSave, isSaved }) {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      if (imageFile.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      onImageUpload(band, imageFile);
    }
  }, [band, onImageUpload]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleFileSelect = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      onImageUpload(band, file);
    }
  }, [band, onImageUpload]);

  const handleRemove = useCallback(() => {
    onImageUpload(band, null);
  }, [band, onImageUpload]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">{band}</h3>
        {isSaved && (
          <div className="flex items-center space-x-1 text-green-600">
            <Check className="w-4 h-4" />
            <span className="text-xs font-medium">Saved</span>
          </div>
        )}
      </div>
      
      {!image ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-2 font-medium">
            Select or drag image file
          </p>
          <p className="text-xs text-gray-500 mb-3">
            All image formats supported (max 5MB)
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id={`file-${band.replace(/\s+/g, '-')}`}
          />
          <label
            htmlFor={`file-${band.replace(/\s+/g, '-')}`}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
          >
            Choose File
          </label>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`${band} preview`}
              className="w-full h-32 object-cover rounded-lg border"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
            <p className="font-medium">{image.name}</p>
            <p>{(image.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
          <button
            onClick={() => onImageSave(band)}
            disabled={isSaved}
            className={`w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isSaved
                ? 'bg-green-100 text-green-800 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <Save className="w-4 h-4" />
            <span>{isSaved ? 'Saved' : 'Save Image'}</span>
          </button>
        </div>
      )}
    </div>
  );
}