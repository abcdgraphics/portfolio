export default function HeroSection({ elementsRef }) {
  return (
    <div
      data-name=""
      ref={(el) => (elementsRef.current[7] = el)}
      className="hero-section">
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
      <div className="navigation">
        <a href="#index">
          <div>
            <img src="/nav-arrow.svg" />
          </div>
        </a>
      </div>
    </div>
  );
}
