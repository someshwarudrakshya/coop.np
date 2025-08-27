import React, { useState, useEffect } from "react";
import "./css/Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      quote:
        "Becoming a member was a turning point in my financial life. The co-op gave me access to loans and support I needed to start my business.",
      name: "James Wilson",
      title: "Small Business Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "I've been able to save more money and get better interest rates than at any traditional bank. The financial education workshops changed how I manage my finances.",
      name: "Sarah Johnson",
      title: "Teacher",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 4.5,
    },
    {
      id: 3,
      quote:
        "When I needed a car loan, the co-op offered me the best terms by far. The process was transparent with no hidden fees.",
      name: "Michael Chen",
      title: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "The community feel and member-focused approach is what keeps me with this financial co-op. I know my money is helping other members in my community.",
      name: "Maria Rodriguez",
      title: "Retired Nurse",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      rating: 4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star full">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <section className="testimonials">
      <div className="section-title">
        <h2>
          What Our<span className="highlight"> Members Say</span>
        </h2>
        <p>What our cooperative members say</p>
      </div>

      <div className="testimonials-container">
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>
              <footer>
                <div className="member-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="member-info">
                  <div className="name">{testimonial.name}</div>
                  <div className="title">{testimonial.title}</div>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        ></div>
      </div>

      <div className="navigation">
        <button className="nav-btn prev" onClick={goToPrev}>
          <span>❮</span>
        </button>
        <button className="nav-btn next" onClick={goToNext}>
          <span>❯</span>
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
