import { useState } from 'react';
import { Mail, Lock, User, Phone, X, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import { googleSignup } from '../../../services/api';

const topCountries = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
];

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79297V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="white" />
  </svg>
);

interface SignupPageProps {
  onSignup: (data: any) => void;
  onSwitchToLogin: () => void;
  onLogin?: (email: string, password: string) => void;
  onClose?: () => void;
  initialTab?: 'login' | 'signup';
}

export default function SignupPage({ onSignup, onSwitchToLogin, onLogin, onClose, initialTab = 'signup' }: SignupPageProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialTab);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    password: '',
    hearAbout: '',
    role: 'freelancer' as 'client' | 'freelancer'
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (onLogin) {
        await onLogin(loginData.email, loginData.password);
        toast.success('Login successful!');
      } else {
        onSwitchToLogin();
      }
    } catch (err: any) {
      toast.error(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms || !agreedToPrivacy) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      const userData = {
        fullname: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
        password: formData.password,
        role: formData.role
      };

      await onSignup(userData);
      toast.success('Account created successfully!');
    } catch (err: any) {
      toast.error(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkedInSignup = () => {
    toast.info('LinkedIn signup coming soon!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center 
                    bg-black/60 backdrop-blur-sm px-0 py-10">

      <div className="relative w-full max-w-7xl h-[88vh] 
                      bg-white rounded-2xl shadow-2xl overflow-y-auto 
                      border border-gray-200">


        {/* Close button */}
        <button
          onClick={() => {
            if (onClose) {
              onClose();
            } else {
              window.history.back();
            }
          }}
          className="absolute top-6 right-6 z-20 p-2 rounded-full 
                     bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Tab Navigation */}
        <div className="border-b bg-gray-50">
          <div className="flex max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${activeTab === 'login'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${activeTab === 'signup'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {activeTab === 'signup' ? (
            <div className="max-w-2xl mx-auto px-6 py-3">
              <div className="text-center mb-3">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Create Your Expert Account</h2>
              </div>

              <button
                type="button"
                onClick={handleLinkedInSignup}
                className="w-full bg-[#0077B5] text-white py-2.5 rounded-xl font-semibold hover:bg-[#006399] transition-all flex items-center justify-center gap-3 mb-4 shadow-lg hover:shadow-xl"
              >
                <LinkedInIcon />
                Continue with LinkedIn
              </button>

              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">or continue with email</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First Name"
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name"
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Password (min. 8 characters)"
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex gap-3">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-20 px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {topCountries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="Phone Number"
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>
                      I agree to ResearchHub's {' '}
                      <a href="#" className="text-blue-600 hover:underline font-medium">Terms of Service</a> and{' '}
                      <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>
                      I agree to the Privacy Policy and consent to data processing
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={wantsUpdates}
                      onChange={(e) => setWantsUpdates(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>
                      Send me updates about new opportunities and platform features
                    </span>
                  </label>
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Friend/Colleague Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    I want to join as:
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value="freelancer"
                        checked={formData.role === 'freelancer'}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value as 'client' | 'freelancer' })}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Freelancer/Expert</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value="client"
                        checked={formData.role === 'client'}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value as 'client' | 'freelancer' })}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Client</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !agreedToTerms || !agreedToPrivacy}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? 'Creating Account...' : 'Create Expert Account'}
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto px-8 py-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-gray-600 text-sm">Sign in to your ResearchHub account</p>
              </div>

              <button
                type="button"
                onClick={handleLinkedInSignup}
                className="w-full bg-[#0077B5] text-white py-3 rounded-xl font-semibold hover:bg-[#006399] transition-all flex items-center justify-center gap-3 mb-6 shadow-lg hover:shadow-xl"
              >
                <LinkedInIcon />
                Continue with LinkedIn
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">or sign in with email</span>
                </div>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    placeholder="Email Address"
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="Password"
                    required
                    className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline font-medium"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('signup')}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
