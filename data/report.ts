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
  generated: "June 17, 2026",
  sub: "Weekly intelligence sweep for content marketers, devrel leads, solution architects, and product marketers",
  tags: [
    { label: "Breakout: Opal agents & agentic AI", hot: true },
    { label: "Lookback: 90 days (Mar 19 – Jun 17, 2026)" },
    { label: "Focus bias: Configured Commerce / B2B" },
  ],
  trends: [
    {
      rank: 1,
      title: "Opal agents move from features to a governed platform",
      body: "The 90-day window is dominated by Opal releases: the June 1 Quality tab (Output Evaluation, Execution Guardrails, Execution Advisor), June 4 EU hosting plus five new Experimentation and ODP audience agents, and June 8 code-execution document generation. Opal University reportedly drew 1,100+ signups in two weeks. This is the clearest breakout theme.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 2,
      title: "Graph-first Configured Commerce / B2B Commerce",
      body: "Commerce Connect 15 reached GA on May 18, rebuilt on .NET 10 and CMS 13 with Optimizely.Graph.Commerce replacing Search & Navigation, processor-based order APIs, async repositories, PCI-driven removal of card-storage APIs, and Visual Builder plus Opal on the product catalog. The Q2 roadmap adds Cloudflare O2O, website-level search, and Datadog in Mission Control.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
        { kind: "ai", label: "AI relevance" },
      ],
    },
    {
      rank: 3,
      title: "MCP Server as the cross-product integration layer",
      body: "Optimizely shipped remote MCP connectors in Opal (May 7), Gamma and GitHub MCP connectors (June 4), an Experimentation MCP server, and a CMS SaaS MCP server, with an Experimentation MCP Server called out on the Q2 Feature Experimentation roadmap. Capabilities are both officially documented and actively discussed by community bloggers.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "gap", label: "Doc/community gap closing" },
      ],
    },
    {
      rank: 4,
      title: "Agentic experimentation automation",
      body: "New program-level agents landed: Experimentation Program Overview, Experiment Value Estimator, and Experiment Backlog Prioritization (June 4), on top of Idea Builder (April–May). Optimizely cites teams starting experiments 19% faster and reaching significance 25% faster with agents, alongside Bayesian and Frequentist stats-engine work in development.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 5,
      title: "Enterprise AI governance for agentic execution",
      body: "The Opal Quality tab, role-based permissions, EU data residency (June 4), and new Skill-update and Guardrail notification categories signal a governance-first posture as agents move into production. This maps directly to enterprise buyer concerns and to competitor messaging from Adobe (Brand Intelligence) and Sitecore.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
        { kind: "ai", label: "AI relevance" },
        { kind: "gap", label: "Official guidance still thin" },
      ],
    },
    {
      rank: 6,
      title: "Agentic CMS 13 and Visual Builder",
      body: 'CMS 13 went GA March 31 with Visual Builder as the default editing experience, Graph-powered search, embedded DAM, and native GEO. The Q2 roadmap pushes further into Page Builder and Page Variation agents, an MCP server for CMS, multi-layout Visual Builder, and content-model locking. A June 30 webinar frames an "is your CMS actually agentic" buyer narrative.',
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
  ],
  releases: [
    { product: "Opal", date: "Jun 8, 2026", highlight: "PowerPoint and Word document creation — Opal can read, create, and edit .docx and .pptx files when the code_execution tool is enabled.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Feature" },
    { product: "Opal", date: "Jun 4, 2026", highlight: "EU app hosting (data residency); Experimentation Program Overview, Experiment Value Estimator, and Experiment Backlog Prioritization agents; Standard and Real-time ODP Audience Builder agents; Limitless 1:1 Personalization; Microsoft Teams/Outlook and Google Ads tools; Gamma and GitHub remote MCP connectors.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Feature / Agents" },
    { product: "Opal", date: "Jun 1, 2026", highlight: "Quality tab for specialized agents: Output Evaluation, Execution Guardrails (Learning/Watching/Enforcing), and Execution Advisor for run recovery and sensitive-tool review.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Governance" },
    { product: "Opal", date: "May 27, 2026", highlight: "Skills section added to specialized agent create/edit pages — reusable brand voice, taxonomies, and compliance language applied automatically.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Feature" },
    { product: "Opal — CMS 13", date: "May 22, 2026", highlight: "CMS 13 content tools: list/create/update/publish content types and items, content variations, plus SEO and GEO analysis/apply tools.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Tools" },
    { product: "Commerce Connect 15", date: "May 18, 2026 (GA)", highlight: "Major release on .NET 10 and CMS 13: Optimizely.Graph.Commerce catalog search, processor-based order APIs, async order repository, PCI-driven removal of card-storage APIs, Visual Builder and Content Manager on catalog, External Content, and Opal for catalog content.", source: "support.optimizely.com/hc/en-us/articles/45946311674509", type: "Major release" },
    { product: "Opal", date: "May 14, 2026", highlight: "Opal Chat for Product Recommendations (Beta) — manage workspaces, algorithms, layouts, and recommendation blocks via chat.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Beta" },
    { product: "Opal — CMS (SaaS)", date: "May 11, 2026", highlight: "New CMS (SaaS) Opal tools to list, view, create, and update styles for rows, columns, sections, and content types directly in chat.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Tools" },
    { product: "Opal", date: "May 7, 2026", highlight: "Memory, Artifacts page, remote MCP servers (Notion, Contentful, Sanity, ClickUp, Contentsquare), Google Workspace tools, RAG system tools, multi-turn conversation mode, and Web Experimentation Idea Builder.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Feature" },
    { product: "Opal — Web Experimentation", date: "Apr 22, 2026", highlight: "Idea builder in Web Experimentation generates actionable test ideas from page, goal, and research inputs using Opal.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Feature" },
    { product: "Opal — CMS 13", date: "Apr 7, 2026", highlight: "Optimizely.Cms.OpalChat 2.0.0 NuGet package brings Opal Chat into CMS 13 for in-context AI assistance.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Feature" },
    { product: "Opal", date: "Mar 30, 2026", highlight: "Personal instructions, plus content/social agents (Content Ideation, Social Post Research/Generation, Creative Brief, E-E-A-T Checker) and Microsoft 365 / Amplitude / Mixpanel / WordPress connector tools.", source: "support.optimizely.com/hc/en-us/articles/37791100847373", type: "Agents" },
  ],
  events: [
    { event: "Optimizely Opal: Business Update for Partners", when: "Jun 23, 2026 · 11:00 AM EST · Online", focus: "Opal go-to-market direction, product roadmap signals (scaffolding, harness, data moat), and partner enablement.", register: "https://www.optimizely.com/insights/partner-training-opal-update/" },
    { event: "Your CMS calls itself agentic? Make them prove it.", when: "Jun 30, 2026 · 11:00 AM EST · Online webinar", focus: "Buyer framework for agentic CMS, agentic personalization, and custom agentic content workflows; three production CMS use cases.", register: "https://www.optimizely.com/insights/ai-powered-enterprise-cms-impossible-use-cases/" },
    { event: "Opticon 2026 (Camp Opticon)", when: "Sep 1 NYC (in-person + online); Oct 13 London; Oct 21 Online", focus: "Agentic digital experience; Seth Godin keynote in New York. Partner early-bird pricing runs through June 30.", register: "https://www.optimizely.com/insights/opticon/" },
  ],
  roadmap: [
    { product: "Opal (AI)", phase: "Now / In progress", items: ["Limitless 1:1 ABM — per-account agent-built pages", "Adaptive Intelligence org-specific conversion model", "Action Cards and ready-to-use prompts", "Agent Evaluations and Execution Guardrails", "Voice Mode and conversational agents"], link: "https://www.optimizely.com/product-updates/ai/" },
    { product: "Content Management (CMS)", phase: "Q2 2026", items: ["Page Builder and Page Variation agents", "MCP server for CMS (design-to-component)", "Visual Builder multi-layout and content-model locking", "Taxonomy/tagging and multi-step forms", "JavaScript SDK improvements and ISR"], link: "https://www.optimizely.com/product-updates/content-management/" },
    { product: "Content Marketing (CMP)", phase: "Now / Upcoming", items: ["Opal image generation improvements (multi-brand)", "Opal for managing assets: metadata, alt text, archiving", "Suggested Assets via brief and relevancy scores", "Resource management and Brand Portal", "Omnichannel publishing to SaaS CMS"], link: "https://www.optimizely.com/product-updates/content-marketing/" },
    { product: "Configured Commerce", phase: "Now (Q2 '26)", items: ["Order Approval Activity Log", "Ngrams for part-number search; query enhancements", "Custom promotion-code errors; one-time shipping address", "Opal additional tools", "Next: DAM for existing customers, website-level search"], link: "https://www.optimizely.com/product-updates/commerce/" },
    { product: "Web Experimentation", phase: "In development / beta", items: ["Custom Fields (beta) and Developer Mode", "Contextual Bandits deeper insights", "Web Companion Chrome extension", "Bayesian and Frequentist stats engines", "Experiment Plan Creation Agent (to Jira)"], link: "https://www.optimizely.com/product-updates/web-experimentation/" },
    { product: "Feature Experimentation", phase: "Q2 2026", items: ["Experimentation MCP Server", "React SDK v4 (unlocks Holdouts and CMAB)", "Flag Status across environments", "Custom Fields; Team and Owner flag fields", "Contextual Bandits and copy-a-rule"], link: "https://www.optimizely.com/product-updates/feature-experimentation/" },
    { product: "Personalization", phase: "In development", items: ["Variation and template creation in the Visual Editor", "Contextual Bandits deeper insights", "Web Companion extension", "Bayesian and Frequentist stats engines", "Akamai support for Edge Delivery"], link: "https://www.optimizely.com/product-updates/personalization/" },
    { product: "Data Platform (ODP)", phase: "Q2 '26", items: ["CMS–ODP plugin for real-time personalization", "Opal onboarding agent and integration tools", "Opal contextual actions across ODP", "Agentic audience management (smart suggestions)", "Intent-aware audience creation via RAG"], link: "https://www.optimizely.com/product-updates/platform/" },
  ],
  blogs: [
    { title: "Graph-First B2B Commerce: What Commerce Connect 15 Changes for Configured Commerce Teams", why: "Capitalizes on the May 18 GA while it is fresh. Explains Optimizely.Graph.Commerce replacing Search & Navigation, processor-based order APIs, async repositories, and the PCI-driven move to tokenized payments — the architectural story B2B buyers and SAs need before re-platforming.", audience: "Solution architects, product marketers", difficulty: "Medium", engagement: 8, uniqueness: 8, priority: 8.7 },
    { title: "Inside Opal's Quality Tab: Governing Agentic Execution at Enterprise Scale", why: "The June 1 release is the strongest evidence yet that Optimizely is answering the enterprise governance question. Walk through Output Evaluation, Execution Guardrails, and the Execution Advisor's review of sensitive tool calls, contrasted with competitor governance messaging.", audience: "Devrel leads, product marketers", difficulty: "Medium", engagement: 8, uniqueness: 9, priority: 8.6 },
    { title: "Building with the Optimizely MCP Server: Connecting Opal Agents to Your Stack", why: "Ties the May–June MCP connector releases to the Q2 Experimentation MCP Server roadmap item. A hands-on walkthrough of remote MCP setup (GitHub, Notion, Contentful) positions Optimizely in the active MCP conversation where Kameleoon and VWO are also moving.", audience: "Devrel leads, solution architects", difficulty: "Medium-High", engagement: 8, uniqueness: 8, priority: 8.3 },
    { title: "Agentic Experimentation: How Opal's New Experiment Agents Cut Time-to-Significance", why: "Uses the June 4 Experiment Value Estimator, Backlog Prioritization, and Program Overview agents plus the cited 19%/25% speed figures to show program-level automation, not just variation generation.", audience: "Product marketers, experimentation managers", difficulty: "Low-Medium", engagement: 7, uniqueness: 7, priority: 7.6 },
    { title: "Is Your CMS Actually Agentic? A Buyer's Framework", why: 'Companion content for the June 30 webinar. Defines what "plans, creates, governs, personalizes, tests, optimizes" means in practice and maps it to CMS 13 plus Page Builder agents on the Q2 roadmap.', audience: "Content marketers, solution architects", difficulty: "Low", engagement: 7, uniqueness: 7, priority: 7.4 },
    { title: "From Catalog to Conversion: Opal and Visual Builder on the Commerce Connect 15 Product Catalog", why: "B2B-merchandising angle: catalog entries are now CMS content types, so merchandisers get drag-and-drop Visual Builder, Content Manager search, and Opal-generated product copy. Practical for content teams supporting commerce.", audience: "Content marketers, merchandisers", difficulty: "Medium", engagement: 7, uniqueness: 7, priority: 7.2 },
  ],
  whitepapers: [
    { title: "Enterprise AI Governance for Agentic Marketing: Guardrails, Evaluations, and Audit", why: "Synthesizes the Quality tab, role-based permissions, EU data residency, and notification guardrails into a governance reference for regulated industries. Addresses the gap where community interest is high but official long-form guidance is still thin.", audience: "Solution architects, enterprise buyers", difficulty: "High", engagement: 7, uniqueness: 9, priority: 8.1 },
    { title: "Migrating B2B Catalogs to Graph-First Commerce on .NET 10", why: "A technical migration guide for Commerce Connect 14-to-15: workflow-engine to processor APIs, Newtonsoft to System.Text.Json, Find to Optimizely.Graph.Commerce, and removal of card-storage APIs. Directly serves the Configured Commerce focus bias.", audience: "Solution architects, developers", difficulty: "High", engagement: 6, uniqueness: 8, priority: 7.5 },
  ],
  linkedin: [
    { title: '"Opal\'s Quality tab is the line between agent pilots and agent production"', why: "Pull the three June 1 capabilities into a single point about scaling agents without reviewing every run. Tag the governance conversation.", audience: "Devrel, enterprise marketers", engagement: 7, uniqueness: 8 },
    { title: '"Commerce Connect 15 removed credit-card storage APIs on purpose"', why: "A counter-intuitive hook about PCI scope reduction via tokenization, leading into the graph-first architecture story.", audience: "Solution architects", engagement: 7, uniqueness: 8 },
    { title: '"Three Opal agents that turn experiment results into a QBR"', why: "Highlights the Program Overview, Value Estimator, and Backlog Prioritization agents for experimentation leads building executive narratives.", audience: "Experimentation managers", engagement: 6, uniqueness: 7 },
    { title: '"Two weeks left on Opticon NYC partner early-bird"', why: "Time-boxed promotion: partner early-bird pricing for Opticon (NYC Sep 1, Seth Godin keynote) ends June 30. Drive registrations while the deadline is live.", audience: "Partners, marketers", engagement: 6, uniqueness: 6 },
  ],
  competitive: [
    { theme: "Agentic AI / Opal", optimizely: "Opal orchestration platform with multi-product agents plus production governance (Quality tab, RBAC, EU hosting).", competitor: "Sitecore launched SitecoreAI with Agentic Studio and ~20 pre-built agents; Adobe's Agent Orchestrator reached GA with Brand Intelligence governance.", opportunity: "Lead on cross-product orchestration plus governance depth rather than agent count; show governed agents running across content, commerce, and experimentation." },
    { theme: "MCP Server", optimizely: "Remote MCP connectors in Opal plus dedicated Experimentation and CMS SaaS MCP servers; Experimentation MCP Server on the Q2 roadmap.", competitor: "Kameleoon offers an MCP server via Zapier; VWO exposes an MCP experimentation loop but no dedicated server yet.", opportunity: 'Own the "first-class, multi-product MCP" narrative with hands-on developer content while rivals rely on third-party bridges.' },
    { theme: "Configured Commerce / B2B (graph-first)", optimizely: "Commerce Connect 15 GA on .NET 10 and CMS 13 with graph-powered catalog search and Opal on the catalog.", competitor: "Bloomreach Loomi AI agents automate merchandising for high-SKU retailers; the Bloomreach–Salesforce Commerce cartridge is closed to new implementations as of Jan 1, 2026.", opportunity: "Position graph-first + Opal as a unified content-and-commerce operating model, contrasting with bolt-on merchandising agents." },
    { theme: "Experimentation automation", optimizely: "Opal experiment agents (value, prioritization, program overview) plus Bayesian/Frequentist engines in development.", competitor: "Kameleoon ships Agent AI and AI Copilot for test ideation and analysis; VWO AI covers heatmaps, session-replay summaries, and copy suggestions.", opportunity: "Differentiate on program-level, ROI-quantifying agents and stats rigor rather than single-test copilots." },
    { theme: "Enterprise AI governance", optimizely: "Quality tab evaluation and guardrails, role-based permissions, EU data residency, guardrail notifications.", competitor: "Adobe markets Brand Intelligence and brand-visibility governance; Sitecore acquired Scrunch for AI-search visibility. Contentful is being acquired by Salesforce.", opportunity: "Publish concrete governance reference material now, while competitors' messaging is largely positioning rather than documented controls." },
    { theme: "Agentic CMS / Visual Builder", optimizely: "CMS 13 GA with Visual Builder default, Graph search, embedded DAM, GEO; Page Builder agents on the Q2 roadmap.", competitor: 'Sitecore frames an "agentic era" CMS via SitecoreAI; broader market is layering AI onto legacy architectures.', opportunity: "Use the June 30 webinar's buyer-framework angle to define agentic CMS on Optimizely's terms." },
  ],
  actions: [
    { n: 1, title: "Publish the Graph-First Commerce Connect 15 explainer", why: "Highest-priority Configured Commerce angle and a fresh GA (May 18). Anchor the graph-first, processor-API, and PCI-tokenization story before re-platforming season.", priority: 8.7, format: "Blog + diagram" },
    { n: 2, title: "Ship the Opal Quality Tab governance piece", why: "Differentiates on the enterprise governance question while the June 1 release is current and competitor governance is mostly positioning.", priority: 8.6, format: "Blog feeding a whitepaper" },
    { n: 3, title: "Release an MCP Server quickstart for Opal", why: "Captures developer mindshare in an active category; ties May–June connector releases to the Q2 Experimentation MCP Server.", priority: 8.3, format: "Blog + GitHub sample" },
    { n: 4, title: "Produce the agentic experimentation agents post", why: "Leverages the June 4 program-level agents and the 19%/25% speed metrics to reframe Opal beyond variation generation.", priority: 7.6, format: "Blog + LinkedIn" },
    { n: 5, title: 'Launch the "Is your CMS agentic?" buyer framework', why: "Timed to the June 30 webinar; converts an event into evergreen, GEO-friendly buyer content built on CMS 13 and Page Builder agents.", priority: 7.4, format: "Blog + webinar companion" },
  ],
  next7: [
    { bold: "Promote the June 23 partner Opal session", text: "(Online, 11:00 AM EST) to partner and devrel audiences; capture the roadmap signals on scaffolding, harness, and data moat for follow-up content." },
    { bold: 'Drive registrations for the June 30 "agentic CMS" webinar', text: "and draft the companion buyer-framework blog so it ships the same week." },
    { bold: "Publish the Commerce Connect 15 graph-first explainer", text: "as the lead Configured Commerce asset while the GA is fresh." },
    { bold: "Draft the Opal Quality Tab governance blog", text: "and outline the enterprise AI governance whitepaper it feeds." },
    { bold: "Stand up the MCP Server quickstart", text: "(remote MCP setup plus a GitHub sample) to enter the developer conversation." },
    { bold: "Run the Opticon early-bird LinkedIn push", text: "— partner pricing for NYC (Sep 1) and London (Oct 13) ends June 30." },
  ],
};
