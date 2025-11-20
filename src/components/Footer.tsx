import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, ArrowRight, Zap } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  const links = {
    services: [
      { label: t('footer.whatWeDo'), href: "#/services" },
      { label: t('footer.portfolio'), href: "#/portfolio" },
      { label: t('footer.ourTeam'), href: "#/team" },
    ],
    company: [
      { label: t('footer.whoWeAre'), href: "#/about" },
      { label: t('footer.whyBraveDev'), href: "#/why" },
      { label: t('footer.insights'), href: "#/insight" },
      { label: t('footer.contact'), href: "#/contact" },
    ],
    legal: [
      { label: t('footer.privacy'), href: "#/privacy-policy" },
      { label: t('footer.terms'), href: "#/terms-of-service" },
      { label: t('footer.cookies'), href: "#/cookie-policy" },
    ],
  };

  const socials = [
    { icon: Github, href: "https://github.com/bravedev", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/bravedev", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/bravedev", label: "LinkedIn" },
    { icon: Mail, href: "#/contact", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href.replace('#', '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t-2 border-black/10 dark:border-gray-700/50 overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-[5%] w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="mb-8">
                  <Logo variant="footer" />
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-md text-lg">
                  {t('footer.description')}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl border-2 border-black/10 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 flex items-center justify-center group transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" strokeWidth={2} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm text-black dark:text-white uppercase tracking-wider mb-6" style={{ fontWeight: 700 }}>
                    {t('footer.services')}
                  </h4>
                  <ul className="space-y-4">
                    {links.services.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-0 group-hover:w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full transition-all" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-sm text-black dark:text-white uppercase tracking-wider mb-6" style={{ fontWeight: 700 }}>
                    {t('footer.company')}
                  </h4>
                  <ul className="space-y-4">
                    {links.company.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-0 group-hover:w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full transition-all" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-sm text-black dark:text-white uppercase tracking-wider mb-6" style={{ fontWeight: 700 }}>
                    {t('footer.legal')}
                  </h4>
                  <ul className="space-y-4">
                    {links.legal.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-0 group-hover:w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full transition-all" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t-2 border-black/5 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400"
            >
              © {new Date().getFullYear()} <span style={{ fontWeight: 600 }}>BraveDev</span>. {t('footer.copyright')}
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-emerald-600 hover:bg-gray-900 dark:hover:bg-emerald-700 text-white rounded-xl transition-colors"
              style={{ fontWeight: 600 }}
            >
              <span className="text-sm">{t('footer.backToTop')}</span>
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-white" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}