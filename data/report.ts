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
  "generated": "July 1, 2026",
  "sub": "The department's weekly read on what shipped, what's coming, and where the highest-value content plays sit across Opal, Optimizely Graph, Commerce Connect 15, CMS 13, and Feature Experimentation — for content marketers, DevRel leads, solution architects, and product marketers.",
  "tags": [
    {
      "label": "Breakout: Opal shipped almost weekly through June",
      "hot": true
    },
    {
      "label": "Lookback window: 90 days (Apr 2 – Jul 1, 2026)"
    },
    {
      "label": "Focus: Opal Agent Library · Graph-first architecture · Commerce MCP / B2B"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "Opal shipped almost weekly through June",
      "body": "Fourteen-plus dated Opal release entries since April 2, including a June 30 Agent Library (45+ prebuilt agents), a June 1 Quality Tab (Output Evaluation, Execution Guardrails, Execution Advisor), and 20+ new specialized agents on June 30 alone. This is the single most active theme in the sweep.",
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
      "title": "Optimizely Graph becomes the default data layer everywhere",
      "body": "Commerce Connect 15 (GA May 18) formally deprecates Search & Navigation for commerce in favor of the Optimizely.Graph.Commerce package, mirroring CMS 13's own Graph-primary indexing (Conventions API, June 1). A May 21 beta Graph Search Management Portal extends this to non-developers.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 3,
      "title": "Commerce 15 GA turns the catalog into an agentic, Graph-powered surface",
      "body": "The May 18 GA release rebuilds Commerce Connect on .NET 10 and CMS 13, makes Visual Builder the default catalog editor, and adds PCI DSS-compliant tokenized payments. Community coverage (world.optimizely.com/blogs/vaibhav, May 2026) documents a companion Commerce MCP Server covering the full B2B buyer journey.",
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
      "title": "MCP becomes Optimizely's standard AI connector, not a one-off",
      "body": "The Experimentation MCP Server went GA April 29 (Claude Desktop/Code, Cursor, VS Code Copilot, Windsurf via Opti ID OAuth); a Commerce MCP Server is documented in a two-part World blog series; an MCP server for CMS is named on the current CMS Q2 roadmap.",
      "flags": [
        {
          "kind": "ai",
          "label": "AI relevance"
        },
        {
          "kind": "gap",
          "label": "Docs gap — community ahead"
        }
      ]
    },
    {
      "rank": 5,
      "title": "CMAB and MCP compress the test-and-ship cycle",
      "body": "Contextual multi-armed bandits (CMAB, powered by Opal), Custom Fields, and Flag Statuses all shipped April 28 in Feature Experimentation, alongside the April 29 MCP Server — letting teams create and debug flags conversationally instead of through the dashboard.",
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
      "title": "Governance becomes a selling point, not a checkbox",
      "body": "Opal's June 1 Quality Tab ships execution guardrails and an auto-recovery advisor just as industry research (agenticaiinstitute.org) pegs mature enterprise AI-agent governance at only 21% of leaders, despite 72% production adoption — a 60-point articulated gap Optimizely can credibly address in content.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        },
        {
          "kind": "gap",
          "label": "Governance gap — 21% mature"
        }
      ]
    },
    {
      "rank": 7,
      "title": "Watchlist",
      "body": "AI-driven merchandising and GEO/AEO tooling (Conductor AEO Gap Finder, AI Brand Visibility Report, and Competitive AI Share of Voice agents, all released June 30) is a single-source signal so far and is tracked as a sub-theme of Configured Commerce rather than its own cluster this week.",
      "flags": []
    }
  ],
  "releases": [
    {
      "product": "Optimizely Opal",
      "date": "Jun 30, 2026",
      "highlight": "Agent Library (45+ prebuilt agents), Personalize Opal onboarding agent, agent sharing & visibility controls, in-chat image editor, Skills builder reaches GA",
      "source": "Optimizely Opal release notes",
      "type": "Feature"
    },
    {
      "product": "Optimizely Graph",
      "date": "Jun 29, 2026",
      "highlight": "Gateway 3.29.2 fixed a TypeError crash on GraphQL content search queries",
      "source": "Optimizely Graph release notes",
      "type": "Bug fix"
    },
    {
      "product": "Optimizely Opal",
      "date": "Jun 24, 2026",
      "highlight": "Bulk delete for chat threads/agents/skills, per-agent model-provider selection, Opal Chat activity stream with inline tool status",
      "source": "Optimizely Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13",
      "date": "Jun 23, 2026",
      "highlight": "Content Graph 4.4.2 — content save/publish no longer blocks on Graph indexing; longer Smooth Rebuild timeouts",
      "source": "CMS 13 release notes",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely Opal",
      "date": "Jun 23, 2026",
      "highlight": "Same-day: EPiServer.Forms 6.0.1 fixed a thread-pool exhaustion bug in visitor-data retrieval",
      "source": "Optimizely Opal release notes",
      "type": "Bug fix"
    },
    {
      "product": "CMS 13 / Analytics",
      "date": "Jun 10, 2026",
      "highlight": "Agent Visibility Analytics dashboard released, tracking how AI platforms crawl and reference site content",
      "source": "CMS 13 / Analytics release notes",
      "type": "Feature"
    },
    {
      "product": "Optimizely Opal",
      "date": "Jun 8, 2026",
      "highlight": "Opal can now read, create, and edit .docx and .pptx files via the code_execution tool",
      "source": "Optimizely Opal release notes",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely Opal",
      "date": "Jun 4, 2026",
      "highlight": "Limitless 1:1 Personalization (Opal-generated per-account landing pages); EU app hosting region added",
      "source": "Optimizely Opal release notes",
      "type": "Feature"
    },
    {
      "product": "CMS 13",
      "date": "Jun 1, 2026",
      "highlight": "CMS Core 13.1.0: Applications REST API reaches GA, Conventions API for Graph indexing, expanded external-content property mappings",
      "source": "CMS 13 release notes",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely Opal",
      "date": "Jun 1, 2026",
      "highlight": "Quality tab for specialized agents: Output Evaluation, Execution Guardrails, Execution Advisor",
      "source": "Optimizely Opal release notes",
      "type": "Feature"
    },
    {
      "product": "CMS 13 (Opal tools)",
      "date": "May 22, 2026",
      "highlight": "17 Opal tools released for CMS 13: content types, SEO/GEO analysis, publishing, content previews",
      "source": "CMS 13 (Opal tools) release notes",
      "type": "Feature"
    },
    {
      "product": "Optimizely Graph",
      "date": "May 21, 2026",
      "highlight": "(Beta) Graph Search Management Portal — dashboards, Pinned Results, and Synonyms UI for non-developers",
      "source": "Optimizely Graph release notes",
      "type": "Beta feature"
    },
    {
      "product": "Commerce Connect 15",
      "date": "May 18, 2026",
      "highlight": "GA release: rebuilt on .NET 10 + CMS 13, Graph-powered catalog search replaces Find, Visual Builder default for catalog editing, PCI DSS-compliant tokenized payments",
      "source": "Commerce Connect 15 release notes",
      "type": "GA release"
    },
    {
      "product": "Feature Experimentation",
      "date": "Apr 29, 2026",
      "highlight": "Optimizely Experimentation MCP Server released for Claude Desktop/Code, Cursor, VS Code + Copilot, and Windsurf via Opti ID OAuth 2.0",
      "source": "Feature Experimentation release notes",
      "type": "Feature"
    },
    {
      "product": "Feature Experimentation",
      "date": "Apr 28, 2026",
      "highlight": "Contextual multi-armed bandits (CMAB, powered by Opal), Custom Fields, and Flag Statuses released",
      "source": "Feature Experimentation release notes",
      "type": "Feature"
    },
    {
      "product": "CMS 13 (DXP)",
      "date": "Apr 28, 2026",
      "highlight": "Added Incremental Static Regeneration (ISR) support with Optimizely Graph webhooks",
      "source": "CMS 13 (DXP) release notes",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13",
      "date": "Apr 24, 2026",
      "highlight": "(Beta) Serve clean markdown to AI agents at the edge instead of full HTML",
      "source": "CMS 13 release notes",
      "type": "Beta feature"
    }
  ],
  "events": [
    {
      "event": "Optimizely London Developer Meetup",
      "when": "Jul 2, 2026 · In-person, London",
      "focus": "Technical discussions, developer and strategy community networking and knowledge sharing",
      "register": "https://www.optimizely.com/field-notes/events/optimizely-london-developer-meetup/"
    },
    {
      "event": "Optimizely Digital Summit Sydney 2026",
      "when": "Aug 14, 2026 · In-person summit",
      "focus": "How leading companies are harnessing AI and experimentation to build intelligent, high-impact digital experiences",
      "register": "https://www.optimizely.com/field-notes/events/digital-summit-2026-sydney/"
    }
  ],
  "roadmap": [
    {
      "product": "Opal (AI)",
      "phase": "Now / Next",
      "items": [
        "Limitless 1:1 ABM — agent-built, per-account pages generated from CRM data, auto-refreshed as signals shift",
        "Adaptive Intelligence — org-specific data layer surfacing underserved audiences and site-specific test ideas",
        "Action Cards — dynamic UI components carrying AI-generated recommendations directly into workflow",
        "Agent Library, Ready-to-use Prompts, and Artifacts management expansion",
        "Voice Mode and richer conversational back-and-forth agent collaboration",
        "New remote MCP connectors (Zoom, Google Workspace, Google Ads, Adobe Analytics, Microsoft Teams)"
      ],
      "link": "https://www.optimizely.com/product-updates/ai/"
    },
    {
      "product": "Content Management / CMS",
      "phase": "Q2 roadmap",
      "items": [
        "Page Builder and Page Variation Agents generating pages/variations from existing content models",
        "New MCP server for CMS to translate designs into CMS-ready frontend components",
        "Visual Builder multi-layout support, blueprint editing, and content model locking",
        "Content Manager filtering, navigation, and multi-select improvements at scale",
        "Structured taxonomy and tagging to improve content reuse and discoverability",
        "Tighter CMP-to-CMS integration and DAM rendition improvements"
      ],
      "link": "https://www.optimizely.com/product-updates/content-management/"
    },
    {
      "product": "Content Marketing / CMP",
      "phase": "Current roadmap",
      "items": [
        "Image generation improvements to Opal with structured inputs and multi-brand template support",
        "Opal-managed assets — suggested metadata/tags, auto alt text, automatic archiving of expired assets",
        "Suggested Assets — Opal surfaces relevant existing assets for a brief or campaign",
        "Resource management: team workload visibility, time tracking, estimate-accuracy reporting",
        "Brand Portal for secure, access-controlled internal/external asset sharing",
        "Omnichannel publishing directly into Optimizely SaaS CMS"
      ],
      "link": "https://www.optimizely.com/product-updates/content-marketing/"
    },
    {
      "product": "Configured Commerce",
      "phase": "Q2 '26 · Now / Next",
      "items": [
        "Cloudflare for SaaS (Orange-to-Orange) bring-your-own edge configuration",
        "Search Service with per-site engine choice (Optimizely Search v3, HawkSearch, or Coveo)",
        "Datadog visibility surfaced directly inside Mission Control",
        "Now: Order Approval Activity Log, Ngram part-number search, additional Opal tools",
        "Next: DAM for existing customers, bulk promotion assignment, rules-engine subcategory targeting"
      ],
      "link": "https://www.optimizely.com/product-updates/commerce/"
    },
    {
      "product": "Web Experimentation",
      "phase": "In beta / in development",
      "items": [
        "Custom Fields (beta) for experiment metadata and program-level analysis",
        "Developer Mode — full-screen code editing workspace with near-instant preview",
        "Contextual Bandits deeper insights connecting winning segments to ready-to-launch audiences",
        "Web Companion Chrome extension to launch the Visual Editor without a deployment",
        "Frequentist (beta) and Bayesian stats engines for regulated and real-time testing",
        "Experiment Plan Creation Agent turning test ideas into JIRA-ready plans"
      ],
      "link": "https://www.optimizely.com/product-updates/web-experimentation/"
    },
    {
      "product": "Feature Experimentation",
      "phase": "Q2 2026",
      "items": [
        "Experimentation MCP Server for conversational flag/experiment management (released)",
        "React SDK v4 refactor unlocking Holdouts and Contextual Multi-Armed Bandits",
        "Flag Status — full lifecycle visibility (Draft, Live, Running, Paused, Stale, Archived) per environment",
        "Custom Fields to consolidate experimentation metadata into one source of truth",
        "Contextual Bandits for AI-powered 1:1 personalization within feature flags",
        "Copy a Flag Rule — promote rules across environments in one click"
      ],
      "link": "https://www.optimizely.com/product-updates/feature-experimentation/"
    },
    {
      "product": "Personalization",
      "phase": "In beta / in development",
      "items": [
        "Custom Fields for personalization program metadata and analysis",
        "Developer Mode full-screen code editing workspace",
        "Contextual Bandits deeper insights for segment-level conversion detail",
        "Web Companion Chrome extension for no-deployment Visual Editor launch",
        "Template Creation in the Visual Editor using custom code or an AI agent",
        "Frequentist and Bayesian stats engines shared with Web Experimentation"
      ],
      "link": "https://www.optimizely.com/product-updates/personalization/"
    },
    {
      "product": "Data Platform (ODP)",
      "phase": "Q2 '26",
      "items": [
        "CMS–ODP plugin bringing native real-time personalization audiences into CMS visitor groups",
        "Opal onboarding agent automating object/field configuration and validation-data setup",
        "Opal contextual actions surfaced in-workflow across ODP (e.g. \"create audience variants\")"
      ],
      "link": "https://www.optimizely.com/product-updates/platform/"
    }
  ],
  "blogs": [
    {
      "title": "Inside Optimizely's Commerce MCP Server: The First B2B Buyer Journey You Can Complete in a Chat Window",
      "why": "Commerce Connect 15 went GA May 18, 2026 with Graph-powered catalog search and embedded Opal; a two-part World blog series (world.optimizely.com/blogs/vaibhav, May 2026) documents the MCP Server completing search-to-order in chat, while Shopify and Salesforce race to own \"agentic commerce\" headlines.",
      "audience": "Solution architects, B2B commerce leads",
      "difficulty": "Medium",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "CMS 13 Is Now Graph-First: What Changes for Architects Upgrading from CMS 12",
      "why": "CMS Core 13.1.0 (June 1) shipped a Conventions API for Graph indexing, and Commerce Connect 15 GA confirms Graph as the default search/delivery layer platform-wide, formally deprecating Search & Navigation for commerce — a foundational architecture shift not yet covered in a single consolidated piece.",
      "audience": "Solution architects, DevRel leads",
      "difficulty": "Medium-High",
      "engagement": 7,
      "uniqueness": 9,
      "priority": 8.0
    },
    {
      "title": "Opal's Governance Stack, Explained: Quality Tab, Guardrails, and What \"Governance Built In\" Actually Means",
      "why": "Opal's June 1 Quality Tab (Output Evaluation, Execution Guardrails, Execution Advisor) plus June 24 agent sharing/visibility controls land just as agenticaiinstitute.org reports only 21% of enterprises have mature agent governance despite 72% production adoption — a gap Optimizely can credibly close in content.",
      "audience": "Enterprise AI governance leads, IT/security stakeholders",
      "difficulty": "Medium",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "From Flags to Chat: Using the Experimentation MCP Server with Claude, Cursor, and Copilot",
      "why": "Released April 29, 2026, the Experimentation MCP Server connects Claude Desktop, Claude Code, Cursor, VS Code + Copilot, and Windsurf to flags/experiments via Opti ID OAuth — a concrete, testable devrel story that maps directly against Kameleoon's proprietary AI Copilot positioning.",
      "audience": "Developers, DevRel leads",
      "difficulty": "Low-Medium",
      "engagement": 7,
      "uniqueness": 7,
      "priority": 7.0
    },
    {
      "title": "AI Merchandising in Configured Commerce: What's Live Today vs. What's on the Roadmap",
      "why": "Commerce 15's merchandiser self-sufficiency push, Ngram part-number search, and the three Conductor AEO agents released June 30 in Opal (AEO Gap Finder, AI Brand Visibility Report, Competitive AI Share of Voice) give merchandisers concrete tools today, distinct from roadmap promises — a clarity piece buyers are asking for.",
      "audience": "Product marketers, B2B merchandisers",
      "difficulty": "Low",
      "engagement": 6,
      "uniqueness": 7,
      "priority": 6.5
    },
    {
      "title": "What Salesforce's Contentful Acquisition Means for Composable-CMS Buyers Evaluating Optimizely",
      "why": "Salesforce's 2026 agreement to acquire Contentful reshuffles the composable-CMS competitive map right as Optimizely ships CMS 13 GA and Visual Builder-first catalog editing — a timely, low-lift piece to court evaluators facing vendor-consolidation uncertainty.",
      "audience": "Solution architects, product marketers",
      "difficulty": "Low",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    },
    {
      "title": "MCP Server for CMS: A First Look at Turning Designs into CMS-Ready Components",
      "why": "The current CMS Q2 roadmap names an MCP server for CMS (\"translate designs into CMS-ready frontend components\") alongside Page Builder and Page Variation Agents — an early-access preview devrel audiences will want ahead of GA.",
      "audience": "Developers, DevRel leads",
      "difficulty": "Medium",
      "engagement": 6,
      "uniqueness": 8,
      "priority": 7.0
    }
  ],
  "whitepapers": [
    {
      "title": "Enterprise AI Agent Governance: A Buyer's Framework for Evaluating Opal, Sitecore, and Adobe",
      "why": "With 72% of enterprises in agentic-AI production but only 21% reporting mature governance (agenticaiinstitute.org, 2026), and Sitecore's Agentic Studio and Adobe's Agent Orchestrator both shipping without a comparable published governance framework, this is a timely lead-generation asset.",
      "audience": "Enterprise AI governance leads, IT security",
      "difficulty": "High",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "The Graph-First Commerce Stack: Architecture Patterns for Configured Commerce 15 + Optimizely Graph",
      "why": "Commerce 15 GA formally deprecates Find in favor of Graph for commerce search; documenting reference patterns (external PIM/ERP/DAM via OCP, async order APIs, PCI DSS-compliant tokenized payments) meets a technical-documentation gap that community blogs are already probing without an official architecture reference.",
      "audience": "Solution architects",
      "difficulty": "High",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    },
    {
      "title": "B2B Agentic Commerce Readiness: Benchmarking Optimizely Against Shopify, Salesforce, and commercetools",
      "why": "Independent indices (Elogic's Agentic Commerce Readiness Index, Stellagent's platform comparison) already rank Shopify and Salesforce/commercetools as leaders in agentic B2B commerce; Optimizely lacks a self-published benchmark despite shipping a full-journey Commerce MCP Server — a narrative gap, not a capability gap.",
      "audience": "Solution architects, product marketers",
      "difficulty": "Medium",
      "engagement": 7,
      "uniqueness": 7,
      "priority": 7.0
    }
  ],
  "linkedin": [
    {
      "title": "\"Commerce Connect 15 quietly retired Search & Navigation for commerce in favor of Graph — here's why that's the bigger story\"",
      "why": "The May 18 GA release notes confirm Optimizely.Graph.Commerce replaces Find for commerce search — a low-lift post while the GA news is still fresh.",
      "audience": "Solution architects",
      "engagement": 7,
      "uniqueness": 7
    },
    {
      "title": "\"Salesforce just agreed to acquire Contentful. If you're mid-evaluation on composable CMS, here's what changes\"",
      "why": "A live industry news cycle around the Contentful acquisition is the kind of moment a fast, well-timed post can ride for reach and relevance.",
      "audience": "Solution architects, product marketers",
      "engagement": 8,
      "uniqueness": 8
    },
    {
      "title": "\"Only 21% of enterprises say their AI-agent governance is mature. Here's what Opal's new Quality Tab actually does about it\"",
      "why": "Pairs a widely-cited industry statistic with Opal's June 1 Quality Tab launch for a credible, non-promotional governance angle.",
      "audience": "Enterprise AI governance leads",
      "engagement": 7,
      "uniqueness": 7
    },
    {
      "title": "\"You can now create a feature flag from inside Claude Desktop — short clip of the new Experimentation MCP Server\"",
      "why": "A concrete, visual demo of the April 29 MCP Server release performs well as short-form video and reinforces the multi-product MCP trend.",
      "audience": "Developers",
      "engagement": 6,
      "uniqueness": 6
    },
    {
      "title": "\"Opal's new Agent Library has 45+ prebuilt agents — here are 5 worth trying this week for content marketers\"",
      "why": "The Agent Library shipped June 30 — the newest item in this run's release sweep, and a natural fit for a scannable carousel format.",
      "audience": "Content marketers",
      "engagement": 7,
      "uniqueness": 5
    }
  ],
  "competitive": [
    {
      "theme": "Agentic commerce / MCP-driven buying",
      "optimizely": "Commerce MCP Server covers full B2B buyer journey (search to order) in chat; Commerce 15 is Graph-first and Opal-embedded",
      "competitor": "Shopify's Storefront MCP went GA in early 2026 and is a leader-tier platform on documented agentic-commerce readiness indices; Salesforce's Agentforce Commerce (Shopper/Buyer/Merchant Agents) is GA with native ChatGPT and Gemini integration",
      "opportunity": "Publish content positioning Optimizely's MCP Server as B2B-native and full-journey (not just discovery), to enter the leader conversation currently dominated by Shopify and Salesforce"
    },
    {
      "theme": "Agentic CMS / content platform AI",
      "optimizely": "CMS 13 ships Opal tools, an Agent Visibility Analytics dashboard, and a beta markdown-for-agents feature; Visual Builder is the default editor",
      "competitor": "Sitecore has rebranded its platform under a \"Sitecore AI\" banner with the Stream assistant and Agentic Studio; Adobe's Experience Platform Agent Orchestrator spans the whole Experience Cloud; Contentful shipped open-source \"Contentful Skills\" and agreed to be acquired by Salesforce",
      "opportunity": "The Contentful/Salesforce acquisition creates evaluation uncertainty among composable-CMS buyers — a timely window for platform-independence and agentic-depth comparison content"
    },
    {
      "theme": "Enterprise AI agent governance",
      "optimizely": "Opal's Quality Tab (Output Evaluation, Execution Guardrails, Execution Advisor) plus agent sharing/visibility permissions, released June 2026",
      "competitor": "No recent public activity found for a comparably named governance-specific feature set from Sitecore or Adobe in this sweep; both emphasize authoring speed and orchestration breadth over governance tooling",
      "opportunity": "Claim a governance-first narrative while the industry-wide governance gap (79% of leaders lack a mature model, per agenticaiinstitute.org) is a fresh, citable statistic"
    },
    {
      "theme": "Experimentation automation / AI-run testing",
      "optimizely": "CMAB, Experimentation MCP Server, and Experiment Review/Advisor/Plan agents all shipped or advanced within the lookback window",
      "competitor": "Kameleoon's AI Copilot scans pages for friction and builds prompt-ready experiments with Predictive Impact Scoring; Bloomreach's Loomi AI and Dynamic Yield both emphasize autonomous, agentic personalization",
      "opportunity": "Benchmark the MCP Server's open-protocol, natural-language flag management against Kameleoon's proprietary chat interface to highlight a standards-based advantage"
    },
    {
      "theme": "Graph-first architecture (unified search/content/commerce)",
      "optimizely": "Optimizely Graph now backs both CMS 13 and Commerce 15 as the default search and delivery layer, with a beta portal opening this to non-developers",
      "competitor": "No recent public activity found describing a comparable unified graph-search layer at Sitecore, Adobe, Contentful, or Shopify in this sweep — these vendors generally keep search and CDP/data layers as separate products",
      "opportunity": "This is an under-told differentiator; devrel content explaining the graph-first architecture bet could fill a gap analysts have not yet covered"
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Publish \"Inside Optimizely's Commerce MCP Server\"",
      "why": "Highest composite priority: ties the deliberately biased Configured Commerce/B2B theme to the strongest recent GA release and a documented differentiator versus Shopify/Salesforce.",
      "priority": 9.0,
      "format": "Blog + technical demo video"
    },
    {
      "n": 2,
      "title": "Scope and greenlight the Enterprise AI Agent Governance whitepaper",
      "why": "High enterprise relevance; narrow competitive window since Sitecore and Adobe have not published comparable governance frameworks yet.",
      "priority": 8.5,
      "format": "Whitepaper scoping"
    },
    {
      "n": 3,
      "title": "Draft \"CMS 13 Is Now Graph-First\"",
      "why": "Highest uniqueness score in this run; consolidates a shift (Find deprecation, Conventions API) that is currently scattered across multiple release notes.",
      "priority": 8.0,
      "format": "Blog + architecture diagram"
    },
    {
      "n": 4,
      "title": "Fast-track the Salesforce/Contentful-acquisition reaction post",
      "why": "Low difficulty, high timeliness; the news-jacking window for vendor-consolidation content closes quickly.",
      "priority": 7.5,
      "format": "LinkedIn post + blog"
    },
    {
      "n": 5,
      "title": "Brief devrel on the Experimentation MCP Server setup flow",
      "why": "Concrete, low-medium difficulty asset that reinforces the multi-product MCP trend and gives developers something to run, not just read.",
      "priority": 7.0,
      "format": "GitHub sample repo"
    }
  ],
  "next7": [
    {
      "bold": "This week:",
      "text": "Publish or pitch the Salesforce/Contentful-acquisition reaction post before the news cycle cools."
    },
    {
      "bold": "Demo:",
      "text": "Record a short demo of the Commerce MCP Server completing a B2B reorder end-to-end, for use in both the blog and a LinkedIn video clip."
    },
    {
      "bold": "Verify:",
      "text": "Confirm whether the beta Graph Search Management Portal (2026-05-21) has moved to general availability before publishing any content that references it as beta."
    },
    {
      "bold": "Scope:",
      "text": "Scope the Enterprise AI Governance whitepaper outline against Opal's Quality Tab documentation and the cited governance-gap statistic."
    },
    {
      "bold": "Jul 2:",
      "text": "Use the Optimizely London Developer Meetup as a source-gathering opportunity for follow-up MCP Server and Graph-first content."
    }
  ]
};
