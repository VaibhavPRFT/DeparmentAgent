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
  "generated": "July 29, 2026",
  "sub": "A weekly, evidence-led scan of Optimizely product signals, releases, events, and the content angles worth acting on — for content marketers, DevRel leads, solution architects, and product marketers.",
  "tags": [
    {
      "label": "Breakout: Opal agents move from novelty to operational fabric",
      "hot": true
    },
    {
      "label": "Signal window: 90 days (ending Jul 29, 2026)"
    },
    {
      "label": "Focus: Configured Commerce / B2B & Agentic AI"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "Opal agents move from novelty to operational fabric",
      "body": "The Agent Library now ships 45+ one-click agents and Skills Builder reached GA (Opal release notes, June 30, 2026), while the July 22 release added Google Search Console and Product Recommendations reporting tools. Opal University crossed 375 agents built and a 1,500-person waitlist (Optimizely press). This is the breakout theme of the quarter — agentic execution is now the default entry point across the suite.",
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
      "title": "Graph-first B2B commerce lands with Commerce Connect 15",
      "body": "Commerce Connect 15 GA (May 2026) makes Optimizely Graph the default search and delivery layer, deprecates Search & Navigation (Find) for commerce, brings Visual Builder and Opal into the catalog editor, and modernizes onto .NET 10 / CMS 13. Follow-on packages shipped through June–July 2026. For manufacturers and distributors, this is the clearest graph-first B2B story Optimizely has told.",
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
      "rank": 3,
      "title": "MCP Server turns the suite into an agent-accessible platform",
      "body": "The Experimentation MCP server went GA to all customers (Web & Feature Experimentation release notes, April 2026), joined by Analytics, Commerce, and CMS (SaaS) MCP servers. Community walkthroughs (World blogs, May 2026) show the full B2B buyer journey — question to placed order — running inside a chat client. MCP is officially documented, not just community-discussed.",
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
      "title": "Experimentation automation compounds: CMABs, Idea builder, agents",
      "body": "Feature Experimentation shipped Contextual Multi-Armed Bandits powered by Opal (April 28), Idea builder (June 22), and Hypothesis / Test-plan fields (July 2). The roadmap adds Change Approvals, Bayesian and Frequentist stats engines, and an Experiment Plan Creation agent that pushes plans to Jira. The center of gravity is shifting from manual A/B setup to AI-assisted, governed programs.",
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
      "rank": 5,
      "title": "Enterprise AI governance becomes a first-class capability",
      "body": "Opal added agent sharing and visibility controls and instance/agent-level model provider selection (June 24–30), CSV/Excel execution-log export for audit, and an Agent Usage dashboard for credit and adoption tracking. Roadmap items — Agent Evaluations, Execution Guardrails, Notifications — extend this. Community discussion is active but official governance guidance is still thin: a content gap worth owning.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        },
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
      "rank": 6,
      "title": "GEO/AEO: making content discoverable to LLMs",
      "body": "CMS 13 added the Agent Visibility Analytics dashboard (June 10) showing how AI platforms crawl your site, a beta \"clean markdown for AI agents\" edge feature (April), and Opal GEO/SEO schema and metadata agents. As AI-referral traffic grows, generative-engine optimization is a fast-rising, under-served content lane.",
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
    }
  ],
  "releases": [
    {
      "product": "Opal",
      "date": "Jul 22, 2026",
      "highlight": "Google Search Console connector tools; Product Recommendations algorithm-performance reporting tools.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely Graph",
      "date": "Jul 6, 2026",
      "highlight": "(Beta) Search UI adds a Performance dashboard and self-service Development accounts.",
      "source": "support.optimizely.com",
      "type": "Beta"
    },
    {
      "product": "Feature Experimentation",
      "date": "Jul 2, 2026",
      "highlight": "Optional Hypothesis and Test-plan fields on A/B rules; filter/sort by them on the Flags dashboard.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Commerce Connect",
      "date": "Jul 2026",
      "highlight": "EPiServer.Commerce 15.0.2 and 14.45.5 maintenance packages (personalization, orders, promotions).",
      "source": "support.optimizely.com",
      "type": "Bug fix"
    },
    {
      "product": "Opal",
      "date": "Jun 30, 2026",
      "highlight": "Agent Library (45+ one-click agents); Skills Builder GA; agent sharing/visibility controls; image editor; new CMS 13 GEO/SEO agents.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "Jun 24, 2026",
      "highlight": "Model-provider selection at instance and specialized-agent level; activity-stream tool status and context pills.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely Graph",
      "date": "Jun 23, 2026",
      "highlight": "Content Graph 4.4.2 — save/publish no longer blocks on indexing, removing editor timeouts.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Feature Experimentation",
      "date": "Jun 22, 2026",
      "highlight": "Idea builder uses Opal to generate testable hypotheses from a page URL, goals, and prior tests.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Feature Experimentation",
      "date": "Jun 18, 2026",
      "highlight": "Contextual Bandit Results page shows attribute importance and relative improvement per variation.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Jun 10, 2026",
      "highlight": "Agent Visibility Analytics dashboard — shows how AI platforms crawl and interact with your site.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Jun 1, 2026",
      "highlight": "CMS.Core 13.1.0 — flexible external-content property mappings, Graph Conventions API, VisibleInMenu in Graph.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely Graph",
      "date": "May 21, 2026",
      "highlight": "(Beta) Search Management Portal — marketer-controlled Pinned Results and Synonyms, no developer needed.",
      "source": "support.optimizely.com",
      "type": "Beta"
    },
    {
      "product": "Feature Experimentation",
      "date": "May 18, 2026",
      "highlight": "(Beta) Feature Rollouts (progressive release with metric tracking); React SDK v4.0.0 with async CMAB hooks.",
      "source": "support.optimizely.com",
      "type": "Beta"
    },
    {
      "product": "Commerce Connect 15",
      "date": "May 2026",
      "highlight": "GA — graph-first commerce, Visual Builder and Opal in the catalog editor, external content via OCP, .NET 10.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Web & Feature Experimentation",
      "date": "Apr 29, 2026",
      "highlight": "Experimentation MCP server GA — connects Claude, Cursor, Copilot, and Windsurf via OAuth 2.0 / Opti ID.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Feature Experimentation",
      "date": "Apr 28, 2026",
      "highlight": "Contextual Multi-Armed Bandits (Opal-powered), plus Custom Fields and Flag Statuses.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    }
  ],
  "events": [
    {
      "event": "Summer Series: Opal in Action",
      "when": "Weekly, Tuesdays · Online",
      "focus": "Live Opal AI demos and practical takeaways for marketing teams",
      "register": "https://www.optimizely.com/insights/summer-series-opal-in-action/"
    },
    {
      "event": "Partner Forum",
      "when": "Aug 12, 2026 · On-location (invite-only)",
      "focus": "Gathering for Optimizely partners",
      "register": "https://www.optimizely.com/field-notes/events/partner-forum/"
    },
    {
      "event": "Optimizely Digital Summit Sydney 2026",
      "when": "Aug 13–14, 2026 · On-location, Sydney",
      "focus": "Leaders shaping the next era of digital experience",
      "register": "https://www.optimizely.com/field-notes/events/digital-summit-2026-sydney/"
    },
    {
      "event": "Content and Beyond",
      "when": "Aug 20, 2026 · Online",
      "focus": "B2B, Commerce",
      "register": "https://www.optimizely.com/field-notes/events/content-and-beyond/"
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
  "roadmap": [
    {
      "product": "Opal (AI)",
      "phase": "Now / Coming soon",
      "items": [
        "Limitless 1:1 ABM — per-account microsites built and refreshed by agents",
        "Adaptive Intelligence — org-specific model trained on what converts",
        "Action Cards — act on AI recommendations in-workflow",
        "Code Execution Environment — Python sandbox producing decks, Excel, charts",
        "Add Remote MCPs; Agent Evaluations & Execution Guardrails"
      ],
      "link": "https://www.optimizely.com/product-updates/ai/"
    },
    {
      "product": "Content Management (CMS)",
      "phase": "Q2 roadmap",
      "items": [
        "Agentic Page Building from existing content models",
        "MCP server for CMS (design-to-component)",
        "Visual Builder: multi-layout, blueprint editing, content-model locking",
        "Content Manager improvements; taxonomy & tagging",
        "JavaScript SDK improvements; TinyMCE for SaaS"
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
        "Idea Builder agent (coming from Web to Feature Exp)"
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
      "title": "Graph-First B2B Commerce: What Commerce Connect 15 Changes for Your Catalog and Search",
      "why": "Why now: Commerce 15 GA (May 2026) makes Optimizely Graph the default search layer and deprecates Find for commerce. Architects need a clear migration and design narrative while the GA is fresh.",
      "audience": "Solution architects, product marketers",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Wiring the Optimizely MCP Server into a Full B2B Buyer Journey",
      "why": "Why now: Experimentation MCP is GA (April 2026) and Commerce/CMS MCP servers are live; community demos show question-to-order in a chat client. A canonical, reproducible walkthrough is missing.",
      "audience": "DevRel, solution architects",
      "difficulty": "Advanced",
      "engagement": 9,
      "uniqueness": 9,
      "priority": 9.0
    },
    {
      "title": "From 45+ Prebuilt Agents to Production: An Opal Agent Library Playbook",
      "why": "Why now: The Agent Library and Skills Builder GA (June 30) plus July connector tools give marketers a one-click starting point. A practical \"pick, customize, ship\" guide capitalizes on the release.",
      "audience": "Content & product marketers",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 7,
      "priority": 8.0
    },
    {
      "title": "CMAB vs A/B: When to Let Contextual Bandits Decide in Feature Experimentation",
      "why": "Why now: CMABs (April 28) and the new Contextual Bandit Results page (June 18) close the loop from test to targeting. Practitioners need decision criteria, not just a feature announcement.",
      "audience": "Experimentation leads, data teams",
      "difficulty": "Advanced",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    },
    {
      "title": "GEO/AEO for CMS 13: Making Content Discoverable to LLMs with Opal",
      "why": "Why now: The Agent Visibility Analytics dashboard (June 10), markdown-for-agents beta, and Opal GEO/SEO schema agents give a concrete toolset for a fast-rising, under-served topic.",
      "audience": "Content marketers, SEO leads",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 8,
      "priority": 8.5
    },
    {
      "title": "Search Without a Developer: Optimizely Graph's Search Management Portal",
      "why": "Why now: The beta portal (May 21) plus the July 6 performance dashboard let marketers own Pinned Results and Synonyms. A short enablement piece drives adoption ahead of GA.",
      "audience": "Content marketers, merchandisers",
      "difficulty": "Beginner–Intermediate",
      "engagement": 7,
      "uniqueness": 7,
      "priority": 7.0
    }
  ],
  "whitepapers": [
    {
      "title": "The Graph-First, Agentic Commerce Blueprint for Manufacturers & Distributors",
      "why": "Combines Commerce 15, Optimizely Graph, Opal, and the Commerce MCP server into a reference architecture for complex B2B catalogs. Anchors the Configured Commerce narrative for enterprise buyers.",
      "audience": "Solution architects, product marketers, enterprise buyers",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Governing Agentic MarTech: A Trust, Guardrails, and Audit Framework",
      "why": "Turns Opal's role-based sharing, model-provider selection, execution-log export, and roadmap guardrails/evaluations into an enterprise governance model. Fills a live content gap and answers procurement's top objection.",
      "audience": "Enterprise/IT buyers, solution architects",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "Migrating CMS 12 + Commerce 14 to CMS 13 + Commerce 15 with Agentic AI Accelerators",
      "why": "Field-tested upgrade playbook — PageData → ExperienceData, Find → Graph, Visual Builder adoption, and AI Migration Accelerator skills. High demand from partners and architects mid-upgrade.",
      "audience": "Solution architects, DevRel, partners",
      "difficulty": "Advanced",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    }
  ],
  "linkedin": [
    {
      "title": "The number that proves agentic adoption is real",
      "why": "375 AI agents built and a 1,500-person waitlist from Opal University. Frame the shift from 'AI curiosity' to 'AI in the workflow' — invite comments on what teams would automate first.",
      "audience": "Marketing leaders",
      "engagement": 8,
      "uniqueness": 7
    },
    {
      "title": "Commerce 15 makes Optimizely Graph the default — and retires Find for commerce",
      "why": "A dev-facing post on the graph-first architecture and single GraphQL endpoint for catalog + external content. Strong for solution architects.",
      "audience": "Solution architects, developers",
      "engagement": 7,
      "uniqueness": 7
    },
    {
      "title": "Two new Opal tools merchandisers should try this week",
      "why": "Tie to the July 22 release: Google Search Console insights and Product Recommendations algorithm-performance reporting, both inside Opal.",
      "audience": "Merchandisers, marketers",
      "engagement": 7,
      "uniqueness": 6
    },
    {
      "title": "Let the bandit decide: CMAB in plain language",
      "why": "A three-line explainer on when contextual bandits beat a fixed A/B test, linking to the new results page. High save-rate potential.",
      "audience": "Experimentation leads",
      "engagement": 7,
      "uniqueness": 7
    },
    {
      "title": "Register drive for Commerce Connect 'What's new, what's next' (Sep 10)",
      "why": "Countdown-style post with the concrete agenda hooks; pairs with the Aug 20 Content and Beyond session.",
      "audience": "Commerce customers, marketers",
      "engagement": 6,
      "uniqueness": 6
    }
  ],
  "competitive": [
    {
      "theme": "Agentic AI / prebuilt agents",
      "optimizely": "Opal Agent Library (45+ agents), Skills Builder GA, role-based governance",
      "competitor": "Sitecore Agentic Studio (~20 agents); Adobe Commerce Developer Agent (Summit 2026)",
      "opportunity": "Lead on breadth + marketing-specific agents + governance depth, not just agent count"
    },
    {
      "theme": "MCP / agentic commerce",
      "optimizely": "MCP servers across Commerce, Experimentation, Analytics, CMS (SaaS)",
      "competitor": "Shopify UCP + Catalog/Cart/Checkout MCP, Agentic Storefronts default (Mar 24, 2026); Adobe Commerce MCP; Sitecore Marketer MCP; Contentful native MCP",
      "opportunity": "Own the full B2B buyer journey (quote-to-order) across one suite vs. storefront-only MCP"
    },
    {
      "theme": "Graph-first B2B commerce",
      "optimizely": "Commerce 15 graph-first, external content via OCP, unified catalog + content search",
      "competitor": "Bloomreach (Loomi + B2B connector for Salesforce Commerce Cloud); Salesforce Commerce Cloud",
      "opportunity": "Single GraphQL endpoint unifying native + external catalog and CMS content is differentiated"
    },
    {
      "theme": "AI merchandising / 1:1 personalization",
      "optimizely": "Limitless 1:1 personalization; contextual bandits; Opal catalog content generation",
      "competitor": "Bloomreach Loomi merchandising agents; Dynamic Yield — no recent public activity found",
      "opportunity": "Tie personalization to experimentation evidence — a proof story rivals lack"
    },
    {
      "theme": "Experimentation automation",
      "optimizely": "Opal-powered CMABs, Idea builder, Experimentation MCP, agent-assisted programs",
      "competitor": "VWO + AB Tasty merged (Evi agent, EmotionsAI); Kameleoon predictive targeting",
      "opportunity": "Suite-native experimentation data + MCP access is a moat amid competitor consolidation"
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Publish the Commerce Connect 15 graph-first technical blog this week",
      "why": "The GA window is the moment to own the 'Find → Graph' narrative for B2B architects.",
      "priority": 9.0,
      "format": "Blog"
    },
    {
      "n": 2,
      "title": "Ship the Optimizely MCP Server B2B buyer-journey walkthrough",
      "why": "With a runnable GitHub sample — highest uniqueness and directly differentiated vs. storefront-only competitor MCPs.",
      "priority": 8.5,
      "format": "Blog + GitHub sample"
    },
    {
      "n": 3,
      "title": "Produce the Opal Agent Library playbook",
      "why": "For content and product marketers, tied to the June 30 and July 22 releases while the 45+ agents are new.",
      "priority": 8.0,
      "format": "How-to blog"
    },
    {
      "n": 4,
      "title": "Commission the enterprise AI governance whitepaper/webinar",
      "why": "For solution architects — closes an active content gap and answers procurement's top objection.",
      "priority": 7.5,
      "format": "Whitepaper + Webinar"
    },
    {
      "n": 5,
      "title": "Run a registration campaign for the Sep 10 Commerce Connect webinar and Aug 20 Content and Beyond",
      "why": "Both map cleanly to the Configured Commerce priority themes.",
      "priority": 7.0,
      "format": "Campaign"
    }
  ],
  "next7": [
    {
      "bold": "Draft the Commerce 15 graph-first blog",
      "text": "and commission an architecture diagram."
    },
    {
      "bold": "Scope the MCP B2B buyer-journey demo",
      "text": "and stand up the GitHub sample repo."
    },
    {
      "bold": "Record a two-minute Opal release explainer",
      "text": "tied to the July 29 release (Agent Builder, Skill Builder, governance)."
    },
    {
      "bold": "Schedule the five LinkedIn posts",
      "text": "lead with the Opal University proof point and the Commerce 15 dev angle."
    },
    {
      "bold": "Brief solution architects on Commerce 15",
      "text": "talking points: graph-first, Visual Builder catalog, PCI/tokenized payments."
    },
    {
      "bold": "Build the promo push for Sep 10 & Aug 20 events",
      "text": "drive Commerce Connect and Content and Beyond registrations."
    }
  ]
};
