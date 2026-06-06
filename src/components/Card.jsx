/**
 * Card — Premium SaaS Surface Card
 *
 * @param {'light'|'dark'|'glass'} variant
 */
const Card = ({
  children,
  variant = "light",
  hover = true,
  className = "",
  ...rest
}) => {
  const variantClasses = {
    light: "saas-card",
    dark:  "saas-card-dark",
    glass: "glass-panel p-6",
  };

  return (
    <div
      className={[
        variantClasses[variant] ?? variantClasses.light,
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
