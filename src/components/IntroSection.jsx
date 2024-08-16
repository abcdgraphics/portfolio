import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Function to calculate experience in years and months
const calculateExperience = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  const totalMonths = years * 12 + months;
  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;
  const decimalMonths = (displayMonths / 12).toFixed(1);

  return `${displayYears + parseFloat(decimalMonths)} YEARS`;
};

export default function IntroSection({ elementsRef }) {
  return (
    <div
      id="intro"
      data-name="WHO AM I"
      ref={(el) => (elementsRef.current[2] = el)}
      className="intro-container">
      <div data-option="fade-in" className="intro-profile fade-out animate">
        <div className="profile-pic-holder">
          <div className="profile-pic">
            <img src="/profile.png" alt="Profile" />
          </div>
        </div>
        <div>
          <p className="intro-profile-name">AKHIL BANDARU</p>
          <p className="age">34 YEARS</p>
          <div className="divider"></div>
          <div className="social-links">
            <div className="link">
              <img
                className="facebook-icon"
                src="/social-icons/facebook.svg"
                alt="Facebook"
              />
            </div>
            <div className="link">
              <img
                className="behance-icon"
                src="/social-icons/behance.svg"
                alt="Behance"
              />
            </div>
            <div className="link">
              <img
                className="linkedin-icon"
                src="/social-icons/linkedin.svg"
                alt="LinkedIn"
              />
            </div>
            <div className="link">
              <img
                className="instagram-icon"
                src="/social-icons/instagram.svg"
                alt="Instagram"
              />
            </div>
          </div>
          <p className="phone">
            <a href="tel:+919701253249">+91 970 125 3249</a>
          </p>
          <p className="email">
            <a href="mailto:akhilbandaru@gmail.com">akhilbandaru@gmail.com</a>
          </p>
          <p className="website">
            <Link to="/">www.abcd.graphics</Link>
          </p>
        </div>
      </div>
      <div className="intro-details">
        <div className="career-section">
          <div data-option="fade-in" className="summary fade-out animate">
            <h2 className="summary-heading">WHO AM I?</h2>
            <p className="summary-desc">
              The world knows me as <span>Akhil Bandaru</span>. I’m a man of
              many talents (bragging rights reserved) with over a decade of
              experience in crafting captivating digital and print media.
            </p>
            <p className="summary-desc">
              I excel in leading design teams and orchestrating projects from
              visionary inception to completion. Skilled in a plethora of design
              tools and technologies, I have an uncanny knack for embracing and
              setting new trends. I’m like Tony Stark in Iron Man, except my
              iron suit is still in the final stages of production.
            </p>
          </div>
          <div data-option="fade-in" className="flow-chart fade-out animate">
            <div>
              <h2 className="total-experience-heading">
                TOTAL {calculateExperience("2013-05-13")} OF EXPERIENCE
              </h2>
            </div>
            <div className="flow-chart-card">
              <div className="profile-num-holder">
                <div className="flow-chart-card-column-1">
                  <div className="flow-chart-year">2024</div>
                  <div className="decor">
                    <div></div>
                  </div>
                </div>
                <div className="flow-chart-num">01</div>
              </div>
              <div className="flow-chart-card-details">
                <div>
                  <div className="decor-mobile">
                    <div></div>
                  </div>
                </div>
                <div>
                  <h3>
                    R&D Engineer, Innovation Labs{" "}
                    <span> [ {calculateExperience("2024-02-01")} ]</span>
                  </h3>
                  <p>Tredence Data Analytics Solutions Pvt Ltd</p>
                  <ul>
                    <li>
                      Spearheaded research and development initiatives to
                      integrate cutting-edge design technologies into client
                      projects.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to improve
                      product design processes, increasing efficiency by 20%.
                    </li>
                    <li>
                      Developed innovative solutions for complex design
                      challenges, leading to a 15% increase in customer
                      satisfaction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="profile-num-holder">
                <div className="flow-chart-card-column-1">
                  <div className="flow-chart-year">2020</div>
                  <div className="decor">
                    <div></div>
                  </div>
                </div>
                <div className="flow-chart-num">02</div>
              </div>
              <div className="flow-chart-card-details">
                <div>
                  <div className="decor-mobile">
                    <div></div>
                  </div>
                </div>
                <div>
                  <h3>
                    Associate Manager – Graphic Designer{" "}
                    <span>
                      {" "}
                      [ {calculateExperience("2020-07-08", "2024-01-31")} ]
                    </span>
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
            </div>
            <div className="flow-chart-card">
              <div className="profile-num-holder">
                <div className="flow-chart-card-column-1">
                  <div className="flow-chart-year">2019</div>
                  <div className="decor">
                    <div></div>
                  </div>
                </div>
                <div className="flow-chart-num">03</div>
              </div>
              <div className="flow-chart-card-details">
                <div>
                  <div className="decor-mobile">
                    <div></div>
                  </div>
                </div>
                <div>
                  <h3>
                    Specialist in Web Design & Development{" "}
                    <span>
                      {" "}
                      [ {calculateExperience("2019-12-09", "2020-04-15")} ]
                    </span>
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
            </div>
            <div className="flow-chart-card">
              <div className="profile-num-holder">
                <div className="flow-chart-card-column-1">
                  <div className="flow-chart-year">2018</div>
                  <div className="decor">
                    <div></div>
                  </div>
                </div>
                <div className="flow-chart-num">04</div>
              </div>
              <div className="flow-chart-card-details">
                <div>
                  <div className="decor-mobile">
                    <div></div>
                  </div>
                </div>
                <div>
                  <h3>
                    Webmaster{" "}
                    <span>
                      {" "}
                      [ {calculateExperience("2018-08-01", "2019-12-08")} ]
                    </span>
                  </h3>
                  <p>Kalki Communication Technology Pvt. Ltd.</p>
                </div>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="profile-num-holder">
                <div className="flow-chart-card-column-1">
                  <div className="flow-chart-year">2013</div>
                </div>
                <div className="flow-chart-num">05</div>
              </div>

              <div className="flow-chart-card-details">
                <div>
                  <div className="decor-mobile">
                    <div></div>
                  </div>
                </div>
                <div>
                  <h3>
                    Technical Trainer{" "}
                    <span>
                      {" "}
                      [ {calculateExperience("2013-05-13", "2018-05-27")} ]
                    </span>
                  </h3>
                  <p>Visakha Fire And Security Services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="training-section ">
          <div data-option="fade-in" className="summary fade-out animate">
            <h2 className="summary-heading">
              MY SUPERPOWERS: ALL SKILLS NO FRILLS
            </h2>
            <p className="summary-desc">
              I’m also a big big fan of Deadpool, but I’ve not listed sweet talk
              as a skill here.
            </p>
            <p className="summary-desc">
              I just don’t design beautiful websites (I do that with my eyes
              closed); I also make sure they become pally pally with those
              sneaky Google bots.
            </p>
            <p className="summary-desc">
              In plain English, I’m also good with SEO, I’ll ensure your website
              ranks high in SERPs. You know the saying - If it’s not on page 1,
              it’s on page ‘Never’.
            </p>
            <p>You’ve got the whole package, my friend!</p>
          </div>
          <div data-option="fade-in" className="flow-chart fade-out animate">
            <div>
              <h2 className="total-experience-heading">EDUCATION BACKGROUND</h2>
            </div>
            <div className="flow-chart-card">
              <div className="profile-num-holder">
                <div className="flow-chart-card-column-1">
                  <div className="flow-chart-year">2013</div>
                  <div className="decor">
                    <div></div>
                  </div>
                </div>
                <div className="flow-chart-num">01</div>
              </div>
              <div className="flow-chart-card-details">
                <div>
                  <div className="decor-mobile">
                    <div></div>
                  </div>
                </div>
                <div>
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
                      producing high-quality designs that are both functional
                      and engaging.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flow-chart-card">
              <div className="profile-num-holder">
                <div className="flow-chart-card-column-1">
                  <div className="flow-chart-year">2011</div>
                  <div className="decor">
                    <div></div>
                  </div>
                </div>
                <div className="flow-chart-num">02</div>
              </div>
              <div className="flow-chart-card-details">
                <div>
                  <div className="decor-mobile">
                    <div></div>
                  </div>
                </div>
                <div>
                  <h3>B. Tech - Information Technology</h3>
                  <p>Avanthi College Of Engineering And Technology.</p>
                  <ul>
                    <li>
                      Acquired comprehensive coding skills in C and C++,
                      focusing on building strong foundational programming
                      knowledge.
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
            <div className="flow-chart-year">2007</div>
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
                  Script, and Datalife Engine
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

IntroSection.propTypes = {
  elementsRef: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
