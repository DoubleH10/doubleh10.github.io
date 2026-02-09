import { motion } from "framer-motion";
import { fadeUp, heroStagger } from "@/lib/animations";
import { socialLinks } from "@/data/content";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-16 px-8">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="max-w-content mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="block font-mono text-[0.75rem] tracking-[0.12em] uppercase text-accent mb-5"
        >
          AI Engineer · Paris
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(2.8rem,5vw,4rem)] font-normal leading-[1.15] text-foreground mb-6 max-w-[700px]"
        >
          I build agent systems that enterprises{" "}
          <em className="italic text-accent">actually trust</em> in production.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[1.05rem] leading-[1.7] text-muted-foreground max-w-[560px] mb-8"
        >
          Production experience with LLM agent systems, fine-tuning (QLoRA), and
          evaluation pipelines (DSPy, Arize Phoenix). MSc from
          ESSEC–CentraleSupélec. Currently building vertical AI systems for
          finance and hospitality.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex items-center gap-6 flex-wrap"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.85rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.85rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-[0.85rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="/Hadi_Hijazi_CV_Safe.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.85rem] font-medium text-accent border-b border-accent pb-px hover:text-foreground hover:border-foreground transition-colors inline-flex items-center gap-1.5"
          >
            Download CV <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 pt-8 border-t border-border flex gap-12 flex-wrap"
        >
          <div className="text-[0.82rem]">
            <strong className="block font-mono text-[0.78rem] font-medium text-foreground mb-0.5">
              Currently
            </strong>
            <span className="text-muted-foreground">AI Engineer & Tech Lead at BLOQ AI</span>
          </div>
          <div className="text-[0.82rem]">
            <strong className="block font-mono text-[0.78rem] font-medium text-foreground mb-0.5">
              Education
            </strong>
            <span className="text-muted-foreground">ESSEC–CentraleSupélec (QS #3)</span>
          </div>
          <div className="text-[0.82rem]">
            <strong className="block font-mono text-[0.78rem] font-medium text-foreground mb-0.5">
              Languages
            </strong>
            <span className="text-muted-foreground">EN · FR · AR · ES</span>
          </div>
          <div className="text-[0.82rem]">
            <strong className="block font-mono text-[0.78rem] font-medium text-foreground mb-0.5">
              Open to
            </strong>
            <span className="text-muted-foreground">AI/ML Engineering roles</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
