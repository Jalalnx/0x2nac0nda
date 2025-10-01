import { Github, FileText, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Custom VAPT Framework",
    description:
      "A modular Python-based framework for automating common penetration testing tasks including reconnaissance, vulnerability scanning, and reporting.",
    tech: ["Python", "Nmap", "SQLMap", "Metasploit"],
    githubUrl: "https://github.com/0x2nac0nda",
    writeupUrl: "#",
    stars: 245,
  },
  {
    title: "Web App Security Scanner",
    description:
      "Automated web application security scanner that identifies OWASP Top 10 vulnerabilities. Includes custom detection rules and comprehensive reporting.",
    tech: ["Python", "BeautifulSoup", "Requests", "SQLite"],
    githubUrl: "https://github.com/0x2nac0nda",
    writeupUrl: "#",
    stars: 189,
  },
  {
    title: "Active Directory Toolkit",
    description:
      "Collection of PowerShell and Python scripts for AD enumeration, privilege escalation, and lateral movement during red team engagements.",
    tech: ["PowerShell", "Python", "Impacket", "BloodHound"],
    githubUrl: "https://github.com/0x2nac0nda",
    writeupUrl: "#",
    stars: 312,
  },
  {
    title: "CTF Writeup Collection",
    description:
      "Comprehensive collection of CTF challenge writeups covering web, crypto, reversing, pwn, and forensics categories from various competitions.",
    tech: ["Markdown", "Python", "Bash"],
    githubUrl: "https://github.com/0x2nac0nda/ctf-writeups",
    writeupUrl: "#",
    stars: 567,
  },
  {
    title: "Security Training Labs",
    description:
      "Docker-based vulnerable web applications and infrastructure for hands-on security training. Includes guided labs and solutions.",
    tech: ["Docker", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/0x2nac0nda",
    writeupUrl: "#",
    stars: 423,
  },
  {
    title: "API Fuzzer Tool",
    description:
      "Intelligent API fuzzing tool that automatically discovers endpoints, generates test cases, and identifies security vulnerabilities in REST APIs.",
    tech: ["Python", "FastAPI", "MongoDB", "Redis"],
    githubUrl: "https://github.com/0x2nac0nda",
    writeupUrl: "#",
    stars: 198,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Projects & Writeups
            </h2>
            <div className="section-divider" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glow-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Github className="w-4 h-4" />
                    <span className="mono">{project.stars}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-primary group-hover:text-primary"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-primary group-hover:text-primary"
                    asChild
                  >
                    <a
                      href={project.writeupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Writeup
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="mt-12 text-center animate-fade-in-up">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://github.com/0x2nac0nda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
