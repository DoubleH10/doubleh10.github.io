import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ label, title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="inline-block font-mono text-sm text-accent font-medium tracking-wider uppercase mb-4"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
