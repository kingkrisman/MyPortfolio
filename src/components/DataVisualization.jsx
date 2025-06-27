import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const DataVisualization = () => {
  const [activeChart, setActiveChart] = useState("skills");
  const [animationStarted, setAnimationStarted] = useState(false);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  const skillsData = [
    { name: "JavaScript", value: 95, color: "#f7df1e" },
    { name: "React.js", value: 90, color: "#61dafb" },
    { name: "Node.js", value: 85, color: "#339933" },
    { name: "Python", value: 80, color: "#3776ab" },
    { name: "CSS3", value: 95, color: "#1572b6" },
    { name: "MongoDB", value: 75, color: "#47a248" },
    { name: "AWS", value: 70, color: "#ff9900" },
    { name: "TypeScript", value: 85, color: "#3178c6" },
  ];

  const projectStats = [
    { name: "Web Apps", value: 25, color: "#ff004f" },
    { name: "UI/UX", value: 25, color: "#4CAF50" },
    { name: "APIs", value: 15, color: "#2196F3" },
    { name: "E-commerce", value: 12, color: "#FF9800" },
    { name: "Dashboards", value: 10, color: "#9C27B0" },
    { name: "Landing Pages", value: 25, color: "#00BCD4" },
  ];

  const experienceData = [
    { year: "2019", projects: 2, skills: 3 },
    { year: "2020", projects: 8, skills: 6 },
    { year: "2021", projects: 15, skills: 12 },
    { year: "2022", projects: 25, skills: 18 },
    { year: "2023", projects: 35, skills: 25 },
    { year: "2024", projects: 45, skills: 30 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
          if (activeChart === "radar") {
            drawRadarChart();
          }
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animationStarted, activeChart]);

  const drawRadarChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 50;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw radar grid
    const levels = 5;
    for (let i = 1; i <= levels; i++) {
      const currentRadius = (radius / levels) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + i * 0.05})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axes
    const angleStep = (2 * Math.PI) / skillsData.length;
    skillsData.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw labels
      const labelX = centerX + Math.cos(angle) * (radius + 30);
      const labelY = centerY + Math.sin(angle) * (radius + 30);
      ctx.fillStyle = "#fff";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(skill.name, labelX, labelY);
    });

    // Draw data polygon
    ctx.beginPath();
    skillsData.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const value = (skill.value / 100) * radius;
      const x = centerX + Math.cos(angle) * value;
      const y = centerY + Math.sin(angle) * value;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      // Draw data points
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = skill.color;
      ctx.fill();
    });

    ctx.closePath();
    ctx.strokeStyle = "#ff004f";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 0, 79, 0.1)";
    ctx.fill();
  };

  const renderChart = () => {
    switch (activeChart) {
      case "skills":
        return (
          <div className="chart-container">
            <div className="bars-chart">
              {skillsData.map((skill, index) => (
                <div key={skill.name} className="bar-item">
                  <div className="bar-label">{skill.name}</div>
                  <div className="bar-container">
                    <div
                      className="bar-fill"
                      style={{
                        width: animationStarted ? `${skill.value}%` : "0%",
                        backgroundColor: skill.color,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <span className="bar-value">{skill.value}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="chart-container">
            <div className="donut-chart">
              {projectStats.map((project, index) => {
                const total = projectStats.reduce((sum, p) => sum + p.value, 0);
                const percentage = (project.value / total) * 100;
                return (
                  <div key={project.name} className="donut-item">
                    <div className="donut-segment">
                      <div
                        className="donut-circle"
                        style={{
                          background: `conic-gradient(${project.color} 0deg ${
                            animationStarted ? percentage * 3.6 : 0
                          }deg, transparent 0deg)`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      >
                        <div className="donut-inner">
                          <span className="donut-value">{project.value}</span>
                          <span className="donut-label">{project.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "radar":
        return (
          <div className="chart-container">
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="radar-canvas"
            />
          </div>
        );

      case "growth":
        return (
          <div className="chart-container">
            <div className="line-chart">
              <div className="chart-grid">
                {experienceData.map((data, index) => (
                  <div key={data.year} className="chart-point">
                    <div className="point-container">
                      <div
                        className="point-projects"
                        style={{
                          height: animationStarted
                            ? `${data.projects * 3}px`
                            : "0px",
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        <span className="point-value">{data.projects}</span>
                      </div>
                      <div
                        className="point-skills"
                        style={{
                          height: animationStarted
                            ? `${data.skills * 4}px`
                            : "0px",
                          animationDelay: `${index * 0.1 + 0.2}s`,
                        }}
                      >
                        <span className="point-value">{data.skills}</span>
                      </div>
                    </div>
                    <div className="point-year">{data.year}</div>
                  </div>
                ))}
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color projects"></div>
                  <span>Projects Completed</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color skills"></div>
                  <span>Skills Acquired</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="data-visualization" ref={sectionRef}>
      <div className="container">
        <div className="viz-header">
          <span className="viz-subtitle">Data Insights</span>
          <h1 className="viz-title">
            My <span className="highlight">Professional Analytics</span>
          </h1>
          <p className="viz-description">
            Interactive visualizations of my skills, projects, and professional
            growth
          </p>
        </div>

        <div className="viz-navigation">
          <button
            className={`viz-tab ${activeChart === "skills" ? "active" : ""}`}
            onClick={() => setActiveChart("skills")}
          >
            📊 Skills Analysis
          </button>
          <button
            className={`viz-tab ${activeChart === "projects" ? "active" : ""}`}
            onClick={() => setActiveChart("projects")}
          >
            🎯 Project Distribution
          </button>
          <button
            className={`viz-tab ${activeChart === "radar" ? "active" : ""}`}
            onClick={() => {
              setActiveChart("radar");
              setTimeout(drawRadarChart, 100);
            }}
          >
            🕸️ Skill Radar
          </button>
          <button
            className={`viz-tab ${activeChart === "growth" ? "active" : ""}`}
            onClick={() => setActiveChart("growth")}
          >
            📈 Growth Timeline
          </button>
        </div>

        <div className="viz-content">{renderChart()}</div>

        <div className="viz-stats">
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-number">70+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-number">30+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
