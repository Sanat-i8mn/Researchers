import { Search, Book, MessageCircle, Shield, CreditCard, Users } from 'lucide-react';

export default function HelpCenterPage() {
  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using ResearchHub",
      articles: [
        "How to create your first project",
        "Setting up your profile",
        "Understanding our platform",
        "Finding the right expert"
      ]
    },
    {
      icon: Users,
      title: "For Clients",
      description: "Everything you need to know as a client",
      articles: [
        "How to post a project",
        "Reviewing proposals",
        "Managing your projects",
        "Payment and billing"
      ]
    },
    {
      icon: MessageCircle,
      title: "For Experts",
      description: "Guide for research experts and freelancers",
      articles: [
        "Creating winning proposals",
        "Building your reputation",
        "Getting verified",
        "Earning and withdrawals"
      ]
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      description: "Payment methods, billing, and financial questions",
      articles: [
        "Payment methods",
        "Escrow protection",
        "Refund policy",
        "Tax information"
      ]
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Security, privacy, and platform safety",
      articles: [
        "Account security",
        "Reporting issues",
        "Privacy settings",
        "Academic integrity"
      ]
    },
    {
      icon: Book,
      title: "Technical Support",
      description: "Technical issues and troubleshooting",
      articles: [
        "Login problems",
        "File upload issues",
        "Browser compatibility",
        "Mobile app support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0f1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Help <span className="text-cyan-400">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {helpCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Popular Articles */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a href="#" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">How to post your first project</h3>
                <p className="text-gray-400 text-sm">Step-by-step guide to creating and posting your research project</p>
              </a>
              <a href="#" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Understanding escrow protection</h3>
                <p className="text-gray-400 text-sm">Learn how our escrow system protects your payments</p>
              </a>
              <a href="#" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Getting verified as an expert</h3>
                <p className="text-gray-400 text-sm">Requirements and process for expert verification</p>
              </a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Payment methods and billing</h3>
                <p className="text-gray-400 text-sm">Accepted payment methods and billing information</p>
              </a>
              <a href="#" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Academic integrity policy</h3>
                <p className="text-gray-400 text-sm">Our commitment to academic honesty and ethical research</p>
              </a>
              <a href="#" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Dispute resolution process</h3>
                <p className="text-gray-400 text-sm">How we handle disputes between clients and experts</p>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-gray-300 mb-6">Can't find what you're looking for? Our support team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}