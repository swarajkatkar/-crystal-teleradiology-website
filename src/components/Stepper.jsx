/**
 * Stepper — Premium Workflow Timeline
 * Horizontal on desktop, vertical on mobile.
 */
const Stepper = ({ steps = [] }) => {
  return (
    <div className="w-full">
      {/* Desktop — Horizontal */}
      <div className="hidden md:grid relative" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
        {/* Connector track */}
        <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-full" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center text-center group px-4"
          >
            {/* Step number ring */}
            <div className="relative z-10 w-12 h-12 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center mb-6 transition-all duration-400 group-hover:border-primary group-hover:shadow-glow group-hover:scale-110">
              <span className="text-sm font-black text-slate-400 group-hover:text-primary transition-colors duration-300">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {/* Active fill ring */}
              <div className="absolute inset-0 rounded-full bg-primary scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-400" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h4
                className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[160px] mx-auto">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile — Vertical Timeline */}
      <div className="md:hidden flex flex-col">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-5 group">
            {/* Left column: number + line */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-primary group-hover:shadow-glow">
                <span className="text-xs font-black text-slate-400 group-hover:text-primary transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="w-0.5 flex-1 bg-gradient-to-b from-slate-200 to-slate-100 my-2" />
              )}
            </div>

            {/* Right column: content */}
            <div className={`flex flex-col gap-1 ${idx < steps.length - 1 ? "pb-8" : ""}`}>
              <h4
                className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {step.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
