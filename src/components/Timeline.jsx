import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);

  const timelineData = [
    {
      id: 1,
      year: "2025",
      period: "Present",
      title: "Full Stack Developer",
      company: "Da'Sayonce Real Estate",
      type: "work",
      description:
        "Leading development of complex web applications using modern tech stack. Specializing in React, Node.js, and cloud solutions.",
      achievements: [
        "Built responsive web applications",
        "Improved client satisfaction rate to 95%",
     
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
      icon: "💻",
    },
    {
      id: 2,
      year: "2023",
      period: "2024",
      title: "Full Stack Developer",
      company: "Willy Will Mar LTD",
      type: "work",
      description:
        "Focused on creating exceptional user experiences and implementing modern design systems.",
      achievements: [
        "Reduced page load times by 40%",
        "Implemented responsive design patterns",
        "Led UI/UX optimization projects",
        "Collaborated with design teams",
      ],
      technologies: ["React", "Vue.js", "Sass", "Figma", "JavaScript"],
      icon: "🎨",
    },
    {
      id: 3,
      year: "2024",
      period: "2025",
      title: "Full Stack Developer",
      company: "SAIL Innovation Lab",
      type: "work",
      description:
        "Advanced my professional journey, learning and applying advance programming concepts.",
      achievements: [
        "Learned multiple programming languages",
        "Built projects",
        "Gained experience in agile development",
        "Contributed to open-source projects",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Typescript", "React", "MongoDB", "NodeJS", "Github", "Varcel"],
      icon: "🚀",
    },
    {
      id: 4,
      year: "2020",
      period: "2023",
      title: "Computer Science Degree",
      company: "Lagos State Polytechnic",
      type: "education",
      description:
        "Comprehensive study in computer science fundamentals, software engineering, and modern development practices.",
      achievements: [
        "Graduated with honors",
        "Specialized in web technologies",
      ],
      technologies: ["Java", "Python", "C++", "Algorithms", "Data Structures"],
      icon: "🎓",
    },
    {
      id: 5,
      year: "2023",
      period: "2024",
      title: "Self-Taught Designer",
      company: "Personal Learning Journey",
      type: "learning",
      description:
        "Began my UI/UX journey through online courses, tutorials, and hands-on projects.",
      achievements: [
        "Completed 10+ online courses",
        "Designed first personal projects",
        "Joined design communities",
       
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
      icon: "📚",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.itemId);
            setVisibleItems((prev) => new Set([...prev, itemId]));
          }
        });
      },
      { threshold: 0.3 },
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "#ff004f";
      case "education":
        return "#4CAF50";
      case "learning":
        return "#2196F3";
      default:
        return "#ff004f";
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "work":
        return "Work Experience";
      case "education":
        return "Education";
      case "learning":
        return "Learning";
      default:
        return "Experience";
    }
  };

  return (
    <div id="timeline">
      <div className="container">
        <div className="timeline-header">
          <span className="timeline-subtitle">My Journey</span>
          <h1 className="timeline-title">
            Interactive <span className="highlight">Resume Timeline</span>
          </h1>
          <div className="timeline-description">
            Explore my professional journey through time - hover over items for
            detailed insights
          </div>
        </div>

        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-line"></div>

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              data-item-id={item.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
                visibleItems.has(item.id) ? "visible" : ""
              }`}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div
                className="timeline-dot"
                style={{ backgroundColor: getTypeColor(item.type) }}
              >
                <span className="timeline-icon">{item.icon}</span>
              </div>

              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="card-header">
                    <div
                      className="card-type"
                      style={{ color: getTypeColor(item.type) }}
                    >
                      {getTypeLabel(item.type)}
                    </div>
                    <div className="card-period">
                      {item.year} - {item.period}
                    </div>
                  </div>

                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-company">{item.company}</h4>

                  <p className="card-description">{item.description}</p>

                  <div className="card-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-technologies">
                    <h5>Technologies:</h5>
                    <div className="tech-tags">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="tech-tag"
                          style={{ borderColor: getTypeColor(item.type) }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-legend">
          <div className="legend-item">
            <div
              className="legend-dot"
              style={{ backgroundColor: "#ff004f" }}
            ></div>
            <span>Work Experience</span>
          </div>
          <div className="legend-item">
            <div
              className="legend-dot"
              style={{ backgroundColor: "#4CAF50" }}
            ></div>
            <span>Education</span>
          </div>
          <div className="legend-item">
            <div
              className="legend-dot"
              style={{ backgroundColor: "#2196F3" }}
            ></div>
            <span>Learning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
