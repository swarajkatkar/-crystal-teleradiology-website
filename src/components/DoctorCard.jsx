/**
 * DoctorCard — Premium Medical Profile Card
 * Shows full doctor data: name, qualification, specialization, experience, background, expertise tags.
 */
const DoctorCard = ({
  image,
  name,
  qualification,
  specialization,
  experience,
  background,
  expertise = [],
  variant = "light",
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`group flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-slate-900/50 border border-white/6 shadow-glass-dark hover:border-white/12"
          : "bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-2"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

        {/* Name overlay on image */}
        <div className="absolute bottom-0 inset-x-0 p-5">
          <p className="text-white font-black text-lg leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {name}
          </p>
          <p className="text-primary-light font-bold text-xs uppercase tracking-[0.15em] mt-1">
            {qualification}
          </p>
        </div>

        {/* Experience badge */}
        {experience && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">
              {experience}
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 p-6">
        <div>
          <p
            className={`text-sm font-semibold leading-snug ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {specialization}
          </p>
          {background && (
            <p className={`text-xs mt-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
              {background}
            </p>
          )}
        </div>

        {/* Expertise tags */}
        {expertise.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {expertise.map((tag) => (
              <span
                key={tag}
                className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide transition-colors duration-200 ${
                  isDark
                    ? "bg-white/8 text-slate-400 group-hover:bg-secondary/15 group-hover:text-secondary"
                    : "bg-primary/7 text-primary/80 group-hover:bg-primary/12 group-hover:text-primary"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
