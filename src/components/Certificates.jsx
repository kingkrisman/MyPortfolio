import React from "react";
import "../App.css";
import certificatePdf1 from "../assets/DanielsChristianCV.pdf";
import certificatePdf2 from "../assets/my-cv.pdf";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Development Certificate",
      organization: "SAIL Innovation Lab",
      date: "2024-2025",
      description:
        "Comprehensive course covering HTML, CSS, JavaScript, React, and modern web development practices.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa60f75f82e1740d2898e900ca0249b8c%2F5cbb746eddd241d5b223b1a88c20b521", // Placeholder
      link: certificatePdf1,
    },
    {
      id: 2,
      title: "Computer Science Certification",
      organization: "Lagos State Polytechnic",
      date: "2023",
      description:
        "study of computers and computational systems, focusing on the theory, design, development, and application of software and hardware. It encompasses areas like algorithms, data structures, programming, artificial intelligence, machine learning, cybersecurity, databases, networking, and software engineering",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa60f75f82e1740d2898e900ca0249b8c%2Ffaaf7aa403b34313b84ebea4e6d6e01f", // Placeholder
      link: certificatePdf2,
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
