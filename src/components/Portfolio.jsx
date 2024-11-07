import react  from 'react';
import "../../src/App.css"
import workone from "../assets/work-1.png"
import worktwo from "../assets/work-2.png"
import workthree from "../assets/work-3.png"







const Portfolio=()=>{
    return(
        <div>

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
              <h3>ProDoc(AI)</h3>
              <p>
            ProDoc is a web app designed specifically for technical writers. It main purpose is to simplify the process of creating, formatting, and publishing technical Doc...
              </p>

              <a href="https://artificial-intelligence-y7y4-dn3vp0tfv.vercel.app">↗</a>
            </div>
          </div>
          <div className="work">
            <img src={workthree} />
            <div className="layer">
              <h3>Weather App</h3>
              <p> App that displays the current weather of a given location.</p>

              <a href="https://kingkrisman.github.io/weather_app/">↗</a>
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
