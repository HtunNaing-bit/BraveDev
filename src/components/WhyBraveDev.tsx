import { motion } from "motion/react";
import { Target, Rocket, Code2, Users, Clock, TrendingUp, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function WhyBraveDev() {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: Code2,
      title: "We Actually Build Things",
      description: "Not just consultants who talk. We're developers who code, ship products, and solve real problems every single day.",
      badge: "Hands-On",
      color: "emerald"
    },
    {
      icon: Target,
      title: "Zero BS Policy",
      description: "No corporate jargon. No endless meetings. Just honest conversations, clear timelines, and software that works.",
      badge: "Honest",
      color: "black"
    },
    {
      icon: Rocket,
      title: "Speed Meets Quality",
      description: "Fast delivery doesn't mean cutting corners. We move quickly because we know what we're doing, not because we're rushing.",
      badge: "Efficient",
      color: "emerald"
    },
    {
      icon: Users,
      title: "You're Part of the Team",
      description: "Direct access to developers. No account managers playing telephone. You talk to the people actually building your product.",
      badge: "Direct",
      color: "black"
    },
    {
      icon: TrendingUp,
      title: "Built to Scale",
      description: "We don't just build for today. Every line of code is written thinking about tomorrow's growth and next year's features.",
      badge: "Future-Proof",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "We're Here When You Need Us",
      description: "Launch day isn't goodbye day. We stick around for support, updates, and whatever challenges come up down the road.",
      badge: "Reliable",
      color: "black"
    },
  ];
  
  return (
    <section id="why" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-[15%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Creative Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 lg:mb-28"
          >
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-px bg-emerald-600 dark:bg-emerald-400" />
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                WHY WORK WITH US
              </span>
            </motion.div>

            {/* Large creative title */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-2"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-black dark:text-white leading-none">
                  Not Your
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-2 ml-8 lg:ml-16"
              >
                <h2 
                  className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none dark:hidden"
                  style={{
                    WebkitTextStroke: '2px #000',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  TYPICAL
                </h2>
                <h2 
                  className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none hidden dark:block"
                  style={{
                    WebkitTextStroke: '2px #fff',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  TYPICAL
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="ml-4 lg:ml-8"
              >
                <h2 
                  className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  Dev Agency
                </h2>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed"
            >
              We're the team you call when you need real developers who actually care about your product, not just another invoice.
            </motion.p>
          </motion.div>

          {/* Reasons Grid - Asymmetric Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-3xl transition-all hover:shadow-xl dark:hover:shadow-emerald-500/10">
                  {/* Floating Badge */}
                  <div 
                    className={`absolute -top-4 -right-4 ${
                      reason.color === 'emerald' ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-black dark:bg-emerald-600'
                    } text-white px-4 py-2 rounded-full text-sm rotate-3 group-hover:rotate-6 transition-transform`}
                    style={{ fontWeight: 700 }}
                  >
                    {reason.badge}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <reason.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight leading-tight" style={{ fontWeight: 700 }}>
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 lg:mt-28 text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                READY TO START?
              </span>
              <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>

            <h3 
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-8"
              style={{
                background: 'linear-gradient(135deg, #000 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900,
              }}
            >
              Let's Build Something Great Together
            </h3>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              No sales pitch. No pressure. Just a real conversation about your project and how we can help.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-black dark:bg-emerald-600 hover:bg-gray-900 dark:hover:bg-emerald-700 text-white rounded-full transition-all group"
              style={{ fontWeight: 700 }}
            >
              <span className="text-lg">Start the Conversation</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
