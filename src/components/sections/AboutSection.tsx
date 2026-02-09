import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Layers, Rocket, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "ML Engineering",
    description: "Fine-tuning (QLoRA), evaluation pipelines, RAG systems",
  },
  {
    icon: Layers,
    title: "Agent Systems",
    description: "LangGraph, Google ADK, DSPy, MCP, tool integration",
  },
  {
    icon: Rocket,
    title: "Full-Stack Deploy",
    description: "FastAPI, React, Docker, CI/CD — prototype to production",
  },
  {
    icon: Globe,
    title: "Observability",
    description: "Langfuse, Arize Phoenix — scoring, monitoring, refinement",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 px-6 bg-background dot-pattern">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="About"
          title="Building at the Intersection"
          subtitle="AI research meets product engineering"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              AI Engineer with production experience building LLM agent systems,
              fine-tuning (QLoRA), and evaluation pipelines (DSPy, Arize Phoenix).
              Hands-on with agent orchestration (LangGraph, Google ADK), RAG
              pipelines, and full-stack deployment (FastAPI, React).
            </p>
            <p>
              MSc from{" "}
              <span className="text-foreground font-medium">
                ESSEC-CentraleSupélec
              </span>{" "}
              (QS #3). Built production AI systems at{" "}
              <span className="text-foreground font-medium">
                Tata Consultancy Services
              </span>{" "}
              and led AI operations at{" "}
              <span className="text-foreground font-medium">
                BLOQ Group
              </span>
              , delivering paid client projects across finance, hospitality, and
              enterprise domains.
            </p>
            <p>
              Seeking AI/ML engineering roles to deepen production experience at
              scale. Quadrilingual: English, French, Arabic, Spanish.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-sm">
                <span className="text-foreground font-medium">Languages:</span>{" "}
                English & French (fluent), Arabic (native), Spanish
                (intermediate)
              </p>
              <p className="text-sm">
                <span className="text-foreground font-medium">Interests:</span>{" "}
                Calisthenics, Guitar, Strategic Reading
              </p>
            </div>
          </motion.div>

          {/* Capability cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 gap-4"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="bg-card rounded-xl border border-border p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <cap.icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                  {cap.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
