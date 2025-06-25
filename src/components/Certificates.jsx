import React from "react";
import "../App.css";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Frontend Web Development Certificate",
      organization: "Tech Academy",
      date: "2023",
      description:
        "Comprehensive course covering HTML, CSS, JavaScript, React, and modern web development practices.",
      image:
        "https://res.cloudinary.com/duycrcary/image/upload/v1743982914/Untitled_design_27_nqdwer.png", // Placeholder
      link: "/src/assets/DanielsChristianCV.pdf",
    },
    {
      id: 2,
      title: "JavaScript Certification",
      organization: "Code Institute",
      date: "2023",
      description:
        "Advanced JavaScript programming including ES6+, async programming, and modern frameworks.",
      image:
        "https://res.cloudinary.com/duycrcary/image/upload/v1743982908/Untitled_design_17_zmvmle.png", // Placeholder
      link: "/src/assets/my-cv.pdf",
    },
  ];

  return (
    <div id="certificates">
      <div className="container">
        <h1 className="sub-title">My Certificates</h1>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay">
                  <h3>{certificate.title}</h3>
                  <p className="organization">{certificate.organization}</p>
                  <p className="date">{certificate.date}</p>
                  <p className="description">{certificate.description}</p>
                  <div className="certificate-actions">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-btn"
                    >
                      📜 View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certificates-note">
          <p>
            🎓 These certificates represent my commitment to continuous learning
            and professional development in web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
