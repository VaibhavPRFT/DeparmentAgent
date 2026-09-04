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
  "generated": "September 4, 2026",
  "sub": "A weekly, evidence-led scan of Optimizely product signals, releases, events, and the content angles worth acting on — for content marketers, DevRel leads, solution architects, and product marketers.",
  "tags": [
    {
      "label": "Breakout: Opal becomes Optimizely Agent Platform — Virtual Teammates ship as first-class, Opti ID-carrying users",
      "hot": true
    },
    {
      "label": "Signal window: 90 days (ending Sep 4, 2026)"
    },
    {
      "label": "Focus: Agent Platform Rebrand · Virtual Teammates · Purpose-Built AI Models"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "Opal is now Optimizely Agent Platform — and Virtual Teammates ship as first-class users",
      "body": "Effective September 1, 2026, Optimizely renamed Opal to Optimizely Agent Platform. The rebrand landed alongside the August 25 release of Virtual Teammates — AI agents with their own Opti ID and persistent memory that act as first-class Optimizely users across products. The first five are Chief of Staff, Marketing Analyst, SEO & AI Search Analyst, CRO Manager, and Personalization Strategist, joined by Team Messages (a real-time chat layer with agents and humans) and Brands (automatic on-brand styling for every generated artifact).",
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
      "title": "Purpose-built marketing models flip the RFP conversation",
      "body": "Also on September 1, Optimizely introduced a family of purpose-built, post-trained AI models built specifically for marketing tasks, claiming roughly 10x cost efficiency versus frontier LLMs in early testing. The pitch: strip the general-purpose overhead out of a frontier model and tune for marketing-specific work. Expect 2027 platform-renewal RFPs to start asking \"which model fits this task\" instead of \"which LLM does the vendor use.\"",
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
      "title": "Forrester names Optimizely a Leader — with the top scores in agentic AI",
      "body": "Optimizely was named a Leader and a Customer Favorite in The Forrester Wave: Experience Optimization Solutions, Q3 2026 (August 17), with the highest possible scores in generative AI, agentic AI, and both web and feature experimentation, plus top marks for vision, innovation, roadmap, and partner ecosystem. It's the clearest third-party validation yet for the agentic-experimentation pitch sales teams have been making all year.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 4,
      "title": "The agent rollout reaches Commerce and CMS 13 content ops",
      "body": "The August 27 release added a Restriction Group Creation Agent that builds Configured Commerce product-restriction groups through a wizard instead of hand-built API calls, plus a Page Builder (PaaS) agent and a Content Analysis agent for CMS 13 that turn a document, image, or URL into publish-ready, on-pattern content. Agents are no longer just a chat-window feature — they're showing up inside the commerce and content admin screens people already use.",
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
      "title": "The agentic-DXP race gets three keynote stages in one week",
      "body": "Sitecore's SitecoreAI (Agentic Studio, ~20 agents) and Adobe's agentic Commerce push are both live, and HumanX and DMEXCO — both September 23 — will put \"agentic marketing\" on stage the same week Optimizely's Content and Beyond APAC and Virtual Teammates launch event run. With a Forrester Leader placement and Virtual Teammates now shipped, Optimizely enters that week with fresher proof points than it had a month ago.",
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
      "title": "PIM picks up the shared brand — and a bulk-rename tool",
      "body": "Product Information Management's interface was updated to the unified Optimizely color scheme and logo, and a new Rename Product Number import type lets teams bulk-standardize SKUs from an Excel file. Small on its own, but it confirms PIM is being folded into the same brand, UI, and agent-platform conventions as the rest of the suite rather than left as a legacy acquisition.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    }
  ],
  "releases": [
    {
      "product": "Opal → Optimizely Agent Platform",
      "date": "Sep 1, 2026",
      "highlight": "Opal renamed to Optimizely Agent Platform. Branding change only — no API or workflow changes reported.",
      "source": "support.optimizely.com",
      "type": "Rebrand"
    },
    {
      "product": "Optimizely AI",
      "date": "Sep 1, 2026",
      "highlight": "Purpose-built, post-trained AI models for marketing tasks launched — roughly 10x cost efficiency vs. frontier LLMs in early testing.",
      "source": "optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Optimizely PIM",
      "date": "Sep 2026",
      "highlight": "UI updated to the unified Optimizely color scheme and logo; added a Rename Product Number bulk-import type for SKU standardization.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "Aug 27, 2026",
      "highlight": "Restriction Group Creation agent (Configured Commerce); Page Builder (PaaS) and Content Analysis agents for CMS 13.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Opal",
      "date": "Aug 25, 2026",
      "highlight": "Virtual Teammates GA — Chief of Staff, Marketing Analyst, SEO & AI Search Analyst, CRO Manager, Personalization Strategist — plus Team Messages and Brands.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Optimizely Experimentation",
      "date": "Aug 17, 2026",
      "highlight": "Named a Leader and Customer Favorite in The Forrester Wave: Experience Optimization Solutions, Q3 2026 — top scores in generative AI, agentic AI, web and feature experimentation.",
      "source": "optimizely.com",
      "type": "Analyst recognition"
    },
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
    }
  ],
  "events": [
    {
      "event": "Can Your Website Keep Up?",
      "when": "Sep 9, 2026 · Online",
      "focus": "How your website measures up against seven patterns shaping AI search success",
      "register": "https://www.optimizely.com/field-notes/events/can-your-website-keep-up-what-the-data-says-about-ai-success/"
    },
    {
      "event": "What's new, what's next — Optimizely Commerce Connect",
      "when": "Sep 10, 2026 · Online",
      "focus": "Commerce, customers",
      "register": "https://www.optimizely.com/field-notes/events/whats-new-whats-next--optimizely-commerce-connect/"
    },
    {
      "event": "Content and Beyond APAC",
      "when": "Sep 23, 2026 · Online",
      "focus": "AI, B2B, Commerce",
      "register": "https://www.optimizely.com/field-notes/events/content-and-beyond-APAC/"
    },
    {
      "event": "HumanX 2026 — \"The future of marketing is Agentic\"",
      "when": "Sep 23, 2026 · On-location",
      "focus": "A/B testing, AI, analytics — agentic marketing on stage",
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
      "focus": "AI, B2B, Commerce — launch event for the new Virtual Teammates",
      "register": "https://www.optimizely.com/field-notes/events/introducing-virtual-teammates/"
    }
  ],
  "royalCyberEvents": [],
  "roadmap": [
    {
      "product": "Optimizely Agent Platform (formerly Opal)",
      "phase": "Now / Next",
      "items": [
        "Voice Mode — hands-free, real-time chat with the Agent Platform",
        "More Virtual Teammates beyond the first five (Chief of Staff, Marketing Analyst, SEO & AI Search Analyst, CRO Manager, Personalization Strategist)",
        "Human-in-the-loop — native approval checkpoints embedded in workflows",
        "Channel Packs — deeper on-brand campaign asset generation building on Brands",
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
      "title": "The Agentic DXP Race Hits Two Stages at Once: Optimizely vs. Sitecore, Adobe, and Bloomreach at HumanX and DMEXCO",
      "why": "Why now: Sitecore, Adobe, and Bloomreach have all made agentic announcements, and HumanX and DMEXCO both run September 23. Buyers are actively comparing agent platforms and independent content on the comparison is thin.",
      "audience": "Product marketers, analysts, prospects",
      "difficulty": "Advanced",
      "engagement": 9,
      "uniqueness": 9,
      "priority": 9.0
    },
    {
      "title": "Meet Your First Virtual Teammates: Chief of Staff, CRO Manager, and Three More",
      "why": "Why now: Virtual Teammates went GA August 25 with no independent walkthrough yet — practitioners want to know what each one actually does day to day.",
      "audience": "Marketing ops, practitioners",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 8,
      "priority": 8.5
    },
    {
      "title": "Purpose-Built vs. Frontier: What Optimizely's New Marketing Models Mean for Your Stack",
      "why": "Why now: The September 1 model launch claims 10x cost efficiency and directly reframes how 2027 RFPs will evaluate AI vendors.",
      "audience": "Product marketers, IT buyers",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Opal Is Now Optimizely Agent Platform: What the Rename Actually Signals",
      "why": "Why now: The September 1 rebrand is confusing customers searching for 'Opal' in docs and dashboards. A clear explainer of what changed (branding) and what didn't (APIs, workflows) heads off support tickets.",
      "audience": "Admins, technical marketers",
      "difficulty": "Beginner–Intermediate",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "Reading the Forrester Wave: What 'Leader' Actually Means for Optimizely Buyers",
      "why": "Why now: The August 17 Forrester Wave Leader and Customer Favorite placement is fresh, sales-enablement-ready proof that's underused in current content.",
      "audience": "Solution architects, buyers",
      "difficulty": "Intermediate",
      "engagement": 7,
      "uniqueness": 7,
      "priority": 7.0
    },
    {
      "title": "Restriction Groups Without the API: A First Look at Configured Commerce's New Agent",
      "why": "Why now: The August 27 Restriction Group Creation agent replaces hand-built API calls with a wizard — a concrete time-savings story for B2B commerce admins.",
      "audience": "B2B commerce admins, solution architects",
      "difficulty": "Intermediate",
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
      "title": "Virtual Teammates in the Enterprise: Governance, Identity, and Where Opti ID Fits",
      "why": "Virtual Teammates act as first-class users with their own Opti ID and persistent memory — a new identity and governance surface that IT and security buyers will ask about before rollout.",
      "audience": "IT/security, procurement",
      "difficulty": "Advanced",
      "engagement": 7,
      "uniqueness": 9,
      "priority": 8.0
    },
    {
      "title": "The Economics of Purpose-Built Marketing Models",
      "why": "The claimed 10x cost efficiency needs an independent framework for evaluating cost, quality, and fit — not just a vendor's own benchmark.",
      "audience": "Finance-savvy marketing leaders, IT buyers",
      "difficulty": "Intermediate",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    }
  ],
  "linkedin": [
    {
      "title": "Say hello to Optimizely Agent Platform (you know it as Opal)",
      "why": "A direct rename announcement post, framed as 'same platform, new name' to head off confusion before customers hit it in the docs themselves.",
      "audience": "Marketing leaders, admins",
      "engagement": 8,
      "uniqueness": 7
    },
    {
      "title": "I have a Virtual Teammate now, and yes, it has its own login",
      "why": "A playful hook on Opti ID-carrying agents — Virtual Teammates as first-class users is a genuinely new concept worth explaining simply.",
      "audience": "Practitioners, marketing ops",
      "engagement": 8,
      "uniqueness": 8
    },
    {
      "title": "Forrester just called our AI a Leader — here's the scorecard",
      "why": "Straightforward analyst-recognition post citing the August 17 Forrester Wave Leader and Customer Favorite placement.",
      "audience": "Marketing leaders, buyers",
      "engagement": 7,
      "uniqueness": 6
    },
    {
      "title": "10x cheaper AI, built only for marketing — here's the math",
      "why": "Breaks down the purpose-built model claim from the September 1 launch in plain language.",
      "audience": "Product marketers, IT buyers",
      "engagement": 7,
      "uniqueness": 8
    },
    {
      "title": "HumanX, DMEXCO, and the future of agentic marketing — three weeks, three keynotes",
      "why": "Countdown-style post tying HumanX and DMEXCO (both Sep 23) to Optimizely's own Content and Beyond APAC and Virtual Teammates launch event (Sep 29).",
      "audience": "Practitioners, partners",
      "engagement": 6,
      "uniqueness": 6
    }
  ],
  "competitive": [
    {
      "theme": "Analyst recognition",
      "optimizely": "Forrester Wave Leader + Customer Favorite, Q3 2026 — top scores in generative AI, agentic AI, web and feature experimentation",
      "competitor": "Sitecore, Adobe, and Bloomreach not named Leaders in this Wave",
      "opportunity": "Lead every competitive deal with third-party validation, not just feature claims"
    },
    {
      "theme": "Purpose-built AI economics",
      "optimizely": "Post-trained, marketing-specific models — roughly 10x cost efficiency vs. frontier LLMs in early testing",
      "competitor": "Sitecore, Adobe, and Bloomreach still largely wrapping general-purpose frontier models",
      "opportunity": "Own the cost-and-fit argument, not just the feature-count argument"
    },
    {
      "theme": "Agentic AI / prebuilt agents and teammates",
      "optimizely": "Agent Platform (formerly Opal) Agent Library + Virtual Teammates as first-class, Opti ID-carrying users",
      "competitor": "Sitecore Agentic Studio (~20 agents, SitecoreAI on Azure); Adobe framing storefronts for 'humans and AI agents'",
      "opportunity": "No rival has shipped an agent with its own persistent identity/login yet — a genuinely new differentiator"
    },
    {
      "theme": "MCP / agentic access",
      "optimizely": "MCP servers across Experimentation (remote, open to all customers), Commerce, Analytics, CMS (SaaS)",
      "competitor": "Adobe Commerce Optimizer SaaS enrichment layer; Bloomreach's Loomi agent framework",
      "opportunity": "Own the 'no waitlist, all customers' access story while rivals gate agent features by tier"
    },
    {
      "theme": "Content modeling / GEO for AI discoverability",
      "optimizely": "CMS 13 Content Model Creation, GEO Schema Optimization, Page Builder, and Content Analysis agents; Agent Visibility Analytics",
      "competitor": "Sitecore Agentic Studio content-migration agents; no direct GEO-schema equivalent found for Adobe or Bloomreach",
      "opportunity": "First-mover message: automated GEO schema generation is still a gap for the competitor set"
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Publish the \"Opal is now Optimizely Agent Platform\" explainer this week",
      "why": "The September 1 rename is already live in-product; customers searching docs and dashboards for 'Opal' need a clear, quick answer before support tickets pile up.",
      "priority": 9.0,
      "format": "Explainer blog"
    },
    {
      "n": 2,
      "title": "Ship the Virtual Teammates walkthrough",
      "why": "Virtual Teammates went GA August 25 with no independent write-up yet — start with Chief of Staff and CRO Manager as the two most broadly relevant.",
      "priority": 8.5,
      "format": "How-to blog + short demo video"
    },
    {
      "n": 3,
      "title": "Turn the Forrester Wave Leader nod into a one-pager for active deals",
      "why": "The August 17 Leader and Customer Favorite placement is fresh, credible, and currently sitting unused in sales conversations.",
      "priority": 8.5,
      "format": "Sales one-pager + blog"
    },
    {
      "n": 4,
      "title": "Explain the purpose-built marketing models / cost story for procurement",
      "why": "The September 1 model launch's 10x cost-efficiency claim will come up in every 2027 RFP conversation — get ahead of it with an independent-feeling breakdown.",
      "priority": 8.0,
      "format": "Explainer blog + whitepaper"
    },
    {
      "n": 5,
      "title": "Push registrations for HumanX and DMEXCO",
      "why": "Both run September 23 and put agentic marketing on competitor stages the same week — Optimizely's own APAC and Virtual Teammates events need visibility alongside them.",
      "priority": 7.0,
      "format": "Campaign"
    }
  ],
  "next7": [
    {
      "bold": "Draft the Agent Platform rename explainer",
      "text": "and confirm with support docs that no APIs or workflows actually changed."
    },
    {
      "bold": "Record a short Virtual Teammates demo",
      "text": "covering Chief of Staff and CRO Manager as the two most broadly relevant teammates."
    },
    {
      "bold": "Turn the Forrester Wave Leader placement into a sales one-pager",
      "text": "citing the top scores in generative AI, agentic AI, and experimentation."
    },
    {
      "bold": "Outline the purpose-built-models cost/quality explainer",
      "text": "and fact-check the 10x efficiency claim against Optimizely's own announcement."
    },
    {
      "bold": "Schedule the five LinkedIn posts",
      "text": "lead with the rename announcement and the Virtual Teammate hook."
    },
    {
      "bold": "Confirm HumanX and DMEXCO (Sep 23) session details",
      "text": "and push registrations alongside the Sep 29 Virtual Teammates launch event."
    }
  ]
};
