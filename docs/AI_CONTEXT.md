# AI-Assisted Customization Context

Use this document to help an AI assistant (Claude, ChatGPT, Cursor, etc.) understand and customize this homeowners platform template for your community.

## How to Use This Document

1. Copy this entire document
2. Paste it into your AI assistant along with your specific requirements
3. Ask the AI to help you customize the template

---

## Project Overview

This is a **Homeowners Platform Template** - a Next.js monorepo designed to help homeowner communities create independent web platforms for:
- Educating homeowners about their rights
- Providing access to governing documents (CC&Rs, Bylaws)
- Optionally: AI-powered chatbot for document Q&A
- Optionally: Recall/petition mechanism with proxy vote collection

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS variables for theming
- **Monorepo:** Turborepo with pnpm workspaces
- **AI (optional):** OpenAI GPT-4, Pinecone vector DB, LangChain
- **Email (optional):** Resend API

## Architecture

```
apps/
├── owners/     # Main homeowner portal (port 3000)
│   ├── src/app/         # Pages: home, rights, documents, chat
│   ├── src/components/  # Shared components
│   └── src/lib/         # Feature flags, utilities
│
└── recall/     # Recall mechanism (port 3001, optional)
    ├── src/app/         # Pages: home, petition
    ├── src/app/api/     # API routes for form submission
    └── src/components/  # Recall-specific components
```

## Deployment Modes

### Static Mode
- No server required
- AI chat replaced with "Ask ChatGPT" button
- Proxy forms replaced with mailto: links
- Can deploy to GitHub Pages, Netlify, Cloudflare Pages

### Server Mode
- Required for AI chatbot or email forms
- Deploy to Vercel (recommended), Railway, Fly.io
- Requires API keys for enabled features

## Placeholder System

The template uses `{{PLACEHOLDER}}` syntax for customization:

| Placeholder | Example | Description |
|-------------|---------|-------------|
| `{{COMMUNITY_NAME}}` | "Sunset Ridge HOA" | Full community name |
| `{{DOMAIN}}` | "sunsetridge.homes" | Primary domain |
| `{{STATE}}` | "Oregon" | State for legal references |
| `{{STATE_STATUTE}}` | "ORS 94.647" | Relevant state HOA statute |
| `{{LOT_COUNT}}` | "194" | Number of lots/units |
| `{{CITY_STATE}}` | "Portland, Oregon" | City and state |
| `{{RECALL_EMAIL}}` | "recall@domain.com" | Email for recall communications |

## Feature Flags

Environment variables control feature visibility:

```env
NEXT_PUBLIC_SHOW_CHAT=true|false      # AI chatbot
NEXT_PUBLIC_SHOW_RECALL_BANNER=true|false  # Recall banner on owners site
NEXT_PUBLIC_RECALL_ACTIVE=true|false   # Enable recall site
```

## Key Components

### Logo.tsx
Default monotone home icon using `currentColor`. Replace with custom SVG.

### RecallBanner.tsx
Two variants (mobile/desktop) with different sticky behavior:
- Mobile: Fixed at top, always visible
- Desktop: Inline in nav, sticks with header

### ScrollIndicator.tsx
Mobile-only bouncing chevron that scrolls to `#stage` on click.

### ChatGPTPromptButton.tsx (Static Mode)
Pre-filled prompt for ChatGPT when AI chat is disabled.

### MailtoProxyForm.tsx (Static Mode)
Pre-formatted mailto: link for proxy collection without server.

## Styling System

### CSS Variables (globals.css)
```css
:root {
  --primary-500: #22c55e;  /* Main brand color */
  --background: #fafaf9;
  --foreground: #14532d;
}
```

### Tailwind Config
Primary colors reference CSS variables for easy theming.

### Layout Patterns
- Mobile: Full-height "book cover" header (100svh)
- Desktop: Sticky header with height media query
- Responsive nav with icon support

## Legal Considerations

### State-Specific Law
Template references Oregon ORS 94.647 by default. Update for your state:
- Proxy duration limits
- Recall petition thresholds
- Notice requirements
- Quorum calculations

### Proxy Vote Compliance
The proxy form includes:
- Scope limitation (recall matters only)
- Duration notice (11 months max)
- Revocation instructions
- Confirmation email to homeowner

## Common Customization Tasks

### Change primary color
1. Update CSS variables in `globals.css`
2. Or re-run `npm run setup` and specify new color

### Add new page
1. Create folder in `src/app/`
2. Add `page.tsx` with layout matching existing pages
3. Add link to navigation in other pages

### Update legal references
1. Search for `{{STATE_STATUTE}}`
2. Replace with your state's HOA statute
3. Review proxy duration and other legal notices

### Add documents
1. Place PDFs in `public/docs/` or link externally
2. Update Documents page with links
3. If using AI: run embedding script

### Customize recall reasons
1. Edit `apps/recall/src/app/page.tsx`
2. Update the "Why Recall?" section with specific concerns

---

## Example Prompt for AI Assistant

"I need to customize this homeowners platform template for my community:
- Community: [Your Community Name]
- Location: [City, State]
- Domain: [yourdomain.com]
- Number of lots: [XXX]
- State law reference: [Your state's HOA statute]

Features I want:
- [x] Document library
- [x] Know Your Rights page
- [ ] AI chatbot (yes/no)
- [ ] Recall mechanism (yes/no)
- [ ] Email-based proxy forms (yes/no)

Please help me:
1. Update all placeholder values
2. [Specific customization request]
3. [Another request]"

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Resend Email API](https://resend.com/docs)
- [OpenAI API](https://platform.openai.com/docs)
- [Pinecone Vector DB](https://docs.pinecone.io/)

