---
name: testing-portfolio
description: Test the personal portfolio website end-to-end. Use when verifying UI changes, animations, responsiveness, or language toggle.
---

# Testing the Portfolio Website

## Setup

This is a static HTML/CSS/JS site with no build process or dependencies.

```bash
cd /home/ubuntu/My_website_is_personal
python3 -m http.server 8080 &
```

Open `http://localhost:8080` in the browser.

**Note:** Vercel preview deployments may require authentication. For equivalent testing, use localhost.

## Key Features to Test

### 1. Hero Section
- Profile avatar with rotating gradient glow (conic-gradient animation)
- Gradient text on name and subtitle
- Animated stat counters (use `data-count` attributes): should count from 0 to target values
- "View Projects" button with purple gradient background
- Particle canvas (`#particles-canvas`) animating in the background with connected dots

### 2. Navigation
- Navbar shrinks on scroll (adds `scrolled` class after 50px scroll)
- Smooth scroll to sections when clicking nav links
- "Y.N" logo in gradient text

### 3. Cards (Skills & Projects)
- Glassmorphism effect (frosted glass with backdrop-blur)
- Border glow on hover (purple tint)
- 3D tilt effect on hover (via JavaScript `initTiltEffect`)
- Card elevation (translateY) on hover

### 4. Language Toggle (Arabic/English)
- Click "العربية" button in navbar to switch to Arabic
- Verify: all text switches to Arabic, page direction becomes RTL
- Stats row order reverses in RTL
- Toggle button text changes to "English"
- Click "English" to switch back — verify LTR restored

### 5. Mobile Responsiveness
- Use DevTools device toolbar (Ctrl+Shift+M) or resize to ~375-400px width
- Desktop nav links should be hidden
- Hamburger menu (☰) should appear and open/close mobile nav
- Skill/project cards should stack in single column
- Stats should wrap to 2x2 grid

### 6. Chat Widget
- Click the chat FAB (bottom-right corner)
- Chat modal should open with Arabic welcome message
- Input field and send button should be visible
- Close button should dismiss the modal

## Testing Tips

- Start a screen recording before testing for visual proof
- Use `annotate_recording` tool to mark key test moments
- The particle system uses `requestAnimationFrame` — verify canvas is not blank
- Counter animations use `IntersectionObserver` — must scroll stats into view to trigger
- The nav scroll effect requires scrolling past 50px from top
- For hover effects, use `mouse_move` action (not `move`)

## Devin Secrets Needed

None — this is a static site with no authentication required.
