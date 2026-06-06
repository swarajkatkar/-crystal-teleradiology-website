import { NavLink, Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us",    to: "/about"   },
      { label: "Our Team",    to: "/team"    },
      { label: "Clients",     to: "/clients" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Our Services",  to: "/services"   },
      { label: "Technology",    to: "/technology" },
      { label: "Our Process",   to: "/process"    },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "Home",    to: "/"        },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-primary-navy text-white mt-auto overflow-hidden">
      {/* Subtle gradient blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] rounded-full bg-secondary/6 blur-[80px] pointer-events-none" />
      <div className="section-divider-dark absolute top-0 inset-x-0" />

      <div className="container-width relative z-10 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-glow group-hover:shadow-glow-strong transition-all duration-300">
                <span className="font-black text-sm italic">C</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-base text-white tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Crystal
                </span>
                <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.22em] mt-0.5">
                  Teleradiology
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-[220px]">
              Advancing diagnostic imaging with precision, technology, and care — 24/7.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-3 flex-wrap">
              {["HIPAA", "CloudPACS", "ISO/IEC"].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-white/6 border border-white/8 text-[10px] font-bold text-slate-400 uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Dynamic link columns */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === "/"}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-secondary rounded-full transition-all duration-300 overflow-hidden" />
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider-dark mt-12 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>
            © {new Date().getFullYear()} Crystal Teleradiology Services Pvt. Ltd. All rights reserved.
          </span>
          <span className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Terms of Service</a>
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-slow" />
              All systems operational
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
