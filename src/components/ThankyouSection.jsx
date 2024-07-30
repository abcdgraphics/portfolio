import { Link } from "react-router-dom";

export default function ThankyouSection() {
  return (
    <div id="contact" className="thankyou-section">
      <h2>
        THANK <br /> YOU
      </h2>
      <img src="/smile.svg" />
      <div className="thankyou-details">
        <p>
          <a href="tel:+919701253249">+91 970 125 3249</a>
        </p>
        <p>
          <a href="mailto:akhilbandaru@gmail.com">akhilbandaru@gmail.com</a>
        </p>
        <p>
          <Link href="/">www.abcd.graphics</Link>
        </p>
      </div>
    </div>
  );
}
