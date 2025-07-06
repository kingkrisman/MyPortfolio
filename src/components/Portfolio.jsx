import React, { useState } from "react";
import "../../src/App.css";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState("all");

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Featured projects (always shown)
  const featuredProjects = [
    {
      id: 1,
      title: "Da'Sayonce Real Estate",
      description:
        "Leading development of complex web applications using modern tech stack. Specializing in React, Node.js, and cloud solutions.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa60f75f82e1740d2898e900ca0249b8c%2Fa5338a8889db4d709d9632af47a7d5b5",
      liveUrl: "https://www.dasayoncerealestate.com",
      githubUrl: "https://github.com/kingkrisman/Builder-nova-sanctuary.git",
      tags: ["React", "Node.js", "Real Estate", "Full Stack"],
      category: "web",
    },
    {
      id: 2,
      title: "Redefine Gaming",
      description:
        "I designed and developed a website that is visually appealing and eye catching with Gsap animations.",
      image:
        "https://res.cloudinary.com/duycrcary/image/upload/v1743982914/Untitled_design_27_nqdwer.png",
      liveUrl: "https://gaming-site-two.vercel.app/",
      githubUrl: "https://github.com/kingkrisman/Gaming_Site.git",
      tags: ["GSAP", "Animation", "Gaming", "Frontend"],
      category: "web",
    },
    {
      id: 3,
      title: "Drawing Canvas",
      description:
        "An interactive web-based drawing application built with HTML5 Canvas, JavaScript, and CSS. Users can draw freely, choose brush colors and sizes, clear the canvas, and download their artwork.",
      image:
        "https://res.cloudinary.com/duycrcary/image/upload/v1743982908/Untitled_design_17_zmvmle.png",
      liveUrl: "https://kingkrisman.github.io/DrawingDesk/",
      githubUrl: "https://github.com/kingkrisman/DrawingDesk.git",
      tags: ["Canvas", "JavaScript", "Drawing", "Interactive"],
      category: "app",
    },
  ];

  // Additional projects (shown when "See More" is clicked)
  const additionalProjects = [
    {
      id: 4,
      title: "Bank Dashboard",
      description:
        "A modern, responsive bank dashboard interface designed to visualize financial data and manage user accounts.",
      image:
        "https://res.cloudinary.com/duycrcary/image/upload/v1743982910/Untitled_design_21_t82ric.png",
      liveUrl: "https://kingkrisman.github.io/BankDashbord/",
      githubUrl: "https://github.com/kingkrisman/BankDashbord.git",
      tags: ["Dashboard", "Finance", "Data Viz", "UI/UX"],
      category: "web",
    },
    {
      id: 5,
      title: "Netflix Clone",
      description:
        "A sleek, responsive video streaming platform inspired by Netflix. it features dynamic movie listings, category browsing, and video previews.",
      image:
        "https://res.cloudinary.com/duycrcary/image/upload/v1743942403/work-7_yuttqp.png",
      liveUrl: "https://kingkrisman.github.io/Netflix_clone/",
      githubUrl: "https://github.com/kingkrisman/Netflix_clone.git",
      tags: ["React", "Streaming", "API", "Clone"],
      category: "web",
    },
    {
      id: 6,
      title: "SnapX",
      description:
        "A dynamic and responsive social media platform built with React, Tailwind CSS, and Firebase. Users can create posts, like, comment, and follow others in real-time.",
      image:
        "https://res.cloudinary.com/duycrcary/image/upload/v1743982897/snapX_yitvik.png",
      liveUrl: "https://snap-x-smoky.vercel.app/",
      githubUrl: "https://github.com/kingkrisman/SnapX.git",
      tags: ["React", "Firebase", "Social Media", "Real-time"],
      category: "app",
    },
  ];

  const allProjects = showMore
    ? [...featuredProjects, ...additionalProjects]
    : featuredProjects;

  const categories = [
    { id: "all", label: "All Projects", count: allProjects.length },
    {
      id: "web",
      label: "Web Apps",
      count: allProjects.filter((p) => p.category === "web").length,
    },
    {
      id: "app",
      label: "Applications",
      count: allProjects.filter((p) => p.category === "app").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-modern">
      <div className="container">
        {/* Header Section */}
        <div className="portfolio-header">
          <div className="header-content">
            <h1 className="portfolio-title">
              Featured <span className="highlight">Projects</span>
            </h1>
            <p className="portfolio-subtitle">
              Explore my latest work showcasing modern web development,
              innovative design, and cutting-edge technologies
            </p>
          </div>


          {/* Statistics */}
          <div className="portfolio-stats">
            <div className="stat-item">
              <span className="stat-number">70+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? "active" : ""}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        <div className="work-list">
          {/* Default work items */}
          <div className="work">
            <img
              src="https://res.cloudinary.com/duycrcary/image/upload/v1743982914/Untitled_design_27_nqdwer.png"
              alt="Work 1"
            />



 <div className="layer">
              <h3>Da'Sayonce Real Estate</h3>
              <p>
               Leading development of complex web applications using modern tech stack. Specializing in React, Node.js, and cloud solutions.
              </p>
              <div className="link">
                <a href="https://www.dasayoncerealestate.com"> 🔗</a>{" "}
                <a href="https://github.com/kingkrisman/Builder-nova-sanctuary.git">🧑‍💻</a>
              </div>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/duycrcary/image/upload/v1751827612/WhatsApp_Image_2025-05-02_at_12.58.30_2c13b2e7_oouh2f.jpg"
              alt="Work 3"
            />



            <div className="layer">
              <h3>Redefine Gaming</h3>
              <p>
                I designed and developed a website that is visually appealing
                and eye catching with Gsap animations.
              </p>
              <div className="link">
                <a href="https://gaming-site-two.vercel.app/"> 🔗</a>{" "}
                <a href="https://github.com/kingkrisman/Gaming_Site.git">🧑‍💻</a>
              </div>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/duycrcary/image/upload/v1743982908/Untitled_design_17_zmvmle.png"
              alt="Work 4"
            />

            <div className="layer">
              <h3>Bank Dashboard</h3>
              <p>
                A modern, responsive bank dashboard interface designed to
                visualize financial data and manage user accounts.
              </p>
              <div className="link">
                <a href="https://kingkrisman.github.io/BankDashbord/"> 🔗</a>{" "}
                <a href="https://github.com/kingkrisman/BankDashbord.git">🧑‍💻</a>
              </div>
            </div>
          </div>

          {/* Additional work items shown when "See More" is clicked */}
          {showMore && (
            <>
              <div className="work">
                <h3>Drawing Canvas</h3>
                <p>
                  An interactive web-based drawing application built with HTML5
                  Canvas, JavaScript, and CSS. Users can draw freely, choose brush
                  colors and sizes, clear the canvas, and download their artwork.
                </p>
                <div className="link">
                  <a href="https://kingkrisman.github.io/DrawingDesk/"> 🔗</a>{" "}
                  <a href="https://github.com/kingkrisman/DrawingDesk.git">🧑‍💻</a>
                </div>
              </div>

              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982910/Untitled_design_21_t82ric.png"
                  alt="Work 3"
                />
                <div className="layer">
                  <div className="work">
                    <img
                      src="https://res.cloudinary.com/duycrcary/image/upload/v1743942403/work-7_yuttqp.png"
                      alt="Work 5"
                    />
                    <div className="layer">
                      <h3>Netflix clone</h3>
                      <p>
                        A sleek, responsive video streaming platform inspired by
                        Netflix. it features dynamic movie listings, category
                        browsing, and video previews. This project demonstrates
                        frontend development, API integration, and interactive UI
                        design.
                      </p>
                      <div className="link">
                        <a href="https://kingkrisman.github.io/Netflix_clone/">
                          {" "}
                          🔗
                        </a>{" "}
                        <a href="https://github.com/kingkrisman/Netflix_clone.git">
                          🧑‍💻
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${index === 0 ? "featured" : ""}`}
              style={{ "--animation-delay": `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <span>🔗</span>
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <span>🧑‍💻</span>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {index === 0 && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="portfolio-actions">
          <button onClick={toggleShowMore} className="load-more-btn">
            <span>{showMore ? "Show Less" : "Explore More Projects"}</span>
            <div className="btn-icon">{showMore ? "↑" : "→"}</div>
          </button>

          {!showMore && (
            <p className="more-info">
              +{additionalProjects.length} more amazing projects awaiting your
              discovery
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;