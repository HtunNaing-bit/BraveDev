import { motion } from "motion/react";
import { Star, Quote, Sparkles, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    position: "CEO, TechStart Solutions",
    company: "E-commerce Platform",
    rating: 5,
    text: "BraveDev delivered our e-commerce platform on time and within budget. Their expertise in React and Node.js helped us launch 2 weeks early. Highly recommended!",
    project: "Custom E-commerce System"
  },
  {
    name: "Maria Garcia",
    position: "Owner, Retail Plus",
    company: "Retail Business",
    rating: 5,
    text: "The POS system they built transformed our business operations. It's fast, reliable, and exactly what we needed. The team was professional throughout the project.",
    project: "Cloud POS Solution"
  },
  {
    name: "Robert Chen",
    position: "CTO, FinanceHub",
    company: "Financial Services",
    rating: 5,
    text: "Working with BraveDev was a great experience. They understood our requirements and delivered a secure, scalable web application. Their code quality is exceptional.",
    project: "Financial Dashboard App"
  },
  {
    name: "Sarah Thompson",
    position: "Founder, FitLife App",
    company: "Health & Wellness",
    rating: 5,
    text: "Our mobile app exceeded expectations. BraveDev's React Native expertise helped us launch on both iOS and Android simultaneously. User feedback has been outstanding.",
    project: "Fitness Mobile App"
  },
  {
    name: "David Martinez",
    position: "Director, Global Logistics",
    company: "Logistics Company",
    rating: 5,
    text: "The team integrated our payment systems flawlessly with Stripe and PayPal. Their attention to security and compliance gave us complete confidence.",
    project: "Payment Integration System"
  },
  {
    name: "Linda Anderson",
    position: "Manager, Cloud Services Co",
    company: "SaaS Provider",
    rating: 5,
    text: "BraveDev migrated our entire infrastructure to AWS with zero downtime. Their DevOps knowledge and planning made the transition seamless.",
    project: "AWS Cloud Migration"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-black dark:bg-white rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Bold Header */}
          <div className="mb-20 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-emerald-600 dark:border-emerald-400 rounded-full">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                  Success Stories
                </span>
              </div>

              {/* Massive Title */}
              <h2 className="mb-6">
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-gray-400 dark:text-gray-500 mb-3">
                  Don't Just
                </span>
                <span 
                  className="block text-7xl sm:text-8xl lg:text-9xl leading-none tracking-tighter dark:hidden"
                  style={{
                    WebkitTextStroke: '2px #000',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  TAKE OUR WORD
                </span>
                <span 
                  className="block text-7xl sm:text-8xl lg:text-9xl leading-none tracking-tighter hidden dark:block"
                  style={{
                    WebkitTextStroke: '2px #fff',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  TAKE OUR WORD
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-black dark:text-white mt-4">
                  Hear From Our Clients
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Real results from real businesses. See how we've helped companies transform their ideas into successful digital products.
              </p>
            </motion.div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''} ${index === 3 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full"
                >
                  <div className={`relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${
                    index === 0 || index === 3 ? 'p-10 lg:p-14' : 'p-8 lg:p-10'
                  }`}>
                    
                    {/* Background pattern for featured cards */}
                    {(index === 0 || index === 3) && (
                      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-2xl" />
                    )}

                    {/* Large number watermark */}
                    <div 
                      className="absolute -bottom-4 -right-4 text-[10rem] leading-none select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity dark:text-white"
                      style={{ fontWeight: 900 }}
                    >
                      {index + 1}
                    </div>

                    <div className="relative h-full flex flex-col">
                      
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-emerald-600 dark:bg-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Quote className="w-8 h-8 text-white" fill="currentColor" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className={`text-gray-700 dark:text-gray-300 leading-relaxed mb-8 flex-grow ${
                        index === 0 || index === 3 ? 'text-lg lg:text-xl' : 'text-base'
                      }`}>
                        "{testimonial.text}"
                      </p>

                      {/* Project Tag */}
                      <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 rounded-xl text-sm font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          {testimonial.project}
                        </span>
                      </div>

                      {/* Client Info - Horizontal Layout */}
                      <div className="flex items-center gap-4 pt-6 border-t-2 border-black/5 dark:border-gray-700">
                        {/* Avatar Circle */}
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl" style={{ fontWeight: 700 }}>
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Info */}
                        <div>
                          <div className="text-black dark:text-white mb-1" style={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-emerald-600 dark:text-emerald-400">
                            {testimonial.position}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-[2.5rem] p-10 lg:p-14 overflow-hidden">
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 dark:bg-gray-700 rounded-full" />

              <div className="relative grid sm:grid-cols-3 gap-8 lg:gap-12 text-center">
                
                <div>
                  <div className="text-5xl lg:text-6xl text-black dark:text-white mb-2" style={{ fontWeight: 900 }}>
                    5.0
                  </div>
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                    ))}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Average Rating
                  </div>
                </div>

                <div>
                  <div className="text-5xl lg:text-6xl text-black dark:text-white mb-2" style={{ fontWeight: 900 }}>
                    30+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>

                <div>
                  <div className="text-5xl lg:text-6xl text-black dark:text-white mb-2" style={{ fontWeight: 900 }}>
                    100%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}