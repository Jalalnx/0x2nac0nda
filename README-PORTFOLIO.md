# 0x2nac0nda - Cybersecurity Portfolio

A modern, responsive, single-page portfolio website for **Abdalla Abdelrhman Mubarak** (`0x2nac0nda`), featuring a dark tech/security aesthetic with animated snakes and comprehensive sections showcasing cybersecurity expertise.

![Portfolio Preview](public/og-image.png)

## 🚀 Features

- **Animated Hero Section**: SVG snakes weaving through the handle with neon-green gradients
- **Comprehensive Sections**:
  - About & Stats
  - Skills & Expertise (with proficiency bars)
  - Experience Timeline
  - Certifications Gallery
  - CTF Competitions & Rankings
  - Bug Bounty Reports
  - Projects & Writeups
  - Contact Form
- **Responsive Design**: Mobile-first, works perfectly on all devices
- **Accessibility**: Keyboard navigation, reduced motion support, semantic HTML
- **SEO Optimized**: Meta tags, Open Graph, structured content
- **Performance**: Fast loading, lazy loading, optimized animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Space Mono (monospace), Inter (sans-serif)
- **Deployment**: GitHub Pages ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/0x2nac0nda/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, contact info
   - Modify social media links
   - Change role cycling text

2. **About Section** (`src/components/About.tsx`):
   - Edit biography text
   - Update stats

3. **Skills** (`src/components/Skills.tsx`):
   - Modify skill categories
   - Adjust proficiency levels
   - Add/remove tools

4. **Experience** (`src/components/Experience.tsx`):
   - Update job history
   - Add new positions

5. **Certificates** (`src/components/Certificates.tsx`):
   - Add certificate details
   - Link to actual certificate PDFs

6. **CTF** (`src/components/CTF.tsx`):
   - Update competition results
   - Add writeup links

7. **Bug Bounty** (`src/components/BugBounty.tsx`):
   - Add bug reports
   - Update bounty stats

8. **Projects** (`src/components/Projects.tsx`):
   - Link to GitHub repos
   - Add project descriptions

9. **Contact** (`src/components/Contact.tsx`):
   - Configure form submission (integrate with EmailJS, Formspree, etc.)

### Design System

The design system is defined in `src/index.css` and `tailwind.config.ts`:

- **Colors**: Modify HSL values for primary (neon green), accent (cyan), background
- **Animations**: Adjust timing and easing in Tailwind config
- **Typography**: Change fonts by updating the Google Fonts import

Key design tokens:
```css
--primary: 142 71% 45%;           /* Neon green */
--primary-glow: 142 100% 50%;     /* Brighter green */
--accent: 180 100% 50%;           /* Cyan */
--background: 0 0% 4%;            /* Near black */
```

### Snake Animation

The snake animation is in `src/components/SnakeAnimation.tsx`. You can:
- Adjust SVG paths for different snake patterns
- Change gradient colors
- Modify animation speed (currently 8s loop)
- Add more snakes or particles

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repo name:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Build and deploy:
```bash
npm run build
```

3. Push the `dist` folder to the `gh-pages` branch or configure GitHub Actions for automatic deployment.

### Alternative Platforms

- **Netlify**: Drag and drop `dist` folder or connect GitHub repo
- **Vercel**: Import project from GitHub
- **Cloudflare Pages**: Connect GitHub repo

## 📄 CV/Resume

Replace `public/cv.pdf` with your actual resume. The download link is in the Hero section.

## 🔧 Form Configuration

To make the contact form functional:

1. **EmailJS**:
```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

2. **Formspree**:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

3. **Netlify Forms**: Add `netlify` attribute to form tag

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` respected
- Focus indicators
- Alt text on images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Suggestions and improvements welcome! Open an issue or submit a pull request.

## 📧 Contact

**Abdalla Abdelrhman Mubarak**
- Email: abdallaabdalrhman629@gmail.com
- Location: Riyadh, Saudi Arabia
- GitHub: [@0x2nac0nda](https://github.com/0x2nac0nda)
- HackerOne: [0x2nac0nda](https://hackerone.com/0x2nac0nda)
- Twitter: [@0x2nac0nda](https://twitter.com/0x2nac0nda)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
