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
    period: "Jun 2025 – Jan 2026",
    metric: "40% review reduction, 70% workload cut",
    highlights: [
      "Built MBSE copilot using Gemini Flash + Neo4j for automated requirement extraction and traceability in aerospace workflows; Dockerized full pipeline with graph-based dependency resolution; reduced engineering review cycles by 40%",
      "Developed S/4HANA field-mapping agent combining rule-based logic with LLM reasoning; cut reconciliation workload by 70%",
      "Built Video-to-Process Flow tool using VLMs to extract process flows from screen recordings; managed RAG over pharma knowledge base, auto-mapped flows into flowcharts with cross-video stitching and bottleneck detection",
      "Designed self-improving agent loops (DSPy + Arize Phoenix) to score, monitor, and refine model responses via automated evaluation",
    ],
  },
  {
    company: "BLOQ Group (Family Business)",
    role: "AI Operations Lead",
    location: "Paris / Remote",
    period: "2023 – Present",
    metric: "5 paid client projects",
    highlights: [
      "Built AI financial operations system for Saudi SME market: workflow learning via screen recording, supervised agents for reconciliation and invoice follow-up, ZATCA-compliant for GCC regulatory requirements",
      "Developed hospitality analytics platform: unified guest, revenue, and operational data from PMS systems (Apaleo, Cloudbeds) into daily actionable ops recommendations",
      "Designed modular agent frameworks using Google ADK, FastAPI, Supabase, and Langfuse for observability across both verticals",
      "Delivered 5 paid client projects including F&B business intelligence system, sales automation agents, and telepharmacy CV system (MediaPipe + AI audits)",
    ],
  },
  {
    company: "Ekimetrics",
    role: "Data Scientist Intern",
    location: "Paris, France",
    period: "Jun 2024 – Sep 2024",
    metric: "15% forecast improvement, 40% compute savings",
    highlights: [
      "Enhanced Bayesian Marketing Mix Model by refactoring priors and feature interactions; improved ROI forecasting accuracy by 15%",
      "Built unsupervised behavioral clustering model (KMeans + sequence features) for multinational automotive client",
      "Optimized Databricks ETL pipelines, reducing compute time by 40%",
    ],
  },
  {
    company: "Infovista",
    role: "Financial Data Analyst Intern",
    location: "Massy, France",
    period: "Jul 2022 – Sep 2022",
    metric: "50% reporting cycle reduction",
    highlights: [
      "Built automated multi-entity reporting workflows in Power BI; reduced reporting cycle time by 50%",
    ],
  },
];

export const products = [
  {
    name: "TalentAI",
    tagline: "Autonomous Recruitment Platform",
    description:
      "Full-pipeline AI recruitment: JD optimization via voice, candidate sourcing with anonymization, AI phone screening with adaptive questioning, scheduling, and per-stage evaluation.",
    tags: ["Gemini 2.5 Flash", "Google ADK", "Next.js"],
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
    title: "Mistral-7B Fine-Tuning",
    description: "Hospitality Domain Adaptation",
    highlights: [
      "Fine-tuned Mistral-7B-Instruct on 2.5k samples using QLoRA (4-bit NF4, rank=8)",
      "Evaluation pipeline across 4 tasks (dialog, FAQ, sentiment, rewriting)",
      "Stack: Transformers, PEFT, TRL, bitsandbytes, Colab A100",
    ],
    tags: ["Transformers", "PEFT", "TRL", "QLoRA"],
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
    title: "Video-to-Process Flow",
    description: "VLM-powered process extraction",
    highlights: [
      "Extract process flows from screen recordings using VLMs",
      "RAG over pharma knowledge base with auto-mapping into flowcharts",
      "Cross-video stitching and bottleneck detection",
    ],
    tags: ["VLMs", "RAG", "FastAPI", "Process Mining"],
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
  "ML Engineering": [
    "PyTorch",
    "Transformers",
    "LoRA/QLoRA",
    "PEFT",
    "TRL",
    "Embeddings",
    "RAG",
    "Evaluation Pipelines",
    "4-bit Quantization",
  ],
  "Agent Systems": [
    "LangGraph",
    "LangChain",
    "Google ADK",
    "DSPy",
    "MCP",
    "Tool Integration",
    "Langfuse",
    "Arize Phoenix",
  ],
  Backend: ["Python", "FastAPI", "Supabase", "Neo4j", "Qdrant", "Docker", "CI/CD"],
  "Data & Cloud": ["SQL", "Databricks", "Spark", "Azure", "GCP"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
};

export const education = [
  {
    institution: "ESSEC Business School & CentraleSupélec",
    degree: "MSc in Data Science & Business Analytics",
    period: "2023 – 2025",
    details:
      "Ranked #3 worldwide (QS 2024). Deep Learning, Generative AI, Forecasting, Econometrics, MLOps.",
  },
  {
    institution: "ESADE Business School",
    degree: "BBA with Digital Minor",
    period: "2019 – 2023",
    details: "Rank 11/356. Barcelona.",
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
