import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { skills } from "@/data/content";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-8">
      <div className="max-w-content mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-tertiary mb-8"
        >
          Technical Skills
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={fadeUp}>
              <h3 className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-tertiary mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[0.72rem] bg-muted text-muted-foreground px-2.5 py-1 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
