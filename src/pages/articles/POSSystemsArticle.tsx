import { motion } from "motion/react";
import { ArrowLeft, Clock, Tag, Calendar, Share2, ArrowRight } from "lucide-react";

export function POSSystemsArticle() {
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
                POS Systems
              </motion.div>

              {/* Title with Creative Typography */}
              <h1 className="text-5xl lg:text-7xl mb-8 tracking-tight leading-tight">
                <span className="text-black">Modern POS Systems for</span>
                <br />
                <span 
                  className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-400 bg-clip-text text-transparent"
                  style={{ textShadow: '0 0 40px rgba(16, 185, 129, 0.3)' }}
                >
                  Retail & Hospitality
                </span>
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600 mb-12">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg">Nov 5, 2024</span>
                </div>
                <div className="w-2 h-2 bg-emerald-600/30 rounded-full" />
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg">12 min read</span>
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
                  <div className="text-8xl mb-4">💳</div>
                  <p className="text-xl text-gray-600">Point of Sale Systems</p>
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
                The evolution of <span className="text-emerald-600">point-of-sale technology</span> and how cloud-based POS systems 
                are revolutionizing <span className="text-black">retail and hospitality businesses</span>.
              </p>
            </motion.div>

            {/* Why Cloud-Based */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Why <span className="text-emerald-600">Cloud-Based POS?</span>
              </h2>

              <div className="grid gap-8">
                {/* Benefit 1 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">01</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Accessibility Anywhere
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        With cloud-based systems, you can access your business data from anywhere. Check sales reports 
                        from home, manage inventory from your phone, and monitor multiple locations from a single dashboard. 
                        This flexibility is invaluable for modern business owners.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">02</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Real-Time Data Sync
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Every transaction, inventory update, and customer interaction syncs instantly across all devices. 
                        This means your data is always current, enabling better decision-making and preventing issues like 
                        overselling or stock discrepancies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">03</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Lower Upfront Costs
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Traditional POS systems required significant upfront investment in hardware and software licenses. 
                        Cloud-based solutions operate on subscription models with minimal initial costs, making them 
                        accessible to businesses of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
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
                Essential POS <span className="text-emerald-600">Features</span>
              </h2>

              <div className="space-y-4">
                {[
                  { icon: "💳", title: "Payment Processing", desc: "Accept all payment types including contactless and mobile wallets" },
                  { icon: "📦", title: "Inventory Management", desc: "Track stock levels in real-time with automated reordering" },
                  { icon: "👥", title: "Customer Relationship Management", desc: "Build customer profiles and loyalty programs" },
                  { icon: "👨‍💼", title: "Employee Management", desc: "Time tracking, permissions, and performance metrics" },
                  { icon: "📊", title: "Reporting & Analytics", desc: "Comprehensive insights into sales, trends, and performance" },
                  { icon: "🏪", title: "Multi-Location Support", desc: "Manage multiple stores from one platform" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 bg-white border-l-4 border-emerald-600 rounded-r-2xl hover:shadow-lg transition-shadow group">
                    <div className="text-4xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl text-black mb-1 group-hover:text-emerald-600 transition-colors">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industry Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Industry-Specific <span className="text-emerald-600">Solutions</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: "Retail", 
                    emoji: "🛍️",
                    features: ["Inventory management", "Barcode scanning", "Customer loyalty", "Product variants", "Seasonal promotions", "E-commerce integration"]
                  },
                  { 
                    title: "Restaurants", 
                    emoji: "🍽️",
                    features: ["Table management", "Kitchen display", "Menu customization", "Split bills", "Tip management", "Delivery integration"]
                  },
                  { 
                    title: "Services", 
                    emoji: "💼",
                    features: ["Appointment scheduling", "Service packages", "Client history", "Booking systems", "Automated reminders", "Service tracking"]
                  }
                ].map((industry, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-500/5 to-transparent border-2 border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all">
                    <div className="text-5xl mb-4">{industry.emoji}</div>
                    <h3 className="text-2xl text-black mb-6">{industry.title}</h3>
                    <ul className="space-y-3">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Integration Ecosystem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Integration <span className="text-emerald-600">Ecosystem</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Business Tools", items: ["Accounting software (QuickBooks, Xero)", "E-commerce platforms (Shopify, WooCommerce)", "Marketing tools (Mailchimp, Klaviyo)"] },
                  { title: "Payment Systems", items: ["Stripe, Square, PayPal", "Apple Pay, Google Pay", "Gift card processors"] },
                  { title: "Operations", items: ["Delivery services (DoorDash, Uber Eats)", "Reservation systems (OpenTable)", "Supplier management"] },
                  { title: "Analytics", items: ["Business intelligence tools", "Customer analytics platforms", "Inventory forecasting"] }
                ].map((category, index) => (
                  <div key={index} className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 transition-all">
                    <h3 className="text-2xl text-black mb-6">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ROI Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                ROI & Business <span className="text-emerald-600">Impact</span>
              </h2>

              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border-2 border-emerald-500/20 rounded-3xl p-8 lg:p-12">
                <p className="text-xl text-gray-800 mb-8">
                  Businesses implementing modern POS systems report:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">30%</div>
                      <p className="text-gray-700">Faster checkout times</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">25%</div>
                      <p className="text-gray-700">Reduction in inventory errors</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">40%</div>
                      <p className="text-gray-700">Improvement in customer satisfaction</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">20%</div>
                      <p className="text-gray-700">Increase in repeat customers</p>
                    </div>
                  </div>
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
                  Build Your Custom <span className="text-emerald-400">POS Solution</span>
                </h3>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  We develop custom POS solutions tailored to your specific industry and business needs. 
                  Let's build a system that streamlines your operations and delights your customers.
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
                  <span>Get Your Custom POS</span>
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
