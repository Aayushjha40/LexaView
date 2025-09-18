import React from 'react';

const ArticlesSection = () => {
  const articles = [
    { title: 'Understanding Rental Agreements', tag: 'New', category: 'Housing' },
    { title: 'Loan Contract Red Flags', tag: 'Hot', category: 'Finance' },
    { title: 'Terms of Service Basics', tag: 'New', category: 'Digital' },
    { title: 'Employment Contract Rights', tag: 'Hot', category: 'Employment' },
    { title: 'Privacy Policy Insights', tag: 'New', category: 'Privacy' },
    { title: 'Small Business Contracts', tag: 'Hot', category: 'Business' }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Legal Insights</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay informed with our latest articles on legal document analysis and consumer protection.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-gray-800">{article.title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  article.tag === 'New' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {article.tag}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{article.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
