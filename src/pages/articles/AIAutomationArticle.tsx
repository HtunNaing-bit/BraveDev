import { motion } from "motion/react";
import { ArrowLeft, Clock, Tag, Calendar, Share2, ArrowRight } from "lucide-react";

export function AIAutomationArticle() {
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
                AI & Automation
              </motion.div>

              {/* Title with Creative Typography */}
              <h1 className="text-5xl lg:text-7xl mb-8 tracking-tight leading-tight">
                <span className="text-black">AI Automation in</span>
                <br />
                <span 
                  className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-400 bg-clip-text text-transparent"
                  style={{ textShadow: '0 0 40px rgba(16, 185, 129, 0.3)' }}
                >
                  Modern Business
                </span>
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600 mb-12">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg">Nov 14, 2024</span>
                </div>
                <div className="w-2 h-2 bg-emerald-600/30 rounded-full" />
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg">8 min read</span>
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
                  <div className="text-8xl mb-4">🤖</div>
                  <p className="text-xl text-gray-600">AI & Automation</p>
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
                Artificial intelligence and machine learning are <span className="text-emerald-600">no longer futuristic concepts</span>—they're 
                transforming how businesses operate today. From automating repetitive tasks to providing intelligent insights, 
                AI is <span className="text-black">reshaping every industry</span>.
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-8 tracking-tight">
                The Rise of <span className="text-emerald-600">AI in Business</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Over the past decade, we've witnessed an exponential growth in AI adoption across businesses of all sizes. 
                  What was once accessible only to tech giants is now available to startups and SMEs, democratizing the 
                  power of artificial intelligence.
                </p>
              </div>
            </motion.div>

            {/* Key Areas - Card Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Key Areas of <span className="text-emerald-600">AI Automation</span>
              </h2>

              <div className="grid gap-8">
                {/* Card 1 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">01</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Customer Service & Support
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        AI-powered chatbots and virtual assistants are revolutionizing customer service. They provide 24/7 support, 
                        handle multiple queries simultaneously, and learn from each interaction to improve responses. This not only 
                        reduces operational costs but also enhances customer satisfaction with instant, accurate responses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">02</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Data Analysis & Insights
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Machine learning algorithms can process vast amounts of data in seconds, identifying patterns and trends 
                        that would take humans weeks or months to discover. This enables businesses to make data-driven decisions 
                        faster and with greater confidence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border-2 border-black/5 hover:border-emerald-500/30 rounded-2xl p-8 lg:p-10 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">03</div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl text-black mb-4 group-hover:text-emerald-600 transition-colors">
                        Process Automation
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        From invoice processing to inventory management, AI can automate repetitive tasks that consume valuable 
                        time and resources. This allows employees to focus on strategic, creative work that drives business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Real-World <span className="text-emerald-600">Impact</span>
              </h2>

              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border-2 border-emerald-500/20 rounded-3xl p-8 lg:p-12">
                <p className="text-xl text-gray-800 mb-8">
                  Companies implementing AI automation are seeing remarkable results:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">40-60%</div>
                      <p className="text-gray-700">Reduction in operational costs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">24/7</div>
                      <p className="text-gray-700">Availability for customer service</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">85%</div>
                      <p className="text-gray-700">Faster data processing and analysis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl text-emerald-600 mb-2">95%+</div>
                      <p className="text-gray-700">Precision in automated tasks</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Getting Started */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-12 tracking-tight">
                Getting Started with <span className="text-emerald-600">AI</span>
              </h2>

              <div className="space-y-6">
                {[
                  "Identify repetitive tasks that consume significant time and resources",
                  "Assess your data - AI thrives on quality data, so ensure you have sufficient, clean data",
                  "Start small with a pilot project to prove ROI before scaling",
                  "Choose the right partners who understand both AI and your business domain",
                  "Train your team to work alongside AI systems effectively"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white border-l-4 border-emerald-600 rounded-r-2xl hover:shadow-lg transition-shadow">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Closing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl text-black mb-8 tracking-tight">
                The Future is <span className="text-emerald-600">Now</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  AI automation isn't about replacing humans—it's about augmenting human capabilities. By automating 
                  mundane tasks, AI frees up your team to focus on innovation, creativity, and building meaningful 
                  customer relationships.
                </p>
                <p>
                  The question is no longer whether to adopt AI, but how quickly you can implement it to stay competitive. 
                  Businesses that embrace AI automation today will be the leaders of tomorrow.
                </p>
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
                  Ready to Transform Your <span className="text-emerald-400">Business with AI?</span>
                </h3>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Our team specializes in developing custom AI solutions tailored to your specific needs. 
                  Let's discuss how we can help you leverage AI to transform your operations.
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
                  <span>Start Your AI Journey</span>
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
