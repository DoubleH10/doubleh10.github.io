import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";
import { motion } from "framer-motion";
const Index = () => {
  const experiences = [{
    company: "Tata Consultancy Services (TCS)",
    role: "AI Engineer Intern",
    location: "Paris, France",
    period: "Jul 2025 – Dec 2025",
    highlights: ["Built enterprise-grade AI copilots integrating LLMs with Neo4j knowledge graphs & ERP data", "Developed SAP S/4HANA mapping agent; reconciliation time reduced by 70%", "Implemented MBSE copilots using Gemini 2.0 Flash for requirement extraction", "Proposed 4+ Proof of Concepts for knowledge graphs & agentic context engineering"]
  }, {
    company: "BLOQ AI (Independent R&D)",
    role: "Applied AI Engineer & System Architect",
    location: "Remote / Paris",
    period: "Aug 2023 – Present",
    highlights: ["Financial Intelligence: hybrid LLM + rule model for SME compliance & liquidity scoring", "Hospitality Dashboard: predictive analytics optimizing GEO ranking & dynamic pricing", "Agent Frameworks: LangGraph + FastAPI modules with Supabase + Langfuse", "Mentored junior engineers on ADK/LangGraph architecture"]
  }, {
    company: "Ekimetrics",
    role: "Data Scientist Intern",
    location: "Paris, France",
    period: "Jun 2024 – Sep 2024",
    highlights: ["Enhanced Bayesian Marketing Mix Modeling; ROI forecast accuracy +15%", "Automated ETL pipelines on Databricks & Azure; compute time reduced by 40%", "Designed unsupervised segmentation across 10+ multi-market datasets"]
  }, {
    company: "Infovista",
    role: "Financial Data Analyst Intern",
    location: "Massy, France",
    period: "Jul 2022 – Sep 2022",
    highlights: ["Automated Power BI reporting dashboards; reporting cycle time reduced by 50%", "Built RFM analytics for budget optimization across 4 subsidiaries"]
  }];
  const projects = [{
    title: "Fine-Tuned Mistral-7B",
    description: "QLoRA + Hugging Face",
    highlights: ["Fine-tuned Mistral-7B-Instruct v0.3 on hospitality datasets", "Built Colab pipeline with BitsAndBytes + TRL SFTTrainer", "Evaluated on sentiment & FAQ tasks with domain-adapted LoRA adapter"],
    tags: ["PyTorch", "Hugging Face", "QLoRA", "Fine-tuning"]
  }, {
    title: "Agentic Orchestration (Voyager-Inspired)",
    description: "Multi-Agent System",
    highlights: ["LangGraph + Gemini ADK multi-agent layer", "Planner-executor-critic loops & tool coordination", "Demonstrated emergent collaboration for automation"],
    tags: ["LangGraph", "Gemini ADK", "Multi-Agent"]
  }, {
    title: "AI Content Agent",
    description: "Integrator Extra",
    highlights: ["Automated commercial video generation with n8n + Fal AI + Heygen", "Manual production time reduced by 80%", "End-to-end automation pipeline"],
    tags: ["n8n", "Fal AI", "Heygen", "Automation"]
  }, {
    title: "Resume Scanner & Interview Agent",
    description: "Recruitment AI",
    highlights: ["TF-IDF + BERT ranking for CV scoring", "FastAPI + Streamlit interface", "Automated question generation"],
    tags: ["BERT", "FastAPI", "Streamlit", "NLP"]
  }, {
    title: "RAG Research Assistant",
    description: "Knowledge Retrieval",
    highlights: ["LangChain + ChromaDB retrieval pipeline", "Confidence weighting system", "Answer accuracy improved by +25%"],
    tags: ["LangChain", "ChromaDB", "RAG"]
  }, {
    title: "Domain-Specific AI Platforms",
    description: "OsmoseIQ, Fikrah Analytics, FitFlow AI",
    highlights: ["End-to-end LangGraph / Supabase stacks", "Hospitality, FinTech, and Fitness domains", "Production-ready automation systems"],
    tags: ["LangGraph", "Supabase", "Next.js"]
  }];
  const skills = {
    "Languages & Frameworks": ["Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "DSPy"],
    "Agentic & RAG": ["Gemini ADK", "Arize Phoenix", "FastAPI", "Supabase", "Neo4j", "Qdrant", "ChromaDB"],
    "Data Engineering": ["SQL", "Spark", "Pandas", "Databricks", "Power BI", "Vertex AI"],
    "MLOps / Infra": ["Docker", "Kubernetes", "Coolify", "Git", "CI/CD"],
    "Cloud & Automation": ["GCP", "n8n", "Zoho", "Fal AI", "Heygen API"],
    "Frontend": ["Next.js", "Tailwind", "ShadCN UI", "Figma"]
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <Badge className="mb-8 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                                      AI Engineer                                              
 
 
 

  
            </Badge>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="font-heading text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tight">
            Hadi Hijazi
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            AI/ML Engineer with a dual expertise in business strategy and technical execution. Combining deep learning research with product design and automation engineering to build agentic systems that transform enterprise operations and drive measurable business impact.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <a href="tel:+33745187554" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +33 7 45 18 75 54
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:hijazi.hadi@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              hijazi.hadi@gmail.com
            </a>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="flex items-center justify-center gap-3 mb-12">
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              <Button variant="ghost" size="icon" onClick={() => window.open("https://github.com/doubleh10", "_blank")} className="hover:text-accent transition-colors h-10 w-10">
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              <Button variant="ghost" size="icon" onClick={() => window.open("https://linkedin.com/in/hadi-hijazi", "_blank")} className="hover:text-accent transition-colors h-10 w-10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              <Button variant="ghost" size="icon" onClick={() => window.open("mailto:hijazi.hadi@gmail.com")} className="hover:text-accent transition-colors h-10 w-10">
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="lg" onClick={() => scrollToSection("experience")} className="bg-foreground hover:bg-foreground/90 text-background">
                View Experience
              </Button>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
            About
          </motion.h2>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6 text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              MSc candidate at <span className="text-foreground font-medium">ESSEC–CentraleSupélec</span> (graduating Dec 2025) specializing in Deep Learning, Generative AI, and MLOps. Research focus on Agentic AI for MBSE using Neo4j, Gemini, and SysML v2.
            </p>
            <p>
              Founder of <span className="text-foreground font-medium">BLOQ AI</span>, a personal research sandbox for prototyping multi-agent systems, RAG pipelines, and fine-tuning experiments across finance, hospitality, and creative domains.
            </p>
            <p>
              Currently working at <span className="text-foreground font-medium">Tata Consultancy Services</span>, building enterprise-grade AI copilots that integrate LLMs with knowledge graphs and ERP systems. Passionate about deploying trustworthy AI that augments decision-making and transforms enterprise operations.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <span className="text-foreground font-medium">Languages:</span> English & French (fluent), Arabic (native), Spanish (intermediate)
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Interests:</span> Calisthenics, Muay Thai, Guitar, Strategic Reading, Cinema, Philosophy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
            Experience
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            From enterprise AI systems to independent research—building intelligent solutions across domains
          </motion.p>

          <div className="space-y-6">
            {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} index={index} />)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
            Selected Projects
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Research experiments, fine-tuning pipelines, and production agentic systems
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <ProjectCard key={index} {...project} index={index} />)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center">
            Skills & Tools
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], catIndex) => <motion.div key={category} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: catIndex * 0.1
          }}>
                <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => <motion.div key={skill} initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2 + idx * 0.03
              }} whileHover={{
                scale: 1.05
              }}>
                      <Badge variant="outline" className="text-sm px-3 py-1 border-border hover:border-accent hover:text-accent transition-all cursor-default">
                        {skill}
                      </Badge>
                    </motion.div>)}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-muted-foreground mb-12 text-lg">
            Open to Applied AI / ML Engineer roles from January 2026
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="lg" onClick={() => window.open("mailto:hijazi.hadi@gmail.com")} className="bg-foreground hover:bg-foreground/90 text-background">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="lg" variant="outline" onClick={() => window.open("https://linkedin.com/in/hadi-hijazi", "_blank")}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="lg" variant="outline" onClick={() => window.open("/Hadi_Hijazi_CV.pdf", "_blank")}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }} className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 Hadi Hijazi • AI/ML Engineer
        </div>
      </motion.footer>
    </div>;
};
export default Index;