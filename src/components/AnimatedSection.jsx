import { useEffect, useRef } from "react";

/**
 * AnimatedSection — Scroll-triggered reveal wrapper.
 *
 * @param {'up'|'left'|'right'|'scale'} direction
 * @param {number} delay — delay in ms (e.g. 100, 200)
 * @param {string} className
 */
const AnimatedSection = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
  tag: Tag = "div",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply delay as inline style
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass = {
    up:    "reveal",
    left:  "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[direction] ?? "reveal";

  return (
    <Tag ref={ref} className={`${directionClass} ${className}`}>
      {children}
    </Tag>
  );
};

export default AnimatedSection;
