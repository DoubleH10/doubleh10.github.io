import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 lg:py-40 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Education"
          title="Credentials"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={fadeUp}
              className="bg-background rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <GraduationCap className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                {edu.degree}
              </h3>
              <p className="text-foreground/80 font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-sm text-muted-foreground font-mono mb-3">
                {edu.period}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
