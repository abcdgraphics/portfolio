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

function App() {
  const elementsRef = useRef([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const attribute = entry.target.getAttribute("data-name");
            setName(attribute);
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });
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
        </div>
      </main>
      <CreativeSection />
      <ThankyouSection />
    </>
  );
}

export default App;
