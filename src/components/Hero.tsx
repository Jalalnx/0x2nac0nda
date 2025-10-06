import { useState, useEffect } from "react";
import { Download, Mail, Linkedin, Github, Twitter, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SnakeAnimation } from "./SnakeAnimation";

const roles = ["VAPT Specialist", "Bug Bounty Hunter", "CTF Player", "Security Trainer"];

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center matrix-bg overflow-hidden"
    >
      {/* Animated Snakes Background */}
      <SnakeAnimation />

      {/* Matrix-style falling binary (subtle) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-[10%] text-primary text-xs mono animate-fade-in-up opacity-50">
          01010011 01100101 01100011
        </div>
        <div className="absolute top-[20%] right-[15%] text-primary text-xs mono animate-fade-in-up opacity-40" style={{ animationDelay: "0.5s" }}>
          01110101 01110010 01101001
        </div>
        <div className="absolute bottom-[30%] left-[20%] text-primary text-xs mono animate-fade-in-up opacity-30" style={{ animationDelay: "1s" }}>
          01110100 01111001
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Handle */}
          <h1 className="hero-text text-6xl md:text-8xl tracking-tight animate-glow-pulse">
            0x2nac0nda
          </h1>

          {/* Name & Title */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Abdalla Abdelrhman Mubarak
            </h2>
            <p className="text-lg md:text-xl text-accent font-medium">
              Cyber Security Consultant
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-muted-foreground">
            <span className="flex items-center gap-1">
              📍 Riyadh, Saudi Arabia
            </span>
            <span className="hidden md:inline">·</span>
            <a
              href="mailto:abdallaabdalrhman629@gmail.com"
              className="neon-link hover:text-primary"
            >
              abdallaabdalrhman629@gmail.com
            </a>
            <span className="hidden md:inline">·</span>
          
          </div>

          {/* Terminal Role Cycler */}
          <div className="inline-block">
            <div className="mono text-sm md:text-base text-primary bg-muted/30 px-4 py-2 rounded border border-primary/20">
              <span className="text-accent">&gt;</span> role:{" "}
              <span className="text-primary font-semibold">
                {roles[currentRoleIndex]}
              </span>
              <span className="animate-pulse">_</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Eye className="mr-2 h-5 w-5" />
                Preview CV
              </a>
            </Button>

            <Button variant="heroOutline" size="lg" onClick={scrollToContact}>
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/0x2nac0nda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/abdallaabdalrhman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/0x2nac0nda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter/X"
            >
              <Twitter size={24} />
            </a>
           
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
