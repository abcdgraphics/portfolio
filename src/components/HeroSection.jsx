export default function HeroSection({ elementsRef }) {
  return (
    <div
      data-name=""
      ref={(el) => (elementsRef.current[0] = el)}
      className="hero-section">
      <div className="hero-profile-row">
        <div>
          <div className="profile-name-design">
            <div className="round">
              <div></div>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div>
          <h1 className="portfolio-title">
            AKHIL BANDARU <br /> CREATIVE DESIGNER
          </h1>
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
          <h2 className="flip-word-heading">
            LET THE
            <br />
            MAGIC UNFOLD!
          </h2>
          <p className="flip-word-sub-heading">HELLO VISITOR!</p>
          <p className="flip-word-content">
            Howdy, my friend <i>(yes, I'll call you that henceforth).</i> Thanks
            for stopping by my website, well, this is actually much more than
            just a website.
          </p>
          <p className="flip-word-content">
            Consider this to be a portal{" "}
            <i>(you guessed it, I've watched too many sci-fi movies)</i> to dive
            into my world. A world of design possibilities, a place of magic,
            and in this realm, I'm the magician with the magic wand{" "}
            <i>(or a ring, your imaginative choice)!</i>
          </p>
        </div>
        {/* <div className="navigation">
          <a href="#index">
            <div>
              <img src="/nav-arrow.svg" />
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
}
