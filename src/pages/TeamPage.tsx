import { motion } from "motion/react";
import { ArrowLeft, Users, Lightbulb, Target, Sparkles, Heart, Zap, Award } from "lucide-react";
import { Team } from "../components/Team";

export function TeamPage() {
  const culture = [
    {
      icon: Users,
      title: "Collaboration First",
      description: "We work together as a unified team, sharing knowledge and supporting each other.",
      badge: "Teamwork"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "We embrace new technologies and modern development practices to stay ahead.",
      badge: "Creative"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "We're committed to delivering high-quality, reliable software every time.",
      badge: "Excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-40 right-[10%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[700px] left-[15%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-16 py-24 relative z-50">
        <button
          type="button"
          onClick={() => {
            window.location.hash = '/';
          }}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group cursor-pointer bg-transparent border-none"
          style={{ fontWeight: 600, padding: '8px 0', margin: 0 }}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Creative Typography */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="w-12 h-px bg-emerald-600 dark:bg-emerald-400" />
                <span className="text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                  MEET THE TEAM
                </span>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-2"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-black dark:text-white leading-none">
                    The People
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-2 ml-8 lg:ml-16"
                >
                  <h1 
                    className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none dark:hidden"
                    style={{
                      WebkitTextStroke: '2px #000',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 900,
                    }}
                  >
                    BEHIND
                  </h1>
                  <h1 
                    className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none hidden dark:block"
                    style={{
                      WebkitTextStroke: '2px #fff',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 900,
                    }}
                  >
                    BEHIND
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="ml-4 lg:ml-8"
                >
                  <h1 
                    className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 900,
                    }}
                  >
                    BraveDev
                  </h1>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mt-12 leading-relaxed"
              >
                Our talented team of developers, designers, and project managers work together to deliver exceptional software solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Content */}
      <Team />

      {/* Culture Section */}
      <section className="py-20 lg:py-32 relative bg-white dark:bg-gray-900 border-t-2 border-black/5 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Section Header */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                    HOW WE WORK
                  </span>
                </div>
                
                <h2 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 dark:hidden"
                  style={{
                    WebkitTextStroke: '2px #000',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  CULTURE
                </h2>
                <h2 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 hidden dark:block"
                  style={{
                    WebkitTextStroke: '2px #fff',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  CULTURE
                </h2>
                
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  We believe in collaboration, continuous learning, and delivering excellence in everything we do.
                </p>
              </motion.div>
            </div>

            {/* Culture Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-3xl transition-all hover:shadow-xl dark:hover:shadow-emerald-500/10 text-center"
                >
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm rotate-3 group-hover:rotate-6 transition-transform" style={{ fontWeight: 700 }}>
                    {item.badge}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900 border-t-2 border-black/5 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight mb-8"
              style={{
                background: 'linear-gradient(135deg, #000 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900,
              }}
            >
              Join Our Growing Team
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              We're always looking for talented individuals who are passionate about building great software.
            </p>

            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-black dark:bg-emerald-600 hover:bg-gray-900 dark:hover:bg-emerald-700 text-white rounded-full transition-all group"
              style={{ fontWeight: 700 }}
            >
              <span className="text-lg">Get In Touch</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}