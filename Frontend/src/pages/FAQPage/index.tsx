import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is ResearchHub?",
          answer: "ResearchHub is a platform that connects researchers, academics, and businesses with expert freelancers who can help with research projects, data analysis, academic writing, and other specialized tasks."
        },
        {
          question: "How does ResearchHub work?",
          answer: "Clients post their research projects, experts submit proposals, and clients choose the best expert for their needs. All payments are secured through our escrow system until the work is completed satisfactorily."
        },
        {
          question: "Is ResearchHub free to use?",
          answer: "Creating an account and browsing projects is free. We charge a small service fee only when a project is successfully completed."
        }
      ]
    },
    {
      category: "For Clients",
      questions: [
        {
          question: "How do I post a project?",
          answer: "After creating an account, click 'Post a Project' and fill out the project details including description, budget, timeline, and required expertise. Your project will be reviewed and published within 24 hours."
        },
        {
          question: "How do I choose the right expert?",
          answer: "Review expert profiles, ratings, portfolios, and proposals. Look for relevant experience, good communication, and competitive pricing. You can also interview experts before making a decision."
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer: "Our escrow system protects your payment until you approve the work. If you're not satisfied, you can request revisions or dispute the project through our resolution center."
        }
      ]
    },
    {
      category: "For Experts",
      questions: [
        {
          question: "How do I become a verified expert?",
          answer: "Complete your profile with education credentials, work experience, and portfolio samples. Submit verification documents and pass our skills assessment. Verification typically takes 3-5 business days."
        },
        {
          question: "How much can I earn?",
          answer: "Earnings vary based on your expertise, experience, and project complexity. Top experts earn $50-200+ per hour. You set your own rates and can negotiate project fees."
        },
        {
          question: "When do I get paid?",
          answer: "Payment is released from escrow once the client approves your work. Funds are typically available in your account within 24 hours and can be withdrawn to your bank account or PayPal."
        }
      ]
    },
    {
      category: "Payments & Security",
      questions: [
        {
          question: "How does the escrow system work?",
          answer: "When a client hires you, they deposit the project payment into escrow. The funds are held securely until the work is completed and approved. This protects both clients and experts."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, PayPal, bank transfers, and cryptocurrency. All transactions are processed securely through our encrypted payment system."
        },
        {
          question: "Is my personal information safe?",
          answer: "Yes, we use bank-level encryption and security measures to protect your data. We never share your personal information with third parties without your consent."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0f1629]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find quick answers to common questions about ResearchHub
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex; // Create unique index
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div key={faqIndex} className="border border-white/10 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between"
                      >
                        <span className="text-lg font-semibold text-white">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-white/2">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Our support team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
              Browse Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}