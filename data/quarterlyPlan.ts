// ---------------------------------------------------------------------------
// ROYAL CYBER — OPTIMIZELY QUARTERLY PLAN
// ---------------------------------------------------------------------------
// Forward-looking quarterly roadmap for the Optimizely practice. We are at the
// end of Q2 2026, so this plan covers Q3 (Jul–Sep) and Q4 (Oct–Dec) 2026.
// It is derived from the active initiatives that run through the weekly plan
// (MCP & agents, Graph, Opal, CMS 11→12→13 migrations, Configured Commerce
// .NET modernization, accelerators, GEO/AI-governance). The /quarterly-plan
// page reads each quarter's `start` to auto-open the current quarter. Keep the
// shape stable; this file is maintained quarterly and is NOT touched by the
// weekly auto-deploy agent.
// ---------------------------------------------------------------------------

export type InitiativeStatus = "todo" | "prog" | "sched" | "done";

export interface QuarterInitiative {
  month: string; // "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"
  initiative: string;
  detail: string;
  track: string; // theme, e.g. "MCP & Agents", "CMS Migration", "Commerce"
  owner: string;
  department: string;
  goal: string;
  status: InitiativeStatus;
}

export interface QuarterFocus {
  team: string;
  text: string;
}

export interface PlanQuarter {
  id: string; // "q3" | "q4"
  label: string; // "Q3 2026"
  title: string;
  subtitle: string; // "Jul – Sep 2026  |  …"
  period: string; // "Jul 1 – Sep 30, 2026"
  start: string; // ISO date used to auto-select the current quarter
  theme: string;
  focus: QuarterFocus[];
  objectives: string[];
  initiatives: QuarterInitiative[];
}

export interface QuarterlyPlan {
  org: string;
  generated: string;
  fiscalNote: string;
  quarters: PlanQuarter[];
}

