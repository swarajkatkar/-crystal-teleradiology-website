import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import Heading        from "../components/Heading";
import Button         from "../components/Button";
import { CONTACT_INFO, MODALITIES } from "../data/index";

const Contact = () => {
  const [form, setForm]         = useState({ name: "", hospital: "", email: "", modality: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused]   = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="flex flex-col bg-white">

      {/* ══════════════════════════════════════════
          ① HERO
      ══════════════════════════════════════════ */}
      <section className="relative bg-hero-innovative pt-20 pb-14 md:pt-28 md:pb-20 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-blob w-[500px] h-[500px] bg-primary/18 bottom-0 left-0" />
          <div className="glow-blob w-[400px] h-[400px] bg-secondary/12 top-0 right-0" />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <AnimatedSection direction="up" className="flex flex-col items-center">
              <Heading
                badge="Enterprise Sales"
                title="Scale Your Clinical Capacity with Crystal Enterprise"
                subtitle="Our specialized solutions team is ready to help you integrate the world's most advanced teleradiology platform into your facility."
                accentWord="Scale"
                as="h1"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ② MAIN CONTENT — 2-col split
      ══════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 xl:gap-24">

            {/* Left — Info */}
            <AnimatedSection direction="left" className="flex flex-col gap-12 min-w-0">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Sales &amp; Partnership
                </h2>
                <p className="text-slate-500 text-base leading-relaxed">
                  Have specific technical requirements or need a high-complex clinical protocol? Our enterprise architects are here to design a custom workflow for you.
                </p>
              </div>

              {/* Contact info items */}
              <div className="flex flex-col gap-5">
                {CONTACT_INFO.map((info, idx) => (
                  <AnimatedSection key={info.label} direction="up" delay={idx * 60}>
                    <div className="group flex items-start gap-5">
                      <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl flex-shrink-0 shadow-soft-sm group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:shadow-glow transition-all duration-400">
                        {info.icon}
                      </div>
                      <div className="flex flex-col gap-1 pt-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.18em] leading-none">
                          {info.label}
                        </span>
                        <span className="text-slate-900 font-bold text-base leading-snug">
                          {info.value}
                        </span>
                        {info.href && (
                          <a
                            href={info.href}
                            className="text-sm font-semibold text-primary hover:text-primary-hover inline-flex items-center gap-1.5 transition-colors duration-200 group/link"
                          >
                            Connect Now
                            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Compliance badges */}
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.18em] mb-4">
                  Enterprise Compliance
                </p>
                <div className="flex gap-3 flex-wrap items-center">
                  {["CloudPACS", "HIPAA", "ISO/IEC"].map((b) => (
                    <span
                      key={b}
                      className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 shadow-soft-sm"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection direction="right" delay={150} className="relative min-w-0">
              <div className="relative p-8 md:p-12 rounded-4xl bg-white border border-slate-100 shadow-premium-xl">

                {submitted ? (
                  /* Success state */
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                    <div className="w-20 h-20 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Inquiry Received
                      </h3>
                      <p className="text-slate-500">Our enterprise team will reach out within 24 hours.</p>
                    </div>
                    <Button variant="secondary" onClick={() => setSubmitted(false)}>
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="mb-2">
                      <h3 className="text-xl font-black text-slate-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Start Your Inquiry
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">Fill in the details below and we'll get back to you within 24 hours.</p>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Dr. Rajesh Kumar"
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Clinical Facility */}
                    <div>
                      <label htmlFor="hospital" className="form-label">Clinical Facility</label>
                      <input
                        id="hospital"
                        name="hospital"
                        type="text"
                        className="form-input"
                        placeholder="Metropolis Diagnostic"
                        onFocus={() => setFocused("hospital")}
                        onBlur={() => setFocused(null)}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Enterprise Email */}
                    <div>
                      <label htmlFor="email" className="form-label">Enterprise Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="rajesh@hospital.com"
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Modality */}
                    <div>
                      <label htmlFor="modality" className="form-label">Modality Interest</label>
                      <select
                        id="modality"
                        name="modality"
                        className="form-input appearance-none cursor-pointer"
                        onFocus={() => setFocused("modality")}
                        onBlur={() => setFocused(null)}
                        onChange={handleChange}
                      >
                        {MODALITIES.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="form-label">Requirement Overview</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="form-input resize-none"
                        placeholder="Tell us about your diagnostic volume and specific clinical needs..."
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" variant="primary" size="lg" className="w-full" arrow>
                        Initialize Inquiry
                      </Button>
                    </div>

                    <p className="text-center text-xs text-slate-400">
                      By submitting, you agree to our Privacy Policy. We respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>

              {/* Decorative glow behind form */}
              <div className="absolute inset-x-8 -bottom-6 h-16 bg-primary/6 blur-3xl rounded-4xl -z-10" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ③ REGIONAL OFFICES
      ══════════════════════════════════════════ */}
      <section className="section-padding-sm bg-slate-50 border-t border-slate-100">
        <div className="container-width">
          <AnimatedSection direction="up" className="mb-10">
            <h3 className="text-xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Regional Operations
            </h3>
            <p className="text-slate-500 text-sm">Dedicated teams across our operational hubs.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Operational Hub",
                title: "Maharashtra Diagnostic Cluster",
                desc: "Serving the core Vidarbha and Marathwada regions with localized technical support.",
                icon: "🏙️",
              },
              {
                label: "North Expansion",
                title: "Madhya Pradesh Network",
                desc: "Dedicated clinical leads for the Bhopal and Indore diagnostic corridors.",
                icon: "🌐",
              },
              {
                label: "Platform Support",
                title: "24/7 Digital Concierge",
                desc: "Global-ready technical engineering team available for real-time PACS troubleshooting.",
                icon: "⚡",
              },
            ].map((office, idx) => (
              <AnimatedSection key={office.label} direction="up" delay={idx * 80}>
                <div className="group flex flex-col gap-4 p-7 bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1 transition-all duration-400 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-2xl group-hover:bg-primary/14 group-hover:scale-110 transition-all duration-300">
                    {office.icon}
                  </div>
                  <div>
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.18em]">{office.label}</span>
                    <h4 className="font-bold text-slate-900 text-base mt-1 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{office.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{office.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
