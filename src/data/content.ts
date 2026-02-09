export const metrics = [
  { value: 5, suffix: "+", label: "Production AI Systems" },
  { value: 70, suffix: "%", label: "Workload Reduction Delivered" },
  { value: 40, suffix: "%", label: "Compute Optimization" },
  { value: 28, suffix: "", label: "Public GitHub Repos" },
  { value: 4, suffix: "", label: "Languages Spoken" },
];

export const experiences = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "AI Engineer",
    location: "Paris, France",
    period: "Jul 2025 – Dec 2025",
    metric: "40% review reduction, 70% workload cut",
    highlights: [
      "Built enterprise-grade AI copilots integrating LLMs with Neo4j knowledge graphs & ERP data",
      "Developed SAP S/4HANA mapping agent; reconciliation time reduced by 70%",
      "Implemented MBSE copilots using Gemini 2.0 Flash for requirement extraction",
      "Proposed 4+ Proof of Concepts for knowledge graphs & agentic context engineering",
    ],
  },
  {
    company: "BLOQ AI",
    role: "Applied AI Engineer & System Architect",
    location: "Remote / Paris",
    period: "Aug 2023 – Present",
    metric: "5 paid projects, 3 products built",
    highlights: [
      "Financial Intelligence: hybrid LLM + rule model for SME compliance & liquidity scoring",
      "Hospitality Dashboard: predictive analytics optimizing GEO ranking & dynamic pricing",
      "Agent Frameworks: LangGraph + FastAPI modules with Supabase + Langfuse",
      "Mentored junior engineers on ADK architecture",
    ],
  },
  {
    company: "Ekimetrics",
    role: "Data Scientist",
    location: "Paris, France",
    period: "Jun 2024 – Sep 2024",
    metric: "15% forecast improvement, 40% compute savings",
    highlights: [
      "Enhanced Bayesian Marketing Mix Modeling; ROI forecast accuracy +15%",
      "Automated ETL pipelines on Databricks & Azure; compute time reduced by 40%",
      "Designed unsupervised segmentation across 10+ multi-market datasets",
    ],
  },
  {
    company: "Infovista",
    role: "Financial Data Analyst",
    location: "Massy, France",
    period: "Jul 2022 – Sep 2022",
    metric: "50% reporting cycle reduction",
    highlights: [
      "Automated Power BI reporting dashboards; reporting cycle time reduced by 50%",
      "Built RFM analytics for budget optimization across 4 subsidiaries",
    ],
  },
];

export const products = [
  {
    name: "TalentAI",
    tagline: "Autonomous Recruitment Platform",
    description:
      "End-to-end AI recruitment system with TF-IDF + BERT ranking, automated interview generation, and candidate scoring. Deployed and handling real recruitment workflows.",
    tags: ["BERT", "FastAPI", "Streamlit", "NLP"],
    status: "Deployed" as const,
    link: "https://github.com/doubleh10",
  },
  {
    name: "Fikrah Analytics",
    tagline: "AI Financial Workforce",
    description:
      "Hybrid LLM + rule-based model for SME compliance monitoring, liquidity scoring, and financial intelligence. Live production system serving real clients.",
    tags: ["LangGraph", "Supabase", "Next.js", "FastAPI"],
    status: "Live" as const,
    link: "https://fikrahanalytics.com",
  },
  {
    name: "OsmoseIQ",
    tagline: "AI Hotel Operations",
    description:
      "Predictive analytics platform optimizing GEO ranking, dynamic pricing, and operational efficiency for hospitality businesses.",
    tags: ["Next.js", "Python", "Supabase", "Analytics"],
    status: "Live" as const,
    link: "https://osmoseiq.com",
  },
  {
    name: "BLOQ AI",
    tagline: "Company Website",
    description:
      "Marketing website showcasing AI consulting services and products. Built with modern web technologies and deployed for client acquisition.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    status: "Live" as const,
    link: "https://bloqai.tech",
  },
];

