import { saveAs } from "file-saver";

export default function Contact({ elementsRef }) {
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
      data-name="PINKIE PROMISE"
      ref={(el) => (elementsRef.current[9] = el)}
      className="lets-connect-container">
      <div>
        <div className="lets-connect-col-1">
          <h2>LET’S GET ACQUAINTED</h2>
          <p>
            Woah! That was some journey. If you’ve reached here, then there’s no
            turning back. Let’s get some words exchanged over a call maybe.
          </p>
          <p>
            You might have a project idea, a question, a suggestion, or just
            want to say a plain ‘Hi’, fill up the form below and I’ll be faster
            than Flash in reaching back to you.
          </p>
          <p className="last">I promise. Pinkie promise!</p>
        </div>
        <div className="lets-connect-col-2"></div>
        <div className="lets-connect-col-3">
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email Address or Phone Number" />
            <textarea rows={10} placeholder="Message Here" />
            <button>Let The Magic Unfold!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
