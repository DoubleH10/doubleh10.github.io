import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/data/content";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader label="Experience" title="Where I've built" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-8 ${
                index < experiences.length - 1
                  ? "border-b border-border"
                  : ""
              } ${index === 0 ? "pt-0" : ""}`}
            >
              <div className="font-mono text-[0.78rem] text-tertiary pt-0.5">
                {exp.period}
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-0.5">
                  {exp.role}
                </h3>
                <p className="text-[0.88rem] text-muted-foreground mb-3">
                  {exp.company}
                </p>
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[0.88rem] text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1 before:h-1 before:rounded-full before:bg-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
