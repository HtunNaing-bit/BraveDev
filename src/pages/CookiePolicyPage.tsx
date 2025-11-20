import { motion } from "motion/react";
import { Cookie, Settings, Eye, ToggleLeft, ArrowLeft } from "lucide-react";

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-40 right-[15%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[700px] left-[10%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-16 py-24 relative z-50">
        <button
          type="button"
          onClick={() => {
            window.location.hash = '/';
          }}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group cursor-pointer bg-transparent border-none"
          style={{ fontWeight: 600, padding: '8px 0', margin: 0 }}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative border-b-2 border-black/5 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-[1400px] mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Cookie className="w-10 h-10 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                </div>
              </div>

              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 dark:hidden"
                style={{
                  WebkitTextStroke: '2px #000',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                COOKIE
              </h1>
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 hidden dark:block"
                style={{
                  WebkitTextStroke: '2px #fff',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                COOKIE
              </h1>

              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-8"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                Policy
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Last updated: <span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>November 19, 2025</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Introduction */}
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This Cookie Policy explains how <span className="text-emerald-600" style={{ fontWeight: 600 }}>BraveDev</span> uses cookies and similar technologies 
                  to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.
                </p>
              </div>

              {/* What Are Cookies */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    What Are Cookies?
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to website owners.</p>
                  
                  <p>Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, 
                  while session cookies are deleted when you close your browser.</p>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    How We Use Cookies
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We use cookies for several purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Essential Cookies:</span> Required for the website to function properly</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Analytics Cookies:</span> Help us understand how visitors use our website</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Functionality Cookies:</span> Remember your preferences and settings</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Marketing Cookies:</span> Track your visit across websites to deliver relevant advertising</li>
                  </ul>
                </div>
              </div>

              {/* Types of Cookies */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-xl text-black dark:text-white mb-2" style={{ fontWeight: 600 }}>1. Strictly Necessary Cookies</h3>
                    <p>These cookies are essential for you to browse our website and use its features. Without these cookies, 
                    services you have requested cannot be provided.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-black dark:text-white mb-2" style={{ fontWeight: 600 }}>2. Performance and Analytics Cookies</h3>
                    <p>These cookies collect information about how visitors use our website, such as which pages are visited most often. 
                    This data helps us optimize our website and improve user experience.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-black dark:text-white mb-2" style={{ fontWeight: 600 }}>3. Functionality Cookies</h3>
                    <p>These cookies allow our website to remember choices you make (such as your language preference) and provide 
                    enhanced, personalized features.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-black dark:text-white mb-2" style={{ fontWeight: 600 }}>4. Targeting and Advertising Cookies</h3>
                    <p>These cookies are used to deliver content that is more relevant to you and your interests. They may be used 
                    to deliver targeted advertising or limit the number of times you see an advertisement.</p>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Third-Party Cookies
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We may use third-party services that use cookies for analytics and advertising purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Google Analytics for website traffic analysis</li>
                    <li>Social media platforms for sharing content</li>
                    <li>Marketing and advertising partners</li>
                  </ul>
                  <p>These third parties have their own privacy policies, and we have no control over their cookies.</p>
                </div>
              </div>

              {/* Your Cookie Choices */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    Your Cookie Choices
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>You have the right to decide whether to accept or reject cookies:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Browser Settings:</span> Most browsers allow you to refuse or accept cookies through their settings</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Cookie Banner:</span> Use our cookie consent banner when you first visit our site</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Opt-Out Links:</span> Use opt-out links provided by third-party cookie providers</li>
                  </ul>
                  <p className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                    Note: Blocking cookies may impact your experience on our website and prevent you from using certain features.
                  </p>
                </div>
              </div>

              {/* How to Control Cookies */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  How to Control Cookies
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>You can control and manage cookies in various ways:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use your browser settings to block or delete cookies</li>
                    <li>Use browser add-ons or extensions for cookie management</li>
                    <li>Visit the privacy settings of third-party providers</li>
                    <li>Use the "Do Not Track" feature in your browser</li>
                  </ul>
                  <p>For more information on how to control cookies, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline" style={{ fontWeight: 600 }}>www.aboutcookies.org</a></p>
                </div>
              </div>

              {/* Changes to Cookie Policy */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Changes to This Cookie Policy
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy 
                  on this page and updating the "Last updated" date.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 lg:p-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl border-2 border-emerald-500/20 dark:border-emerald-500/30">
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Contact Us
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>If you have any questions about our use of cookies, please contact us:</p>
                  <ul className="space-y-2">
                    <li>Email: <a href="mailto:privacy@bravedev.io" className="text-emerald-600 dark:text-emerald-400 hover:underline" style={{ fontWeight: 600 }}>privacy@bravedev.io</a></li>
                    <li>Website: <a href="#/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline" style={{ fontWeight: 600 }}>Contact Page</a></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}