import { motion } from "motion/react";
import { ArrowRight, BookOpen, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Insight() {
  const { t } = useLanguage();
  
  const articles = [
    {
      id: "ai-automation",
      title: t('insights.articles.ai.title'),
      excerpt: t('insights.articles.ai.excerpt'),
      category: "AI & Automation",
      date: t('insights.articles.ai.date'),
      readTime: "6",
      featured: true,
    },
    {
      id: "ecommerce-platforms",
      title: t('insights.articles.ecommerce.title'),
      excerpt: t('insights.articles.ecommerce.excerpt'),
      category: "E-commerce",
      date: t('insights.articles.ecommerce.date'),
      readTime: "7",
      featured: false,
    },
    {
      id: "pos-systems",
      title: t('insights.articles.pos.title'),
      excerpt: t('insights.articles.pos.excerpt'),
      category: "POS Systems",
      date: t('insights.articles.pos.date'),
      readTime: "5",
      featured: false,
    },
  ];
  
  return (
    <section id="insight" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-[5%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-[10%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-black dark:bg-white rounded-full" />

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
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                {t('insights.label')}
              </span>
            </div>

            <div className="mb-10">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-black dark:text-white mb-4 leading-none">
                Straight Talk
              </h2>
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-4 dark:hidden"
                style={{
                  WebkitTextStroke: '3px #000000',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                NO FLUFF
              </h2>
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-4 hidden dark:block"
                style={{
                  WebkitTextStroke: '3px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                NO FLUFF
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-emerald-600 dark:text-emerald-400 leading-none" style={{ fontWeight: 700 }}>
                Just Real <span className="text-black dark:text-white">Insights</span>
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {t('insights.subtitle')}
            </p>
          </motion.div>

          {/* Featured Article (First Article - Larger) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.a
              href={`#/article/${articles[0].id}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = `/article/${articles[0].id}`;
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group block"
            >
              <div className="relative bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[3rem] p-10 lg:p-16 overflow-hidden transition-all duration-500">
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 dark:from-emerald-400/10 to-transparent rounded-bl-[6rem]" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-2xl" />
                
                {/* Featured badge */}
                <div className="absolute top-8 right-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider" style={{ fontWeight: 600 }}>Featured</span>
                  </div>
                </div>

                <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-8 space-y-6">
                    {/* Category */}
                    <div className="inline-block px-4 py-2 bg-white dark:bg-gray-900 border-2 border-emerald-600/20 dark:border-emerald-700 rounded-xl">
                      <span className="text-sm text-emerald-700 dark:text-emerald-300 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                        {articles[0].category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                      {articles[0].title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                      {articles[0].excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-6 pt-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {articles[0].date}
                      </div>
                      <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {articles[0].readTime} min read
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center lg:justify-end">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ duration: 0.4 }}
                      className="w-24 h-24 lg:w-32 lg:h-32 bg-emerald-600 dark:bg-emerald-500 rounded-2xl flex items-center justify-center"
                    >
                      <ArrowRight className="w-12 h-12 lg:w-16 lg:h-16 text-white" strokeWidth={2} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Two Column Grid for Other Articles */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.a
                  href={`#/article/${article.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = `/article/${article.id}`;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="group block h-full"
                >
                  <div className="relative h-full bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded-[2.5rem] p-10 lg:p-12 overflow-hidden transition-all duration-500">
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-bl-[4rem]" />
                    
                    {/* Number watermark */}
                    <div 
                      className="absolute bottom-8 right-8 text-[8rem] leading-none select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity dark:text-white"
                      style={{ fontWeight: 900 }}
                    >
                      0{index + 2}
                    </div>

                    <div className="relative space-y-6 h-full flex flex-col">
                      {/* Category */}
                      <div className="inline-flex items-start">
                        <div className="px-4 py-2 bg-white dark:bg-gray-900 border-2 border-emerald-600/20 dark:border-emerald-700 rounded-xl">
                          <span className="text-xs text-emerald-700 dark:text-emerald-300 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight flex-grow">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Meta + Arrow */}
                      <div className="flex items-center justify-between pt-4 border-t-2 border-black/5 dark:border-gray-700">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span>{article.date}</span>
                          <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
                          <span>{article.readTime} min</span>
                        </div>
                        
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        >
                          <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 rounded-[2.5rem] p-12 lg:p-16 overflow-hidden text-center">
              
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />

              <div className="relative">
                <TrendingUp className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" strokeWidth={2} />
                
                <h3 className="text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white mb-6">
                  Want More <span className="text-emerald-600 dark:text-emerald-400">Practical Insights?</span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                  Explore our full collection of articles covering everything from AI automation to cloud infrastructure.
                </p>
                
                <motion.a
                  href="#/insight"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '/insight';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-full transition-colors text-lg"
                  style={{ fontWeight: 600 }}
                >
                  View All Articles
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
