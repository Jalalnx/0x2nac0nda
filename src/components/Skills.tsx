import { Globe, Server, Network, Code, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Web / API / Mobile Security",
    icon: Globe,
    skills: [
      { name: "OWASP Top 10", level: 95 },
      { name: "API Testing", level: 90 },
      { name: "Mobile App Security", level: 85 },
      { name: "Authentication Bypass", level: 92 },
    ],
  },
  {
    title: "Active Directory",
    icon: Server,
    skills: [
      { name: "AD Enumeration", level: 88 },
      { name: "Privilege Escalation", level: 85 },
      { name: "Kerberoasting", level: 80 },
      { name: "Lateral Movement", level: 82 },
    ],
  },
  {
    title: "Network Security",
    icon: Network,
    skills: [
      { name: "Network Scanning", level: 90 },
      { name: "Vulnerability Assessment", level: 92 },
      { name: "Exploitation", level: 88 },
      { name: "Post-Exploitation", level: 85 },
    ],
  },
  {
    title: "Source Code Review",
    icon: Code,
    skills: [
      { name: "Static Analysis", level: 85 },
      { name: "Secure Code Patterns", level: 80 },
      { name: "Logic Flaws", level: 88 },
      { name: "Injection Flaws", level: 90 },
    ],
  },
  {
    title: "Tooling & Frameworks",
    icon: Wrench,
    tools: [
      "Burp Suite Pro",
      "Metasploit",
      "Nmap",
      "Wireshark",
      "SQLMap",
      "OWASP ZAP",
      "Nikto",
      "Gobuster",
      "Bloodhound",
      "Impacket",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <div className="section-divider" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {category.skills ? (
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-foreground/80">
                            {skill.name}
                          </span>
                          <span className="text-sm text-primary mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.tools?.map((tool, idx) => (
                      <span key={idx} className="tech-badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
