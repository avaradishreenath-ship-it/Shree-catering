# Shree Catering Services — Website Documentation

> **Making Every Celebration Delicious**
> Premium catering website for Hubballi, Dharwad & surrounding villages, Karnataka.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Folder Structure](#2-folder-structure)
3. [Getting Started](#3-getting-started)
4. [Customisation Guide](#4-customisation-guide)
5. [Replacing Images & AI Prompts](#5-replacing-images--ai-prompts)
6. [Deployment Guide](#6-deployment-guide)
7. [SEO Checklist](#7-seo-checklist)
8. [Technologies Used](#8-technologies-used)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Project Overview

A fully responsive, single-page catering website built with HTML5, CSS3 and vanilla JavaScript. Designed to generate inquiries through WhatsApp and phone calls while projecting a premium brand identity.

**Design identity:**
- Colours: Deep Emerald `#1b4332`, Antique Gold `#c9a04d`, Ivory `#faf6ee`, Maroon `#7a2e2e`
- Display font: Fraunces (Google Fonts) — warm festive serif
- Body font: Outfit (Google Fonts) — clean modern sans
- Signature element: marigold garland bead dividers between sections

**Key features:**
- Page-load animation, sticky navbar, dark mode toggle
- Hero section with GSAP entrance animations
- Animated stat counters on scroll
- Filterable menu (8 categories)
- Lightbox photo gallery
- Testimonial carousel (Swiper.js, auto-plays)
- FAQ accordion
- Booking/quote form with client-side validation
- Floating WhatsApp + Call + Back-to-Top buttons
- Google Maps embed
- SEO meta tags, Open Graph tags, Local Business Schema markup

---

## 2. Folder Structure

```
catering-site/
├── index.html        ← Main website (open this in a browser)
├── css/
│   └── style.css     ← All custom styles and design tokens
├── js/
│   └── main.js       ← All interactivity and animations
├── images/           ← Add your real photos here (see Section 5)
│   ├── hero-banquet-spread.jpg
│   ├── about-chef-team.jpg
│   ├── service-wedding-catering.jpg
│   ├── service-birthday-catering.jpg
│   ├── service-corporate-catering.jpg
│   ├── service-temple-catering.jpg
│   ├── service-outdoor-catering.jpg
│   ├── service-live-counters.jpg
│   ├── gallery-wedding-mandap.jpg
│   ├── gallery-buffet-setup.jpg
│   ├── gallery-live-counter.jpg
│   ├── gallery-traditional-thali.jpg
│   ├── gallery-modern-buffet.jpg
│   ├── gallery-desserts.jpg
│   ├── gallery-decoration.jpg
│   ├── gallery-chef-team.jpg
│   └── og-cover.jpg  ← Used for WhatsApp/Facebook link previews
└── README.md         ← This file
```

---

## 3. Getting Started

### View locally (no server needed)

1. Download or unzip the project folder
2. Open `index.html` directly in any modern browser

### View with Live Server (recommended)

1. Install [VS Code](https://code.visualstudio.com)
2. Install the **Live Server** extension by Ritwick Dey
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500` and reloads automatically on every save

---

## 4. Customisation Guide

### Business name
Search for `Shree Catering` in `index.html` and replace with your business name.

### Phone number
The placeholder is `+919900000000`. Do a find-and-replace:
```
Find:    9900000000
Replace: YOUR_ACTUAL_NUMBER
```

### WhatsApp number
Search for `wa.me/919900000000` and replace `919900000000` with your number including country code (e.g. `917411234567`).

### Email
Search for `hello@shreecatering.example` and replace with your real email.

### Address
Find `Vidyanagar, Hubballi, Karnataka 580031` and update to your actual address.

### Colours
All colours are CSS variables at the top of `css/style.css`:
```css
:root {
  --emerald-800: #1b4332;
  --gold-500:    #c9a04d;
  --ivory-50:    #faf6ee;
  --maroon-700:  #7a2e2e;
}
```
Change any value here and it updates the entire site instantly.

### Google Maps embed
In `index.html`, find the `<iframe>` inside the Contact section and replace the `src`:
1. Go to maps.google.com
2. Search your address → Share → Embed a map
3. Copy the `src="..."` value and paste it into the iframe

### Testimonials
Each testimonial follows this pattern — add or remove slides as needed:
```html
<div class="swiper-slide">
  <div class="card p-7 h-full">
    <div style="color:var(--gold-500);">★★★★★</div>
    <p class="text-sm mb-5">"Review text here."</p>
    <p class="font-semibold">Customer Name</p>
    <p class="text-xs">City</p>
  </div>
</div>
```

### Menu items
Each dish card follows this pattern. Valid `data-cat` values: `breakfast` `starters` `main` `rice` `breads` `desserts` `drinks` `live`
```html
<div class="menu-card card p-6" data-cat="CATEGORY">
  <i class="fa-solid fa-ICON mb-3" style="color:var(--gold-500);"></i>
  <h4 class="font-display text-lg mb-1">Dish Name</h4>
  <p class="text-xs">Short description</p>
</div>
```

### FAQ items
```html
<div class="faq-item">
  <div class="faq-q">Your question? <i class="fa-solid fa-plus faq-icon"></i></div>
  <div class="faq-a">Your answer here.</div>
</div>
```
Add `class="faq-item open"` to expand an item by default.

### Schema markup
At the top of `index.html`, update the `<script type="application/ld+json">` block with your real telephone, address, and domain URL.

### Social media links
In the footer, replace `href="#"` on the Instagram, Facebook and YouTube icons with your actual profile URLs.

---

## 5. Replacing Images & AI Prompts

All placeholder images load from `picsum.photos`. To replace them:

1. Save your photo to the `images/` folder using the exact filename shown below
2. Find the matching `<img>` tag in `index.html` (it has a `data-filename` attribute)
3. Update the `src`:
```html
<!-- Before -->
<img src="https://picsum.photos/seed/.../700/500" data-filename="service-wedding-catering.jpg" ...>

<!-- After -->
<img src="images/service-wedding-catering.jpg" data-filename="service-wedding-catering.jpg" ...>
```

Compress images before uploading using squoosh.app — target under 200 KB per image.

---

### AI Image Prompts

Use these prompts with Adobe Firefly, Midjourney, DALL·E 3, or Leonardo.ai.

---

**`hero-banquet-spread.jpg`** — 1800 × 1000 px
```
Wide-angle photograph of a lavish Indian wedding banquet table with a full vegetarian spread.
South Indian and North Indian dishes in silver serving vessels. Lit diyas and marigold flowers
as decoration. Warm golden hour lighting. Deep green foliage in background. Luxurious, festive
atmosphere. Photorealistic, magazine quality, no text.
```

**`about-chef-team.jpg`** — 900 × 1000 px
```
Portrait photograph of a team of five Indian catering chefs in white uniforms and chef hats
standing in a professional outdoor catering kitchen. Smiling, confident. Stainless steel cooking
vessels and green vegetables in background. Karnataka, India. Natural daylight. Photorealistic.
```

**`service-wedding-catering.jpg`** — 700 × 500 px
```
Professional photograph of an elegant outdoor wedding buffet in Karnataka, India. Long table with
white tablecloth, silver chafing dishes, banana leaf accents. South Indian vegetarian food —
sambar, rice, curries, sweets. Marigold garland decoration. Warm golden lighting. Photorealistic.
```

**`service-birthday-catering.jpg`** — 700 × 500 px
```
Vibrant photograph of a colourful birthday party food table with balloons and streamers. Indian
snacks and sweets — samosa, gulab jamun, chaat, cake. Cheerful pastel decorations.
Bright indoor lighting. Photorealistic, joyful atmosphere.
```

**`service-corporate-catering.jpg`** — 700 × 500 px
```
Clean photograph of a corporate event catering setup. Modern buffet line with neatly arranged
Indian vegetarian food in steel trays. Minimalist white and grey decor. Bright even lighting.
Photorealistic, professional.
```

**`service-temple-catering.jpg`** — 700 × 500 px
```
Photograph of prasadam served on banana leaves during a South Indian temple annadanam event.
Pure vegetarian food — rice, sambar, payasam, papad. Volunteers in traditional dress.
Temple architecture in background. Warm golden light. Photorealistic, respectful.
```

**`service-outdoor-catering.jpg`** — 700 × 500 px
```
Wide photograph of outdoor catering under a decorated tent canopy in rural Karnataka. Long
banquet tables, floral decorations, string lights. Catering staff in uniform. Green fields
in background. Golden hour. Photorealistic, festive.
```

**`service-live-counters.jpg`** — 700 × 500 px
```
Action photograph of a live dosa counter at an Indian wedding. Chef in white uniform making
crispy dosas on a large iron griddle. Chutneys and sambar in bowls. Steam rising. Guests
watching. Warm lighting. Photorealistic, dynamic, mouth-watering.
```

**`gallery-wedding-mandap.jpg`** — 600 × 800 px
```
Traditional South Indian wedding mandap decorated with marigolds, roses and banana leaves.
Brass lamps lit with flame. Priest performing rituals. Catering setup with banana leaf plates
in the background. Warm ceremonial lighting. Photorealistic.
```

**`gallery-buffet-setup.jpg`** — 600 × 420 px
```
Overhead flat-lay of an Indian wedding buffet. Silver chafing dishes, curries, rice, dal,
breads, pickles and sweets. Marigold petals as decoration. Symmetrical, styled, luxurious.
Photorealistic, magazine quality.
```

**`gallery-live-counter.jpg`** — 600 × 420 px
```
Live chaat counter at an Indian event. Colourful pani puri, bhel puri, sev puri in serving
bowls. Uniformed chef serving guests. Bright decorative lights. Festive, appetising. Photorealistic.
```

**`gallery-traditional-thali.jpg`** — 600 × 800 px
```
Full South Karnataka vegetarian thali on a fresh banana leaf. Rice, sambar, rasam, multiple
curries, curd, papad, pickle, payasam. Neatly styled. Warm lighting. Photorealistic, inviting.
```

**`gallery-modern-buffet.jpg`** — 600 × 420 px
```
Modern Indian corporate buffet. Rectangular chafing dishes, North Indian gravies, biryani, naan.
White tablecloth and simple floral centrepiece. Clean, elegant. Photorealistic.
```

**`gallery-desserts.jpg`** — 600 × 420 px
```
Indian dessert table at a wedding. Gulab jamun, rasgulla, kesari bath, rasmalai and ice cream
on a white draped table with fairy lights. Rich warm colours. Photorealistic, festive.
```

**`gallery-decoration.jpg`** — 600 × 420 px
```
Indian wedding hall with marigold garlands hanging from ceiling, banana leaf tables, brass water
pots, diyas and flower centrepieces. Warm golden light. Photorealistic.
```

**`gallery-chef-team.jpg`** — 600 × 420 px
```
Eight professional Indian catering staff in white chef uniforms standing in front of an outdoor
catering setup. All smiling and neat. Daylight, Karnataka. Photorealistic, team photo style.
```

**`og-cover.jpg`** — 1200 × 630 px (WhatsApp/Facebook link preview)
```
Wide banner of a luxurious Indian wedding feast. Gold and green decorations, marigold flowers,
silver serving vessels with colourful vegetarian food. Blank space on the left. No text in image.
Photorealistic, premium, festive.
```

---

**Tips for consistent results:**
- Aim for warm gold and green tones to match the website palette
- Use traditional Indian elements — marigolds, banana leaves, diyas, silver vessels
- Avoid non-vegetarian food and cluttered or dark backgrounds
- Always prefer real event photos over AI images when available

---

## 6. Deployment Guide

### Final checklist before going live

- [ ] All phone/WhatsApp numbers updated
- [ ] Email and address updated
- [ ] Google Maps embed updated
- [ ] All placeholder images replaced with real photos
- [ ] `og-cover.jpg` added to the `images/` folder
- [ ] `<link rel="canonical">` updated with your real domain
- [ ] Schema JSON-LD block updated with real business details
- [ ] Tested on mobile (Android Chrome and iPhone Safari)

---

### Option A — Netlify Drop (Free, easiest)

1. Go to app.netlify.com/drop
2. Drag and drop your entire `catering-site` folder onto the page
3. Netlify gives you a live URL like `random-name.netlify.app` in seconds
4. For a custom domain, create a free Netlify account → Domain settings

Cost: Free. A custom domain like `shreecatering.in` costs ₹800–1500/year.

---

### Option B — Hostinger (Best for professional use in India)

1. Buy a plan at hostinger.in (~₹69/month) and purchase a domain
2. Log in to hPanel → File Manager → public_html
3. Upload all files from `catering-site` into `public_html`
4. Ensure `index.html` is directly inside `public_html`, not inside a subfolder

---

### Option C — GitHub Pages (Free)

1. Create a repository at github.com and upload all project files
2. Go to Settings → Pages → Deploy from branch → main
3. Site goes live at `https://yourusername.github.io/repo-name/`

---

### HTTPS / SSL

- Netlify: automatic, nothing to do
- Hostinger: hPanel → SSL → Install Let's Encrypt (free)
- GoDaddy: cPanel → Let's Encrypt SSL (free)

---

### Connecting the booking form to email

The form currently validates client-side only. To receive real enquiries via **Formspree**:

1. Create a free account at formspree.io
2. Create a new form — you get an endpoint like `https://formspree.io/f/XXXXXXXX`
3. Add it to the form tag in `index.html`:
```html
<form id="booking-form" action="https://formspree.io/f/XXXXXXXX" method="POST" ...>
```
Each submission is emailed directly to your registered address.

---

### After going live

- **Google Business Profile** — claim your listing at business.google.com and add your website URL
- **Google Search Console** — verify your domain and submit a sitemap (generate free at xml-sitemaps.com)
- **Page speed** — test at pagespeed.web.dev and aim for a score above 90

---

## 7. SEO Checklist

Keywords already built into the page:
- Catering Services in Hubballi
- Best Caterers in Dharwad
- Wedding Catering Hubballi
- Birthday Catering Dharwad
- Corporate Catering Hubballi
- Veg Catering Hubballi
- Village Catering Karnataka

Before launching:
- [ ] `<title>` tag contains your real business name and city
- [ ] `<meta name="description">` is accurate and under 160 characters
- [ ] Schema JSON-LD block has real phone, address, and URL
- [ ] `og:image` points to your real `og-cover.jpg`
- [ ] `<link rel="canonical">` points to your live domain
- [ ] Google Business Profile created and linked

---

## 8. Technologies Used

| Library | Version | Purpose |
|---|---|---|
| Tailwind CSS (CDN) | 3.x | Utility-class layout |
| Font Awesome | 6.5.1 | Icons |
| AOS | 2.3.4 | Scroll-triggered animations |
| GSAP | 3.12.5 | Hero entrance animation |
| Swiper.js | 11.0.5 | Testimonial carousel |
| Google Fonts | — | Fraunces & Outfit typefaces |

All libraries load from CDN — no npm install or build step required.

**Browser support:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, mobile Chrome and Safari. Internet Explorer is not supported.

---

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| Images not showing after replacing | Check filename matches exactly (case-sensitive). File must be inside the `images/` folder |
| Dark mode not persisting | Use Live Server instead of opening `index.html` as a `file://` link — some browsers block localStorage for local files |
| WhatsApp button opening wrong number | Search `wa.me/` in `index.html` and update every occurrence |
| Animations not working | AOS and GSAP load from CDN — check internet connection, or download and link them locally |
| Map not loading | Requires internet connection. Regenerate embed code from maps.google.com |
| Site shows 403 after upload | Ensure `index.html` is directly inside `public_html`, not inside a subfolder |
| SSL not working after activation | Wait 24 hours for DNS propagation, then check your hosting panel |

---

*Last updated: July 2026*