export const quarterlyPlan: QuarterlyPlan = {
  org: "Royal Cyber",
  generated: "Jun 26, 2026",
  fiscalNote:
    "We are at the end of Q2 2026 — this roadmap looks ahead to Q3 (Jul–Sep) and Q4 (Oct–Dec) 2026.",
  quarters: [
    {
      id: "q3",
      label: "Q3 2026",
      title: "Q3 2026 — Scale agentic commerce & finish the CMS 13 story",
      subtitle:
        "Jul – Sep 2026  |  Commerce MCP to GA, CMS 12→13 + .NET modernization, GEO measurement, Opticon NY",
      period: "Jul 1 – Sep 30, 2026",
      start: "2026-07-01",
      theme:
        "Turn this quarter's momentum on MCP, CMS 13 and Configured Commerce into shipped accelerators and a strong Opticon presence.",
      focus: [
        { team: "Practice", text: "Ship the Commerce MCP buyer-journey and .NET Core 8.0 modernization accelerators; stand up GEO / Agent Visibility measurement." },
        { team: "Content", text: "Publish the Commerce MCP reference architecture and the 'Agentic Architect' governance whitepaper." },
        { team: "Marketing", text: "Run the CMS MCP and modernization campaigns and open the Opticon NY content runway." },
        { team: "Partnerships", text: "Showcase Royal Cyber accelerators at Opticon NY (Sep 1) and Digital Summit Sydney (Aug 14)." },
      ],
      objectives: [
        "Take the Commerce MCP buyer-journey accelerator to GA with a published reference architecture.",
        "Complete the CMS 12→13 migration accelerator and launch the Configured Commerce .NET Core 8.0 modernization offer.",
        "Stand up a GEO / Agent Visibility Analytics measurement service.",
        "Represent Royal Cyber at Digital Summit Sydney and Opticon New York.",
      ],
      initiatives: [
        { month: "Jul", initiative: "CMS MCP Server integration with Royal Cyber CMS", detail: "Carry the Week 6 integration through to a live, demoable Royal Cyber CMS instance.", track: "MCP & Agents", owner: "Vaibhav", department: "Practice", goal: "Integration live", status: "prog" },
        { month: "Jul", initiative: "Configured Commerce .NET 4.8 → Core 8.0 accelerator", detail: "Productize the modernization path from the Week 5 campaign into a repeatable accelerator.", track: "Commerce", owner: "Aniket Dabholkar", department: "Practice", goal: "Accelerator GA", status: "prog" },
        { month: "Jul", initiative: "Commerce MCP buyer-journey blog + reference architecture", detail: "Publish the technical walkthrough and B2B order architecture while the docs gap is open.", track: "MCP & Agents", owner: "Vaibhav", department: "Content", goal: "Published", status: "prog" },
        { month: "Jul", initiative: "Opticon NY content runway kickoff", detail: "Brief the teaser series anchored on agentic experiences ahead of Sep 1.", track: "Enablement", owner: "Pooja", department: "Marketing", goal: "Teaser series briefed", status: "todo" },
        { month: "Aug", initiative: "GEO & Agent Visibility Analytics offering", detail: "Package CMS 13 Agent Visibility + GEO tooling into a measurement service.", track: "CMS / GEO", owner: "Saurabh Mayekar", department: "Practice", goal: "Offering launched", status: "todo" },
        { month: "Aug", initiative: "Power BI Integration accelerator v2 (multi-source)", detail: "Extend the live Power BI accelerator to additional ERP / inventory sources.", track: "Analytics", owner: "Savita Sapra", department: "Practice", goal: "v2 shipped", status: "todo" },
        { month: "Aug", initiative: "AI governance whitepaper — 'The Agentic Architect' Pt. 2", detail: "Evaluations, guardrails and EU data residency as the enterprise governance story.", track: "Enablement", owner: "Vaibhav", department: "Practice", goal: "Published", status: "todo" },
        { month: "Aug", initiative: "Optimizely Digital Summit Sydney (Aug 14)", detail: "Represent Royal Cyber and gather APAC pipeline signals.", track: "Partnerships", owner: "Sourav Roy", department: "Partnerships", goal: "RC represented", status: "sched" },
        { month: "Sep", initiative: "Opticon NY 2026 (Sep 1) — accelerator showcase", detail: "Demo the MCP, CMS-upgrade and DAM accelerators at the New York keynote week.", track: "Partnerships", owner: "Vaibhav", department: "Partnerships", goal: "Demos delivered", status: "sched" },
        { month: "Sep", initiative: "Open-source Optimizely MCP quickstart repo", detail: "Public quickstart to manage flags & experiments from Claude/ChatGPT and seed GitHub signal.", track: "MCP & Agents", owner: "Aniket Dabholkar", department: "Practice", goal: "Repo public", status: "todo" },
        { month: "Sep", initiative: "DAM Bulk Upload accelerator GA + case study", detail: "Finalize AI-tagging bulk ingestion accelerator and publish a customer case study.", track: "DAM", owner: "Megha Rai", department: "Practice", goal: "GA + case study", status: "todo" },
        { month: "Sep", initiative: "Q3 review & Q4 planning", detail: "Retrospective on Q3 delivery and lock the Q4 roadmap and backlog.", track: "Internal", owner: "Vaibhav", department: "Practice", goal: "Q4 plan locked", status: "todo" },
      ],
    },
    {
      id: "q4",
      label: "Q4 2026",
      title: "Q4 2026 — Productize accelerators & lead on AI governance",
      subtitle:
        "Oct – Dec 2026  |  Accelerator productization, EMEA Opticon, ODP personalization, renewals & 2027 roadmap",
      period: "Oct 1 – Dec 31, 2026",
      start: "2026-10-01",
      theme:
        "Convert the quarter's accelerators into repeatable, priced offers and own the AI-governance + GEO narrative across EMEA, then close the year strong.",
      focus: [
        { team: "Practice", text: "Productize the top accelerators (packaging + pricing) and pilot ODP real-time personalization." },
        { team: "Marketing", text: "Run the AI-governance leadership campaign (evaluations, guardrails, EU residency)." },
        { team: "Partnerships", text: "Lead the EMEA accelerator showcase at Opticon London (Oct 13) and Online (Oct 21)." },
        { team: "Sales", text: "Secure renewals and QBRs with key accounts and tee up 2027 expansion." },
      ],
      objectives: [
        "Package the MCP and CMS-Upgrade accelerators into repeatable offers with pricing.",
        "Lead the AI-governance and GEO-measurement narrative across EMEA.",
        "Pilot the CMS–ODP real-time personalization accelerator.",
        "Close the year with renewals, QBRs and an approved 2027 roadmap.",
      ],
      initiatives: [
        { month: "Oct", initiative: "Opticon London (Oct 13) + Online (Oct 21)", detail: "EMEA accelerator showcase and pipeline generation across the two events.", track: "Partnerships", owner: "Sourav Roy", department: "Partnerships", goal: "EMEA pipeline", status: "sched" },
        { month: "Oct", initiative: "Accelerator productization — MCP & CMS Upgrade", detail: "Define packaging, scope and pricing for the two flagship accelerators.", track: "Enablement", owner: "Vaibhav", department: "Practice", goal: "Offer packs ready", status: "todo" },
        { month: "Oct", initiative: "CMS–ODP real-time personalization accelerator", detail: "Pilot the CMS–ODP plugin for real-time audiences inside visitor groups.", track: "Data / Personalization", owner: "Saurabh Mayekar", department: "Practice", goal: "Pilot live", status: "todo" },
        { month: "Nov", initiative: "AI governance leadership campaign", detail: "Campaign on evaluations, guardrails and EU data residency, building on the whitepaper.", track: "Marketing", owner: "Pooja", department: "Marketing", goal: "Campaign launched", status: "todo" },
        { month: "Nov", initiative: "Personalization Variation Development Agent enablement", detail: "Certify the team on Opal's Variation Development Agent in the Visual Editor.", track: "Enablement", owner: "Swapnil Varade", department: "Practice", goal: "Team certified", status: "todo" },
        { month: "Nov", initiative: "Customer case studies — CMS 13 & Commerce MCP wins", detail: "Document delivered outcomes into reusable sales proof points.", track: "Content", owner: "Zainab", department: "Content", goal: "3 case studies", status: "todo" },
        { month: "Dec", initiative: "2027 roadmap & accelerator backlog planning", detail: "Set the 2027 practice roadmap and prioritize the accelerator backlog.", track: "Internal", owner: "Vaibhav", department: "Practice", goal: "Roadmap approved", status: "todo" },
        { month: "Dec", initiative: "Renewals & QBRs with key accounts", detail: "Renewal cycles and quarterly business reviews with JE Dunn, White Cap and Rent A Center.", track: "Sales", owner: "Sourav Roy", department: "Sales", goal: "Renewals secured", status: "todo" },
        { month: "Dec", initiative: "Year-end practice retro & certifications refresh", detail: "Close-out retrospective and refresh Optimizely certifications across the team.", track: "Internal", owner: "Vaibhav", department: "Practice", goal: "Retro complete", status: "todo" },
      ],
    },
  ],
};
