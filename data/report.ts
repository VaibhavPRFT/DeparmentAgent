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
  "generated": "November 2, 2026",
  "sub": "A weekly, evidence-led scan of Optimizely product signals, releases, events, and the content angles worth acting on — for content marketers, DevRel leads, solution architects, and product marketers.",
  "tags": [
    {
      "label": "Action required: Node.js security advisory — redeploy DXP sites and upgrade Configured Commerce (updated Oct 27)",
      "hot": true
    },
    {
      "label": "Payment Service notice updated Oct 28: LTS path 5.2.2608.722+lts, deadline Dec 31, 2027"
    },
    {
      "label": "Signal window: 90 days (ending Nov 2, 2026)"
    },
    {
      "label": "Focus: Platform security · Payment Service migration · AEM & Siteimprove MCP connectors · Agent-ready websites"
    }
  ],
  "trends": [
    {
      "rank": 1,
      "title": "Node.js vulnerabilities trigger a platform-wide patch cycle",
      "body": "Node.js patched multiple vulnerabilities across its 22.x, 24.x and 26.x lines, and Optimizely began a platform-wide review on Oct 22 (advisory updated Oct 27). Optimizely rates the Brotli overflow bug High but reports no evidence of exploitation. Most SaaS products are patched automatically; DXP (CMS and Commerce Connect) customers must deploy a newly named or versioned package to force a fresh container build, Node.js 18/20 sites must first move to Node 22 or 24, and Configured Commerce must upgrade to 5.2.2610.487+sts or 5.2.2608.730+lts. Optimizely Desktop gets no fixes and is deprecated Dec 31, 2026.",
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
      "rank": 2,
      "title": "Payment Service gets an LTS path and a later deadline",
      "body": "Payment Service is moving card capture from Spreedly's legacy iFrame to the Spreedly Web Checkout SDK, which adds server-signed tokenization sessions plus SRI and CSP support. The Oct 28 notice names 5.2.2608.722+lts or newer as the required version and sets the deadline at Dec 31, 2027 — replacing the earlier '5.2.2609+ by Dec 31, 2026' guidance. Spreedly stopped updating the iFrame on Oct 31, 2026 and retires it in 2028, so Optimizely still advises upgrading now. Merchant and gateway configurations carry over automatically.",
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
      "rank": 3,
      "title": "Agents now work inside other vendors' stacks — AEM and Siteimprove",
      "body": "The Agent Platform added a Siteimprove remote MCP connector (Oct 19) that checks pages for accessibility issues and suggests WCAG-based fixes, and an Adobe Experience Manager remote MCP connector in beta (Oct 27) that lets agents manage assets, pages and launches, check brand governance and troubleshoot CDN and replication issues. Optimizely's agents can now sell into mixed or Adobe-led estates, not just Optimizely CMS customers.",
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
      "rank": 4,
      "title": "Agent governance tightens: clearer tiers and private sub-agent logs",
      "body": "On Oct 28 sub-agent tiers were renamed from Deep/Fast/Mini to Advanced/Standard/Simple, each with a description, and sub-agent execution logs became private to the person who started the conversation — extending the Oct 5 private executions. Underlying models for Mark's inference levels were updated again on Oct 16. Admins get plainer cost/quality choices and fewer data-visibility questions from legal.",
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
      "title": "CMS 13 settles into a fast patch cadence",
      "body": "CMS.Core 13.4.0 (Oct 15) added a Preview button in Visual Builder, DAM image rendition selection and ImageSharp 3.2.0; 13.4.1 (Oct 26) fixed culture-specific property and inline-block save issues. Forms.Samples 5.0.0 (Oct 20) brings CMS 13 support on .NET 10. For teams mid-upgrade from CMS 12, the target is moving every couple of weeks — pin versions and plan regression passes.",
      "flags": [
        {
          "kind": "ent",
          "label": "Enterprise relevance"
        }
      ]
    },
    {
      "rank": 6,
      "title": "'Agent-ready websites' and agentic personalization lead Optimizely's agenda",
      "body": "Optimizely's November–December webinars focus on autonomous personalization (Corinthia Hotels, Nov 5), agentic ABM ('No account left behind', Nov 19) and how to build a website AI agents can find, read, trust and buy from (Dec 3). This builds on Opticon's WebMCP preview and GEO tooling — and opens room for practical CMS 13 implementation content from partners.",
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
      "rank": 7,
      "title": "Competitor events reset the conversation next week",
      "body": "Sitecore Symposium and Adobe MAX both run Nov 10–12, following Contentstack's Canoe AI-visibility launch (Oct 1) and Salesforce's October Agentforce Campaign Agent GA. Optimizely's October releases — Brand Packs, the Skills Directory, seven Virtual Teammates and now an AEM connector — need to be in market before those announcements land.",
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
      "product": "Security advisory — Node.js",
      "date": "Oct 22–27, 2026",
      "highlight": "Node.js 22/24/26 vulnerabilities (Brotli overflow rated High; no evidence of exploitation). DXP: deploy a new package name/version to rebuild containers; move off Node 18/20. Configured Commerce: upgrade to 5.2.2610.487+sts or 5.2.2608.730+lts. SaaS patched automatically.",
      "source": "support.optimizely.com",
      "type": "Security advisory"
    },
    {
      "product": "Configured Commerce — Payment Service",
      "date": "Oct 28, 2026 (updated)",
      "highlight": "Move to Spreedly Web Checkout SDK: upgrade to 5.2.2608.722+lts or newer by Dec 31, 2027. iFrame updates stopped Oct 31, 2026; retired 2028. Configurations carry over.",
      "source": "docs.optimizely.com",
      "type": "Notice"
    },
    {
      "product": "Agent Platform",
      "date": "Oct 28, 2026",
      "highlight": "Sub-agent tiers renamed Advanced / Standard / Simple (were Deep / Fast / Mini); sub-agent execution logs private to the conversation owner.",
      "source": "docs.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Agent Platform connectors",
      "date": "Oct 27, 2026",
      "highlight": "Adobe Experience Manager remote MCP connector — manage assets, pages and launches, check brand governance, troubleshoot CDN/replication.",
      "source": "docs.optimizely.com",
      "type": "Beta"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Oct 26, 2026",
      "highlight": "CMS.Core 13.4.1: bug fixes for culture-specific properties, Cms.Contracts.V1 API, and inline-block move/remove saves.",
      "source": "docs.optimizely.com",
      "type": "Bug fix"
    },
    {
      "product": "Configured Commerce",
      "date": "Oct 22, 2026",
      "highlight": "October STS release 5.2.2610.481+sts (Node.js-patched build: 5.2.2610.487+sts).",
      "source": "docs.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Oct 20, 2026",
      "highlight": "EPiServer.Forms.Samples 5.0.0: CMS 13 support, Date time and reCAPTCHA elements, Submitted Form audience criteria; .NET 10, Forms 6.0.1+.",
      "source": "docs.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Agent Platform connectors",
      "date": "Oct 19, 2026",
      "highlight": "Siteimprove remote MCP connector — page accessibility checks with WCAG-based fix suggestions.",
      "source": "docs.optimizely.com",
      "type": "GA release"
    },
    {
      "product": "Agent Platform",
      "date": "Oct 16, 2026",
      "highlight": "Underlying models for Mark's inference levels updated for response quality.",
      "source": "docs.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "CMS 13 (PaaS)",
      "date": "Oct 15, 2026",
      "highlight": "CMS.Core 13.4.0: Visual Builder Preview button, DAM image rendition selection, ImageSharp 3.2.0.",
      "source": "docs.optimizely.com",
      "type": "Enhancement"
    },
    {
      "product": "Agent Platform",
      "date": "Oct 13, 2026",
      "highlight": "Brand Packs and image Variants; Skills Directory (20+ skills); Web Manager and Content Marketer Virtual Teammates; seven new directory agents incl. Experiment Value Estimator and WCAG Compliance Auditor; LinkedIn Ads write tools.",
      "source": "docs.optimizely.com",
      "type": "GA release"
    }
  ],
  "events": [
    {
      "event": "Personalization at scale — Corinthia Hotels",
      "when": "Nov 5, 2026 · Online",
      "focus": "Seven-agent AI personalization system for one-to-one experiences",
      "register": "https://www.optimizely.com/field-notes/events/corinthia-hotels-personalization-at-scale/"
    },
    {
      "event": "Academy live: Agents in Experimentation (Daniel Rathke)",
      "when": "Nov 5, 2026 · Online · 10–11 AM EST",
      "focus": "AI agents for experimentation",
      "register": "https://academy.optimizely.com/student/page/3635805-agents-in-experimentation"
    },
    {
      "event": "Partner Sales Inspiration",
      "when": "Nov 9, 2026 · Villa Copenhagen · 1:00–5:30 PM",
      "focus": "Partner sales day (Denmark)",
      "register": "https://www.optimizely.com/field-notes/events/partner-day-dk/"
    },
    {
      "event": "Academy live: Segmentation in Optimizely Data Platform (Matthew Nonnamaker)",
      "when": "Nov 10, 2026 · Online · 11 AM–12 PM EST",
      "focus": "ODP segmentation",
      "register": "https://academy.optimizely.com/student/page/2472049-segmentation-in-optimizely-data-platform-odp"
    },
    {
      "event": "Academy live: Choosing the Right Metrics for Your Experiments (Sam Pointing)",
      "when": "Nov 17, 2026 · Online · 10–11 AM EST",
      "focus": "Experiment metrics",
      "register": "https://academy.optimizely.com/student/page/3635892-choosing-the-right-metrics-for-your-experiments"
    },
    {
      "event": "Academy live: Optimizely Agent for Feature Experimentation (Matjaz Pirnovar)",
      "when": "Nov 18, 2026 · Online · 10–11 AM EST",
      "focus": "Feature Experimentation agent",
      "register": "https://academy.optimizely.com/student/page/3664251-optimizely-agent-for-feature-experimentation"
    },
    {
      "event": "No account left behind",
      "when": "Nov 19, 2026 · Online",
      "focus": "Agentic personalization framework for top accounts — tailored research, messaging and experiences",
      "register": "https://www.optimizely.com/field-notes/events/no-account-left-behind/"
    },
    {
      "event": "How to build an agent-ready website",
      "when": "Dec 3, 2026 · Online",
      "focus": "Making a site AI agents can find, read, trust and buy from",
      "register": "https://www.optimizely.com/field-notes/events/agent-ready-website-webinar/"
    },
    {
      "event": "Academy live: Going Agentic with Experimentation",
      "when": "Feb 15, 2027 · Online · 10–11 AM EST",
      "focus": "Agentic experimentation",
      "register": "https://academy.optimizely.com/student/page/3768254-going-agentic-with-experimentation"
    }
  ],
  "royalCyberEvents": [],
  "roadmap": [
    {
      "product": "Optimizely Agent Platform (formerly Opal)",
      "phase": "Now / Next",
      "items": [
        "Voice Mode — hands-free, real-time chat with the Agent Platform",
        "Human-in-the-loop — native approval checkpoints embedded in workflows",
        "AEM remote MCP connector moving from beta toward GA",
        "More Virtual Teammates beyond the current seven",
        "Shipped Oct 16–28: model update, Siteimprove & AEM (beta) connectors, Advanced/Standard/Simple tiers, private sub-agent logs"
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
        "Shipped Oct 15–26: CMS.Core 13.4.0 / 13.4.1, Forms.Samples 5.0.0 for CMS 13"
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
        "Next releases: Nov 19 (5.2.2611 STS) and Dec 17 (5.2.2612 STS) — dates may shift",
        "Node.js security: upgrade to 5.2.2610.487+sts or 5.2.2608.730+lts now",
        "Payment Service → Spreedly Web Checkout SDK: 5.2.2608.722+lts or newer by Dec 31, 2027",
        "Buy-now-pay-later payments (Klarna, Afterpay, Affirm) via a single toggle",
        "Cloudflare for SaaS (Orange-to-Orange); website-level Search Service; Datadog in Mission Control"
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
        "Optimizely Desktop deprecated Dec 31, 2026 — move to the Visual Editor",
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
      "title": "Optimizely Node.js Security Advisory: What DXP and Configured Commerce Teams Must Do Now",
      "why": "Why now: advisory updated Oct 27; DXP sites need a fresh container build and Configured Commerce needs a patched version — clear, urgent search intent.",
      "audience": "Developers, platform owners, IT/security",
      "difficulty": "Intermediate",
      "engagement": 9,
      "uniqueness": 9,
      "priority": 9.0
    },
    {
      "title": "Payment Service and the Spreedly Web Checkout SDK: LTS Upgrade Path and the Dec 31, 2027 Deadline",
      "why": "Why now: the Oct 28 notice changed the version and deadline — earlier guidance (5.2.2609+ by Dec 31, 2026) is out of date.",
      "audience": "B2B commerce admins, developers",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Optimizely Agents Inside Adobe AEM and Siteimprove: What the New MCP Connectors Do",
      "why": "Why now: Oct 19 and Oct 27 connectors, with no independent walkthrough — and Adobe MAX is Nov 10–12.",
      "audience": "Martech leaders, solution architects",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Building an Agent-Ready Website on Optimizely CMS 13",
      "why": "Why now: Optimizely's Dec 3 webinar will drive search interest; partners can own the hands-on implementation angle.",
      "audience": "Developers, digital leaders",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "CMS 13.4: Visual Builder Preview, DAM Renditions and What to Test Before You Upgrade",
      "why": "Why now: 13.4.0 and 13.4.1 shipped in October; teams moving from CMS 12 want a practical checklist.",
      "audience": "CMS developers, editors",
      "difficulty": "Intermediate",
      "engagement": 7,
      "uniqueness": 7,
      "priority": 7.5
    },
    {
      "title": "Brand Packs Explained: Making Every AI-Generated Asset On-Brand by Default",
      "why": "Still timely: Oct 13 release and the strongest answer to AI-quality objections ahead of competitor events.",
      "audience": "Brand managers, content leaders",
      "difficulty": "Intermediate",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 7.5
    }
  ],
  "whitepapers": [
    {
      "title": "Patch-Ready Optimizely: Runtime and Release Governance for DXP and Configured Commerce",
      "why": "The Node.js advisory and Payment Service notice show why teams need a plan for runtimes, LTS vs STS releases and redeploys.",
      "audience": "IT leaders, platform owners",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 9,
      "priority": 8.5
    },
    {
      "title": "Governed Generative Marketing: Brand Packs, Private Logs and Permission-Aware Agents",
      "why": "October releases (Brand Packs, private executions, private sub-agent logs) add up to one enterprise governance story.",
      "audience": "IT/security, brand and legal",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    },
    {
      "title": "Agent-Ready Experiences: WebMCP, GEO and AI Visibility on Optimizely vs. Contentstack Canoe",
      "why": "AEO/GEO and agent commerce are the new competitive front; buyers need an independent view.",
      "audience": "Enterprise buyers, SEO leaders",
      "difficulty": "Advanced",
      "engagement": 8,
      "uniqueness": 8,
      "priority": 8.0
    }
  ],
  "linkedin": [
    {
      "title": "Running Optimizely on DXP? Redeploy this week.",
      "why": "Short, practical advisory on the Node.js patch — new package version, Node 22/24.",
      "audience": "Developers, platform owners",
      "engagement": 8,
      "uniqueness": 8
    },
    {
      "title": "The Payment Service deadline moved — here's why you still shouldn't wait",
      "why": "Clarifies the new Dec 31, 2027 date and the Oct 31 iFrame freeze.",
      "audience": "B2B commerce leaders",
      "engagement": 7,
      "uniqueness": 9
    },
    {
      "title": "Optimizely's agents now work inside Adobe AEM",
      "why": "Surprising hook on the AEM MCP connector beta, timed before Adobe MAX.",
      "audience": "Martech leaders, Adobe customers",
      "engagement": 9,
      "uniqueness": 8
    },
    {
      "title": "Before Sitecore Symposium and Adobe MAX: what Optimizely shipped in October",
      "why": "Roundup that frames the competitive week.",
      "audience": "Customers, prospects",
      "engagement": 8,
      "uniqueness": 7
    },
    {
      "title": "Is your website ready for AI agents? Join Optimizely on Dec 3",
      "why": "Promote the agent-ready website webinar with a Royal Cyber point of view.",
      "audience": "Digital leaders, prospects",
      "engagement": 7,
      "uniqueness": 6
    }
  ],
  "competitive": [
    {
      "theme": "Cross-platform agents",
      "optimizely": "AEM remote MCP connector (beta, Oct 27) and Siteimprove connector (Oct 19)",
      "competitor": "Adobe MAX (Nov 10–12); Contentstack Canoe works for non-Contentstack brands",
      "opportunity": "Position Optimizely agents as useful even in Adobe-led estates — a land-and-expand path"
    },
    {
      "theme": "Brand governance for AI output",
      "optimizely": "Brand Packs + Variants apply guidelines automatically to all text and image output",
      "competitor": "Salesforce Agentforce Campaign Agent (GA Oct); Sitecore AI generation on any field",
      "opportunity": "Lead with 'on-brand by default' — governance built into generation, not bolted on"
    },
    {
      "theme": "Platform security posture",
      "optimizely": "Public Node.js advisory with per-product actions; SaaS auto-patched",
      "competitor": "Every Node-based DXP/headless stack faces the same Node.js patches",
      "opportunity": "Use transparent remediation guidance as a trust signal in enterprise deals"
    },
    {
      "theme": "AI visibility / agent-ready sites",
      "optimizely": "GEO Schema agent, WebMCP preview, Cloudflare AI crawler controls; Dec 3 webinar",
      "competitor": "Contentstack Canoe (free tier + MCP); Salesforce 'Palmata from Contentful'",
      "opportunity": "Publish an agent-ready CMS 13 implementation guide before Dec 3"
    },
    {
      "theme": "Event calendar",
      "optimizely": "Corinthia Hotels (Nov 5), No account left behind (Nov 19), Agent-ready website (Dec 3)",
      "competitor": "Sitecore Symposium and Adobe MAX (both Nov 10–12)",
      "opportunity": "Ship October-release content before Nov 10 so competitor news doesn't bury it"
    }
  ],
  "actions": [
    {
      "n": 1,
      "title": "Remediate the Node.js advisory across client estates",
      "why": "DXP sites need a new-version redeploy (and Node 22/24); Configured Commerce needs 5.2.2610.487+sts or 5.2.2608.730+lts.",
      "priority": 9.5,
      "format": "Client advisory + delivery tickets"
    },
    {
      "n": 2,
      "title": "Correct the Payment Service guidance sent to Configured Commerce clients",
      "why": "Earlier messaging said 5.2.2609+ by Dec 31, 2026; the Oct 28 notice says 5.2.2608.722+lts or newer by Dec 31, 2027.",
      "priority": 9.0,
      "format": "Follow-up client email + upgrade plan"
    },
    {
      "n": 3,
      "title": "Publish the Node.js advisory explainer",
      "why": "Urgent, high-intent topic with little partner coverage.",
      "priority": 8.5,
      "format": "Blog + LinkedIn post"
    },
    {
      "n": 4,
      "title": "Demo the AEM and Siteimprove connectors for mixed-stack prospects",
      "why": "Opens Agent Platform conversations with Adobe-led accounts.",
      "priority": 8.0,
      "format": "Demo script + one-pager"
    },
    {
      "n": 5,
      "title": "Get October-release content live before Nov 10",
      "why": "Sitecore Symposium and Adobe MAX will dominate coverage Nov 10–12.",
      "priority": 7.5,
      "format": "Blog roundup + LinkedIn series"
    }
  ],
  "next7": [
    {
      "bold": "List client DXP sites still on Node.js 18 or 20",
      "text": "and schedule upgrades to Node 22/24 before redeploying."
    },
    {
      "bold": "Redeploy every DXP CMS / Commerce Connect site",
      "text": "with a new package name or version to force a patched container build."
    },
    {
      "bold": "Upgrade Configured Commerce clients",
      "text": "to 5.2.2610.487+sts or 5.2.2608.730+lts, and confirm Payment Service users are on 5.2.2608.722+lts or newer."
    },
    {
      "bold": "Send the corrected Payment Service notice",
      "text": "(deadline Dec 31, 2027; iFrame updates stopped Oct 31, 2026)."
    },
    {
      "bold": "Move any Optimizely Desktop users to the Visual Editor",
      "text": "before the Dec 31, 2026 deprecation — Desktop gets no security fixes."
    },
    {
      "bold": "Register for Nov 5 Academy 'Agents in Experimentation' and the Dec 3 agent-ready website webinar",
      "text": "and assign owners for follow-up content."
    }
  ]
};
