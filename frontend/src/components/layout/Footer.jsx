import React from 'react';
import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-bold">LexaView</span>
            </div>
            <p className="text-gray-400">
              Empowering everyone to understand legal documents and make informed decisions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Document Analysis</li>
              <li>Risk Assessment</li>
              <li>Legal Consultation</li>
              <li>Contract Review</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Legal Guides</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LexaView. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
