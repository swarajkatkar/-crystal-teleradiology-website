import { Link } from "react-router-dom";

/**
 * FeatureCard — Premium Enterprise Service Card
 *
 * @param {'light'|'dark'} variant
 */
const FeatureCard = ({
  icon,
  title,
  description,
  linkText,
  linkTo,
  variant = "light",
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`group relative flex flex-col p-8 rounded-3xl transition-all duration-500 h-full overflow-hidden ${
        isDark
          ? "saas-card-dark"
          : "saas-card"
      }`}
    >
      {/* Hover gradient background */}
      {!isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/3 group-hover:to-primary/0 transition-all duration-500 rounded-3xl pointer-events-none" />
      )}

      {/* Icon */}
      <div
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-500 flex-shrink-0 ${
          isDark
            ? "bg-white/10 group-hover:bg-secondary/20 group-hover:shadow-glow-cyan"
            : "bg-primary/8 group-hover:bg-primary/14 group-hover:shadow-glow"
        }`}
      >
        <span className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 inline-block">
          {icon}
        </span>
        {/* Ripple ring on hover */}
        <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 ${
          isDark ? "border-secondary/30" : "border-primary/20"
        }`} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-grow">
        <h3
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            isDark
              ? "text-white group-hover:text-secondary"
              : "text-slate-900 group-hover:text-primary"
          }`}
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Link */}
      {linkText && linkTo && (
        <div className="mt-8 pt-6 border-t border-current/5">
          <Link
            to={linkTo}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
              isDark
                ? "text-secondary/80 hover:text-secondary group-hover:gap-3"
                : "text-primary/80 hover:text-primary group-hover:gap-3"
            }`}
          >
            {linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
