import { useState } from 'react';
import { FileText, Users, CheckCircle, Lock, Shield, DollarSign, PenTool, BookOpen, Briefcase, TrendingUp, Lightbulb } from 'lucide-react';
import { postProjectFromLanding } from '../../services/projectService';

export default function PostProjectPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [privacyOption, setPrivacyOption] = useState<'all' | 'invitation'>('all');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [selectedDeliverable, setSelectedDeliverable] = useState<string>('');
  const [lengthValue, setLengthValue] = useState<string>('');
  const [lengthUnit, setLengthUnit] = useState<'words' | 'pages'>('words');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [industryName, setIndustryName] = useState<string>('');
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [projectTitle, setProjectTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [feeType, setFeeType] = useState<'fixed' | 'hourly'>('fixed');
  const [budgetRange, setBudgetRange] = useState<string>('500-4000');
  const [promoCode, setPromoCode] = useState<string>('');
  const [hiringTimeline, setHiringTimeline] = useState<string>('');
  const [importantFactors, setImportantFactors] = useState<string[]>([]);
  const [billingType, setBillingType] = useState<'individual' | 'business'>('individual');
  const [companyName, setCompanyName] = useState<string>('');
  const [companyAddress, setCompanyAddress] = useState<string>('');
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [country, setCountry] = useState<string>('United States');
  const [vatNumber, setVatNumber] = useState<string>('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [expertInvitation, setExpertInvitation] = useState<string>('self');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const categories = [
    { id: 'writing', name: 'Writing', icon: PenTool },
    { id: 'research', name: 'Research', icon: BookOpen },
    { id: 'consulting', name: 'Consulting', icon: Briefcase },
    { id: 'data-ai', name: 'Data & AI', icon: TrendingUp },
    { id: 'product-dev', name: 'Product Development', icon: Lightbulb }
  ];

  const writingTypes = [
    'Copywriting', 'Clinical Trial Documentation', 'Technical Writing', 'Translation',
    'General Proofreading & Editing', 'Newswriting', 'Medical Writing', 'Creative Writing',
    'Non-Medical Regulatory Writing', 'Audio Transcription', 'Business & Legal Writing'
  ];

  const writingActivities = [
    'Proofreading', 'Writing', 'Editing', 'Content', 'Blog Post', 'Other',
    'Brochure', 'Email', 'Product Guide/User Handbook', 'Marketing Copy',
    'Social Media Copy', 'Newsletter', 'UX Copy', 'SEO Writing', 'Web Copy'
  ];

  const deliverables = ['Draft', 'Section of document', 'Full document'];

  const expertiseOptions = [
    'Molecular Biology', 'Biochemistry', 'Medicine', 'Microbiology',
    'Oncology', 'Chemistry', 'Public Health', 'Computer Science', 'Physics'
  ];

  const industries = [
    'Academia', 'Accounting', 'Aerospace', 'Agriculture', 'Automotive', 'Aviation',
    'Biotech & Life Sciences', 'Chemicals', 'Consumer Goods & Retail', 'Defence & Military',
    'Education', 'Electronics', 'Energy', 'Entertainment', 'Environmental & Waste Management',
    'Fashion', 'Financial Services', 'Food & Beverage', 'Government', 'Healthcare & Medicine',
    'Hospitality', 'In vitro Diagnostics', 'Information Technology', 'Law & Legal',
    'Logistics & Supply Chain', 'Marketing & Advertising', 'Medical Devices',
    'Medical Equipment & Supplies', 'Mining & Metals', 'Pharmaceuticals',
    'Philanthropy & Fundraising', 'Publishing', 'Real Estate & Construction',
    'Staffing & Recruiting', 'Telecommunications', 'Textiles', 'Transportation',
    'Travel & Tourism', 'Utilities', 'Veterinary'
  ];

  const toggleExpertise = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== expertise));
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };

  const toggleFactor = (factor: string) => {
    if (importantFactors.includes(factor)) {
      setImportantFactors(importantFactors.filter(f => f !== factor));
    } else {
      setImportantFactors([...importantFactors, factor]);
    }
  };

  const steps = [
    { number: 1, title: 'Post a project', icon: FileText },
    { number: 2, title: 'Collaborate with experts', icon: Users },
    { number: 3, title: 'Satisfaction guarantee', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              ResearchHub
            </span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep >= step.number 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    <step.icon size={20} />
                  </div>
                  <div className="mt-2 text-center">
                    <div className={`text-sm font-semibold ${
                      currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {step.number === 1 && 'Describe your project requirements, choose your budget and the expertise you need.'}
                      {step.number === 2 && 'Interact freely with freelancers before accepting quotation from ResearchHub.'}
                      {step.number === 3 && 'Review deliverables and approve only if satisfied with quality.'}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">i</span>
            <span>Creating a project job usually takes between 5 – 7 minutes.</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Privacy Matters</h2>
            <p className="text-gray-600 mb-8">
              We are committed to protecting your privacy and confidentiality. Please specify who can see your project.
            </p>

            <div className="space-y-4 mb-8">
              {/* All Experts Option */}
              <div
                onClick={() => setPrivacyOption('all')}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  privacyOption === 'all'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    privacyOption === 'all'
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {privacyOption === 'all' && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="text-gray-700" size={20} />
                      <h3 className="font-bold text-gray-900">All ResearchHub Experts</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      My job post will be visible to all registered expert on the ResearchHub platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Invitation Only Option */}
              <div
                onClick={() => setPrivacyOption('invitation')}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  privacyOption === 'invitation'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    privacyOption === 'invitation'
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {privacyOption === 'invitation' && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="text-gray-700" size={20} />
                      <h3 className="font-bold text-gray-900">Invitation Only</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Only experts who I invite will be able to see my job post.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  I confirm that I have read and agree to the{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>

            {/* Sign In Link */}
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
              <Users size={16} className="text-green-600" />
              <span>If you already have an account, please sign in <a href="#" className="text-blue-600 hover:underline">here</a></span>
            </div>

            {/* Submit Button */}
            <button
              disabled={!agreedToTerms}
              onClick={() => setCurrentStep(2)}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                agreedToTerms
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start posting project
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What are you looking for?</h2>
            
            <div className="grid grid-cols-3 gap-6 mb-12">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center justify-center p-8 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-400 hover:shadow-md ${
                    selectedCategory === category.id
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200'
                  }`}
                >
                  <category.icon 
                    size={48} 
                    className={`mb-4 ${
                      selectedCategory === category.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  />
                  <span className={`font-semibold text-center ${
                    selectedCategory === category.id ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all"
              >
                <span>←</span> Back
              </button>
              <button
                disabled={!selectedCategory}
                onClick={() => setCurrentStep(3)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && selectedCategory === 'writing' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Type</h2>
            <p className="text-gray-600 mb-6">
              Select the primary goal of your project so that our experts understand your requirements.
            </p>

            {/* Types for Writing */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Types for Writing</h3>
              <div className="grid grid-cols-2 gap-3">
                {writingTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2.5 text-sm border rounded-lg text-left transition-all ${
                      selectedType === type
                        ? 'border-blue-600 bg-blue-50 text-blue-600 font-semibold'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Activity</h3>
              <div className="grid grid-cols-3 gap-3">
                {writingActivities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => setSelectedActivity(activity)}
                    className={`px-4 py-2.5 text-sm border rounded-lg text-left transition-all ${
                      selectedActivity === activity
                        ? 'border-blue-600 bg-blue-50 text-blue-600 font-semibold'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {activity}
                  </button>
                ))}
              </div>
            </div>

            {/* Deliverable */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Deliverable</h3>
              <div className="grid grid-cols-3 gap-3">
                {deliverables.map((deliverable) => (
                  <button
                    key={deliverable}
                    onClick={() => setSelectedDeliverable(deliverable)}
                    className={`px-4 py-2.5 text-sm border rounded-lg text-left transition-all ${
                      selectedDeliverable === deliverable
                        ? 'border-blue-600 bg-blue-50 text-blue-600 font-semibold'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {deliverable}
                  </button>
                ))}
              </div>
            </div>

            {/* Length */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Length:</h3>
              <div className="flex gap-4 items-center">
                <input
                  type="number"
                  value={lengthValue}
                  onChange={(e) => setLengthValue(e.target.value)}
                  placeholder="Enter length"
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => setLengthUnit('words')}
                    className={`px-6 py-2.5 border rounded-lg font-semibold transition-all ${
                      lengthUnit === 'words'
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    Words
                  </button>
                  <button
                    onClick={() => setLengthUnit('pages')}
                    className={`px-6 py-2.5 border rounded-lg font-semibold transition-all ${
                      lengthUnit === 'pages'
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    Pages
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all"
              >
                <span>←</span> Back
              </button>
              <button
                disabled={!selectedType || !selectedActivity || !selectedDeliverable || !lengthValue}
                onClick={() => setCurrentStep(4)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedType && selectedActivity && selectedDeliverable && lengthValue
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What kind of expertise would you like the freelancer to have?</h2>
            <p className="text-gray-600 mb-6">
              What kind of expertise would you like the freelancer to have?
            </p>

            {/* Expertise Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {expertiseOptions.map((expertise) => (
                  <button
                    key={expertise}
                    onClick={() => toggleExpertise(expertise)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedExpertise.includes(expertise)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {expertise}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Expert Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tell us the type of industry expert you're looking for!</h3>
              <p className="text-sm text-gray-600 mb-4">
                This will help us match you with an expert aligned to your precise project specifications.
              </p>
              
              <div className="space-y-3 relative">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Agriculture
                  </label>
                  <input
                    type="text"
                    value={industryName}
                    onChange={(e) => setIndustryName(e.target.value)}
                    onFocus={() => setShowIndustryDropdown(true)}
                    placeholder="Enter the Industry Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  {/* Industry Dropdown */}
                  {showIndustryDropdown && (
                    <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-xl max-h-80 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {industries.map((industry) => (
                          <button
                            key={industry}
                            onClick={() => {
                              setIndustryName(industry);
                              setShowIndustryDropdown(false);
                            }}
                            className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-all"
                          >
                            {industry}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Click outside to close dropdown */}
            {showIndustryDropdown && (
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowIndustryDropdown(false)}
              />
            )}

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all"
              >
                <span>←</span> Back
              </button>
              <button
                disabled={selectedExpertise.length === 0 || !industryName}
                onClick={() => setCurrentStep(5)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedExpertise.length > 0 && industryName
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Project title</h2>
            <p className="text-gray-600 mb-6">
              Briefly define the main goal of your project so that freelancers immediately understand your requirements.
            </p>

            {/* Project Title Input */}
            <div className="mb-6">
              <textarea
                value={projectTitle}
                onChange={(e) => {
                  if (e.target.value.length <= 100) {
                    setProjectTitle(e.target.value);
                  }
                }}
                rows={3}
                maxLength={100}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Enter your project title..."
              />
              <div className="flex justify-between items-start mt-2">
                <div className="text-sm text-gray-500">
                  <p className="mb-2">Use a clear and concise title such as:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Need a regulatory writer to prepare 510(k) submission</li>
                    <li>Need a chemist to formulate a cosmetic product</li>
                  </ul>
                </div>
                <div className="text-sm text-gray-500 whitespace-nowrap ml-4">
                  Remaining characters: {projectTitle.length}/100
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(4)}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all"
              >
                <span>←</span> Back
              </button>
              <button
                disabled={!projectTitle.trim()}
                onClick={() => setCurrentStep(6)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  projectTitle.trim()
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Sign up to post your project for free. Get quotes in 24 hours.</h2>
            
            <div className="max-w-md mx-auto mt-8">
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* First Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Field */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              {/* Phone Number Field */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    placeholder="+1"
                    className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                disabled={!email || !firstName || !lastName || !phoneNumber}
                onClick={() => setCurrentStep(7)}
                className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all mb-4 ${
                  email && firstName && lastName && phoneNumber
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit
              </button>

              {/* OR Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
                </div>
              </div>

              {/* Back Button */}
              <button
                onClick={() => setCurrentStep(5)}
                className="w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {currentStep === 7 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Project description</h2>
            <p className="text-gray-600 mb-6">
              Describe what you need to get done in detail. Outline the scope of work and skills required. List out deliverables.
            </p>

            {/* Project Description Textarea */}
            <div className="mb-6">
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows={8}
                placeholder="Enter detailed project description..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* File Upload Area */}
            <div className="mb-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-all">
                <input
                  type="file"
                  id="file-upload"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const file = e.target.files[0];
                      if (file.type === 'application/pdf') {
                        setUploadedFile(file);
                      } else {
                        alert('Please upload only PDF files');
                        e.target.value = '';
                      }
                    }
                  }}
                  className="hidden"
                  accept=".pdf,application/pdf"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-gray-600 mb-2">
                    <span className="text-blue-600 font-semibold">Drag and drop here</span> or <span className="text-blue-600 font-semibold">browse</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">(Max. file size: 100 MB)</div>
                  {uploadedFile ? (
                    <div className="mt-4">
                      <div className="text-sm font-semibold text-gray-700 mb-2">{uploadedFile.name}</div>
                      <div className="text-sm text-green-600 font-semibold">100% uploaded</div>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-400">No file chosen</div>
                  )}
                </label>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(6)}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all"
              >
                <span>←</span> Back
              </button>
              <button
                disabled={!projectDescription.trim()}
                onClick={() => setCurrentStep(8)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  projectDescription.trim()
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Project
              </button>
            </div>
          </div>
        )}

        {currentStep === 8 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose your fee type and budget</h2>
            <p className="text-gray-600 mb-6">
              You can edit your fee even after posting your project.
            </p>

            {/* Fee Type Selection */}
            <div className="mb-6">
              <div className="flex gap-4">
                <button
                  onClick={() => setFeeType('fixed')}
                  className={`flex-1 px-6 py-4 border-2 rounded-lg font-semibold transition-all ${
                    feeType === 'fixed'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Fixed Fee
                </button>
                <button
                  onClick={() => setFeeType('hourly')}
                  className={`flex-1 px-6 py-4 border-2 rounded-lg font-semibold transition-all ${
                    feeType === 'hourly'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Hourly Fee
                </button>
              </div>
            </div>

            {/* Budget Range */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Choose a budget: USD 500-USD 4000
              </label>
              <input
                type="range"
                min="500"
                max="4000"
                step="100"
                value={budgetRange.split('-')[1]}
                onChange={(e) => setBudgetRange(`500-${e.target.value}`)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>USD 500</span>
                <span className="font-semibold text-blue-600">USD {budgetRange.split('-')[1]}</span>
                <span>USD 4000</span>
              </div>
            </div>

            {/* Promotional Code */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                I have a promotional code
              </label>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promotional code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(7)}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all"
              >
                <span>←</span> Back
              </button>
              <button
                onClick={() => setCurrentStep(9)}
                className="px-8 py-3 rounded-lg font-semibold bg-green-600 hover:bg-green-700 text-white transition-all"
              >
                Post Project
              </button>
            </div>
          </div>
        )}

        {currentStep === 9 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">By when do you need to hire a freelancer?</h2>
            
            {/* Timeline Options */}
            <div className="space-y-3 mb-8">
              {[
                'Urgently, within 1-2 days',
                'Within a week',
                'Within a month',
                'Longer than a month',
                "I'll decide later"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setHiringTimeline(option)}
                  className={`w-full px-6 py-4 border-2 rounded-lg text-left font-medium transition-all ${
                    hiringTimeline === option
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Important Factors */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Please indicate any important factors or next steps for hiring an expert on ResearchHub
              </h3>
              <div className="space-y-3">
                {[
                  'Feedback or approval from colleagues or team members while choosing who to hire',
                  'Approval from finance, compliance, legal, security or other teams to manage work or payments through ResearchHub',
                  'Organization-specific contracts or documents, like vendor agreements, conflict of interest documentation, or tax documentation',
                  'None of these apply'
                ].map((factor) => (
                  <label
                    key={factor}
                    className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={importantFactors.includes(factor)}
                      onChange={() => toggleFactor(factor)}
                      className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{factor}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Final Message */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-center text-gray-900 font-semibold">
                Ready to submit? Post your project and start receiving quotes.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button
                onClick={() => setCurrentStep(8)}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all"
              >
                <span>←</span> Back
              </button>
              <button
                disabled={!hiringTimeline}
                onClick={() => setCurrentStep(10)}
                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all ${
                  hiringTimeline
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Project
              </button>
            </div>
          </div>
        )}

        {currentStep === 10 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Update Billing Address</h2>
            
            <div className="mb-6">
              <div className="flex gap-4">
                <button
                  onClick={() => setBillingType('individual')}
                  className={`flex-1 px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                    billingType === 'individual'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}>
                  Individual
                </button>
                <button
                  onClick={() => setBillingType('business')}
                  className={`flex-1 px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                    billingType === 'business'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}>
                  Business
                </button>
              </div>
            </div>

            {billingType === 'business' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company/Institute Name</label>
                  <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company/Institute Address</label>
                  <input type="text" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} placeholder="Enter company address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </>
            )}

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address Line 1 <span className="text-red-500">*</span></label>
              <input type="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} placeholder="Street address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address Line 2</label>
              <input type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} placeholder="Apartment, suite, etc." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">State/Province/Region</label>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code <span className="text-red-500">*</span></label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Zip code" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Country <span className="text-red-500">*</span></label>
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>India</option>
              </select>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">VAT Details</h3>
              <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Number</label>
              <input type="text" value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} placeholder="Enter VAT number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="border-t border-gray-200 pt-6 flex justify-between">
              <button onClick={() => setCurrentStep(9)} className="flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-all">
                <span>←</span> Back
              </button>
              <button 
                disabled={!addressLine1 || !zipCode || isSubmitting} 
                onClick={async () => {
                  setIsSubmitting(true);
                  setSubmitError('');
                  try {
                    await postProjectFromLanding({
                      privacy: privacyOption,
                      category: selectedCategory,
                      writingTypes: [selectedType],
                      writingActivities: [selectedActivity],
                      writingDeliverables: [selectedDeliverable],
                      writingLength: lengthValue,
                      writingLengthUnit: lengthUnit,
                      expertiseTags: selectedExpertise,
                      industries: [industryName],
                      title: projectTitle,
                      fullname: `${firstName} ${lastName}`,
                      email,
                      phoneNumber,
                      countryCode,
                      description: projectDescription,
                      pdfFile: uploadedFile,
                      feeType,
                      budget: parseInt(budgetRange.split('-')[1]),
                      hiringTimeline,
                      hiringFactors: importantFactors,
                      billingType,
                      addressLine1,
                      addressLine2,
                      city,
                      state,
                      zipCode,
                      country,
                      companyName,
                      companyRegistration: companyAddress,
                      vatNumber,
                      expertInvitation
                    });
                    setShowSuccessModal(true);
                  } catch (error: any) {
                    setSubmitError(error.message || 'Failed to submit project');
                  } finally {
                    setIsSubmitting(false);
                  }
                }} 
                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all ${addressLine1 && zipCode && !isSubmitting ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                {isSubmitting ? 'Submitting...' : 'Complete Submission'}
              </button>
            </div>
            {submitError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {submitError}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Congratulations!</h2>
              <p className="text-gray-600">Your address is saved and your project is successfully posted.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div 
                onClick={() => setExpertInvitation('team')}
                className={`border-2 rounded-lg p-4 transition-all cursor-pointer ${
                  expertInvitation === 'team' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'
                }`}>
                <div className="flex items-start gap-3">
                  <input type="radio" name="invite" className="mt-1" checked={expertInvitation === 'team'} onChange={() => {}} />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">I want the ResearchHub team to invite experts on my behalf.</p>
                    <p className="text-sm text-gray-600 mb-2">Learn more</p>
                    <p className="text-blue-600 font-bold">Pay USD 9.99</p>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => setExpertInvitation('self')}
                className={`border-2 rounded-lg p-4 transition-all cursor-pointer ${
                  expertInvitation === 'self' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'
                }`}>
                <div className="flex items-start gap-3">
                  <input type="radio" name="invite" className="mt-1" checked={expertInvitation === 'self'} onChange={() => {}} />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">I will invite experts myself.</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition-all"
            >
              Invite Experts
            </button>
          </div>
        </div>
      )}

      {/* Right Sidebar - Features */}
      {currentStep === 1 && (
        <div className="fixed right-0 top-0 bottom-0 w-96 bg-gradient-to-b from-slate-700 to-slate-800 text-white p-8 hidden xl:block">
          <div className="space-y-12 mt-32">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Confidentiality Assured</h3>
                <p className="text-sm text-gray-300">
                  Choose who can see your project and invite best freelancers for your project.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">100% Satisfaction Guaranteed</h3>
                <p className="text-sm text-gray-300">
                  Throughout the project cycle, work closely with the freelancer to ensure that deliverables meet and exceed your expectations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Flexible, Secure Payments</h3>
                <p className="text-sm text-gray-300">
                  Pay by the hour or per project. Revise your fee after you discuss with freelancers if you're not sure while posting your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
