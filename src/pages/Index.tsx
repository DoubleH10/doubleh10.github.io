import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";
import { Mail, Linkedin, Github, FileDown, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const projects = [
    {
      title: "BLOQ Core — Agentic Infrastructure",
      description: "Multi-agent orchestration framework for production LLM workflows",
      highlights: [
        "Built multi-agent orchestration using LangGraph + FastAPI",
        "Integrated Supabase, Clerk, and Langfuse observability",
        "Designed modular BaseAgent template for production workflows",
      ],
      tags: ["LangGraph", "FastAPI", "Supabase", "Python", "Langfuse"],
    },
    {
      title: "Airbus MBSE Copilot (TCS)",
      description: "Gemini-powered Copilot for systems engineering models",
      highlights: [
        "Developed AI assistant for MBSE workflows",
        "Implemented structured SysML-to-text reasoning pipeline",
        "Enhanced traceability across model artifacts",
      ],
      tags: ["Gemini SDK", "Python", "SysML", "AI Reasoning"],
    },
    {
      title: "Fikrah Analytics — Financial Compliance AI",
      description: "Automated SME credit risk analysis system",
      highlights: [
        "Hybrid rule-based + LLM scoring system",
        "Explainable dashboards with Supabase + Python",
        "Reduced manual compliance review time by 60%",
      ],
      tags: ["Python", "Supabase", "LLM", "Financial AI"],
    },
    {
      title: "OsmoseIQ — Hospitality Intelligence",
      description: "Geo-optimized revenue management using AI location reasoning",
      highlights: [
        "Built Next.js + Supabase frontend with dynamic LLM assistant",
        "Deployed via Coolify with real-time telemetry",
        "AI-driven location and pricing optimization",
      ],
      tags: ["Next.js", "Supabase", "AI", "Coolify"],
    },
    {
      title: "Algofait — IoT-AI Integration",
      description: "Smart aquaculture MVP with blockchain traceability",
      highlights: [
        "Integrated AI reasoning with blockchain",
        "Adaptive control for water quality & feeding predictions",
        "IoT sensor integration and monitoring",
      ],
      tags: ["IoT", "AI", "Blockchain", "Python"],
    },
  ];

  const techStack = [
    "Python",
    "FastAPI",
    "LangGraph",
    "Gemini SDK",
    "Supabase",
    "Next.js",
    "Tailwind",
    "Langfuse",
    "Coolify",
    "OpenTelemetry",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            I design intelligent systems
            <br />
            <span className="text-gradient">that think and act.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            AI Engineer specialized in agentic architectures, reasoning pipelines, and multimodal
            automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-delay">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => window.open("#", "_blank")}
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <p className="text-sm text-muted-foreground animate-fade-in-delay">
            MSc Data Science & Business Analytics, ESSEC–CentraleSupélec (Graduating Dec 2025)
          </p>

          <button
            onClick={() => scrollToSection("projects")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building intelligent systems that bridge research-grade thinking with production
              environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I build modular AI systems that merge deterministic logic with large-scale reasoning
              models — from ingestion to orchestration to monitoring.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {techStack.map((tech, index) => (
              <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                <TechBadge name={tech} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center md:text-left animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                About <span className="text-gradient">Me</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an AI Engineer focused on building reasoning systems that automate
                  decision-making and enhance human workflows.
                </p>
                <p>
                  Currently completing an MSc in Data Science & Business Analytics at
                  ESSEC–CentraleSupélec while working with Tata Consultancy Services on
                  Gemini-based Copilots for enterprise use cases.
                </p>
                <p>
                  My work bridges LLM infrastructure, system design, and applied machine
                  intelligence — bringing research-grade thinking into production environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Let's Build the Next <span className="text-gradient">Intelligent System</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Open to AI Engineer / ML Engineer roles starting January 2026.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => window.open("mailto:hadi.hijazi@example.com")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open("https://linkedin.com/in/hadihijazi", "_blank")}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open("https://github.com/hadihijazi", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 Hadi Hijazi — Built with Lovable
        </div>
      </footer>
    </div>
  );
};

export default Index;
