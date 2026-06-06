import { Outlet, useLocation } from "react-router-dom";
import { useEffect }  from "react";
import Navbar         from "../components/Navbar";
import Footer         from "../components/Footer";
import ScrollToTop    from "../components/ScrollToTop";

const MainLayout = () => {
  const { pathname } = useLocation();

  // Re-init scroll observers on route change
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    // Small timeout ensures the new page's DOM is ready
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden relative w-full max-w-[100vw]">
      <ScrollToTop />
      <Navbar />
      {/* pt-16 accounts for fixed navbar height ~64px */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
