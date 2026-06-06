/**
 * Section — layout wrapper applying container-width + section-padding
 *
 * @param {string} id     - optional HTML id for anchor links
 * @param {string} className - additional classes on the outer <section>
 * @param {string} innerClassName - additional classes on the inner container div
 */
const Section = ({ children, id, className = "", innerClassName = "" }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`container-width ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
