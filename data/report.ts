// ---------------------------------------------------------------------------
// OPTIMIZELY DEPARTMENT AGENT — weekly intelligence sweep
// ---------------------------------------------------------------------------
// Structured output of the Department Agent's "Trend & Content Opportunities"
// report. Replace the `report` object below with the agent's latest run to
// refresh the dashboard. Keep the same shape.
// ---------------------------------------------------------------------------

export type FlagKind = "ai" | "ent" | "gap";

export interface TrendFlag {
  kind: FlagKind;
  label: string;
}

export interface Trend {
  rank: number;
  title: string;
  body: string;
  flags: TrendFlag[];
}

export interface ReleaseUpdate {
  product: string;
  date: string;
  highlight: string;
  source: string;
  type: string;
}

export interface EventItem {
  event: string;
  when: string;
  focus: string;
  register: string;
}

export interface RoadmapCard {
  product: string;
  phase: string;
  items: string[];
  link: string;
}

export interface ContentIdea {
  title: string;
  why: string;
  audience: string;
  difficulty?: string;
  engagement?: number;
  uniqueness?: number;
  priority?: number;
}

export interface CompetitiveRow {
  theme: string;
  optimizely: string;
  competitor: string;
  opportunity: string;
}

export interface ActionItem {
  n: number;
  title: string;
  why: string;
  priority: number;
  format: string;
}

export interface NextItem {
  bold: string;
  text: string;
}

export interface Report {
  title: string;
  generated: string;
  sub: string;
  tags: { label: string; hot?: boolean }[];
  trends: Trend[];
  releases: ReleaseUpdate[];
  events: EventItem[];
  roadmap: RoadmapCard[];
  blogs: ContentIdea[];
  whitepapers: ContentIdea[];
  linkedin: ContentIdea[];
  competitive: CompetitiveRow[];
  actions: ActionItem[];
  next7: NextItem[];
}

