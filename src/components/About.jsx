import React from 'react';
import "../../src/App.css";
import abt from "../assets/abt.png";

const About = () => {
  const tabLinks = React.useRef([]);
  const tabContents = React.useRef([]);

  const openTab = (tabName, event) => {
   
    tabLinks.current.forEach(link => link.classList.remove("active-link"));
    tabContents.current.forEach(content => content.classList.remove("active-tab"));

  
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
  };

  return (
    <div>
    
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={abt} alt="About" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p className="abt-para">
              A multifaceted Front-End Developer with a solid background in Computer Science. Specializing in Software Development at SAIL Innovative, he has honed his skills and developed a passion for crafting seamless user experiences.

As a skilled UI/UX Designer, Christian effectively balances functionality with aesthetics, bringing web pages to life. His expertise in building dynamic web applications is complemented by a strong command of JavaScript, React, HTML, and CSS, enabling him to create responsive and user-friendly interfaces.

In addition to his development and design skills, Christian is proficient in using WIX Studio and the WIX app for website development, showcasing his versatility across platforms. Always eager to embrace new challenges and expand his skill set, he remains a dynamic presence in the ever-evolving world of web development.

Beyond development and design, Christian is also adept at mobile phone repairs, handling both hardware and software issues with ease.
              </p>

              <div className="tab-titles">
                <p
                  className="tab-links active-link"
                  onClick={(event) => openTab('skills', event)}
                  ref={el => tabLinks.current.push(el)}
                >
                  Skills
                </p>
                <p
                  className="tab-links"
                  onClick={(event) => openTab('experience', event)}
                  ref={el => tabLinks.current.push(el)}
                >
                  Experience
                </p>
                <p
                  className="tab-links"
                  onClick={(event) => openTab('education', event)}
                  ref={el => tabLinks.current.push(el)}
                >
                  Education
                </p>
              </div>

              <div className="tab-contents active-tab" id="skills" ref={el => tabContents.current.push(el)}>
                <ul>
                  <li><span>UI/UX</span><br />Designing Web/app interfaces, User Research, prototyping, Wireframing and testing, Figma</li>
                  <li><span>Web Development</span><br />HTML, CSS, JavaScript, React, TypeScript, Node JS, Version Control/Git, Animations and Graphics, Page Load Optimization, API Integration, Package Manafer(npm)</li>
                  <li><span>WIX Studio Expert</span><br />Web Development and Design</li>
                  <li><span>Sales Funnel</span><br /> Creating and optimizing sales funnels</li>
                  <li><span>Content Writing</span><br /> Writing engaging content for websites and blogs</li>
                  <li><span>Website Manager</span><br />  Managing and maintaining websites</li>




                </ul>
              </div>
              <div className="tab-contents" id="experience" ref={el => tabContents.current.push(el)}>
                <ul>
                  <li><span>2023 - 2024</span><br />UI/UX Training</li>
                  <li><span>2024 - Current</span><br />Team Lead at WillyWillMar LTD.</li>
                  <li><span>2024 - Current</span><br />Website Manager at WillyWillMar LTD.</li>
                  <li><span>2024 - Current</span><br />Software Development at Sail Innovative Lab.</li>
                  <li><span>2023 - 2024</span><br />Computer science and Mathematics teacher</li>

                </ul>
              </div>
              <div className="tab-contents" id="education" ref={el => tabContents.current.push(el)}>
                <ul>
                  <li><span>2023</span><br />Ordinary National Diploma in Computer Science at Lagos State Polytechnic</li>
                  <li><span>Ongoing</span><br />Certificate in Software Development at SAIL LAB</li>
                  <li><span>2024</span><br />Certificate in UI/UX Design</li>
                  <li><span>2021</span><br />Certificate in Phone Hardware and Software Repair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
