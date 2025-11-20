import { motion } from "motion/react";
import { Code2, Users2, Trophy, Sparkles } from "lucide-react";

export function Challenges() {
  const features = [
    {
      icon: Code2,
      tag: "Technical Excellence",
      title: "Clean Code, Powerful Results",
      description:
        "We write maintainable, scalable code that stands the test of time. Every project follows industry best practices, comprehensive testing, and thorough documentation.",
      highlights: ["Modern Architecture", "Secure & Tested", "Future-Proof"],
    },
    {
      icon: Users2,
      tag: "Partnership",
      title: "Your Success Is Our Mission",
      description:
        "We're not just developers—we're your technical partners. From initial concept to post-launch support, we're committed to your long-term growth and success.",
      highlights: ["Collaborative Process", "Transparent Communication", "Ongoing Support"],
    },
    {
      icon: Trophy,
      tag: "Results Driven",
      title: "Deliver Value, Not Just Code",
      description:
        "Every feature we build serves a purpose. We focus on creating software that solves real business problems, increases efficiency, and drives measurable outcomes.",
      highlights: ["ROI Focused", "User-Centric Design", "Data-Driven Decisions"],
    },
  ];

  const FirstIcon = features[0].icon;
  const SecondIcon = features[1].icon;
  const ThirdIcon = features[2].icon;

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-12 w-32 h-32 border-4 border-emerald-500/20 dark:border-emerald-400/20 rounded-full" />
      <div className="absolute bottom-40 right-16 w-24 h-24 bg-black/5 dark:bg-white/5 rounded-2xl rotate-12" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1500px] mx-auto">
        
          {/* Creative Header - Centered with Large Typography */}
          <div className="text-center mb-20 lg:mb-32 max-w-5xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm uppercase tracking-[0.2em]" style={{ fontWeight: 600 }}>
                  What Makes Us Different
                </span>
              </div>

              {/* Massive Title with Creative Typography */}
              <h2 className="mb-8">
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-400 dark:text-gray-500 mb-2">
                  We Don't Just
                </span>
                <span 
                  className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter dark:hidden"
                  style={{
                    WebkitTextStroke: '2px #000000',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  BUILD SOFTWARE
                </span>
                <span 
                  className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter hidden dark:block"
                  style={{
                    WebkitTextStroke: '2px #ffffff',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  BUILD SOFTWARE
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-emerald-600 dark:text-emerald-400 mt-4" style={{ fontWeight: 700 }}>
                  We Build Partnerships
                </span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Our commitment goes beyond delivering code. We create lasting relationships built on trust, excellence, and mutual success.
              </p>
            </motion.div>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* First Card - Spans 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[3rem] p-10 lg:p-14 overflow-hidden transition-all duration-500">
                  
                  {/* Decorative circles */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-full" />

                  <div className="relative h-full flex flex-col justify-between">
                    
                    {/* Icon & Tag */}
                    <div>
                      <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 rounded-full">
                        <FirstIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm text-emerald-600 dark:text-emerald-400 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                          {features[0].tag}
                        </span>
                      </div>

                      <h3 className="text-4xl lg:text-5xl xl:text-6xl text-black dark:text-white mb-6 leading-tight">
                        {features[0].title}
                      </h3>

                      <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                        {features[0].description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      {features[0].highlights.map((highlight, idx) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 px-4 py-3 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 rounded-2xl"
                        >
                          <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Second Card - Spans 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[3rem] p-10 lg:p-12 overflow-hidden transition-all duration-500">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-bl-[5rem]" />

                  <div className="relative h-full flex flex-col justify-between">
                    
                    {/* Icon & Tag */}
                    <div>
                      <div className="w-20 h-20 bg-emerald-600 dark:bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <SecondIcon className="w-10 h-10 text-white" />
                      </div>

                      <div className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4" style={{ fontWeight: 600 }}>
                        {features[1].tag}
                      </div>

                      <h3 className="text-3xl lg:text-4xl text-black dark:text-white mb-5 leading-tight">
                        {features[1].title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                        {features[1].description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {features[1].highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Third Card - Spans full width */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-12"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="relative bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-[3rem] p-10 lg:p-14 overflow-hidden">
                  
                  {/* Large background text */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] lg:text-[16rem] leading-none select-none pointer-events-none opacity-[0.02] dark:text-white"
                    style={{ fontWeight: 900 }}
                  >
                    03
                  </div>

                  <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left: Icon */}
                    <div className="lg:col-span-3">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 blur-2xl rounded-full" />
                        <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[2.5rem] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <ThirdIcon className="w-16 h-16 lg:w-20 lg:h-20 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Middle: Content */}
                    <div className="lg:col-span-6">
                      <div className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-3" style={{ fontWeight: 600 }}>
                        {features[2].tag}
                      </div>
                      <h3 className="text-4xl lg:text-5xl text-black dark:text-white mb-5 leading-tight">
                        {features[2].title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {features[2].description}
                      </p>
                    </div>

                    {/* Right: Highlights */}
                    <div className="lg:col-span-3 space-y-3">
                      {features[2].highlights.map((highlight, idx) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="px-5 py-3 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 rounded-2xl"
                        >
                          <span className="text-emerald-700 dark:text-emerald-300 font-semibold">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}