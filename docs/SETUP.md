# Detailed Setup Guide

This guide walks you through setting up your homeowners platform from start to finish.

## Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)
- A domain name (recommended: `.homes`, `.community`, or similar)
- Git installed

## Step 1: Clone and Configure

```bash
# Clone the template
git clone https://github.com/oakhillsettlementowners/homeowners-platform-template.git my-community
cd my-community

# Run interactive setup
pnpm setup
```

The setup script will ask you about:
1. **Community name** - Used throughout the site
2. **State** - For legal references and statute citations
3. **Domain** - Your primary domain (e.g., `sunsetridge.homes`)
4. **Location** - City and state for display
5. **Lot count** - Number of homes in your community
6. **Features** - AI chat, recall mechanism, email forms

## Step 2: Install Dependencies

```bash
pnpm install
```

## Step 3: Configure Environment Variables

### For Static Deployment (No AI, No Email Forms)

```bash
# apps/owners/.env.local
NEXT_PUBLIC_SHOW_CHAT=false
NEXT_PUBLIC_SHOW_RECALL_BANNER=false
```

### For Server Deployment with AI Chat

```bash
# apps/owners/.env.local
NEXT_PUBLIC_SHOW_CHAT=true
OPENAI_API_KEY=sk-...
PINECONE_API_KEY=...
PINECONE_INDEX_NAME=your-index
```

### For Server Deployment with Email Forms

```bash
# apps/recall/.env.local
NEXT_PUBLIC_RECALL_ACTIVE=true
RESEND_API_KEY=re_...
NOTIFICATION_EMAIL=organizers@yourdomain.com
```

## Step 4: Add Your Governing Documents

### For Document Library
1. Create `apps/owners/public/docs/` folder
2. Add your PDF documents (CC&Rs, Bylaws, etc.)
3. Update `apps/owners/src/app/documents/page.tsx` with links

### For AI Chat (if enabled)
1. Place documents in `apps/owners/docs/` folder
2. Run embedding script:
   ```bash
   pnpm --filter owners embed
   ```

## Step 5: Local Development

```bash
# Start both apps
pnpm dev

# Or start individually
pnpm --filter owners dev  # Port 3000
pnpm --filter recall dev  # Port 3001
```

## Step 6: Deployment

### Option A: Vercel (Recommended for Server Mode)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Set up custom domains:
   - `owners.yourdomain.com` → owners app
   - `recall.yourdomain.com` → recall app (if enabled)

### Option B: Static Hosting (For Static Mode)

1. Build static export:
   ```bash
   pnpm build
   ```
2. Deploy `apps/owners/out/` folder to:
   - GitHub Pages
   - Netlify
   - Cloudflare Pages
   - Any static file host

## Step 7: DNS Configuration

### Cloudflare (Recommended)
1. Add your domain to Cloudflare
2. Update nameservers at your registrar
3. Add A/CNAME records pointing to your host

### Email Setup (if using Resend)
1. Verify sending domain in Resend
2. Add required DNS records:
   - DKIM (TXT record)
   - SPF (TXT record on `send.` subdomain)
   - MX record for receiving replies

## Step 8: Go Live Checklist

- [ ] All placeholder values replaced
- [ ] Documents uploaded and linked
- [ ] Environment variables configured
- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] Test all forms and links
- [ ] Update `robots` in `layout.tsx` to allow indexing
- [ ] Remove or update `robots.txt`

## Troubleshooting

### Build fails with environment variable errors
Ensure all required variables are in `turbo.json` globalEnv array and set in your deployment platform.

### AI chat not responding
- Verify OpenAI API key is valid and has credits
- Check Pinecone index exists and has embeddings
- Review server logs for specific errors

### Email form not sending
- Verify Resend API key
- Check domain is verified in Resend
- Ensure SPF/DKIM records are properly configured
- Check Resend dashboard for bounces/suppression

### Styles not applying
- Clear `.next` and `node_modules/.cache`
- Run `pnpm install` again
- Check for Tailwind configuration issues

## Getting Help

- Check the [AI Context Document](AI_CONTEXT.md) for customization help
- Open an issue on GitHub
- Search existing issues for similar problems

## Updating the Template

To pull updates from the template:

```bash
# Add template as remote
git remote add template https://github.com/oakhillsettlementowners/homeowners-platform-template.git

# Fetch and merge updates
git fetch template
git merge template/main --allow-unrelated-histories
```

Resolve any conflicts, keeping your customizations where appropriate.

