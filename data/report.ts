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
  royalCyberEvents: EventItem[];
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
  "generated": "August 20, 2026",
  "sub": "A weekly, evidence-led scan of Optimizely product signals, releases, events, and the content angles worth acting on — for content marketers, DevRel leads, solution architects, and product marketers.",
  "tags": [
    {
      "label": "Breakout: The agentic-DXP race broadens — Sitecore, Adobe, and Bloomreach all shipped agent platforms this quarter",
      "hot": true
    },
    {
      "label": "Signal window: 90 days (ending Aug 20, 2026)"
    },
    {
      "label": "Focus: CMS 13 GEO/Content Agents · Opal Model Upgrades · Preview3 Migration"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "Opal ships agent-building tools and a quiet model upgrade to Claude Opus 5",
      "body": "The July 29 release added Agent Builder and Skill Builder so admins can configure and iterate on agents and skills directly inside Opal Chat, plus Safe URL Browsing, Version History, and remote MCP support. The August 14 update raised the ceiling further, upgrading the Complex and Code inference levels to run on claude-opus-5 and shipping graph_pinned_result and graph_synonyms tools for managing Optimizely Graph search behavior from inside chat (Opal release notes).",
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
      "title": "CMS 13 gets its own content-modeling and GEO agents",
      "body": "The August 17 CMS 13 release notes document a Content Model Creation agent that analyzes a URL or image to propose a best-practice content model, and a GEO Schema Optimization agent that recommends or generates JSON-LD schema for LLM discoverability. Both build on the SEO/GEO agent work Opal shipped in June, moving GEO from a dashboard you read to a task an agent performs for you.",
      "flags": [
        {
          "kind": "ai",
          "label": "AI relevance"
        },
        {
          "kind": "gap",
          "label": "Content gap"
        }
      ]
    },
    {
      "rank": 3,
      "title": "Commerce Connect 15 finishes its PCI and async-order overhaul",
      "body": "Commerce Connect 15 GA removes the legacy credit-card storage APIs entirely in favor of tokenized payment providers (Stripe, Adyen, PayPal), adds async versions of every IOrderRepository / ICartProvider / IPaymentPlanProvider method for non-blocking order operations, and defaults catalog entries to Visual Builder editing alongside CMS content. For B2B teams mid-upgrade, PCI compliance and async I/O are now forcing functions, not optional modernization.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 4,
      "title": "The agentic-DXP race stops being an Optimizely-only story",
      "body": "Sitecore's SitecoreAI (Agentic Studio, roughly 20 agents, built on Microsoft Azure) and Adobe's agentic push in Commerce — framing storefronts as serving \"humans and AI agents\" alike — both landed this quarter, and Bloomreach continues to lean on Loomi and a three-time Gartner Leader position in Search and Product Discovery. Opal's Agent Library (45+ agents) and governance controls are still the widest catalog, but the competitive gap on agent count and marketing is closing fast.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        },
        {
          "kind": "gap",
          "label": "Content gap"
        }
      ]
    },
    {
      "rank": 5,
      "title": "CMS (SaaS) forces a breaking-change migration: Preview3 is gone",
      "body": "On August 1, 2026, Optimizely retired the Preview3 CMS REST API endpoints and began disabling access; any CMS (SaaS) app still calling them needed to be on REST API v1 before the cutoff. It's a small technical note with an outsized blast radius for any integration built a couple of years ago and never revisited.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        },
        {
          "kind": "gap",
          "label": "Content gap"
        }
      ]
    },
    {
      "rank": 6,
      "title": "PIM becomes an Opal surface, not just a system of record",
      "body": "The August 4 Product Information Management update added Opal system tools that pull Dashboard statistics on request, plus primary-category management and a faster Bulk Edit. It's a small release, but it's the clearest sign yet that Opal's reach is extending past CMS, Commerce, and Experimentation into the product-data layer B2B catalogs depend on.",
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
    }
  ],
  "releases": [
    {
      "product": "CMS 13 (PaaS)",
      "date": "Aug 17, 2026",
      "highlight": "Content Model Creation and GEO Schema Optimization agents documented for CMS 13 — build content models from a URL/image, generate JSON-LD schema for LLM discoverability.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "Aug 14, 2026",
      "highlight": "Complex and Code inference levels upgraded to claude-opus-5; added graph_pinned_result and graph_synonyms tools for Optimizely Graph.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely PIM",
      "date": "Aug 4, 2026",
      "highlight": "Primary category management, faster Bulk Edit on the Product List, and a 30-day notification auto-retention policy.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS (SaaS)",
      "date": "Aug 1, 2026",
      "highlight": "Preview3 REST API endpoints retired; apps must run on CMS REST API v1.",
      "source": "support.optimizely.com",
      "type": "Breaking change"
    },
    {
      "product": "Experimentation MCP",
      "date": "Aug 2026",
      "highlight": "Remote MCP Server now open to all Web & Feature Experimentation customers — no waitlist or separate sign-up.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Opal",
      "date": "Jul 29, 2026",
      "highlight": "Agent Builder and Skill Builder GA in Opal Chat; Safe URL Browsing, Version History, Nested Workflows, remote MCP support, Gmail/HubSpot/ZoomInfo connectors.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Commerce Connect 15",
      "date": "Jul 2026",
      "highlight": "Async IOrderRepository / ICartProvider / IPaymentPlanProvider methods GA; credit-card storage APIs removed for PCI DSS compliance.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Feature Experimentation",
      "date": "Jul 7, 2026",
      "highlight": "React SDK v4 async CMAB decision hooks (useDecideAsync, useDecideForKeysAsync); Local holdouts; Owner/Teams fields on flags.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    }
  ],
  "events": [
    {
      "event": "Content and Beyond",
      "when": "Aug 20, 2026 · Online",
      "focus": "B2B, Commerce, AI",
      "register": "https://www.optimizely.com/field-notes/events/content-and-beyond/"
    },
    {
      "event": "OMVP Webinar for ANZ Partners",
      "when": "Aug 28, 2026 · Online",
      "focus": "How the Optimizely MVP program works for partners",
      "register": "https://www.optimizely.com/field-notes/events/omvp-webinar-for-anz-partners/"
    },
    {
      "event": "Camp Opticon (Opticon New York)",
      "when": "Aug 31–Sep 1, 2026 · On-location, Javits Center, NYC",
      "focus": "Flagship keynotes and hands-on sessions",
      "register": "https://www.optimizely.com/field-notes/opticon/"
    },
    {
      "event": "Optimizely Customer Day — Hamburg",
      "when": "Sep 2, 2026 · On-location, Hamburg",
      "focus": "Agentic email marketing, customers",
      "register": "https://www.optimizely.com/field-notes/events/customer-day-hamburg/"
    },
    {
      "event": "Experimentation Forum Oslo",
      "when": "Sep 3, 2026 · On-location, Oslo",
      "focus": "A/B testing, AI, analytics, data-driven growth",
      "register": "https://www.optimizely.com/field-notes/events/experimentation-forum-oslo/"
    },
    {
      "event": "What's new, what's next — Optimizely Commerce Connect",
      "when": "Sep 10, 2026 · Online",
      "focus": "Commerce, customers",
      "register": "https://www.optimizely.com/field-notes/events/whats-new-whats-next--optimizely-commerce-connect/"
    },
    {
      "event": "DMEXCO 2026 — \"The future of marketing is Agentic\"",
      "when": "Sep 23, 2026 · On-location",
      "focus": "Digital experience platform, agentic marketing",
      "register": "https://www.optimizely.com/field-notes/events/dmexco-2026/"
    }
  ],
  "royalCyberEvents": [
    {
      "event": "Upgrade to Optimizely CMS 13 Without Business Risk",
      "when": "Aug 24, 2026 · 2:00 PM CST · Live webinar",
      "focus": "Reducing CMS 13 migration risk with automated testing, content migration, and upgrade planning",
      "register": "https://www.royalcyber.com/webinar/optimizely-cms-13-migration/"
    },
    {
      "event": "Opticon 2026 Executive Networking Happy Hour — Optimizely CMS 13 & Beyond",
      "when": "Sep 1, 2026 · 12:00 PM · Friedman's Hell's Kitchen, New York, NY",
      "focus": "Co-hosted with Optimizely — CMS 13 migration, AI-powered experiences, personalization, and composable architecture",
      "register": "https://www.royalcyber.com/opticon-2026-networking-event/"
    }
  ],
  "roadmap": [
    {
      "product": "Opal (AI)",
      "phase": "Q3 roadmap",
      "items": [
        "Voice Mode — hands-free, real-time chat with Opal",
        "Virtual Teammates — bundle agents/tools into a configurable teammate (e.g., Chief of Staff)",
        "Human-in-the-loop — native approval checkpoints embedded in workflows",
        "Channel Packs & Brand Packs — on-brand campaign assets generated in seconds",
        "Deeper Tools & MCP reach — Slack, Gmail, Google Ads, ZoomInfo and more"
      ],
      "link": "https://www.optimizely.com/product-updates/ai/"
    },
    {
      "product": "Content Management (CMS)",
      "phase": "Now / Next",
      "items": [
        "Multi-layout and blueprint editing in Visual Builder",
        "Content-model locking and taxonomy/tagging improvements",
        "CMS MCP server rollout to more design-to-component workflows",
        "JavaScript SDK improvements; TinyMCE for SaaS",
        "Further Opal content agents beyond Content Model Creation and GEO Schema Optimization"
      ],
      "link": "https://www.optimizely.com/product-updates/content-management/"
    },
    {
      "product": "Content Marketing (CMP)",
      "phase": "Now / Next",
      "items": [
        "Opal image generation — structured, template-based, multi-brand",
        "Opal for managing assets — metadata, alt text, auto-archive",
        "Suggested Assets by brief and relevancy score",
        "Resource Management (capacity & time tracking); Brand Portal",
        "Omnichannel publishing to SaaS CMS"
      ],
      "link": "https://www.optimizely.com/product-updates/content-marketing/"
    },
    {
      "product": "Configured Commerce",
      "phase": "Coming soon",
      "items": [
        "Buy-now-pay-later payments (Klarna, Afterpay, Affirm) via a single toggle",
        "Cloudflare for SaaS (Orange-to-Orange) — bring your own WAF/bot rules",
        "Website-level Search Service (mix Optimizely Search v3 with HawkSearch/Coveo)",
        "Datadog visibility inside Mission Control"
      ],
      "link": "https://www.optimizely.com/product-updates/commerce/"
    },
    {
      "product": "Web Experimentation",
      "phase": "In beta / In development",
      "items": [
        "Developer Mode — full-screen code workspace",
        "Contextual Bandits — deeper segment insights",
        "Web Companion Chrome extension for the Visual Editor",
        "Variation & Template creation in the Visual Editor",
        "Bayesian & Frequentist stats engines; Akamai edge delivery"
      ],
      "link": "https://www.optimizely.com/product-updates/web-experimentation/"
    },
    {
      "product": "Feature Experimentation",
      "phase": "Now / Next",
      "items": [
        "Feature Rollouts — release with experiment-grade measurement",
        "Change Approvals — vetted flag/experiment changes",
        "Bayesian stats engine; Unified Results Page",
        "Experiment Plan Creation agent (pushes plans to Jira)",
        "Global holdouts, extending the newly shipped Local holdouts"
      ],
      "link": "https://www.optimizely.com/product-updates/feature-experimentation/"
    },
    {
      "product": "Personalization",
      "phase": "In development",
      "items": [
        "Custom Fields — centralized program source of truth",
        "Contextual Bandits — deeper insights, audience hand-off",
        "Web Companion extension; Variation & Template creation in Visual Editor",
        "Bayesian stats engine",
        "Next-gen experimentation analytics in-workflow"
      ],
      "link": "https://www.optimizely.com/product-updates/personalization/"
    },
    {
      "product": "Data Platform (ODP)",
      "phase": "Q2 2026",
      "items": [
        "CMS–ODP plugin for real-time audiences in CMS visitor groups",
        "Opal onboarding agent & integration tools (guided setup)",
        "Opal contextual actions embedded across ODP"
      ],
      "link": "https://www.optimizely.com/product-updates/platform/"
    }
  ],
  "blogs": [
    {
      "title": "The Agentic DXP Race: Benchmarking Opal Against Sitecore's Agentic Studio, Adobe's Commerce Agents, and Bloomreach's Loomi",
      "why": "Why now: Sitecore, Adobe, and Bloomreach all made agentic announcements this quarter. Buyers are actively comparing agent platforms and independent content on the comparison is thin.",
      "audience": "Product marketers, analysts, prospects",
      "difficulty": "Advanced",
      "engagement": 9,
      "uniqueness": 9,
      "priority": 9.0
    },
    {
      "title": "Inside CMS 13's New Content Model & GEO Schema Agents: A First Look",
      "why": "Why now: The August 17 release is fresh and has no independent walkthrough yet. Solution architects and content teams need a hands-on look before wider rollout.",
      "audience": "Solution architects, content engineers",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "The Preview3 Sunset: A Migration Checklist for CMS (SaaS) Teams",
      "why": "Why now: Preview3 endpoints were retired August 1. Any integration that hasn't moved to REST API v1 is already broken and searching for guidance.",
      "audience": "Developers, technical architects",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 6,
      "priority": 7.5
    },
    {
      "title": "Local Holdouts vs. Global Holdouts: A Decision Guide for Feature Experimentation",
      "why": "Why now: Local holdouts shipped July 7 alongside Owner/Teams fields. Practitioners need decision criteria for when to hold back a rule vs. an entire project.",
      "audience": "Experimentation leads, data teams",
      "difficulty": "Advanced",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    },
    {
      "title": "Claude Opus 5 Inside Opal: What the Inference-Level Upgrade Actually Changes",
      "why": "Why now: The August 14 update quietly moved Complex and Code inference to claude-opus-5. Admins want to know what changed in output quality, latency, and cost.",
      "audience": "Admins, technical marketers",
      "difficulty": "Beginner–Intermediate",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.0
    },
    {
      "title": "PIM Meets Opal: Agentic Product Data Management Arrives",
      "why": "Why now: The August 4 PIM release adds Opal system tools and primary-category management — a new, largely uncovered surface for Opal.",
      "audience": "Merchandisers, PIM admins",
      "difficulty": "Beginner–Intermediate",
      "engagement": 6,
      "uniqueness": 8,
      "priority": 7.0
    }
  ],
  "whitepapers": [
    {
      "title": "Benchmarking the Big Four Agentic DXPs: Optimizely, Adobe, Sitecore, Bloomreach",
      "why": "Buying committees are actively comparing agent counts, governance, and MCP access across these four vendors this quarter. A structured, evidence-based benchmark fills a live gap.",
      "audience": "Enterprise buyers, analysts",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Governing Model Choice in Opal: Inference Levels, Claude Opus 5, and Cost Control",
      "why": "Enterprise buyers ask about cost and governance the moment a vendor changes the model behind an AI feature. Turns the August inference-level upgrade into a procurement-ready explainer.",
      "audience": "IT/procurement, solution architects",
      "difficulty": "Intermediate",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    },
    {
      "title": "Migrating Off Preview3: An Enterprise CMS (SaaS) API Modernization Playbook",
      "why": "The August 1 retirement leaves any unmigrated integration broken. A structured playbook for auditing, migrating, and testing against REST API v1 has high, immediate demand.",
      "audience": "Enterprise architects, IT buyers",
      "difficulty": "Advanced",
      "engagement": 7,
      "uniqueness": 7,
      "priority": 7.0
    }
  ],
  "linkedin": [
    {
      "title": "Three DXPs, three agent platforms, one very busy August",
      "why": "Sitecore's Agentic Studio, Adobe's agentic Commerce framing, and Bloomreach's Loomi all surfaced this month. A roundup post positions Optimizely's Agent Library and governance depth in context.",
      "audience": "Marketing leaders",
      "engagement": 8,
      "uniqueness": 8
    },
    {
      "title": "Claude Opus 5 just quietly got wired into Opal",
      "why": "The August 14 inference-level upgrade is easy to miss in release notes but meaningful for anyone running Complex or Code-level agents. Frame it as 'what changed under the hood.'",
      "audience": "Technical marketers, admins",
      "engagement": 7,
      "uniqueness": 7
    },
    {
      "title": "Preview3 is officially retired — did your integration make the cut?",
      "why": "A direct, slightly cautionary post pointing teams to the migration checklist. High relevance for anyone who missed the August 1 deadline.",
      "audience": "Developers",
      "engagement": 6,
      "uniqueness": 6
    },
    {
      "title": "PIM finally gets an Opal seat at the table",
      "why": "Tie to the August 4 release: Opal system tools for PIM dashboards and primary-category management. A short, concrete feature spotlight.",
      "audience": "Merchandisers, PIM admins",
      "engagement": 6,
      "uniqueness": 7
    },
    {
      "title": "Save the date: Camp Opticon hits NYC, Aug 31–Sep 1",
      "why": "Countdown-style registration push for the flagship event, pairing with the Sep 3 Oslo Experimentation Forum for a two-city hook.",
      "audience": "Practitioners, partners",
      "engagement": 6,
      "uniqueness": 5
    }
  ],
  "competitive": [
    {
      "theme": "Agentic AI / prebuilt agents",
      "optimizely": "Opal Agent Library (45+ agents), Agent Builder/Skill Builder GA, model-provider choice incl. Claude Opus 5",
      "competitor": "Sitecore Agentic Studio (~20 agents, SitecoreAI on Azure); Adobe framing storefronts for 'humans and AI agents'",
      "opportunity": "Lead on breadth, governance depth (sharing, guardrails, evaluations), and model choice — not just agent count"
    },
    {
      "theme": "MCP / agentic access",
      "optimizely": "MCP servers across Experimentation (remote, open to all customers), Commerce, Analytics, CMS (SaaS)",
      "competitor": "Adobe Commerce Optimizer SaaS enrichment layer; Bloomreach's Loomi agent framework",
      "opportunity": "Own the 'no waitlist, all customers' access story while rivals gate agent features by tier"
    },
    {
      "theme": "Content modeling / GEO for AI discoverability",
      "optimizely": "CMS 13 Content Model Creation + GEO Schema Optimization agents; Agent Visibility Analytics",
      "competitor": "Sitecore Agentic Studio content-migration agents; no direct GEO-schema equivalent found for Adobe or Bloomreach",
      "opportunity": "First-mover message: automated GEO schema generation is still a gap for the competitor set"
    },
    {
      "theme": "Commerce modernization",
      "optimizely": "Commerce Connect 15 — async order APIs, PCI-compliant tokenized payments, Visual Builder-first catalog",
      "competitor": "Adobe Commerce Optimizer (SaaS enrichment layer); Bloomreach Discovery (3x Gartner Leader, Search & Product Discovery)",
      "opportunity": "Pair the PCI/async infrastructure story with Bloomreach's search strength as a distinct modernization angle"
    },
    {
      "theme": "Product data / PIM",
      "optimizely": "Opal system tools now reach into PIM — Dashboard stats, primary-category management",
      "competitor": "No direct PIM-agent equivalent surfaced for Sitecore, Adobe, or Bloomreach this quarter",
      "opportunity": "Early and largely uncontested — worth a dedicated content push before competitors catch up"
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Publish the Preview3 migration checklist this week",
      "why": "The cutoff already passed (Aug 1) — any customer still on Preview3 is in an active break/fix situation and searching for guidance now.",
      "priority": 9.0,
      "format": "Blog + checklist"
    },
    {
      "n": 2,
      "title": "Ship the CMS 13 Content Model & GEO Schema agent walkthrough",
      "why": "The Aug 17 release is fresh and the feature has no independent write-up yet.",
      "priority": 8.5,
      "format": "How-to blog + short demo video"
    },
    {
      "n": 3,
      "title": "Produce the agentic-DXP competitive benchmark",
      "why": "Sitecore, Adobe, and Bloomreach all made agentic announcements this quarter — the comparison content gap is wide open.",
      "priority": 8.5,
      "format": "Whitepaper + blog"
    },
    {
      "n": 4,
      "title": "Explain the Claude Opus 5 / inference-level upgrade to admins",
      "why": "Model changes land quietly in release notes; customers want to know what changed and whether it affects cost or behavior.",
      "priority": 7.5,
      "format": "Explainer blog"
    },
    {
      "n": 5,
      "title": "Run a registration push for Camp Opticon and the Oslo Experimentation Forum",
      "why": "Both events sit in the next three weeks and map directly to practitioner and partner audiences.",
      "priority": 7.0,
      "format": "Campaign"
    }
  ],
  "next7": [
    {
      "bold": "Draft the Preview3 migration checklist",
      "text": "and cross-link it from the CMS (SaaS) release notes."
    },
    {
      "bold": "Record a short walkthrough of the CMS 13 Content Model and GEO Schema agents",
      "text": "using a real page as the demo."
    },
    {
      "bold": "Outline the agentic-DXP benchmark",
      "text": "covering Opal, Sitecore Agentic Studio, Adobe's commerce agents, and Bloomreach Loomi."
    },
    {
      "bold": "Write the Claude Opus 5 / inference-level explainer",
      "text": "and confirm with support docs which levels map to which models."
    },
    {
      "bold": "Schedule the five LinkedIn posts",
      "text": "lead with the Opus 5 teaser and the competitive round-up."
    },
    {
      "bold": "Push registrations for Camp Opticon (Aug 31–Sep 1) and the Oslo Experimentation Forum (Sep 3)",
      "text": "prioritize partner and practitioner lists."
    }
  ]
};
