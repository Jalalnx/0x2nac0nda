import { Briefcase, GraduationCap } from "lucide-react";

const experiences = 
[
  {
    "title": "Cyber Security Consultant",
    "company": "New Solutions",
    "location": "Riyadh, Saudi Arabia",
    "period": " – August 2024 to August 2025",
    "type": "consulting",
    "description": "Perform various penetration testing services across web, API, mobile (iOS & Android), network, and Active Directory. Responsible for producing detailed security assessment reports.",
    "achievements": [
      "Executed penetration testing across multiple domains including web, API, mobile, and AD",
      "Delivered comprehensive technical reports with remediation strategies",
      "Enhanced client security posture through systematic vulnerability exploitation and reporting"
    ]
  },
  {
    "title": "Security Consultant",
    "company": "OISSG Consultancy",
    "location": "Doha, Qatar",
    "period": "Sep 2023 – Jul 2024",
    "type": "consulting",
    "description": "Conducted penetration testing services including web, API, mobile, network, and Active Directory. Performed internal and external testing, source code reviews, and technical reporting.",
    "achievements": [
      "Performed white box, black box, and gray box testing",
      "Delivered actionable security reports with remediation recommendations",
      "Conducted in-depth source code reviews for secure coding practices"
    ]
  },
  {
    "title": "Senior Cyber Security",
    "company": "Kilotech Security",
    "location": "Jeddah, Saudi Arabia",
    "period": "Jan 2023 – Oct 2023",
    "type": "full-time",
    "description": "Performed penetration testing services (web, API, mobile, and Active Directory), source code reviews, and technical reporting. Also managed and authored website security-related content.",
    "achievements": [
      "Conducted vulnerability assessments on web/mobile apps, networks, and AD",
      "Provided mitigation guidance for firewall configurations and OS hardening",
      "Authored security content to raise awareness on best practices"
    ]
  },
  {
    "title": "Penetration Tester",
    "company": "National Information Center",
    "location": "Khartoum, Sudan",
    "period": "Mar 2020 – Mar 2021",
    "type": "government",
    "description": "Performed penetration testing across web apps, APIs, mobile apps, networks, and AD. Conducted internal/external testing, OS/server hardening, and produced detailed reports.",
    "achievements": [
      "Discovered and reported vulnerabilities across multiple platforms",
      "Implemented OS and server hardening for Linux and Windows",
      "Delivered remediation-focused technical security reports"
    ]
  },
  {
    "title": "Cyber Security Trainer",
    "company": "Afro-Tech Training Center",
    "location": "Khartoum, Sudan",
    "period": "Jun 2020 – Jul 2021",
    "type": "training",
    "description": "Provided foundational and advanced training in cybersecurity topics such as fundamentals, web application security, penetration testing, CTF challenges, and bug bounty practices.",
    "achievements": [
      "Trained students in cybersecurity fundamentals and penetration testing",
      "Guided learners through CTF challenges for hands-on experience",
      "Delivered a bug bounty course focusing on real-world vulnerability discovery"
    ]
  }
]


export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Experience
            </h2>
            <div className="section-divider" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                  } animate-slide-in-right`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 shadow-lg" />

                  {/* Content Card */}
                  <div className="glow-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {exp.type === "consulting" ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-accent" />
                        )}
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-foreground/80 font-medium">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{exp.location}</span>
                        <span>·</span>
                        <span className="mono text-primary">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-primary text-lg">▹</span>
                          <span className="text-sm text-foreground/70">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
