import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { logoutUser, loginUser as apiLoginUser, registerUser, adminLogin as apiAdminLogin } from './services/api';
import Navbar from './components/layout/Navbar';
import toast from 'react-hot-toast';

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const SignupPage = lazy(() => import('./pages/Auth/SignupPage'));
const AdminLoginPage = lazy(() => import('./pages/Auth/AdminLoginPage'));
const BiddingPage = lazy(() => import('./pages/BiddingPage'));
const MessagingPage = lazy(() => import('./pages/MessagingPage'));
const EscrowPaymentPage = lazy(() => import('./pages/EscrowPaymentPage'));
const VerificationCertificationPage = lazy(() => import('./pages/VerificationCertificationPage'));
const FreelancerAccountDetailsPage = lazy(() => import('./pages/FreelancerAccountDetailsPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AdminDashboard = lazy(() => import('./pages/Dashboard/Admin/AdminDashboard'));
const TermsAndConditions = lazy(() => import('./pages/Policies/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/Policies/PrivacyPolicy'));
const AcademicIntegrity = lazy(() => import('./pages/Policies/AcademicIntegrity'));
const EscrowServiceTerms = lazy(() => import('./pages/Policies/EscrowServiceTerms'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const HelpCenterPage = lazy(() => import('./pages/HelpCenterPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const ProfileViewPopup = lazy(() => import('./components/shared/ProfileViewPopup'));
const PostProjectPage = lazy(() => import('./pages/PostProjectPage'));

type PageType = 'home' | 'about' | 'blog' | 'pricing' | 'login' | 'signup' | 'admin-login' | 'bidding' | 'post-project' | 'messaging' | 'escrow' | 'verification' | 'freelancer-account-details' | 'client-dashboard' | 'freelancer-dashboard' | 'admin-dashboard' | 'terms-and-conditions' | 'privacy-policy' | 'academic-integrity-policy' | 'escrow-service-terms' | 'contact-us' | 'help-center' | 'faq' | 'cookie-policy';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#dbe7ff] to-[#c0d4ff]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading, setUser, refreshUser, isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    const routes: Record<PageType, string> = {
      'home': '/', 'about': '/about', 'blog': '/blog', 'pricing': '/pricing',
      'login': '/login', 'signup': '/signup', 'admin-login': '/admin/login',
      'bidding': '/bidding', 'post-project': '/post-project', 'messaging': '/messaging', 'escrow': '/escrow',
      'verification': '/verification', 'freelancer-account-details': '/freelancer-account-details',
      'client-dashboard': '/client-dashboard', 'freelancer-dashboard': '/freelancer-dashboard',
      'admin-dashboard': '/admin-dashboard', 'terms-and-conditions': '/terms-and-conditions',
      'privacy-policy': '/privacy-policy', 'academic-integrity-policy': '/academic-integrity-policy',
      'escrow-service-terms': '/escrow-service-terms', 'contact-us': '/contact-us',
      'help-center': '/help-center', 'faq': '/faq', 'cookie-policy': '/cookie-policy'
    };
    navigate(routes[page]);
  };

  useEffect(() => {
    const pathToPage: Record<string, PageType> = {
      '/': 'home', '/about': 'about', '/blog': 'blog', '/pricing': 'pricing',
      '/login': 'login', '/signup': 'signup', '/admin': 'admin-login',
      '/bidding': 'bidding', '/post-project': 'post-project', '/messaging': 'messaging', '/escrow': 'escrow',
      '/verification': 'verification', '/freelancer-account-details': 'freelancer-account-details',
      '/client-dashboard': 'client-dashboard', '/freelancer-dashboard': 'freelancer-dashboard',
      '/admin-dashboard': 'admin-dashboard', '/terms-and-conditions': 'terms-and-conditions',
      '/privacy-policy': 'privacy-policy', '/academic-integrity-policy': 'academic-integrity-policy',
      '/escrow-service-terms': 'escrow-service-terms', '/contact-us': 'contact-us',
      '/help-center': 'help-center', '/faq': 'faq', '/cookie-policy': 'cookie-policy'
    };
    
    if (location.pathname.startsWith('/bidding')) {
      setCurrentPage('bidding');
    } else {
      const page = pathToPage[location.pathname] || 'home';
      setCurrentPage(page);
    }
  }, [location.pathname]);

  const handleLogin = async (email: string, password: string) => {
    const response = await apiLoginUser({ email, password });
    if (response.success && response.user) {
      setUser(response.user);
      navigate(response.user.role === 'client' ? '/client-dashboard' : '/freelancer-dashboard');
    }
  };

  const handleSignup = async (data: any) => {
    await registerUser(data);
    await refreshUser();
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate('/');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  const handleAdminLogin = async (email: string, password: string) => {
    const response = await apiAdminLogin({ email, password });
    if (response.success && response.user) {
      setUser(response.user);
      navigate('/admin-dashboard');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <LandingPage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage onNavigate={handleNavigate} />;
      case 'blog': return <BlogPage onNavigate={handleNavigate} />;
      case 'pricing': return <PricingPage onNavigate={handleNavigate} />;
      case 'login': return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => handleNavigate('signup')} />;
      case 'signup': return <SignupPage onSignup={handleSignup} onSwitchToLogin={() => handleNavigate('login')} />;
      case 'admin-login': return <AdminLoginPage onAdminLogin={handleAdminLogin} />;
      case 'bidding': return <BiddingPage />;
      case 'post-project': return <PostProjectPage />;
      case 'messaging': return <MessagingPage />;
      case 'escrow': return <EscrowPaymentPage />;
      case 'verification': return <VerificationCertificationPage />;
      case 'freelancer-account-details': return <FreelancerAccountDetailsPage />;
      case 'client-dashboard': return <Dashboard user={user} />;
      case 'freelancer-dashboard': return <Dashboard user={user} />;
      case 'admin-dashboard':
        if (!isAuthenticated || user?.role !== 'admin') {
          navigate('/admin/login');
          return <AdminLoginPage onAdminLogin={handleAdminLogin} />;
        }
        return <AdminDashboard />;
      case 'terms-and-conditions': return <TermsAndConditions />;
      case 'privacy-policy': return <PrivacyPolicy />;
      case 'academic-integrity-policy': return <AcademicIntegrity />;
      case 'escrow-service-terms': return <EscrowServiceTerms />;
      case 'contact-us': return <ContactPage />;
      case 'help-center': return <HelpCenterPage />;
      case 'faq': return <FAQPage />;
      case 'cookie-policy': return <CookiePolicyPage />;
      default: return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  const showNavigation = !['login', 'signup', 'admin-login', 'admin-dashboard', 'post-project', 'terms-and-conditions', 'privacy-policy', 'academic-integrity-policy', 'escrow-service-terms', 'contact-us', 'help-center', 'faq', 'cookie-policy'].includes(currentPage);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      {showNavigation && (
        <Navbar
          onNavigate={handleNavigate}
          onViewProfile={() => setShowProfilePopup(true)}
          onLogout={handleLogout}
        />
      )}

      <Suspense fallback={<LoadingSpinner />}>
        {renderPage()}
      </Suspense>

      {showProfilePopup && (
        <Suspense fallback={null}>
          <ProfileViewPopup onClose={() => setShowProfilePopup(false)} />
        </Suspense>
      )}
    </>
  );
}

export default function App() {
  return <AppContent />;
}
