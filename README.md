# macOS Portfolio

A modern, interactive portfolio website inspired by macOS Big Sur design. Features a fully functional desktop environment with draggable windows, smooth animations, and a beautiful user interface.

![macOS Portfolio](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-cyan)

## Features

- **macOS-Inspired UI**: Authentic macOS Big Sur design with menu bar, dock, and window system
- **Interactive Windows**: Draggable, resizable windows with smooth GSAP animations
- **Portfolio Showcase**: Display your projects in a Finder-style interface
- **Blog/Articles**: Safari-style browser for showcasing articles and blog posts
- **Photo Gallery**: Photos app for displaying your image gallery
- **Resume Viewer**: Built-in PDF viewer for displaying your resume
- **Skills Terminal**: Terminal-style interface for showcasing technical skills
- **Contact Form**: Dedicated contact window for getting in touch
- **Optimized Performance**: Code-split bundles with lazy loading for fast initial load
- **Responsive Design**: Fully responsive across all devices

## Tech Stack

### Core
- **React 19** - Latest React with concurrent features
- **Vite 7** - Lightning-fast build tool and dev server
- **TailwindCSS 4** - Utility-first CSS framework

### State Management
- **Zustand** - Lightweight state management with Immer middleware

### Animations
- **GSAP 3** - Professional-grade animations
- **@gsap/react** - React integration for GSAP
- **Draggable Plugin** - Interactive drag functionality

### Additional Libraries
- **react-pdf** - PDF rendering for resume display
- **lucide-react** - Beautiful icon library
- **dayjs** - Date manipulation
- **react-tooltip** - Elegant tooltips
- **clsx** - Utility for constructing className strings

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd MacOS-Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dock.jsx        # macOS dock component
│   ├── NavBar.jsx      # Top menu bar
│   ├── Welcome.jsx     # Welcome screen
│   ├── Home.jsx        # Desktop home screen
│   └── WindowControls.jsx  # Window control buttons
├── windows/            # Application windows
│   ├── Finder.jsx      # Projects/Portfolio window
│   ├── Safari.jsx      # Articles/Blog window
│   ├── Photos.jsx      # Gallery window
│   ├── Resume.jsx      # PDF resume viewer
│   ├── Terminal.jsx    # Skills terminal
│   ├── Contact.jsx     # Contact form
│   ├── Text.jsx        # Text editor window
│   └── Image.jsx       # Image viewer window
├── hoc/                # Higher-order components
│   └── WindowWrapper.jsx  # Wrapper for window functionality
├── store/              # Zustand state stores
│   ├── window.js       # Window management state
│   └── location.js     # Location/navigation state
├── constants/          # App constants and data
│   └── index.js        # Configuration, links, content
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Customization

### Personal Information

Edit `src/constants/index.js` to customize:
- Navigation links
- Dock applications
- Blog posts/articles
- Project portfolio items
- Photo gallery
- Contact information
- Skills and technologies

### Resume

Replace `public/files/resume.pdf` with your own resume. For best compatibility, ensure your PDF uses standard JPEG compression (not JPEG2000).

### Styling

The project uses TailwindCSS. Customize colors, fonts, and styles in:
- `tailwind.config.js` - Global theme configuration
- Component-level className utilities

### Window Behavior

Modify window settings in `src/constants/index.js`:
```javascript
export const WINDOW_CONFIG = {
  windowKey: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null
  }
}
```

## Build Optimization

The project includes several optimizations:

- **Lazy Loading**: Windows load on-demand to reduce initial bundle size
- **Code Splitting**: Vendor libraries separated into chunks
  - `react-vendor`: React core libraries
  - `gsap-vendor`: Animation libraries
  - `pdf-vendor`: PDF viewing libraries (lazy loaded)
- **Manual Chunks**: Strategic chunking for optimal caching

### Build Output

Production build generates:
- Main bundle: ~97 KB gzipped
- GSAP vendor: ~27 KB gzipped
- PDF vendor: ~125 KB gzipped (lazy loaded)
- Individual windows: 0.4-2 KB each (lazy loaded)

## Performance

- Initial load: ~97 KB gzipped
- Lazy-loaded features only download when used
- Optimized for Core Web Vitals
- Smooth 60fps animations via GSAP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by macOS Big Sur
- Icons from [Lucide](https://lucide.dev)
- Animations powered by [GSAP](https://greensock.com/gsap)

## Support

For issues and feature requests, please use the [GitHub Issues](https://github.com/yourusername/MacOS-Portfolio/issues) page.

---

Made with React + Vite + TailwindCSS
