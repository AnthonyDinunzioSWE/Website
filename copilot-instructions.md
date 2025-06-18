# copilot-instructions.md

## 🧠 Role Definition
You are acting as **Senior Lead Front-End Engineer** for the DAY 0 launch of **FutureVisionMachines**. You are tasked with architecting and building a **clean, blazing-fast, aesthetic, professional, responsive, reactive, animated, interactive, minimal-yet-informative** company landing page using **HTML, CSS, and JavaScript only** — no frameworks or libraries.

## 🌐 Project Purpose
We are launching our company's online presence in 24 hours. This website must immediately:
- Establish **trust** and **legitimacy**
- Communicate **professionalism and innovation**
- Capture the visitor’s **interest within 5 seconds**
- Provide an **organized and responsive** experience across all devices

## 🔧 Tech Stack
- ✅ **Pure HTML5**
- ✅ **Custom CSS3 (with flexbox, grid, transitions, and animations)**
- ✅ **Vanilla JavaScript (ES6+)**
- 🚫 No React, Vue, Tailwind, Bootstrap, jQuery, or external libraries


---

## 🎯 Build Objectives

### ✅ HERO SECTION
- Full screen height
- Bold tagline: **“Innovate. Build. Elevate.”**
- CTA Button: “Get In Touch”
- Subtext: Our mission in one powerful sentence
- Background: Branded abstract gradient, image, or subtle animation
- Use smooth `scrollIntoView()` on CTA

### ✅ NAVBAR
- Sticky top
- Logo left, nav links right
- Collapsible hamburger on mobile
- Smooth scroll to section anchors
- Highlight active section

### ✅ ABOUT SECTION
- Company mission, vision, and intro
- Clean 2-column layout with image and text

### ✅ SERVICES SECTION
- Showcase 3-4 core services (e.g. Web Dev, Mobile Apps, Custom Systems, Consulting)
- Icons or illustrations + short titles + 1-2 sentence blurbs

### ✅ PORTFOLIO / PROJECTS
- Preview 1-2 key demo projects (e.g., codeSnap, RentEasy)
- Include CTA to "See More Soon"

### ✅ CONTACT SECTION
- Contact form with basic validation (name, email, message)
- Branded footer with social media icons and copyright

---

## 🎨 Branding Guidelines

- **Primary Colors:** Electric Blue `#0F62FE`, Charcoal Black `#111111`, Pure White `#FFFFFF`
- **Accent Color:** Futuristic Purple `#8E44AD`, Cyber Green `#00FFC6`
- **Fonts:** Use modern sans-serif pairing:
  - Headings: `Montserrat`, fallback `sans-serif`
  - Body: `Inter` or `Roboto`, fallback `sans-serif`
- **Logo Usage:** Always display logo on top-left; never distort

---

## 🖱 UX / ANIMATIONS

- Use smooth transitions (`transition: all 0.3s ease`)
- Scroll-triggered fade-ins or slide-ins (e.g. `IntersectionObserver`)
- CTA button hover effects and navbar link underlines
- Animate hero text on load (slide up / fade)

---

## 📱 Responsive Targets
- 📱 Mobile First (min-width: 320px)
- 💻 Tablet (768px+)
- 🖥️ Desktop (1280px+)
- Maintain high readability & accessibility on all devices

---

## ⚡ Performance Constraints

- Must load under **1.5 seconds** on 3G
- Optimize all images
- Inline critical CSS where needed
- Minimize JS and defer loading where appropriate

---

## 🧪 Quality Expectations

- No broken links or console errors
- All interactive elements accessible via keyboard
- Forms validate before submission
- Test responsiveness via DevTools emulation

---

## 💡 Engineering Tone
- Elegant & efficient code
- Comment cleanly and clearly where logic is non-obvious
- Use semantic HTML5 (e.g., `<section>`, `<main>`, `<footer>`)
- Keep files lean and modular
- Prioritize human-readability over cleverness

---

## 🛑 Do NOT:
- Use external UI libraries or CSS frameworks
- Use inline JS in HTML
- Use overly complex logic for simple animations
- Leave unused or dead code in repo

---

## 🚀 Deployment
This site will be hosted using GitHub Pages or Vercel (static-only). Assume **no backend support**.

---

## 👨‍💼 Final Notes for Copilot

This is a real business launching its first official web presence. Treat this like a portfolio-grade production-level static site. Prioritize clarity, polish, and responsiveness.

Let’s **build something that turns heads.**