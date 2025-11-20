import { motion } from "motion/react";
import { Star, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      number: "01",
      title: t('portfolio.projects.retail.title'),
      category: t('portfolio.projects.retail.category'),
      image: "https://images.unsplash.com/photo-1556741533-2c7e140cd038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoaWVyJTIwcGF5bWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NjM1ODMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2024",
      size: "large", // large project card
    },
    {
      id: 2,
      number: "02",
      title: t('portfolio.projects.ecommerce.title'),
      category: t('portfolio.projects.ecommerce.category'),
      image: "https://images.unsplash.com/photo-1688561807403-ba262590f86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjM1ODM0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2024",
      size: "medium",
    },
    {
      id: 3,
      number: "03",
      title: t('portfolio.projects.health.title'),
      category: t('portfolio.projects.health.category'),
      image: "https://images.unsplash.com/photo-1663153206213-d45285ce3fe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBzbWFydHBob25lJTIwYXBwfGVufDF8fHx8MTc2MzQ5MjQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2023",
      size: "medium",
    },
    {
      id: 4,
      number: "04",
      title: t('portfolio.projects.finance.title'),
      category: t('portfolio.projects.finance.category'),
      image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGRhdGF8ZW58MXx8fHwxNzYzNTQ0MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2023",
      size: "large",
    },
    {
      id: 5,
      number: "05",
      title: t('portfolio.projects.logistics.title'),
      category: t('portfolio.projects.logistics.category'),
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2MzU4MzM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2022",
      size: "medium",
    },
    {
      id: 6,
      number: "06",
      title: t('portfolio.projects.restaurant.title'),
      category: t('portfolio.projects.restaurant.category'),
      image: "https://images.unsplash.com/photo-1609951734391-b79a50460c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGFibGV0JTIwbWVudXxlbnwxfHx8fDE3NjM1ODMzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2022",
      size: "medium",
    },
  ];
  
  return (
    <section id="portfolio" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">

      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        
        {/* HEADER */}
        <div className="mb-16 lg:mb-24 relative z-20">
          
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="#059669" />
              <span className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Portfolio</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter uppercase mb-4 dark:hidden"
              style={{ 
                fontWeight: 900,
                background: 'linear-gradient(135deg, #000 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured
            </h2>
            <h2 
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter uppercase mb-4 hidden dark:block"
              style={{ 
                fontWeight: 900,
                background: 'linear-gradient(135deg, #fff 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured
            </h2>
            <div className="flex items-center gap-6">
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter uppercase dark:hidden"
                style={{ 
                  fontWeight: 900,
                  WebkitTextStroke: '2px #000',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Projects
              </h2>
              <h2 
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter uppercase hidden dark:block"
                style={{ 
                  fontWeight: 900,
                  WebkitTextStroke: '2px #fff',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Projects
              </h2>
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden lg:block w-20 h-20 rounded-full bg-emerald-600 dark:bg-emerald-500 flex-shrink-0"
              >
                <div className="w-full h-full rounded-full border-4 border-dashed border-white flex items-center justify-center">
                  <span className="text-white text-xs" style={{ fontWeight: 900 }}>06</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl"
          >
            {t('portfolio.subtitle')}
          </motion.p>

        </div>

        {/* BENTO BOX GRID - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 mb-20">
          
          {/* Project 1 - Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-7 row-span-2"
          >
            <ProjectCard project={projects[0]} featured />
          </motion.div>

          {/* Project 2 - Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-5"
          >
            <ProjectCard project={projects[1]} />
          </motion.div>

          {/* Project 3 - Middle Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-5"
          >
            <ProjectCard project={projects[2]} />
          </motion.div>

          {/* Project 4 - Large Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-6 row-span-2"
          >
            <ProjectCard project={projects[3]} featured />
          </motion.div>

          {/* Project 5 - Bottom Right Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-6"
          >
            <ProjectCard project={projects[4]} />
          </motion.div>

          {/* Project 6 - Bottom Right Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-6"
          >
            <ProjectCard project={projects[5]} />
          </motion.div>

        </div>

        {/* MOBILE GRID */}
        <div className="lg:hidden grid grid-cols-1 gap-6 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} featured={index === 0 || index === 3} />
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative z-20 pt-12 lg:pt-20"
        >
          
          <h3 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-none tracking-tighter uppercase dark:hidden"
            style={{ 
              fontWeight: 900,
              WebkitTextStroke: '2px #000',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Build
          </h3>
          <h3 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-none tracking-tighter uppercase hidden dark:block"
            style={{ 
              fontWeight: 900,
              WebkitTextStroke: '2px #fff',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Build
          </h3>
          <h3 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-none tracking-tighter uppercase"
            style={{ 
              fontWeight: 900,
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(16, 185, 129, 0.3)',
            }}
          >
            Something Great?
          </h3>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '/contact';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-black dark:bg-emerald-600 text-white rounded-full text-lg shadow-2xl hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all group"
          >
            <span style={{ fontWeight: 900 }}>START YOUR PROJECT</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}

// Project Card Component
function ProjectCard({ project, featured = false }: { project: any; featured?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full rounded-3xl overflow-hidden bg-black cursor-pointer"
      style={{ minHeight: featured ? '600px' : '350px' }}
    >
      
      {/* Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="flex items-start justify-between">
          {/* Number Badge */}
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-emerald-600 flex items-center justify-center shadow-xl"
          >
            <span className="text-white text-xl lg:text-2xl" style={{ fontWeight: 900 }}>
              {project.number}
            </span>
          </motion.div>

          {/* Arrow Icon */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 4, y: -4 }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowUpRight className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          
          {/* Category & Year */}
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 rounded-full bg-emerald-600/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider">
              {project.category}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 
            className={`text-white leading-tight tracking-tight ${
              featured ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl'
            }`}
            style={{ fontWeight: 900 }}
          >
            {project.title}
          </h3>

        </div>

      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-emerald-600 transition-colors duration-300 rounded-3xl pointer-events-none" />

    </motion.div>
  );
}