export const report: Report = {
  "title": "Optimizely Trend and Content Opportunities",
  "generated": "June 24, 2026",
  "sub": "The department's weekly read on what shipped, what's coming, and where the highest-value content plays sit across Opal, Configured Commerce, CMS, Graph, and Experimentation.",
  "tags": [
    {
      "label": "Breakout: Opal Agent Platform goes governance-grade",
      "hot": true
    },
    {
      "label": "Lookback window: 90 days (Mar 26 – Jun 24, 2026)"
    },
    {
      "label": "Focus: Agentic AI · MCP everywhere · B2B / Configured Commerce"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "The Opal Agent Platform goes governance-grade",
      "body": "June was the heaviest Opal release month yet: the June 1 Quality tab (Output Evaluation, Execution Guardrails, Execution Advisor), a June 4 wave of five experimentation/audience agents plus EU app hosting, and June 8 PowerPoint/Word generation. The story has shifted from \"AI features\" to scaling and governing a fleet of specialized agents. Signals span the Opal release notes, World blogs (\"Understanding Opal Cost vs Value,\" Jun 15; \"Learning by Doing – OPAL Series Ep 02,\" Jun 14), and partner posts.",
      "flags": [
        {
          "kind": "ai",
          "label": "AI relevance"
        },
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 2,
      "title": "MCP everywhere — and Commerce completes the B2B order",
      "body": "Optimizely now has a Remote MCP Server for Experimentation, a CMS (SaaS) MCP server (\"Connect your AI client to CMS,\" Jun 4), and a Commerce MCP that authenticates a buyer, manages the cart, takes payment, and submits a full B2B order from inside chat. Community posts (vaibhav's two-part \"AI That Speaks Commerce,\" Jacob Pretorius' \"First Look\") are ahead of official docs — an open content gap, and the strongest Configured Commerce angle of the quarter.",
      "flags": [
        {
          "kind": "ai",
          "label": "AI relevance"
        },
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        },
        {
          "kind": "gap",
          "label": "Docs gap — community ahead"
        }
      ]
    },
    {
      "rank": 3,
      "title": "Configured Commerce / B2B leans into agentic + Graph-first",
      "body": "\"Commerce 15 and CMS 13: Optimizely's Next Step Toward AI-Powered, Graph-First Commerce\" (Apr) frames the direction. The Q2 '26 Configured Commerce roadmap adds Ngram part-number search, additional Opal tools, Cloudflare-for-SaaS O2O, and website-level search; Q3 brings Google AI Search GA, AI bulk translations, and B2B profiles in ODP. The Jul 14 CAB at AD Summit is explicitly about AI's impact on configured commerce.",
      "flags": [
        {
          "kind": "ai",
          "label": "AI relevance"
        },
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 4,
      "title": "Agentic CMS & GEO measurement become real product surface",
      "body": "CMS 13 reached GA (Mar 31) with Opal Chat/tools (Apr 7). CMS (SaaS) shipped the Agent Visibility Analytics dashboard (Jun 10) to track how AI platforms crawl and cite your site, plus the JS SDK GA (May 5) and DAM GA (May 18). World blogs on CMS 13 content variations and page-tree management are active. The Jun 30 webinar \"Your Enterprise CMS calls itself agentic?\" is a ready-made content hook.",
      "flags": [
        {
          "kind": "ai",
          "label": "AI relevance"
        },
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        },
        {
          "kind": "gap",
          "label": "GEO guidance emerging"
        }
      ]
    },
    {
      "rank": 5,
      "title": "Experimentation turns into an agent-run lifecycle",
      "body": "The June 4 agent drop (Experimentation Program Overview, Experiment Value Estimator, Backlog Prioritization, plus Standard & Real-time Audience Builders) pairs with roadmap items: the Feature Experimentation MCP Server (Q2 '26), Experiment Plan Creation Agent, and Idea Builder. The pitch is a full ideation-to-QBR loop run by agents, not point AI helpers.",
      "flags": [
        {
          "kind": "ai",
          "label": "AI relevance"
        },
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 6,
      "title": "Watchlist",
      "body": "Adaptive Intelligence (Opal roadmap, an org-specific conversion model) and Voice Mode are forward-looking and lightly sourced — track for a future issue rather than build against now.",
      "flags": []
    }
  ],
  "releases": [
    {
      "product": "CMS (SaaS)",
      "date": "Jun 18, 2026",
      "highlight": "Notice: Preview3 CMS REST API reaches end-of-life on Aug 1, 2026 — migrate integrations.",
      "source": "CMS (SaaS) release notes",
      "type": "Deprecation"
    },
    {
      "product": "CMS (SaaS)",
      "date": "Jun 10, 2026",
      "highlight": "Agent Visibility Analytics dashboard — monitor which AI platforms crawl and cite your site, built on CDN logs and Opal insights.",
      "source": "CMS (SaaS) release notes",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "Jun 8, 2026",
      "highlight": "PowerPoint and Word document creation — Opal can read, create, and edit .docx/.pptx with code execution enabled.",
      "source": "Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "CMS (SaaS)",
      "date": "Jun 8, 2026",
      "highlight": "Multi-select in the Content Manager picker for faster bulk content actions.",
      "source": "CMS (SaaS) release notes",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "Jun 4, 2026",
      "highlight": "Agent wave: EU app hosting; five new agents (Experimentation Program Overview, Experiment Value Estimator, Backlog Prioritization, Standard & Real-time Audience Builder); Microsoft Teams/Outlook + Google Ads tools; Gamma & GitHub remote MCP connectors; Limitless 1:1 Personalization.",
      "source": "Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "CMS (SaaS)",
      "date": "Jun 4, 2026",
      "highlight": "\"Connect your AI client to CMS (SaaS)\" — CMS SaaS remote MCP server; plus controls for when environments receive platform updates.",
      "source": "CMS (SaaS) release notes",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "Jun 1, 2026",
      "highlight": "Quality tab for specialized agents — Output Evaluation (scored runs), Execution Guardrails (drift detection), and Execution Advisor (recovery + sensitive-action review).",
      "source": "Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "May 22, 2026",
      "highlight": "CMS 13 content, SEO, and GEO tools for Opal (content types, publishing, SEO/GEO analysis).",
      "source": "Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "CMS (SaaS)",
      "date": "May 21, 2026",
      "highlight": "(Beta) Manage Optimizely Graph search without developer help.",
      "source": "CMS (SaaS) release notes",
      "type": "Enhancement (Beta)"
    },
    {
      "product": "CMS (SaaS)",
      "date": "May 18, 2026",
      "highlight": "DAM integration reaches general availability; rebuild Optimizely Graph indexes without downtime; flexible property-type mapping.",
      "source": "CMS (SaaS) release notes",
      "type": "GA / Enhancement"
    },
    {
      "product": "Opal",
      "date": "May 11, 2026",
      "highlight": "CMS (SaaS) style-management tools in Opal Chat (list, view, create, update styles).",
      "source": "Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "May 7, 2026",
      "highlight": "Memory, Artifacts page, action cards, multi-turn conversation mode, RAG for CMP, and Idea Builder (Web Experimentation).",
      "source": "Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "CMS (SaaS)",
      "date": "May 5, 2026",
      "highlight": "JavaScript SDK reaches general availability.",
      "source": "CMS (SaaS) release notes",
      "type": "GA"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Apr 9, 2026",
      "highlight": "Optimizely Forms 6.0.0 made compatible with CMS 13; import/export flow bug fix.",
      "source": "CMS 13 release notes",
      "type": "Enhancement & bug fix"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Apr 7, 2026",
      "highlight": "Opal Chat and tools released (Optimizely.Cms.OpalChat 2.0.0 NuGet) — content, SEO, and GEO tooling for CMS 13.",
      "source": "CMS 13 release notes",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Mar 31, 2026",
      "highlight": "Optimizely CMS 13 general availability — modern .NET foundation, Visual Builder, Graph-powered search, embedded DAM, AI-first workflows.",
      "source": "CMS 13 release notes",
      "type": "GA release"
    }
  ],
  "events": [
    {
      "event": "Summer Series: Opal in Action",
      "when": "Weekly · every Tuesday (online)",
      "focus": "Live demos: Opal for faster campaigns, content at scale, and smarter experiments.",
      "register": "https://www.optimizely.com/insights/summer-series-opal-in-action/"
    },
    {
      "event": "Your Enterprise CMS calls itself agentic?",
      "when": "Jun 30, 2026 · Online",
      "focus": "What \"agentic CMS\" really means; the questions to ask CMS vendors; CMS 13 re-platforming.",
      "register": "https://www.optimizely.com/insights/events/"
    },
    {
      "event": "Optimizely London Developer Meetup",
      "when": "Jul 2, 2026 · In-person (London)",
      "focus": "Technical discussions, networking, and knowledge sharing for the developer community.",
      "register": "https://www.optimizely.com/insights/events/"
    },
    {
      "event": "Optimizely CAB Meeting at AD Summit",
      "when": "Jul 14, 2026 · In-person",
      "focus": "Customer advisory board on AI in the B2B world and its impact on Configured Commerce.",
      "register": "https://www.optimizely.com/insights/events/"
    },
    {
      "event": "After Hours at the Stockroom",
      "when": "Jul 15, 2026 · In-person",
      "focus": "Speakeasy-style networking reception during night two of AD Summit.",
      "register": "https://www.optimizely.com/insights/events/"
    },
    {
      "event": "Optimizely Digital Summit Sydney 2026",
      "when": "Aug 14, 2026 · In-person (Sydney)",
      "focus": "Leaders on harnessing AI and experimentation for intelligent digital experiences.",
      "register": "https://www.optimizely.com/insights/events/"
    },
    {
      "event": "Operation Opal (partners)",
      "when": "Ongoing · Partner program",
      "focus": "Opal Innovation Challenge and Opal Certification World Tour for partners.",
      "register": "https://www.optimizely.com/operation-opal/"
    }
  ],
  "roadmap": [
    {
      "product": "Opal (AI)",
      "phase": "Now / near-term",
      "items": [
        "Limitless 1:1 ABM — per-account pages built from CRM data on real URLs",
        "Adaptive Intelligence — org-specific model trained on what converts",
        "Action Cards — act on AI recommendations inline",
        "Conversational Agents & Voice Mode",
        "Add remote MCPs in a few steps"
      ],
      "link": "https://www.optimizely.com/product-updates/ai/"
    },
    {
      "product": "Content Management (CMS)",
      "phase": "Q2 2026",
      "items": [
        "Page Builder & Page Variation agents",
        "MCP server for CMS (design → components)",
        "Visual Builder multi-layout, blueprint editing, content-model locking",
        "Taxonomy & tagging; multi-step forms",
        "JavaScript SDK improvements, ISR, TinyMCE for SaaS"
      ],
      "link": "https://www.optimizely.com/product-updates/content-management/"
    },
    {
      "product": "Content Marketing (CMP)",
      "phase": "Now / near-term",
      "items": [
        "Image generation: structured inputs, multi-brand",
        "Opal for asset management (metadata, alt text, auto-archive)",
        "Suggested Assets via brief relevancy scores",
        "Resource management & capacity planning",
        "Brand Portal; omnichannel publishing to SaaS CMS"
      ],
      "link": "https://www.optimizely.com/product-updates/content-marketing/"
    },
    {
      "product": "Configured Commerce",
      "phase": "Q2 '26 · Now",
      "items": [
        "Order Approval activity log",
        "Ngrams for part-number searches",
        "Custom promotion-code errors; one-time shipping address",
        "Additional Opal tools",
        "Next: website-level search, DAM for existing customers"
      ],
      "link": "https://www.optimizely.com/product-updates/commerce/"
    },
    {
      "product": "Web Experimentation",
      "phase": "In beta / in development",
      "items": [
        "Custom Fields (beta); Developer Mode",
        "Contextual Bandits — deeper segment insights",
        "Web Companion Chrome extension",
        "Variation & template creation in the Visual Editor",
        "Frequentist & Bayesian stats engines; Akamai edge delivery"
      ],
      "link": "https://www.optimizely.com/product-updates/web-experimentation/"
    },
    {
      "product": "Feature Experimentation",
      "phase": "Q2 2026",
      "items": [
        "Experimentation MCP Server",
        "React SDK v4 refactor (unlocks Holdouts + CMAB)",
        "Flag Status across all environments",
        "Custom Fields; Team & Owner flag fields",
        "Contextual Bandits; copy a flag rule across environments"
      ],
      "link": "https://www.optimizely.com/product-updates/feature-experimentation/"
    },
    {
      "product": "Personalization",
      "phase": "Recently released / in development",
      "items": [
        "Variation Development Agent (Opal in the Visual Editor)",
        "Experimentation context in Opal; experience templates",
        "Conditional activation (click/hover/scroll/exit-intent)",
        "Variation & template creation in the Visual Editor",
        "Contextual Bandits deeper insights; Bayesian engine"
      ],
      "link": "https://www.optimizely.com/product-updates/personalization/"
    },
    {
      "product": "Data Platform (ODP)",
      "phase": "Q2 '26",
      "items": [
        "CMS–ODP plugin for real-time personalization",
        "Opal onboarding agent & integration tools",
        "Opal contextual actions across ODP",
        "Agentic audience management: smart suggestions",
        "Specialized audience agents; intent-aware creation"
      ],
      "link": "https://www.optimizely.com/product-updates/platform/"
    }
  ],
  "blogs": [
    {
      "title": "Completing the B2B Buyer Journey with the Optimizely MCP Server",
      "why": "The Commerce MCP can authenticate a buyer, manage the cart, take payment, and submit a full order in chat — community posts (May) are ahead of official docs.",
      "audience": "Solution architects, B2B product marketers",
      "difficulty": "Advanced",
      "engagement": 9,
      "uniqueness": 9,
      "priority": 9.0
    },
    {
      "title": "Agentic CMS, Defined: What CMS 13's Page Builder Agent, MCP Server & Agent Visibility Analytics Actually Do",
      "why": "Ties directly to the Jun 30 webinar and the Jun 10 Agent Visibility Analytics release; \"agentic CMS\" is a contested term buyers are actively researching.",
      "audience": "Content marketers, DevRel",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 8,
      "priority": 8.5
    },
    {
      "title": "Graph-First Commerce: How Optimizely Graph + Commerce 15 + CMS 13 Reshape Search & Discovery",
      "why": "The Apr \"Graph-First Commerce\" post set the narrative; CMS (SaaS) shipped marketer-managed Graph search (beta, May 21) and zero-downtime index rebuilds (May 18).",
      "audience": "Solution architects, product marketers",
      "difficulty": "Advanced",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    },
    {
      "title": "From A/B Test to Autonomous Program: Optimizely's New Experimentation Agents",
      "why": "The Jun 4 drop added Program Overview, Value Estimator, and Backlog Prioritization agents — a clean before/after for experimentation ops.",
      "audience": "Experimentation leads, product marketers",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 7,
      "priority": 7.5
    }
  ],
  "whitepapers": [
    {
      "title": "The Enterprise Guide to Agentic AI Governance in Marketing",
      "why": "The Opal Quality tab (Output Evaluation, Execution Guardrails, Execution Advisor) plus EU hosting are governance capabilities most competitors don't yet match — a wide-open content gap.",
      "audience": "Enterprise buyers, DevRel leads, security/compliance stakeholders",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Graph-First, AI-Ready Commerce: A Reference Architecture for B2B Distributors",
      "why": "Consolidates Configured Commerce + Graph + Opal + ODP B2B profiles into one buildable blueprint for manufacturers and distributors.",
      "audience": "Solution architects, enterprise B2B buyers",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    }
  ],
  "linkedin": [
    {
      "title": "\"Your enterprise CMS calls itself agentic? Here's the 5-question checklist.\"",
      "why": "Riff on the Jun 30 webinar; arm buyers with the questions that separate agentic CMS 13 from AI-washed positioning.",
      "audience": "DevRel & product marketers",
      "engagement": 8,
      "uniqueness": 7
    },
    {
      "title": "\"Five Opal experimentation agents shipped on June 4 — here's which to deploy first.\"",
      "why": "Rank Program Overview, Value Estimator, and Backlog Prioritization by time-to-value for a lean experimentation team.",
      "audience": "Experimentation leads & product marketers",
      "engagement": 7,
      "uniqueness": 6
    },
    {
      "title": "\"We ran a full B2B order inside a chat window. Here's the architecture.\"",
      "why": "Carousel walking through the Commerce MCP buyer journey — auth, cart, payment, order submit, procurement — with the Configured Commerce angle front and center.",
      "audience": "Solution architects & B2B marketers",
      "engagement": 9,
      "uniqueness": 9
    }
  ],
  "competitive": [
    {
      "theme": "Agentic AI orchestration",
      "optimizely": "Opal Agent Platform: specialized agents, Skills, agent directory, and Quality-tab governance across the suite.",
      "competitor": "Adobe AEP Agent Orchestrator (GA 2025); Sitecore SitecoreAI / Agentic Studio / Stream (acquired Scrunch); Salesforce Agentforce.",
      "opportunity": "Lead on cross-suite agents plus governance — few rivals pair both."
    },
    {
      "theme": "MCP & open agent interoperability",
      "optimizely": "Remote MCP Server for Experimentation, CMS (SaaS) MCP, and a Commerce MCP that completes a full B2B order; GitHub/Gamma connectors.",
      "competitor": "Bloomreach Loomi MCP + Loomi Connect (ChatGPT catalogs); Kameleoon ships tests via MCP; Contentful relies on community-built MCP servers.",
      "opportunity": "Own \"the MCP that places the order\" — unmatched commerce depth."
    },
    {
      "theme": "B2B / Configured Commerce AI",
      "optimizely": "Configured Commerce + Opal agents, Ngram part-number search, Vertex AI semantic/visual search, Product Promotion agent, B2B profiles in ODP.",
      "competitor": "Salesforce Agentforce Commerce Buyer Agent & Guided Shopping for B2B; Shopify Sidekick (no B2B-specific AI yet); Bloomreach Loomi.",
      "opportunity": "Push distributor/manufacturer buyer-journey stories where Shopify has no B2B AI answer."
    },
    {
      "theme": "Agentic CMS & GEO measurement",
      "optimizely": "CMS 13 agentic surface (Page Builder Agent, MCP), Agent Visibility / GEO Analytics, embedded DAM, Visual Builder.",
      "competitor": "Sitecore SitecoreAI + Scrunch (AI search visibility); Adobe LLM Optimizer + GenStudio; Contentful agentic workflows.",
      "opportunity": "Win the GEO-measurement narrative; tie to the Jun 30 \"agentic CMS\" webinar."
    },
    {
      "theme": "Experimentation automation",
      "optimizely": "Full-lifecycle Opal experimentation agents, FX MCP server, Holdouts, Bayesian & frequentist engines.",
      "competitor": "Kameleoon AI Copilot & PBX 2.0 agents (MCP); VWO Tier-2 AI (heatmap/session-replay, no MCP).",
      "opportunity": "Contrast a governed, end-to-end agent lifecycle against point AI features."
    },
    {
      "theme": "Enterprise AI governance",
      "optimizely": "Opal Quality tab (Output Evaluation, Execution Guardrails, Execution Advisor), EU app hosting, agent evaluations.",
      "competitor": "Adobe emphasizes \"human oversight\"; across VWO, Kameleoon, and Dynamic Yield: No recent public activity found on agent governance.",
      "opportunity": "Largest open gap — claim AI-governance leadership before rivals respond."
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Ship the Commerce MCP buyer-journey blog",
      "why": "The highest-value, lowest-coverage play; pairs a technical walkthrough with a B2B order diagram while the docs gap is still open.",
      "priority": 9.0,
      "format": "Technical blog + diagram"
    },
    {
      "n": 2,
      "title": "Publish \"Agentic CMS, Defined\"",
      "why": "Ahead of the Jun 30 webinar, anchored on CMS 13 + the Agent Visibility Analytics release, so the piece feeds event registration.",
      "priority": 8.5,
      "format": "Explainer blog"
    },
    {
      "n": 3,
      "title": "Produce the live demo: a full B2B order via Opal + the Commerce MCP Server",
      "why": "Record once, reuse for the CAB at AD Summit (Jul 14) and the LinkedIn carousel.",
      "priority": 8.2,
      "format": "Demo video"
    },
    {
      "n": 4,
      "title": "Run the LinkedIn \"agentic CMS checklist\" post",
      "why": "This week, to capture the search interest the webinar is generating.",
      "priority": 7.8,
      "format": "LinkedIn post"
    },
    {
      "n": 5,
      "title": "Open-source an Optimizely Remote MCP Server quickstart",
      "why": "Manage flags & experiments from Claude/ChatGPT to seed developer adoption and GitHub signal.",
      "priority": 7.5,
      "format": "GitHub quickstart"
    }
  ],
  "next7": [
    {
      "bold": "Today – Fri:",
      "text": "Draft and review the Commerce MCP buyer-journey blog; line up an architecture diagram."
    },
    {
      "bold": "By Jun 30:",
      "text": "Publish \"Agentic CMS, Defined\" and the LinkedIn checklist post to coincide with the \"Your Enterprise CMS calls itself agentic?\" webinar."
    },
    {
      "bold": "Tuesday:",
      "text": "Promote the next Summer Series — Opal in Action session to the marketing list."
    },
    {
      "bold": "This week:",
      "text": "Storyboard the B2B-order demo recording for reuse at the Jul 14 CAB at AD Summit."
    },
    {
      "bold": "Backlog:",
      "text": "Scope the AI-governance whitepaper and the Remote MCP Server GitHub quickstart for next sprint."
    }
  ]
};
