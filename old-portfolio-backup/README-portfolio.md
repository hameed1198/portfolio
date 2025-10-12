# Mohammad Hameed Khan - React Portfolio

A modern, interactive portfolio website built with React.js, TypeScript, Three.js, and Framer Motion, showcasing Mohammad Hameed Khan's expertise as a Python developer and system engineer.

## 🚀 Features

### Modern Technology Stack
- **React 18** with TypeScript for type-safe development
- **Three.js** with React Three Fiber for stunning 3D backgrounds
- **Framer Motion** for smooth animations and transitions
- **Tailwind CSS** for modern, responsive design
- **Animated SVGs** for interactive visual elements
- **Intersection Observer** for scroll-triggered animations

### Interactive Elements
- **3D Particle Systems** - Dynamic floating particles and geometric shapes
- **Animated Loading Screen** - Custom SVG animations with progress indicators
- **Smooth Scroll Navigation** - Seamless section transitions
- **Hover Effects** - Interactive UI elements with motion feedback
- **Responsive Design** - Optimized for all device sizes
- **Performance Optimized** - Lazy loading and efficient rendering

### Portfolio Sections
- **Hero Section** with 3D background and animated text
- **About Section** with interactive highlights and statistics
- **Skills Section** with animated progress bars and SVG icons
- **Experience Timeline** with detailed professional journey
- **Contact Section** with animated form and contact information

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── images/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── ThreeBackground.tsx
│   │   │   └── AnimatedText.tsx
│   │   ├── About/
│   │   │   └── About.tsx
│   │   ├── Skills/
│   │   │   └── Skills.tsx
│   │   ├── Experience/
│   │   │   └── Experience.tsx
│   │   ├── Contact/
│   │   │   └── Contact.tsx
│   │   └── common/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── LoadingScreen.tsx
│   │       └── AnimatedSVG/
│   ├── hooks/
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── index.tsx
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## 🎨 Design Features

### Color Palette
- **Primary**: Blue (#3b82f6) to Purple (#8b5cf6) gradients
- **Dark Theme**: Dark slate backgrounds (#0f172a, #1e293b)
- **Accents**: Cyan (#06b6d4) and various gradient combinations

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive sizing** with fluid typography
- **Gradient text effects** for emphasis

### Animation Types
- **Entrance animations**: Staggered reveals with easing
- **Scroll-triggered**: Intersection Observer based animations
- **3D effects**: Three.js particle systems and geometries
- **Micro-interactions**: Hover states and button feedback
- **Loading animations**: SVG path animations and progress bars

## 🔧 Customization

### Updating Personal Information
1. **Contact Details**: Edit `src/components/Contact/Contact.tsx`
2. **Experience**: Update `src/components/Experience/Experience.tsx`
3. **Skills**: Modify `src/components/Skills/Skills.tsx`
4. **About Content**: Change `src/components/About/About.tsx`

### Styling Modifications
1. **Colors**: Update `tailwind.config.js` theme colors
2. **Animations**: Modify Framer Motion variants in components
3. **3D Effects**: Customize Three.js components in `ThreeBackground.tsx`

### Adding New Sections
1. Create component in appropriate folder
2. Add to main `App.tsx`
3. Update navigation in `Header.tsx`
4. Style with Tailwind classes

## 🚀 Deployment

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on commits

### Vercel
1. Import GitHub repository
2. Configure project settings
3. Deploy with zero configuration

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📦 Dependencies

### Core Dependencies
- `react` & `react-dom` - React framework
- `typescript` - Type safety
- `framer-motion` - Animation library
- `@react-three/fiber` - Three.js React renderer
- `@react-three/drei` - Three.js helpers
- `three` - 3D graphics library
- `react-intersection-observer` - Scroll detection

### Styling
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

## 🎯 Performance Optimizations

### Implemented Optimizations
- **Code Splitting**: React.lazy for component loading
- **Three.js Optimizations**: Efficient particle systems and geometry
- **Image Optimization**: Proper sizing and lazy loading
- **Animation Performance**: GPU acceleration and will-change properties
- **Bundle Optimization**: Tree shaking and dead code elimination

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔄 Browser Compatibility

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari 14+, Chrome Android 90+

## 📞 Contact Information

- **Email**: hameed1198@gmail.com
- **Phone**: +91 8919070648
- **Location**: Hyderabad, India
- **LinkedIn**: [Mohammad Hameed Khan](https://www.linkedin.com/in/hameed-khan-mohammad-35b697183)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ by Mohammad Hameed Khan**

*Showcasing modern web development with React, TypeScript, Three.js, and cutting-edge animation libraries.*