export const projects = [
  {
    title: "Fine-Tuned Mistral-7B",
    description: "QLoRA + Hugging Face fine-tuning pipeline",
    highlights: [
      "Fine-tuned Mistral-7B-Instruct v0.3 on hospitality datasets",
      "Built Colab pipeline with BitsAndBytes + TRL SFTTrainer",
      "Evaluated on sentiment & FAQ tasks with domain-adapted LoRA adapter",
    ],
    tags: ["PyTorch", "Hugging Face", "QLoRA", "Fine-tuning"],
    github: "https://github.com/doubleh10",
  },
  {
    title: "Agentic Orchestration",
    description: "Voyager-Inspired Multi-Agent System",
    highlights: [
      "LangGraph + Gemini ADK multi-agent layer",
      "Planner-executor-critic loops & tool coordination",
      "Demonstrated emergent collaboration for automation",
    ],
    tags: ["LangGraph", "Gemini ADK", "Multi-Agent"],
    github: "https://github.com/doubleh10",
  },
  {
    title: "AI Content Agent",
    description: "Automated commercial video generation",
    highlights: [
      "Automated commercial video generation with n8n + Fal AI + Heygen",
      "Manual production time reduced by 80%",
      "End-to-end automation pipeline",
    ],
    tags: ["n8n", "Fal AI", "Heygen", "Automation"],
    github: "https://github.com/doubleh10",
  },
  {
    title: "RAG Research Assistant",
    description: "Knowledge retrieval pipeline",
    highlights: [
      "LangChain + ChromaDB retrieval pipeline",
      "Confidence weighting system",
      "Answer accuracy improved by +25%",
    ],
    tags: ["LangChain", "ChromaDB", "RAG"],
    github: "https://github.com/doubleh10",
  },
  {
    title: "Resume Scanner & Interview Agent",
    description: "AI-powered recruitment tool",
    highlights: [
      "TF-IDF + BERT ranking for CV scoring",
      "FastAPI + Streamlit interface",
      "Automated question generation",
    ],
    tags: ["BERT", "FastAPI", "Streamlit", "NLP"],
    github: "https://github.com/doubleh10",
  },
  {
    title: "Domain-Specific AI Platforms",
    description: "OsmoseIQ, Fikrah Analytics, FitFlow AI",
    highlights: [
      "End-to-end LangGraph / Supabase stacks",
      "Hospitality, FinTech, and Fitness domains",
      "Production-ready automation systems",
    ],
    tags: ["LangGraph", "Supabase", "Next.js"],
    github: "https://github.com/doubleh10",
  },
];

export const skills = {
  "Languages & Frameworks": [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "LangChain",
    "LangGraph",
    "DSPy",
  ],
  "Agentic & RAG": [
    "Gemini ADK",
    "Arize Phoenix",
    "FastAPI",
    "Supabase",
    "Neo4j",
    "Qdrant",
    "ChromaDB",
  ],
  "Data Engineering": [
    "SQL",
    "Spark",
    "Pandas",
    "Databricks",
    "Power BI",
    "Vertex AI",
  ],
  "MLOps / Infra": ["Docker", "Kubernetes", "Coolify", "Git", "CI/CD"],
  "Cloud & Automation": ["GCP", "n8n", "Zoho", "Fal AI", "Heygen API"],
  Frontend: ["Next.js", "Tailwind", "ShadCN UI", "Figma"],
};

export const education = [
  {
    institution: "ESSEC Business School & CentraleSupelec",
    degree: "MSc in Data Science & Business Analytics",
    period: "2023 – 2025",
    details: "Dual-degree program. Focus: Deep Learning, Generative AI, MLOps.",
  },
  {
    institution: "Lebanese American University",
    degree: "BSc in Computer Science",
    period: "2019 – 2023",
    details: "Dean's List. Focus: Algorithms, Data Structures, Machine Learning.",
  },
];

export const socialLinks = {
  github: "https://github.com/doubleh10",
  linkedin: "https://linkedin.com/in/hadi-hijazi",
  email: "hijazi.hadi@gmail.com",
  phone: "+33 7 45 18 75 54",
};

export const navSections = [
  "about",
  "experience",
  "products",
  "projects",
  "skills",
  "contact",
];
