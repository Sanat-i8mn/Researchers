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
    <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79297V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="white"/>
  </svg>
);

interface SignupPageProps {
  onSignup: (data: any) => void;
  onSwitchToLogin: () => void;
  onLogin?: (email: string, password: string) => void;
}

export default function SignupPage({ onSignup, onSwitchToLogin, onLogin }: SignupPageProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');
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
    <div className="min-h-screen flex items-start justify-center p-4 bg-gradient-to-br from-green-50 via-blue-50 to-gray-100 pt-8 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <style>{`
        @keyframes borderAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animated-border {
          position: relative;
          background: white;
        }
        .animated-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 0.5rem;
          padding: 2px;
          background: linear-gradient(90deg, #000, #444, #000, #444);
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderAnimation 3s linear infinite;
          z-index: -1;
        }
      `}</style>
      <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl relative animated-border">
        <button 
          onClick={() => window.history.back()}
          className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors z-10"
        >
          <X size={18} />
        </button>

        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'login'
                  ? 'text-gray-900 border-b-2 border-green-500'
                  : 'text-gray-500'
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-4 text-center font-semibold transition-colors ${
                activeTab === 'signup'
                  ? 'text-gray-900 border-b-2 border-green-500'
                  : 'text-gray-500'
              }`}
            >
              Create account
            </button>
          </div>
        </div>

        {activeTab === 'signup' ? (
        <div className="p-5">
          <h2 className="text-center text-gray-700 mb-4 text-xs">
            Create an account for a personalized and secure experience
          </h2>

          <button
            type="button"
            onClick={handleLinkedInSignup}
            className="w-full bg-[#0077B5] text-white py-2.5 rounded-md font-semibold hover:bg-[#006399] transition-colors flex items-center justify-center gap-2 mb-3 text-sm"
          >
            <LinkedInIcon />
            Sign up with LinkedIn
          </button>

          <div className="mb-3">
            <label className="flex items-start gap-2 text-xs text-gray-600">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span>
                Yes, I understand and agree to ResearchHub {' '}
                <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </span>
            </label>
          </div>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="First Name"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Last Name"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="w-16 px-1 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              >
                {topCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="Contact Number"
                  required
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center bg-gray-800 text-white rounded-full text-xs"
                >
                  ?
                </button>
              </div>
            </div>

            <div className="relative">
              <select
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm"
              >
                <option value="">How did you hear about us?</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend/Colleague</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span>
                  Yes, I understand and agree to ResearchHub{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </span>
              </label>

              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={wantsUpdates}
                  onChange={(e) => setWantsUpdates(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span>
                  Yes, send me useful tips, articles and offers to help me get the most out of ResearchHub.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5CB85C] text-white py-2.5 rounded-md font-semibold hover:bg-[#4CAF50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {loading ? 'Creating account...' : 'Create secure account'}
            </button>
          </form>
        </div>
        ) : (
        <div className="p-5">
          <h2 className="text-center text-gray-700 mb-4 text-xs">
            Sign in to your account
          </h2>

          <button
            type="button"
            onClick={handleLinkedInSignup}
            className="w-full bg-[#0077B5] text-white py-2.5 rounded-md font-semibold hover:bg-[#006399] transition-colors flex items-center justify-center gap-2 mb-4 text-sm"
          >
            <LinkedInIcon />
            Sign in with LinkedIn
          </button>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
            </div>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="Password"
                required
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="ml-2 text-xs text-gray-700">Remember me</span>
              </label>
              <button
                type="button"
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5CB85C] text-white py-2.5 rounded-md font-semibold hover:bg-[#4CAF50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
        )}
      </div>
    </div>
  );
}
