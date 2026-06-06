import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import Button         from "../components/Button";
import Stepper        from "../components/Stepper";
import { WORKFLOW_STEPS } from "../data/index";

const TURNAROUND = [
  { modality: "CT Scan",  time: "~10m", note: "Crisis/Routine",  pct: 92 },
  { modality: "MRI",      time: "~30m", note: "Full Sequence",   pct: 78 },
  { modality: "X-Ray",    time: "~15m", note: "All Views",       pct: 86 },
];

const Process = () => (
  <div className="flex flex-col bg-white">

    {/* ══════════════════════════════════════════
        ① HERO
    ══════════════════════════════════════════ */}
    <section className="relative bg-hero-innovative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-primary/18 bottom-0 left-0" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/12 top-0 right-0" />
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection direction="up" className="flex flex-col items-center">
            <Heading
              badge="Operational Workflow"
              title="The Lifecycle of a Clinical Study"
              subtitle="From the moment of acquisition to final physician delivery, our process is optimized for clinical velocity and security."
              accentWord="Lifecycle"
              as="h1"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ② INTERACTIVE TIMELINE
    ══════════════════════════════════════════ */}
    <section className="relative bg-primary-navy section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[600px] h-[600px] bg-primary/15 top-0 right-0" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/10 bottom-0 left-0" />
        <div className="absolute inset-0 bg-dots-dark opacity-25" />
      </div>

      <div className="container-width relative z-10">
        <AnimatedSection direction="up" className="mb-12 flex flex-col items-center text-center mx-auto max-w-3xl">
          <Heading
            dark
            badge="Integrated Pipeline"
            title="Integrated Clinical Pipeline"
            subtitle="Crystal Enterprise operates on a globally optimized 5-step operational pipeline."
            accentWord="Integrated"
          />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150}>
          <div className="p-8 md:p-12 bg-white rounded-4xl shadow-premium-xl border border-slate-100">
            <Stepper steps={WORKFLOW_STEPS} />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ③ TURNAROUND METRICS
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — metrics */}
          <AnimatedSection direction="left" className="flex flex-col gap-8 min-w-0">
            <Heading
              badge="SLA & Performance"
              title="Industry-Leading Reporting Velocity"
              subtitle="We measure performance in minutes, not hours. Our enterprise SLAs are the most aggressive in the industry."
              align="left"
              accentWord="Velocity"
            />

            <div className="flex flex-col gap-4">
              {TURNAROUND.map((t, idx) => (
                <AnimatedSection key={t.modality} direction="up" delay={idx * 80}>
                  <div className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-400">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-bold text-slate-900 group-hover:text-primary transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {t.modality}
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{t.note}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className="text-2xl font-black text-primary group-hover:scale-110 inline-block transition-transform duration-300"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {t.time}
                        </span>
                        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Target Delivery</p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${t.pct}%` }}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — visual */}
          <AnimatedSection direction="right" delay={200} className="relative min-w-0">
            <div className="aspect-square rounded-4xl bg-slate-50 border border-slate-100 overflow-hidden relative shadow-premium-lg group">
              <div className="absolute inset-0 bg-primary/3 group-hover:bg-primary/5 transition-colors duration-500" />
              <div className="absolute inset-0 bg-dots opacity-60" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                {/* Animated spinner ring */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="w-36 h-36 rounded-full border-4 border-slate-200"
                    style={{ background: "conic-gradient(#0057FF 0%, #00C4E8 30%, transparent 30%)" }}
                  />
                  <div className="absolute w-28 h-28 rounded-full bg-white flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl font-black text-slate-900 block leading-none" style={{ fontFamily: 'Manrope, sans-serif' }}>10m</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Avg CT</span>
                    </div>
                  </div>
                </div>

                <div className="text-center px-8">
                  <p className="text-xl font-black text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Real-time</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mt-1">Operational Oversight</p>
                </div>

                {/* Status chips */}
                <div className="flex gap-3 flex-wrap justify-center px-8">
                  {["24/7 Active", "0 Downtime", "Encrypted"].map((chip) => (
                    <span key={chip} className="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-[10px] font-bold uppercase tracking-wider">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ④ CTA
    ══════════════════════════════════════════ */}
    <section className="section-padding-sm bg-slate-50 border-t border-slate-100">
      <div className="container-width">
        <AnimatedSection direction="up">
          <div className="p-14 md:p-20 bg-white rounded-5xl border border-slate-100 shadow-premium-lg flex flex-col items-center text-center gap-8">
            <Heading
              title="Optimize Your Facility's Reporting Pipeline"
              subtitle="Request a comprehensive workflow audit from our operational experts."
              accentWord="Optimize"
            />
            <Link to="/contact">
              <Button variant="primary" size="lg" arrow>Consult Operations</Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

  </div>
);

export default Process;
