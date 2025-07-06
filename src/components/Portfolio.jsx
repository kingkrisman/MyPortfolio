import React, { useState } from "react";
import "../../src/App.css";

const Portfolio = () => {
  // State to track if more work should be shown
  const [showMore, setShowMore] = useState(false);

  // Function to handle "See More" button click
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">
          {/* Default work items */}
          <div className="work">
            <img
              src="https://res.cloudinary.com/duycrcary/image/upload/v1743982914/Untitled_design_27_nqdwer.png"
              alt="Work 1"
            />



 <div className="layer">
              <h3>Da'Sayonce Real Estate</h3>
              <p>
               Leading development of complex web applications using modern tech stack. Specializing in React, Node.js, and cloud solutions.
              </p>
              <div className="link">
                <a href="https://www.dasayoncerealestate.com"> 🔗</a>{" "}
                <a href="https://github.com/kingkrisman/Builder-nova-sanctuary.git">🧑‍💻</a>
              </div>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/duycrcary/image/upload/v1751827612/WhatsApp_Image_2025-05-02_at_12.58.30_2c13b2e7_oouh2f.jpg"
              alt="Work 3"
            />


            
            <div className="layer">
              <h3>Redefine Gaming</h3>
              <p>
                I designed and developed a website that is visually appealing
                and eye catching with Gsap animations.
              </p>
              <div className="link">
                <a href="https://gaming-site-two.vercel.app/"> 🔗</a>{" "}
                <a href="https://github.com/kingkrisman/Gaming_Site.git">🧑‍💻</a>
              </div>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/duycrcary/image/upload/v1743982908/Untitled_design_17_zmvmle.png"
              alt="Work 4"
            />
           
            <div className="layer">
              <h3>Bank Dashboard</h3>
              <p>
                A modern, responsive bank dashboard interface designed to
                visualize financial data and manage user accounts.
              </p>
              <div className="link">
                <a href="https://kingkrisman.github.io/BankDashbord/"> 🔗</a>{" "}
                <a href="https://github.com/kingkrisman/BankDashbord.git">🧑‍💻</a>
              </div>
            </div>
          </div>

          {/* Additional work items shown when "See More" is clicked */}
          {showMore && (
            <>



            <div className="work">
              <h3>Drawing Canvas</h3>
              <p>
                An interactive web-based drawing application built with HTML5
                Canvas, JavaScript, and CSS. Users can draw freely, choose brush
                colors and sizes, clear the canvas, and download their artwork.
              </p>
              <div className="link">
                <a href="https://kingkrisman.github.io/DrawingDesk/"> 🔗</a>{" "}
                <a href="https://github.com/kingkrisman/DrawingDesk.git">🧑‍💻</a>
              </div>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/duycrcary/image/upload/v1743982910/Untitled_design_21_t82ric.png"
              alt="Work 3"
            />
            <div className="layer">



              
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743942403/work-7_yuttqp.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Netflix clone</h3>
                  <p>
                    A sleek, responsive video streaming platform inspired by
                    Netflix. it features dynamic movie listings, category
                    browsing, and video previews. This project demonstrates
                    frontend development, API integration, and interactive UI
                    design.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/Netflix_clone/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/Netflix_clone.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>

              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982913/Untitled_design_25_gwmihb.png"
                  alt="Work 2"
                />
                <div className="layer">
                  <h3>Amazon Clone</h3>
                  <p>
                    It includes product listings, a shopping cart, and a clean,
                    intuitive layout. Designed to demonstrate proficiency in
                    frontend development, component-based architecture, and
                    responsive design.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/amazon_clone/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/amazon_clone.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982899/Untitled_design_5_o6tlhk.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Solar Webpage</h3>
                  <p>
                    Built using HTML, CSS, and JavaScript. It features smooth
                    scroll animations, responsive design.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/Solar/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/Solar.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982897/snapX_yitvik.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>SnapX</h3>
                  <p>
                    A dynamic and responsive social media platform built with
                    React, Tailwind CSS, and Firebase. Users can create posts,
                    like, comment, and follow others in real-time. Designed to
                    mimic core social media functionalities, this project
                    showcases state management, user authentication, and
                    real-time database integration.
                  </p>
                  <div className="link">
                    <a href="https://snap-x-smoky.vercel.app/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/SnapX.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982897/note-ify_qvn1qf.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Note-Ify</h3>
                  <p>
                    Features include note search, color-coded categories, and
                    auto-saving. This project demonstrates CRUD functionality,
                    responsive design, and efficient state handling.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/Note-ify1/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/Note-ify1.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982903/Untitled_design_11_hxjyho.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Speech-to-Text</h3>
                  <p>
                    A real-time voice recognition app that converts spoken words
                    into text using the Web Speech API. Built with JavaScript,
                    HTML, and CSS, it features live transcription,
                    copy-to-clipboard functionality, and a clean, responsive
                    interface. This project highlights working with browser APIs
                    and interactive UI development.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/speech-to-text/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/speech-to-text.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982904/Untitled_design_12_ugl72m.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Note-ify Share</h3>
                  <p>A peer-to-peer file sharing web app inspired by Xender.</p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/FileTranfer-xender-type-clone-/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/FileTranfer-xender-type-clone-.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982903/Untitled_design_9_yilj10.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Evergreen</h3>
                  <p>
                    A professional and responsive website designed for a school,
                    built using HTML, CSS, and JavaScript.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/evergreen/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/evergreen.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982916/Untitled_design_dgv7sm.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Tic-Tac-Toe</h3>
                  <p>
                    A simple and interactive web-based Tic-Tac-Toe game built
                    with HTML, CSS, and JavaScript. It features a two-player
                    mode, a reset button, and basic win/loss detection. This
                    project showcases skills in DOM manipulation, game logic,
                    and user interactivity.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/tiktactoe/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/tiktactoe.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982914/Untitled_design_29_woax3l.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Dream Journal</h3>
                  <p>
                    Users can log, edit, and categorize their dreams, with a
                    search feature to revisit past entries. This project
                    demonstrates user input handling, state management, and data
                    persistence in a clean, user-friendly interface.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/dream-journal/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/dream-journal.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982911/Untitled_design_23_eidrys.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Phone Number Tracker</h3>
                  <p>
                    A web app that allows users to track and locate phone
                    numbers using an API, built with JavaScript, HTML, and CSS.
                    It provides details like the location, carrier, and line
                    type of a given phone number. This project demonstrates API
                    integration, handling user input, and displaying dynamic
                    data in a user-friendly interface.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/PhoneNumberTracker/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/PhoneNumberTracker.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982909/Untitled_design_20_opoeiy.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Health Track</h3>
                  <p>
                    It displays key metrics like heart rate, steps, calories,
                    and sleep data using interactive charts and widgets. This
                    project highlights data visualization, component-based
                    architecture, and responsive UI design tailored for wellness
                    apps.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/HealthDashbord/">
                      {" "}
                      🔗
                    </a>
                    <a href="https://github.com/kingkrisman/HealthDashbord.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982901/Untitled_design_7_p1aeem.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Manhattan Barber Shop</h3>
                  <p>
                    A stylish and responsive website for a barbershop, built
                    using HTML, CSS, and JavaScript. It features service
                    listings, pricing, barber profiles, image gallery, and an
                    online booking form. Designed with a modern aesthetic, this
                    project showcases clean UI design, layout structuring, and
                    user-focused navigation.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/Manhattan-barber-shop/">
                      {" "}
                      🔗
                    </a>
                    <a href="https://github.com/kingkrisman/Manhattan-barber-shop.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982897/Untitled_design_1_ctsjd1.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Note FlashCard Gen And Summarizer</h3>
                  <p>
                    An intelligent study tool that converts notes into
                    flashcards and concise summaries using AI.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/Note-summarizer-flashcardGen/">
                      {" "}
                      🔗
                    </a>
                    <a href="https://github.com/kingkrisman/Note-summarizer-flashcardGen.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>

              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743942402/work-4_wbjwps.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3> ProDoc(AI)</h3>
                  <p>
                    ProDoc is a web app designed specifically for technical
                    writers. It main purpose is to simplify the process of
                    creating, formatting, and publishing technical Doc...
                  </p>
                  <div className="link">
                    <a href="https://artificial-intelligence-y7y4-dn3vp0tfv.vercel.app">
                      {" "}
                      ���
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/Artificial_Intelligence.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982906/Untitled_design_15_qtlm3p.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>OCR</h3>
                  <p>
                    A web-based Optical Character Recognition tool that extracts
                    text from uploaded images using JavaScript and the
                    Tesseract.js library. Users can upload images or
                    drag-and-drop files to instantly convert printed or
                    handwritten text into editable digital format. This project
                    demonstrates image processing, API integration, and
                    real-time text rendering in a clean UI.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/OCR/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/OCR.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982900/Untitled_design_6_ybbbj2.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Gym Page</h3>
                  <p>
                    A modern and responsive website for a fitness center, built
                    with HTML, CSS, and JavaScript. It features sections for
                    classes, trainers, pricing plans, testimonials, and a
                    contact form. Designed with an energetic aesthetic, this
                    project highlights frontend development, responsive layout
                    design, and user-focused navigation for health and wellness
                    services.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/gym-page/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/gym-page.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982900/Untitled_design_4_epk7rb.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Time Parallex </h3>
                  <p>
                    A visually engaging webpage featuring a smooth parallax
                    scrolling effect that represents the passage of time. Built
                    with HTML, CSS, and JavaScript, it layers background
                    elements to create depth and motion as users scroll. This
                    project showcases advanced CSS animations, scroll-based
                    interactivity, and creative storytelling through design.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/time-design/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/time-design.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982899/Untitled_design_2_zr4f06.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Techco</h3>
                  <p>
                    This project demonstrates clean UI/UX design, responsive
                    layouts, and a corporate aesthetic tailored for the tech
                    industry.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/techco/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/techco.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982898/s_vgdwxw.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Math Canvas</h3>
                  <p>
                    An interactive web-based canvas that allows users to draw
                    and visualize mathematical equations, shapes, and graphs.
                    Built using HTML5 Canvas, JavaScript, and MathJax (or
                    similar), it supports freehand drawing, equation rendering,
                    and coordinate plotting. This project demonstrates creative
                    UI design, math integration, and canvas API usage.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/MathCanvas/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/MathCanvas.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982908/Untitled_design_19_w4iita.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Football Score Predictor</h3>
                  <p>
                    A web app that predicts football match outcomes (win, lose,
                    or draw) based on team stats and historical data.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/FootballScorePredictor/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/FootballScorePredictor.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982916/wanderlust_fsjigb.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Wander Lust</h3>
                  <p>
                    Designed to inspire wanderlust, this project demonstrates
                    clean UI design, intuitive navigation, and effective content
                    organization for a travel service.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/travel-agency/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/travel-agency.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982914/Untitled_design_26_vajl5z.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>NFT Marketplace</h3>
                  <p>
                    A modern and interactive webpage showcasing NFT collections,
                    built with HTML, CSS, and JavaScript and Gsap Animation.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/nft/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/nft.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743942402/work-5_b9cokf.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Fitness Page</h3>
                  <p>
                    The design focuses on motivating users with clean layouts,
                    dynamic visuals, and easy navigation for a healthy
                    lifestyle.
                  </p>
                  <div className="link">
                    <a href="https://fitness-yoga-nu.vercel.app/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/Fitness_Yoga.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982897/danielsnet_yejrcf.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Daniels Network</h3>
                  <p>
                    This project demonstrates clean UI/UX design, responsive
                    layouts, and a corporate aesthetic tailored for the tech
                    industry.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/Daniels-Network/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="hhttps://github.com/kingkrisman/Daniels-Network.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982901/Untitled_design_8_ttrwzc.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Blog Hero page</h3>
                  <p>
                    This project demonstrates clean UI/UX design, responsive
                    layouts.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/blog-hero/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/blog-hero.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982900/Untitled_design_3_y3pagk.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Ap Estate</h3>
                  <p>
                    This project demonstrates clean UI/UX design, responsive
                    layouts.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/ap-estate/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/ap-estate.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982904/Untitled_design_13_kauis5.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>FolderFlow</h3>
                  <p>
                    A web-based file management system that allows users to
                    upload, organize, and manage files through a simple,
                    intuitive interface.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/file-manager-adv/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/file-manager-adv.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982904/Untitled_design_14_mmnx1r.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>File Manager</h3>
                  <p>
                    A web-based file management system that allows users to
                    upload, organize, and manage files through a simple,
                    intuitive interface.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/FileManager-simple-/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/FileManager-simple-.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982916/Untitled_design_28_vxiutc.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Lasu</h3>
                  <p>
                    A professional and responsive website designed for a school,
                    built using HTML, CSS, and JavaScript.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/lasu/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/lasu.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982907/Untitled_design_16_qdygdk.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Task Manager</h3>
                  <p>
                    A productivity-focused web app designed to help users
                    organize and track their tasks.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/TaskManager/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/TaskManager.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982908/Untitled_design_18_agpvdb.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Voice Recorder</h3>
                  <p>
                    A simple and user-friendly web app that allows users to
                    record, play back, and save audio files directly in their
                    browser. Built with JavaScript, HTML5, and the Web Audio
                    API, it features a clean interface, audio controls, and the
                    ability to download recorded files. This project
                    demonstrates real-time audio processing and client-side data
                    storage.
                  </p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/voiceRecorder/">
                      {" "}
                      🔗
                    </a>{" "}
                    <a href="https://github.com/kingkrisman/voiceRecorder.git">
                      🧑‍💻
                    </a>
                  </div>
                </div>
              </div>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/duycrcary/image/upload/v1743982917/Untitled_design_30_x73y1d.png"
                  alt="Work 5"
                />
                <div className="layer">
                  <h3>Map</h3>
                  <p>An interactive map application built with JavaScript.</p>
                  <div className="link">
                    <a href="https://kingkrisman.github.io/map/"> 🔗</a>{" "}
                    <a href="https://github.com/kingkrisman/map.git">🧑‍💻</a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Toggle button for See More/See Less */}
        <button onClick={toggleShowMore} className="btn">
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
