import react  from 'react';
import "../../src/App.css"
import webde from "../assets/webDe.svg"
import fig from "../assets/figma.svg"
import fr from "../assets/front-end.svg"





const Services=()=>{
    return(
        <div>
   
{/* 
    <!-------services---------> */}

<div id="services">
      <div class="container">
        <h1 class="sub-title">My Services</h1>
        <div class="services-list">
          <div>
          <img src={webde} className="sev"/>
            <h2>Web Design</h2>
            <p class="para">
              I specialize in creating visually stunning, user-friendly websites
              that deliver seamless user experiences. With a focus on responsive
              design, I ensure your website looks and performs beautifully
              across all devices. </p>
            <a href="#">Learn more</a>
          </div>
          <div>
          <img src={fig}  className="sev"/>
            <h2>UI/UX Design</h2>
            <p class="para">
              I offer comprehensive UI/UX design services that prioritize the
              user experience while delivering visually engaging interfaces. My
              process involves deep research into user behavior to create
              intuitive, easy-to-navigate designs that improve engagement and
              satisfaction. 
            </p>
            <a href="#">Learn more</a>
          </div>
          <div>
          <img src={fr}  className="sev"/>
            <h2>Front-End</h2>
            <p class="para">
              I provide top-tier front-end development services, bringing
              designs to life with clean, efficient code. Using the latest
              technologies like JavaScript, React, HTML, and CSS, I build
              responsive, fast-loading websites that deliver an exceptional user
              experience on any device.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    
        </div>
    )
}
export default Services;

