# ✨ Animations Showcase (Alpine.js + GSAP + TailwindCSS)

This project is a collection of lightweight animation demos built with **Alpine.js**, **GSAP**, and **TailwindCSS**. It serves as a playground and visual gallery for testing transitions, scroll effects, parallax, and other animation techniques using modern web tools — without heavy frameworks or routing systems.

## 📁 Project Structure

Esta es la estructura que manejaremos en este proyecto

``` bash
animations/
├── components/           # HTML fragments used as Alpine components
│   ├── fade.html         # Fade-in on scroll
│   ├── parallax.html     # Parallax animation demo
│   └── cards.html        # Animated card grid
│
├── css/
│   └── style.css         # Optional custom styles
│
├── js/
│   ├── main.js           # Global logic (initComponents, Alpine setup)
│   └── components/
│       ├── fade.js       # JS logic for fade.html
│       ├── parallax.js   # JS logic for parallax.html
│       └── cards.js      # JS logic for cards.html
│
├── index.html            # Main landing page with multiple animations
├── animation2.html       # Dedicated page for a specific animation demo
└── animation3.html       # Another individual demo or experimental test
```

## 🚀 Tech Stack

- [Alpine.js](https://alpinejs.dev/) – Lightweight reactivity for HTML
- [GSAP (GreenSock)](https://gsap.com/) – JavaScript animation powerhouse
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework

## 🧠 How it Works

Components are defined as fragments (`.html`) and loaded dynamically into the main pages using a custom `initComponents()` function. This allows modular and reusable animations without bundling or complex builds.

Each component may include:
- HTML (`components/`)
- JavaScript logic (`js/components/`)

When a component is loaded, Alpine and GSAP are initialized accordingly.

## ✅ Usage

Open `index.html` directly in your browser or deploy the project to any static host (Cloudflare Pages, GitHub Pages, Netlify, etc.).

To create a new animation component:
1. Create a new HTML file in `components/`
2. Create a matching JS file in `js/components/` (optional)
3. Add a `<div x-component="yourComponentName"></div>` placeholder in `index.html` or another page

Example:

```html
<!-- index.html -->
<div x-component="fade"></div>
```

## 📦 Build Tools
No build step is required — this project is designed to work with native ES modules and CDN dependencies. You can expand it using tools like Vite or Parcel if needed later.

## 📄 License
MIT – free to use, adapt, and remix.
