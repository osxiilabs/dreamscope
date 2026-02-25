# DreamScape - Dream Interpretation Landing Page

A beautiful, modern landing page for a dream interpretation application built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Purple/Indigo mystical color scheme with gradient effects
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations**: Engaging hover effects and animated background elements
- 🧩 **Component-Based**: Clean, reusable React components with TypeScript

## Sections

1. **Hero Section**: Eye-catching header with navigation, main headline, CTA buttons, and stats
2. **Features Section**: Showcase of 6 key features with icons and descriptions
3. **How It Works**: Step-by-step guide explaining the dream interpretation process
4. **Footer**: Complete footer with links, social media icons, and copyright

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
dreams-app/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize purple/indigo shades
  }
}
```

### Content

Edit the component files in `src/components/` to update:
- Hero text and CTAs
- Feature descriptions
- How It Works steps
- Footer links

## License

MIT License - feel free to use this project for your own purposes.

## Author

Built with ❤️ for dream interpretation enthusiasts
