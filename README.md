# BRIDAL MAKEUP STUDIO — LUXURY MULTI-PAGE WEBSITE

A premium, elegant, luxurious, fully responsive multi-page static website for a generic **Indian Bridal Makeup Studio**. Built strictly with semantic **HTML5**, modern **CSS3**, and pure **Vanilla JavaScript** without any external frameworks, libraries, or dependencies.

---

## 1. Project Specifications

* **Identity:** Generic Indian Bridal Makeup Studio (No fictional or real business/artist names used)
* **Technology Stack:**
  * HTML5 (Semantic, SEO-friendly, clean markup)
  * CSS3 (Custom design system, luxury color tokens, fluid responsive typography, flexbox & grid)
  * Vanilla JavaScript (Zero dependencies, accessible interactive components)
* **Hosting Compatibility:** 100% compatible with Hostinger Static Hosting, GitHub Pages, Netlify, Vercel, Apache, and Nginx.
* **Color Palette:**
  * **Champagne Gold:** `#C8A66A` (Primary accent & borders)
  * **Soft Ivory:** `#FFF9F1` (Primary background canvas)
  * **Warm Beige:** `#EADCCB` (Secondary neutral & card backgrounds)
  * **Dusty Rose:** `#C88F91` (Subtle accent)
  * **Deep Burgundy:** `#542B36` (Primary luxury dark accent & buttons)
  * **Charcoal:** `#292424` (Editorial typography)
  * **White:** `#FFFFFF` (Cards & highlights)

---

## 2. Website Structure & Sitemap

The website contains 12 individual HTML pages:

1. **`index.html`** — Homepage featuring 12 editorial sections: Hero with gold accents, studio welcome quote, signature service cards, editorial portfolio preview, 4-step bridal experience, 6 reasons to choose us, illustrative transformation demo preview, bridal packages preview, client testimonials, Instagram 6-grid preview, booking CTA banner, and comprehensive luxury footer.
2. **`about.html`** — About the Studio & Artist: Studio philosophy, bridal beauty approach, consultation standards, hospital-grade hygiene practices, client comfort, and workspace tool highlights.
3. **`services.html`** — Makeup Services: Detailed breakdown of Traditional Bridal, HD Makeup, Airbrush, Soft Glam, Engagement, Reception, Bridesmaid, and Family Makeup.
4. **`bridal-makeup.html`** — Dedicated luxury bridal showcase: South Indian Bridal, North Indian Bridal, Minimalist Bridal, Contemporary Fusion, and Luxury Royal Glamour.
5. **`bridal-packages.html`** — Pricing & Package Comparison: Essential Bridal, Signature Bridal, and Luxury Bridal Experience with custom quote tags, comparison checklist, and editable studio booking policies.
6. **`gallery.html`** — Visual-first bridal portfolio: Interactive category filters (All, Traditional, South Indian, North Indian, HD, Airbrush, Reception, Engagement, Soft Glam, Party, Bridesmaid), responsive grid, and full-screen image lightbox with captions, counters, and keyboard controls.
7. **`engagement-makeup.html`** — Pre-wedding celebration looks: Soft glam, traditional engagement, contemporary cocktail looks, and outfit-jewellery color coordination.
8. **`reception-makeup.html`** — Evening reception glamour: Camera stability, stage lighting, defined eye artistry, and lehenga/gown pairing.
9. **`party-makeup.html`** — Occasion beauty: Birthdays, family functions, festive celebrations, photoshoots, bridesmaid squads, and milestone events.
10. **`booking.html`** — Bridal Booking Enquiry: Comprehensive enquiry form collecting wedding date, event type, location, preferred makeup style, styling needs, and guest count. Includes instant date validation (rejects past dates) and a 2-step review modal with demo confirmation reference codes.
11. **`faq.html`** — Frequently Asked Questions: Smooth collapsible accordion covering booking timelines, trial availability, travel policies, draping, and pricing terms.
12. **`contact.html`** — Contact Us: Studio desk address (Hyderabad, Telangana), dummy phone and email, working hours, interactive general enquiry form, and stylized map placeholder.

---

## 3. Directory Structure

