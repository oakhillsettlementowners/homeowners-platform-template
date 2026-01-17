# 🏠 Homeowners Platform Template

A modern, open-source platform for homeowner communities. Built by homeowners, for homeowners.

This template helps homeowner associations create independent community hubs with document access, rights education, AI-powered assistance, and optional recall/petition mechanisms.

## Features

### Core Features (Always Included)
- **Community Hub** - Central landing page for homeowners
- **Know Your Rights** - Educational content about homeowner rights
- **Document Library** - Access to CC&Rs, Bylaws, and other governing documents
- **Mobile-First Design** - Beautiful, responsive UI with dark mode support
- **SEO Controls** - Toggle search engine indexing when ready

### Optional Features (Choose During Setup)
- **AI Chatbot** - Interactive assistant trained on your governing documents
- **Recall Mechanism** - Organize board recall elections with proxy vote collection
- **Email-Based Proxy Forms** - Collect legally compliant proxy authorizations via email

## Quick Start

### 1. Clone the Template

```bash
git clone https://github.com/yourusername/homeowners-platform-template.git my-community
cd my-community
```

### 2. Run Setup

```bash
npm run setup
# or
pnpm setup
```

The interactive setup will ask about:
- Your community name and location
- State (for legal references)
- Domain name
- Which features you want to enable

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Configure Environment

Copy `.env.example` to `apps/owners/.env.local` and `apps/recall/.env.local`, then fill in your values.

### 5. Start Development

```bash
pnpm dev
```

- Owners app: http://localhost:3000
- Recall app: http://localhost:3001

## Deployment Modes

The setup script determines your deployment mode based on selected features:

### Static Deployment
**When:** No AI chatbot, no email-based proxy forms

**Benefits:**
- Free hosting (GitHub Pages, Netlify, Cloudflare Pages)
- No API costs
- Works offline
- Simple maintenance

**Alternatives provided:**
- "Ask ChatGPT" button with pre-filled prompt
- `mailto:` links for proxy collection

### Server Deployment
**When:** AI chatbot OR email-based proxy forms enabled

**Requirements:**
- Vercel, Railway, or similar hosting
- API keys (OpenAI, Pinecone, Resend as needed)

**Benefits:**
- Interactive AI assistant trained on your documents
- Automated proxy vote collection and confirmation emails
- Real-time form validation

## Project Structure

```
homeowners-platform-template/
├── apps/
│   ├── owners/          # Main homeowner portal (always deployed)
│   │   ├── src/
│   │   │   ├── app/     # Next.js pages
│   │   │   ├── components/
│   │   │   └── lib/     # Feature flags, utilities
│   │   └── public/      # Static assets, favicons
│   │
│   └── recall/          # Recall mechanism (optional)
│       ├── src/
│       │   ├── app/
│       │   │   └── api/ # Proxy form endpoint
│       │   └── components/
│       └── public/
│
├── packages/
│   └── ui/              # Shared components (future)
│
├── docs/
│   ├── SETUP.md         # Detailed setup guide
│   └── AI_CONTEXT.md    # Context for AI-assisted customization
│
├── scripts/
│   └── setup.mjs        # Interactive setup script
│
├── .env.example         # Environment variable template
├── turbo.json           # Turborepo configuration
└── README.md
```

## Customization

### Branding
- **Logo:** Replace `Logo.tsx` component or update the default home icon
- **Colors:** Modify CSS variables in `globals.css` or run setup again
- **Content:** Update placeholder text in page components

### Legal Compliance
The template includes references to state laws that you should update:
- Proxy vote duration (default: 11 months, per Oregon ORS 94.647)
- Quorum requirements
- Notice periods

Run a search for `{{STATE}}` and `{{STATE_STATUTE}}` to find all locations needing state-specific updates.

### Adding Documents
1. Place PDF documents in a `docs/` folder
2. If using AI chat, run the embedding script: `pnpm --filter owners embed`
3. Link documents in the Documents page

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Monorepo:** Turborepo with pnpm
- **AI (optional):** OpenAI GPT-4, Pinecone vector database, LangChain
- **Email (optional):** Resend
- **Deployment:** Vercel (recommended) or any static host

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - See [LICENSE](LICENSE) for details.

## Acknowledgments

This template was created based on real-world experience organizing homeowners. Special thanks to all the homeowners who fight for their rights and transparent community governance.

---

**Disclaimer:** This template is provided as-is for educational purposes. Always consult with a licensed attorney in your state for legal advice regarding HOA matters.

