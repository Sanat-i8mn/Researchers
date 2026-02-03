import { useState, useEffect } from 'react';
import { ALL_FREELANCERS } from '../../utils/constants';
import HeroSection from './components/HeroSection';
import TrustedBySection from './components/TrustedBySection';
import PopularServicesSection from './components/PopularServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import BrowseCategoriesSection from './components/BrowseCategoriesSection';
import PlatformStatsSection from './components/PlatformStatsSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import SearchResultsSection from './components/SearchResultsSection';
import Footer from '../../components/layout/Footer';
import SignupPage from '../Auth/SignupPage';
import type { PageType } from '../../types';

interface LandingPageProps {
  onNavigate: (page: PageType) => void;
  onSignup?: (data: any) => void;
  onLogin?: (email: string, password: string) => void;
}

export default function LandingPage({ onNavigate, onSignup, onLogin }: LandingPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  useEffect(() => {
    if (showResults) {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showResults]);

  const filteredFreelancers = ALL_FREELANCERS.filter(freelancer => {
    const matchesCategory = !selectedCategory || freelancer.categories.includes(selectedCategory);
    const matchesSearch = !searchQuery ||
      freelancer.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      freelancer.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleClearSearch = () => {
    console.log('Clear search clicked');
    setShowResults(false);
    setSearchQuery('');
    setSelectedCategory('');
  };

  const handleClearCategory = () => {
    setSelectedCategory('');
  };

  const handleJoinAsExpert = () => {
    setShowSignupPopup(true);
  };

  const handleCloseSignup = () => {
    setShowSignupPopup(false);
  };

  const handleSignupSuccess = async (data: any) => {
    if (onSignup) {
      await onSignup(data);
    }
    setShowSignupPopup(false);
  };

  const handleSwitchToLogin = () => {
    setShowSignupPopup(false);
    onNavigate('login');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onNavigate={handleJoinAsExpert} onShowResults={() => setShowResults(true)} />

      {showResults ? (
        <div className="bg-white">
          <SearchResultsSection
            filteredFreelancers={filteredFreelancers}
            selectedCategory={selectedCategory}
            onClearSearch={handleClearSearch}
            onClearCategory={handleClearCategory}
          />
        </div>
      ) : (
        <>
          {/* Trusted By Section */}
          <TrustedBySection />
          
          {/* Popular Services */}
          <PopularServicesSection />
          
          {/* How It Works */}
          <HowItWorksSection />
          
          {/* Browse Categories */}
          <BrowseCategoriesSection />
          
          {/* Platform Stats */}
          <PlatformStatsSection />
          
          {/* Problem Section */}
          <ProblemSection />
          
          {/* Solution Section */}
          <SolutionSection />
          
          {/* Why Choose Us */}
          <WhyChooseUsSection />
          
          {/* Success Stories */}
          <SuccessStoriesSection />
          
          {/* Testimonials */}
          <TestimonialsSection />
          
          {/* CTA Section */}
          <CTASection onNavigate={handleJoinAsExpert} />
        </>
      )}

      {/* Footer */}
      <Footer />
      
      {/* Signup Popup */}
      {showSignupPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={handleCloseSignup}
          />
          <div className="relative z-10 w-full max-w-md transform transition-all">
            <SignupPage 
              onSignup={handleSignupSuccess}
              onSwitchToLogin={handleSwitchToLogin}
              onLogin={onLogin}
              onClose={handleCloseSignup}
            />
          </div>
        </div>
      )}
    </div>
  );
}
