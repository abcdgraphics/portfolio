import { Link } from "react-router-dom";

export default function IntroSection({ elementsRef }) {
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
