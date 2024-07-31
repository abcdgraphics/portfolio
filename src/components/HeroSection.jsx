import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "../libs/utils.ts";
import { FlipWords } from "./ui/FlipWords.tsx";

export default function HeroSection({ elementsRef }) {
  const words = ["Word 1", "Word 2", "Word 3", "Word 4", "Word 5"];
  return (
    <div
      data-name=""
      ref={(el) => (elementsRef.current[7] = el)}
      className="hero-section">
      <div className="hero-profile-row">
        <div>
          <div>A B C D</div>
          <div className="profile-name-design">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="profile-name">
            <span>AKHIL</span> <span>BANDARU</span> <span>CREATIVE</span>{" "}
            <span>DESIGNER</span>
          </div>
        </div>
        <div>
          <h1 className="portfolio-title">PORTFOLIO</h1>
          <div className="portfolio-title-design">
            <div></div>
            <div></div>
            <div></div>
            <div className="portfolio-timeline">
              <p>BORN – 03 NOV 1989</p>
              <p>2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-nav-row">
        <div className="flip-word-col">
          <p className="flip-word-heading">
            LOREM IPSUM <br />
            IS{" "}
            <FlipWords
              words={words}
              duration={2000}
              className="text-[#ed7d31]"
            />{" "}
            <br />
            DUMMY TEXT
          </p>
          <p className="flip-word-sub-heading">OF THE PRINTING</p>
        </div>
        <div className="navigation">
          <a href="#index">
            <div>
              <img src="/nav-arrow.svg" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
