import { motion } from "motion/react";
import { 
  Smartphone, ShoppingCart, CreditCard, Store,
  Brain, Workflow, ArrowRight, Database, Globe, Cloud, Sparkles
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      tech: ["React Native", "Flutter", "Swift/Kotlin"],
      featured: true,
    },
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.description'),
      tech: ["React", "Next.js", "Node.js"],
      featured: true,
    },
    {
      icon: Store,
      title: t('services.pos.title'),
      description: t('services.pos.description'),
      tech: ["Cloud POS", "Hardware", "Analytics"],
      featured: false,
    },
    {
      icon: ShoppingCart,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      tech: ["Shopify", "WooCommerce", "Custom"],
      featured: true,
    },
    {
      icon: CreditCard,
      title: t('services.payment.title'),
      description: t('services.payment.description'),
      tech: ["Stripe", "PayPal", "Square"],
      featured: false,
    },
    {
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      tech: ["AWS", "Azure", "Google Cloud"],
      featured: false,
    },
    {
      icon: Database,
      title: t('services.database.title'),
      description: t('services.database.description'),
      tech: ["PostgreSQL", "MongoDB", "Redis"],
      featured: false,
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      tech: ["ML", "APIs", "Automation"],
      featured: true,
    },
    {
      icon: Workflow,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      tech: ["Custom Dev", "APIs", "Integration"],
      featured: false,
    },
  ];
  
  return (
    <section id="services" className="relative py-32 md:py-40 lg:py-48 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Creative background elements */}
      <div className="absolute top-20 right-1/4 w-px h-40 bg-emerald-500/20 dark:bg-emerald-400/20" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-black dark:bg-white rounded-full" />

      {/* Large background text */}
      <div className="absolute top-1/4 left-0 right-0 text-center pointer-events-none select-none">
        <div 
          className="text-[20rem] font-bold opacity-[0.015] dark:opacity-[0.02] leading-none"
          style={{ fontWeight: 900 }}
        >
          09
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Creative Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              
              <div className="lg:col-span-8">
                {/* Small label */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 flex items-center gap-3"
                >
                  <div className="w-12 h-px bg-emerald-500" />
                  <span className="text-xs uppercase tracking-[0.3em] text-emerald-600 font-medium">
                    {t('services.label')}
                  </span>
                </motion.div>

                {/* Creative stacked title */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight mb-4">
                      <span className="text-black dark:text-white">What We</span>
                    </h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="ml-8 lg:ml-16"
                  >
                    <h2 
                      className="text-7xl sm:text-8xl lg:text-9xl xl:text-[11rem] leading-none tracking-tighter dark:hidden"
                      style={{
                        WebkitTextStroke: '2px #000',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 900,
                      }}
                    >
                      BUILD
                    </h2>
                    <h2 
                      className="text-7xl sm:text-8xl lg:text-9xl xl:text-[11rem] leading-none tracking-tighter hidden dark:block"
                      style={{
                        WebkitTextStroke: '2px #fff',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 900,
                      }}
                    >
                      BUILD
                    </h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="ml-4 lg:ml-8"
                  >
                    <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight text-emerald-600">
                      For You
                    </h2>
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute -right-8 top-0 lg:-right-12 hidden sm:block"
                  >
                    <div className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow-xl">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5" strokeWidth={2} />
                        <span className="text-sm font-medium">9 Services</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {t('services.subtitle')}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Creative Asymmetric Grid */}
          <div className="space-y-6 mb-16">
            
            {/* Row 1: Large featured cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative"
                >
                  {/* Large featured card */}
                  <div className="h-full p-10 lg:p-12 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 rounded-3xl transition-all shadow-sm hover:shadow-xl">
                    
                    {/* Number watermark */}
                    <div className="absolute top-6 right-6 text-8xl font-bold text-black/[0.03] dark:text-white/[0.03] leading-none select-none">
                      0{index + 1}
                    </div>

                    {/* Content */}
                    <div className="relative">
                      {/* Icon with glow effect */}
                      <div className="relative w-16 h-16 mb-6">
                        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-2xl blur-xl group-hover:bg-emerald-500/30 dark:group-hover:bg-emerald-400/30 transition-colors" />
                        <div className="relative w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                          <service.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Featured badge */}
                      <div className="inline-block px-3 py-1 bg-black dark:bg-emerald-600 text-white rounded-lg mb-4">
                        <span className="text-xs font-medium uppercase tracking-wider">Featured</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl text-black dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-black/5 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Arrow indicator */}
                      <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-8 h-8 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2: 3 column grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {services.slice(2, 5).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 rounded-2xl transition-all">
                    {/* Icon */}
                    <div className="w-14 h-14 mb-6 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                      <service.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl text-black dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-700 border border-black/5 dark:border-gray-600 rounded-lg text-xs text-gray-600 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 3: 2 large + 2 stacked */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.slice(5).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 rounded-2xl transition-all">
                    {/* Icon */}
                    <div className="w-14 h-14 mb-6 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                      <service.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl text-black dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-700 border border-black/5 dark:border-gray-600 rounded-lg text-xs text-gray-600 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section with creative layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-black/5 dark:border-gray-700/50"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl lg:text-5xl text-black dark:text-white mb-4 leading-tight">
                  Don't see what you need?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  We build custom solutions tailored to your unique requirements.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '/contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-2xl font-medium overflow-hidden shadow-xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Let's Talk Custom Solutions</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}