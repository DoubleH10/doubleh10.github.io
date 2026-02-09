import { motion } from "framer-motion";
import { fadeUp, heroStagger } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-background dot-pattern"
    >
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-7xl sm:text-8xl md:text-9xl font-bold text-foreground tracking-tighter mb-4"
        >
          Hadi Hijazi
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground tracking-tight mb-8"
        >
          <span className="text-accent font-bold">AI</span> Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I build intelligent systems that think, learn, and ship. From
          fine-tuned LLMs to multi-agent orchestration — I turn AI research
          into products that drive measurable outcomes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold px-8 h-12 text-base"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("/Hadi_Hijazi_CV.pdf", "_blank")}
            className="font-heading font-semibold px-8 h-12 text-base border-border hover:border-accent/50"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-20"
        >
          <motion.button
            onClick={() => scrollToSection("metrics")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground/50 hover:text-accent transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
