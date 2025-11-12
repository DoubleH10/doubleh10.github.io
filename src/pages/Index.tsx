import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { Mail, Linkedin, Github } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "BLOQ Core",
      description: "Agentic Infrastructure",
      highlights: [
        "Built multi-agent orchestration using LangGraph + FastAPI",
        "Integrated Supabase, Clerk, and Langfuse observability",
        "Designed modular BaseAgent template for production workflows",
      ],
      tags: ["LangGraph", "FastAPI", "Supabase", "Python"],
    },
    {
      title: "Airbus MBSE Copilot",
      description: "TCS Project",
      highlights: [
        "Developed Gemini-powered Copilot for systems engineering",
        "Implemented structured SysML-to-text reasoning pipeline",
        "Enhanced traceability across model artifacts",
      ],
      tags: ["Gemini SDK", "Python", "SysML"],
    },
    {
      title: "Fikrah Analytics",
      description: "Financial Compliance AI",
      highlights: [
        "Hybrid rule-based + LLM scoring system",
        "Explainable dashboards with Supabase + Python",
        "Reduced manual compliance review time by 60%",
      ],
      tags: ["Python", "Supabase", "LLM"],
    },
    {
      title: "OsmoseIQ",
      description: "Hospitality Intelligence",
      highlights: [
        "Built Next.js + Supabase frontend with dynamic LLM assistant",
        "Deployed via Coolify with real-time telemetry",
        "AI-driven location and pricing optimization",
      ],
      tags: ["Next.js", "Supabase", "AI"],
    },
    {
      title: "Algofait",
      description: "IoT-AI Integration",
      highlights: [
        "Integrated AI reasoning with blockchain traceability",
        "Adaptive control for water quality predictions",
        "IoT sensor integration and monitoring",
      ],
      tags: ["IoT", "AI", "Blockchain"],
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
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-8 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
            AI Engineer • Available January 2026
          </Badge>

          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tight">
            Hadi Hijazi
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building intelligent systems at the intersection of research and real-world engineering
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/hadihijazi", "_blank")}
              className="hover:text-accent transition-colors h-10 w-10"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://linkedin.com/in/hadihijazi", "_blank")}
              className="hover:text-accent transition-colors h-10 w-10"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("mailto:hadi.hijazi@example.com")}
              className="hover:text-accent transition-colors h-10 w-10"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-foreground hover:bg-foreground/90 text-background"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
            About
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
            Projects
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Building intelligent systems that bridge research-grade thinking with production
            environments
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Tech Stack Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I build modular AI systems that merge deterministic logic with large-scale reasoning
            models
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm px-4 py-2 border-border hover:border-accent hover:text-accent transition-all cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Open to AI Engineer / ML Engineer roles starting January 2026
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => window.open("mailto:hadi.hijazi@example.com")}
              className="bg-foreground hover:bg-foreground/90 text-background"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://linkedin.com/in/hadihijazi", "_blank")}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://github.com/hadihijazi", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 Hadi Hijazi
        </div>
      </footer>
    </div>
  );
};

export default Index;
