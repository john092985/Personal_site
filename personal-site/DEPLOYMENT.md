# Cloudflare Workers deployment

This Next.js app uses `@opennextjs/cloudflare` (OpenNext). Deploy the Worker, not the static `site/` folder or a Next.js static export. The `/api/chat` route executes server-side.

## Cloudflare Git integration

Create a Worker in Workers & Pages and connect `john092985/Personal_site`, branch `main`.

- Root directory: `personal-site`
- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- Worker name: `personal-site` (must match `wrangler.jsonc`)
- Use Node.js 22 for builds.

Do not configure a Pages static output directory for this deployment.

## Runtime configuration

In the Worker's Settings > Variables and Secrets, set:

- `CHAT_API_KEY`: encrypted secret for the intended model provider.
- `CHAT_API_URL`: provider's chat-completions endpoint (optional; defaults to OpenAI).
- `CHAT_MODEL`: provider model identifier (optional; code has a default).

Do not commit API keys. Build variables and runtime secrets are separate settings; the chat provider key is required at runtime.

## Local CLI alternative

From `personal-site`:

```sh
npm ci
npm run preview
# Once the preview works:
npm run deploy
```

Wrangler requires Cloudflare authentication to deploy.

## Domain and verification

First verify the workers.dev address: homepage, `/research/robot-table-tennis/`, `/resume/`, the PDF download, and a chat response. The production Worker uses the route `*jingxuanlyu.com/*` in zone `jingxuanlyu.com`, covering the root domain and www while preserving existing proxied DNS records. This route is recorded in `wrangler.jsonc` so subsequent deployments retain it. Runtime secrets stay in Cloudflare; only the provider URL and model name are in source control.

Source: https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/
