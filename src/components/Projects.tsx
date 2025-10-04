import { Github, FileText, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "OSWE-Preparation-Tudo",
    description:
      "This is an intentionally vulnerable web application. There are 3 steps to complete the challenge and multiple ways to complete each step.",
    tech: ["Python", "Deserialization", "File Upload", "SSTI"],
    githubUrl: "https://github.com/abdallaabdalrhman/OSWE-Preparation-Tudo",
    writeupUrl: "#",
    stars: 245,
  }, 

    {
    title: "Blind SQL injection with conditional responses",
    description:
      "TThe results of the SQL query are not returned, and no error messages are displayed. But the application includes a “Welcome back” message in the page if the query returns any rows.",
    tech: ["Burp", "SQL Injection", "Blind SQL injection"],
    githubUrl: "https://medium.com/@0x2nac0nda/blind-sql-injection-with-conditional-responses-d548b6c01181",
    writeupUrl: "#",
    stars: 245,
  }, 


    {
    title: "Forensic Challenge at BlackHat MEA Qualification",
    description:
      "My work PC has suddenly crashed. I can no longer retrieve my secret file, also I don’t remember the password. It is a hard password and securely generated, but i saved it locally. Can you help me recover the content?",
    tech: ["Volatility", "Digital forensics", "Memory Forensics"],
    githubUrl: "https://medium.com/@0x2nac0nda/forensic-challenge-at-blackhat-mea-qualification-7f01d23ba74b",
    writeupUrl: "#",
    stars: 245,
  }, 

  {
    title: "First Bug in Bugcrowd Using Github Dork",
    description:
      "Exposed API keys and secrets in public GitHub repository discovered via GitHub dork - User names , Passwords , Emails , Token , Secret key , backup file , and More",
    tech: ["GitHub", "Sensitive Information", "Github dorks"],
    githubUrl: "https://medium.com/@0x2nac0nda/first-bug-in-bugcrowd-using-github-dork-ef8c42944c26",
    writeupUrl: "#",
    stars: 245,
  }, 

]

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
          {/* <div className="mt-12 text-center animate-fade-in-up">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};
