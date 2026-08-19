# Optimizely Insights — Theme & Design System

Royal Cyber × Optimizely "free to grow" brand. **Light theme, green — never blue.**
This is the single source of truth for the look of the dashboard. Any future change
(by a person or an agent) must follow it. The colour tokens live in
`tailwind.config.ts`; their NAMES are stable, so change the look by editing the hex
values there rather than touching every file.

---

## 1. Colour tokens (`tailwind.config.ts`)

| Token            | Hex       | Use                                                        |
| ---------------- | --------- | ---------------------------------------------------------- |
| `rc-blue`        | `#0c5a37` | Deep green — headings, table headers, active tab (white text) |
| `rc-accent`      | `#177a43` | Medium green — eyebrow labels, links, focus-card border    |
| `lime` / `lime-ink` | `#a5e635` / `#0c2e1c` | Bright "grow" lime highlight + dark text on it (header active nav, logo chip) |
| `opti-navy`      | `#eef7f1` | Light mint surface (was dark navy)                         |
| `opti-panel`     | `#ffffff` | Cards                                                      |
| `opti-line`      | `#d6e7dc` | Borders                                                    |
| `opti-ink`       | `#0f2418` | Primary text                                               |
| `opti-muted`     | `#5c6f64` | Secondary text                                             |
| `opti-accent`    | `#0e7a40` | Green links / small accents (white text OK)                |
| `opti-teal`      | `#0f7a48` | Section numbers, uppercase labels                          |
| `opti-warn`      | `#b9741a` | Amber (sparingly)                                          |
| `opti-chip`      | `#eaf5ee` | Light green chip background                                |

**Rule:** no blue brand colours anywhere. If a new element needs a "cool" accent,
use teal `#0b6e7d` on `#d3eef2`, not blue.

## 2. Header (`components/SiteHeader.tsx`)

- Green gradient bar: `from-[#0a4f30] via-[#0f6e41] to-[#1f9a57]`, white text.
- Logo chip and **active** nav item use the lime pill: `bg-lime text-lime-ink`.
- Inactive nav: `text-white/90 hover:bg-lime/25`. Active state is driven by `usePathname`.

## 3. Buttons / CTAs — dark forest-green pill ("Let's build" style)

```
rounded-full bg-[#0d3b24] px-5 py-2.5 text-sm font-semibold text-white
transition hover:bg-[#15633c]   (group-hover on cards)
```
Used for: dashboard card CTAs and the newsletter "Register" buttons.

## 4. Cards — grow on hover (like optimizely.com)

```
group rounded-2xl border border-opti-line bg-opti-navy p-7 shadow-sm
transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl
```
The whole card scales up ~2% and lifts with a deeper shadow on hover.

## 5. Badges, RACI & newsletter flags

- Status: To Do = gray, In Progress = amber, Done = green, **Scheduled = teal** `#d3eef2/#0b6e7d`.
- Type: **Blog/Blog Post = teal** `#d3eef2/#0b6e7d`, Whitepaper = violet, LinkedIn = cyan-teal,
  Milestone/Review = orange, Meeting/Campaign = pink, Accelerator/Integration = green.
- RACI: **R = teal** `#d3eef2/#0b6e7d`, A = green, C = amber, I = gray.
- Newsletter flag chips (light): AI = violet `#efe9fb/#5b2bb5`, Enterprise = green `#e7f6ee/#15703f`,
  Gap = amber `#fdf1db/#9a6212`.
- The RACI/Whitepaper purple `#6a2fb8` is an intentional secondary accent — keep it.

## 6. Pages

- Home (`app/page.tsx`), Weekly Plan (`app/weekly-plan` + `components/WeeklyPlanTabs.tsx`)
  and Newsletter (`app/newsletter/page.tsx`) are all **light**.
- The newsletter background is `bg-gradient-to-b from-[#eef7f1] to-white` (no dark theme).
- Body background `#f3f8f5`, text `#0f2418` (`app/globals.css`).

## 7. Editing rules (important)

- **Edit files in `C:\project\DeparmentAgent` via bash heredoc** (`cat > file <<'EOF'`),
  NOT the Write/Edit tools — they truncate files on this Windows-mounted folder.
- After any change, verify with a clean `next build` before pushing.
- The weekly auto-deploy regenerates ONLY `data/report.ts` and `data/weeklyPlan.ts`.
  It must never modify the theme files (tailwind.config.ts, components, page layouts,
  globals.css). Data and theme are decoupled, so the theme persists automatically.

## 8. Behaviours to preserve

- **`/weekly-plan` opens on the current week of the month.**
  `components/WeeklyPlanTabs.tsx` reads each week's start date from its `subtitle`
  (e.g. "Jun 22 – Jun 26, 2026  |  …") and, once mounted in the browser, selects the
  latest week whose start date is on or before today — so Jun 22 lands on **Week 4**.
  It falls back to Week 1 before the plan starts and to the last week after it ends.
  The choice is derived at view time from the subtitle dates, so it keeps working
  after every weekly data regeneration. Do **not** hard-code a default week or remove
  this logic; the weekly deploy agent must never overwrite this component.
