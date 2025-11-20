import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle, Sparkles } from "lucide-react";
import { Contact } from "../components/Contact";

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hello@bravedev.io",
      link: "mailto:hello@bravedev.io",
      badge: "Quick"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      badge: "Direct"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "San Francisco, CA",
      link: null,
      badge: "Visit Us"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri, 9AM-6PM PST",
      link: null,
      badge: "Available"
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A simple mobile app might take 2-3 months, while a complex enterprise solution could take 6-12 months. We provide detailed timelines during initial consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your software continues to run smoothly after launch. This includes bug fixes, updates, and feature enhancements."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Next.js, React Native, Flutter, Node.js, PostgreSQL, MongoDB, AWS, and more. We choose the best tech stack for each project's specific needs."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication through regular updates, sprint reviews, and project management tools. You'll have direct access to the team and clear visibility into project progress."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-40 right-[10%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] left-[12%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
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
                <div className="w-12 h-px bg-emerald-600" />
                <span className="text-sm uppercase tracking-[0.25em] text-emerald-600" style={{ fontWeight: 600 }}>
                  GET IN TOUCH
                </span>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-2"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-black leading-none dark:text-white">
                    Let's Have a
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
                    REAL TALK
                  </h1>
                  <h1 
                    className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none hidden dark:block"
                    style={{
                      WebkitTextStroke: '2px #fff',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 900,
                    }}
                  >
                    REAL TALK
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
                    About Your Project
                  </h1>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl lg:text-2xl text-gray-600 max-w-2xl mt-12 leading-relaxed dark:text-gray-400"
              >
                Have a project in mind? We'd love to hear from you. Let's discuss how we can help bring your ideas to life.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 lg:p-8 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-3xl text-center transition-all hover:shadow-xl dark:hover:shadow-emerald-500/10"
                >
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-emerald-600 dark:bg-emerald-500 text-white px-3 py-1 rounded-full text-xs rotate-3 group-hover:rotate-6 transition-transform" style={{ fontWeight: 700 }}>
                    {item.badge}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-black dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" style={{ fontWeight: 600 }}
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-black dark:text-white" style={{ fontWeight: 600 }}>{item.info}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900 border-t-2 border-black/5 dark:border-gray-800 relative">
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
                  <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                    COMMON QUESTIONS
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
                  FAQ
                </h2>
                <h2 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-6 hidden dark:block"
                  style={{
                    WebkitTextStroke: '2px #fff',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  FAQ
                </h2>
                
                <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed dark:text-gray-400">
                  Quick answers to questions you may have about working with us.
                </p>
              </motion.div>
            </div>

            {/* FAQ Grid */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 lg:p-10 bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-3xl transition-all hover:shadow-lg dark:hover:shadow-emerald-500/10">
                  <h3 className="text-xl lg:text-2xl text-black dark:text-white mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                    {faq.question}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}