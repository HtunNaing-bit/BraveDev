import { motion } from "motion/react";
import { ArrowLeft, Clock, Tag, Calendar, Share2, ArrowRight } from "lucide-react";

export function EcommerceArticle() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Creative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-96 h-96 border border-emerald-500/10 rounded-full" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 border-2 border-emerald-500/10" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute top-1/2 right-1/4 w-px h-96 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-16 py-8 relative z-10">
        <motion.a
          href="#/insight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '/insight';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black/5 hover:border-emerald-500/30 rounded-full text-gray-600 hover:text-emerald-600 transition-all cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Insights</span>
        </motion.a>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-white relative z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              {/* Category Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full text-sm mb-8"
              >
                <Tag className="w-4 h-4" />
                E-commerce
              </motion.div>

              {/* Title with Creative Typography */}
              <h1 className="text-5xl lg:text-7xl mb-8 tracking-tight leading-tight">
                <span className="text-black">Building Scalable</span>
                <br />
                <span 
                  className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-400 bg-clip-text text-transparent"
                  style={{ textShadow: '0 0 40px rgba(16, 185, 129, 0.3)' }}
                >
                  E-commerce Platforms
                </span>
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600 mb-12">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg">Nov 10, 2024</span>
                </div>
                <div className="w-2 h-2 bg-emerald-600/30 rounded-full" />
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg">10 min read</span>
                </div>
                <div className="w-2 h-2 bg-emerald-600/30 rounded-full" />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-lg"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </motion.button>
              </div>

              {/* Featured Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative w-full max-w-4xl mx-auto h-96 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent rounded-3xl border-2 border-emerald-500/20 flex items-center justify-center overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-emerald-500/20 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-emerald-500/20" style={{ transform: 'rotate(45deg)' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
                </div>
                
                <div className="text-center z-10">
                  <div className="text-8xl mb-4">🛒</div>
                  <p className="text-xl text-gray-600">E-commerce Development</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Lead Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-20"
            >
              <p className="text-2xl lg:text-3xl leading-relaxed text-gray-800">
                Best practices for architecting <span className="text-emerald-600">e-commerce solutions</span> that handle high traffic, 
                secure payments, and deliver <span className="text-black">exceptional shopping experiences</span>.
              </p>
            </motion.div>

            {/* Core Principles Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Core Architecture <span className="text-emerald-600">Principles</span>
              </h2>

              <div className="grid gap-8">
                {/* Principle 1 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">01</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Scalability from Day One
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Your platform should handle traffic spikes during sales events without crashing. This means implementing 
                        cloud-based infrastructure that can automatically scale resources based on demand. We recommend using 
                        microservices architecture to ensure individual components can scale independently.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Principle 2 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">02</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Performance Optimization
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Every second counts in e-commerce. Research shows that a 1-second delay in page load time can result 
                        in a 7% reduction in conversions. Optimize your platform with:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Content Delivery Networks (CDN) for fast global access",
                          "Image optimization and lazy loading",
                          "Database query optimization",
                          "Caching strategies for frequently accessed data"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-emerald-600 mt-1">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principle 3 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">03</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Security First
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Handling customer data and payments requires enterprise-grade security. Implement PCI DSS compliance, 
                        SSL encryption, secure payment gateways, and regular security audits to protect your customers and 
                        your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Technology Stack <span className="text-emerald-600">Recommendations</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Frontend", items: ["React or Next.js", "Tailwind CSS", "Progressive Web App (PWA)"] },
                  { title: "Backend", items: ["Node.js or Python", "PostgreSQL or MongoDB", "Redis for caching"] },
                  { title: "Payment", items: ["Stripe", "PayPal", "Shopify Payments"] },
                  { title: "Infrastructure", items: ["AWS or Google Cloud", "Docker & Kubernetes", "CloudFlare CDN"] }
                ].map((stack, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-500/5 to-transparent border-2 border-emerald-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl text-black mb-6">{stack.title}</h3>
                    <ul className="space-y-3">
                      {stack.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                          <span className="text-lg text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Essential Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Essential <span className="text-emerald-600">Features</span>
              </h2>

              <div className="space-y-4">
                {[
                  { num: "01", title: "Advanced Search & Filtering", desc: "Help customers find products quickly" },
                  { num: "02", title: "Mobile-First Design", desc: "Over 70% of e-commerce traffic is mobile" },
                  { num: "03", title: "Multiple Payment Options", desc: "Credit cards, digital wallets, buy-now-pay-later" },
                  { num: "04", title: "Inventory Management", desc: "Real-time stock tracking and automated reordering" },
                  { num: "05", title: "Analytics & Reporting", desc: "Track sales, customer behavior, and performance metrics" },
                  { num: "06", title: "Customer Reviews", desc: "Build trust with authentic product reviews" },
                  { num: "07", title: "Abandoned Cart Recovery", desc: "Automated emails to recover lost sales" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 bg-white border-l-4 border-emerald-600 rounded-r-2xl hover:shadow-lg transition-shadow">
                    <div className="text-3xl text-emerald-600/30 w-16">{feature.num}</div>
                    <div className="flex-1">
                      <h4 className="text-xl text-black mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Success <span className="text-emerald-600">Metrics</span>
              </h2>

              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border-2 border-emerald-500/20 rounded-3xl p-8 lg:p-12">
                <p className="text-xl text-gray-800 mb-8">
                  Track these key performance indicators to measure your platform's success:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { metric: "Conversion Rate", desc: "Percentage of visitors who make a purchase" },
                    { metric: "Average Order Value", desc: "Average amount spent per transaction" },
                    { metric: "Cart Abandonment", desc: "Should be below 70%" },
                    { metric: "Page Load Time", desc: "Target under 3 seconds" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">✓</span>
                      </div>
                      <div>
                        <div className="text-xl text-black mb-1">{item.metric}</div>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30 relative z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-black text-white rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl mb-6 tracking-tight">
                  Ready to Build Your <span className="text-emerald-400">E-commerce Platform?</span>
                </h3>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  We have extensive experience developing high-performance e-commerce solutions. 
                  Let's create a platform that scales with your business and delights your customers.
                </p>
                <motion.a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '/contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full hover:bg-emerald-500 hover:text-white transition-all cursor-pointer text-lg group"
                >
                  <span>Start Your E-commerce Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
