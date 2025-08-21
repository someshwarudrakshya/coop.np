import { useState, useEffect } from "react";
import "../styles/PageScroll.css";

export default function ScrollButtons() {
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleBottom, setVisibleBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show top button when scrolled down 300px
      if (window.pageYOffset > 300) setVisibleTop(true);
      else setVisibleTop(false);

      // Show bottom button when not at the bottom
      const isAtBottom =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 100;
      setVisibleBottom(!isAtBottom);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

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
      {visibleBottom && (
        <button
          onClick={scrollToBottom}
          className="scroll-btn scroll-to-bottom"
          aria-label="Scroll to bottom"
        >
          ↓
        </button>
      )}
    </>
  );
}
