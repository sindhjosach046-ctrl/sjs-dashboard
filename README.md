# Sindh Jo Sach — Content Operations Dashboard

Live stakeholder dashboard for all SJS carousel content.
Auto-updated after every carousel generation.

**Live at:** https://[your-github-username].github.io/sjs-dashboard/

---

## What it shows
- Total carousels, slides, API cost, average cost per carousel
- Full carousel history with slide thumbnails
- Caption and hashtag archive for every topic
- Cost analytics chart (per-carousel + cumulative)
- Platform identity and social handles

## How it updates
Claude updates `data.js` after every carousel, then:
1. Copies new PNG slides to `carousels/[topic-slug]/`
2. Runs `git-push.bat` to push to GitHub Pages

## Stack
- Three.js particle background
- Chart.js cost analytics
- Inter font (Google Fonts)
- gpt-image-2 generated slides
- DESIGN.md: SJS Design System v1.0 (Ferrari-inspired tokens)
