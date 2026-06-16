// ---------------------------------------------------------------------------
// OPTIMIZELY DEPARTMENT AGENT — weekly sweep output data
// ---------------------------------------------------------------------------
// Structured output of the Department Agent's "Trend & Content Opportunities"
// report. Replace the `report` object below with the agent's latest run to
// refresh the dashboard. Keep the same shape.
// ---------------------------------------------------------------------------

export interface Trend {
  rank: number;
  title: string;
  momentum: string;
  body: string;
  sources: string[];
}

export interface ReleaseUpdate {
  product: string;
  date: string;
  highlight: string;
  type: string;
}

export interface EventItem {
  event: string;
  when: string;
  focus: string;
  register: string;
}

export interface BlogOpportunity {
  title: string;
  audience: string;
  engagement: number;
  difficulty: string;
  whyNow: string;
}

export interface WhitepaperOpportunity {
  topic: string;
  businessValue: string;
  technicalDepth: string;
  audience: string;
}

export interface LinkedInGroup {
  group: string;
  ideas: string[];
}

export interface Report {
  eyebrow: string;
  title: string;
  generated: string;
  lede: string;
  trends: Trend[];
  releases: ReleaseUpdate[];
  events: EventItem[];
  blogs: BlogOpportunity[];
  whitepapers: WhitepaperOpportunity[];
  linkedin: LinkedInGroup[];
}

