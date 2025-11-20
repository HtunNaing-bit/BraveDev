import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { WhyBraveDev } from "../components/WhyBraveDev";
import { Challenges } from "../components/Challenges";

export function WhyBraveDevPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-40 right-[12%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[700px] left-[8%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
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
                  WHY CHOOSE US
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
                    What Makes
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
                    BRAVEDEV
                  </h1>
                  <h1 
                    className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter leading-none select-none hidden dark:block"
                    style={{
                      WebkitTextStroke: '2px #fff',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 900,
                    }}
                  >
                    BRAVEDEV
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
                    Different
                  </h1>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mt-12 leading-relaxed"
              >
                Discover what makes us different and why businesses trust us to deliver exceptional software solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BraveDev Content */}
      <WhyBraveDev />

      {/* Challenges Section */}
      <Challenges />
    </div>
  );
}