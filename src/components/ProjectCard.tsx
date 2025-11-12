import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, highlights, tags }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border border-border p-8">
      <div className="mb-4">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <ul className="space-y-2 mb-6">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-sm text-muted-foreground flex items-start">
            <span className="text-accent mr-2 mt-0.5">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-xs font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
