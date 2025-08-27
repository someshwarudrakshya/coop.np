import { useState } from "react";
import "./css/Gallery.css";

export default function Gallery() {
  const images = [
    { id: 1, src: "../src/assets/gallery/1.jpg", alt: "Event 1" },
    { id: 2, src: "../src/assets/gallery/2.jpg", alt: "Event 2" },
    { id: 3, src: "../src/assets/gallery/3.jpg", alt: "Event 3" },
    { id: 4, src: "../src/assets/gallery/4.jpg", alt: "Event 4" },
    { id: 5, src: "../src/assets/gallery/5.jpg", alt: "Event 5" },
    { id: 6, src: "../src/assets/gallery/6.jpg", alt: "Event 6" },
    { id: 7, src: "../src/assets/gallery/7.jpg", alt: "Event 7" },
    { id: 8, src: "../src/assets/gallery/8.jpg", alt: "Event 8" },
    { id: 9, src: "../src/assets/gallery/9.jpg", alt: "Event 9" },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="container">
        <div className="section-title">
          <h2>Our <span className="highlight">Gallery</span></h2>
          <p>
          Explore our event highlights. Click any image to view it larger.
          </p>
        </div>
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
