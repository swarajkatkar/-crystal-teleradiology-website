import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import Button         from "../components/Button";
import FeatureCard    from "../components/FeatureCard";
import { CORE_SYSTEMS, PLATFORM_FEATURES, ADVANCED_TOOLS, IMAGES } from "../data/index";

const Technology = () => (
  <div className="flex flex-col bg-white">

    {/* ══════════════════════════════════════════
        ① HERO
    ══════════════════════════════════════════ */}
    <section className="relative bg-hero-innovative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[600px] h-[600px] bg-primary/20 -top-20 -left-20" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/15 bottom-0 right-0" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left copy */}
          <AnimatedSection direction="up" className="flex flex-col gap-8 min-w-0">
            <Heading
              badge="Infrastructure & Architecture"
              title="Cloud-Native PACS Engine for the Modern Diagnostic Center"
              subtitle="The Crystal platform leverages advanced cloud-native infrastructure, in partnership with Imagebytes, to deliver ultra-low latency image transfers and high-fidelity diagnostic rendering."
              align="left"
              accentWord="Cloud-Native"
              as="h1"
            />
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" arrow>Explore Infrastructure</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">Technical Documentation</Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Right — PACS visual */}
          <AnimatedSection direction="scale" delay={200} className="relative min-w-0">
            <div className="glass-dark p-4 rounded-4xl border border-white/10 shadow-glass-dark animate-float">
              <div className="bg-primary-navy rounded-3xl overflow-hidden border border-white/6 aspect-video flex items-center justify-center relative">
                <img
                  src={IMAGES.tech}
                  alt="PACS Platform"
                  className="w-full h-full object-cover opacity-55"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-navy to-transparent" />

                {/* Center holographic indicator */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center animate-pulse-slow shadow-glow-cyan">
                      <span className="text-2xl">📡</span>
                    </div>
                    <div className="absolute inset-0 rounded-full border border-secondary/15 scale-125 animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute inset-0 rounded-full border border-secondary/8 scale-150 animate-pulse-slow" style={{ animationDelay: "1s" }} />
                  </div>
                  <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em]">Real-time Sync</span>
                </div>
              </div>

              {/* Status chips */}
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
                <span className="text-xs font-bold text-slate-400">Platform Online · Zero Downtime</span>
              </div>
            </div>

            {/* Floating glow halo */}
            <div className="absolute inset-8 bg-primary/10 rounded-4xl blur-3xl -z-10" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ② PARTNER BANNER — Imagebytes
    ══════════════════════════════════════════ */}
    <section className="section-padding-sm bg-white">
      <div className="container-width">
        <AnimatedSection direction="up">
          <div className="glass-card p-10 md:p-14 rounded-4xl border border-slate-100 shadow-premium-lg flex flex-col lg:flex-row items-center gap-10">
            <div className="w-20 h-20 rounded-3xl bg-primary/8 border border-primary/12 flex items-center justify-center text-5xl flex-shrink-0 shadow-glow">
              🤝
            </div>
            <div className="flex-1 text-center lg:text-left">
              <span className="saas-badge saas-badge-dot mb-4 inline-flex">Technology Partnership</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                Enabled by <span className="text-gradient">Imagebytes</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
                In total technological synergy with Imagebytes, we provide a proprietary clinical ecosystem tailored for Indian bandwidth constraints and specialist requirements.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="secondary" arrow>Partnership Overview</Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ③ PLATFORM FEATURES — Dark Grid
    ══════════════════════════════════════════ */}
    <section className="relative bg-primary-navy section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[600px] h-[600px] bg-primary/20 top-0 right-0" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/10 bottom-0 left-0" />
        <div className="absolute inset-0 bg-dots-dark opacity-30" />
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection direction="up">
          <Heading
            dark
            badge="Advanced Features"
            title="State-of-the-Art Imaging Capabilities"
            subtitle="Explore the advanced diagnostic tools integrated within our enterprise platform."
            accentWord="State-of-the-Art"
          />
        </AnimatedSection>

        <div className="mt-14 feature-grid">
          {PLATFORM_FEATURES.map((f, idx) => (
            <AnimatedSection key={f.title} direction="up" delay={idx * 80}>
              <FeatureCard
                variant="dark"
                icon={f.icon}
                title={f.title}
                description={f.desc}
                linkTo="/technology"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ④ CORE SYSTEMS
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-white">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="System Architecture"
            title="The Core Infrastructure"
            subtitle="Reliable, secure, and infinitely scalable clinical systems."
            accentWord="Core"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_SYSTEMS.map((s, idx) => (
            <AnimatedSection key={s.title} direction="up" delay={idx * 100}>
              <div className="group flex flex-col gap-6 p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium-lg hover:border-primary/20 hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary/8 flex items-center justify-center text-4xl group-hover:shadow-glow group-hover:bg-primary/12 transition-all duration-400">
                  {s.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ⑤ ADVANCED TOOLS
    ══════════════════════════════════════════ */}
    <section className="section-padding-sm bg-slate-50 border-y border-slate-100">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="Diagnostic Toolkit"
            title="Advanced Clinical Tools"
            subtitle="Purpose-built imaging tools for precision diagnostic workflows."
            accentWord="Advanced"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVANCED_TOOLS.map((t, idx) => (
            <AnimatedSection key={t.title} direction="up" delay={idx * 80}>
              <div className="group flex items-start gap-5 p-7 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/20 transition-all duration-400">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary/14 group-hover:scale-110 transition-all duration-300">
                  {t.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {t.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ⑥ CTA
    ══════════════════════════════════════════ */}
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0057FF 0%, #003DB8 100%)" }}
    >
      <div className="absolute inset-0 bg-dots-dark opacity-30 pointer-events-none" />
      <div className="glow-blob w-[500px] h-[500px] bg-white/10 -top-24 -left-24" />

      <div className="container-width relative z-10 flex flex-col items-center text-center gap-8">
        <AnimatedSection direction="up">
          <Heading
            dark
            title="Ready to Deploy Crystal Enterprise?"
            subtitle="Experience the fastest clinical workflow in Indian teleradiology."
            accentWord="Deploy"
          />
        </AnimatedSection>
        <AnimatedSection direction="up" delay={150} className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <Button variant="glass" size="lg" className="!bg-white !text-primary hover:!bg-white/90" arrow>Request Technical Demo</Button>
          </Link>
          <Link to="/contact">
            <Button variant="glass" size="lg">Talk to Engineers</Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>

  </div>
);

export default Technology;
