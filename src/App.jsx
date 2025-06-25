import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Backbtn from "./Backbtn";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Certificates />
      <Contact />
      <Backbtn />
    </div>
  );
};
export default App;
