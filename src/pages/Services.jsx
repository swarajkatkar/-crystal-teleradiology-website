import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import Button         from "../components/Button";
import { SERVICES }  from "../data/index";

const Services = () => (
  <div className="flex flex-col bg-white">

    {/* ══════════════════════════════════════════
        ① HERO
    ══════════════════════════════════════════ */}
    <section className="relative bg-hero-innovative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-primary/20 bottom-0 right-0" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/15 top-0 -left-20" />
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <AnimatedSection direction="up" className="flex flex-col items-center">
            <Heading
              badge="Platform Modules"
              title="Integrated Reporting for Every Clinical Modality"
              subtitle="The Crystal Enterprise platform supports a full spectrum of teleradiology services, from routine X-rays to high-complex MRI cardiac studies."
              accentWord="Clinical"
              as="h1"
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={150} className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/contact">
              <Button variant="primary" size="lg" arrow>Register Center</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">Talk to an Expert</Button>
            </Link>
          </AnimatedSection>

          {/* Feature tags */}
          <AnimatedSection direction="up" delay={250} className="flex flex-wrap justify-center gap-2 mt-8">
            {["CT Reporting", "MRI Reporting", "X-Ray", "Teleradiology", "24/7 Coverage", "HIPAA Compliant"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-soft-sm">
                {tag}
              </span>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ② SERVICE MODULES — Alternating layouts
    ══════════════════════════════════════════ */}
    {SERVICES.map((svc, idx) => {
      const isAlt = idx % 2 === 1;
      return (
        <section
          key={svc.id}
          id={svc.id}
          className={`section-padding-sm ${isAlt ? "bg-slate-50 border-y border-slate-100" : "bg-white"}`}
        >
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

              {/* Visual panel */}
              <AnimatedSection
                direction={isAlt ? "right" : "left"}
                className={`min-w-0 ${isAlt ? "lg:order-2" : ""}`}
              >
                <div className="relative p-6 md:p-8 bg-white rounded-4xl border border-slate-100 shadow-premium-lg overflow-hidden group">
                  {/* Dark screen area */}
                  <div className="aspect-video bg-primary-navy rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {/* Grid pattern background */}
                    <div className="absolute inset-0 bg-dots-dark opacity-60" />

                    {/* Large icon */}
                    <span className="text-[7rem] leading-none opacity-15 transition-all duration-1000 group-hover:opacity-25 group-hover:scale-110 select-none z-10 relative">
                      {svc.icon}
                    </span>

                    {/* Status bar top */}
                    <div className="absolute top-5 left-5 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Active</span>
                    </div>

                    {/* Service name bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-navy to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-white font-black text-xl leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {svc.title}
                      </p>
                    </div>
                  </div>

                  {/* Bottom capability bar */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Supported Modalities</span>
                    <div className="flex gap-1.5">
                      {svc.items.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full bg-primary transition-all duration-300 ${i === 0 ? "w-8" : i === 1 ? "w-6" : "w-4"} opacity-${80 - i * 20}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection
                direction={isAlt ? "left" : "right"}
                delay={120}
                className={`flex flex-col gap-8 min-w-0 ${isAlt ? "lg:order-1" : ""}`}
              >
                <Heading
                  badge="SaaS Module"
                  badgeDark={isAlt}
                  title={svc.title}
                  subtitle={svc.description}
                  align="left"
                  accentWord={svc.title.split(" ")[0]}
                />

                {/* Service items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {svc.items.map((item) => (
                    <div
                      key={item.label}
                      className="group flex flex-col gap-2 p-5 rounded-2xl border border-slate-100 bg-white hover:bg-white hover:border-primary/20 hover:shadow-card transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{item.label}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pl-3.5">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <Link to="/contact">
                    <Button variant="secondary" arrow>Configure for Your Center</Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      );
    })}

    {/* ══════════════════════════════════════════
        ③ FINAL CTA
    ══════════════════════════════════════════ */}
    <section className="relative overflow-hidden">
      <div
        className="py-20 md:py-28 relative"
        style={{ background: "linear-gradient(135deg, #030B1A 0%, #0057FF 60%, #003DB8 100%)" }}
      >
        <div className="absolute inset-0 bg-dots-dark opacity-40 pointer-events-none" />
        <div className="glow-blob w-[500px] h-[500px] bg-secondary/10 top-0 left-0" />

        <div className="container-width relative z-10 flex flex-col items-center text-center gap-8">
          <AnimatedSection direction="up">
            <Heading
              dark
              title="Ready to Scale Your Radiology Operations?"
              subtitle="Deploy our specialist modules in as little as 48 hours."
              accentWord="Scale"
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={150} className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button variant="glass" size="lg" className="!bg-white !text-primary hover:!bg-white/90" arrow>Contact Sales</Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="lg">View Documentation</Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

  </div>
);

export default Services;
