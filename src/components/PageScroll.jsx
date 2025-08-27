import { useState, useEffect } from "react";
import "./css/PageScroll.css"

export default function ScrollButton() {
  const [visibleTop, setVisibleTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show top button when scrolled down 300px
      if (window.pageYOffset > 300) setVisibleTop(true);
      else setVisibleTop(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {visibleTop && (
        <button
          onClick={scrollToTop}
          className="scroll-btn scroll-to-top"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
