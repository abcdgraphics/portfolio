export default function WebProjects({ elementsRef }) {
  return (
    <div
      id="websites"
      data-name="WEBSITES"
      ref={(el) => (elementsRef.current[3] = el)}
      className="projects-showcase">
      <div>
        <div className="project-image-container">
          <img className="project-image" src="/projects/memuvo.jpg" />
          <div className="project-navigation">
            <a href="/">
              <div>
                <img src="/nav-arrow.svg" />
              </div>
            </a>
          </div>
        </div>
        <div className="project-details">
          <a href="/"> VISIT</a>
          <p className="project-title">Memuvo Grocery Website</p>
          <p className="project-brief">Fastest Grocery Delivery in JLT Dubai</p>
          <p className="project-category">Design & Development</p>
        </div>
      </div>
      <div>
        <div className="project-image-container">
          <img className="project-image" src="/projects/quesflow.jpg" />
          <div className="project-navigation">
            <a href="/">
              <div>
                <img src="/nav-arrow.svg" />
              </div>
            </a>
          </div>
        </div>
        <div className="project-details">
          <a href="/"> VISIT</a>
          <p className="project-title">Quesflow</p>
          <p className="project-brief">Coding Unlocks a World of Wonders!</p>
          <p className="project-category">Design Only</p>
        </div>
      </div>
      <div>
        <div className="project-image-container">
          <img className="project-image" src="/projects/jayabheri.jpg" />
          <div className="project-navigation">
            <a href="/">
              <div>
                <img src="/nav-arrow.svg" />
              </div>
            </a>
          </div>
        </div>
        <div className="project-details">
          <a href="/"> VISIT</a>
          <p className="project-title">Jayabheri</p>
          <p className="project-brief">Blueprinting Future Landmarks</p>
          <p className="project-category">Design Only</p>
        </div>
      </div>
      <div>
        <div className="project-image-container">
          <img className="project-image" src="/projects/qcentrio.jpg" />
          <div className="project-navigation">
            <a href="/">
              <div>
                <img src="/nav-arrow.svg" />
              </div>
            </a>
          </div>
        </div>
        <div className="project-details">
          <a href="/"> VISIT</a>
          <p className="project-title">Qcentrio Inc.</p>
          <p className="project-brief">
            Pioneering E2E Business Transformation (PASS : 4298)
          </p>
          <p className="project-category">Design & Development</p>
        </div>
      </div>
    </div>
  );
}
