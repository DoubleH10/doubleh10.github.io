import { motion } from "framer-motion";
import { fadeUp, heroStagger, viewportConfig } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { socialLinks } from "@/data/content";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 px-6 bg-accent">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block font-mono text-sm font-medium tracking-wider uppercase mb-4 text-accent-foreground/70"
        >
          Get in Touch
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground tracking-tight mb-6"
        >
          Let's build something intelligent.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg text-accent-foreground/70 mb-12 max-w-xl mx-auto"
        >
          Open to full-time roles, consulting, and research collaborations in AI/ML engineering.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => window.open(`mailto:${socialLinks.email}`)}
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-heading font-semibold px-8 h-12 text-base"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open(socialLinks.linkedin, "_blank")
            }
            className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-heading font-semibold px-8 h-12 text-base"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open(socialLinks.github, "_blank")
            }
            className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-heading font-semibold px-8 h-12 text-base"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open("/Hadi_Hijazi_CV.pdf", "_blank")}
            className="text-accent-foreground/60 hover:text-accent-foreground hover:bg-accent-foreground/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
