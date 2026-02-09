import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ label, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-12">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-tertiary mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="font-display text-3xl sm:text-4xl md:text-[2.4rem] font-normal leading-[1.2] text-foreground mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-[0.95rem] text-muted-foreground max-w-[520px] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
