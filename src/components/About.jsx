import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const tabsData = {
    skills: {
      title: "Technical Skills",
      content: [
        {
          skill: "Frontend Development",
          details: "React.js, Vue.js, Angular, JavaScript (ES6+)",
        },
        {
          skill: "Backend Development",
          details: "Node.js, Python, Express.js, RESTful APIs",
        },
        {
          skill: "Database Management",
          details: "MongoDB, PostgreSQL, Firebase, MySQL",
        },
        {
          skill: "Cloud & DevOps",
          details: "AWS, Vercel, Netlify, Docker, Git/GitHub",
        },
        {
          skill: "UI/UX Design",
          details: "Figma, Adobe XD, Responsive Design, Mobile-First",
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      content: [
        {
          skill: "2023 - Present",
          details: "Full Stack Developer - Freelance & Contract Work",
        },
        {
          skill: "2022 - 2023",
          details: "Frontend Developer - Digital Agency Solutions",
        },
        {
          skill: "2021 - 2022",
          details: "Web Developer - Tech Startup Environment",
        },
        {
          skill: "2020 - 2021",
          details: "Junior Developer - Learning & Growth Phase",
        },
      ],
    },
    education: {
      title: "Education & Certifications",
      content: [
        {
          skill: "Computer Science",
          details: "Bachelor's Degree in Computer Science & Engineering",
        },
        {
          skill: "Web Development",
          details: "Full Stack Web Development Certification",
        },
        {
          skill: "Cloud Computing",
          details: "AWS Certified Developer Associate",
        },
        {
          skill: "Modern Frameworks",
          details: "React.js & Node.js Advanced Certifications",
        },
        {
          skill: "Continuous Learning",
          details: "Regular upskilling in emerging technologies",
        },
      ],
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-wrapper">
          {/* Left Column - Image & Stats */}
          <div className="about-left">
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982914/Untitled_design_27_nqdwer.png"
                  alt="Christian Daniels - Full Stack Developer"
                  className="about-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="overlay-icon">💻</span>
                    <span className="overlay-text">Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Exp</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-right">
            <div className="about-header">
              <span className="about-subtitle">Get to know me</span>
              <h1 className="about-title">
                About <span className="highlight">Christian</span>
              </h1>
              <div className="title-underline"></div>
            </div>

            <div className="about-intro">
              <p className="intro-text">
                I'm a passionate Full Stack Developer with a keen eye for
                creating digital experiences that make a difference. With
                expertise spanning both frontend and backend technologies, I
                specialize in building scalable, user-centric applications that
                solve real-world problems.
              </p>
              <p className="intro-text">
                My journey in web development started with curiosity and has
                evolved into a professional pursuit of excellence. I believe in
                writing clean, efficient code and creating interfaces that are
                not just functional, but delightful to use.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="about-tabs">
              <div className="tab-navigation">
                {Object.keys(tabsData).map((tab) => (
                  <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="tab-content">
                <h3 className="tab-title">{tabsData[activeTab].title}</h3>
                <div className="tab-items">
                  {tabsData[activeTab].content.map((item, index) => (
                    <div key={index} className="tab-item">
                      <div className="item-header">
                        <span className="item-icon">→</span>
                        <span className="item-skill">{item.skill}</span>
                      </div>
                      <div className="item-details">{item.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
              <div className="cta-content">
                <span className="cta-text">Ready to work together?</span>
                <a href="#contact" className="cta-button">
                  <span>Let's Connect</span>
                  <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
