import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "JavaScript", level: 95, color: "#f7df1e" },
    { name: "React.js", level: 90, color: "#61dafb" },
    { name: "HTML5", level: 98, color: "#e34f26" },
    { name: "CSS3", level: 95, color: "#1572b6" },
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "Python", level: 80, color: "#3776ab" },
    { name: "Git", level: 88, color: "#f05032" },
    { name: "MongoDB", level: 75, color: "#47a248" },
  ];

  const tools = [
    { name: "VS Code", icon: "🆚" },
    { name: "Figma", icon: "🎨" },
    { name: "GitHub", icon: "🐙" },
    { name: "Firebase", icon: "🔥" },
    { name: "Vercel", icon: "▲" },
    { name: "Netlify", icon: "🌐" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" ref={sectionRef}>
      <div className="container">
        <h1 className="sub-title">My Skills & Tools</h1>

        <div className="skills-content">
          <div className="programming-skills">
            <h2 className="skills-subtitle">Programming Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        backgroundColor: skill.color,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tools-section">
            <h2 className="skills-subtitle">Tools & Technologies</h2>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="tool-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="tool-icon">{tool.icon}</div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
