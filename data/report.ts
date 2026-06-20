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
  title: "Optimizely Trend and Content Opportunities",
  generated: "June 19, 2026",
  sub: "A weekly read for content marketers, DevRel leads, solution architects, and product marketers: the signals worth acting on across Opal, Graph, Configured Commerce, CMS 13, Visual Builder, and the MCP Server — each tied to a dated release, event, or roadmap item.",
  tags: [
    { label: "Breakout: Opal agents go production-grade", hot: true },
    { label: "Lookback window: 90 days" },
    { label: "Focus: Agentic AI · Graph-first commerce · B2B / Configured Commerce" },
  ],
  trends: [
    {
      rank: 1,
      title: "Opal agents go production-grade",
      body: "The dominant signal of the window. June brought the Quality tab (Output Evaluation, Execution Guardrails, Execution Advisor), in-chat PowerPoint/Word creation, Skills, Memory, and a wave of new specialized agents. Community is following closely (Opal cost-vs-value and \"Learning by Doing\" series, mid-June).",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 2,
      title: "MCP Server becomes the integration story",
      body: "Experimentation MCP Server (Claude Desktop, Claude Code, Cursor, VS Code Copilot, Windsurf), a CMS SaaS MCP server, and Opal remote MCP connectors (Notion, GitHub, Contentful, Gamma, Sanity, ClickUp). Optimizely's MCP footprint spans content, experimentation, and commerce — broader than test-only rivals.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 3,
      title: "Graph-first commerce & editor-led search",
      body: "The Graph Search Management Portal (beta, May 21) hands pinned results, synonyms, and search analytics to editors without developer involvement. Combined with Smooth Rebuild and RAG-for-Graph, Graph is increasingly the delivery layer for both content and Configured Commerce catalogs.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
        { kind: "gap", label: "Editor-led search guidance still emerging" },
      ],
    },
    {
      rank: 4,
      title: "CMS 13 GA reshapes the PaaS conversation",
      body: "CMS 13 reached GA on March 31, followed by Opal Chat + tools (April 7) and Forms 6.0.0 (April 9). Community output is heavy — content variations, page-tree governance, Opti ID SSO/SCIM — making CMS 13 migration a durable content theme.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 5,
      title: "Configured Commerce / B2B leans agentic",
      body: "Q2 '26 roadmap centers on Cloudflare-for-SaaS (O2O), website-level search configuration, and Datadog in Mission Control, with Opal tools and LLMs.txt support extending the B2B storefront for AI-driven discovery and complex catalogs.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 6,
      title: "Experimentation automation & governance",
      body: "Program-level Opal agents (Program Overview, Value Estimator, Backlog Prioritization, June 4) plus EU data residency and FX Change Approvals push experimentation from test-creation toward measurable, governed programs — a differentiator vs. copilot-only rivals.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
  ],
  releases: [
    { product: "Optimizely Opal", date: "Jun 8, 2026", highlight: "PowerPoint and Word document creation — Opal can read, create, and edit .docx and .pptx files via the code-execution tool.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Opal", date: "Jun 4, 2026", highlight: "EU app hosting (data residency); Limitless 1:1 Personalization; new experimentation + ODP audience agents; Microsoft Teams/Outlook & Google Ads tools; Gamma and GitHub remote MCP connectors.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Graph", date: "Jun 2, 2026", highlight: "Gateway 3.29.0 — webhooks now fire immediately after a purge-cache request; fixes missing content types after a source deploys to a new slot.", source: "support.optimizely.com", type: "Bug fixes" },
    { product: "Optimizely Opal", date: "Jun 1, 2026", highlight: "Quality tab for specialized agents — Output Evaluation (scored runs), Execution Guardrails (drift detection), and Execution Advisor (recovery + sensitive-call review).", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Opal", date: "May 27, 2026", highlight: "Skills section added to specialized agent create/edit — apply reusable org context (brand voice, taxonomies, compliance) without rewriting prompts.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Graph", date: "May 25, 2026", highlight: "Content Graph 4.4.1 — fixes to _fulltext highlight extracts, decimal property indexing, and Edit-mode search across many locales.", source: "support.optimizely.com", type: "Bug fixes" },
    { product: "Optimizely Opal", date: "May 22, 2026", highlight: "CMS 13 tools — list/create/update content and content types, SEO analysis/edit, and GEO audit/apply from Opal.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Graph", date: "May 21, 2026", highlight: "(Beta) Graph Search Management Portal — editors configure pinned results, synonyms, and view search analytics with no developer involvement.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Opal", date: "May 11, 2026", highlight: "CMS (SaaS) Opal tools for styles — list, view, create, and update styles for rows, columns, sections, and content types via Opal chat.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Opal", date: "May 7, 2026", highlight: "Memory, Artifacts page, remote MCP servers (Notion, Contentful, Sanity, ClickUp), Google Workspace tools, and RAG tools including rag_retrieve_from_optimizely_graph.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Optimizely Graph", date: "Apr 21, 2026", highlight: "Content Graph 4.4.0 — improved HttpClient resilience plus LinkItem URL, Forms sync, and Smooth Rebuild language fixes.", source: "support.optimizely.com", type: "Enhancement & bug fixes" },
    { product: "CMS 13 (PaaS)", date: "Apr 9, 2026", highlight: "Optimizely Forms 6.0.0 made compatible with CMS 13; import/export flow fix.", source: "support.optimizely.com", type: "Enhancement & bug fix" },
    { product: "CMS 13 (PaaS)", date: "Apr 7, 2026", highlight: "Released Opal Chat and tools (Optimizely.Cms.OpalChat 2.0.0) to create/manage content and content types, optimize SEO, and improve AI discoverability.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "Web Experimentation", date: "Apr 2026", highlight: "Optimizely Experimentation MCP server — connects AI clients (Claude Desktop, Claude Code, Claude.ai, Cursor, VS Code + Copilot, Windsurf) to experimentation data via OAuth 2.0.", source: "support.optimizely.com", type: "Enhancement" },
    { product: "CMS 13 (PaaS)", date: "Mar 31, 2026", highlight: "CMS 13 general availability (GA) release — modern .NET foundation, Graph-powered search, Visual Builder, and AI-first workflows.", source: "support.optimizely.com", type: "GA release" },
  ],
  events: [
    { event: "Opticon 2026 — New York", when: "Sep 1, 2026 · In-person (Javits Center, NYC); includes Online access", focus: "Agentic digital experiences; luminary keynote with Seth Godin; breakouts, masterclasses, product demos.", register: "https://events.optimizely.com/Opticon26NY" },
    { event: "Opticon 2026 — London", when: "Oct 13, 2026 · In-person (Barbican, London); includes Online access", focus: "Agentic digital experiences for EMEA marketers and digital leaders.", register: "https://events.optimizely.com/Opticon26London" },
    { event: "Opticon 2026 — Online", when: "Oct 21, 2026 · Virtual", focus: "Free online sessions on agentic AI, content, commerce, and experimentation.", register: "https://www.optimizely.com/insights/events/opticon/online/" },
  ],
  roadmap: [
    { product: "Optimizely Opal", phase: "Now / near-term", items: ["Limitless 1:1 ABM — agent-built, CRM-driven account pages on crawlable URLs", "Adaptive Intelligence — org-specific model trained on what converts", "Action Cards — act on AI recommendations inside the workflow", "Conversational Agents and Voice Mode", "Agent Library and guided onboarding"], link: "https://www.optimizely.com/product-updates/ai/" },
    { product: "Content Management (CMS)", phase: "Q2 2026", items: ["Page Builder & Page Variation agents from existing models", "MCP server for CMS — designs to CMS-ready components", "Visual Builder multi-layout, blueprint editing, content-model locking", "Taxonomy & tagging; multi-step forms", "JavaScript SDK, ISR, and TinyMCE for SaaS"], link: "https://www.optimizely.com/product-updates/content-management/" },
    { product: "Content Marketing (CMP)", phase: "Now / near-term", items: ["Image Generation — structured inputs, templates, multi-brand", "Opal for managing assets — metadata, alt text, auto-archive", "Suggested Assets via brief and relevancy scores", "Resource Management and Brand Portal", "Omnichannel publishing to SaaS CMS"], link: "https://www.optimizely.com/product-updates/content-marketing/" },
    { product: "Configured Commerce", phase: "Q2 '26", items: ["Cloudflare for SaaS (Orange-to-Orange) — bring your own edge/WAF", "Website-level search configuration for multi-site teams", "Datadog visibility inside Mission Control", "Now: order-approval activity log, ngram part-number search", "Now: additional Opal tools for commerce"], link: "https://www.optimizely.com/product-updates/commerce/" },
    { product: "Web Experimentation", phase: "In beta / in development", items: ["Custom Fields (beta) — required metadata, queryable program data", "Developer Mode and Web Companion browser extension", "Variation & template creation in the Visual Editor", "Frequentist (beta) and Bayesian stats engines", "Akamai support for Edge Delivery; Contextual Bandits deeper insights"], link: "https://www.optimizely.com/product-updates/web-experimentation/" },
    { product: "Feature Experimentation", phase: "Q2 2026", items: ["Experimentation MCP Server — create flags/experiments conversationally", "React SDK v4 — unlocks Holdouts and Contextual Multi-Armed Bandit", "Flag Status across all environments; Custom Fields", "Team & Owner flag fields for governance", "Copy-a-flag-rule across environments; Change Approvals"], link: "https://www.optimizely.com/product-updates/feature-experimentation/" },
    { product: "Personalization", phase: "In development", items: ["Custom Fields and Developer Mode", "Variation & template creation in the Visual Editor", "Contextual Bandits — deeper segment-level insights", "Frequentist and Bayesian stats engines", "Akamai support for Edge Delivery"], link: "https://www.optimizely.com/product-updates/personalization/" },
    { product: "Data Platform (ODP)", phase: "Q2 '26", items: ["CMS–ODP plugin — real-time audiences inside CMS visitor groups", "Opal onboarding agent and integration tools", "Opal contextual actions surfaced across ODP", "Building on agentic audience management (smart suggestions, RTS)"], link: "https://www.optimizely.com/product-updates/platform/" },
  ],
  blogs: [
    { title: "Building production-grade Opal agents: what the Quality tab changes", why: "The June 1 Quality tab (Output Evaluation, Execution Guardrails, Execution Advisor) is the first real answer to \"how do we scale agents safely.\" Show evaluation criteria, guardrail modes, and sensitive-call review with a concrete agent.", audience: "DevRel leads & solution architects", difficulty: "Intermediate", engagement: 9, uniqueness: 8, priority: 9.2 },
    { title: "Connect Claude, Cursor & VS Code to Optimizely with the Experimentation MCP Server", why: "The April MCP server release supports Claude Desktop/Code, Cursor, VS Code Copilot, and Windsurf via OAuth 2.0. A step-by-step \"query your experiments in natural language\" walkthrough captures the highest-velocity developer theme.", audience: "DevRel leads & solution architects", difficulty: "Intermediate", engagement: 9, uniqueness: 9, priority: 8.3 },
    { title: "Graph-first commerce: tuning Configured Commerce search with the new Search Management Portal", why: "The May 21 Graph Search Management Portal lets editors own pinned results and synonyms; pair with the Q2 website-level search roadmap for a B2B angle.", audience: "Solution architects & product marketers", difficulty: "Intermediate", engagement: 8, uniqueness: 8, priority: 7.6 },
    { title: "Scaling B2B account content with Limitless 1:1 Personalization (and what's next with 1:1 ABM)", why: "Limitless 1:1 Personalization shipped June 4; the Opal roadmap's Limitless 1:1 ABM extends it to CRM-driven account pages — a natural Configured Commerce / B2B narrative.", audience: "Product & content marketers", difficulty: "Beginner", engagement: 8, uniqueness: 8, priority: 7.6 },
    { title: "What CMS 13 GA means for developers: Graph search, Opal Chat, and migration paths", why: "GA landed March 31 with Opal Chat (April 7) and Forms 6.0.0 (April 9); community migration questions are peaking.", audience: "DevRel leads & solution architects", difficulty: "Intermediate", engagement: 8, uniqueness: 6, priority: 7.3 },
    { title: "GEO at scale: getting cited by LLMs with Opal GEO agents and CMS 13 GEO tools", why: "CMS 13 ships paas_cms_geo_analysis / geo_apply (May 22) and Configured Commerce adds LLMs.txt support — a practical, search-trending topic.", audience: "Content & product marketers", difficulty: "Beginner", engagement: 8, uniqueness: 8, priority: 7.2 },
  ],
  whitepapers: [
    { title: "Enterprise AI governance for agentic marketing: evaluations, guardrails & EU data residency", why: "The June 1 Quality tab plus June 4 EU app hosting let Optimizely make a governance argument competitors are still assembling. Frame the agent lifecycle: evaluate, guardrail, recover, and keep data in-region.", audience: "Solution architects & product marketers", difficulty: "Advanced", engagement: 8, uniqueness: 9, priority: 8.1 },
    { title: "The agentic commerce stack: Configured Commerce + Opal + Graph for B2B distributors", why: "Q2 Configured Commerce (Cloudflare O2O, website-level search, Datadog), Opal commerce tools, and Graph-powered catalog search form a defensible B2B/distributor story where B2C-led rivals are weaker.", audience: "Solution architects & product marketers", difficulty: "Advanced", engagement: 8, uniqueness: 8, priority: 7.8 },
  ],
  linkedin: [
    { title: '"Opal now builds your PowerPoint and Word docs in-chat" (June 8)', why: "A 60-second workflow: prompt → on-brand deck via the code-execution tool. High shareability, low production cost.", audience: "Content & product marketers", engagement: 8, uniqueness: 7 },
    { title: "\"Remote MCP connectors turn Opal into your team's hub\"", why: "Notion, GitHub, Contentful, Gamma, Sanity, ClickUp (May 7 / June 4). One graphic showing the connector grid; CTA to the docs.", audience: "DevRel leads & solution architects", engagement: 7, uniqueness: 7 },
  ],
  competitive: [
    { theme: "Agentic AI for DXP/CMS", optimizely: "Opal: 15+ OOTB agents, Quality tab governance, Skills, Memory, in-chat doc creation, broad connector set.", competitor: "Sitecore Agentic Studio (XM Cloud, launched Symposium 2025); Adobe Experience Platform Agent Orchestrator (agentic layer with human oversight).", opportunity: "Lead on agent governance and evaluation depth; publish guidance rivals have not matched." },
    { theme: "MCP / open-standard integration", optimizely: "MCP Server across experimentation, CMS, and Opal connectors — content + testing + commerce.", competitor: "VWO MCP server (ChatGPT, n8n); Kameleoon MCP + Prompt-Based Experimentation; Shopify first-party MCP + ACP/UCP.", opportunity: "Position the full-suite MCP story vs. test-only rivals; ship Claude Code quickstart repos." },
    { theme: "Agentic commerce (B2B)", optimizely: "Configured Commerce + Opal tools + Graph search; LLMs.txt; B2B schema in ODP; bring-your-own edge.", competitor: "Salesforce Agentforce Commerce (acquiring Cimulate); Shopify Sidekick + agentic protocols; Bloomreach Discovery + Clarity.", opportunity: "Own the distributor/manufacturer B2B niche where rivals are B2C-led; lead with Graph-first commerce." },
    { theme: "Experimentation automation", optimizely: "Program-level Opal agents (Program Overview, Value Estimator, Backlog Prioritization); MCP server; Idea Builder.", competitor: "Kameleoon AI Copilot + PBX 2.0 agents (webinar May 5, 2026); VWO AI + MCP.", opportunity: "Differentiate on program ROI and QBR-style reporting vs. competitors' test-creation focus." },
    { theme: "Graph-first content/commerce search", optimizely: "Optimizely Graph with editor-led Search Management Portal (beta), Smooth Rebuild, RAG-for-Graph.", competitor: "No recent public activity found for a directly comparable graph-delivery + editor search portal in the competitor set.", opportunity: "Promote no-developer search tuning (pinned results, synonyms, analytics) as a clear differentiator." },
  ],
  actions: [
    { n: 1, title: "Ship the Opal Quality-tab agent guide", why: "Production-grade agents blog tying evaluations, guardrails, and the execution advisor to a real build.", priority: 9.2, format: "Technical blog" },
    { n: 2, title: "Publish the Experimentation MCP Server tutorial + GitHub sample", why: "Natural-language access from Claude Code, Cursor, and VS Code; capture the breakout developer theme.", priority: 8.3, format: "Tutorial + GitHub sample" },
    { n: 3, title: "Commission the AI governance whitepaper", why: "Evaluations, guardrails, and EU data residency as the enterprise differentiator while rivals catch up.", priority: 8.1, format: "Whitepaper" },
    { n: 4, title: "Produce the B2B agentic commerce whitepaper", why: "Configured Commerce + Opal + Graph for distributors and manufacturers.", priority: 7.8, format: "Whitepaper" },
    { n: 5, title: "Draft the Limitless 1:1 Personalization blog", why: "Account-based content at scale, bridging to the 1:1 ABM roadmap item.", priority: 7.7, format: "Blog" },
  ],
  next7: [
    { bold: "Lock two pieces:", text: "the Opal Quality-tab blog and the Experimentation MCP Server tutorial — both ride peak momentum and have working capabilities to demo." },
    { bold: "Open Opticon content runway:", text: "with New York registration live (Sep 1), brief an Opticon teaser series anchored on agentic experiences and the Seth Godin keynote." },
    { bold: "Capture the Graph Search Management Portal beta", text: "in a short demo while it is novel; line up an editor-led search angle for Configured Commerce." },
    { bold: "Queue the LinkedIn posts", text: "on in-chat document creation (June 8) and remote MCP connectors to keep weekly cadence between long-form pieces." },
    { bold: "Validate competitor claims", text: "before publishing the comparison whitepaper — re-check Salesforce/Cimulate, Sitecore Agentic Studio, and VWO/Kameleoon MCP pages for any updates." },
  ],
};
