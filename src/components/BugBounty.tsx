import { Bug, DollarSign, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    platform: "HackerOne",
    title: "Critical SQL Injection in API endpoint",
    bounty: "$2,500",
    severity: "Critical",
    date: "2024-02",
    status: "Resolved",
  },
  {
    platform: "HackerOne",
    title: "Authentication Bypass via JWT manipulation",
    bounty: "$1,800",
    severity: "High",
    date: "2023-11",
    status: "Resolved",
  },
  {
    platform: "Bugcrowd",
    title: "XSS leading to account takeover",
    bounty: "$1,200",
    severity: "High",
    date: "2023-09",
    status: "Resolved",
  },
  {
    platform: "HackerOne",
    title: "IDOR vulnerability in user profile API",
    bounty: "$900",
    severity: "Medium",
    date: "2023-06",
    status: "Resolved",
  },
  {
    platform: "Intigriti",
    title: "SSRF in file upload functionality",
    bounty: "$1,500",
    severity: "High",
    date: "2023-04",
    status: "Resolved",
  },
];

const stats = {
  totalBounties: "$12,400+",
  reportsSubmitted: "45+",
  criticalFindings: "8",
};

export const BugBounty = () => {
  return (
    <section id="bug-bounty" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Bug Bounty Reports
            </h2>
            <div className="section-divider" />
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glow-card text-center animate-fade-in-up">
              <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="mono text-3xl font-bold text-primary mb-2">
                {stats.totalBounties}
              </div>
              <p className="text-sm text-muted-foreground">Total Bounties Earned</p>
            </div>

            <div
              className="glow-card text-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Bug className="w-10 h-10 text-accent mx-auto mb-3" />
              <div className="mono text-3xl font-bold text-accent mb-2">
                {stats.reportsSubmitted}
              </div>
              <p className="text-sm text-muted-foreground">Reports Submitted</p>
            </div>

            <div
              className="glow-card text-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <ExternalLink className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="mono text-3xl font-bold text-primary mb-2">
                {stats.criticalFindings}
              </div>
              <p className="text-sm text-muted-foreground">Critical Findings</p>
            </div>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div
                key={index}
                className="glow-card animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Bug className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {report.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="tech-badge">{report.platform}</span>
                      <span
                        className={`tech-badge ${
                          report.severity === "Critical"
                            ? "!bg-destructive/10 !border-destructive/30 !text-destructive"
                            : report.severity === "High"
                            ? "!bg-accent/10 !border-accent/30 !text-accent"
                            : "!bg-muted !border-muted-foreground/30 !text-muted-foreground"
                        }`}
                      >
                        {report.severity}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {report.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="mono text-xl font-bold text-primary">
                        {report.bounty}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {report.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Links to Profiles */}
          <div className="mt-12 text-center space-x-4 animate-fade-in-up">
            <Button variant="hero" asChild>
              <a
                href="https://hackerone.com/0x2nac0nda"
                target="_blank"
                rel="noopener noreferrer"
              >
                View HackerOne Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://twitter.com/0x2nac0nda"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on X/Twitter
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
