import { saveAs } from "file-saver";

export default function Connect({ elementsRef }) {
  const downloadPdf = () => {
    const fileUrl = "/resume.txt";
    const fileName = "resume.txt";

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, fileName);
      })
      .catch((error) => console.error("Error downloading the File:", error));
  };

  return (
    <div
      data-name="TIME TO CONNECT"
      ref={(el) => (elementsRef.current[8] = el)}
      className="lets-connect-container">
      <div>
        <div className="lets-connect-col-1">
          <h2>DESIGN EXCELLENCE</h2>
          <p>My core belief is always to under-commit and over-deliver.</p>
          <p>
            I have the strategic ability to understand an idea and convert it
            into meaningful designs in various form factors that meet with the
            objective of clients.
          </p>
          <p>
            Now that you’ve reached this section of my website, I think we have
            a strong potential to be great friends, and I always treat my
            friends to something special. Here’s a quick sneak peek into some of
            my creative lines of thought that I’ve executed for various global
            brands in the past.
          </p>
          <p className="first">
            Now, you be the judge and tell me if I have made sense all this
            while, no pressure!
          </p>
          <p className="last">C’mon it's time to connect</p>
        </div>
        <div className="lets-connect-col-2">
          <div className="profile-name-design">
            <div className="line"></div>
            <div className="round">
              <div></div>
            </div>
          </div>
        </div>
        <div className="lets-connect-col-3">
          <button onClick={downloadPdf} className="resume-download">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
