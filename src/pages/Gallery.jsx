import { useState } from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const images = [
    { id: 1, src: "/images/event1.jpg", alt: "Event 1" },
    { id: 2, src: "/images/seminar.jpg", alt: "Seminar" },
    { id: 3, src: "/images/branch-opening.jpg", alt: "Branch Opening" },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map(({ id, src, alt }) => (
            <div
              key={id}
              className="gallery-item"
              onClick={() => setSelectedImg(src)}
            >
              <img
                src={src}
                alt={alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} alt="Selected" className="modal-image" />
            <button
              className="close-button"
              onClick={() => setSelectedImg(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
