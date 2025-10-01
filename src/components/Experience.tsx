import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Senior Cyber Security Consultant",
    company: "Independent Consultant",
    location: "Riyadh, Saudi Arabia",
    period: "2021 - Present",
    type: "consulting",
    description:
      "Conducting comprehensive VAPT for organizations across Saudi Arabia. Specialized in web application security, API testing, mobile security assessments, and Active Directory penetration testing.",
    achievements: [
      "Led 50+ security assessments",
      "Identified critical vulnerabilities in enterprise applications",
      "Provided remediation guidance and security training",
    ],
  },
  {
    title: "Security Trainer & Consultant",
    company: "Various Institutions",
    location: "Sudan",
    period: "2019 - Present",
    type: "training",
    description:
      "Delivering security awareness and technical training to universities, government institutions, and private organizations. Topics include VAPT, secure coding, and incident response.",
    achievements: [
      "Trained 200+ students and professionals",
      "Developed custom training curriculum",
      "Built hands-on labs for practical security testing",
    ],
  },
  {
    title: "Penetration Tester",
    company: "Security Firm",
    location: "Sudan",
    period: "2018 - 2021",
    type: "consulting",
    description:
      "Performed black-box and white-box penetration testing for clients. Specialized in network security, wireless security, and social engineering assessments.",
    achievements: [
      "Executed 30+ penetration tests",
      "Delivered detailed reports with remediation strategies",
      "Improved client security posture significantly",
    ],
  },
];

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
