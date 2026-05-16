---
version: 1.0
name: Sindh Jo Sach
description: An investigative counter-narrative media platform whose content surfaces read as cinematic editorial journalism. The base canvas is near-black (#0A0A0A) — not pure black, slight warmth — holding white display type and deep crimson (#CC0000) accents. Elevated surfaces carry a dark red tint (#1A0000) as the SJS signature, separating it from generic dark-mode UIs. The single brand voltage is SJS Crimson (#CC0000) — Pakistani investigative red — used scarcely on primary CTAs, slide labels, left accent bars, verdict banners, and social badges. Secondary voltage is Deep Crimson (#8C0000) for dividers and darker accents. Type runs Inter weight 500 for display and 400 for body — never bombastic. Section labels render in uppercase with 2px tracking. The brand's strongest visual signature is the full-bleed red-on-black investigative card with a 4px left-edge crimson bar. Spacing follows an explicit 8px token ladder (xxxs 4px through super 128px); generous editorial pacing throughout.

colors:
  primary: "#CC0000"
  primary-active: "#A00000"
  primary-dark: "#8C0000"
  ink: "#FFFFFF"
  body: "#969696"
  body-strong: "#FFFFFF"
  body-muted: "#C8C8C8"
  muted: "#666666"
  hairline: "#1E0000"
  hairline-bright: "#330000"
  canvas: "#0A0A0A"
  canvas-elevated: "#1A0000"
  canvas-deep: "#130000"
  canvas-footer: "#0F0000"
  surface-card: "#140000"
  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"
  accent-verdict: "#CC0000"
  accent-bar: "#CC0000"

typography:
  display-mega:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.6px
  display-xl:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.96px
  display-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.32px
  display-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 2px
    textTransform: uppercase
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 1.4px
    textTransform: uppercase
  number-display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -1.2px
    fontVariantNumeric: tabular-nums

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px

spacing:
  xxxs: 4px
  xxs: 8px
  xs: 16px
  sm: 24px
  md: 32px
  lg: 48px
  xl: 64px
  xxl: 96px
  super: 128px

components:
  stat-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.number-display}"
    rounded: "{rounded.none}"
    padding: 32px 28px
    borderTop: "3px solid {colors.primary}"
  carousel-card:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline}"
  section-label:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.caption-uppercase}"
  verdict-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  badge-pill:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.body-muted}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  social-handle:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.none}"
    padding: "3px 8px"
  left-accent-bar:
    width: 4px
    backgroundColor: "{colors.primary}"
  footer-strip:
    backgroundColor: "{colors.canvas-footer}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderTop: "1px solid {colors.primary}"
---

## Overview

Sindh Jo Sach reads as investigative editorial journalism — Al Jazeera meets Dawn meets documentary newsroom. The base canvas is near-black `{colors.canvas}` (#0A0A0A) holding white display type; deep red-tinted elevated surfaces `{colors.canvas-elevated}` (#1A0000) are the SJS signature — separating it from generic dark-mode UI. The single brand voltage is **SJS Crimson** `{colors.primary}` (#CC0000) — used scarcely on primary labels, left-edge bars, verdict banners, and the slide-counter badge. Secondary voltage `{colors.primary-dark}` (#8C0000) appears on dividers and darker accents.

Type runs **Inter** as the single sans family across every text role. Display copy renders at weight 700–800 with negative letter-spacing. Section labels render in `{typography.caption-uppercase}` (11px / 700 / 2px tracking / UPPERCASE). Body runs at 14px / 400.

The brand's strongest visual signature is the **investigative card**: dark red-tinted background `{colors.surface-card}`, 4px left-edge crimson bar, white headline, gray body text. No rounded corners. Verdict banners are full-width solid crimson rectangles.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#CC0000) for labels, bars, banners, badges, CTAs — never as backgrounds on cards.
- Set every card at `{rounded.none}` (0px sharp corners) — the brand's investigative precision.
- Use `{colors.canvas-elevated}` (#1A0000) for card fills — never flat black, never generic grey.
- Render every section label in `{typography.caption-uppercase}` — 2px tracking, uppercase, crimson.
- Use the explicit 8px spacing ladder.
- Keep the 4px left-edge accent bar on every content card.

### Don't
- Don't use rounded corners on cards, CTAs, or main blocks.
- Don't use pure black canvas — use #0A0A0A.
- Don't introduce colours other than the crimson/black/white palette.
- Don't add drop shadow tiers — hairline borders + brightness elevation carry the depth.
- Don't centre headlines on content slides — always left-aligned.
