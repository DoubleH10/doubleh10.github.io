export const featuredProjects = [
  {
    type: "Technical Report · TCS France",
    title: "Agentic AI for Model-Based Systems Engineering",
    description:
      "Graph-centric architecture coupling LLM-based requirement extraction with a typed Neo4j knowledge graph and governed SysML v2 synchronization. Coordinated agents — Impact Analyzer and Graph Editor — perform reasoning and guarded edits under a bearer-scoped MCP API. Co-authored at TCS France.",
    metrics: [
      "F1 = 0.95 link traceability",
      "0.87 weighted precision",
      "~5s per evaluation",
      "< 1% hallucination",
    ],
    tags: ["Neo4j", "Gemini", "MCP", "DSPy", "Arize Phoenix", "SysML v2", "OpenMBEE"],
    links: [
      { label: "Read the paper", href: "/paper_latex_package (2).pdf" },
    ],
  },
  {
    type: "Enterprise Tool · Demonstrated to Sanofi",
    title: "Video-to-Process Flow: VLM-Powered SOP Extraction",
    description:
      "Takes screen recordings of users performing tasks on ERPs or manual workflows. Detects the platform, identifies actions, and generates complete SOPs with flowcharts, decision points, timestamps, and bottleneck detection. Batch processes videos via cross-video stitching for multi-step workflows. Demonstrated to Sanofi pharma teams.",
    metrics: [],
    tags: ["Gemini Pro Vision", "FastAPI", "RAG", "Process Mining"],
    links: [],
  },
  {
    type: "Shipped Product · Live Demo",
    title: "TalentAI — Autonomous Recruitment Platform",
    description:
      "Full-pipeline AI recruitment: JD optimization via voice, candidate sourcing with anonymization, AI phone screening with adaptive deep-dive questioning, interview scheduling, and per-stage evaluation. Fully functional — try it live.",
    metrics: [],
    tags: ["Gemini 2.5 Flash", "Google ADK", "Next.js", "Vercel"],
    links: [
      { label: "Try it live", href: "https://hr-plus-talentai.vercel.app/" },
      { label: "Source code", href: "https://github.com/DoubleH10" },
    ],
  },
];

export const products = [
  {
    name: "Fikrah",
    description:
      "The finance team that adapts to your stage. AI operators that follow your SOPs, support your humans, and grow with your financial maturity. Built for Saudi SMEs, ZATCA-compliant.",
    tags: ["LangGraph", "FastAPI", "Supabase", "Next.js"],
    status: "live" as const,
    link: "https://fikrah.bloq-ai.net/landing",
  },
  {
    name: "OsmoseIQ",
    description:
      "The AI brain for hospitality. Unified middleware that integrates siloed hotel systems into a single, proactive AI operating system for independent and boutique hotels.",
    tags: ["Next.js", "Python", "Supabase", "Analytics"],
    status: "live" as const,
    link: "https://osmose-iq-frontend.vercel.app/landing",
  },
  {
    name: "BLOQ City",
    description:
      "Multi-agent orchestration layer powering both verticals. Defined agent roles, tool usage, workflow execution, supervision logging, and Langfuse observability. The internal infrastructure behind Fikrah and OsmoseIQ.",
    tags: ["LangGraph", "FastAPI", "Supabase", "Langfuse"],
    status: "dev" as const,
    link: null,
  },
];

export const experiences = [
  {
    role: "AI Engineer",
    company: "Tata Consultancy Services · Paris",
    period: "Jun 2025 – Jan 2026",
    highlights: [
      "Built MBSE copilot (Gemini + Neo4j) for aerospace requirement extraction — 40% review reduction, published technical report",
      "Developed S/4HANA field-mapping agent combining rules + LLM reasoning — 70% reconciliation workload cut",
      "Built Video-to-Process Flow tool using VLMs — demonstrated to Sanofi",
      "Designed self-improving agent loops with DSPy + Arize Phoenix for automated evaluation",
    ],
  },
  {
    role: "AI Engineer",
    company: "BLOQ AI · Paris / Remote",
    period: "2025 – Present",
    highlights: [
      "Built Fikrah (AI finance ops) and OsmoseIQ (AI hotel ops) — deployed, in pilot users",
      "Architected BLOQ City: multi-agent orchestration layer with defined roles, supervision, and observability",
      "Delivered 5 paid client projects including F&B BI system and sales automation agents",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Ekimetrics · Paris",
    period: "Jun – Sep 2024",
    highlights: [
      "Enhanced Bayesian Marketing Mix Model — 15% improvement in ROI forecasting accuracy",
      "Built unsupervised behavioral clustering for multinational automotive client",
      "Optimized Databricks ETL pipelines — 40% compute time reduction",
    ],
  },
];

export const writings = [
  {
    type: "Report",
    title: "Agentic AI for Model-Based Systems Engineering",
    description:
      "Graph-centric architecture integrating SysML v2, OpenMBEE, and Neo4j. Co-authored at TCS France. F1 = 0.95 link traceability, 0.87 weighted precision.",
    meta: "January 2026 · Co-authored with Dr. Yassine Motie",
    href: "/paper_latex_package (2).pdf",
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
    "Eval Pipelines",
  ],
  "Agent Systems": [
    "LangGraph",
    "Google ADK",
    "DSPy",
    "MCP",
    "Langfuse",
    "Arize Phoenix",
  ],
  Backend: ["Python", "FastAPI", "Supabase", "Neo4j", "Qdrant", "Docker"],
  "Data & Cloud": ["SQL", "Databricks", "Spark", "Azure", "GCP"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  Languages: [
    "English (fluent)",
    "French (fluent)",
    "Arabic (native)",
    "Spanish (intermediate)",
  ],
};

export const socialLinks = {
  github: "https://github.com/DoubleH10",
  linkedin: "https://www.linkedin.com/in/hadi-hijazi/",
  email: "hijazi.hadi@gmail.com",
};

export const navSections = [
  "work",
  "products",
  "experience",
  "writing",
  "contact",
];
