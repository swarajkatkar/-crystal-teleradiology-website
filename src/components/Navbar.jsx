import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS } from "../data/index";
import Button from "./Button";

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  // Scroll handler
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Active link styles
  const linkClass = ({ isActive }) =>
    [
      "relative text-sm font-medium transition-colors duration-200 py-1 group",
      isActive ? "text-primary" : "text-slate-600 hover:text-slate-900",
    ].join(" ");

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_1px_20px_rgba(0,0,0,0.05)]"
            : "py-5 bg-transparent",
        ].join(" ")}
      >
        <div className="container-width">
          <nav className="flex items-center justify-between gap-8">

            {/* ── Logo ── */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group flex-shrink-0"
              onClick={closeMenu}
            >
              <div className="relative w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-glow transition-all duration-300 group-hover:shadow-glow-strong group-hover:scale-105 flex-shrink-0">
                <span className="font-black text-sm italic relative z-10">C</span>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-xl border-2 border-primary/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-base text-slate-900 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Crystal
                </span>
                <span className="text-[9px] font-bold text-primary uppercase tracking-[0.22em] mt-0.5">
                  Enterprise
                </span>
              </div>
            </NavLink>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={linkClass}
                >
                  {({ isActive }) => (
                    <>
                      <span className="px-3 py-1.5 rounded-lg transition-colors duration-200 hover:bg-slate-100">
                        {label}
                      </span>
                      {/* Active underline */}
                      <span
                        className={[
                          "absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full transition-all duration-300 origin-left",
                          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
                        ].join(" ")}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link to="/contact">
                <Button variant="secondary" size="sm">
                  Contact Sales
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" size="sm" arrow>
                  Get Started
                </Button>
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 text-slate-800 hover:bg-slate-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 inset-x-0 bg-white shadow-premium-xl transition-all duration-400 ease-expo-out ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          style={{ paddingTop: "72px" }}
        >
          <div className="container-width py-6 pb-8 flex flex-col gap-2">
            {NAV_LINKS.map(({ label, to }, idx) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-base transition-all duration-200 ${
                    isActive
                      ? "bg-primary/8 text-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
                style={{
                  animationDelay: `${idx * 50}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                  transition: `opacity 0.3s ease ${idx * 50}ms, transform 0.3s ease ${idx * 50}ms`,
                }}
              >
                <span>{label}</span>
                <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link to="/contact" onClick={closeMenu}>
                <Button variant="primary" size="lg" className="w-full" arrow>
                  Get Started
                </Button>
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                <Button variant="secondary" size="lg" className="w-full">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
