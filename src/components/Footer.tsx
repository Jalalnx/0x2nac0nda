import { Heart, Terminal } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/20 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Handle */}
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="mono text-lg font-bold text-primary">
                0x2nac0nda
              </span>
            </div>

            {/* Center: Copyright */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Abdalla Abdelrhman Mubarak. All rights reserved.
              </p>
              
            </div>

            {/* Right: Quick Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#hero" className="neon-link hover:text-primary">
                Top
              </a>
              <span>•</span>
              <a href="#about" className="neon-link hover:text-primary">
                About
              </a>
              <span>•</span>
              <a href="#contact" className="neon-link hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
