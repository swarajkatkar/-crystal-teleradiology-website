/**
 * Button — Premium Enterprise SaaS Button
 *
 * @param {'primary'|'secondary'|'glass'|'outline'|'text'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} loading
 * @param {boolean} arrow — show trailing arrow icon
 */

const variantClasses = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  glass:     "btn-glass",
  outline:   "btn-outline",
  text:      "inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-hover transition-colors duration-200",
};

const sizeClasses = {
  sm: "!px-5 !py-2.5 !text-xs",
  md: "!px-7 !py-3.5 !text-sm",
  lg: "!px-9 !py-4 !text-base",
};

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  arrow = false,
  ...rest
}) => {
  const isText = variant === "text";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={[
        "group",
        isText ? "" : "inline-flex items-center justify-center gap-2.5 transition-all duration-300",
        variantClasses[variant] ?? variantClasses.primary,
        isText ? "" : (sizeClasses[size] ?? ""),
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className,
      ].join(" ")}
      {...rest}
    >
      {loading && <SpinnerIcon />}
      <span>{children}</span>
      {arrow && !loading && <ArrowIcon />}
    </button>
  );
};

export default Button;
