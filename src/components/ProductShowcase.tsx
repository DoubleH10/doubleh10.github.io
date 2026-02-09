import { motion } from "framer-motion";
import { slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProductShowcaseProps {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Deployed" | "Live";
  link: string;
  index: number;
}

const ProductShowcase = ({
  name,
  tagline,
  description,
  tags,
  status,
  link,
  index,
}: ProductShowcaseProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={isEven ? slideInLeft : slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="group"
    >
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 items-center`}
      >
        {/* Mock browser frame */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl border border-border bg-card overflow-hidden group-hover:border-accent/30 group-hover:shadow-xl group-hover:shadow-accent/5 transition-all duration-500">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono truncate">
                  {link.replace("https://", "")}
                </div>
              </div>
            </div>
            {/* Placeholder content area */}
            <div className="aspect-video bg-gradient-to-br from-secondary to-background flex items-center justify-center dot-pattern-subtle">
              <div className="text-center">
                <span className="font-heading text-2xl font-bold text-foreground/20">
                  {name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
              {name}
            </h3>
            <Badge className="bg-accent/15 text-accent-foreground border-accent/20 text-xs font-mono">
              {status}
            </Badge>
          </div>
          <p className="font-heading text-lg text-muted-foreground">{tagline}</p>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-mono text-xs border-border hover:border-accent/50 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors pt-2"
          >
            Visit Site <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductShowcase;
