import React from 'react';
import Button from '../../../components/common/Button';

const CTASection = ({ onUploadClick }) => {
  return (
    <section className="py-16 px-4 bg-teal-500">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to protect yourself?</h2>
        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
          Don't let complex legal language put you at risk. Start analyzing your documents today.
        </p>
        <Button 
          onClick={onUploadClick}
            className="bg-white text-teal-600 hover:bg-gray-50 mx-auto block"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
