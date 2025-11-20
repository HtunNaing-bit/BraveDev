import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Minimal decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-px h-20 bg-emerald-500/30 dark:bg-emerald-400/30" />

      <div className="container mx-auto px-6 lg:px-16 py-32 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Main Creative Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Creative Typography Stack */}
            <div className="lg:col-span-7 relative">
              
              {/* Small intro text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="w-12 h-px bg-emerald-600" />
                <span className="text-sm uppercase tracking-[0.25em] text-emerald-600" style={{ fontWeight: 600 }}>
                  Professional Software Development
                </span>
              </motion.div>

              {/* Creative stacked typography */}
              <div className="relative mb-12">
                
                {/* Line 1: "Building" - Medium, Black */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-2"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-black dark:text-white leading-none">
                    Building
                  </h1>
                </motion.div>

                {/* Line 2: "Digital" - Large Outlined */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-2 ml-8 lg:ml-12"
                >
                  <h1 
                    className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none"
                    style={{
                      WebkitTextStroke: '2px currentColor',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 900,
                      color: 'rgb(0, 0, 0)',
                    }}
                  >
                    <span className="dark:hidden">Digital</span>
                    <span className="hidden dark:inline" style={{ WebkitTextStroke: '2px rgb(255, 255, 255)' }}>Digital</span>
                  </h1>
                </motion.div>

                {/* Line 3: "Excellence" - Emerald Green, slightly smaller */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mb-2 ml-4 lg:ml-6"
                >
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-emerald-600 leading-none">
                    Excellence
                  </h1>
                </motion.div>

                {/* Floating "BRAVE" badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                  animate={{ opacity: 1, scale: 1, rotate: -12 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -right-4 top-1/3 lg:-right-12 lg:top-1/4"
                >
                  <div className="relative">
                    <div className="px-8 py-4 bg-black text-white rounded-2xl shadow-2xl">
                      <div className="text-2xl lg:text-3xl font-bold tracking-wider">
                        BRAVE
                      </div>
                      <div className="text-xs tracking-[0.3em] opacity-80 text-center mt-1">
                        DEV
                      </div>
                    </div>
                    {/* Small accent dot */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full" />
                  </div>
                </motion.div>
              </div>

              {/* Subtitle with creative layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="ml-8 lg:ml-12 mb-12 max-w-xl"
              >
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-wrap gap-4 ml-8 lg:ml-12"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '/contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white rounded-2xl font-medium overflow-hidden shadow-xl shadow-emerald-600/25"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">{t('hero.cta1')}</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </motion.a>
                
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black/10 dark:border-gray-700 hover:border-black/20 dark:hover:border-gray-600 rounded-2xl font-medium transition-all shadow-sm"
                >
                  <span>{t('hero.cta2')}</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Creative Stats/Info Panel */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative"
              >
                {/* Main card with artistic layout */}
                <div className="relative">
                  
                  {/* Top floating number card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="absolute -top-8 -left-8 z-20"
                  >
                    <div className="px-6 py-4 bg-emerald-600 text-white rounded-2xl shadow-xl">
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-xs opacity-90 uppercase tracking-wider">Projects</div>
                    </div>
                  </motion.div>

                  {/* Main content card */}
                  <div className="relative p-10 lg:p-12 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-[2rem] shadow-lg transition-colors duration-300">
                    
                    {/* Large number background */}
                    <div className="absolute top-4 right-4 text-[12rem] font-bold text-black/[0.02] dark:text-white/[0.02] leading-none select-none pointer-events-none">
                      #1
                    </div>

                    {/* Content */}
                    <div className="relative space-y-8">
                      
                      {/* Feature 1 */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="text-xl font-medium text-black dark:text-white mb-1">
                              {t('hero.quality1')}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Senior developers with 8+ years experience
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-gray-700 to-transparent" />

                      {/* Stats row */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                      >
                        <div>
                          <div className="text-4xl font-bold text-black dark:text-white mb-2">30+</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">Happy Clients</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">10+</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">Team Members</div>
                        </div>
                      </motion.div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-gray-700 to-transparent" />

                      {/* Bottom feature */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 0.6 }}
                      >
                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          Trusted by startups and enterprises to build scalable, high-performance software solutions.
                        </div>
                      </motion.div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-emerald-500/20 rounded-br-[2rem]" />
                  </div>

                  {/* Bottom right floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="absolute -bottom-6 -right-6 z-20"
                  >
                    <div className="px-5 py-3 bg-black text-white rounded-xl shadow-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Available Now</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom ticker/marquee style text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-32 pt-12 border-t border-black/5 dark:border-gray-700/50"
          >
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-12 whitespace-nowrap"
              >
                {[
                  "Mobile Apps", "Web Development", "POS Systems", "E-commerce", 
                  "AI & Automation", "Cloud Solutions", "Custom Software", "Payment Integration",
                  "Mobile Apps", "Web Development", "POS Systems", "E-commerce"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-12">
                    <span className="text-2xl lg:text-3xl font-medium text-black/20 dark:text-white/20">
                      {item}
                    </span>
                    <div className="w-2 h-2 bg-emerald-500/30 dark:bg-emerald-400/30 rounded-full" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}