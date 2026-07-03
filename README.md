# 🕵️‍♂️ Mister MacGuffin's Mystery Diner

Welcome to **Mister MacGuffin's Mystery Diner**, the world's premier single-page web application for enigmatic gastronomy. Established in 1963 under strictly classified circumstances, we serve recipes that are redacted, ingredients that are confidential, and dining experiences designed to perplex and delight.

This project is a modern, responsive single-page application (SPA) built using vanilla JavaScript, Webpack, and premium custom CSS.

---

## ✨ Features

- **Dynamic Tabbed Navigation**: Smoothly switch between **About**, **Menu**, and **Contact** pages instantly without any full-page reloads.
- **Modern Transitions**: Utilizes the modern browser **View Transitions API** for fluid, elegant animations when transitioning between pages.
- **Enigmatic Contact Transmission**: A interactive form that simulates clearance level validation and transmission encryption upon submission.
- **Glassmorphism Design System**: Modern visual aesthetics featuring frosted glass panels, rich dark modes, sleek gradients, custom Google Fonts typography (`Cinzel`, `Dancing Script`, `Plus Jakarta Sans`), and subtle micro-animations.
- **Accessibility (A11y) First**: Focus management, semantic HTML5 structure, appropriate `aria` roles, and keyboard navigation.

---

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Modern CSS (featuring CSS Custom Properties, Glassmorphism backdrop-filters, custom animations)
- **Bundler**: Webpack 5
- **Assets & Icons**: Font Awesome 5, Google Fonts

---

## 🚀 Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your machine to manage dependencies and run the build scripts.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hamilto8/restaurant-page.git
   cd restaurant-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

You can run the build script to bundle the resources:

- **Build once**:
  ```bash
  npm run build
  ```
  This command builds the bundle using Webpack and copies the image assets to the `dist/` directory.

- **Watch mode (Development)**:
  ```bash
  npm run watch
  ```
  This command will automatically recompile your changes as you edit the source files.

Open `dist/index.html` in your web browser to view the application.

---

## 📁 Project Structure

```text
├── dist/                  # Compiled production assets
│   ├── images/            # Copied asset images
│   ├── index.html         # Application entry page
│   ├── main.js            # Webpack bundled JavaScript
│   └── style.css          # Main styling sheet
├── src/                   # Source JavaScript files
│   ├── about.js           # About page component
│   ├── contact.js         # Contact page/form component
│   ├── index.js           # Routing and application bootstrap
│   └── menu.js            # Menu page component
├── webpack.config.js      # Webpack configuration
├── package.json           # Node.js project manifest
└── README.md              # This file
```

---

## 📄 License

This project is licensed under the ISC License - see the [package.json](file:///Users/michaelhamilton/Projects/github_projects/restaurant-page/package.json) file for details.
