// ---------------------------------------------------------------------------
// OPTIMIZELY WEEKLY PLAN AGENT — output data
// ---------------------------------------------------------------------------
// This file holds the structured output of the Weekly Plan agent.
// To refresh the dashboard, replace the `weeklyPlan` object below with the
// agent's latest run. Keep the shape the same and the UI updates automatically.
// ---------------------------------------------------------------------------

export type TaskStatus = "todo" | "prog" | "sched" | "done";

export type TaskType =
  | "Blog Post"
  | "Blog"
  | "Whitepaper"
  | "LinkedIn Post"
  | "Internal Milestone"
  | "Review"
  | "Meeting"
  | "Campaign"
  | "Accelerator"
  | "Integration";

export interface PlanTask {
  day: string;
  date: string;
  activity: string;
  team: string;
  name?: string;
  type: TaskType;
  kpi: string;
  status: TaskStatus;
}

export interface FocusCard {
  team: string;
  text: string;
}

export interface PlanWeek {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  focus: FocusCard[];
  tasks: PlanTask[];
}

export interface WeeklyPlan {
  org: string;
  generated: string;
  weeks: PlanWeek[];
}

export const weeklyPlan: WeeklyPlan = {
  org: "Royal Cyber",
  generated: "Jun 11, 2026 11:34 IST",
  weeks: [
    {
      id: "wk1",
      label: "Week 1",
      title:
        "Royal Cyber — Week 1: Optimizely Visibility Sprint Foundation",
      subtitle:
        "Jun 01 – Jun 05, 2026  |  MCP Server + CMS 13 Visual Builder content",
      focus: [
        {
          team: "Marketing",
          text: "Kick off Optimizely visibility sprint, assign owners, set Slack signal alerts and publish Week 1 social posts.",
        },
        {
          team: "Content",
          text: "Draft and publish Blog Post 1 and Blog Post 2 from the two-week plan.",
        },
        {
          team: "Practice",
          text: "Provide technical review for MCP server IDE integration and CMS 12→13 Visual Builder checklist.",
        },
        {
          team: "Design",
          text: "Prepare checklist and architecture visuals for blogs and LinkedIn support.",
        },
      ],
      tasks: [
        { day: "Mon", date: "Jun 01", activity: "Kick-off: assign owners & set Slack signal alerts", team: "Practice Head", name: "VW", type: "Internal Milestone", kpi: "Owners assigned / alerts set", status: "todo" },
        { day: "Mon", date: "Jun 01", activity: "Post: 'Query Optimizely Analytics from your IDE via MCP — no API needed'", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", status: "todo" },
        { day: "Tue", date: "Jun 02", activity: "Beyond Scripts — Querying Optimizely with MCP Servers in your IDE", team: "Technical Writer", type: "Blog Post", kpi: "Draft completed", status: "todo" },
        { day: "Wed", date: "Jun 03", activity: "Blog review & publish: MCP server IDE integration", team: "Editor + Architect", type: "Blog Post", kpi: "Reviewed and published", status: "todo" },
        { day: "Wed", date: "Jun 03", activity: "Post: 'Rethink your CMS 13 migration — lift-and-shift won't unlock its potential'", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", status: "todo" },
        { day: "Thu", date: "Jun 04", activity: "CMS 12 to 13 — the developer's checklist for Visual Builder", team: "Technical Writer", type: "Blog Post", kpi: "Draft completed", status: "todo" },
        { day: "Thu", date: "Jun 04", activity: "Whitepaper kick-off: 'The Agentic Architect' — outline & research", team: "Senior Architect", type: "Whitepaper", kpi: "Outline approved", status: "todo" },
        { day: "Fri", date: "Jun 05", activity: "Blog publish: CMS 12 to 13 Visual Builder checklist", team: "Editor", type: "Blog Post", kpi: "Published", status: "todo" },
        { day: "Fri", date: "Jun 05", activity: "Post: 'New open-source Graph Search Tools — synonym control is back for marketers'", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", status: "todo" },
        { day: "Fri", date: "Jun 05", activity: "Weekly standup: review Week 1 content progress and blockers", team: "All Teams", type: "Review", kpi: "Status logged", status: "todo" },
      ],
    },
    {
      id: "wk2",
      label: "Week 2",
      title: "Royal Cyber — Week 2: Optimizely Graph + Opal Content Sprint",
      subtitle:
        "Jun 08 – Jun 12, 2026  |  Graph Search Tools + Opal agents / credits content",
      focus: [
        { team: "Marketing", text: "Publish Graph Search Tools and Opal content. Promote whitepaper and LinkedIn assets." },
        { team: "Content", text: "Draft and publish Blog Posts 3–4 plus LinkedIn Posts 4–5." },
        { team: "Practice", text: "Review Opal, CMS architecture and CompositionNode → Graph → Headless messaging." },
        { team: "Design", text: "Begin whitepaper design and architecture visual assets." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 08", activity: "Open-Source wins — Graph Search Tools for Optimizely marketers", team: "Content Writer", type: "Blog Post", kpi: "Draft completed", status: "todo" },
        { day: "Mon", date: "Jun 08", activity: "Whitepaper draft sections 1–3: 'The Agentic Architect'", team: "Senior Architect", type: "Whitepaper", kpi: "Draft completed", status: "todo" },
        { day: "Tue", date: "Jun 09", activity: "Blog publish: Graph Search Tools for marketers", team: "Editor", type: "Blog Post", kpi: "Published", status: "todo" },
        { day: "Tue", date: "Jun 09", activity: "Post: 'Opal agents explained — Simple, Specialized, and Autonomous'", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", status: "todo" },
        { day: "Wed", date: "Jun 10", activity: "Demystifying Opal — agents, credits, and what it means for your DXP budget", team: "Content Writer", type: "Blog Post", kpi: "Draft completed", status: "todo" },
        { day: "Wed", date: "Jun 10", activity: "Whitepaper draft sections 4–6: governance, RC framework, case study", team: "Senior Architect", type: "Whitepaper", kpi: "Draft completed", status: "todo" },
        { day: "Thu", date: "Jun 11", activity: "Blog publish: Demystifying Opal agents and credits", team: "Editor", type: "Blog Post", kpi: "Published", status: "todo" },
        { day: "Thu", date: "Jun 11", activity: "Whitepaper full draft review: 'The Agentic Architect'", team: "Practice Head", type: "Whitepaper", kpi: "Review completed", status: "todo" },
        { day: "Fri", date: "Jun 12", activity: "Architecture visual: CompositionNode → Graph → headless frontend", team: "Technical Writer + Designer", type: "LinkedIn Post", kpi: "Post published", status: "todo" },
        { day: "Fri", date: "Jun 12", activity: "Sprint retro: measure reach, plan Week 3 whitepaper push", team: "Practice Head", type: "Internal Milestone", kpi: "Retro completed", status: "todo" },
        { day: "Fri", date: "Jun 12", activity: "Finalise & design 'The Agentic Architect' whitepaper for publication", team: "Designer", type: "Internal Milestone", kpi: "Design ready", status: "todo" },
        { day: "Fri", date: "Jun 12", activity: "Weekly standup: all teams report vs Week 2 targets", team: "All Teams", type: "Review", kpi: "Status logged", status: "todo" },
      ],
    },
    {
      id: "wk3",
      label: "Week 3",
      title:
        "Royal Cyber + Optimizely — Week 3: CMS 11 to CMS 12 Migration + Partnership Showcase",
      subtitle:
        "Jun 15 – Jun 19, 2026  |  CMS 11→12 migration campaign and RC Accelerator showcase",
      focus: [
        { team: "Marketing", text: "Publish CMS 11→12 migration blog and prepare campaign assets." },
        { team: "Practice", text: "Build CMS 11→12 migration accelerator and demo video." },
        { team: "Partnerships", text: "Conduct Optimizely partnership meeting on Jun 16 to showcase RC Accelerator." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 15", activity: "Blog post: CMS migration from CMS 11 to CMS 12", team: "Marketing", type: "Blog", kpi: "Blog published", status: "todo" },
        { day: "Tue", date: "Jun 16", activity: "Partnership meeting with Optimizely to showcase RC Accelerator", team: "Partnerships", type: "Meeting", kpi: "Meeting completed", status: "sched" },
        { day: "Wed", date: "Jun 17", activity: "Accelerator for CMS 11 to CMS 12 migration and video", team: "Practice", type: "Accelerator", kpi: "Demo video ready", status: "todo" },
        { day: "Fri", date: "Jun 19", activity: "Campaign launch for CMS 11 to CMS 12 migration", team: "Marketing", type: "Campaign", kpi: "Campaign launched", status: "todo" },
        { day: "Fri", date: "Jun 19", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", status: "todo" },
      ],
    },
    {
      id: "wk4",
      label: "Week 4",
      title: "Royal Cyber — Week 4: CMS 12 to CMS 13 Migration Campaign",
      subtitle:
        "Jun 22 – Jun 26, 2026  |  Blog, Accelerator, Video and Campaign launch",
      focus: [
        { team: "Marketing", text: "Publish CMS 12→13 migration blog and prepare campaign assets." },
        { team: "Practice", text: "Build CMS 12→13 migration accelerator and demo video." },
        { team: "Sales", text: "Align campaign follow-up with CMS modernization prospects." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 22", activity: "Blog post: CMS migration from CMS 12 to CMS 13", team: "Marketing", type: "Blog", kpi: "Blog published", status: "todo" },
        { day: "Wed", date: "Jun 24", activity: "Accelerator for CMS 12 to CMS 13 migration and video", team: "Practice", type: "Accelerator", kpi: "Demo video ready", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Campaign launch for CMS 12 to CMS 13 migration", team: "Marketing", type: "Campaign", kpi: "Campaign launched", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", status: "todo" },
      ],
    },
    {
      id: "wk5",
      label: "Week 5",
      title: "Royal Cyber — Week 5: Configured Commerce .NET Modernization",
      subtitle:
        "Jun 29 – Jul 03, 2026  |  .NET SDK 4.8 to .NET Core 8.0 migration campaign",
      focus: [
        { team: "Marketing", text: "Publish Configured Commerce .NET modernization blog and campaign assets." },
        { team: "Practice", text: "Build accelerator for .NET SDK 4.8 to .NET Core 8.0 migration." },
        { team: "Sales", text: "Prepare outreach messaging for commerce modernization opportunities." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 29", activity: "Blog post: Configured Commerce migration from .NET SDK 4.8 to .NET Core 8.0", team: "Marketing", type: "Blog", kpi: "Blog published", status: "todo" },
        { day: "Wed", date: "Jul 01", activity: "Accelerator for .NET SDK 4.8 to .NET Core 8.0 migration", team: "Practice", type: "Accelerator", kpi: "Accelerator ready", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Campaign launch for .NET SDK 4.8 to .NET Core 8.0", team: "Marketing", type: "Campaign", kpi: "Campaign launched", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", status: "todo" },
      ],
    },
    {
      id: "wk6",
      label: "Week 6",
      title: "Royal Cyber — Week 6: Optimizely CMS MCP Server Adoption",
      subtitle:
        "Jul 06 – Jul 10, 2026  |  MCP Server awareness and Royal Cyber integration",
      focus: [
        { team: "Marketing", text: "Publish CMS MCP Server blog and campaign assets." },
        { team: "Practice", text: "Integrate MCP Server with Royal Cyber CMS instance." },
        { team: "Partnerships", text: "Position Royal Cyber as a hands-on Optimizely implementation partner." },
      ],
      tasks: [
        { day: "Mon", date: "Jul 06", activity: "Blog post: CMS MCP Server by Optimizely", team: "Marketing", type: "Blog", kpi: "Blog published", status: "todo" },
        { day: "Wed", date: "Jul 08", activity: "Integration of MCP Server with Royal Cyber CMS instance", team: "Practice", type: "Integration", kpi: "Integration completed", status: "todo" },
        { day: "Fri", date: "Jul 10", activity: "Campaign launch for CMS MCP Server by Optimizely", team: "Marketing", type: "Campaign", kpi: "Campaign launched", status: "todo" },
        { day: "Fri", date: "Jul 10", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", status: "todo" },
      ],
    },
  ],
};
