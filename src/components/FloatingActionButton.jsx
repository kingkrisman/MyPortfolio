import React, { useState } from 'react';
import "../../src/App.css";
import 'https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css';

const FloatingActionButton = () => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <section className="fab-container">
      <button className="fab-main" onClick={toggleButtons}>
        {showButtons ? <span>&times;</span> : <span>+</span>}
      </button>
      <div className={`fab-buttons ${showButtons ? 'active' : ''}`}>
        <button className="fab-link">
          <i className="ti ti-link"></i>
        </button>
        <button className="fab-code">
          <i className="ti ti-code"></i>
        </button>
      </div>
    </section>
  );
};

export default FloatingActionButton;
