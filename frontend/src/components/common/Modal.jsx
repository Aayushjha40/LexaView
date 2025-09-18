import React from 'react';
import { X, Upload, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ 
  isOpen, 
  onClose, 
  dragActive,
  uploadedFile,
  isUploading,
  handleDrag,
  handleDrop,
  handleChange,
  removeFile,
  fileInputRef
}) => {
    const navigate = useNavigate();
  const onButtonClick = () => {
    fileInputRef.current.click();
  };

    const handleAnalyzeClick = () => {
    if (uploadedFile) {
      navigate('/result'); 
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full mx-4 transform animate-slideUp shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Upload Legal Document
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div 
          className={`relative border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 transform ${
            dragActive 
              ? 'border-teal-400 bg-teal-50 scale-105 shadow-lg' 
              : uploadedFile 
                ? 'border-green-400 bg-green-50' 
                : 'border-gray-300 hover:border-teal-300 hover:bg-gray-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />

          {isUploading ? (
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <p className="text-teal-600 font-semibold">Analyzing document...</p>
            </div>
          ) : uploadedFile ? (
            <div className="animate-bounceIn">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-green-600 font-semibold mb-2">{uploadedFile.name}</p>
              <p className="text-sm text-gray-500 mb-4">
                Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <p className="text-sm text-gray-500 mb-4">Ready for analysis</p>
              <button 
                onClick={removeFile}
                className="text-red-500 hover:text-red-700 text-sm underline transition-colors"
              >
                Remove file
              </button>
            </div>
          ) : (
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <Upload className={`relative w-16 h-16 mx-auto transition-colors duration-300 ${
                  dragActive ? 'text-teal-500' : 'text-gray-400'
                }`} />
              </div>
              <p className="text-gray-700 font-semibold mb-2">
                {dragActive ? 'Drop your document here' : 'Drag and drop your document here'}
              </p>
              <p className="text-gray-500 text-sm mb-6">or click to browse files</p>
              <p className="text-xs text-gray-400 mb-6">
                Supported formats: PDF, DOC, DOCX (max 10MB)
              </p>
              <button 
                onClick={onButtonClick}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold"
              >
                Choose File
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-end mt-8 space-x-4">
          <button 
            onClick={onClose}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            disabled={!uploadedFile}
            onClick={handleAnalyzeClick}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform ${
              uploadedFile 
                ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 hover:scale-105 hover:shadow-lg' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Analyze Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
