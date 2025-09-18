import React, { useState, useRef } from 'react';

// Icon component with comprehensive SVG collection
const Icon = ({ name, className }) => {
  const icons = {
    sparkles: <path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9 1.9 4.8 1.9-4.8 4.8-1.9-4.8-1.9Z"/>,
    'check-circle-2': <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></>,
    'alert-triangle': <><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
    'shield-alert': <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></>,
    'users': <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    'banknote': <><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></>,
    'calendar': <><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></>,
    'chevron-up': <path d="m18 15-6-6-6 6"/>,
    'chevron-down': <path d="m6 9 6 6 6-6"/>,
    'send': <><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></>,
    'x-circle': <><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></>,
    'check': <path d="M20 6 9 17l-5-5"/>,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {icons[name]}
    </svg>
  );
};

// Enhanced Circular Progress with 3D effects and animations
const CircularProgress = ({ percentage = 85, size = 140 }) => {
  const radius = 45;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative transform hover:scale-105 transition-all duration-500 ease-out">
        {/* 3D Shadow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-xl transform translate-x-2 translate-y-2"></div>
        
        {/* Main Progress Container */}
        <div className="relative bg-white rounded-full shadow-2xl border-4 border-teal-50 hover:shadow-3xl transition-shadow duration-500">
          <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            className="transform -rotate-90"
          >
            {/* Background circle with subtle gradient */}
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0fdfa" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            
            <circle
              cx="50"
              cy="50"
              r={normalizedRadius}
              fill="none"
              stroke="url(#bgGradient)"
              strokeWidth={strokeWidth}
              className="opacity-30"
            />
            
            {/* Animated Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={normalizedRadius}
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out animate-pulse"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))',
                animationDuration: '3s'
              }}
            />
          </svg>
          
          {/* Center content with enhanced styling */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent animate-bounce" style={{animationDuration: '2s'}}>
              {percentage}%
            </span>
            <span className="text-sm font-medium text-slate-500 mt-1 animate-fade-in">
              Generally Fair
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LegalDocumentAnalysis() {
  const [activeClauseId, setActiveClauseId] = useState(null);
  const [explanation, setExplanation] = useState({ 
    text: 'Sorry, I encountered an error. Please try again.', 
    isLoading: false 
  });
  const [activeTab, setActiveTab] = useState('summary');
  const [openAccordions, setOpenAccordions] = useState({ parties: true });
  const [chatHistory, setChatHistory] = useState([
    { sender: 'ai', text: "Hello! I'm your AI assistant. Ask me anything about this lease agreement." }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  const documentData = [
    { id: 'clause-1', text: 'This Lease Agreement ("Agreement") is made and entered into this 15th day of October, 2023, by and between "Landlord," Johnathan Davis, and "Tenant," Jane Miller.' },
    { id: 'clause-2', text: 'The Landlord agrees to lease to the Tenant the premises located at 123 Market Street, Suite 400, Anytown, USA ("the Premises").' },
    { id: 'clause-3', text: 'The term of this lease shall be for a period of twelve (12) months, commencing on November 1, 2023, and ending on October 31, 2024.' },
    { id: 'clause-4', text: 'The Tenant shall pay the Landlord a monthly rent of ₹25,000, due on the first day of each month. A late fee of 5% shall be applied to any rent not received by the 5th day of the month.' },
    { id: 'clause-5', text: 'Upon execution of this Agreement, the Tenant shall deposit with the Landlord the sum of ₹50,000 as a security deposit. This deposit will be returned to the Tenant within 30 days of the termination of the lease, less any deductions for damages.' },
    { id: 'clause-6', text: 'Tenant shall be responsible for payment of all utility services required on the Premises, including but not limited to electricity, gas, and water.' },
    { id: 'clause-7', text: 'The Landlord shall be responsible for all major repairs and maintenance of the Premises. The Tenant is responsible for keeping the premises clean and in good order and for repairing any damage caused by their negligence.' },
    { id: 'clause-8', text: 'The Tenant shall not be permitted to sublet the Premises or assign this Agreement without the prior written consent of the Landlord, which shall not be unreasonably withheld.' }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClauseClick = (clauseText, clauseId) => {
    setActiveClauseId(clauseId);
    setExplanation({ 
      text: 'This clause establishes the key terms and parties involved in the lease agreement, including the landlord and tenant names and the official execution date.', 
      isLoading: false 
    });
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const userMessage = chatInput.trim();
    if (!userMessage) return;

    setChatHistory(prev => [...prev, { sender: 'user', text: userMessage }]);
    setChatInput('');
    setIsChatLoading(true);
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        sender: 'ai', 
        text: "I understand your question about the lease agreement. Based on the document, I can provide specific guidance about that clause." 
      }]);
      setIsChatLoading(false);
    }, 1500);
  };

  const riskItems = [
    {
      type: 'High Risk',
      title: 'Deposit Forfeiture',
      description: 'You lose your entire ₹50,000 security deposit if you need to move out for any reason in the first 6 months.',
      color: 'red'
    },
    {
      type: 'Cautionary',
      title: 'Subletting Requires Consent',
      description: 'You must get the landlord\'s permission in writing before you can have someone else take over your lease.',
      color: 'amber'
    }
  ];

  const accordionData = [
    {
      id: 'parties',
      icon: 'users',
      title: 'Key Parties',
      content: (
        <div className="space-y-2 text-sm text-slate-600">
          <p><strong>Landlord:</strong> <span className="text-teal-600 cursor-pointer hover:text-teal-700 hover:underline transition-colors">Johnathan Davis</span></p>
          <p><strong>Tenant:</strong> <span className="text-teal-600 cursor-pointer hover:text-teal-700 hover:underline transition-colors">Jane Miller</span></p>
        </div>
      )
    },
    {
      id: 'financials',
      icon: 'banknote',
      title: 'Financials',
      content: (
        <div className="space-y-2 text-sm text-slate-600">
          <p><strong>Monthly Rent:</strong> <span className="text-teal-600 cursor-pointer hover:text-teal-700 hover:underline transition-colors">₹25,000</span></p>
          <p><strong>Security Deposit:</strong> <span className="text-teal-600 cursor-pointer hover:text-teal-700 hover:underline transition-colors">₹50,000</span></p>
        </div>
      )
    },
    {
      id: 'dates',
      icon: 'calendar',
      title: 'Key Dates',
      content: (
        <div className="space-y-2 text-sm text-slate-600">
          <p><strong>Agreement Date:</strong> <span className="text-teal-600 cursor-pointer hover:text-teal-700 hover:underline transition-colors">October 15, 2023</span></p>
          <p><strong>Lease Start:</strong> <span className="text-teal-600 cursor-pointer hover:text-teal-700 hover:underline transition-colors">November 1, 2023</span></p>
          <p><strong>Lease End:</strong> <span className="text-teal-600 cursor-pointer hover:text-teal-700 hover:underline transition-colors">October 31, 2024</span></p>
        </div>
      )
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.2); }
          50% { box-shadow: 0 0 30px rgba(20, 184, 166, 0.4); }
        }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-in-up { animation: slideInUp 0.6s ease-out; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .glass-effect { 
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(20, 184, 166, 0.1);
        }
        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.3s ease-out;
        }
        .card-3d:hover {
          transform: rotateX(5deg) rotateY(5deg) translateZ(10px);
        }
      `}} />
      
      <div className="flex h-screen overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        {/* Left Panel - Document */}
        <div className="w-1/2 glass-effect border-r border-teal-200 p-8 overflow-y-auto animate-slide-in-left">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Lease Agreement
              </h1>
              <h2 className="text-lg font-semibold text-slate-600 mb-8">123 Market Street, Suite 400</h2>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {documentData.map((clause, index) => (
                <div key={clause.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p>
                    <span
                      className={`cursor-pointer transition-all duration-300 rounded-lg p-3 block hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:shadow-lg hover:border-l-4 hover:border-teal-400 ${
                        activeClauseId === clause.id 
                          ? 'bg-gradient-to-r from-teal-100 to-blue-100 font-medium shadow-md border-l-4 border-teal-500 transform scale-[1.02]' 
                          : ''
                      }`}
                      onClick={() => handleClauseClick(clause.text, clause.id)}
                    >
                      {clause.text}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Analysis */}
        <div className="w-1/2 bg-gradient-to-br from-slate-50 to-gray-100 p-8 overflow-y-auto animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Enhanced Scorecard */}
            <div className="glass-effect p-8 rounded-2xl shadow-xl card-3d animate-glow">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                At-a-Glance Scorecard
              </h2>
              <div className="flex items-center justify-center text-center my-8">
                <CircularProgress percentage={85} size={160} />
              </div>
              <div className="text-sm space-y-4 mt-8 text-slate-600">
                <div className="animate-slide-in-up p-3 rounded-lg hover:bg-teal-50 transition-colors duration-300">
                  <p className="flex items-start">
                    <Icon name="check-circle-2" className="text-green-500 mr-3 mt-0.5 w-5 h-5 flex-shrink-0 animate-bounce" style={{animationDuration: '2s'}} />
                    <span><span className="font-semibold text-slate-700">Positive:</span> Clear terms for rent and lease duration.</span>
                  </p>
                </div>
                <div className="animate-slide-in-up p-3 rounded-lg hover:bg-amber-50 transition-colors duration-300" style={{ animationDelay: '0.1s' }}>
                  <p className="flex items-start">
                    <Icon name="alert-triangle" className="text-amber-500 mr-3 mt-0.5 w-5 h-5 flex-shrink-0 animate-pulse" />
                    <span className="cursor-pointer hover:text-amber-700 transition-colors">
                      <span className="font-semibold text-slate-700 hover:underline">Cautionary:</span> Security deposit forfeiture clause is somewhat strict.
                    </span>
                  </p>
                </div>
                <div className="animate-slide-in-up p-3 rounded-lg hover:bg-red-50 transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
                  <p className="flex items-start">
                    <Icon name="x-circle" className="text-red-500 mr-3 mt-0.5 w-5 h-5 flex-shrink-0 animate-pulse" />
                    <span><span className="font-semibold text-slate-700">Missing:</span> No clause specifying conditions for landlord entry.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced AI Clause Explanation */}
            <div className="glass-effect p-6 rounded-2xl shadow-lg card-3d hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Icon name="sparkles" className="w-6 h-6 mr-3 text-teal-500 animate-spin" style={{animationDuration: '3s'}}/>
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  AI Clause Explanation
                </span>
              </h2>
              <div className="text-sm text-slate-600 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                {explanation.text}
              </div>
            </div>
            
            {/* Enhanced Tabs */}
            <div className="glass-effect rounded-2xl overflow-hidden shadow-lg">
              <div className="border-b border-teal-200">
                <nav className="flex -mb-px">
                  {[
                    { id: 'summary', label: 'Summary' },
                    { id: 'risk', label: 'Risk & Negotiation' },
                    { id: 'qa', label: 'AI Q&A' }
                  ].map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-4 px-6 border-b-3 font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                        activeTab === tab.id
                          ? 'text-teal-600 border-teal-500 bg-gradient-to-r from-teal-50 to-blue-50'
                          : 'text-slate-500 border-transparent hover:text-teal-600 hover:bg-teal-50'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-6">
                {activeTab === 'summary' && (
                  <div className="space-y-4">
                    {accordionData.map((item, index) => (
                      <div key={item.id} className="border-2 border-teal-200 rounded-xl overflow-hidden card-3d hover:border-teal-300 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                        <button
                          onClick={() => toggleAccordion(item.id)}
                          className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300"
                        >
                          <span className="flex items-center">
                            <Icon name={item.icon} className="mr-3 w-6 h-6 text-teal-600 animate-pulse" />
                            {item.title}
                          </span>
                          <Icon 
                            name={openAccordions[item.id] ? 'chevron-up' : 'chevron-down'} 
                            className="w-5 h-5 transition-transform duration-300 text-teal-500" 
                          />
                        </button>
                        {openAccordions[item.id] && (
                          <div className="px-6 pb-4 border-t border-teal-100 bg-gradient-to-r from-teal-50/50 to-blue-50/50 animate-slide-in-up">
                            {item.content}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'risk' && (
                  <div className="space-y-6">
                    {riskItems.map((item, index) => (
                      <div key={index} className={`border-l-4 ${item.color === 'red' ? 'border-red-400' : 'border-amber-400'} glass-effect rounded-xl shadow-lg card-3d hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="p-6">
                          <h3 className={`font-bold flex items-center mb-3 text-lg ${item.color === 'red' ? 'text-red-700' : 'text-amber-700'}`}>
                            <Icon name={item.color === 'red' ? 'shield-alert' : 'alert-triangle'} className="w-6 h-6 mr-3 animate-bounce" />
                            {item.type}: {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                          <div className="flex justify-end">
                            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
                              <Icon name="sparkles" className="w-4 h-4 mr-2 animate-spin" style={{animationDuration: '2s'}} />
                              Suggest a Change
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'qa' && (
                  <div className="glass-effect border-2 border-teal-200 rounded-xl p-4 h-96 flex flex-col">
                    <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4">
                      {chatHistory.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''} animate-slide-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                          {msg.sender === 'ai' && (
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white shadow-lg animate-pulse">
                              <Icon name="sparkles" className="w-5 h-5"/>
                            </div>
                          )}
                          <div className={`p-4 rounded-2xl max-w-xs shadow-md transition-all duration-300 hover:shadow-lg ${
                            msg.sender === 'user' 
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm' 
                              : 'bg-gradient-to-r from-teal-50 to-blue-50 text-gray-700 rounded-tl-sm border border-teal-200'
                          }`}>
                            <p className="text-sm">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                      {isChatLoading && (
                        <div className="flex items-start gap-3 animate-fade-in">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white animate-pulse">
                            <Icon name="sparkles" className="w-5 h-5 animate-spin"/>
                          </div>
                          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-2xl rounded-tl-sm border border-teal-200">
                            <div className="flex items-center text-sm text-gray-500">
                              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce mr-1"></div>
                              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce mr-1 delay-150"></div>
                              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-300"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t-2 border-teal-200 pt-4">
                      <form onSubmit={handleChatSubmit} className="relative">
                        <input 
                          type="text" 
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          placeholder="Ask a question..."
                          className="w-full pl-4 pr-12 py-3 border-2 border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 bg-gradient-to-r from-teal-50/50 to-blue-50/50"
                          autoComplete="off"
                        />
                        <button 
                          type="submit" 
                          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-teal-500 hover:text-teal-600 transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Icon name="send" className="w-6 h-6"/>
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
