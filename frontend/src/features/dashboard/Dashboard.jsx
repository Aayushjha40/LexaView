import React, { useState, useRef } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import TopicsSection from './components/TopicsSection';
import SupportSection from './components/SupportSection';
import ArticlesSection from './components/ArticlesSection';
import CTASection from './components/CTASection';
import UploadModal from '../../components/common/Modal';
import { useFileUpload } from '../../hooks/useFileUpload';

const Dashboard = () => {
  const [uploadModal, setUploadModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const {
    dragActive,
    uploadedFile,
    isUploading,
    handleDrag,
    handleDrop,
    handleChange,
    handleFiles,
    removeFile,
    fileInputRef
  } = useFileUpload();

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.3); }
          50% { box-shadow: 0 0 30px rgba(20, 184, 166, 0.5); }
        }
        
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-bounceIn { animation: bounceIn 0.6s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .border-3 { border-width: 3px; }
      `}} />
      
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50"
           onDragEnter={handleDrag}
           onDragLeave={handleDrag}
           onDragOver={handleDrag}
           onDrop={(e) => {
             e.preventDefault();
             e.stopPropagation();
             if (e.dataTransfer.files && e.dataTransfer.files[0]) {
               setUploadModal(true);
               handleFiles(e.dataTransfer.files);
             }
           }}>
        
        {/* Global Drag Overlay */}
        {dragActive && !uploadModal && (
          <div className="fixed inset-0 bg-teal-500/20 backdrop-blur-sm z-40 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-teal-400 border-dashed">
              <Upload className="w-16 h-16 text-teal-500 mx-auto mb-4" />
              <p className="text-teal-700 font-bold text-lg text-center">
                Drop your document anywhere to upload
              </p>
            </div>
          </div>
        )}

        <Header />
        <HeroSection onUploadClick={() => setUploadModal(true)} />
        <TopicsSection 
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <SupportSection />
        <ArticlesSection />
        <CTASection onUploadClick={() => setUploadModal(true)} />
        <Footer />

        {uploadModal && (
          <UploadModal
            isOpen={uploadModal}
            onClose={() => setUploadModal(false)}
            dragActive={dragActive}
            uploadedFile={uploadedFile}
            isUploading={isUploading}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleChange={handleChange}
            removeFile={removeFile}
            fileInputRef={fileInputRef}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
