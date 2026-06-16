# Optimizely Insights Dashboard — Royal Cyber

A Next.js (App Router) + Tailwind dashboard that presents the output of two
Optimizely agents in one Optimizely-branded site:

- **Trend Report** (`/report`) — the **Optimizely Department Agent** weekly sweep:
  emerging trends, release updates, upcoming events, and blog / whitepaper /
  LinkedIn content opportunities.
- **Weekly Plan** (`/weekly-plan`) — the **Optimizely Weekly Plan Agent**:
  a six-week execution plan with team focus areas and day-by-day tasks.
- **Dashboard** (`/`) — landing page linking to both agents.

## Tech

Next.js 14 · React 18 · TypeScript · Tailwind CSS 3. Fully static — every page
prerenders, so it runs anywhere Vercel hosts with zero config.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Updating the content

All agent output lives in plain data files — no component edits needed:

- `data/report.ts` — Department Agent trend report.
- `data/weeklyPlan.ts` — Weekly Plan agent output.

Replace the exported object with the agent's latest run (keep the same shape),
commit, and Vercel redeploys automatically.

---

## Deploy to Vercel via GitHub

### 1. Push this folder to GitHub

From inside this folder. **First delete the partial `.git` folder** that may
exist (on Windows: `rmdir /s /q .git`, or just delete the hidden `.git` folder
in Explorer), then:

```bash
git init
git add .
git commit -m "Optimizely Insights dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/optimizely-insights.git
git push -u origin main
```

(Create the empty `optimizely-insights` repo on GitHub first — no README/.gitignore,
this repo already has them.)

### 2. Import into Vercel

1. Go to https://vercel.com/vaibhavwarhadpande-8711s-projects and click **Add New… → Project**.
2. **Import** the `optimizely-insights` GitHub repo.
3. Vercel auto-detects **Next.js** — leave Framework Preset, Build Command
   (`next build`), and Output as defaults. No environment variables are needed.
4. Click **Deploy**. First build takes ~1–2 minutes.

### 3. Attach your domain

1. In the project → **Settings → Domains**, add **`optimizelyinsightswithvw.in`**
   (and optionally `www.optimizelyinsightswithvw.in`).
2. Vercel shows the DNS records to set at your domain registrar:
   - Apex (`optimizelyinsightswithvw.in`): an **A record → 76.76.21.21**, or
     follow Vercel's current recommended apex target shown on screen.
   - `www`: a **CNAME → cname.vercel-dns.com**.
3. Save at the registrar; Vercel issues SSL automatically once DNS propagates
   (usually minutes, up to a few hours).

### Future updates

Every `git push` to `main` triggers an automatic Vercel deployment.
