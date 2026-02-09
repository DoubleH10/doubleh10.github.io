import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleUp, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/data/content";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 px-6 bg-background dot-pattern">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Tools"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={fadeUp}>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                {category}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="flex flex-wrap gap-2"
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={scaleUp}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground hover:border-accent/50 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
