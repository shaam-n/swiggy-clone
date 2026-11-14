# 🍔 Swiggy Clone

A production-grade Swiggy web application clone built from scratch using **React 19**, **Parcel**, **Tailwind CSS**, and **Docker**, following modern frontend architecture and industry best practices.

---

## 🛠️ Tech Stack & Tooling

* **Frontend Library**: React 19 (`react`, `react-dom`)
* **Module Bundler**: Parcel v2
* **Styling**: Tailwind CSS v3 with PostCSS
* **Containerization**: Docker & Docker Compose
* **Transpiler**: Babel / SWC (via Parcel)
* **Architecture**: Component-driven architecture, centralized constants, sticky-footer Flexbox layout

---

## 📁 Project Architecture & Folder Structure

```text
namaste-react/
├── public/                 # Static assets
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── Header.jsx      # Sticky navbar with location, nav links, badges & icons
│   │   ├── Body.jsx        # Search, filters, and restaurant cards (In progress)
│   │   └── Footer.jsx      # App download banner & dark-theme multi-column footer
│   │
│   ├── utils/              # Helper utilities, configs, and assets
│   │   └── constants.js    # Centralized Swiggy CDN URLs (Logo, Badges, Food images)
│   │
│   ├── App.js              # Root component & full-height flex layout
│   └── (style.css)         # Global styles & Tailwind directives
│
├── .gitignore              # Ignores node_modules, dist, .parcel-cache, .env
├── .postcssrc              # PostCSS configuration for Parcel + Tailwind
├── docker-compose.yaml     # Container orchestration & live reload volume mounts
├── dockerfile.dev          # Development environment Docker container definition
├── index.html              # HTML5 entrypoint
├── package.json            # Scripts, dependencies, and metadata
├── README.md               # Project documentation
└── tailwind.config.js      # Tailwind theme extensions & Swiggy brand colors
```

---

## 🚀 Getting Started & Setup Instructions

### Prerequisites
* **Node.js**: `v18.0.0` or higher (tested on `v20.14.0`)
* **npm**: `v9.0.0` or higher
* **Docker & Docker Compose** (optional, for containerized development)

---

### Method 1: Local Development (Native)

#### 1. Installation
Clone the repository and install all project dependencies:
```bash
git clone https://github.com/shaam-n/swiggy-clone.git
cd swiggy-clone
npm install
```

#### 2. Run the Development Server
Start the Parcel development server with Hot Module Replacement (HMR):
```bash
npm start
```
Open **[http://localhost:1234](http://localhost:1234)** in your browser to view the application.

#### 3. Build for Production
Create an optimized, minified production build inside the `dist/` directory:
```bash
npm run build
```

---

### Method 2: Containerized Development (Docker & Docker Compose)

Docker allows running the app in an isolated environment without needing Node.js or npm installed on your host system.

#### Option A: Using Docker Compose (Recommended)
Docker Compose automatically handles container building, port forwarding (`1234:1234`), and volume mounting with real-time live reload.

1. **Start the application**:
   ```bash
   docker compose up --build
   ```
   *(Or run in detached background mode: `docker compose up -d`)*

2. Open **[http://localhost:1234](http://localhost:1234)** in your browser. Any edits made to local files will immediately trigger live reload inside the container.

3. **Stop the container**:
   ```bash
   docker compose down
   ```

#### Option B: Using Docker CLI
If you prefer running standalone Docker commands:

1. **Build the development image**:
   ```bash
   docker build -f dockerfile.dev -t swiggy-clone-dev .
   ```

2. **Run container with volume mounting (Live Reload)**:
   * **PowerShell / Windows**:
     ```powershell
     docker run -p 1234:1234 -v ${PWD}:/app -v /app/node_modules swiggy-clone-dev
     ```
   * **Linux / macOS / Git Bash**:
     ```bash
     docker run -p 1234:1234 -v $(pwd):/app -v /app/node_modules swiggy-clone-dev
     ```

---

## 📌 Milestones Completed So Far

### 1. Tooling & Environment Setup
- Initialized npm project and resolved Parcel entrypoint configuration (removed conflicting `"main": "App.js"` from `package.json`).
- Installed and integrated **Tailwind CSS** with **PostCSS** (`.postcssrc` and `tailwind.config.js`).
- Defined Swiggy brand theme colors (`#fc8019`, `#e56c07`, `#02060c`, `#f0f0f5`).
- Solved React virtual DOM reconciliation warning by understanding and applying unique `key` props.

### 2. Containerization & Developer Experience (Docker & Compose)
- **`dockerfile.dev`**: Created container environment based on lightweight `node:18.16.0-alpine3.18`, installing dependencies with clean caching layer.
- **`docker-compose.yaml`**: Orchestrated service with port mapping `1234:1234`, host volume mapping (`.:/app`) for instant hot reload, and anonymous volume (`/app/node_modules`) to avoid clobbering container packages.

### 3. Centralized Assets & Constants (`src/utils/constants.js`)
- Extracted all Swiggy CDN assets into a single source of truth:
  - Official Swiggy Logo URL
  - Cloudinary Restaurant Image CDN Base URL (`CDN_URL`)
  - Official Google Play Store & Apple App Store badges

### 4. Pixel-Perfect Header Component (`src/components/Header.jsx`)
- **Sticky Top Bar**: `sticky top-0 z-50` with elevation drop-shadow (`shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]`).
- **Brand Identity**: Authentic Swiggy logo with smooth scale interaction on hover.
- **Location Selector**: Bold area indicator with black underline transitioning to Swiggy orange, truncated location text, and animated dropdown arrow.
- **Navigation Links**:
  - `Search` with magnifying glass icon
  - `Offer` with tag icon and custom orange `NEW` badge
  - `Help` with support icon
  - `Sign in` with user icon
  - `Cart` with cart icon and live green count badge indicator

### 5. Comprehensive Footer Component (`src/components/Footer.jsx`)
- **App Download Banner**: Swiggy's `#f0f0f5` light grey banner featuring official Google Play and App Store badges with hover transitions.
- **Main Directory (Dark Theme)**: Dark `#02060c` background with a 5-column responsive grid:
  - *Brand & Copyright*: Inverted white Swiggy logo with copyright notice.
  - *Company*: About Us, Team, Careers, Swiggy One, Swiggy Instamart.
  - *Contact & Legal*: Help & Support, Partner/Ride with us, Terms & Conditions, Cookie & Privacy policies.
  - *Cities Delivered*: Top metro list + custom `685 cities ▾` button.
  - *Social Links*: Vector SVG icons for LinkedIn, Twitter (X), Instagram, and Facebook.

### 6. Sticky Footer Architecture Fix
- Resolved the "floating footer" empty space issue on short pages by structuring `src/App.js` with:
  - `min-h-screen` + `flex flex-col` on the root container.
  - `flex-1` on the `<main>` Body container to stretch and push the footer to the bottom.

---

## 🎯 Next Steps
- [ ] Build **`Body.jsx`**:
  - Top search input bar & "Top Rated Restaurants" filter button.
  - Restaurant cards grid layout (`RestaurantCard.jsx`).
  - Shimmer UI loading placeholders.
- [ ] Connect Swiggy Live API / mock restaurant data.
- [ ] Add client-side routing with `react-router-dom`.
- [ ] Implement Restaurant Menu page with accordion categories.
- [ ] Add Redux Toolkit (`@reduxjs/toolkit`) for cart management.
