/**
 * Heading — Premium Enterprise Typography Component
 *
 * @param {'left'|'center'|'right'} align
 * @param {boolean} dark — light text for dark backgrounds
 * @param {string}  accentWord — word to render with gradient text
 * @param {string}  badge — optional eyebrow badge
 * @param {boolean} badgeDark — cyan badge variant for dark backgrounds
 * @param {'h1'|'h2'|'h3'} as — semantic tag
 * @param {string}  className
 */
const Heading = ({
  title,
  subtitle,
  badge,
  badgeDark = false,
  align = "center",
  as: Tag = "h2",
  accentWord,
  className = "",
  dark = false,
}) => {
  const alignClasses = {
    left:   "text-left items-start",
    center: "text-center items-center mx-auto",
    right:  "text-right items-end ml-auto",
  };

  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className={dark ? "text-gradient-warm" : "text-gradient"}>
          {accentWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`flex flex-col gap-4 ${alignClasses[align] ?? "items-center text-center"} ${className} max-w-4xl`}
    >
      {badge && (
        <span className={badgeDark ? "saas-badge-dark saas-badge-dot" : "saas-badge saas-badge-dot"}>
          {badge}
        </span>
      )}

      <Tag
        className={[
          Tag === "h1"
            ? "text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            : "text-3xl md:text-4xl lg:text-5xl",
          "font-extrabold tracking-tight leading-[1.08] text-balance",
          dark ? "text-white" : "text-slate-900",
        ].join(" ")}
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {renderTitle()}
      </Tag>

      {subtitle && (
        <p
          className={[
            "text-base md:text-lg leading-relaxed text-balance max-w-2xl",
            align === "center" ? "mx-auto" : "",
            dark ? "text-slate-400" : "text-slate-500",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
