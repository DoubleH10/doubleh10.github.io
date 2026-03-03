import { motion } from "framer-motion";
import { fadeUp, heroStagger, viewportConfig } from "@/lib/animations";
import { socialLinks } from "@/data/content";

const ContactSection = () => {
  return (
    <section id="contact" className="pb-24 px-8">
      <div className="max-w-content mx-auto">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="border-t border-border pt-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-[2.4rem] font-normal leading-[1.2] text-foreground mb-4"
          >
            Let's talk.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[0.95rem] text-muted-foreground max-w-[480px] mb-8"
          >
            Open to AI/ML engineering roles in Paris.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-[0.85rem] font-medium text-background bg-foreground px-5 py-2.5 rounded-md hover:bg-accent hover:text-white transition-colors"
            >
              {socialLinks.email}
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-medium text-foreground px-5 py-2.5 border border-border rounded-md hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-medium text-foreground px-5 py-2.5 border border-border rounded-md hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              GitHub
            </a>
            <a
              href="/Hadi_Hijazi_CV_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-medium text-foreground px-5 py-2.5 border border-border rounded-md hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
