import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  github?: string;
  index: number;
}

const ProjectCard = ({ title, description, highlights, tags, github, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="bg-card rounded-xl border border-border p-6 h-full flex flex-col hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors shrink-0 ml-3"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>

        <ul className="space-y-2 mb-5 flex-1">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start">
              <span className="text-accent mr-2 mt-0.5 shrink-0">-</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
