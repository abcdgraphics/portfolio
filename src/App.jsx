/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./App.css";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 } // Adjust threshold as needed
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });
  }, []);

  return (
    <>
      <main>
        <div className="fixed-side-bar">
          <div>
            <img className="logo" src="/logo/logo-main.svg" />
            <p className="side-bar-dynamic-name">{name}</p>
            <img className="logo" src="/logo/abcd-logo_orange.svg"></img>
          </div>
        </div>
        <div className="scrollable-main">
          <HeroSection elementsRef={elementsRef} />
          <IndexSection elementsRef={elementsRef} />
          <IntroSection elementsRef={elementsRef} />
          <Projects elementsRef={elementsRef} />
        </div>
      </main>
      <div id="contact" className="thankyou-section">
        <h2>
          THANK <br /> YOU
        </h2>
        <img src="/smile.svg" />
        <div className="thankyou-details">
          <p>+91 970 125 3249</p>
          <p>akhilbandaru@gmail.com</p>
          <p>www.abcd.graphics</p>
        </div>
      </div>
    </>
  );
}

function HeroSection({ elementsRef }) {
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

function IndexSection({ elementsRef }) {
  return (
    <div
      id="index"
      data-name=""
      ref={(el) => (elementsRef.current[6] = el)}
      className="index-container">
      <div className="index">
        <a href="#intro">
          <img src="/index-icons/intro.svg" />
          <p>INTRO</p>
        </a>
      </div>
      <div className="index">
        <a href="#web">
          <img src="/index-icons/web.svg" />
          <p>WEB</p>
        </a>
      </div>
      <div className="index">
        <a href="#social">
          <img src="/index-icons/social.svg" />
          <p>SOCIAL</p>
        </a>
      </div>
      <div className="index">
        <a href="#print">
          <img src="/index-icons/print.svg" />
          <p>PRINT</p>
        </a>
      </div>
      <div className="index">
        <a href="#brand">
          <img src="/index-icons/brand.svg" />
          <p>BRAND</p>
        </a>
      </div>
      <div className="index">
        <a href="#extra">
          <img src="/index-icons/extra.svg" />
          <p>EXTRA</p>
        </a>
      </div>
      <div className="index">
        <a href="#contact">
          <img src="/index-icons/contact.svg" />
          <p>CONTACT</p>
        </a>
      </div>
    </div>
  );
}

function IntroSection({ elementsRef }) {
  return (
    <div
      id="intro"
      data-name="INTRO"
      ref={(el) => (elementsRef.current[0] = el)}
      className="intro-container">
      <div className="intro-profile">
        <img className="profile-pic" src="/profile.png" />
        <p className="intro-profile-name">AKHIL BANDARU</p>
        <p className="age">34 YEARS</p>
        <div className="divider"></div>
        <div className="social-links">
          <div className="link">
            <img src="/social-icons/facebook.svg" />
          </div>
          <div className="link">
            <img src="/social-icons/behance.svg" />
          </div>
          <div className="link">
            <img src="/social-icons/linkedin.svg" />
          </div>
          <div className="link">
            <img src="/social-icons/instagram.svg" />
          </div>
        </div>
        <p className="phone">
          <a href="tel:+919701253249">+91 970 125 3249</a>
        </p>
        <p className="email">
          <a href="mailto:akhilbandaru@gmail.com">akhilbandaru@gmail.com</a>
        </p>
        <Link href="/" className="website">
          www.abcd.graphics
        </Link>
      </div>
      <div className="intro-details">
        <div className="career-section">
          <div className="summary">
            <h2 className="summary-heading">CAREER SUMMARY</h2>
            <p className="summary-desc">
              A seasoned web and graphic designer with over{" "}
              <span>10+ years of experience</span> in creating compelling
              digital and print media. Proven ability to lead design teams and
              manage projects from conception to completion. Skilled in multiple
              design tools and technologies with a keen ability to adapt to new
              trends and technologies.
            </p>
          </div>
          <div className="flow-chart">
            <div className="flow-chart-card">
              <div className="flow-chart-card-column-1">
                <div className="flow-chart-year">2024</div>
                <div className="decor">
                  <div></div>
                </div>
              </div>
              <div className="flow-chart-num">01</div>
              <div className="flow-chart-card-details">
                <h3>
                  R&D Engineer, Innovation Labs <span> [ AT PRESENT ]</span>
                </h3>
                <p>Tredence Data Analytics Solutions Pvt Ltd</p>
                <ul>
                  <li>
                    Spearheaded research and development initiatives to
                    integrate cutting-edge design technologies into client
                    projects.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to improve product
                    design processes, increasing efficiency by 20%.
                  </li>
                  <li>
                    Developed innovative solutions for complex design
                    challenges, leading to a 15% increase in customer
                    satisfaction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="flow-chart-card-column-1">
                <div className="flow-chart-year">2020</div>
                <div className="decor">
                  <div></div>
                </div>
              </div>
              <div className="flow-chart-num">02</div>
              <div className="flow-chart-card-details">
                <h3>
                  Associate Manager – Graphic Designer{" "}
                  <span> [ 3.6 YEARS ]</span>
                </h3>
                <p>Tredence Data Analytics Solutions Pvt Ltd</p>
                <ul>
                  <li>
                    Led the design department, overseeing all graphic and web
                    design projects.
                  </li>
                  <li>
                    Managed a team of designers, presentation specialists, and
                    an SEO expert to deliver high-quality design solutions.
                  </li>
                  <li>
                    Enhanced brand consistency across all digital and print
                    media, improving brand recognition in key markets.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="flow-chart-card-column-1">
                <div className="flow-chart-year">2019</div>
                <div className="decor">
                  <div></div>
                </div>
              </div>
              <div className="flow-chart-num">03</div>
              <div className="flow-chart-card-details">
                <h3>
                  Specialist in Web Design & Development{" "}
                  <span> [ 4 MONTHS ]</span>
                </h3>
                <p>Jiffle Technologies Pvt. Ltd.</p>
                <ul>
                  <li>
                    Developed and implemented website designs that increased
                    user engagement by over 30%.
                  </li>
                  <li>
                    Streamlined the development process using CMS tools,
                    reducing project completion times by 25%.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="flow-chart-card-column-1">
                <div className="flow-chart-year">2018</div>
                <div className="decor">
                  <div></div>
                </div>
              </div>
              <div className="flow-chart-num">04</div>
              <div className="flow-chart-card-details">
                <h3>
                  Webmaster <span> [ 1.4 YEARS ]</span>
                </h3>
                <p>Kalki Communication Technology Pvt. Ltd.</p>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="flow-chart-card-column-1">
                <div className="flow-chart-year">2013</div>
              </div>
              <div className="flow-chart-num">05</div>
              <div className="flow-chart-card-details">
                <h3>
                  Technical Trainer <span> [ 5+ YEARS ]</span>
                </h3>
                <p>Visakha Fire And Security Services.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="training-section">
          <div className="summary">
            <h2 className="summary-heading">TRAINING EXPERIENCE</h2>
            <p className="summary-desc">
              I specialize in coaching{" "}
              <span>
                corporate professionals and students who are passionate about
                graphic and web design,
              </span>{" "}
              proficient in various CMS software, and adept in the Adobe Suite.
              My training program culminates in the prestigious{" "}
              <span>JNNYCET certification,</span> validating their expertise and
              empowering them for success in the dynamic fields of design and
              technology.
            </p>
          </div>
          <div className="flow-chart">
            <div className="flow-chart-card">
              <div className="flow-chart-card-column-1">
                <div className="flow-chart-year">2013</div>
                <div className="decor">
                  <div></div>
                </div>
              </div>
              <div className="flow-chart-num">01</div>
              <div className="flow-chart-card-details">
                <h3>
                  PGDM – Game Designing
                  <span> [ TEXTURING & MODELING ]</span>
                </h3>
                <p>Image College Of Arts & Animation Technology.</p>
                <ul>
                  <li>
                    Led the development of games featuring low polygon models,
                    focusing on optimizing visual impact without compromising
                    performance.
                  </li>
                  <li>
                    Utilized Hammer Editor, UDK, and Maya to craft and texture
                    3D models and environments meticulously. My expertise in
                    these tools enabled the creation of rich, immersive game
                    levels.
                  </li>
                  <li>
                    Specialized in texturing, applying various techniques to
                    enhance visual aesthetics and realism while maintaining
                    efficient resource use. This skill has been crucial in
                    producing high-quality designs that are both functional and
                    engaging.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="flow-chart-card-column-1">
                <div className="flow-chart-year">2011</div>
                <div className="decor">
                  <div></div>
                </div>
                <div className="flow-chart-year">2007</div>
              </div>
              <div className="flow-chart-num">02</div>
              <div className="flow-chart-card-details">
                <h3>B. Tech - Information Technology</h3>
                <p>Avanthi College Of Engineering And Technology.</p>
                <ul>
                  <li>
                    Acquired comprehensive coding skills in C and C++, focusing
                    on building strong foundational programming knowledge.
                  </li>
                  <li>
                    Gained practical experience in networking, learning about
                    the configuration and management of networks along with
                    essential computer skills which form the backbone of my
                    technical expertise.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-set">
          <h2>SKILL SET</h2>
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>SKILL SETS</th>
                <th>TOOLS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Designing Softwares</td>
                <td>Figma, Adobe XD, Illustrator, Photoshop, and InDesign.</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Development</td>
                <td>
                  HTML 5, CSS 3, Bootstrap 5, JavaScript, React JS, and Next JS.
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Animation</td>
                <td>Adobe Premiere Pro, After Effects</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Frontend CMS Tools</td>
                <td>
                  WordPress, Drupal, Opencart, Martjack, Magento, Evolution
                  Script and Datalife Engine
                </td>
              </tr>
              <tr>
                <th>5</th>
                <td>Marketing Platforms</td>
                <td>HubSpot and Zoho</td>
              </tr>
              <tr>
                <th>6</th>
                <td>SEO and Analytics</td>
                <td>
                  Google Analytics 4, Google Web Console, Ahref, SEMrush, Moz
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Projects({ elementsRef }) {
  return (
    <div className="projects-section">
      <div className="projets-main-heading">
        <h2>RECENT PROJECTS</h2>
      </div>
      <div
        id="web"
        data-name="WEB"
        ref={(el) => (elementsRef.current[1] = el)}
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
            <p className="project-brief">
              Fastest Grocery Delivery in JLT Dubai
            </p>
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
      <div
        id="social"
        data-name="SOCIAL"
        ref={(el) => (elementsRef.current[2] = el)}
        className="social-projects-showcase">
        <img src="/projects/creative-1.jpg" />
        <img src="/projects/creative-2.jpg" />
        <img src="/projects/creative-3.jpg" />
        <img src="/projects/creative-4.jpg" />
        <img src="/projects/creative-5.jpg" />
        <img src="/projects/creative-6.jpg" />
        <img src="/projects/creative-7.jpg" />
        <img src="/projects/creative-8.jpg" />
      </div>
      <div
        id="print"
        data-name="PRINT"
        ref={(el) => (elementsRef.current[3] = el)}
        className="print-projects-showcase">
        <img src="/projects/print-1.png" />
        <img src="/projects/print-2.png" />
        <img src="/projects/print-3.png" />
        <img src="/projects/print-4.png" />
        <img src="/projects/print-5.png" />
        <img src="/projects/print-6.png" />
        <img src="/projects/print-7.png" />
        <img src="/projects/print-8.png" />
      </div>
      <div
        id="brand"
        data-name="BRAND"
        ref={(el) => (elementsRef.current[4] = el)}
        className="brand-projects-showcase">
        <img src="/projects/brand-1.png" />
        <img src="/projects/brand-2.jpg" />
        <img src="/projects/brand-3.png" />
        <img src="/projects/brand-4.png" />
        <img src="/projects/brand-5.png" />
        <img src="/projects/brand-6.png" />
      </div>
      <div
        id="extra"
        data-name="PACKAGING"
        ref={(el) => (elementsRef.current[5] = el)}
        className="packaging-projects-showcase">
        <img src="/projects/packaging-1.png" />
        <img src="/projects/packaging-2.png" />
      </div>
    </div>
  );
}

export default App;
