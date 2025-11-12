import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, highlights, tags, link }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card hover:bg-card/80 transition-all duration-300 border-border hover:border-primary/50 glow-border">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-gradient transition-colors">
            {title}
          </h3>
          {link && (
            <button
              onClick={() => window.open(link, "_blank")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </button>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
