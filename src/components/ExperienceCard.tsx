import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  index: number;
}

const ExperienceCard = ({ company, role, location, period, highlights, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="p-6 border border-border hover:border-accent/50 transition-all duration-300">
        <div className="flex items-start gap-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.15, type: "spring", stiffness: 200 }}
            className="mt-1"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-accent" />
            </div>
          </motion.div>

          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {role}
            </h3>
            <p className="text-foreground/90 font-medium mb-2">{company}</p>
            
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
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="text-sm text-muted-foreground flex items-start"
                >
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
