import React from 'react';
import { FileText, BookOpen, HelpCircle, AlertTriangle, Users, Scale } from 'lucide-react';

const TopicsSection = ({ selectedTopic, setSelectedTopic }) => {
  const topics = [
    {
      id: 'summaries',
      icon: <FileText className="w-8 h-8" />,
      title: 'Document Summaries',
      description: 'Get instant, clear summaries of complex legal documents highlighting critical information.'
    },
    {
      id: 'clauses',
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Clause Explanations',
      description: 'Understand complex legal clauses with plain-language explanations tailored for everyone.'
    },
    {
      id: 'queries',
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Document Q&A',
      description: 'Ask specific questions about your document and get context-aware answers instantly.'
    },
    {
      id: 'risks',
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Risk Identification',
      description: 'Proactively identify unfair, unusual, or high-risk clauses that need your attention.'
    },
    {
      id: 'negotiation',
      icon: <Users className="w-8 h-8" />,
      title: 'Negotiation Help',
      description: 'Get guidance on negotiating better terms and protecting your interests.'
    },
    {
      id: 'compliance',
      icon: <Scale className="w-8 h-8" />,
      title: 'Legal Compliance',
      description: 'Ensure your agreements comply with relevant laws and regulations.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Select a service
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform transforms complex legal documents into clear, actionable insights. Choose the service that best fits your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <div 
              key={topic.id}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/30 transform hover:scale-105"
                   onClick={() => setSelectedTopic(topic.id)}>
                
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Container - NO ROTATION */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative p-4 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl group-hover:from-teal-200 group-hover:to-blue-200 transition-colors duration-300 transform group-hover:scale-110">
                    <div className="text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                      {topic.icon}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {topic.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-teal-300 transition-colors duration-300"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
