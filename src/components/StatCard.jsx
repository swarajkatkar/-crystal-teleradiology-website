/**
 * StatCard — Premium Metric Display Block
 */
const StatCard = ({ value, label, icon, description, variant = "light" }) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`group flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 lg:p-7 rounded-2xl transition-all duration-400 min-w-0 overflow-hidden ${
        isDark
          ? "bg-white/4 border border-white/8 hover:bg-white/7 hover:border-white/14"
          : "bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/15"
      }`}
    >
      {icon && (
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 flex-shrink-0 ${
            isDark ? "bg-white/8" : "bg-primary/8"
          }`}
        >
          {icon}
        </div>
      )}

      <div className="flex flex-col gap-1 min-w-0 w-full">
        <span
          className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none transition-colors duration-300 break-words w-full max-w-full ${
            isDark
              ? "text-white group-hover:text-secondary"
              : "text-primary group-hover:text-primary-hover"
          }`}
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {value}
        </span>

        <span
          className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] leading-snug sm:leading-none mt-1 w-full break-words max-w-full ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {label}
        </span>

        {description && (
          <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
