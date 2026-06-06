import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import StatCard       from "../components/StatCard";
import Button         from "../components/Button";
import { CLIENTS }   from "../data/index";

const REACH_STATS = [
  { icon: "🏢", value: "15+",   label: "Integrated Centers" },
  { icon: "🌍", value: "MH/MP", label: "Core Regional Hubs" },
  { icon: "⚡", value: "99.9%", label: "Platform Uptime" },
  { icon: "📈", value: "250K+", label: "Reports Delivered" },
];

const COVERAGE = [
  { state: "Maharashtra",    centers: "10+", focus: "Tier 1 & 2 Diagnostics" },
  { state: "Madhya Pradesh", centers: "5+",  focus: "State-level Hospitals" },
];

const Clients = () => (
  <div className="flex flex-col bg-white">

    {/* ══════════════════════════════════════════
        ① HERO
    ══════════════════════════════════════════ */}
    <section className="relative bg-hero-innovative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-primary/18 bottom-0 right-0" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/12 top-0 -left-20" />
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <AnimatedSection direction="up" className="flex flex-col items-center">
            <Heading
              badge="Partner Network"
              title="Empowering the Next Generation of Diagnostic Centers"
              subtitle="Crystal Enterprise provides the clinical and technological backbone for the most ambitious healthcare facilities in Central India."
              accentWord="Empowering"
              as="h1"
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={150} className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/contact"><Button variant="primary" size="lg" arrow>Join Partner Network</Button></Link>
            <Link to="/contact"><Button variant="secondary" size="lg">Contact Support</Button></Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ② METRICS BAR
    ══════════════════════════════════════════ */}
    <section className="section-padding-sm bg-white border-b border-slate-100">
      <div className="container-width">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {REACH_STATS.map((s, idx) => (
            <AnimatedSection key={s.label} direction="up" delay={idx * 80}>
              <StatCard value={s.value} label={s.label} icon={s.icon} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ③ PARTNER CARDS
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-white">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="Case Studies"
            title="Trusted by Clinical Leaders"
            subtitle="Explore how diagnostic centers leverage our platform to expand their clinical capabilities."
            accentWord="Trusted"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENTS.map((client, idx) => (
            <AnimatedSection key={client.name} direction="up" delay={idx * 80}>
              <div className="group flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1 transition-all duration-500">
                {/* Logo block */}
                <div className="w-16 h-16 rounded-2xl bg-primary/8 flex items-center justify-center text-primary font-black text-lg flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow transition-all duration-400">
                  {client.abbr}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 min-w-0">
                  <div>
                    <h3
                      className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 truncate"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {client.name}
                    </h3>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.18em]">
                      {client.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Integrated as a core teleradiology partner, providing 24/7 specialist-level coverage across CT, MRI, and X-ray modalities.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-primary transition-colors duration-300 w-fit"
                  >
                    View Integration Story
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ④ NETWORK MAP — Dark section
    ══════════════════════════════════════════ */}
    <section className="relative bg-primary-navy section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-secondary/10 top-0 left-0" />
        <div className="glow-blob w-[400px] h-[400px] bg-primary/15 bottom-0 right-0" />
        <div className="absolute inset-0 bg-dots-dark opacity-25" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Content */}
          <AnimatedSection direction="left" className="flex flex-col gap-10 min-w-0">
            <Heading
              dark
              badge="Regional Footprint"
              title="Scaling Clinical Excellence Across Borders"
              subtitle="Our network is designed for high-availability multi-state integration."
              align="left"
              accentWord="Scaling"
            />

            <div className="flex flex-col gap-4">
              {COVERAGE.map((c, idx) => (
                <AnimatedSection key={c.state} direction="up" delay={idx * 100}>
                  <div className="group p-7 rounded-3xl bg-white/5 border border-white/8 hover:bg-white/9 hover:border-white/15 transition-all duration-400">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{c.state}</h3>
                      <span className="px-3 py-1.5 rounded-full bg-secondary/15 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20">
                        {c.centers} Nodes
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{c.focus}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection direction="right" delay={200} className="relative min-w-0">
            <div className="aspect-square bg-primary-mid/60 rounded-4xl border border-white/8 shadow-glass-dark flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-dots-dark opacity-50" />

              {/* Premium Regional Network Visualization */}
              <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                <div className="relative w-full aspect-square max-w-[300px] mx-auto flex items-center justify-center">
                  {/* Central Node */}
                  <div className="relative z-20 w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shadow-glow-cyan animate-pulse-slow">
                    <div className="w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(0,196,232,0.8)]" />
                  </div>

                  {/* Pulsing rings */}
                  <div className="absolute inset-0 m-auto w-32 h-32 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  <div className="absolute inset-0 m-auto w-64 h-64 rounded-full border border-white/5" />

                  {/* Satellite Nodes */}
                  {[
                    { angle: 45, distance: 42, size: 3, opacity: 100, delay: 0 },
                    { angle: 135, distance: 38, size: 2.5, opacity: 80, delay: 0.5 },
                    { angle: 225, distance: 45, size: 3.5, opacity: 90, delay: 1 },
                    { angle: 315, distance: 35, size: 2, opacity: 60, delay: 1.5 },
                    { angle: 15, distance: 48, size: 2.5, opacity: 70, delay: 2 },
                    { angle: 195, distance: 40, size: 3, opacity: 85, delay: 2.5 }
                  ].map((node, i) => (
                    <div
                      key={i}
                      className={`absolute w-${node.size} h-${node.size} rounded-full bg-white opacity-${node.opacity} animate-pulse-slow`}
                      style={{
                        top: `calc(50% + ${Math.sin(node.angle * (Math.PI / 180)) * node.distance}%)`,
                        left: `calc(50% + ${Math.cos(node.angle * (Math.PI / 180)) * node.distance}%)`,
                        boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                        animationDelay: `${node.delay}s`
                      }}
                    />
                  ))}
                  
                  {/* Connecting lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100">
                    <line x1="50" y1="50" x2="80" y2="80" stroke="#00C4E8" strokeWidth="0.5" strokeDasharray="1,1" className="animate-pulse-slow" />
                    <line x1="50" y1="50" x2="20" y2="80" stroke="#0057FF" strokeWidth="0.5" strokeDasharray="1,1" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                    <line x1="50" y1="50" x2="20" y2="20" stroke="#00C4E8" strokeWidth="0.5" strokeDasharray="1,1" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
                    <line x1="50" y1="50" x2="80" y2="20" stroke="#0057FF" strokeWidth="0.5" strokeDasharray="1,1" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
                  </svg>
                </div>

                <div className="text-center mt-auto pb-4 relative z-20">
                  <p className="text-white text-2xl font-black tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>Regional Node Mesh</p>
                  <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mt-2">Fully Synchronized</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ⑤ CTA
    ══════════════════════════════════════════ */}
    <section className="section-padding-sm bg-white">
      <div className="container-width">
        <AnimatedSection direction="up">
          <div className="p-14 md:p-20 bg-slate-50 rounded-5xl border border-slate-100 shadow-card flex flex-col items-center text-center gap-8">
            <Heading
              title="Integrate Crystal Enterprise Into Your Workflow"
              subtitle="Transform your facility's diagnostic potential with the most advanced teleradiology platform."
              accentWord="Integrate"
            />
            <Link to="/contact">
              <Button variant="primary" size="lg" arrow>Partner With Us Today</Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

  </div>
);

export default Clients;
