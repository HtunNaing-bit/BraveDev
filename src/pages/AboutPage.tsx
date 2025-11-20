import { motion } from "motion/react";
import { ArrowLeft, Target, Users, Award, Zap, Sparkles, TrendingUp, Heart, Shield } from "lucide-react";
import { About } from "../components/About";
import { WhyBraveDev } from "../components/WhyBraveDev";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our priority. We listen, understand, and deliver solutions that meet your needs.",
      badge: "100% Commitment"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as partners with our clients, maintaining transparent communication throughout.",
      badge: "Team First"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We're committed to delivering high-quality, reliable software that stands the test of time.",
      badge: "Zero Compromise"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and best practices to deliver cutting-edge solutions.",
      badge: "Always Evolving"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-40 right-[15%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] left-[10%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
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
                  WHO WE ARE
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
                    Building
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
                    SOFTWARE
                  </h1>
                  <h1 
                    className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none hidden dark:block"
                    style={{
                      WebkitTextStroke: '2px #fff',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 900,
                    }}
                  >
                    SOFTWARE
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
                    Excellence
                  </h1>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mt-12 leading-relaxed"
              >
                We're a professional software development team dedicated to creating innovative solutions that help businesses grow and succeed.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <About />

      {/* Why BraveDev */}
      <WhyBraveDev />

      {/* Our Values */}
      <section className="py-20 lg:py-32 relative bg-white dark:bg-gray-900">
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
                    OUR CORE VALUES
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
                  PRINCIPLES
                </h2>
                <h2 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 hidden dark:block"
                  style={{
                    WebkitTextStroke: '2px #fff',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  PRINCIPLES
                </h2>
                
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  The values that guide everything we do and every decision we make.
                </p>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-3xl transition-all hover:shadow-xl dark:hover:shadow-emerald-500/10"
                >
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 bg-black dark:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm rotate-3 group-hover:rotate-6 transition-transform" style={{ fontWeight: 700 }}>
                    {value.badge}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900 border-t-2 border-black/5 dark:border-gray-800 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                  OUR JOURNEY
                </span>
              </div>

              <h2 
                className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight mb-8"
                style={{
                  background: 'linear-gradient(135deg, #000 0%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                The BraveDev Story
              </h2>

              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  BraveDev was founded with a simple mission: to provide professional software development 
                  services that help businesses transform their ideas into reality. What started as a small 
                  team of passionate developers has grown into a full-service development team.
                </p>
                <p>
                  Over the years, we've worked with clients across various industries, delivering mobile apps, 
                  web platforms, POS systems, and custom software solutions. Each project has taught us valuable 
                  lessons and helped us refine our approach to software development.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses looking to leverage technology 
                  for growth. Our team continues to evolve, embracing new technologies and methodologies 
                  to deliver the best possible solutions for our clients.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}