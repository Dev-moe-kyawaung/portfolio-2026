# Moekyaw Aung - Premium Portfolio

A modern, dark-themed portfolio showcasing 10+ years of Android development experience, 82+ certifications, and production-grade projects.

![Portfolio Preview](https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png)

## 🌟 Features

- **30 Pages** - Comprehensive portfolio with projects, case studies, certifications, and technical deep dives
- **Dark Mode Design** - Modern cyberpunk aesthetic with neon accents
- **Responsive** - Mobile-first design that works on all devices
- **Multilingual** - English, Myanmar, and Thai support
- **Performance Optimized** - Next.js 15 with App Router
- **SEO Ready** - Meta tags, Open Graph, and structured data

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Dev-moe-kyawaung/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```
# 📁 Project Structure
```txet
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx                 # Hero/Home
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── case-studies/
│   │   ├── certifications/
│   │   ├── contact/
│   │   └── ... (30 pages total)
│   ├── layout.tsx
│   └── globals.css
├── components/
├── public/
├── messages/
├── next.config.ts
├── package.json
└── README.md
```
## 🛠️ Tech Stack
Framework: Next.js 15.2.4
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Icons: Lucide React
Deployment: Vercel, Netlify, GitHub Pages, Cloudflare Pages
## 📊 Stats
10+ Years Experience
82+ Certifications
40+ GitHub Repositories
2.5M+ Users Served
## 📄 License
# MIT License - see LICENSE for details.
## Deploy Your Own
```
# Install gh-pages
npm i -D gh-pages

# Add to package.json scripts:
"deploy:github": "gh-pages -d out"

# Deploy
npm run deploy:github
```
# Deployment Instructions
Vercel Deployment
```
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```
# 1Environment Variables in Vercel Dashboard:
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_SECRET
SENDGRID_API_KEY
```
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Link to site
netlify link

# Deploy
netlify deploy --prod
```
## Build Settings:
Build command: npm run build
Publish directory: .next
```# Install Wrangler
npm i -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy out
```
# GitLab Pages Deployment
```# Add to .gitlab-ci.yml (see above)

# Deploy
git push origin main:gh-pages
```
## GitLab Pages Settings:
Source: gh-pages branch
Custom domain: dev-moe-kyawaung.gitlab.io


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dev-moe-kyawaung/portfolio)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Dev-moe-kyawaung/portfolio)
[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Dev-moe-kyawaung/portfolio)

## 📧 Contact
# Email: moekyawaung2026@gmail.com
# GitHub: @Dev-moe-kyawaung
# Gravatar: moekyawaung2026
# LinkedIn: Moe Kyaw Aung
# Built with ❤️ by Moekyaw Aung 
