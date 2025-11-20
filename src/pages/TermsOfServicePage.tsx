import { motion } from "motion/react";
import { FileText, Scale, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-40 left-[10%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[700px] right-[15%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
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
                  <Scale className="w-10 h-10 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
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
                TERMS OF
              </h1>
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 hidden dark:block"
                style={{
                  WebkitTextStroke: '2px #fff',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                TERMS OF
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
                Service
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
                  Welcome to <span className="text-emerald-600" style={{ fontWeight: 600 }}>BraveDev</span>. These Terms of Service ("Terms") govern your use of our website 
                  and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    Acceptance of Terms
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>By using BraveDev's services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                  If you do not agree to these Terms, you may not access or use our services.</p>
                  
                  <p>We reserve the right to modify these Terms at any time. Your continued use of our services after such modifications 
                  constitutes acceptance of the updated Terms.</p>
                </div>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Our Services
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>BraveDev provides professional software development services including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mobile App Development (iOS, Android, React Native, Flutter)</li>
                    <li>Web Development (React, Next.js, Full-Stack Applications)</li>
                    <li>Point of Sale (POS) Systems</li>
                    <li>E-commerce Development</li>
                    <li>Payment Integration</li>
                    <li>Cloud Solutions</li>
                    <li>Database Management</li>
                    <li>AI & Automation</li>
                    <li>Custom Software Development</li>
                  </ul>
                </div>
              </div>

              {/* User Obligations */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    User Obligations
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>When using our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of any account credentials</li>
                    <li>Use our services in compliance with all applicable laws</li>
                    <li>Not engage in any activity that could harm our systems or other users</li>
                    <li>Respect intellectual property rights</li>
                    <li>Communicate professionally and respectfully</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>All content on our website, including text, graphics, logos, and software, is the property of BraveDev or its licensors 
                  and is protected by copyright and intellectual property laws.</p>
                  
                  <p>For custom software developed for clients, intellectual property rights will be transferred to the client upon full payment, 
                  as specified in the project agreement.</p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
                    Limitation of Liability
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>To the maximum extent permitted by law, BraveDev shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use of our services.</p>
                  
                  <p>Our total liability for any claims shall not exceed the amount paid by you for our services in the twelve months 
                  preceding the claim.</p>
                </div>
              </div>

              {/* Warranties and Disclaimers */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Warranties and Disclaimers
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>Our services are provided "as is" without warranties of any kind, either express or implied. While we strive to deliver 
                  high-quality software, we do not guarantee that our services will be uninterrupted, error-free, or meet all your requirements.</p>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Termination
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach 
                  of these Terms or for any other reason at our sole discretion.</p>
                  
                  <p>Upon termination, all rights granted to you under these Terms will immediately cease.</p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Governing Law
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to 
                  its conflict of law provisions.</p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Changes to These Terms
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page 
                  and updating the "Last updated" date.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 lg:p-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl border-2 border-emerald-500/20 dark:border-emerald-500/30">
                <h2 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                  Contact Us
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <ul className="space-y-2">
                    <li>Email: <a href="mailto:legal@bravedev.io" className="text-emerald-600 dark:text-emerald-400 hover:underline" style={{ fontWeight: 600 }}>legal@bravedev.io</a></li>
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