export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0f1629]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cookie <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ResearchHub uses cookies to enhance your browsing experience and provide personalized services. 
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Authentication and security</li>
              <li>Remembering your preferences and settings</li>
              <li>Analyzing website traffic and usage patterns</li>
              <li>Providing personalized content and recommendations</li>
              <li>Improving our services and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
                <p className="text-gray-300">
                  These cookies are necessary for the website to function properly. They enable basic functions 
                  like page navigation, access to secure areas, and authentication. The website cannot function 
                  properly without these cookies.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Performance Cookies</h3>
                <p className="text-gray-300">
                  These cookies collect information about how visitors use our website, such as which pages are 
                  visited most often and if users get error messages. This data helps us improve how our website works.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Functionality Cookies</h3>
                <p className="text-gray-300">
                  These cookies allow the website to remember choices you make and provide enhanced, more personal 
                  features. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
                <p className="text-gray-300">
                  We use analytics cookies to understand how our website is being used and to improve user experience. 
                  These cookies collect information anonymously and report website trends.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may also use third-party cookies from trusted partners to provide additional functionality:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Payment Processors:</strong> To process secure payments</li>
              <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
              <li><strong>Customer Support:</strong> To provide live chat and support services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie 
              preferences through:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your browser settings - most browsers allow you to refuse cookies</li>
              <li>Our cookie consent banner when you first visit our website</li>
              <li>Your account settings for personalization preferences</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Please note that if you choose to reject cookies, some features of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookie Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              Different cookies have different retention periods:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
              <li><strong>Authentication Cookies:</strong> Typically expire after 30 days of inactivity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for 
              legal and regulatory reasons. We will notify you of any significant changes by posting the new 
              policy on this page with an updated "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <p className="text-gray-300">
                <strong>Email:</strong> privacy@researchhub.com<br />
                <strong>Address:</strong> ResearchHub Inc., 123 Innovation Drive, San Francisco, CA 94105
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}