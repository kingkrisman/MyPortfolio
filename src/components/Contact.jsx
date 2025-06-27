import React, { useRef, useState } from "react";
import "../../src/App.css";

import gm from "../assets/pickgm.svg";
import ph from "../assets/phone.svg";
import x from "../assets/x.svg";
import inst from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";
import cv from "../assets/DanielsChristianCV.pdf";

const Contact = () => {
  const formRef = useRef();
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    formData.append("access_key", "c16e3213-6201-4e9b-b469-af949b193e07");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMsg("Message sent successfully! Thank you for contacting me.");
        formRef.current.reset();
      } else {
        console.log("Error", data);
        setMsg("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setMsg("There was an error sending your message. Please try again.");
    }

    setTimeout(() => {
      setMsg("");
    }, 5000);
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p className="ctn">
                <img src={gm} /> christiandaniels1104@gmail.com
              </p>
              <p className="ctn">
                <img src={ph} /> +234-9046058174
              </p>
              <div className="social-icons">
                <a href="https://x.com/kris10dani?s=11&t=SPbPMgEPNU1NC-8P9LusQg">
                  <img src={x} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/christian-daniels1104">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/kingkrisman">
                  <img src={git} alt="" />
                </a>
                <a href="https://www.instagram.com/christian_daniels11/profilecard/?igsh=eWZ2YWI0b2xmMmpv">
                  <img src={inst} alt="" />
                </a>
              </div>
              <a href={cv} download className="btn btn2">
                Download CV
              </a>
            </div>
            <div className="contact-right">
              <form
                name="submit-to-google-sheet"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>

              <span id="msg">{msg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
