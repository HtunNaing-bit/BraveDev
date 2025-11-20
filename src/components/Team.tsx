import { motion } from "motion/react";
import { Code2, Palette, Database, Cloud, Smartphone, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Team() {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      name: t('team.members.sarah.name'),
      role: t('team.members.sarah.role'),
      icon: Code2,
      specialties: ["React", "Node.js", "TypeScript"],
      experience: "10+ years",
      bio: t('team.members.sarah.bio'),
      accent: "emerald",
    },
    {
      name: t('team.members.michael.name'),
      role: t('team.members.michael.role'),
      icon: Smartphone,
      specialties: ["React Native", "Flutter", "iOS"],
      experience: "8+ years",
      bio: t('team.members.michael.bio'),
      accent: "black",
    },
    {
      name: t('team.members.emily.name'),
      role: t('team.members.emily.role'),
      icon: Cloud,
      specialties: ["AWS", "Azure", "DevOps"],
      experience: "7+ years",
      bio: t('team.members.emily.bio'),
      accent: "emerald",
    },
    {
      name: t('team.members.david.name'),
      role: t('team.members.david.role'),
      icon: Palette,
      specialties: ["Figma", "Design Systems", "UX"],
      experience: "6+ years",
      bio: t('team.members.david.bio'),
      accent: "black",
    },
    {
      name: t('team.members.lisa.name'),
      role: t('team.members.lisa.role'),
      icon: Database,
      specialties: ["PostgreSQL", "MongoDB", "APIs"],
      experience: "8+ years",
      bio: t('team.members.lisa.bio'),
      accent: "emerald",
    },
    {
      name: t('team.members.james.name'),
      role: t('team.members.james.role'),
      icon: Globe,
      specialties: ["Machine Learning", "Python", "AI"],
      experience: "5+ years",
      bio: t('team.members.james.bio'),
      accent: "black",
    },
  ];
  
  return (
    <section id="team" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-px h-24 bg-emerald-500/20 dark:bg-emerald-400/20" />
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Bold Creative Header */}
          <div className="mb-24 lg:mb-32 relative">
            
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-16 h-px bg-emerald-600" />
              <span className="text-sm uppercase tracking-[0.25em] text-emerald-600" style={{ fontWeight: 600 }}>
                {t('team.label')}
              </span>
            </motion.div>

            {/* Stacked creative title */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-3"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black dark:text-white leading-none tracking-tight">
                  The Minds
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="ml-8 lg:ml-16"
              >
                <h2 
                  className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] leading-none tracking-tighter select-none dark:hidden"
                  style={{
                    WebkitTextStroke: '2px #000',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  BEHIND
                </h2>
                <h2 
                  className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] leading-none tracking-tighter select-none hidden dark:block"
                  style={{
                    WebkitTextStroke: '2px #fff',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  BEHIND
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="ml-4 lg:ml-8 mb-8"
              >
                <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-emerald-600 leading-none tracking-tight">
                  The Code
                </h2>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute top-0 right-0 lg:right-12 xl:right-24"
              >
                <div className="px-6 py-3 bg-black dark:bg-emerald-600 text-white rounded-2xl shadow-xl">
                  <div className="text-xs uppercase tracking-wider">Expert Team</div>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl ml-4 lg:ml-8"
              >
                {t('team.subtitle')}
              </motion.p>
            </div>
          </div>

          {/* Staggered Cards Grid with Rotation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  y: -12, 
                  rotate: index % 2 === 0 ? 2 : -2,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`relative h-full p-8 lg:p-10 rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                  member.accent === 'emerald' 
                    ? 'bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-100 dark:border-emerald-700 hover:border-emerald-600 dark:hover:border-emerald-400' 
                    : 'bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}>
                  
                  {/* Large Icon Background */}
                  <div className="absolute -bottom-8 -right-8 opacity-5">
                    <member.icon className="w-48 h-48" strokeWidth={1} />
                  </div>

                  {/* Top Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.3 }}
                    className="mb-6"
                  >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${
                      member.accent === 'emerald' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-black text-white'
                    }`}>
                      <member.icon className="w-4 h-4" strokeWidth={2} />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {member.experience}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    
                    {/* Name */}
                    <div>
                      <h3 className={`text-2xl lg:text-3xl xl:text-4xl mb-2 transition-colors duration-300 ${
                        member.accent === 'emerald'
                          ? 'text-black dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400'
                          : 'text-black dark:text-white'
                      }`}>
                        {member.name}
                      </h3>
                      <p className={`text-xs uppercase tracking-[0.2em] font-bold ${
                        member.accent === 'emerald' 
                          ? 'text-emerald-700 dark:text-emerald-400' 
                          : 'text-gray-700 dark:text-gray-400'
                      }`}>
                        {member.role}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className={`h-px ${
                      member.accent === 'emerald' 
                        ? 'bg-emerald-200 dark:bg-emerald-700' 
                        : 'bg-gray-200 dark:bg-gray-600'
                    }`} />

                    {/* Bio */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Divider */}
                    <div className={`h-px ${
                      member.accent === 'emerald' 
                        ? 'bg-emerald-200 dark:bg-emerald-700' 
                        : 'bg-gray-200 dark:bg-gray-600'
                    }`} />

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                            member.accent === 'emerald'
                              ? 'bg-white dark:bg-emerald-800 text-emerald-700 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-600'
                              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Large Icon Circle */}
                    <div className="pt-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        member.accent === 'emerald'
                          ? 'bg-emerald-600 group-hover:bg-emerald-700 group-hover:scale-110'
                          : 'bg-black group-hover:bg-gray-900 group-hover:scale-110'
                      }`}>
                        <member.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}