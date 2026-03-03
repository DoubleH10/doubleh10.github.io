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
    links: [
      { label: "Source code", href: "https://github.com/DoubleH10/Video-SOP" },
    ],
  },
  {
    type: "Open Source · MCP Server",
    title: "ZATCA MCP — AI-Native Saudi E-Invoicing",
    description:
      "First open-source MCP server for Saudi e-invoicing. 8 tools for generating, signing, validating, and submitting ZATCA-compliant invoices via natural language. UBL 2.1 XML, XAdES-BES digital signing, 16-rule validation engine, and full Phase 1 + 2 support. 100 tests passing.",
    metrics: [
      "8 MCP tools",
      "100 tests passing",
      "Phase 1 + 2 compliant",
    ],
    tags: ["Python", "MCP", "ZATCA", "Cryptography", "UBL 2.1"],
    links: [
      { label: "Source code", href: "https://github.com/DoubleH10/zatca-mcp" },
    ],
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
      "Built internal tooling for multi-agent coordination and observability",
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

export const blogPosts = [
  {
    slug: "ai-os",
    title: "I Accidentally Built an AI OS",
    date: "March 2026",
    sections: [
      {
        content:
          "I didn't set out to build an operating system. I set out to stop forgetting things.\n\nI run a small AI practice across Paris and the Gulf. Three verticals, a handful of pilots, client calls in French and Arabic, and a pipeline that lives across too many tabs. The work itself was fine. The problem was everything between the work: remembering what a client said three weeks ago, knowing which deal needed a follow-up, catching that a meeting next Tuesday overlaps with a deliverable due the same day. I was spending more energy managing context than doing actual engineering.\n\nSo I started wiring things together. Not with a grand plan. Just out of irritation.",
      },
      {
        heading: "The duct tape phase",
        content:
          "It started with the obvious stuff. I connected my calendar to my CRM so I'd stop manually checking who I was meeting and what stage their deal was at. Then I added meeting notes that auto-linked to contacts. Then I piped Slack notifications into a unified inbox so I'd stop context-switching between four apps to figure out if someone was waiting on me.\n\nEach connection was small. Calendar to CRM. CRM to task manager. Task manager to project notes. Notes back to calendar for meeting prep. None of it was impressive on its own.\n\nBut somewhere around the fifth or sixth integration, something shifted. The system started doing things I didn't explicitly ask for. My meeting prep would surface not just the agenda, but the last three interactions with that person, their pipeline stage, and a draft of what I probably needed to discuss. Not because I built a \"meeting prep feature,\" but because the context was already flowing through the system and it just... assembled.",
      },
      {
        heading: "What actually works",
        content:
          "The layer I ended up with connects Claude, Notion, Attio CRM, Google Calendar, Slack, and n8n into something that holds context across my entire work surface. Here's what genuinely works well today:",
        bullets: [
          {
            label: "Context persistence.",
            text: "I can pick up any thread from any client or project without re-reading old notes. The system remembers what I've forgotten. This alone probably saves me an hour a day.",
          },
          {
            label: "Meeting intelligence.",
            text: "Before any call, I get a briefing that pulls from CRM history, recent messages, and project status. I walk into calls prepared without spending 15 minutes preparing.",
          },
          {
            label: "Pipeline awareness.",
            text: "Instead of reviewing my pipeline once a week in a spreadsheet, the system flags what needs attention based on time since last contact, deal stage, and upcoming deadlines.",
          },
        ],
        afterBullets:
          "The common thread is that none of these are features I \"built\" in the traditional sense. They're emergent behaviors of having the right data flowing between the right tools with an LLM sitting in the middle making sense of it.",
      },
      {
        heading: "What doesn't work (yet)",
        content:
          "I want to be honest about the gaps, because the AI OS narrative online tends to skip this part.",
        bullets: [
          {
            label: "Cross-tool actions are fragile.",
            text: "The system is great at reading from multiple sources and synthesizing. It's mediocre at writing back. Updating a CRM field based on a calendar event sounds simple until you're debugging why it created a duplicate contact at 2am.",
          },
          {
            label: "The cold start problem is real.",
            text: "Every new client or project requires manual seeding of context before the system becomes useful. There's no magic \"just start working and it figures it out\" moment. You have to feed it.",
          },
          {
            label: "Orchestration is still manual in places.",
            text: "I use n8n for workflow automation, but the gap between \"this could be automated\" and \"this is reliably automated\" is wider than any demo suggests. I still manually trigger about 30% of what should be automatic.",
          },
          {
            label: "It's brittle when APIs change.",
            text: "One provider updates their webhook format and suddenly your meeting prep is pulling yesterday's data. You don't notice until you're in the call and the context is stale.",
          },
        ],
      },
      {
        heading: "The realization",
        content:
          "About two months into this experiment, I started seeing the term \"AI OS\" show up everywhere. And I realized that's what I'd been building without naming it. Not a product. Not a platform. Just... the operating layer that sits between me and my tools and makes the whole thing coherent.\n\nThe interesting thing is that this isn't really about AI in the way most people mean it. It's not about generating content or replacing tasks. It's about context. The AI layer's job is to hold, connect, and surface context so that when I sit down to do real work, I'm starting from the right place instead of spending the first 20 minutes figuring out where I left off.\n\nI think that's the actual unlock. Not AI that does your work, but AI that remembers your work well enough to make you faster when you do it yourself.",
      },
      {
        heading: "Where this goes",
        content:
          "I don't know if \"AI OS\" becomes a product category or if it stays a power-user pattern. Right now it's somewhere between a personal tool and an architecture philosophy. But the problem it solves is real and it's not going away. Every knowledge worker I talk to has some version of the same complaint: too many tools, not enough context, too much time spent on the seams between tasks.\n\nThe teams that figure out the UX layer on top of this plumbing — that make this accessible to people who aren't going to wire up seven APIs on a Saturday — are going to build something massive. I'm watching that space closely.\n\nFor now, I'm just a guy who got tired of forgetting things and accidentally built something useful. If that resonates, I'd love to hear what you're building.",
      },
    ],
  },
];

export const writings = [
  {
    type: "Essay",
    title: "I Accidentally Built an AI OS",
    description:
      "How wiring together Claude, Notion, Attio, Calendar, Slack, and n8n out of irritation turned into an operating layer for knowledge work.",
    meta: "March 2026",
    href: "/blog/ai-os",
    internal: true,
  },
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
