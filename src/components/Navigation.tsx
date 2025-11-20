import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";
import { useDarkMode } from "../contexts/DarkModeContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.services'), href: "#services", page: "/services" },
    { label: t('nav.about'), href: "#about", page: "/about" },
    { label: t('nav.why'), href: "#why", page: "/why" },
    { label: t('nav.insights'), href: "#insight", page: "/insight" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // If we're on home page, scroll to section
    if (window.location.hash === '' || window.location.hash === '#/') {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to dedicated page
      window.location.hash = item.page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
        {/* Enhanced Navigation Container */}
        <div className={`relative transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-2xl shadow-black/10 rounded-3xl border border-black/5 dark:border-gray-700/50"
            : "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg shadow-black/5 rounded-3xl border border-black/5 dark:border-gray-700/50"
        }`}>
          
          {/* Animated gradient border on scroll */}
          <motion.div 
            className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
            animate={{ 
              opacity: isScrolled ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
            }}
          />
          
          <div className="relative flex items-center justify-between px-6 lg:px-10 py-4 lg:py-5">
            
            {/* LOGO with enhanced hover */}
            <motion.a
              href="#/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 relative z-10"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '/';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              <Logo />
            </motion.a>

            {/* DESKTOP NAVIGATION - CENTERED with premium styling */}
            <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={(e) => handleNavClick(e, item)}
                  whileHover={{ y: -2 }}
                  className="group relative px-5 py-2.5 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 cursor-pointer rounded-xl"
                  style={{ fontWeight: 500 }}
                >
                  {/* Hover background */}
                  <motion.div 
                    className="absolute inset-0 bg-emerald-50/0 dark:bg-emerald-900/0 group-hover:bg-emerald-50/80 dark:group-hover:bg-emerald-900/30 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Bottom indicator */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full group-hover:w-3/4 transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>

            {/* RIGHT SIDE - Enhanced CTA */}
            <div className="hidden lg:flex items-center gap-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '/contact';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-full transition-all duration-300 cursor-pointer overflow-hidden shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30"
                style={{ fontWeight: 600 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  {t('nav.contact')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              {/* Dark Mode Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-black/10 dark:border-gray-700 hover:border-emerald-500/50 bg-white dark:bg-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                ) : (
                  <Sun className="w-5 h-5 text-emerald-600" strokeWidth={2} />
                )}
              </motion.button>
            </div>

            {/* MOBILE MENU BUTTON - Enhanced */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 dark:bg-emerald-500 border-2 border-gray-700 dark:border-emerald-500' 
                    : 'bg-white dark:bg-gray-700 border-2 border-black/10 dark:border-gray-600 hover:border-emerald-500/50'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Moon className="w-6 h-6 text-white dark:text-white" strokeWidth={2} />
                ) : (
                  <Sun className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'bg-emerald-500 border-2 border-emerald-500' 
                    : 'bg-white dark:bg-gray-700 border-2 border-black/10 dark:border-gray-600 hover:border-emerald-500/50'
                }`}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-white" strokeWidth={2} />
                  ) : (
                    <Menu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU - Enhanced Design */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden overflow-hidden"
        >
          <motion.div
            initial={false}
            animate={{ y: isMobileMenuOpen ? 0 : -20 }}
            className="mt-4 p-6 sm:p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 border-black/5 dark:border-gray-700/50 rounded-3xl shadow-2xl"
          >
            {/* Mobile Nav Items */}
            <div className="space-y-2 mb-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: isMobileMenuOpen ? 0.05 * i : 0, duration: 0.3 }}
                  onClick={(e) => handleNavClick(e, item)}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-4 text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-50/50 rounded-2xl transition-all group cursor-pointer border border-transparent hover:border-emerald-500/10"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex items-center gap-3 font-medium">
                      <motion.span 
                        className="w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full group-hover:w-6 transition-all duration-300"
                      />
                      {item.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Decorative divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-8" />

            {/* Mobile CTA - Enhanced */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: isMobileMenuOpen ? 0.2 : 0, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '/contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="group relative block w-full px-8 py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white text-center rounded-2xl transition-all cursor-pointer overflow-hidden shadow-lg shadow-emerald-500/25"
              style={{ fontWeight: 600 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t('nav.contact')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}