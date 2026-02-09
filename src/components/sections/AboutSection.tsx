import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Layers, Rocket, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI & Deep Learning",
    description: "Fine-tuning LLMs, RAG pipelines, and reasoning systems",
  },
  {
    icon: Layers,
    title: "Agentic Architectures",
    description: "Multi-agent orchestration with LangGraph & Gemini ADK",
  },
  {
    icon: Rocket,
    title: "Product Engineering",
    description: "End-to-end deployment from prototype to production",
  },
  {
    icon: Globe,
    title: "Business Strategy",
    description: "Dual expertise bridging technical execution and business impact",
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
              MSc graduate from{" "}
              <span className="text-foreground font-medium">
                ESSEC & CentraleSupelec
              </span>{" "}
              specializing in Deep Learning, Generative AI, and MLOps. Research
              focus on Agentic AI for MBSE using Neo4j, Gemini, and SysML v2.
            </p>
            <p>
              Created{" "}
              <span className="text-foreground font-medium">BLOQ AI</span>, a
              personal research sandbox for prototyping multi-agent systems, RAG
              pipelines, and fine-tuning experiments across finance, hospitality,
              and creative domains.
            </p>
            <p>
              Currently building enterprise-grade AI copilots at{" "}
              <span className="text-foreground font-medium">
                Tata Consultancy Services
              </span>
              , integrating LLMs with knowledge graphs and ERP systems.
              Passionate about deploying trustworthy AI that augments
              decision-making and transforms enterprise operations.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-sm">
                <span className="text-foreground font-medium">Languages:</span>{" "}
                English & French (fluent), Arabic (native), Spanish
                (intermediate)
              </p>
              <p className="text-sm">
                <span className="text-foreground font-medium">Interests:</span>{" "}
                Calisthenics, Muay Thai, Guitar, Strategic Reading
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
