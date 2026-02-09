import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { writings } from "@/data/content";
import { ArrowRight } from "lucide-react";

const WritingSection = () => {
  return (
    <section id="writing" className="py-28 px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader
          label="Technical Writing"
          title="How I think"
          subtitle="Architecture decisions, tradeoffs, and lessons from building in production."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col"
        >
          {writings.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-8 py-6 ${
                index < writings.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <span className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-tertiary pt-0.5">
                {item.type}
              </span>
              <div>
                <h3 className="text-base font-medium text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <p className="font-mono text-[0.72rem] text-tertiary mt-2">
                  {item.meta}
                </p>
                {"href" in item && item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.82rem] font-medium text-accent inline-flex items-center gap-1.5 hover:text-foreground transition-colors mt-2 group/link"
                  >
                    Read the paper
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WritingSection;
