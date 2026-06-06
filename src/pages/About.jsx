import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import Button         from "../components/Button";
import FeatureCard    from "../components/FeatureCard";
import { CORE_VALUES, INSTITUTIONS } from "../data/index";

const About = () => (
  <div className="flex flex-col bg-white">

    {/* ══════════════════════════════════════════
        ① HERO
    ══════════════════════════════════════════ */}
    <section className="relative bg-hero-innovative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-primary/20 top-0 -left-24" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/15 bottom-0 right-0" />
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-3xl">
          <AnimatedSection direction="up">
            <Heading
              badge="Corporate Profile"
              title="Excellence in Precision Diagnostics and Cloud-Native Medicine"
              subtitle="Crystal Enterprise is redefining teleradiology through superior clinical expertise and enterprise-grade technology infrastructure."
              align="left"
              accentWord="Cloud-Native"
              as="h1"
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={150} className="flex flex-wrap gap-3 mt-8">
            <Link to="/contact"><Button variant="primary" size="lg" arrow>Partner With Us</Button></Link>
            <Link to="/services"><Button variant="secondary" size="lg">Explore Modalities</Button></Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ② VISION — Clinical Roots
    ══════════════════════════════════════════ */}
    <section className="section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* Left — Text + Institutions */}
          <AnimatedSection direction="left" className="flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-4">
              <Heading title="Clinical Roots. Future Focus." accentWord="Future" align="left" />
              <p className="text-base text-slate-500 leading-relaxed max-w-lg">
                Founded by expert radiologists from India's premier clinical institutions, Crystal Enterprise was built to bridge the gap between advanced diagnostics and regional accessibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INSTITUTIONS.map((inst) => (
                <div
                  key={inst.abbr}
                  className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-2 group-hover:text-primary-hover transition-colors">
                    {inst.abbr}
                  </div>
                  <div className="text-slate-900 font-semibold text-sm leading-snug">
                    {inst.name}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Image: overflow-hidden contains all absolute children */}
          <AnimatedSection direction="right" delay={150} className="relative min-w-0">
            {/* Extra padding-bottom creates space for the overlapping stat card */}
            <div className="relative pb-8">
              <div className="aspect-[4/5] rounded-4xl overflow-hidden shadow-premium-xl">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80"
                  alt="Clinical Facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stat card — uses bottom-0 relative to the padded wrapper so it stays in-column */}
              <div className="absolute bottom-0 left-0 md:-left-4 glass-card p-5 rounded-3xl max-w-[200px] shadow-premium-xl border border-white/50">
                <span className="text-primary text-3xl font-black block mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>14+</span>
                <p className="text-slate-500 text-xs font-medium leading-snug">
                  Enterprise diagnostic centers currently integrated within our ecosystem.
                </p>
              </div>

              {/* Decorative accent — kept inside so it doesn't bleed on small screens */}
              <div className="absolute -top-3 right-0 md:-right-3 w-20 h-20 rounded-full border-4 border-dashed border-primary/20 animate-spin-slow" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Section divider */}
    <div className="container-width"><div className="section-divider" /></div>

    {/* ══════════════════════════════════════════
        ③ CORE VALUES
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-slate-50 border-y border-slate-100">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            badge="Our Architecture"
            title="The Values Powering Our Platform"
            subtitle="Enterprise-grade reliability built on six core pillars of medical excellence."
            accentWord="Values"
          />
        </AnimatedSection>

        <div className="mt-14 feature-grid">
          {CORE_VALUES.map((v, idx) => (
            <AnimatedSection key={v.title} direction="up" delay={idx * 80}>
              <FeatureCard
                icon={v.icon}
                title={v.title}
                description={v.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ④ MISSION / VISION
    ══════════════════════════════════════════ */}
    <section className="relative bg-primary-navy section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-primary/25 -top-24 -right-24" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/10 bottom-0 left-0" />
        <div className="absolute inset-0 bg-dots-dark opacity-30" />
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection direction="up" className="mb-14">
          <Heading
            dark
            badge="Our Purpose"
            title="What Drives Crystal Enterprise"
            subtitle="Two commitments that guide every report, every platform decision, every partnership."
            accentWord="Drives"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection direction="left" delay={100}>
            <div className="glass-dark flex flex-col gap-6 p-10 md:p-12 rounded-4xl border border-white/8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">🎯</div>
              <div>
                <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Our Mission</h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  To democratize specialist healthcare through digital acceleration, ensuring every patient receives accurate, world-class diagnostics regardless of geographical location.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <div className="flex flex-col gap-6 p-10 md:p-12 rounded-4xl border border-primary/30 h-full" style={{ background: 'linear-gradient(135deg, #0057FF 0%, #003DB8 100%)' }}>
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-3xl">🚀</div>
              <div>
                <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Our Vision</h2>
                <p className="text-white/80 text-base leading-relaxed">
                  To be the primary technological and clinical backbone for teleradiology in India, serving as the benchmark for quality, speed, and platform reliability.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

  </div>
);

export default About;
