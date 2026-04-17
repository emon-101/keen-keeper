# KeenKeeper

**Your personal shelf of meaningful connections.** Browse, tend, and nurture the relationships that matter most.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-keen--keeper--eh.vercel.app-blue?style=flat-square)](https://keen-keeper-eh.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)](https://nextjs.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square)](https://vercel.com/)

---

## About

KeenKeeper is a personal relationship manager (PRM) that helps you stay meaningfully connected with the people who matter most. Think of it as a lightweight CRM for your personal life — track your friends, log every interaction, and get insights into how well you're nurturing each relationship.

---

## Features

- **Friend Management** — Add and organize your personal network on a clean, browsable shelf
- **Dashboard Stats** — At-a-glance counters for total friends, on-track connections, friends needing attention, and monthly interactions
- **Interaction Timeline** — Log calls, SMS, and video calls with each friend; filter your history by interaction type
- **Friendship Analytics** — A dedicated stats page showing interaction trends and relationship health over time
- **Attention Alerts** — Automatically flags friends you haven't reached out to recently

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [React](https://react.dev/) | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Vercel](https://vercel.com/) | Deployment and hosting |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/emon-101/keen-keeper.git
cd keen-keeper

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
keen-keeper/
├── public/                     # Static assets
│   └── images/                 # Logo and social icons
│
├── src/                        # Application source code
│   └── app/                    # Next.js App Router
│       ├── layout.js           # Root layout (navbar, footer)
│       ├── page.js             # Home page — friend shelf & dashboard stats
│       ├── globals.css         # Global styles
│       ├── timeline/
│       │   └── page.js         # Interaction timeline (Call / SMS / Video filter)
│       ├── stats/
│       │   └── page.js         # Friendship analytics dashboard
│       └── friends/
│           └── [id]/
│               └── page.js     # Individual friend detail page
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — friend shelf, stats summary, add a friend |
| `/timeline` | Chronological log of all interactions, filterable by Call / SMS / Video |
| `/stats` | Friendship analytics dashboard |
| `/friends/[id]` | Individual friend detail — log a call, SMS, or video chat |

---

## Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your fork to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js and deploys with zero configuration.

Or deploy via the Vercel CLI:

```bash
npm i -g vercel
vercel
```

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is open source. See the repository for details.

---

Made by [emon-101](https://github.com/emon-101) · [Live Demo](https://keen-keeper-eh.vercel.app/) · [Report a Bug](https://github.com/emon-101/keen-keeper/issues) · [Request a Feature](https://github.com/emon-101/keen-keeper/issues)
