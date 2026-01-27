import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Briefcase, GraduationCap, Phone, X, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { googleSignup } from '../../../services/api';
import { motion } from 'framer-motion';

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
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
];

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4"/>
    <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853"/>
    <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05"/>
    <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335"/>
  </svg>
);

interface SignupPageProps {
  onSignup: (data: any) => void;
  onSwitchToLogin: () => void;
}

export default function SignupPage({ onSignup, onSwitchToLogin }: SignupPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'freelancer' as 'client' | 'freelancer'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (!agreedToTerms) {
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

  const handleGoogleSignup = () => {
    const clientId = '179509708444-hnlbsa5qpugc4kq3p4qb3u1kiu92qqgg.apps.googleusercontent.com';
    
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCallback
      });
      window.google.accounts.id.prompt();
    } else {
      toast.error('Google Sign-In is not available.');
    }
  };

  const handleGoogleCallback = async (response: any) => {
    setLoading(true);
    try {
      const result = await googleSignup(response.credential, formData.role);
      if (result.success) {
        toast.success('Google signup successful!');
        setTimeout(() => {
          onSignup({ 
            fullname: result.user.fullname,
            email: result.user.email,
            role: result.user.role
          });
        }, 1000);
      }
    } catch (err: any) {
      toast.error(err.message || 'Google signup failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-[#f0f4ff] via-[#dbe7ff] to-[#c0d4ff] rounded-2xl shadow-2xl">
        {/* Close button - Top right of modal */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-1 right-1 z-[60] p-2 bg-gray-900 hover:bg-black rounded-full transition-colors shadow-xl"
        >
          <X size={24} className="text-white" />
        </button>
        {/* Animated Grid Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          initial={{ backgroundPosition: '0 0' }}
          animate={{ backgroundPosition: '32px 32px' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(37,99,235,0.05), rgba(37,99,235,0.05) 1px, transparent 1px, transparent 32px),
              repeating-linear-gradient(90deg, rgba(37,99,235,0.05), rgba(37,99,235,0.05) 1px, transparent 1px, transparent 32px)
            `
          }}
        />

        {/* Floating decorative shapes */}
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 p-6">
          <div className="mb-4">
            <label className="block text-xs font-bold text-gray-900 mb-2">I want to:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: 'client' })}
                className={`p-3 border-2 rounded-xl transition-all bg-white shadow-lg ${
                  formData.role === 'client'
                    ? 'border-blue-600 ring-2 ring-blue-500/50'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                <Briefcase className="mx-auto mb-1 text-blue-600" size={24} />
                <div className="font-bold text-gray-900 text-sm mb-0.5">Request Service</div>
                <div className="text-xs text-gray-600">Need research help</div>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: 'freelancer' })}
                className={`p-3 border-2 rounded-xl transition-all bg-white shadow-lg ${
                  formData.role === 'freelancer'
                    ? 'border-blue-600 ring-2 ring-blue-500/50'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                <GraduationCap className="mx-auto mb-1 text-blue-600" size={24} />
                <div className="font-bold text-gray-900 text-sm mb-0.5">Join as Expert</div>
                <div className="text-xs text-gray-600">I'm a researcher</div>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-1">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">Contact Number</label>
              <div className="flex gap-2">
                <div className="relative w-32">
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-sm flex items-center justify-between"
                  >
                    <span>{topCountries.find(c => c.code === formData.countryCode)?.flag} {formData.countryCode}</span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </button>
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                      {topCountries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, countryCode: country.code });
                            setShowCountryDropdown(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
                        >
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-gray-700">{country.name}</span>
                          <span className="text-gray-500 ml-auto">{country.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-1 relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value.replace(/\D/g, '') })}
                    placeholder="Contact Number"
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Min 8 characters"
                  required
                  minLength={8}
                  className="w-full pl-9 pr-10 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Re-enter password"
                  required
                  className="w-full pl-9 pr-10 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-xs text-gray-700">
                  I agree to Terms & Conditions, Privacy Policy, and Academic Integrity Policy
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 rounded-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/50 disabled:opacity-50 text-sm"
            >
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-gradient-to-br from-[#f0f4ff] via-[#dbe7ff] to-[#c0d4ff] text-gray-600">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full mt-3 flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-400 py-2.5 rounded-lg font-semibold transition-all text-sm text-gray-700 shadow-sm"
            >
              <GoogleIcon />
              Google
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">Already have an account? </span>
            <button
              onClick={onSwitchToLogin}
              className="text-blue-600 font-bold hover:text-blue-700 transition-colors text-sm"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
