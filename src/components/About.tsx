import { motion } from "motion/react";
import { Code2, Lightbulb, Heart, Rocket, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Subtle decorative elements */}
      <div className="absolute top-32 right-[10%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Bold Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 lg:mb-32"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white dark:bg-gray-800 border-2 border-emerald-600 dark:border-emerald-400 rounded-full">
              <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                {t('about.label')}
              </span>
            </div>

            <div className="mb-10">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black dark:text-white mb-4 leading-none">
                We Build
              </h2>
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-4 dark:hidden"
                style={{
                  WebkitTextStroke: '3px #000000',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                SOFTWARE
              </h2>
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-4 hidden dark:block"
                style={{
                  WebkitTextStroke: '3px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                SOFTWARE
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-emerald-600 dark:text-emerald-400 leading-none" style={{ fontWeight: 700 }}>
                That <span className="text-black dark:text-white">MATTERS</span>
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[2.5rem] p-10 lg:p-12 overflow-hidden transition-all duration-500">
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500/10 dark:from-emerald-400/10 to-transparent rounded-bl-[4rem]" />
                  
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Lightbulb className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl lg:text-4xl text-black dark:text-white">
                        {t('about.story.title')}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t('about.story.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* What Drives Us */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500">
                  
                  {/* Background decoration */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full" />
                  
                  <div className="relative space-y-6 h-full flex flex-col">
                    <div className="w-14 h-14 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Rocket className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl text-black dark:text-white">
                      {t('about.mission.title')}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                      {t('about.mission.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-8 mb-20">
            
            {/* How We Work */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[2.5rem] p-10 lg:p-12 overflow-hidden transition-all duration-500">
                  
                  {/* Decorative element */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-black/5 dark:bg-white/5 rounded-br-[3rem]" />
                  
                  <div className="relative space-y-6 h-full flex flex-col">
                    <div className="w-14 h-14 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Heart className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl text-black dark:text-white">
                      {t('about.approach.title')}
                    </h3>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                      {t('about.approach.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* What We Believe */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[2.5rem] p-10 lg:p-12 overflow-hidden transition-all duration-500">
                  
                  {/* Large background text */}
                  <div 
                    className="absolute -bottom-4 -right-8 text-[10rem] leading-none select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity dark:text-white"
                    style={{ fontWeight: 900 }}
                  >
                    ✓
                  </div>
                  
                  <div className="relative space-y-8">
                    <h3 className="text-3xl lg:text-4xl text-black dark:text-white mb-8">
                      {t('about.principles.title')}
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { text: t('about.principles.quality'), icon: CheckCircle },
                        { text: t('about.principles.clarity'), icon: CheckCircle },
                        { text: t('about.principles.partnership'), icon: CheckCircle },
                        { text: t('about.principles.ownership'), icon: CheckCircle },
                      ].map((principle, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <principle.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {principle.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-[2.5rem] p-12 lg:p-16 overflow-hidden text-center">
              
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white mb-6">
                  Ready to Work With a Team That{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">Actually Cares?</span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
                  Let's have a real conversation about your project. No sales pitch, no commitments—just honest advice.
                </p>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-full transition-colors text-lg"
                  style={{ fontWeight: 600 }}
                >
                  Let's Talk
                  <Rocket className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
