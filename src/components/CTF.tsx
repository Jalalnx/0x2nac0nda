import { Trophy, Medal, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ctfEvents = [
  {
    name: "Black Hat MEA CTF",
    year: "2024",
    rank: "Top 15",
    team: "0x2nac0nda",
    points: 8500,
    writeupUrl: "#",
  },
  {
    name: "HackTheBox Championship",
    year: "2023",
    rank: "Top 25",
    team: "Solo",
    points: 7200,
    writeupUrl: "#",
  },
  {
    name: "picoCTF",
    year: "2023",
    rank: "Top 10",
    team: "0x2nac0nda",
    points: 9100,
    writeupUrl: "#",
  },
  {
    name: "SANS Holiday Hack Challenge",
    year: "2023",
    rank: "Completed",
    team: "Solo",
    points: 10000,
    writeupUrl: "#",
  },
  {
    name: "TryHackMe King of the Hill",
    year: "2022",
    rank: "Top 20",
    team: "Solo",
    points: 6800,
    writeupUrl: "#",
  },
];

const recentRanks = [
  { position: 1, event: "Black Hat MEA 2024", score: 8500 },
  { position: 2, event: "HTB Championship 2023", score: 7200 },
  { position: 3, event: "picoCTF 2023", score: 9100 },
];

export const CTF = () => {
  return (
    <section id="ctf" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              CTF Competitions & Rankings
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Top Ranks Widget */}
            <div className="lg:col-span-1">
              <div className="glow-card animate-fade-in-up sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Top Recent Ranks
                  </h3>
                </div>

                <div className="space-y-4">
                  {recentRanks.map((rank, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg border border-primary/20"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="mono font-bold text-primary">
                            #{rank.position}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {rank.event}
                        </p>
                        <p className="text-xs text-muted-foreground mono">
                          {rank.score} pts
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTF Events List */}
            <div className="lg:col-span-2 space-y-6">
              {ctfEvents.map((event, index) => (
                <div
                  key={index}
                  className="glow-card animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Medal className="w-5 h-5 text-accent" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {event.name}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className="text-primary mono">{event.year}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          Rank:{" "}
                          <span className="text-primary font-semibold">
                            {event.rank}
                          </span>
                        </span>
                        <span>•</span>
                        <span>Team: {event.team}</span>
                        <span>•</span>
                        <span className="mono text-accent">
                          {event.points} pts
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-primary hover:text-primary"
                      asChild
                    >
                      <a
                        href={event.writeupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Writeup
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
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
