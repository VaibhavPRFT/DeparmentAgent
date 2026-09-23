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
  "generated": "September 23, 2026",
  "sub": "A weekly, evidence-led scan of Optimizely product signals, releases, events, and the content angles worth acting on — for content marketers, DevRel leads, solution architects, and product marketers.",
  "tags": [
    {
      "label": "Breakout: Agent Platform ships sub-agents, a Code step, Personal files and 6 new connectors in one week (Sep 13–21)",
      "hot": true
    },
    {
      "label": "Signal window: 90 days (ending Sep 23, 2026)"
    },
    {
      "label": "Focus: Agent Platform build-out · CMS MCP server · Opticon London (Oct 13) & Online (Oct 21)"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "Agent Platform turns into a real workflow runtime — sub-agents, code steps and Personal files",
      "body": "Between September 13 and 21, Optimizely Agent Platform (formerly Opal) added auto-tiered sub-agents (Mini, Fast or Deep, picked by task difficulty), a Code step in workflow agents that runs Python, JavaScript or Bash with no external service, parallel loop iterations, Standard/Background trigger priority, RAG search across canvases that respects permissions, and Personal files — a persistent document store that agents and Virtual Teammates read automatically. Three weeks after Virtual Teammates went GA, the platform is filling in the plumbing enterprise automation teams need.",
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
      "title": "MCP goes both ways: CMS 13 exposes its tools to Claude Code and Cursor",
      "body": "Optimizely.Cms.Opal.Tools 13.2.0 (September 11) adds an MCP server that exposes CMS 13 tools to external MCP clients such as Claude Code and Cursor (client-secret auth now, Opti ID planned), plus blueprint tools. On the inbound side, Agent Platform added Braze, Fullstory, LinkedIn Ads and OpenAI Ads connectors, OneNote and sensitivity-label tools for Microsoft 365, and EU/Global endpoints for the Contentful connector. Developers can now drive Optimizely from their own agents, not only from Optimizely's chat window.",
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
          "label": "Content gap"
        }
      ]
    },
    {
      "rank": 3,
      "title": "Opticon London (Oct 13) and Opticon Online (Oct 21) set up the next big announcement window",
      "body": "Opticon London runs October 13 at the Barbican (partner day October 12), and Opticon Online follows October 21 with keynotes from CEO Alex Atzberger and Seth Godin plus a product keynote promising \"major announcements\". Roadmap items still unshipped — Voice Mode, Personalize Opal, image generation and editing, human-in-the-loop checkpoints, Channel Packs — are the likeliest headliners. Content teams have about three weeks to line up pre-Opticon and reaction pieces.",
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
      "rank": 4,
      "title": "Blueprints and multi-layout experiences land in CMS SaaS — and Opal can drive them",
      "body": "CMS (SaaS) releases on September 14 and 22 added multiple independent layouts per experience (for example main area plus sidebar, each Outline or Grid), faster scheduled publishing (about 5 minutes instead of up to 30), a clean Preview in Visual Builder, and Opal tools that list, inspect and create content from blueprints and manage categories. Blueprint tooling also shipped for CMS 13 PaaS, so reusable page patterns are now agent-operable on both SaaS and PaaS.",
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
      "title": "AI trust becomes the counter-narrative — Optimizely leans in",
      "body": "Optimizely's September 22 UK study (1,000 consumers, 100 marketers) found 62% of consumers trust marketing less since brands started using AI and 66% think brands put volume over quality. Acquia's September 14 survey found only 41% of CMOs feel confident governing their AI initiatives. Governance, brand control and quality — not raw output volume — are becoming the buying criteria, which suits Brands, permission-aware tools and human-in-the-loop messaging.",
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
      "rank": 6,
      "title": "Salesforce closes Contentful — the headless CMS field shifts",
      "body": "Salesforce completed its roughly $1.5B acquisition of Contentful on September 1, positioning it as the content layer for its agentic \"Headless 360\" stack. Contentful customers now face a Salesforce-centric roadmap, while Optimizely keeps shipping its own Contentful MCP connector (now with EU and Global endpoints). Expect independent-CMS buyers to re-evaluate — a clear opening for Optimizely CMS SaaS positioning.",
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
    }
  ],
  "releases": [
    {
      "product": "Optimizely Agent Platform",
      "date": "Sep 21, 2026",
      "highlight": "Personal files — a persistent document store that agents and Virtual Teammates read automatically while working.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Optimizely Agent Platform",
      "date": "Sep 18, 2026",
      "highlight": "New connectors: LinkedIn Ads, OpenAI Ads, Braze and Fullstory MCP; OneNote and sensitivity-label tools for Microsoft 365; Contentful MCP Global/EU endpoints.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely Agent Platform",
      "date": "Sep 17, 2026",
      "highlight": "Auto-tiered sub-agents (Mini/Fast/Deep), RAG over canvases, workflow Code step (Python/JS/Bash), parallel loops and trigger priority.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Optimizely Agent Platform",
      "date": "Sep 13, 2026",
      "highlight": "Standard, Balanced and Complex inference levels moved to Gemini 3.8 Flash — no configuration change needed.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS (SaaS)",
      "date": "Sep 22, 2026",
      "highlight": "Opal blueprint and category tools; Visual Builder Preview button; REST API blueprint fixes. (Sep 14: multiple layouts per experience, ~5-min scheduled publishing.)",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Sep 11, 2026",
      "highlight": "Cms.Opal.Tools 13.2.0 adds an MCP server for Claude Code, Cursor and other MCP clients, plus blueprint tools. (Sep 18: Headless Forms 2.0 supports CMS 13 and OIDC.)",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Sep 9, 2026",
      "highlight": "CMS.Core 13.1.3: Graph Portal in CMS, Graph C# SDK facets, Marketo and MS Dynamics connectors at 13.0.0.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Web Experimentation",
      "date": "Sep 2026",
      "highlight": "Build agent in Idea builder turns a saved idea into a full A/B test — creates the variation and suggests metric and audience.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Commerce Connect 15",
      "date": "Sep 2026",
      "highlight": "Commerce.Opal.Tools 2.0 enforces user permissions on tool results; legacy non-Opal \"Generate Text\" removed; ODP export logging.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely PIM",
      "date": "Sep 15, 2026",
      "highlight": "Rebuilt sign-in (~5s to ~1s), primary-category import for B2B with a shared B2B/B2C template, security improvements.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "ODP / CMP",
      "date": "Sep 2026",
      "highlight": "ODP real-time audiences on CMS 13 / .NET 10; CMP Efficiency Dashboards export to PDF with new group/pivot/filter options.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Optimizely (research)",
      "date": "Sep 22, 2026",
      "highlight": "UK study: 62% of consumers trust marketing less since brands adopted AI; 66% say brands favour volume over quality.",
      "source": "optimizely.com",
      "type": "Announcement"
    }
  ],
  "events": [
    {
      "event": "Content and Beyond APAC",
      "when": "Sep 23, 2026 · Online",
      "focus": "AI, B2B, Commerce",
      "register": "https://www.optimizely.com/field-notes/events/content-and-beyond-APAC/"
    },
    {
      "event": "HumanX 2026 — \"The future of marketing is Agentic\"",
      "when": "Sep 23, 2026 · On-location",
      "focus": "Agentic marketing",
      "register": "https://www.optimizely.com/field-notes/events/HumanX-2026/"
    },
    {
      "event": "DMEXCO 2026 — \"The future of marketing is Agentic\"",
      "when": "Sep 23, 2026 · On-location",
      "focus": "Digital experience platform, agentic marketing",
      "register": "https://www.optimizely.com/field-notes/events/dmexco-2026/"
    },
    {
      "event": "Introducing Virtual Teammates",
      "when": "Sep 29, 2026 · Online",
      "focus": "Launch event for Virtual Teammates",
      "register": "https://www.optimizely.com/field-notes/events/introducing-virtual-teammates/"
    },
    {
      "event": "Breakfast seminar with Sikte AI",
      "when": "Oct 6, 2026 · Oslo",
      "focus": "From SEO to GEO/AEO, agentic CMS",
      "register": "https://www.optimizely.com/field-notes/events/breakfast-seminar-with-sikte/"
    },
    {
      "event": "Personalization at scale — Corinthia Hotels",
      "when": "Oct 7, 2026 · Online",
      "focus": "Seven-agent AI personalization system",
      "register": "https://www.optimizely.com/field-notes/events/ai-personalization-webinar-corinthia-hotels/"
    },
    {
      "event": "Opticon London",
      "when": "Oct 13, 2026 · Barbican Centre, London",
      "focus": "Agentic AI, agentic CMS, agentic experimentation",
      "register": "https://events.optimizely.com/Opticon26London"
    },
    {
      "event": "Opticon Online",
      "when": "Oct 21, 2026 · Virtual",
      "focus": "Keynotes from Alex Atzberger and Seth Godin; product keynote with major announcements",
      "register": "https://www.optimizely.com/opticon-online"
    },
    {
      "event": "Introducing Virtual Teammates (APJ)",
      "when": "Oct 22, 2026 · Online",
      "focus": "Virtual Teammates for APJ",
      "register": "https://www.optimizely.com/field-notes/events/virtual-teammates-APJ/"
    },
    {
      "event": "From AI experiment to operating model — Road Scholar",
      "when": "Oct 27, 2026 · Online",
      "focus": "Secure AI workflows on the Agent Platform",
      "register": "https://www.optimizely.com/field-notes/events/how-to-go-from-an-ai-experiment-to-operating-model/"
    }
  ],
  "royalCyberEvents": [],
  "roadmap": [
    {
      "product": "Optimizely Agent Platform (formerly Opal)",
      "phase": "Now / Next",
      "items": [
        "Voice Mode — hands-free, real-time chat with the Agent Platform",
        "Personalize Opal — per-user tailoring of agent behaviour",
        "Image generation and editing inside the Agent Platform",
        "Human-in-the-loop — native approval checkpoints embedded in workflows",
        "Channel Packs — on-brand campaign asset generation building on Brands"
      ],
      "link": "https://www.optimizely.com/product-updates/ai/"
    },
    {
      "product": "Content Management (CMS)",
      "phase": "Now / Next",
      "items": [
        "Opti ID sign-in for the CMS 13 MCP server (client-secret today)",
        "Further blueprint and multi-layout editing in Visual Builder",
        "Content-model locking and taxonomy/tagging improvements",
        "JavaScript SDK improvements; TinyMCE for SaaS",
        "More Opal content agents beyond Content Model Creation and GEO Schema"
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
        "Next releases: Sep 24 (STS 5.2.2609 / LTS 5.2.2608), then Oct 22, Nov 19, Dec 17",
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
      "phase": "Now / Next",
      "items": [
        "CMS–ODP real-time audiences now on CMS 13 / .NET 10 (shipped Sep 2026)",
        "Opal onboarding agent & integration tools (guided setup)",
        "Opal contextual actions embedded across ODP"
      ],
      "link": "https://www.optimizely.com/product-updates/platform/"
    }
  ],
  "blogs": [
    {
      "title": "Drive Optimizely CMS from Claude Code and Cursor: A Hands-On Look at the CMS 13 MCP Server",
      "why": "Why now: the September 11 Opal.Tools 13.2.0 release shipped the MCP server with almost no independent walkthroughs — developers want setup steps and real use cases.",
      "audience": "Developers, solution architects",
      "difficulty": "Advanced",
      "engagement": 9,
      "uniqueness": 9,
      "priority": 9.0
    },
    {
      "title": "What to Expect at Opticon 2026: The Unshipped Roadmap Items Most Likely to Headline",
      "why": "Why now: Opticon London (Oct 13) and Online (Oct 21) promise major announcements; a pre-event piece captures search traffic and sets up reaction content.",
      "audience": "Marketing leaders, partners, prospects",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 8,
      "priority": 8.5
    },
    {
      "title": "Sub-Agents, Code Steps and Personal Files: Agent Platform Grows Up",
      "why": "Why now: the Sep 13–21 releases turn workflow agents into a real automation runtime — practitioners need to know what changed and how to use it.",
      "audience": "Marketing ops, automation builders",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.5
    },
    {
      "title": "62% Trust Marketing Less Since AI: How to Build Agentic Content Buyers Still Believe",
      "why": "Why now: Optimizely's Sep 22 UK research and Acquia's Sep 14 CMO survey both point to trust and governance as the new AI buying criteria.",
      "audience": "CMOs, content leaders",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 7,
      "priority": 7.5
    },
    {
      "title": "Contentful Is Now Salesforce: What Independent-CMS Buyers Should Evaluate Next",
      "why": "Why now: the Sep 1 acquisition close is prompting headless-CMS customers to reassess vendor lock-in and roadmap risk.",
      "audience": "CMS buyers, solution architects",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "Blueprints and Multi-Layout Experiences in CMS SaaS: A Practical Guide",
      "why": "Why now: the Sep 14 and Sep 22 CMS SaaS releases add multi-layout experiences and Opal-driven blueprints — editors need a how-to.",
      "audience": "Content editors, CMS developers",
      "difficulty": "Beginner–Intermediate",
      "engagement": 7,
      "uniqueness": 7,
      "priority": 7.0
    }
  ],
  "whitepapers": [
    {
      "title": "MCP Everywhere: An Integration Architecture for Optimizely's Inbound and Outbound Agent Connectors",
      "why": "Optimizely now both exposes MCP (CMS 13, Experimentation, Commerce) and consumes it (Braze, Fullstory, Contentful, LinkedIn/OpenAI Ads). Architects need a reference model, including auth and data-residency choices.",
      "audience": "Enterprise architects, IT",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Governing Agentic Marketing: Permissions, Identity and Human-in-the-Loop on the Optimizely Agent Platform",
      "why": "Consumer trust data (62% trust marketing less) and CMO governance gaps make controls the deciding factor. Covers Opti ID Virtual Teammates, permission-aware Commerce tools and RAG, and upcoming approval checkpoints.",
      "audience": "IT/security, marketing leaders",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Benchmarking the Big Four Agentic DXPs After Salesforce–Contentful",
      "why": "The competitive map changed on Sep 1. An updated benchmark across Optimizely, Adobe, Sitecore and Salesforce/Contentful fills a live gap before 2027 RFP season.",
      "audience": "Enterprise buyers, analysts",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    }
  ],
  "linkedin": [
    {
      "title": "Your CMS now talks to Claude Code. Here's what that unlocks.",
      "why": "Short developer-facing post on the CMS 13 MCP server — concrete, new and shareable.",
      "audience": "Developers, architects",
      "engagement": 8,
      "uniqueness": 9
    },
    {
      "title": "Opticon London in 20 days — here's what we're watching",
      "why": "Countdown post to Oct 13, naming the roadmap items (Voice Mode, image generation, human-in-the-loop) most likely to be announced.",
      "audience": "Partners, marketing leaders",
      "engagement": 8,
      "uniqueness": 7
    },
    {
      "title": "62% of consumers trust marketing less because of AI. That's a brief, not a verdict.",
      "why": "Reaction post to Optimizely's Sep 22 UK research, framing quality and governance as the answer.",
      "audience": "CMOs, content leaders",
      "engagement": 8,
      "uniqueness": 7
    },
    {
      "title": "Agents that run code, delegate to sub-agents and remember your files",
      "why": "Plain-language recap of the Sep 13–21 Agent Platform releases.",
      "audience": "Practitioners, marketing ops",
      "engagement": 7,
      "uniqueness": 8
    },
    {
      "title": "Salesforce owns Contentful now. What does that mean for your content stack?",
      "why": "Timely, neutral take on the Sep 1 acquisition to start conversations with headless-CMS buyers.",
      "audience": "CMS buyers, IT leaders",
      "engagement": 7,
      "uniqueness": 7
    }
  ],
  "competitive": [
    {
      "theme": "Headless CMS consolidation",
      "optimizely": "Independent CMS SaaS + CMS 13 PaaS, with blueprints, multi-layout experiences and its own MCP server",
      "competitor": "Salesforce closed ~$1.5B Contentful acquisition (Sep 1) — Contentful becomes Salesforce's 'Headless 360' content layer",
      "opportunity": "Position Optimizely as the vendor-neutral agentic CMS for buyers wary of CRM lock-in"
    },
    {
      "theme": "MCP / agentic access",
      "optimizely": "Outbound MCP servers (CMS 13, Experimentation, Commerce, Analytics) plus inbound Braze, Fullstory, Contentful, LinkedIn/OpenAI Ads connectors",
      "competitor": "Sitecore adding AI generation on any field and a DAM–Scrunch grounding link (early access); Adobe's last major agentic launch was April",
      "opportunity": "Lead with 'works with the agents you already use' — Claude Code, Cursor and third-party MCP"
    },
    {
      "theme": "Agent workflow depth",
      "optimizely": "Sub-agents, workflow Code step, parallel loops, Personal files, RAG over canvases",
      "competitor": "Bloomreach Loomi multi-agent search (Aug); Sitecore Agentic Studio (~20 agents)",
      "opportunity": "Show the automation runtime, not just the agent count"
    },
    {
      "theme": "AI trust and governance",
      "optimizely": "Own UK research (Sep 22); permission-aware Commerce tools and RAG; Brands; human-in-the-loop on roadmap",
      "competitor": "Acquia research (Sep 14): only 41% of CMOs confident governing AI",
      "opportunity": "Own the 'trusted agentic marketing' narrative with data from both studies"
    },
    {
      "theme": "Analyst recognition",
      "optimizely": "Forrester Wave Leader + Customer Favorite, Experience Optimization Q3 2026",
      "competitor": "No new analyst wins for Sitecore, Adobe or Bloomreach found this period",
      "opportunity": "Keep the Forrester proof point in every competitive deal through Opticon"
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Publish the CMS 13 MCP server walkthrough",
      "why": "Shipped Sep 11 with no independent guides yet — a Claude Code / Cursor demo is highly shareable with developers.",
      "priority": 9.0,
      "format": "Technical blog + short video"
    },
    {
      "n": 2,
      "title": "Build the Opticon content kit now",
      "why": "Opticon London (Oct 13) and Online (Oct 21) are the next announcement window — prepare a preview post, live-coverage plan and reaction templates.",
      "priority": 8.5,
      "format": "Blog + LinkedIn series"
    },
    {
      "n": 3,
      "title": "Recap the Sep 13–21 Agent Platform releases",
      "why": "Sub-agents, the Code step and Personal files change what workflow agents can do; customers need a single clear summary.",
      "priority": 8.5,
      "format": "Explainer blog"
    },
    {
      "n": 4,
      "title": "Launch a trust-and-governance angle using the Sep 22 research",
      "why": "Pair Optimizely's 62% trust finding with Acquia's CMO data to lead with governance, not volume.",
      "priority": 8.0,
      "format": "Thought-leadership blog + whitepaper"
    },
    {
      "n": 5,
      "title": "Target Contentful customers after the Salesforce close",
      "why": "Buyers reassessing vendor lock-in are open to an independent-CMS comparison right now.",
      "priority": 7.5,
      "format": "Comparison blog + sales one-pager"
    }
  ],
  "next7": [
    {
      "bold": "Stand up a CMS 13 MCP demo",
      "text": "connecting Claude Code to a sandbox CMS 13 site with client-secret auth, and record it."
    },
    {
      "bold": "Draft the Opticon preview post",
      "text": "and register the team for Opticon London (Oct 13) and Opticon Online (Oct 21)."
    },
    {
      "bold": "Write the Agent Platform release recap",
      "text": "covering sub-agents, the Code step, Personal files and the six new connectors."
    },
    {
      "bold": "Pull stats from the Sep 22 UK AI-trust study",
      "text": "and the Acquia Sep 14 survey for the governance piece."
    },
    {
      "bold": "Check the Configured Commerce Sep 24 release",
      "text": "and add any notable items to next week's sweep."
    },
    {
      "bold": "Schedule the five LinkedIn posts",
      "text": "leading with the CMS MCP hook and the Opticon countdown; promote the Sep 29 Virtual Teammates event."
    }
  ]
};
