import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className="text-sm px-4 py-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
    >
      {name}
    </Badge>
  );
};

export default TechBadge;
