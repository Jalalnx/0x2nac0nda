import { Shield, Target, Award } from "lucide-react";



export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="section-divider" />
          </div>

        

          {/* Bio Text */}
          <div className="glow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-foreground/90 leading-relaxed text-lg">
              I am a dedicated Information Security professional with over 6+ years of hands-on experience in
              Vulnerability Assessment and Penetration Testing (VAPT),{" "}
              <span className="text-primary font-semibold">
               including source code review, web/API/mobile
              application security testing, network security, and Active Directory assessments.
              
              
              </span>
              <p>
               {" "} I hold a Bachelor’s degree in Information Technology from the Open University of Sudan and currently
              work as a <span className="text-primary font-semibold">Cyber Security Consultant.</span>{" "}
              </p>

             In addition to my consultancy work, I provide security training to institutions and universities in Sudan.
              I also actively participate in bug bounty programs on the HackerOne platform on a part-time basis and
              am an avid CTF competitor,{" "}

              having competed in prestigious events such as Black Hat Middle East and
            Africa.
            <p>
    I am passionate about continuous learning, embracing new challenges, and building meaningful
            professional connections in the field of cybersecurity.
            </p>
        
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
