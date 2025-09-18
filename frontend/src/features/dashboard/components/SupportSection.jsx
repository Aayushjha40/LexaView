import React from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const SupportSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Need additional support?</h3>
        <p className="text-gray-600 mb-8">Contact our legal experts for personalized assistance</p>
        
        <div className="flex justify-center space-x-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors duration-300">
              <MessageSquare className="w-8 h-8 text-teal-600" />
            </div>
            <p className="font-semibold text-gray-800">Live Chat</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors duration-300">
              <Mail className="w-8 h-8 text-teal-600" />
            </div>
            <p className="font-semibold text-gray-800">Email</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors duration-300">
              <Phone className="w-8 h-8 text-teal-600" />
            </div>
            <p className="font-semibold text-gray-800">Phone</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
