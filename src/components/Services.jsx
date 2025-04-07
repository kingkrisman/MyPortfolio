import react  from 'react';
import "../../src/App.css"
import webde from "../assets/webDe.svg"
import fig from "../assets/figma.svg"
import fr from "../assets/front-end.svg"





const Services=()=>{
    return(
        <div>
   


<div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
          <img src={webde} className="sev"/>
            <h2>Web Design</h2>
            <p className="para">
              I specialize in creating visually stunning, user-friendly websites
              that deliver seamless user experiences. With a focus on responsive
              design, I ensure your website looks and performs beautifully
              across all devices. </p>
           
          </div>
          <div>
          <img src={fig}  className="sev"/>
            <h2>UI/UX Design</h2>
            <p className="para">
              I offer comprehensive UI/UX design services that prioritize the
              user experience while delivering visually engaging interfaces. My
              process involves deep research into user behavior to create
              intuitive, easy-to-navigate designs that improve engagement and
              satisfaction. 
            </p>
          
          </div>
          <div>
          <img src={fr}  className="sev"/>
            <h2>Front-End</h2>
            <p className="para">
              I provide top-tier front-end development services, bringing
              designs to life with clean, efficient code. Using the latest
              technologies like JavaScript, React, HTML, and CSS, I build
              responsive, fast-loading websites that deliver an exceptional user
              experience on any device.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    
        </div>
    )
}
export default Services;

