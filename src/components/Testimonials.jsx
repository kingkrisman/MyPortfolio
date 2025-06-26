import React, { useState, useEffect } from "react";
import "../App.css";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b1e2e802?w=150&h=150&fit=crop&crop=face",
      text: "Christian delivered an exceptional website that exceeded our expectations. His attention to detail and technical skills are outstanding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Working with Christian was a game-changer for our business. He created a modern, responsive platform that our users love.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Studio",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Christian perfectly translated our design vision into a functional, beautiful website. His coding skills are impressive!",
      rating: 5,
    },
    {
      id: 4,
      name: "David Kim",
      role: "E-commerce Owner",
      company: "ShopSmart",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The website Christian built for us increased our conversion rate by 40%. His technical expertise is remarkable.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div id="testimonials">
      <div className="container">
        <h1 className="sub-title">What Clients Say</h1>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="testimonial-author">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="author-image"
              />
              <div className="author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].role}</p>
                <span>{testimonials[currentTestimonial].company}</span>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
