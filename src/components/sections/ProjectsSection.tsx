import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { projects } from "@/data/content";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Research & Experiments"
          subtitle="Research experiments, fine-tuning pipelines, and agentic systems"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-background rounded-xl border border-border p-6 h-full flex flex-col hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors shrink-0 ml-3"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="text-accent mr-2 mt-0.5 shrink-0">
                        -
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
