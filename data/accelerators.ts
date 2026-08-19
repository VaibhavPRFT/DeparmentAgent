// ---------------------------------------------------------------------------
// ROYAL CYBER ACCELERATORS — Optimizely Center of Excellence
// ---------------------------------------------------------------------------
// Curated catalogue of Royal Cyber's Optimizely accelerators. The /accelerators
// page is a landing grid of summary cards; each card links to a dedicated
// detail page at /accelerators/<slug>. An optional `video` embeds a walkthrough
// on the detail page. Keep the shape stable; the deploy agent regenerates this
// file from accelerators.json|.docx|.xlsx as "this header + the JSON object".
// ---------------------------------------------------------------------------

export interface AccelBenefit {
  title: string;
  text: string;
}

export interface AccelChallenge {
  title: string;
  text: string;
}

export interface AccelVideo {
  url: string;
  title?: string;
}

export interface Accelerator {
  n: string;            // "01"
  slug: string;         // anchor id / detail-page route, e.g. "optimizely-mcp-server"
  name: string;         // "Optimizely MCP Server"
  category: string;     // "B2B Commerce · Conversational AI"
  tagline: string;      // one-line positioning
  maturity: string;     // "Live pilot" | "In production" | "Production-ready"
  customerValue: string;// headline customer outcome
  overview: string;     // longer description
  benefits: AccelBenefit[];
  technical: string[];  // technical standpoint
  challenge: AccelChallenge;
  resolves: string[];   // how the accelerator resolves the challenge
  idealCustomer: string;
  signals: string[];
  valueOptimizely: string;
  valueRoyalCyber: string;
  video?: AccelVideo;   // optional walkthrough video shown on the detail page
}

export interface AcceleratorsData {
  org: string;
  title: string;
  heading: string;
  intro: string;
  generated: string;
  items: Accelerator[];
}

