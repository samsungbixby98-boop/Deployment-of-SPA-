# Packaging and Deployment of SPA with Forms

This project demonstrates production packaging and deployment for a React SPA using Vite.

## Implemented Skills

- SPA routing with nested routes
- Protected routes with auth guard
- Validated controlled login form
- Production bundling and optimization with Vite
- Environment-specific configuration (`.env.development`, `.env.production`)
- Linting and formatting setup (ESLint + Prettier)
- Cloud deployment setup (Netlify and Vercel)
- Performance and accessibility evaluation workflow with Lighthouse
- Error-monitoring starter pattern for maintainable updates

## Project Structure

```text
Lastt/
|- public/
|  |- vite.svg
|- src/
|  |- components/
|  |  |- Navbar.jsx
|  |  |- ProtectedRoute.jsx
|  |- config/
|  |  |- env.js
|  |- layouts/
|  |  |- MainLayout.jsx
|  |- pages/
|  |  |- Dashboard.jsx
|  |  |- Home.jsx
|  |  |- Login.jsx
|  |  |- NotFound.jsx
|  |- services/
|  |  |- errorLogger.js
|  |- utils/
|  |  |- auth.js
|  |- App.css
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|  |- routes.jsx
|- .env.development
|- .env.example
|- .env.production
|- .prettierignore
|- .prettierrc
|- eslint.config.js
|- index.html
|- netlify.toml
|- package.json
|- README.md
|- vercel.json
|- vite.config.js
```

## Commands

```bash
npm run dev
npm run lint
npm run format
npm run build
npm run preview
```

## Bundling and Optimization Notes

- Tree-shaking is applied automatically by Vite/Rollup for unused exports.
- JavaScript and CSS are minified in production build.
- Vendor chunk separation is configured in `vite.config.js`.
- Static assets are optimized and content-hashed in `dist/`.

## Environment Configuration

- Development values come from `.env.development`.
- Production values come from `.env.production`.
- Client-side variables must use `VITE_` prefix.

## Deploy to Netlify

1. Push repo to GitHub.
2. In Netlify, choose **Add new site -> Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. SPA redirects are already configured in `netlify.toml`.

## Deploy to Vercel

1. Push repo to GitHub.
2. Import project in Vercel.
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. SPA rewrites are configured in `vercel.json`.

## Lighthouse Checklist

1. Open deployed URL in Chrome.
2. Open DevTools -> Lighthouse.
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Save report and track improvements over releases.

## Maintainable Update Plan

- Keep env values out of source code; store secrets in hosting dashboard.
- Run lint + build in CI before deploy.
- Add error reporting (Sentry/LogRocket) as next step from `errorLogger.js`.
- Use semantic version tags for release tracking.
