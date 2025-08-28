import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import Carousel1 from "../assets/carousel/Carousel1.avif";
import Carousel2 from "../assets/carousel/Carousel2.avif";
import Carousel3 from "../assets/carousel/Carousel3.avif";
import Carousel4 from "../assets/carousel/Carousel4.avif";
import Carousel5 from "../assets/carousel/Carousel5.avif";

import "./css/Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const slideInterval = useRef(null);

  const slides = [
    {
      id: 1,
      image: Carousel1,
      title: "Organic Rudraksha Farming",
      description: "Sustainable cultivation practices in the Himalayan region",
    },
    {
      id: 2,
      image: Carousel2,
      title: "Farmer Cooperative",
      description:
        "Supporting over 500 local farmers with fair trade practices",
        lazy: true
    },
    {
      id: 3,
      image: Carousel3,
      title: "Premium Quality Products",
      description: "Certified organic Rudraksha beads and spiritual products",
      lazy: true
    },
    {
        id: 4,
        image: Carousel4,
        title: "Premium Quality Products",
        description: "Certified organic Rudraksha beads and spiritual products",
        lazy: true
      },
    {
      id: 5,
      image: Carousel5,
      title: "Community Engagement",
      description: "Empowering local communities through education and resources",
      lazy: true
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
      slideInterval.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(slideInterval.current);
  }, [autoPlay]);

  // ✅ Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true, // also allows mouse drag on desktop
  });

  return (
    <section className="carousel-section">
      <div className="carousel-container" {...handlers}>
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
              <button className="carousel-btn btn">Learn More</button>
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
