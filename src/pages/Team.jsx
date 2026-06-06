import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import Button         from "../components/Button";
import DoctorCard     from "../components/DoctorCard";
import { DOCTORS }   from "../data/index";

const QUALIFICATIONS = [
  { label: "Institutional Roots",     desc: "Clinical expertise from India's premier institutes including BJMC, KEM, J.J Hospital, and HCG." },
  { label: "Clinical Compliance",     desc: "Every report is finalized following strict MD/DNB oversight and clinical protocols." },
  { label: "Multi-Modality",          desc: "Specialists categorized by modality: Neuroradiology, Cardiac, MSK, and Body Imaging." },
  { label: "Rapid Reporting",         desc: "Optimized scheduling ensures that specialists are available 24/7 across every time zone." },
];

const Team = () => (
  <div className="flex flex-col bg-white">

    {/* ══════════════════════════════════════════
        ① HERO
    ══════════════════════════════════════════ */}
    <section className="relative bg-hero-innovative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-primary/20 top-0 left-0" />
        <div className="glow-blob w-[400px] h-[400px] bg-secondary/15 bottom-0 right-0" />
      </div>
      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <AnimatedSection direction="up" className="flex flex-col items-center">
            <Heading
              badge="Clinical Network"
              title="The Specialist Experts Powering Our Clinical Engine"
              subtitle="Crystal Enterprise connects you with a network of MD/DNB radiologists specialized in advanced clinical imaging modalities."
              accentWord="Specialist"
              as="h1"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ② PROFILE GRID
    ══════════════════════════════════════════ */}
    <section className="section-padding bg-white">
      <div className="container-width">
        <AnimatedSection direction="up">
          <Heading
            title="Board-Certified Radiologists"
            subtitle="Clinical excellence is the foundation of our enterprise platform."
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
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ③ QUALIFICATIONS BANNER
    ══════════════════════════════════════════ */}
    <section className="section-padding-sm bg-slate-50 border-y border-slate-100">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALIFICATIONS.map((q, idx) => (
            <AnimatedSection key={q.label} direction="up" delay={idx * 80}>
              <div className="group flex flex-col gap-3 p-7 bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1 transition-all duration-400 h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg group-hover:bg-primary/14 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  {idx === 0 ? "🎓" : idx === 1 ? "✅" : idx === 2 ? "🔬" : "⚡"}
                </div>
                <div>
                  <p className="text-primary font-bold text-[11px] uppercase tracking-[0.18em] mb-2 group-hover:text-primary-hover transition-colors">
                    {q.label}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">{q.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        ④ FINAL CTA
    ══════════════════════════════════════════ */}
    <section className="relative bg-primary-navy section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-primary/20 top-0 right-0" />
        <div className="absolute inset-0 bg-dots-dark opacity-25" />
      </div>
      <div className="container-width relative z-10 flex flex-col items-center text-center gap-8">
        <AnimatedSection direction="up">
          <Heading
            dark
            title="Connect With Our Clinical Leads"
            subtitle="Discuss special clinical requirements or custom diagnostic protocols."
            accentWord="Clinical"
          />
        </AnimatedSection>
        <AnimatedSection direction="up" delay={120}>
          <Link to="/contact">
            <Button variant="primary" size="lg" arrow>Talk to a Radiologist</Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>

  </div>
);

export default Team;
