import React, { useEffect, useRef, useState } from "react";

import "../../src/App.css";
import Typed from "typed.js";
import logo from "../assets/image00002.png";
import menu from "../assets/Sidebar.svg";
import exit from "../assets/exit.svg";

const Header = () => {
  const typedRef = useRef(null);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "UI/UX",
        "Video Graphic Design",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const opentab = (tabname) => {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
  };

  const openmenu = () => {
    document.getElementById("sidemenu").style.right = "0";
  };

  const closemenu = () => {
    document.getElementById("sidemenu").style.right = "-200px";
  };

  return (
    <div>
      <div id="header">
        <div className="container">
          <nav>
            <img src={logo} className="logo" alt="Logo" />
            <ul id="sidemenu">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <img
                src={exit}
                className="fa-solid fa-x"
                onClick={closemenu}
                alt="Close menu"
              />
            </ul>
            <img
              src={menu}
              className="fa-solid fa-bars"
              onClick={openmenu}
              alt="Open menu"
            />
          </nav>
          <div className="header-text">
            <div ref={typedRef} id="typed-output"></div>
            <h1>
              Hi, I'm 
              <span
                className="name-hover"
                onMouseEnter={() => setShowQuote(true)}
                onMouseLeave={() => setShowQuote(false)}
              >
                Christian
                {showQuote && (
                  <div className="quote-card">
                    <div className="quote-header">
                      <div className="quote-icon">
                        <span>💡</span>
                      </div>
                      <div className="quote-title">My Philosophy</div>
                    </div>
                    <div className="quote-body">
                      <p className="quote-text">
                        I always get the job done, you have the <br />idea,I can
                        bring it to life
                      </p>
                    </div>
                    <div className="quote-footer">
                      <div className="quote-signature">
                        <span className="signature-line"></span>
                        <span className="signature-text">
                           Christian Daniels
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </span>
              <br />
              Daniels From Nigeria
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