export const report: Report = {
  eyebrow: "Optimizely Department Agent · Weekly Sweep",
  title: "Optimizely Trend and Content Opportunities",
  generated: "Jun 10, 2026 11:59 IST",
  lede: "The MCP Server is the breakout of this cycle. Optimizely shipped a commerce MCP with eight buyer-journey capabilities in May 2026 — the same quarter Adobe made MCP its default commerce agent protocol and Sitecore added custom MCP connectors. The window to own B2B-MCP content is open now, before competitors saturate it. This edition also tracks the latest product release notes and upcoming events.",
  trends: [
    {
      rank: 1,
      title: "MCP Server: AI that speaks commerce",
      momentum: "13",
      body: "Optimizely's commerce MCP Server launched in May 2026 with eight core capabilities spanning discovery to checkout, alongside hosted Experimentation and Analytics MCP servers. This is the fastest-moving theme: multiple May posts, official support docs, and press in a single 30-day band. Buyers, sales reps, and procurement teams can now search, transact, and manage the journey in natural language.",
      sources: [
        "world.optimizely.com/blogs/vaibhav/dates/2026/5/introducing-the-optimizely-mcp-server/",
        "world.optimizely.com/blogs/jacob-pretorius/dates/2026/5/a-first-look-at-optimizely-remote-mcp-server-for-experimentation/",
        "support.optimizely.com/hc/en-us/articles/45320607594893-Optimizely-Experimentation-MCP-server-overview",
        "cmswire.com/digital-experience/optimizely-launches-remote-mcp-server-to-bring-experimentation-into-ai-tools/",
      ],
    },
    {
      rank: 2,
      title: "Enterprise AI governance gap (GAP)",
      momentum: "7.5",
      body: "External research is loud — 72% of firms run agentic AI in production while 60% lack formal governance — but Optimizely-specific guardrail guidance for Opal and MCP is thin. Opal's new Quality tab (released June 1, 2026: Output Evaluation, Execution Guardrails, Execution Advisor) is the product-side answer, yet practitioner-facing guidance on how to apply it remains a content gap to own.",
      sources: [
        "support.optimizely.com/hc/en-us/articles/46195603210125-Quality-tab-overview",
        "gartner.com/en/articles/hype-cycle-for-agentic-ai",
        "agenticaiinstitute.org/agentic-ai-enterprise-adoption-2026-governance-gap/",
        "deloitte.com/us/en/insights/topics/emerging-technologies/ai-agents-scaling-faster.html",
      ],
    },
    {
      rank: 3,
      title: "Opal agent orchestration",
      momentum: "9.5",
      body: "Optimizely has launched 15+ out-of-the-box agents in 2026 and Opal University drew 1,100+ sign-ups in two weeks with a 1,500+ waitlist; one cohort built 375 agents in five days. Conversation Mode, Chat Pills, and Action Cards push Opal from feature to platform.",
      sources: [
        "optimizely.com/ai/",
        "optimizely.com/insights/whats-new-in-optimizely-opal-may-2026/",
        "prnewswire.com/news-releases/optimizely-opal-university-participants-build-375-ai-agents-in-five-days-as-demand-grows-for-hands-on-ai-training-302736383.html",
        "world.optimizely.com/blogs/opti-chronicles/dates/2026/3/optimizely-opal-agents-in-action-2026---what-agentic-ai-means-for-the-future-of-digital-marketing/",
      ],
    },
    {
      rank: 4,
      title: "Graph-first commerce: Commerce 15 + CMS 13",
      momentum: "9.5",
      body: "Commerce 15 (mid-May 2026) and CMS 13 center delivery on Optimizely Graph, enabling hybrid-headless, GraphQL-first commerce. Graph for Commerce Connect exposes catalog, prices, inventory, and variants through a single edge endpoint — a direct B2B catalog play.",
      sources: [
        "world.optimizely.com/blogs/opti-chronicles/dates/2026/4/commerce-15-and-cms-13-optimizelys-next-step-toward-ai-powered-graph-first-commerce/",
        "world.optimizely.com/blogs/aniket-gadre/dates/2026/3/the-future-of-content-introducing-optimizely-cms-13/",
        "docs.developers.optimizely.com/commerce-connect/docs/optimizely-graph-for-commerce-connect",
      ],
    },
    {
      rank: 5,
      title: "Agentic AI for platform upgrades & migration",
      momentum: "5.5",
      body: "A two-part May 2026 field series shows teams using agentic AI to accelerate CMS and Commerce upgrades. Migration off CMS 12 / Customized Commerce is a live, costly concern; agent-assisted upgrade playbooks are scarce.",
      sources: [
        "world.optimizely.com/blogs/hung-le-hoang/dates/2026/5/accelerating-optimizely-cms-and-commerce-upgrades-with-agentic-ai-part-1-of-2/",
        "world.optimizely.com/blogs/hung-le-hoang/dates/2026/5/accelerating-optimizely-cms-and-commerce-upgrades-with-agentic-ai-part-2-of-22/",
      ],
    },
    {
      rank: 6,
      title: "Configured Commerce B2B enhancements",
      momentum: "7",
      body: "Q2 2026 brings ODP-driven bill-to/ship-to B2B profiles, ngram part-number search, Cloudflare-for-SaaS O2O, in-platform DAM, Datadog-in-Mission-Control, and AI bulk translations to PIM (Q3). Concrete, shippable B2B angles — the team's primary surface.",
      sources: [
        "optimizely.com/product-updates/commerce/",
        "b2bea.org/optimizely-brings-ai-powered-commerce-content-and-experimentation-for-manufacturers-and-distributors",
        "optimizely.com/insights/ai-in-b2b-commerce-masterclass-series/",
      ],
    },
    {
      rank: 7,
      title: "Visual Builder data binding & SaaS CMS",
      momentum: "5.5",
      body: "2026 Visual Builder updates add data-bound content loading, block property binding, direct data-source binding, conditional form-field rules, and external DAM/PIM connections — lowering the technical bar for marketers on SaaS CMS.",
      sources: [
        "support.optimizely.com/hc/en-us/articles/27677034133645-2026-CMS-SaaS-release-notes",
        "docs.developers.optimizely.com/content-management-system/v1.0.0-CMS-SaaS/docs/get-started-with-visual-builder",
      ],
    },
  ],
  releases: [
    { product: "Optimizely Opal", date: "Jun 8, 2026", highlight: "PowerPoint and Word document creation — Opal can read, create, and edit .docx and .pptx files via the code_execution tool.", type: "New feature" },
    { product: "Optimizely Opal", date: "Jun 4, 2026", highlight: "EU app hosting (data residency); Limitless 1:1 Personalization; five new agents (Experimentation Program Overview, Experiment Value Estimator, Experiment Backlog Prioritization, Standard & Real-time Audience Builders); Microsoft Teams/Outlook and Google Ads connector tools; Gamma and GitHub remote MCP connectors.", type: "New features" },
    { product: "Optimizely Opal", date: "Jun 1, 2026", highlight: "Quality tab for specialized agents — Output Evaluation, Execution Guardrails, and Execution Advisor for scoring, drift detection, and run recovery.", type: "New feature" },
    { product: "Optimizely Opal", date: "May 27, 2026", highlight: "Skills section on specialized agents — reusable brand voice, taxonomies, and compliance language applied without rewriting prompts.", type: "Enhancement" },
    { product: "CMS 13 (PaaS)", date: "Apr 9, 2026", highlight: "EPiServer.Forms 6.0.0 made compatible with CMS 13; import/export bug fix (CMS-50238).", type: "Enhancement & bug fix" },
    { product: "CMS 13 (PaaS)", date: "Apr 7, 2026", highlight: "Opal Chat and tools released (Optimizely.Cms.OpalChat 2.0.0) — create/manage content and content types, SEO, and AI discoverability from chat.", type: "Enhancement" },
    { product: "CMS 13 (PaaS)", date: "Mar 31, 2026", highlight: "CMS 13 general availability (GA) release.", type: "GA release" },
  ],
  events: [
    { event: "Summer Series: Opal in Action", when: "Weekly · Tuesdays · Virtual", focus: "Live demos of Opal agents across content, campaign, and experimentation use cases; live Q&A. Register once for the next available Tuesday session.", register: "optimizely.com/insights/summer-series-opal-in-action/" },
    { event: "Opal Certification World Tour (Operation Opal)", when: "In-person · rolling cities", focus: "One-day, hands-on Opal certification workshops in an Opal sandbox; build and deliver AI-accelerated solutions.", register: "optimizely.com/operation-opal/" },
    { event: "Opal U: AI Marketing University", when: "Online · self-paced cohort", focus: "Certification track for building marketing AI agents and campaigns end to end with Opal.", register: "optimizely.com/ai-marketing-certificate/" },
    { event: "Opal U: AI Experimentation University", when: "Online · self-paced cohort", focus: "Certification track for AI-accelerated experimentation programs with Opal.", register: "optimizely.com/ai-experimentation-certificate/" },
  ],
  blogs: [
    { title: "Eight Capabilities, One Conversation: A Developer's Tour of the Optimizely MCP Server", audience: "DevRel leads, solution architects", engagement: 9, difficulty: "Intermediate", whyNow: "MCP Server shipped May 2026; first-mover window before the topic saturates." },
    { title: "Governing Agentic Commerce: Guardrails for Opal + MCP in the Enterprise", audience: "Solution architects, product marketers", engagement: 9, difficulty: "Advanced", whyNow: "60% of firms lack formal AI governance; Optimizely-specific guidance is thin (open gap)." },
    { title: "Graph-First B2B: Wiring Configured Commerce Catalog into Optimizely Graph", audience: "Solution architects", engagement: 8, difficulty: "Advanced", whyNow: "Commerce 15 + CMS 13 center on Graph; single-endpoint B2B catalog access is new." },
    { title: "From 15 Out-of-the-Box Opal Agents to Your First Custom B2B Commerce Agent", audience: "Content marketers, DevRel", engagement: 8, difficulty: "Intermediate", whyNow: "15+ OOTB agents launched 2026; Opal University demand and waitlist surging." },
    { title: "Upgrading CMS 12 to CMS 13 with Agentic AI: A Field Playbook", audience: "DevRel leads, solution architects", engagement: 7, difficulty: "Advanced", whyNow: "Two-part May 2026 series signals demand; migration is an active, costly decision." },
    { title: "Ngram Part-Number Search in Configured Commerce: When Buyers Only Know Half the SKU", audience: "Content marketers, solution architects", engagement: 7, difficulty: "Intermediate", whyNow: "Q2 2026 search feature ships; concrete B2B buyer-experience win." },
    { title: "Headless at Scale: Lessons from 64 Sites on Optimizely Graph", audience: "Solution architects", engagement: 7, difficulty: "Advanced", whyNow: "Rockwool multi-brand rollout (Mar 2026) is a fresh, quotable proof point." },
  ],
  whitepapers: [
    { topic: "The Agentic Commerce Stack: MCP + Opal + Graph for B2B Distributors", businessValue: "High — positions Optimizely directly against Adobe and Salesforce on agentic B2B", technicalDepth: "Advanced", audience: "Solution architects, product marketers" },
    { topic: "AI Governance for Marketing & Commerce Agents", businessValue: "High — answers the enterprise readiness/control concern that competitors have not addressed for the Optimizely stack", technicalDepth: "Intermediate", audience: "Enterprise buyers, compliance and IT governance leads" },
    { topic: "Migrating to Graph-First Commerce: A CMS 13 & Commerce 15 Architecture Guide", businessValue: "High — de-risks the upgrade decision and captures migration intent", technicalDepth: "Advanced", audience: "Solution architects, DevRel leads" },
  ],
  linkedin: [
    {
      group: "Short-form",
      ideas: [
        "\"Eight capabilities, one conversation.\" Break down what the Optimizely MCP Server actually does across the buyer journey.",
        "375 AI agents in five days. What Opal University's first cohorts reveal about pent-up demand for hands-on agent building.",
      ],
    },
    {
      group: "Controversial",
      ideas: [
        "Most \"AI search\" in B2B is a chatbot bolted onto a catalog. MCP is a different architecture — here's why that matters.",
        "Optimizely Commerce on CMS 13 vs. ripping it out for composable: stop treating this as obvious and weigh the real trade-offs.",
      ],
    },
    {
      group: "Technical Quick Wins",
      ideas: [
        "Ngram part-number search in Configured Commerce: let buyers find a SKU when they only remember half of it.",
        "Lean Graph queries: request exactly the fields you need for faster, cheaper headless responses.",
        "Bind a block to a data source directly in Visual Builder — no code, on SaaS CMS.",
      ],
    },
    {
      group: "Architecture Visuals",
      ideas: [
        "One diagram: how an MCP request flows from an AI assistant through the eight commerce capabilities to checkout.",
        "Graph-first commerce reference architecture for Commerce 15 + CMS 13.",
        "Opal agent orchestration map: simple assistants vs. specialized vs. workflow/autonomous agents.",
      ],
    },
  ],
};
