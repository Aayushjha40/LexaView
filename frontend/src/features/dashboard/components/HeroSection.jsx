import React from 'react';
import { Upload, FileText, Eye, Shield } from 'lucide-react';
import Button from '../../../components/common/Button';

const HeroSection = ({ onUploadClick }) => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center relative">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="flex justify-center mb-12 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-3xl blur-2xl opacity-20 animate-glow"></div>
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-teal-100 to-teal-200 rounded-xl">
                    <FileText className="w-8 h-8 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Legal Document</span>
                </div>
                
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-ping opacity-20"></div>
                </div>
                
                <div className="flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-green-200 rounded-xl">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Clear Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            <span className="block animate-slideUp">DEMYSTIFY</span>
            <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-slideUp" style={{ animationDelay: '0.2s' }}>
              LEGAL DOCUMENTS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.4s' }}>
            Transform complex legal jargon into clear, actionable guidance. Protect yourself from hidden risks and make informed decisions with AI-powered analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="primary"
              size="lg"
              icon={Upload}
              onClick={onUploadClick}
            >
              Upload Document
            </Button>
            <Button 
              variant="secondary"
              size="lg"
            >
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
