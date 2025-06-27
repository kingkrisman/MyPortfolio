import React from "react";
import "../App.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Da'Sayonce Real Estate",
      period: "2025 - Present",
      description:
        "Developing web applications using React, Node.js, and modern technologies. Creating responsive designs and optimizing user experiences.",
      achievements: [
        "Built responsive websites",
        "Improved client satisfaction by 95%",
        "Specialized in modern web technologies",
      ],
      icon: "💻",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Willy Will Mar LTD",
      period: "2023 - 2024",
      description:
        "Focused on creating interactive user interfaces and implementing modern design principles.",
      achievements: [
        "Reduced load times by 40%",
        "Implemented responsive designs",
        "Collaborated with design teams",
      ],
      icon: "🎨",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "SAIL Innovation Lab",
      period: "2024 - 2025",
      description:
        "Furthered my journey in web development, learning and applying advance programming concepts.",
      achievements: [
        "Learned multiple programming languages",
        "Added new skills",
        "Gained experience in team collaboration",
      ],
      icon: "🚀",
    },
  ];

  return (
    <div id="experience">
      <div className="container">
        <h1 className="sub-title">My Experience</h1>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  <span>{exp.icon}</span>
                </div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
