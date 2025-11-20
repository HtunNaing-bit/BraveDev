import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const isFooter = variant === "footer";
  
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Simple Elegant Wordmark Only Design */}
      <div className="flex flex-col">
        <div className={`${isFooter ? 'text-4xl' : 'text-3xl'} leading-none tracking-tight`}>
          <span 
            className="text-emerald-600"
            style={{ 
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            Brave
          </span>
          <span 
            className="text-black dark:text-white"
            style={{ 
              fontWeight: 300,
              letterSpacing: '-0.02em'
            }}
          >
            Dev
          </span>
        </div>
        {isFooter && (
          <div 
            className="text-emerald-600 tracking-wider mt-1" 
            style={{ 
              fontWeight: 500,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            Software Development Studio
          </div>
        )}
      </div>
    </motion.div>
  );
}