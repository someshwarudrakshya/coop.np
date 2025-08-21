import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Carosel.css"; // Updated import path

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let slideInterval;

  const slides = [
    {
      id: 1,
      image: "/carousel/s1.avif",
      title: "Organic Rudraksha Farming",
      description: "Sustainable cultivation practices in the Himalayan region",
    },
    {
      id: 2,
      image: "/carousel/s2.jpg",
      title: "Farmer Cooperative",
      description:
        "Supporting over 500 local farmers with fair trade practices",
    },
    {
      id: 3,
      image: "carousel/s3.jpg",
      title: "Premium Quality Products",
      description: "Certified organic Rudraksha beads and spiritual products",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const resetInterval = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  useEffect(() => {
    if (autoPlay) {
      slideInterval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoPlay]);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="carousel-btn">Learn More</button>
            </div>
          </div>
        ))}

        <button className="carousel-control prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
