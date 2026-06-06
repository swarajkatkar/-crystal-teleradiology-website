import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import Button         from "../components/Button";
import FeatureCard    from "../components/FeatureCard";
import DoctorCard     from "../components/DoctorCard";
import Stepper        from "../components/Stepper";

import {
  STATS, SERVICES, WHY_FEATURES, WORKFLOW_STEPS,
  TECH_FEATURES, DOCTORS, CLIENTS, IMAGES,
} from "../data/index";

/* ── Floating stat chip ────────────────────────────────────────── */
const FloatChip = ({ icon, label, value, className = "", delay = 0 }) => (
  <div
    className={`glass-card px-4 py-3 flex items-center gap-3 w-max rounded-2xl shadow-premium animate-float ${className}`}
    style={{ animationDelay: `${delay}ms`, animationDuration: "7s" }}
  >
    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-lg flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">{label}</p>
      <p className="text-sm font-black text-slate-900 leading-tight mt-0.5">{value}</p>
    </div>
  </div>
);

const Home = () => (
  <div className="flex flex-col bg-white">

    {/* ══════════════════════════════════════════
        ① HERO
    ══════════════════════════════════════════ */}
    <section className="relative min-h-[92vh] flex items-center bg-hero-innovative overflow-hidden">
      {/* Background depth elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="glow-blob w-[600px] h-[600px] bg-primary/25 -top-32 -right-24" />
        <div className="glow-blob w-[500px] h-[500px] bg-secondary/20 bottom-0 -left-24" />
        <div className="glow-blob-strong w-[300px] h-[300px] bg-primary/15 top-1/2 left-1/3 -translate-y-1/2" />
      </div>

      <div className="container-width relative z-10 py-16 md:py-24">
        {/* min-w-0 on both columns prevents heading from bleeding outside its grid track */}
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-10 xl:gap-16 items-center">

          {/* Left — Copy */}
          <AnimatedSection direction="up" className="flex flex-col gap-8 min-w-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="saas-badge saas-badge-dot">Healthcare Enterprise Platform</span>
            </div>

            {/* Headline — capped at 90% of its column to guarantee no bleed */}
            <div className="flex flex-col gap-4">
              <h1
                className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-black tracking-[-0.02em] text-slate-900 w-full break-words"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Transforming Diagnostics with{" "}
                <span className="text-gradient">AI-Powered</span>{" "}
                Teleradiology
              </h1>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-lg">
                24/7 specialist-level reporting for hospitals and diagnostic centers. Powered by cloud infrastructure, delivered with precision.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" arrow>Explore Platform</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">Contact Enterprise</Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2 min-w-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.16em] flex-shrink-0">Trusted By</span>
              <div className="h-px flex-1 bg-slate-100 min-w-0" />
              <div className="flex items-center gap-4 flex-shrink-0">
                {CLIENTS.slice(0, 3).map((c) => (
                  <span
                    key={c.name}
                    className="font-black text-sm text-slate-400 hover:text-slate-700 transition-colors cursor-default"
                    title={c.name}
                  >
                    {c.abbr}
                  </span>
                ))}
                <span className="text-[11px] font-semibold text-slate-400">+11 more</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Dashboard mockup: isolate creates a new stacking context so chips stay inside */}
          <AnimatedSection direction="scale" delay={200} className="relative flex justify-center lg:justify-end min-w-0">
            {/* Floating chips — constrained to always stay within the right column */}
            <FloatChip
              icon="✅"
              label="Turnaround"
              value="~10 min CT"
              className="absolute -top-5 left-2 z-20 hidden lg:flex"
              delay={0}
            />
            <FloatChip
              icon="📈"
              label="Monthly Capacity"
              value="10,000+ Reports"
              className="absolute -bottom-5 right-2 z-20 hidden lg:flex"
              delay={1500}
            />
            <FloatChip
              icon="🔒"
              label="Security"
              value="HIPAA Compliant"
              className="absolute top-1/3 -left-6 z-20 hidden xl:flex"
              delay={800}
            />

            {/* Main image frame */}
            <div className="relative w-full max-w-lg">
              {/* Glow halo behind image */}
              <div className="absolute inset-4 bg-primary/15 rounded-3xl blur-3xl" />

              <div className="relative glass-card p-2 rounded-4xl shadow-premium-xl overflow-hidden">
                <div className="rounded-3xl overflow-hidden border border-slate-200/60">
                  <img
                    src={IMAGES.hero}
                    alt="Crystal Teleradiology Dashboard"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* Inline status bar */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
                    <span className="text-xs font-bold text-slate-500">Platform Live · 24/7</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 tabular-nums">MH · MP Region</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ② STAT BAR — Dark metrics strip
    ══════════════════════════════════════════ */}
    <section className="relative bg-primary-navy py-12 md:py-16 border-y border-white/6 overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark opacity-60 pointer-events-none" />
      <div className="container-width relative z-10">
        <div className="bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-premium-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {STATS.map((s, idx) => {
              /* Adaptive font size: long values like 'ImageBytes' or 'MH & MP' get a smaller scale */
              const isLongValue = s.value.length > 5;
              return (
                <AnimatedSection key={idx} direction="up" delay={idx * 80} className="flex flex-col items-center justify-center text-center gap-2 px-4 md:px-8 py-10 md:py-14 bg-primary-navy hover:bg-white/5 transition-colors duration-300 min-w-0 w-full h-full">
                  <span
                    className={`font-black text-white group-hover:text-secondary transition-colors duration-300 leading-none break-words max-w-full ${
                      isLongValue
                        ? 'text-2xl md:text-3xl'
                        : 'text-4xl md:text-5xl'
                    }`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.15em] leading-tight w-full px-1">
                    {s.label}
                  </span>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ③ CORE SERVICES
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-white">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="Enterprise Solutions"
            title="Comprehensive Clinical Reporting"
            subtitle="Specialized teleradiology modules designed for modern healthcare infrastructure."
            accentWord="Clinical"
          />
        </AnimatedSection>

        <div className="mt-14 feature-grid stagger-children">
          {SERVICES.map((svc, idx) => (
            <AnimatedSection key={svc.id} direction="up" delay={idx * 90}>
              <FeatureCard
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                linkTo={svc.linkTo}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Section divider */}
    <div className="container-width"><div className="section-divider" /></div>

    {/* ══════════════════════════════════════════
        ④ WHY CHOOSE US
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-slate-50">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="Why Crystal Enterprise"
            title="The Advantage That Sets Us Apart"
            subtitle="Built around speed, expertise, and clinical trust — every single day."
            accentWord="Advantage"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_FEATURES.map((f, idx) => (
            <AnimatedSection key={f.title} direction="up" delay={idx * 70}>
              <div className="group flex items-start gap-5 p-7 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/15 transition-all duration-400">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary/14 group-hover:scale-110 transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ⑤ NETWORK — Dark section
    ══════════════════════════════════════════ */}
    <section className="relative bg-primary-navy section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[600px] h-[600px] bg-primary/20 top-0 left-[-10%]" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/10 bottom-0 right-0" />
        <div className="absolute inset-0 bg-dots-dark opacity-30" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Visual */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="glass-dark p-8 rounded-4xl border border-white/8 shadow-glass-dark">
              <div className="aspect-square bg-primary-mid/60 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-dots-dark opacity-50" />
                {/* Animated rings */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full border border-dashed border-primary/30 flex items-center justify-center animate-spin-slow">
                      <div className="w-3 h-3 rounded-full bg-primary shadow-glow" />
                    </div>
                    <div className="absolute inset-4 rounded-full border border-dashed border-secondary/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                    <div className="absolute inset-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl">📍</span>
                    </div>
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] text-center">
                    MH &amp; MP Region Active
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={150} className="order-1 lg:order-2 flex flex-col gap-10">
            <Heading
              dark
              badge="Network Expansion"
              title="State-wide Integrated Diagnostic Network"
              subtitle="Crystal Enterprise connects diagnostic centers across Maharashtra and Madhya Pradesh with elite specialists within minutes."
              align="left"
              accentWord="Integrated"
            />

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "14+", label: "Centers" },
                { value: "24/7", label: "Active Coverage" },
              ].map((m) => (
                <div key={m.label} className="metric-block-dark rounded-2xl">
                  <span className="text-3xl font-black text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{m.value}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{m.label}</span>
                </div>
              ))}
            </div>

            <div>
              <Link to="/clients">
                <Button variant="glass" arrow>View Corporate Clients</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ⑥ PROCESS SHOWCASE
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-white">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="Operational Excellence"
            title="Predictable. Efficient. Digital."
            subtitle="A high-performance workflow engineered for the demands of modern medicine."
            accentWord="Digital"
          />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150} className="mt-14">
          <div className="p-8 md:p-12 bg-slate-50 rounded-4xl border border-slate-100 shadow-card">
            <Stepper steps={WORKFLOW_STEPS} />
          </div>
        </AnimatedSection>

        <div className="mt-10 flex justify-center">
          <Link to="/process">
            <Button variant="secondary" arrow>See Full Process Details</Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ⑦ TEAM SHOWCASE
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="Specialist Network"
            title="Elite MD/DNB Radiologists"
            subtitle="Our team originates from India's premier medical institutions, ensuring reports you can rely on."
            accentWord="Radiologists"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc, idx) => (
            <AnimatedSection key={doc.name} direction="up" delay={idx * 100}>
              <DoctorCard
                image={doc.image}
                name={doc.name}
                qualification={doc.qualification}
                specialization={doc.specialization}
                experience={doc.experience}
                background={doc.background}
                expertise={doc.expertise}
              />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/team">
            <Button variant="secondary" arrow>Meet the Full Team</Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ⑧ FINAL CTA BANNER
    ══════════════════════════════════════════ */}
    <section className="relative overflow-hidden">
      <div
        className="relative py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0057FF 0%, #003DB8 50%, #030B1A 100%)" }}
      >
        <div className="absolute inset-0 bg-dots-dark opacity-40 pointer-events-none" />
        <div className="glow-blob w-[500px] h-[500px] bg-white/8 -top-24 right-0" />

        <div className="container-width relative z-10 flex flex-col items-center text-center gap-8">
          <AnimatedSection direction="up">
            <Heading
              dark
              title="Ready to Scale Your Diagnostic Capacity?"
              subtitle="Deploy Crystal Enterprise in as little as 48 hours. No hardware. No installation. Just precision."
              accentWord="Scale"
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={150} className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button variant="glass" size="lg" className="!bg-white !text-primary hover:!bg-white/90" arrow>
                Contact Enterprise Sales
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="glass" size="lg">
                Explore Services
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

  </div>
);

export default Home;
