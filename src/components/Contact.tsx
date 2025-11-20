import { motion } from "motion/react";
import { Mail, MapPin, Send, MessageSquare, Sparkles, Coffee } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };
  
  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-[10%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-black dark:bg-white rounded-full" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Creative Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 lg:mb-32"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white dark:bg-gray-800 border-2 border-emerald-600 dark:border-emerald-400 rounded-full">
              <Coffee className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                {t('contact.getInTouch')}
              </span>
            </div>

            <div className="mb-10">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-black dark:text-white mb-4 leading-none">
                Let's Have a
              </h2>
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-4 dark:hidden"
                style={{
                  WebkitTextStroke: '3px #000000',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                REAL TALK
              </h2>
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-4 hidden dark:block"
                style={{
                  WebkitTextStroke: '3px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                REAL TALK
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-emerald-600 dark:text-emerald-400 leading-none" style={{ fontWeight: 700 }}>
                About Your <span className="text-black dark:text-white">Project</span>
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-10 mb-20">
            
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="relative bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-[3rem] p-10 lg:p-14 overflow-hidden">
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 dark:from-emerald-400/10 to-transparent rounded-bl-[6rem]" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-2xl" />

                <div className="relative">
                  <h3 className="text-3xl lg:text-4xl text-black dark:text-white mb-3">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                    {t('contact.description')}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2" style={{ fontWeight: 600 }}>
                          {t('contact.form.name')} *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-black/10 dark:border-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 rounded-2xl text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2" style={{ fontWeight: 600 }}>
                          {t('contact.form.email')} *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-black/10 dark:border-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 rounded-2xl text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Company & Project Type Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2" style={{ fontWeight: 600 }}>
                          {t('contact.form.company')}
                        </label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-black/10 dark:border-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 rounded-2xl text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2" style={{ fontWeight: 600 }}>
                          Project Type
                        </label>
                        <select className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-black/10 dark:border-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 rounded-2xl text-black dark:text-white transition-all outline-none">
                          <option>Web Development</option>
                          <option>Mobile App</option>
                          <option>POS System</option>
                          <option>E-commerce</option>
                          <option>AI & Automation</option>
                          <option>Custom Software</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2" style={{ fontWeight: 600 }}>
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        required
                        rows={6}
                        className="w-full px-5 py-4 bg-white dark:bg-gray-900 border-2 border-black/10 dark:border-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 rounded-2xl text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none resize-none"
                        placeholder="Tell us about your project, timeline, budget, or any questions you have..."
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-emerald-600 dark:bg-emerald-500 text-white rounded-2xl hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-600/20 dark:shadow-emerald-500/20 disabled:opacity-50 text-lg"
                      style={{ fontWeight: 600 }}
                    >
                      <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.send')}</span>
                      <Send className="w-5 h-5" strokeWidth={2} />
                    </motion.button>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      We'll get back to you within 24 hours. Promise.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact Cards */}
              {[
                {
                  icon: Mail,
                  label: t('contact.info.email'),
                  value: t('contact.info.emailValue'),
                  action: "mailto:hello@bravedev.io",
                  color: "emerald",
                  clickable: true
                },
                {
                  icon: MessageSquare,
                  label: t('contact.info.chat'),
                  value: t('contact.info.chatValue'),
                  action: null,
                  color: "emerald",
                  clickable: false
                },
                {
                  icon: MapPin,
                  label: t('contact.info.location'),
                  value: t('contact.info.locationValue'),
                  action: null,
                  color: "black",
                  clickable: false
                },
              ].map((item, i) => {
                const cardContent = (
                  <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[2rem] p-8 overflow-hidden transition-all duration-500">
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-bl-[2rem]" />
                    
                    <div className="relative flex items-start gap-4">
                      <div className="w-14 h-14 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2" style={{ fontWeight: 600 }}>
                          {item.label}
                        </div>
                        <div className="text-lg text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" style={{ fontWeight: 600 }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </div>
                );

                return item.clickable ? (
                  <motion.a
                    key={item.label}
                    href={item.action!}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group block cursor-pointer"
                  >
                    {cardContent}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="group"
                  >
                    {cardContent}
                  </motion.div>
                );
              })}

              {/* Not Ready Yet Card */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-[2rem] p-8 overflow-hidden">
                  
                  {/* Decorative background */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full" />
                  
                  <div className="relative space-y-4">
                    <div className="w-12 h-12 bg-black dark:bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    
                    <h4 className="text-xl text-black dark:text-white" style={{ fontWeight: 700 }}>
                      {t('contact.cta.title')}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t('contact.cta.subtitle')}
                    </p>
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