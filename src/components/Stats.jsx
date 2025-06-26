import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0,
  });
  const sectionRef = useRef(null);

  const finalValues = {
    projects: 50,
    clients: 30,
    experience: 3,
    awards: 15,
  };

  const statsData = [
    {
      key: "projects",
      label: "Projects Completed",
      icon: "🚀",
      suffix: "+",
    },
    {
      key: "clients",
      label: "Happy Clients",
      icon: "😊",
      suffix: "+",
    },
    {
      key: "experience",
      label: "Years Experience",
      icon: "📅",
      suffix: "",
    },
    {
      key: "awards",
      label: "Achievements",
      icon: "🏆",
      suffix: "+",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 FPS
        const increment = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;

          setCounters({
            projects: Math.floor(finalValues.projects * progress),
            clients: Math.floor(finalValues.clients * progress),
            experience: Math.floor(finalValues.experience * progress),
            awards: Math.floor(finalValues.awards * progress),
          });

          if (step >= steps) {
            clearInterval(timer);
            setCounters(finalValues);
          }
        }, increment);
      };

      animateCounters();
    }
  }, [isVisible]);

  return (
    <div id="stats" ref={sectionRef}>
      <div className="container">
        <h1 className="sub-title">Fun Facts & Stats</h1>

        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div
              key={stat.key}
              className="stat-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {counters[stat.key]}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="stats-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">⚡</span>
            <span className="highlight-text">
              Average 48-hour delivery time
            </span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">📱</span>
            <span className="highlight-text">
              100% mobile-responsive designs
            </span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🎯</span>
            <span className="highlight-text">95% client satisfaction rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
