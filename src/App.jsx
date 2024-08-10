/* eslint-disable react/prop-types */
import "./output.css";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import ThankyouSection from "./components/ThankyouSection";
import HeroSection from "./components/HeroSection";
import IndexSection from "./components/IndexSection";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import CreativeSection from "./components/CreativeSection";
import CookieConsent from "./components/CookieConsent";
import Cursor from "./components/Cursor";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Animate from "./components/animate";

function App() {
  const elementsRef = useRef([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 400) {
            const attribute = element.getAttribute("data-name");
            setName(attribute);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main>
        <Sidebar name={name} />
        <div className="scrollable-main">
          <HeroSection elementsRef={elementsRef} />
          <IndexSection elementsRef={elementsRef} />
          <IntroSection elementsRef={elementsRef} />
          <ProjectsSection elementsRef={elementsRef} />
          <Connect elementsRef={elementsRef} />
          <Contact elementsRef={elementsRef} />
          <Social elementsRef={elementsRef} />
        </div>
      </main>
      <CreativeSection />
      <ThankyouSection />
      <CookieConsent />
      <Cursor />
      <Animate />
    </>
  );
}

export default App;
