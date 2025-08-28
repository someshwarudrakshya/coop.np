import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Note from "../components/Note.jsx";
import "./css/Gallery.css";

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "../src/assets/gallery/1.avif",
      alt: "Event 1",
      year: "2023",
      event: "Annual Meeting",
      desc: "Our 2023 Annual Meeting with members and guests.",
    },
    {
      id: 2,
      src: "../src/assets/gallery/2.avif",
      alt: "Event 2",
      year: "2023",
      event: "Workshop",
      desc: "Insurance awareness workshop in Kathmandu.",
    },
    {
      id: 3,
      src: "../src/assets/gallery/3.avif",
      alt: "Event 3",
      year: "2024",
      event: "Celebration",
      desc: "New Year celebration program with community.",
    },
    {
      id: 4,
      src: "../src/assets/gallery/4.avif",
      alt: "Event 4",
      year: "2024",
      event: "Training",
      desc: "Team training and cooperative development seminar.",
    },
    {
      id: 5,
      src: "../src/assets/gallery/5.avif",
      alt: "Event 5",
      year: "2022",
      event: "Seminar",
      desc: "Financial literacy seminar for students.",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  const uniqueYears = [...new Set(images.map((img) => img.year))];
  const uniqueEvents = [...new Set(images.map((img) => img.event))];

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.year === filter || img.event === filter);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  const showNext = () =>
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );

  // Keyboard navigation
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, filteredImages]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => showNext(),
    onSwipedRight: () => showPrev(),
    trackMouse: true,
  });

  return (
    <section className="container">
      <div className="gallery-page">
        <div className="section-title">
          <h2>
            Our <span className="highlight">Gallery</span>
          </h2>
          <p>Browse events by year or category. Hover or tap for details.</p>
        </div>

        {/* Filter Tabs */}
        <div className="filters">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {uniqueYears.map((year) => (
            <button
              key={year}
              className={filter === year ? "active" : ""}
              onClick={() => setFilter(year)}
            >
              {year}
            </button>
          ))}
          {uniqueEvents.map((event) => (
            <button
              key={event}
              className={filter === event ? "active" : ""}
              onClick={() => setFilter(event)}
            >
              {event}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map(({ id, src, alt, desc }, index) => (
            <div
              key={id + "-" + filter}
              className="gallery-card"
              onClick={() => openModal(index)}
            >
              <img src={src} alt={alt} loading="lazy" />
              <div className="overlay">
                <p>{desc}</p>
              </div>
              <p className="card-desc">{desc}</p>{" "}
              {/* Description always visible below image */}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            {...handlers}
          >
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              className="modal-image"
            />
            <p className="modal-desc">{filteredImages[currentIndex].desc}</p>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <button className="nav-btn prev" onClick={showPrev}>
              &#10094;
            </button>
            <button className="nav-btn next" onClick={showNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}

      
        <Note type="Gallery" />
    </section>
  );
}
