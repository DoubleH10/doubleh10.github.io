import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { MapPin, Calendar } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  location: string;
  period: string;
  metric: string;
  highlights: string[];
  index: number;
}

const ExperienceItem = ({
  company,
  role,
  location,
  period,
  metric,
  highlights,
  index,
}: ExperienceItemProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-accent border-2 border-background" />

      <div className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {role}
            </h3>
            <p className="text-foreground/80 font-medium">{company}</p>
          </div>
          <span className="inline-flex items-center rounded-lg bg-accent/10 px-3 py-1 text-xs font-mono font-medium text-accent-foreground whitespace-nowrap">
            {metric}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {period}
          </span>
        </div>

        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="text-sm text-muted-foreground flex items-start"
            >
              <span className="text-accent mr-2 mt-0.5 shrink-0">-</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
