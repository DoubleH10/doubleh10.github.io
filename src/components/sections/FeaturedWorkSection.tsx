import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { featuredProjects } from "@/data/content";
import { ArrowRight } from "lucide-react";

const FeaturedWorkSection = () => {
  return (
    <section id="work" className="py-28 px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader
          label="Proof of Work"
          title="Featured projects"
          subtitle="Not descriptions — evidence. Architecture decisions, quantitative results, and live systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-[#D4D2CC] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="p-8">
                <span className="block font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-3">
                  {project.type}
                </span>

                <h3 className="font-display text-2xl font-normal leading-[1.3] mb-3">
                  {project.title}
                </h3>

                <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="font-mono text-[0.75rem] font-medium bg-success/10 text-success px-2.5 py-1 rounded"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.7rem] bg-muted text-muted-foreground px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex gap-4 pt-5 border-t border-border">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[0.82rem] font-medium text-accent inline-flex items-center gap-1.5 hover:text-foreground transition-colors group/link"
                      >
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
