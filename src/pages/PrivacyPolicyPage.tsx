import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function PrivacyPolicyPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-40 right-[10%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[700px] left-[15%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
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
                  <Shield className="w-10 h-10 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
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
                PRIVACY
              </h1>
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 hidden dark:block"
                style={{
                  WebkitTextStroke: '2px #fff',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                PRIVACY
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
                Last Updated: <span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>November 19, 2025</span>
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
                  At BraveDev, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    Information We Collect
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Personal Information:</span> When you contact us or request our services, we may collect your name, email address, phone number, and company information.</p>
                  
                  <p><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Project Information:</span> Details about your software development needs, project requirements, and business objectives.</p>
                  
                  <p><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Technical Data:</span> We automatically collect certain information about your device, including IP address, browser type, operating system, and usage data.</p>
                  
                  <p><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Cookies:</span> We use cookies and similar tracking technologies to track activity on our website. See our Cookie Policy for more details.</p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    How We Use Your Information
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Communicate with you about projects, updates, and marketing</li>
                    <li>Improve our website and services</li>
                    <li>Process your requests and transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns and trends</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    Data Security
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We implement appropriate technical and organizational security measures to protect your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Secure development practices</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                    However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, 
                    we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Information Sharing and Disclosure
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Service Providers:</span> Trusted third parties who assist us in operating our website and conducting our business</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Legal Requirements:</span> When required by law or to protect our rights</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>Business Transfers:</span> In connection with a merger, acquisition, or sale of assets</li>
                    <li><span className="text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>With Your Consent:</span> When you explicitly agree to share your information</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Your Privacy Rights
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Restrict processing of your information</li>
                    <li>Data portability</li>
                  </ul>
                  <p>To exercise these rights, please contact us at <a href="mailto:privacy@bravedev.io" className="text-emerald-600 dark:text-emerald-400 hover:underline" style={{ fontWeight: 600 }}>privacy@bravedev.io</a></p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Data Retention
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                  unless a longer retention period is required by law.</p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Third-Party Links
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. 
                  We encourage you to read their privacy policies.</p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Children's Privacy
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
                </div>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Changes to This Privacy Policy
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                  and updating the "Last updated" date.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 lg:p-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl border-2 border-emerald-500/20 dark:border-emerald-500/30">
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Contact Us
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
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