import React from "react";
import "../App.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Main spinner */}
        <div className="spinner-ring">
          <div className="spinner-ring-inner"></div>
        </div>

        {/* Floating particles */}
        <div className="loader-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>

        {/* Loading text with typing effect */}
        <div className="loader-text">
          <span className="loading-letter">L</span>
          <span className="loading-letter">o</span>
          <span className="loading-letter">a</span>
          <span className="loading-letter">d</span>
          <span className="loading-letter">i</span>
          <span className="loading-letter">n</span>
          <span className="loading-letter">g</span>
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="loader-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
