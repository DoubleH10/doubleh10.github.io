import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  index: number;
}

const ProjectCard = ({ title, description, highlights, tags, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
      >
        <Card className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border border-border p-8 h-full">
          <div className="mb-4">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>

          <ul className="space-y-2 mb-6">
            {highlights.map((highlight, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="text-sm text-muted-foreground flex items-start"
              >
                <span className="text-accent mr-2 mt-0.5">•</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.05 }}
              >
                <Badge variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
