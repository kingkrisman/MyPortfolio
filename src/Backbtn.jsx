import React, { useEffect, useState } from "react";

const Backbtn = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollEndPos = bodyHeight - windowHeight;
      const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

      setScrollPercent(totalScrollPercent);

      
      if (totalScrollPercent > 5) {
        document.querySelector("[data-back-top-btn]").classList.add("show");
      } else {
        document.querySelector("[data-back-top-btn]").classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#top" className="back-top-btn" data-back-top-btn aria-label="back to top">
      {`${scrollPercent.toFixed(0)}%`}
    </a>
  );
};

export default Backbtn;
