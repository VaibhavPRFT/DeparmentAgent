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
  "generated": "October 13, 2026",
  "sub": "A weekly, evidence-led scan of Optimizely product signals, releases, events, and the content angles worth acting on — for content marketers, DevRel leads, solution architects, and product marketers.",
  "tags": [
    {
      "label": "Breakout: October Agent Platform release — Brand Packs, Skills Directory, 2 new Virtual Teammates and 7 new agents (Oct 13)",
      "hot": true
    },
    {
      "label": "Signal window: 90 days (ending Oct 13, 2026)"
    },
    {
      "label": "Focus: Brand governance · Skills & agent directory · Opticon London (today) & Opticon Online (Oct 21)"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "Brand Packs make on-brand AI output the default, not a review step",
      "body": "The October 13 Agent Platform release turns each brand's guidelines, templates and brand portal into a single Brand Pack — a skill applied automatically whenever text or images are generated. Image-editor Variants then adapt an approved image for every channel. Together they answer the trust and quality concerns raised in Optimizely's own September UK research, and move brand governance into generation itself.",
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
      "title": "A Skills Directory and unified agent marketplace arrive",
      "body": "More than 20 pre-built marketing skills (competitive positioning, website best practices, report formatting and more) now sit in one directory alongside out-of-the-box agents and Virtual Teammates, where users can find and install them. It shifts the pitch from 'build your own agent' to 'value on day one' — and gives partners a ready catalogue to demo.",
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
      "title": "Virtual Teammates grow to seven — Web Manager and Content Marketer join",
      "body": "Web Manager keeps a site current, compliant and converting; Content Marketer finds content gaps and ties the editorial plan to real audience signals. Seven new directory agents shipped the same day: Eye Tracking Auditor and Smart Campaign Design (Campaign), Experiment Value Estimator (Web and Feature Experimentation), List Creation and Promotion Creation (Configured Commerce), Product Catalog Auditor (Commerce Connect) and WCAG Compliance Auditor (CMS SaaS).",
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
      "title": "Experimentation gets a CFO-ready number",
      "body": "The new Experiment Value Estimator agent produces a stakeholder-ready report on the projected annualized dollar impact of rolling out a winning variation. Paired with the Academy's 'Proving the Value of your Experimentation Programme' content, it gives experimentation teams a direct answer to budget scrutiny.",
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
      "rank": 5,
      "title": "Connectors reach ads, sales intelligence, SEO and tag management",
      "body": "October adds connectors for Slack, 6sense and SEMrush, a Google Tag Manager connector (Oct 6) that audits and publishes container versions, and write access for LinkedIn Ads (campaign groups, campaigns, creatives, sponsored posts). Agents can now act on ad performance, account intelligence, SEO and tagging data, not just report on it.",
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
      "title": "Governance and AI-crawler controls show up across the stack",
      "body": "Private executions (Oct 5) keep a specialized agent's logs and outputs visible only to the user who ran it. DXP sites can now use Cloudflare's AI crawler controls (Sep 28) to block AI training while keeping search access. CMS SaaS added scoped REST API tokens and tighter upload security (Oct 7–9). Enterprise buyers asking 'who sees what' now get concrete answers.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 7,
      "title": "Competitors push AI visibility and agentic marketing hubs",
      "body": "Contentstack launched Canoe (Oct 1), an AI-visibility tool with a free plan and remote MCP server that works even for non-Contentstack brands. Bloomreach was recognized in the 2026 Gartner Magic Quadrant for Multichannel Marketing Hubs, and Salesforce lists Agentforce Campaign Agent and MCP-based Headless Marketing as GA in October, with Contentful as its CMS. Sitecore Symposium and Adobe MAX (both Nov 10–12) are next.",
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
      "product": "Agent Platform",
      "date": "Oct 13, 2026",
      "highlight": "Brand Packs (guidelines, templates and brand portal applied automatically to all text and image output) and image-editor Variants for per-channel resizing.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Agent Platform",
      "date": "Oct 13, 2026",
      "highlight": "Skills Directory with 20+ pre-built marketing skills, in a unified directory with agents and Virtual Teammates.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Virtual Teammates",
      "date": "Oct 13, 2026",
      "highlight": "Web Manager and Content Marketer join the original five.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Agent Directory",
      "date": "Oct 13, 2026",
      "highlight": "Seven new agents: Eye Tracking Auditor, Smart Campaign Design, Experiment Value Estimator, List Creation, Promotion Creation, Product Catalog Auditor, WCAG Compliance Auditor.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Agent Platform connectors",
      "date": "Oct 6–13, 2026",
      "highlight": "Google Tag Manager connector (Oct 6); Slack, 6sense and SEMrush connectors; LinkedIn Ads gains create/update for campaigns, creatives and sponsored posts.",
      "source": "support.optimizely.com / partner email",
      "type": "Enhancement"
    },
    {
      "product": "Agent Platform",
      "date": "Oct 5, 2026",
      "highlight": "Private executions: a specialized agent's run logs and outputs visible only to the user who triggered it.",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Agent Platform",
      "date": "Sep 30, 2026",
      "highlight": "Underlying models for the inference levels updated (Optimizely's October video cites Claude Sonnet 5).",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS (SaaS)",
      "date": "Oct 7–9, 2026",
      "highlight": "DAM rendition selection with usage tracking, in-editor published-page view, scoped REST API tokens, stronger upload security, faster Graph indexing.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Oct 5, 2026",
      "highlight": "CMS.Core 13.3.0: faster Scheduled Jobs and Graph full sync. Upgraded CMS 12 sites must grant SearchIndexer read access for Graph.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 / DXP",
      "date": "Sep 28, 2026",
      "highlight": "Cloudflare AI crawler controls — e.g. disallow AI training while keeping search access.",
      "source": "support.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS SaaS JS SDK",
      "date": "Sep 24, 2026",
      "highlight": "Forms support GA, Astro support, cms-cli 3.0.0 — with breaking changes (property type constraints; Rich Text returns JSON by default).",
      "source": "support.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Configured Commerce",
      "date": "Sep 24, 2026",
      "highlight": "5.2.2609: Admin Console accessibility, unified multilingual URLs, .well-known hosting, Search v3 failover. Payment Service customers must upgrade by Dec 31, 2026.",
      "source": "docs.optimizely.com",
      "type": "GA release"
    }
  ],
  "events": [
    {
      "event": "Opticon London",
      "when": "Oct 13, 2026 · Barbican Centre, London",
      "focus": "Agentic AI, CMS and experimentation",
      "register": "https://www.optimizely.com/field-notes/opticon/london"
    },
    {
      "event": "Agents at work with Valantic and NoA Ignite",
      "when": "Oct 20, 2026 · Online",
      "focus": "Partner AI-agent use cases (DMEXCO recap)",
      "register": "https://www.optimizely.com/field-notes/events/agents-at-work-with-valantic-noa-ignite/"
    },
    {
      "event": "Opticon Online",
      "when": "Oct 21, 2026 · Virtual",
      "focus": "Alex Atzberger keynote; product keynote \"One platform. Three trails.\"; Seth Godin",
      "register": "https://www.optimizely.com/field-notes/opticon/online"
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
    },
    {
      "event": "Common Ground Boston",
      "when": "Oct 28, 2026 · Boston",
      "focus": "Customer half-day: Virtual Teammates; B2B, B2C and regulated-industry workshops",
      "register": "https://www.optimizely.com/field-notes/events/common-ground-boston/"
    },
    {
      "event": "Academy live: Meet your Virtual Teammates (Ali Hart)",
      "when": "Oct 29, 2026 · Online · 8–9 PM GMT+6",
      "focus": "Virtual Teammates",
      "register": "https://academy.optimizely.com/student/page/3600718-meet-your-virtual-teammates"
    },
    {
      "event": "Personalization at scale — Corinthia Hotels",
      "when": "Nov 5, 2026 · Online",
      "focus": "Seven-agent AI personalization system",
      "register": "https://www.optimizely.com/field-notes/events/corinthia-hotels-personalization-at-scale/"
    },
    {
      "event": "Academy live: Agents in Experimentation (Daniel Rathke)",
      "when": "Nov 5, 2026 · Online · 9–10 PM GMT+6",
      "focus": "AI agents for experimentation",
      "register": "https://academy.optimizely.com/student/page/3635805-agents-in-experimentation"
    },
    {
      "event": "Academy live: Choosing the Right Metrics for Your Experiments (Sam Pointing)",
      "when": "Nov 17, 2026 · Online · 9–10 PM GMT+6",
      "focus": "Experiment metrics",
      "register": "https://academy.optimizely.com/student/page/3635892-choosing-the-right-metrics-for-your-experiments"
    },
    {
      "event": "Academy live: Optimizely Agent for Feature Experimentation (Matjaz Pirnovar)",
      "when": "Nov 18, 2026 · Online · 9–10 PM GMT+6",
      "focus": "Feature Experimentation agent",
      "register": "https://academy.optimizely.com/student/page/3664251-optimizely-agent-for-feature-experimentation"
    }
  ],
  "royalCyberEvents": [
    {
      "event": "From Digital Complexity to Connected Experiences with Optimizely — Royal Cyber, JE Dunn & Optimizely",
      "when": "Oct 28, 2026 · Live webinar · 12:00 PM CDT",
      "focus": "JE Dunn's transformation journey, Optimizely content, personalization and customer engagement, Royal Cyber's implementation approach and accelerators, solution walkthrough. Speakers: Tracy Silverberg (Optimizely), Mark Neill (JE Dunn), Mahaveer Amudhachandran (Royal Cyber)",
      "register": "https://www.royalcyber.com/webinar/digital-experience-optimizely/"
    }
  ],
  "roadmap": [
    {
      "product": "Optimizely Agent Platform (formerly Opal)",
      "phase": "Now / Next",
      "items": [
        "Voice Mode — hands-free, real-time chat with the Agent Platform",
        "Human-in-the-loop — native approval checkpoints embedded in workflows",
        "Messaging and further channel capabilities building on Brand Packs",
        "More Virtual Teammates beyond the current seven",
        "Shipped Oct 13: Brand Packs, Variants, Skills Directory, Web Manager & Content Marketer"
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
        "Next releases: Oct 22 (5.2.2610 STS), Nov 19, Dec 17 — Payment Service customers must be on 5.2.2609+ by Dec 31, 2026",
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
      "title": "Brand Packs Explained: Making Every AI-Generated Asset On-Brand by Default",
      "why": "Why now: shipped Oct 13 and directly addresses the #1 objection to generative marketing — off-brand, low-quality output.",
      "audience": "Brand managers, content leaders",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 9,
      "priority": 9.0
    },
    {
      "title": "Opticon London Recap: What Was Announced and What It Means for Your Roadmap",
      "why": "Why now: Opticon London is today and Opticon Online follows Oct 21 — recap content captures peak search interest.",
      "audience": "Marketing leaders, customers, prospects",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 8,
      "priority": 8.5
    },
    {
      "title": "Meet Web Manager and Content Marketer: The Newest Virtual Teammates",
      "why": "Why now: two new teammates on Oct 13 with no independent walkthrough yet.",
      "audience": "Marketing ops, web teams",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.5
    },
    {
      "title": "Putting a Dollar Figure on Experiments with the Experiment Value Estimator",
      "why": "Why now: new Oct 13 agent gives experimentation teams a CFO-ready ROI story.",
      "audience": "Experimentation leads, product managers",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "20+ Skills on Day One: A Tour of the Agent Platform Skills Directory",
      "why": "Why now: the new directory changes how teams start with agents — useful for both customers and prospects.",
      "audience": "Practitioners, admins",
      "difficulty": "Beginner–Intermediate",
      "engagement": 8,
      "uniqueness": 7,
      "priority": 7.5
    },
    {
      "title": "Configured Commerce Payment Service Customers: Your Dec 31 Upgrade Checklist",
      "why": "Why now: Spreedly's iFrame retirement forces an upgrade to 5.2.2609+ by Dec 31 — a time-bound, high-intent topic.",
      "audience": "B2B commerce admins, developers",
      "difficulty": "Intermediate",
      "engagement": 7,
      "uniqueness": 8,
      "priority": 7.5
    }
  ],
  "whitepapers": [
    {
      "title": "Governed Generative Marketing: Brand Packs, Private Executions and Permission-Aware Agents",
      "why": "Combines the October releases into one enterprise governance story for IT, legal and brand stakeholders.",
      "audience": "IT/security, brand and legal",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Agentic Accessibility: Using the WCAG Compliance Auditor and Web Manager at Scale",
      "why": "Accessibility compliance is a hard deadline for many enterprises; two new Oct 13 agents make it automatable.",
      "audience": "Web leaders, compliance teams",
      "difficulty": "Intermediate",
      "engagement": 7,
      "uniqueness": 9,
      "priority": 8.0
    },
    {
      "title": "AI Visibility in 2027: Optimizely GEO Tools vs. Contentstack Canoe and Salesforce Palmata",
      "why": "AEO/GEO is the new competitive front; buyers need an independent comparison.",
      "audience": "Enterprise buyers, SEO leaders",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    }
  ],
  "linkedin": [
    {
      "title": "Live from Opticon London: the three announcements that matter",
      "why": "Real-time recap post from today's event.",
      "audience": "Customers, partners, prospects",
      "engagement": 9,
      "uniqueness": 7
    },
    {
      "title": "Your brand guidelines are now an AI skill",
      "why": "Simple hook on Brand Packs — on-brand output by default.",
      "audience": "Brand and content leaders",
      "engagement": 8,
      "uniqueness": 8
    },
    {
      "title": "Our team just got two new (virtual) colleagues",
      "why": "Playful intro to Web Manager and Content Marketer.",
      "audience": "Marketing ops, practitioners",
      "engagement": 8,
      "uniqueness": 7
    },
    {
      "title": "What's that winning test actually worth? Now there's an agent for that.",
      "why": "Experiment Value Estimator hook for experimentation leaders.",
      "audience": "Experimentation and product leaders",
      "engagement": 7,
      "uniqueness": 8
    },
    {
      "title": "Join us online for Opticon on Oct 21",
      "why": "Promote Opticon Online and the 'One platform. Three trails.' product keynote.",
      "audience": "Customers, prospects",
      "engagement": 6,
      "uniqueness": 6
    }
  ],
  "competitive": [
    {
      "theme": "Brand governance for AI output",
      "optimizely": "Brand Packs + Variants apply guidelines automatically to all text and image output",
      "competitor": "Salesforce Agentforce Campaign Agent (GA Oct); Sitecore AI generation on any field",
      "opportunity": "Lead with 'on-brand by default' — governance built into generation, not bolted on"
    },
    {
      "theme": "Prebuilt agents and skills",
      "optimizely": "7 Virtual Teammates, 20+ skills, unified directory, 7 new agents on Oct 13",
      "competitor": "Sitecore Agentic Studio (~20 agents); Bloomreach Loomi",
      "opportunity": "Show breadth across CMS, Commerce, Experimentation and Campaign in one directory"
    },
    {
      "theme": "AI visibility / AEO",
      "optimizely": "GEO Schema agent, Cloudflare AI crawler controls, Agent Visibility Analytics",
      "competitor": "Contentstack Canoe (Oct 1, free tier + MCP); Salesforce 'Palmata from Contentful'",
      "opportunity": "Answer Canoe quickly with a GEO/AEO proof piece for Optimizely customers"
    },
    {
      "theme": "Analyst recognition",
      "optimizely": "Forrester Wave Experience Optimization Q3 2026 Leader + Customer Favorite",
      "competitor": "Bloomreach in Gartner MQ for Multichannel Marketing Hubs (Sep 22)",
      "opportunity": "Keep Forrester proof front and centre through Opticon and year-end deals"
    },
    {
      "theme": "Event calendar",
      "optimizely": "Opticon London (Oct 13), Opticon Online (Oct 21), Common Ground Boston (Oct 28)",
      "competitor": "Sitecore Symposium and Adobe MAX (both Nov 10–12)",
      "opportunity": "Publish Opticon follow-ups before competitor events reset the conversation"
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Publish the Opticon London recap within 48 hours",
      "why": "Peak interest is now; update it after the Oct 21 Opticon Online product keynote.",
      "priority": 9.0,
      "format": "Blog + LinkedIn series"
    },
    {
      "n": 2,
      "title": "Ship the Brand Packs explainer and demo",
      "why": "The most customer-relevant Oct 13 release and a direct answer to AI-quality objections.",
      "priority": 9.0,
      "format": "Explainer blog + short video"
    },
    {
      "n": 3,
      "title": "Update Virtual Teammates enablement for Web Manager and Content Marketer",
      "why": "Partner materials cover the original five; clients will ask about the new two.",
      "priority": 8.5,
      "format": "Internal enablement + demo"
    },
    {
      "n": 4,
      "title": "Contact Configured Commerce Payment Service clients about the Dec 31 upgrade",
      "why": "Mandatory upgrade to 5.2.2609+ — a service opportunity and a risk if missed.",
      "priority": 8.5,
      "format": "Client advisory email + checklist"
    },
    {
      "n": 5,
      "title": "Build a Skills Directory starter pack for client demos",
      "why": "20+ prebuilt skills give a 'value on day one' story for prospects.",
      "priority": 7.5,
      "format": "Demo script + one-pager"
    }
  ],
  "next7": [
    {
      "bold": "Capture Opticon London announcements today",
      "text": "and draft the recap post; confirm against Optimizely's press releases once published."
    },
    {
      "bold": "Register the team for Opticon Online (Oct 21)",
      "text": "and plan a follow-up post on the 'One platform. Three trails.' product keynote."
    },
    {
      "bold": "Set up a Brand Pack for a sandbox brand",
      "text": "and record a short demo with Variants."
    },
    {
      "bold": "Try Web Manager, Content Marketer and the WCAG Compliance Auditor",
      "text": "on a demo site; note results for client conversations."
    },
    {
      "bold": "Email Configured Commerce Payment Service clients",
      "text": "about the Dec 31, 2026 upgrade deadline (5.2.2609+)."
    },
    {
      "bold": "Share the October release video with the delivery team",
      "text": "(optimizely.com/field-notes/videos/whats-new-in-optimizely-agent-platform-october-2026)."
    }
  ]
};
