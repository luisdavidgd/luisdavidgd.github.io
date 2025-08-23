# 📁 `functions/` Directory

This directory contains Cloudflare Pages Functions for your project.

## 🔌 `api/` – API Endpoints

All `.js` files inside `functions/api/` are deployed as **serverless API routes** under `/api/`.

Each file becomes a public endpoint:

| File                          | URL Route            |
|-------------------------------|-----------------------|
| `functions/api/hello.js`      | `/api/hello`          |
| `functions/api/users/[id].js` | `/api/users/:id`      |
| `functions/api/tools.js`      | `/api/tools`          |

You can use these files to:
- Serve dynamic or static data
- Build REST-style APIs
- Read local `.json` files or fetch external APIs
- Later integrate with Cloudflare KV, D1, R2, etc.

> ✅ Keeping API logic inside `api/` prevents conflicts with your static frontend routes.

---

## ✅ Notes
- This setup is designed for **local development with Wrangler** and **production deployment via GitHub + Cloudflare Pages**.
- The `wrangler.toml` file is used **only for local testing**, and has no effect on the production Pages deployment.