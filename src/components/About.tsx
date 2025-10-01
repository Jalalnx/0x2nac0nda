import { Shield, Target, Award } from "lucide-react";

const stats = [
  { icon: Shield, label: "6+ years VAPT", value: "6+" },
  { icon: Target, label: "Black Hat MEA competitor", value: "CTF" },
  { icon: Award, label: "HackerOne bug bounty", value: "H1" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="section-divider" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glow-card text-center"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                <div className="mono text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bio Text */}
          <div className="glow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-foreground/90 leading-relaxed text-lg">
              I'm an Information Security professional with 6+ years' experience in{" "}
              <span className="text-primary font-semibold">
                Vulnerability Assessment & Penetration Testing (VAPT)
              </span>
              , source code review, web/API/mobile testing, network security, and Active
              Directory assessments. I hold a B.Sc. in Information Technology (Open
              University of Sudan), consult for organizations in Saudi Arabia, deliver
              security training for institutions and universities in Sudan, and compete in{" "}
              <span className="text-accent font-semibold">CTFs</span> and{" "}
              <span className="text-accent font-semibold">bug bounty programs</span>{" "}
              (HackerOne). I enjoy continuous learning and contributing writeups and tools
              to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
