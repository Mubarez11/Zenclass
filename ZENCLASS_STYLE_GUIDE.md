# ZenClass Design System

## Overview
This document defines the design system for the ZenClass educational platform. All contributors must follow these guidelines to maintain visual consistency.

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#667eea` | Main brand, buttons |
| Primary Dark | `#5a67d8` | Hover states |
| Secondary | `#764ba2` | Accent elements |
| Accent | `#4facfe` | Highlights, links |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#48bb78` | Correct answers |
| Warning | `#f6ad55` | Warnings |
| Danger | `#fc8181` | Errors |

### Gray Scale
| Name | Hex |
|------|-----|
| Gray 900 | `#1a202c` |
| Gray 800 | `#2d3748` |
| Gray 700 | `#4a5568` |
| Gray 600 | `#718096` |
| Gray 500 | `#a0aec0` |
| Gray 400 | `#cbd5e0` |
| Gray 300 | `#e2e8f0` |
| Gray 200 | `#edf2f7` |
| Gray 100 | `#f7fafc` |
| White | `#ffffff` |

### Dark Theme
| Name | Hex |
|------|-----|
| Dark | `#1a1a2e` |
| Dark Light | `#16213e` |
| Darker | `#0f0f23` |

---

## Typography

### Font Families
- **Primary:** `Poppins` (sans-serif) - body text, UI elements
- **Display:** `Playfair Display` (serif) - headings

### Google Fonts Import
```
Poppins: 300, 400, 500, 600, 700, 800
Playfair Display: 400, 500, 600, 700
```


---

## Gradients

| Name | Definition |
|------|------------|
| Primary | `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` |
| Secondary | `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)` |
| Accent | `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)` |
| Dark | `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)` |
| Success | `linear-gradient(135deg, #48bb78, #38a169)` |
| Info | `linear-gradient(135deg, #4299e1, #3182ce)` |
| Warning | `linear-gradient(135deg, #ed8936, #dd6b20)` |
| Purple | `linear-gradient(135deg, #9f7aea, #805ad5)` |

### Page-Specific Heroes
- Quiz: `#667eea` → `#764ba2`
- Evaluation: `#48bb78` → `#38a169`
- Respiration: `#4299e1` → `#3182ce`
- Classification: `#ed8936` → `#dd6b20`
- Roleplay: `#9f7aea` → `#805ad5`


---

## Spacing & Layout

| Variable | Value |
|----------|-------|
| `--section-padding` | `100px 0` |
| `--container-width` | `1200px` |
| `--nav-height` | `~70px` |

### Border Radius
| Name | Value |
|------|-------|
| `--radius-sm` | `8px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `20px` |
| `--radius-xl` | `30px` |
| `--radius-full` | `50%` |

---

## Shadows

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
--shadow-lg: 0 10px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05);
--shadow-xl: 0 20px 40px rgba(0,0,0,0.2);
--shadow-glow: 0 0 40px rgba(102, 126, 234, 0.4);
```


---

## Transitions

```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Components

### Buttons
- Border radius: `12px`
- Primary: gradient background + shadow glow
- Large padding: `18px 36px`
- Standard padding: `14px 28px`
- Outline variant: border-only with hover fill

### Cards
- Border radius: `16px` to `20px`
- Padding: `30px` to `40px`
- Box shadow: medium to large

### Navigation
- Fixed top position
- Glassmorphism: `backdrop-filter: blur(20px)`
- Logo with gradient text effect

### Hero Sections
- Gradient backgrounds per page type (see Gradients section)


### Interactive Elements
- Quiz answer buttons with letter badges
- Rating circles for evaluation
- Breathing circle (green/orange/purple states)
- Drag-and-drop items
- Card deck layouts


### AI Agent Widget
- Floating chat button with rotating gradient border
- Glass-effect chat window
- Bouncing dots typing indicator
- Quick action buttons / suggestion chips

---

## External Libraries
| Library | Version | Purpose |
|---------|---------|---------|
| Font Awesome | 6.5.1 | Icons |
| AOS | 2.3.1 | Scroll animations |
| Animate.css | 4.1.1 | CSS animations |

---

## Responsive Breakpoints
- Mobile: `480px`
- Tablet: `576px`, `768px`, `992px`
- Desktop: `1024px`

---

## CSS Variable Template

Add this to your CSS files:
```css
:root {
  /* Fonts */
  --font-primary: 'Poppins', sans-serif;
  --font-display: 'Playfair Display', serif;

  /* Colors */
  --color-primary: #667eea;
  --color-primary-dark: #5a67d8;
  --color-secondary: #764ba2;
  --color-accent: #4facfe;
  --color-success: #48bb78;
  --color-warning: #f6ad55;
  --color-danger: #fc8181;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --gradient-dark: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);

  /* Spacing */
  --section-padding: 100px 0;
  --container-width: 1200px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 30px;


  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05);
  --shadow-xl: 0 20px 40px rgba(0,0,0,0.2);
  --shadow-glow: 0 0 40px rgba(102, 126, 234, 0.4);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```