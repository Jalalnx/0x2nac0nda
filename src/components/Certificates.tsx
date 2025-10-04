import { Award, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";



const certificates = [
  {
    "title": "OffSec Web Expert",
    "short": "OSWE",
    "issuer": "Offensive Security",
    "year": "2023",
    "id": "WEB-300",
    "url": "/0x2nac0nda/certificates/OSWE.pdf",
    "icon": "🌐",
    "description": "Completed WEB-300 (Advanced Web Attacks and Exploitation), demonstrating deep expertise in identifying and exploiting complex web application vulnerabilities."
  },
  {
    "title": "Web Application Penetration Testing Extreme",
    "short": "eWPTX",
    "issuer": "eLearnSecurity (INE)",
    "year": "2022",
    "id": "",
    "url": "/0x2nac0nda/certificates/eWPTXv2 Certification - eLearnSecurity Web Application Penetration Tester eXtreme v2.pdf",
    "icon": "💻",
    "description": "Earned the eWPTX certification, validating advanced skills in web application penetration testing and exploitation techniques."
  },
  {
    "title": "eLearnSecurity Mobile Application Penetration Tester",
    "short": "eMAPT",
    "issuer": "eLearnSecurity (INE)",
    "year": "2022",
    "id": "",
    "url": "/0x2nac0nda/certificates/eMAPT Certification - eLearnSecurity Mobile Application Penetration Tester.pdf",
    "icon": "📱",
    "description": "Completed eMAPT, demonstrating expertise in mobile application security assessments for Android and iOS platforms."
  },
  {
    "title": "Hack The Box: Dante",
    "short": "HTB Dante",
    "issuer": "Hack The Box",
    "year": "2022",
    "id": "",
    "url": "/0x2nac0nda/certificates/Dante.pdf",
    "icon": "🕹️",
    "description": "Solved the HTB Dante challenge — a complex lab emphasizing lateral movement, pivoting, and realistic enterprise red team scenarios."
  },
  {
    "title": "Hack The Box: Zephyr",
    "short": "HTB Zephyr",
    "issuer": "Hack The Box",
    "year": "2023",
    "id": "",
    "url": "/0x2nac0nda/certificates/Zephyr.pdf",
    "icon": "🕹️",
    "description": "Completed HTB Zephyr — focused on Active Directory exploitation, post-exploitation techniques, and privilege escalation in complex environments."
  },
  {
    "title": "Hack The Box: Rastalabs",
    "short": "HTB Rastalabs",
    "issuer": "Hack The Box",
    "year": "2023",
    "id": "",
    "url": "/0x2nac0nda/certificates/RastaLabs.pdf",
    "icon": "🕹️",
    "description": "Completed HTB Rastalabs — an advanced lab covering persistence, stealthy operations, and domain-wide compromise in Windows networks."
  },
  {
    "title": "Hack The Box: Offshore",
    "short": "HTB Offshore",
    "issuer": "Hack The Box",
    "year": "2024",
    "id": "",
    "url": "/0x2nac0nda/certificates/Offshore.pdf",
    "icon": "🕹️",
    "description": "Completed HTB Offshore — simulating segmented enterprise networks with VPN, web exploitation, and complex AD pivoting scenarios."
  },
  {
    "title": "Hack The Box: Cybernetics",
    "short": "HTB Cybernetics",
    "issuer": "Hack The Box",
    "year": "2024",
    "id": "",
    "url": "/0x2nac0nda/certificates/Cybernetics.pdf",
    "icon": "🕹️",
    "description": "Completed HTB Cybernetics — advanced network exploitation and red team tactics across hybrid cloud and on-prem infrastructures."
  }
];




export const Certificates = () => {

  const [selectedCert, setSelectedCert] = useState<string|null>(null);

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

                {/* <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                  <div className="bg-white w-11/12 h-5/6 rounded-2xl overflow-hidden shadow-xl">
                    <iframe src={cert.url} className="w-full h-full" title="Certificate Preview" />
                  </div>
                </div> */}
          
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
                  <p className="text-justify text-foreground/80">{cert.description}</p>
                </div>

                {/* <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  asChild
                >
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button> */}

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  onClick={() => setSelectedCert(cert.url)}
                >
                  Preview
                  <Eye className="ml-2 h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>

          {selectedCert && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-white w-11/12 h-5/6 rounded-2xl overflow-hidden shadow-xl relative">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  ✕
                </button>
                <div onContextMenu={(e) => e.preventDefault()}>
                  {/* <iframe
                    src={`${selectedCert}#toolbar=0`}
                    className="w-full h-full border-none"
                    sandbox="allow-scripts allow-same-origin"
                  /> */}

                  <iframe
                    src={`https://docs.google.com/gview?url=${window.location.origin}/certificates/${selectedCert}#toolbar=0&embedded=true`}
                    className="w-full h-[80vh] rounded-2xl border-none"
                    title="Certificate Viewer"
                  />
                </div>
              </div>
            </div>
)}
        </div>
      </div>
    </section>
    
  );
};