export const accelerators: AcceleratorsData = {
  "org": "Royal Cyber",
  "title": "Royal Cyber Accelerators",
  "heading": "Four Accelerators, Built for Customer Value",
  "intro": "Each accelerator extends Optimizely with applied AI, analytics and automation — and answers a real customer pain. Built and proven by the Royal Cyber Optimizely Center of Excellence, they shorten time-to-value across B2B commerce, content management, analytics and digital asset management.",
  "generated": "Jun 22, 2026",
  "items": [
    {
      "n": "01",
      "slug": "optimizely-mcp-server",
      "name": "Optimizely MCP Server",
      "category": "B2B Commerce · Conversational AI",
      "tagline": "AI-powered product discovery & order submission",
      "maturity": "Live pilot",
      "customerValue": "Buyers self-serve faster, with fewer support calls.",
      "overview": "An MCP server layer on Configured Commerce lets buyers search in plain language, get contract pricing, and place orders through conversation — turning a large B2B catalog into a guided, AI-native ordering experience.",
      "benefits": [
        {
          "title": "AI-Driven Search",
          "text": "Describe needs in plain English — no menus or SKU lists."
        },
        {
          "title": "Conversational Ordering",
          "text": "Search, select and checkout all through dialogue."
        },
        {
          "title": "Customer-Specific Pricing",
          "text": "Each buyer's contract pricing is applied automatically."
        },
        {
          "title": "Reduced Service Load",
          "text": "Fewer routine order calls and emails reach reps."
        }
      ],
      "technical": [
        "MCP layer integrated with Configured Commerce",
        "Live pilot running inside Microsoft Teams",
        "Non-catalog add-to-cart via photo upload"
      ],
      "challenge": {
        "title": "Slow Product Discovery",
        "text": "Large B2B catalogs and manual order entry stretch sales cycles and tie up CSR teams."
      },
      "resolves": [
        "Conversational search replaces manual catalog navigation.",
        "Plain-language ordering removes manual entry for buyers and CSRs.",
        "Order status, stock and pricing are answered instantly in chat.",
        "Non-catalog parts are added by photo upload."
      ],
      "idealCustomer": "Mid-to-large B2B distributors and manufacturers on Configured Commerce with complex catalogs, contract pricing, and busy CSR teams.",
      "signals": [
        "Large or complex B2B catalog",
        "High volume of phone / email orders",
        "Customer-specific contract pricing",
        "Microsoft Teams already used day-to-day"
      ],
      "valueOptimizely": "An AI-native ordering experience that differentiates Configured Commerce and deepens platform usage.",
      "valueRoyalCyber": "Accelerator-led implementation plus managed services across new channels and catalogs.",
      "video": {
        "url": "https://www.youtube.com/watch?v=emiG2GzLBMo",
        "title": "Optimizely MCP with Microsoft-Copilot"
      }
    },
    {
      "n": "02",
      "slug": "cms-upgrade-modernization",
      "name": "CMS Upgrade Modernization",
      "category": "Digital Experience · Platform Modernization",
      "tagline": "CMS 11 → 12 → 13 with intelligent automation",
      "maturity": "Production-ready",
      "customerValue": "Weeks of upgrade effort cut to under a day.",
      "overview": "An automated framework carries Optimizely CMS through the 11 → 12 → 13 upgrade path with intelligent compatibility checks — far less manual effort and materially lower migration risk.",
      "benefits": [
        {
          "title": "Reduced Upgrade Risk",
          "text": "Compatibility issues are surfaced before migration begins."
        },
        {
          "title": "Faster Delivery",
          "text": "Less manual code review and regression testing."
        },
        {
          "title": "Future-Proof Platform",
          "text": "Lands on a cloud-native, secure, current platform."
        }
      ],
      "technical": [
        "Automated CMS 11 → 12 → 13 framework",
        "Pre-migration compatibility scanning",
        "Less manual review and regression effort"
      ],
      "challenge": {
        "title": "Aging Platforms",
        "text": "Legacy CMS versions raise security risk and maintenance cost."
      },
      "resolves": [
        "Compatibility checks find breaking changes up front.",
        "Automation cuts manual review across 11 → 12 → 13.",
        "Moves customers onto a cloud-native, secure platform.",
        "Lowers risk and effort, shortening time-to-value."
      ],
      "idealCustomer": "Optimizely CMS customers on CMS 11 or early 12, facing rising cost or support deadlines, who want CMS 13 without a risky rebuild.",
      "signals": [
        "Running CMS 11 or early CMS 12",
        "Concerned about end-of-support",
        "Limited capacity for a manual upgrade",
        "Wants newer cloud-native capability"
      ],
      "valueOptimizely": "Moves customers to the latest supported CMS, reducing legacy support and lifting adoption.",
      "valueRoyalCyber": "Defined-scope upgrade engagements plus follow-on enhancement and optimization."
    },
    {
      "n": "03",
      "slug": "power-bi-integration",
      "name": "Power BI Integration",
      "category": "Analytics & Reporting · Configured Commerce",
      "tagline": "Real-time dashboards inside Configured Commerce",
      "maturity": "In production",
      "customerValue": "One trusted set of numbers, faster decisions.",
      "overview": "Commerce, ERP and inventory data are unified into one connected dataset and surfaced as live Power BI dashboards inside Configured Commerce — replacing scheduled pulls and disconnected exports.",
      "benefits": [
        {
          "title": "Single Source of Truth",
          "text": "Commerce, ERP and inventory unified into one dataset."
        },
        {
          "title": "Real-Time Visibility",
          "text": "Revenue, orders and inventory update live."
        },
        {
          "title": "Executive Scorecards",
          "text": "Leadership views built into the commerce platform."
        }
      ],
      "technical": [
        "Power BI embedded inside Configured Commerce",
        "Live client in production today",
        "Replaces scheduled pulls with live data"
      ],
      "challenge": {
        "title": "Limited Reporting Visibility",
        "text": "Commerce, ERP and inventory data sit in separate tools."
      },
      "resolves": [
        "Unifies commerce, ERP and inventory — no manual exports.",
        "Live dashboards replace scheduled, batch reporting.",
        "Executive scorecards give one trusted set of numbers.",
        "Operations and BI reporting run from one platform."
      ],
      "idealCustomer": "Configured Commerce customers running ERP and inventory in separate systems, where teams rely on manual or scheduled reports.",
      "signals": [
        "Commerce, ERP, inventory in separate systems",
        "Manual or scheduled reporting cycles",
        "Leadership asks for 'one number'",
        "Existing or planned Power BI investment"
      ],
      "valueOptimizely": "Positions Configured Commerce as an operational hub, keeping analytics on the platform.",
      "valueRoyalCyber": "Data-integration and dashboard engagements plus recurring scorecard and report work."
    },
    {
      "n": "04",
      "slug": "dam-bulk-upload-automation",
      "name": "DAM Bulk Upload Automation",
      "category": "Digital Asset Management · AI Tagging",
      "tagline": "Automated asset onboarding with metadata",
      "maturity": "Production-ready",
      "customerValue": "Assets live in hours, not weeks.",
      "overview": "AI-assisted tagging brings thousands of assets into Optimizely DAM in hours, applying consistent categories, keywords and taxonomy automatically as files are ingested.",
      "benefits": [
        {
          "title": "Hours, Not Weeks",
          "text": "Rapid migration of large asset libraries into DAM."
        },
        {
          "title": "Consistent Metadata",
          "text": "Categories, keywords and taxonomy applied automatically."
        },
        {
          "title": "Improved Searchability",
          "text": "Teams find the right asset on the first search."
        }
      ],
      "technical": [
        "AI tagging engine during bulk ingestion",
        "Categories and taxonomy applied at upload",
        "Built for large-volume libraries"
      ],
      "challenge": {
        "title": "Asset Governance Gaps",
        "text": "Manual uploads and inconsistent metadata make assets hard to find."
      },
      "resolves": [
        "Bulk automation replaces one-by-one uploads.",
        "AI tagging applies consistent metadata automatically.",
        "Consistent metadata improves search accuracy.",
        "Reduces ongoing manual governance overhead."
      ],
      "idealCustomer": "Optimizely DAM customers and prospects with large or growing libraries, multiple contributing teams, and inconsistent metadata.",
      "signals": [
        "Large or fast-growing asset library",
        "Multiple teams contributing assets",
        "Inconsistent metadata or taxonomy",
        "Migrating from legacy DAM or shared drives"
      ],
      "valueOptimizely": "Accelerates DAM adoption and time-to-value, supporting attach and renewal.",
      "valueRoyalCyber": "Migration and onboarding plus ongoing taxonomy and governance services."
    }
  ]
}
;
