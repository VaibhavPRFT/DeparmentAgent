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
  generated: "June 18, 2026",
  sub: "Weekly intelligence sweep for content marketers, DevRel leads, solution architects, and product marketers",
  tags: [
    { label: "Breakout: MCP Server for commerce", hot: true },
    { label: "Lookback: 30–90 day signal window (through Jun 2026)" },
    { label: "Focus bias: Configured Commerce / B2B" },
  ],
  trends: [
    {
      rank: 1,
      title: "MCP Server: AI that speaks commerce",
      body: "Optimizely's commerce MCP Server launched in May 2026 with eight core capabilities spanning discovery to checkout, alongside hosted Experimentation and Analytics MCP servers. This is the fastest-moving theme: multiple May posts, official support docs, and press in a single 30-day band. Buyers, sales reps, and procurement teams can now search, transact, and manage the journey in natural language.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 2,
      title: "Enterprise AI governance gap",
      body: "External research is loud — 72% of firms run agentic AI in production while 60% lack formal governance — but Optimizely-specific guardrail guidance for Opal and MCP is thin. Opal's new Quality tab (released June 1, 2026: Output Evaluation, Execution Guardrails, Execution Advisor) is the product-side answer, yet practitioner-facing guidance on how to apply it remains a content gap to own.",
      flags: [
        { kind: "gap", label: "Optimizely-specific guidance still thin" },
        { kind: "ent", label: "Enterprise relevance" },
        { kind: "ai", label: "AI relevance" },
      ],
    },
    {
      rank: 3,
      title: "Opal agent orchestration",
      body: "Optimizely has launched 15+ out-of-the-box agents in 2026 and Opal University drew 1,100+ sign-ups in two weeks with a 1,500+ waitlist; one cohort built 375 agents in five days. Conversation Mode, Chat Pills, and Action Cards push Opal from feature to platform.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 4,
      title: "Graph-first commerce: Commerce 15 + CMS 13",
      body: "Commerce 15 (mid-May 2026) and CMS 13 center delivery on Optimizely Graph, enabling hybrid-headless, GraphQL-first commerce. Graph for Commerce Connect exposes catalog, prices, inventory, and variants through a single edge endpoint — a direct B2B catalog play.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
        { kind: "ai", label: "AI relevance" },
      ],
    },
    {
      rank: 5,
      title: "Agentic AI for platform upgrades & migration",
      body: "A two-part May 2026 field series shows teams using agentic AI to accelerate CMS and Commerce upgrades. Migration off CMS 12 / Customized Commerce is a live, costly concern; agent-assisted upgrade playbooks are scarce.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 6,
      title: "Configured Commerce B2B enhancements",
      body: "Q2 2026 brings ODP-driven bill-to/ship-to B2B profiles, ngram part-number search, Cloudflare-for-SaaS O2O, in-platform DAM, Datadog-in-Mission-Control, and AI bulk translations to PIM (Q3). Concrete, shippable B2B angles — the team's primary surface.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 7,
      title: "Visual Builder data binding & SaaS CMS",
      body: "2026 Visual Builder updates add data-bound content loading, block property binding, direct data-source binding, conditional form-field rules, and external DAM/PIM connections — lowering the technical bar for marketers on SaaS CMS.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
  ],
  releases: [
    { product: "Optimizely Opal", date: "Jun 8, 2026", highlight: "PowerPoint and Word document creation — Opal can read, create, and edit .docx and .pptx files via the code_execution tool.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "New feature" },
    { product: "Optimizely Opal", date: "Jun 4, 2026", highlight: "EU app hosting (data residency); Limitless 1:1 Personalization; five new agents (Experimentation Program Overview, Experiment Value Estimator, Experiment Backlog Prioritization, Standard & Real-time Audience Builders); Microsoft Teams/Outlook and Google Ads connector tools; Gamma and GitHub remote MCP connectors.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "New features" },
    { product: "Optimizely Opal", date: "Jun 1, 2026", highlight: "Quality tab for specialized agents — Output Evaluation, Execution Guardrails, and Execution Advisor for scoring, drift detection, and run recovery.", source: "support.optimizely.com/hc/en-us/articles/46195603210125-Quality-tab-overview", type: "New feature" },
    { product: "Optimizely Opal", date: "May 27, 2026", highlight: "Skills section on specialized agents — reusable brand voice, taxonomies, and compliance language applied without rewriting prompts.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Enhancement" },
    { product: "CMS 13 (PaaS)", date: "Apr 9, 2026", highlight: "EPiServer.Forms 6.0.0 made compatible with CMS 13; import/export bug fix (CMS-50238).", source: "support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes", type: "Enhancement & bug fix" },
    { product: "CMS 13 (PaaS)", date: "Apr 7, 2026", highlight: "Opal Chat and tools released (Optimizely.Cms.OpalChat 2.0.0) — create/manage content and content types, SEO, and AI discoverability from chat.", source: "support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes", type: "Enhancement" },
    { product: "CMS 13 (PaaS)", date: "Mar 31, 2026", highlight: "CMS 13 general availability (GA) release.", source: "support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes", type: "GA release" },
  ],
  events: [
    { event: "Summer Series: Opal in Action", when: "Weekly · Tuesdays · Virtual", focus: "Live demos of Opal agents across content, campaign, and experimentation use cases; live Q&A. Register once for the next available Tuesday session.", register: "https://www.optimizely.com/insights/summer-series-opal-in-action/" },
    { event: "Opal Certification World Tour (Operation Opal)", when: "In-person · rolling cities", focus: "One-day, hands-on Opal certification workshops in an Opal sandbox; build and deliver AI-accelerated solutions.", register: "https://www.optimizely.com/operation-opal/" },
    { event: "Opal U: AI Marketing University", when: "Online · self-paced cohort", focus: "Certification track for building marketing AI agents and campaigns end to end with Opal.", register: "https://www.optimizely.com/ai-marketing-certificate/" },
    { event: "Opal U: AI Experimentation University", when: "Online · self-paced cohort", focus: "Certification track for AI-accelerated experimentation programs with Opal.", register: "https://www.optimizely.com/ai-experimentation-certificate/" },
  ],
  roadmap: [
    { product: "Opal (AI)", phase: "Upcoming", items: ["Limitless 1:1 ABM — per-account pages built from CRM data on crawlable URLs", "Adaptive Intelligence — org-specific model trained on what converts", "Add Remote MCPs — connect Opal to any platform in a few steps", "Agent Evaluations & Execution Guardrails — live quality monitoring", "Voice Mode, Conversational Agents, Personal Memory, Code Execution"], link: "https://www.optimizely.com/product-updates/ai/" },
    { product: "Content Management (CMS)", phase: "Q2 Roadmap", items: ["Create & scale with Opal: Page Builder / Page Variation Agents, MCP server for CMS", "Visual Builder: multi-layout, blueprint editing, content model locking", "Content Manager improvements; taxonomy & tagging; multi-step forms", "JavaScript SDK improvements, Incremental Static Regeneration, TinyMCE for SaaS", "CMS + CMP integration; DAM enhancements"], link: "https://www.optimizely.com/product-updates/content-management/" },
    { product: "Content Marketing (CMP)", phase: "Upcoming", items: ["Image Generation improvements — structured, multi-brand, on-brand visuals", "Opal for managing assets; Suggested Assets for repurposing", "Resource Management — team workload and time tracking", "Brand Portal for secure asset sharing; Form Builder improvements", "Omnichannel Publishing to SaaS CMS"], link: "https://www.optimizely.com/product-updates/content-marketing/" },
    { product: "Configured Commerce", phase: "Now / Next (Q2 '26)", items: ["Now: Order Approval Activity Log, Ngrams for part-number search, custom promotion code errors, one-time shipping address, Opal additional tools", "Cloudflare for SaaS (Orange-to-Orange); website-level search config; Datadog in Mission Control", "Next: DAM for existing customers, bulk promotion assignment, rules-engine subcategory targeting"], link: "https://www.optimizely.com/product-updates/commerce/" },
    { product: "Web Experimentation", phase: "In beta / development", items: ["Custom Fields (beta); Developer Mode; Web Companion Chrome extension", "Variation & Template creation in the Visual Editor", "Frequentist (beta) & Bayesian Stats Engines; Akamai edge delivery", "Next-gen Experimentation Analytics; Experiment Plan Creation Agent"], link: "https://www.optimizely.com/product-updates/web-experimentation/" },
    { product: "Feature Experimentation", phase: "Upcoming / Q2 '26", items: ["Experimentation MCP Server — create flags & experiments conversationally", "Feature Rollouts; Change Approvals; Flag Status & Team/Owner fields", "Frequentist & Bayesian Stats Engines; Unified Results Page", "Idea Builder & Experiment Plan Creation Agents; React SDK v4"], link: "https://www.optimizely.com/product-updates/feature-experimentation/" },
    { product: "Personalization", phase: "In development", items: ["Custom Fields; Developer Mode; Web Companion extension", "Variation & Template creation in the Visual Editor", "Contextual Bandits deeper insights — segment-level results to audiences", "Frequentist & Bayesian Stats Engines; next-gen analytics"], link: "https://www.optimizely.com/product-updates/personalization/" },
    { product: "Data Platform (Platform)", phase: "Q1 '26", items: ["Opal Agent for Standard Audiences — build segments via conversation", "Opal Agent for Real-Time Audience Inspection — troubleshoot in plain language", "Relative dates in real-time audiences for lifecycle timing", "Agentic Audience Management: smart suggestions, intent-aware creation, cross-tool context"], link: "https://www.optimizely.com/product-updates/platform/" },
  ],
  blogs: [
    { title: "Eight Capabilities, One Conversation: A Developer's Tour of the Optimizely MCP Server", why: "MCP Server shipped May 2026; first-mover window before the topic saturates.", audience: "DevRel leads, solution architects", difficulty: "Intermediate", engagement: 9, uniqueness: 9, priority: 9.5 },
    { title: "Governing Agentic Commerce: Guardrails for Opal + MCP in the Enterprise", why: "60% of firms lack formal AI governance; Optimizely-specific guidance is thin (open gap).", audience: "Solution architects, product marketers", difficulty: "Advanced", engagement: 9, uniqueness: 9, priority: 8.3 },
    { title: "Graph-First B2B: Wiring Configured Commerce Catalog into Optimizely Graph", why: "Commerce 15 + CMS 13 center on Graph; single-endpoint B2B catalog access is new.", audience: "Solution architects", difficulty: "Advanced", engagement: 8, uniqueness: 8, priority: 7.9 },
    { title: "From 15 Out-of-the-Box Opal Agents to Your First Custom B2B Commerce Agent", why: "15+ OOTB agents launched 2026; Opal University demand and waitlist surging.", audience: "Content marketers, DevRel", difficulty: "Intermediate", engagement: 8, uniqueness: 8, priority: 8.2 },
    { title: "Upgrading CMS 12 to CMS 13 with Agentic AI: A Field Playbook", why: "Two-part May 2026 series signals demand; migration is an active, costly decision.", audience: "DevRel leads, solution architects", difficulty: "Advanced", engagement: 7, uniqueness: 7, priority: 7.5 },
    { title: "Ngram Part-Number Search in Configured Commerce: When Buyers Only Know Half the SKU", why: "Q2 2026 search feature ships; concrete B2B buyer-experience win.", audience: "Content marketers, solution architects", difficulty: "Intermediate", engagement: 7, uniqueness: 7, priority: 7.0 },
    { title: "Headless at Scale: Lessons from 64 Sites on Optimizely Graph", why: "Rockwool multi-brand rollout (Mar 2026) is a fresh, quotable proof point.", audience: "Solution architects", difficulty: "Advanced", engagement: 7, uniqueness: 7, priority: 6.8 },
  ],
  whitepapers: [
    { title: "The Agentic Commerce Stack: MCP + Opal + Graph for B2B Distributors", why: "High — positions Optimizely directly against Adobe and Salesforce on agentic B2B.", audience: "Solution architects, product marketers", difficulty: "Advanced", engagement: 8, uniqueness: 9, priority: 8.5 },
    { title: "AI Governance for Marketing & Commerce Agents", why: "High — answers the enterprise readiness/control concern that competitors have not addressed for the Optimizely stack.", audience: "Enterprise buyers, compliance and IT governance leads", difficulty: "Intermediate", engagement: 7, uniqueness: 9, priority: 8.3 },
    { title: "Migrating to Graph-First Commerce: A CMS 13 & Commerce 15 Architecture Guide", why: "High — de-risks the upgrade decision and captures migration intent.", audience: "Solution architects, DevRel leads", difficulty: "Advanced", engagement: 7, uniqueness: 8, priority: 7.9 },
  ],
  linkedin: [
    { title: '"Eight capabilities, one conversation"', why: "Short-form: break down what the Optimizely MCP Server actually does across the buyer journey.", audience: "DevRel, solution architects", engagement: 8, uniqueness: 8 },
    { title: '"375 AI agents in five days"', why: "Short-form: what Opal University's first cohorts reveal about pent-up demand for hands-on agent building.", audience: "Content marketers, partners", engagement: 7, uniqueness: 7 },
    { title: '"Most B2B \'AI search\' is a chatbot bolted onto a catalog"', why: "Controversial: MCP is a different architecture — here's why that matters.", audience: "Solution architects", engagement: 7, uniqueness: 8 },
    { title: '"Commerce on CMS 13 vs. ripping it out for composable"', why: "Controversial: stop treating the rebuild as obvious and weigh the real trade-offs.", audience: "Enterprise buyers, architects", engagement: 6, uniqueness: 7 },
    { title: '"Ngram part-number search in Configured Commerce"', why: "Technical quick win: let buyers find a SKU when they only remember half of it.", audience: "Solution architects, merchandisers", engagement: 6, uniqueness: 7 },
    { title: '"Bind a block to a data source in Visual Builder — no code"', why: "Technical quick win: data-bound content on SaaS CMS without developer involvement.", audience: "Content marketers", engagement: 6, uniqueness: 6 },
    { title: '"One diagram: an MCP request from AI assistant to checkout"', why: "Architecture visual: how a request flows through the eight commerce capabilities.", audience: "DevRel, architects", engagement: 7, uniqueness: 7 },
  ],
  competitive: [
    { theme: "MCP for commerce", optimizely: "Shipped commerce MCP with eight buyer-journey capabilities (May 2026).", competitor: "Adobe made MCP the default commerce agent protocol at Summit (Apr 2026); Bloomreach Loomi Connect exposes 80+ read-only tools to ChatGPT (Jan 2026).", opportunity: "Differentiate on B2B journey depth — quotes, approval chains, reorder — and Opal orchestration; publish a head-to-head." },
    { theme: "Agentic AI agents", optimizely: "15+ OOTB Opal agents plus Opal University training engine.", competitor: "Salesforce Agentforce B2B Guided Shopping Agents (Spring '26); Sitecore Agentic Studio adds custom MCP connectors with OAuth (May 15, 2026).", opportunity: "Lead on marketing-side agent breadth fused with commerce; demo multi-agent workflows competitors can't match." },
    { theme: "Agentic commerce protocols", optimizely: "Standardizing on MCP across products.", competitor: "Shopify pushing UCP with Google; Stripe + OpenAI on ACP — merchants told to support both.", opportunity: "Publish a clear Optimizely protocol stance for B2B; thought-leadership space is open." },
    { theme: "Experimentation automation", optimizely: "Experimentation MCP server + Opal variation/ideation agents.", competitor: "VWO Copilot; Kameleoon Agent AI; Dynamic Yield continuous personalization.", opportunity: "Tie experimentation to commerce and content in one agent loop — an end-to-end story rivals lack." },
    { theme: "AI merchandising & search", optimizely: "AI product discovery, long-tail SKU recommendations, ngram part-number search.", competitor: "Bloomreach Loomi Connect surfaces catalog intelligence inside ChatGPT.", opportunity: "Emphasize complex-catalog depth and B2B contract pricing rather than consumer search parity." },
  ],
  actions: [
    { n: 1, title: "MCP Server developer tour", why: "Highest composite priority and the launch is still fresh — pair a developer tour blog with a LinkedIn carousel.", priority: 9.5, format: "Blog + LinkedIn carousel" },
    { n: 2, title: "Agentic commerce governance whitepaper", why: "The widest open gap versus Adobe, Salesforce, and Sitecore; own the enterprise governance narrative.", priority: 8.3, format: "Whitepaper" },
    { n: 3, title: "First custom Opal B2B commerce agent", why: "Convert surging Opal University momentum into a hands-on build tutorial for a B2B commerce agent.", priority: 8.2, format: "Blog + demo" },
    { n: 4, title: "Graph-first B2B catalog guide", why: "Capture Commerce 15 / CMS 13 migration intent with a single-endpoint Graph catalog guide.", priority: 7.9, format: "Blog + diagram" },
    { n: 5, title: "CMS 12→13 agentic upgrade playbook", why: "Ride demand signalled by the two-part May field series on agent-assisted upgrades.", priority: 7.5, format: "Blog + playbook" },
  ],
  next7: [
    { bold: "Publish the MCP Server developer tour blog", text: "with a matching LinkedIn carousel before the launch news cools." },
    { bold: "Draft the agentic-commerce governance whitepaper outline", text: "— it is the widest open gap against Adobe, Salesforce, and Sitecore." },
    { bold: "Record a two-minute demo of a custom Opal agent", text: "searching and reordering through the Configured Commerce MCP." },
  ],
};