```
bridal-makeup-studio/
│
├── index.html
├── about.html
├── services.html
├── bridal-makeup.html
├── bridal-packages.html
├── gallery.html
├── engagement-makeup.html
├── reception-makeup.html
├── party-makeup.html
├── booking.html
├── faq.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css          # Core luxury stylesheet with design tokens
│   │
│   ├── js/
│   │   └── script.js          # Pure Vanilla JS (Navigation, Lightbox, Validation, Modals)
│   │
│   ├── images/                # Destination for generated WebP images
│   │
│   └── icons/                 # Inline SVGs embedded directly for fast performance
│
├── IMAGE-GENERATION-GUIDE.md  # Complete Google Flow prompts for all 44 image assets
└── README.md                  # Documentation and deployment instructions
```

---

## 4. Key Interactive JavaScript Features

* **Sticky Luxury Header:** Adds shadow and compact styling upon downward scroll.
* **Mobile Slide-Out Drawer:** Smooth hamburger toggle with backdrop overlay and nested accordion for Services.
* **Gallery Filtering:** Instant client-side filtering by ceremony and makeup style categories without page reloads.
* **Full-Screen Lightbox:** Modal popup supporting Next (`→`), Previous (`←`), Close (`Esc`), image counters, and title tags.
* **Smart Date Validation:** Dynamically locks the wedding date picker to prevent selection of past dates.
* **2-Step Booking Enquiry Review:**
  1. Validates all required client fields and 10-digit phone numbers.
  2. Opens a structured summary review modal showing all inputs.
  3. Displays a demo confirmation screen with reference code (e.g. `BMS-DEMO-XXXX`) and clear frontend demonstration disclaimers.
* **FAQ Accordion:** Smooth toggle with rotating plus/minus indicator.
* **Scroll-to-Top Button:** Floating gold/burgundy button that appears after 450px of scrolling.

---

## 5. How to Preview the Website Locally

### Option A: Direct Browser Preview
Double-click `index.html` or drag and drop any HTML file directly into Chrome, Edge, Safari, or Firefox.

### Option B: Local Web Server (Recommended)
Using Python (pre-installed on most machines):
```bash
# In the project root directory:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

Using Node.js / `npx serve`:
```bash
npx serve .
```

Using VS Code:
Right-click `index.html` and click **"Open with Live Server"**.

---

## 6. How to Upload to Hostinger Static Hosting

Hostinger provides fast, straightforward static web hosting. Follow these simple steps:

### Step 1: Log in to Hostinger hPanel
1. Navigate to [Hostinger hPanel](https://hpanel.hostinger.com) and log in.
2. Select your hosting plan or domain and go to **Websites** &rarr; **Dashboard**.

### Step 2: Access the File Manager
1. In hPanel, click **File Manager** (under the **Files** section).
2. Choose **Access files of [your domain]**.
3. Double-click to open the `public_html` directory.

### Step 3: Upload Website Files
1. Ensure `public_html` is empty or delete the default `default.php` file if present.
2. Upload the entire contents of this project:
   * All 12 `.html` files (`index.html`, `about.html`, etc.) directly into `public_html`.
   * The `assets/` folder (including `assets/css/`, `assets/js/`, and `assets/images/`).
3. Verify that `index.html` resides directly inside `public_html` (not inside a subfolder).

### Step 4: Test Your Live Website
1. Open your custom domain in your browser (e.g. `https://yourdomain.com`).
2. Verify all navigation links, mobile menu, gallery lightbox, and booking enquiry validation work smoothly.

---

## 7. Image Asset Workflow (Google Flow)

As requested, **no external stock images or AI images were downloaded into the project during initial build**. All image locations feature lightweight, responsive CSS placeholder containers with aspect ratio preservation and future filename labels.

To integrate real visuals:
1. Open `IMAGE-GENERATION-GUIDE.md`.
2. Copy the exact prompt for each of the 44 images into **Google Flow**.
3. Save each generated image using the specified `.webp` filename (e.g. `hero-bridal-makeup.webp`).
4. Place the images into the `assets/images/` directory.

---

## 8. Disclaimer & Dummy Information

* **Dummy Phone:** 0000000000 / 0000000000
* **Dummy Email:** demo@example.com
* **Dummy Address:** Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000
* **Demo Notice:** All forms, customer testimonials, artist profiles, and transformation panels are illustrative frontend placeholders. No live bookings or financial transactions are processed.
