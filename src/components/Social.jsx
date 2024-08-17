import { saveAs } from "file-saver";

export default function Social({ elementsRef }) {
  return (
    <div
      data-name="SOCIAL"
      ref={(el) => (elementsRef.current[10] = el)}
      className="lets-connect-container">
      <div>
        <div className="lets-connect-col-1">
          <h2>SOCIAL SIGNALS</h2>
          <p>
            I’m not socially awkward, and I don’t want you to be as well. What
            are friends for, just hit me up and we can get a conversation going.
          </p>
          <p>
            I don't know if you have the habit of sliding into DMs, but you can
            slide into mine <i>(a lil cheeky on purpose)</i>.
          </p>
        </div>
        <div className="lets-connect-col-2"></div>
        <div className="lets-connect-col-3">
          <div className="social-links">
            <div className="link">
              <img className="facebook-icon" src="/social-icons/facebook.svg" />
            </div>
            <div className="link">
              <img className="behance-icon" src="/social-icons/behance.svg" />
            </div>
            <div className="link">
              <img className="linkedin-icon" src="/social-icons/linkedin.svg" />
            </div>
            <div className="link">
              <img
                className="instagram-icon"
                src="/social-icons/instagram.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
