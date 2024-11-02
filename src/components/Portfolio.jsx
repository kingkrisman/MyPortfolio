import react  from 'react';
import "../../src/App.css"
import workone from "../assets/work-1.png"
import worktwo from "../assets/work-2.png"
import workthree from "../assets/work-3.png"







const Portfolio=()=>{
    return(
        <div>
{/* <!--------------portfolio------------------> */}
<div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">
          <div className="work">
            <img src={workone} />
            <div className="layer">
              <h3>Oil company</h3>
              <p>
                I designed and developed a website that is easy to use and
                visually appealing.
              </p>
              <a href="https://www.willywillmar.com"
                >↗</a>
            </div>
          </div>
          <div className="work">
            <img src={worktwo} />
            <div className="layer">
              <h3>Kuda Clone</h3>
              <p>
              Working on a Kuda Clone.
              </p>

              <a href="https://kuda-teal.vercel.app/">↗</a>
            </div>
          </div>
          <div className="work">
            <img src={workthree} />
            <div className="layer">
              <h3> Food delivary App</h3>
              <p>
                Design of a Food delivary Mobile app for a startup
                company.
              </p>
              <a href="https://www.figma.com/design/rTAL74rGqvbjszEAD5KBzR/Untitled?node-id=82-227&t=goRo4Mv6SQSyO8EI-1">↗</a>
            </div>
          </div>
        </div>
        <a href="https://github.com/kingkrisman" className="btn">See More</a>
      </div>
    </div>
        </div>
    )
}
export default Portfolio;
