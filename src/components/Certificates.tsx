import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Offensive Security Certified Professional",
    short: "OSCP",
    issuer: "Offensive Security",
    year: "2022",
    id: "OS-XXXXX",
    url: "#",
    icon: "🎯",
  },
  {
    title: "eLearnSecurity Junior Penetration Tester",
    short: "eJPT",
    issuer: "eLearnSecurity",
    year: "2020",
    id: "eJPT-XXXXX",
    url: "#",
    icon: "🛡️",
  },
  {
    title: "Certified Ethical Hacker",
    short: "CEH",
    issuer: "EC-Council",
    year: "2021",
    id: "ECC-XXXXX",
    url: "#",
    icon: "⚔️",
  },
  {
    title: "CompTIA Security+",
    short: "Security+",
    issuer: "CompTIA",
    year: "2019",
    id: "COMP-XXXXX",
    url: "#",
    icon: "🔒",
  },
  {
    title: "Web Application Penetration Testing",
    short: "WAPT",
    issuer: "INE Security",
    year: "2021",
    id: "INE-XXXXX",
    url: "#",
    icon: "🌐",
  },
  {
    title: "Mobile Application Security",
    short: "MAS",
    issuer: "Custom Training",
    year: "2022",
    id: "MAS-XXXXX",
    url: "#",
    icon: "📱",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Certifications
            </h2>
            <div className="section-divider" />
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="glow-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <Award className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.short}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">{cert.title}</p>

                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <p>{cert.issuer}</p>
                  <p className="mono text-primary">{cert.year}</p>
                  <p className="mono text-xs">{cert.id}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  asChild
                >
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
