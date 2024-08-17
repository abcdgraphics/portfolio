import { saveAs } from "file-saver";
import CardStack from "../components/ui/CardStack.tsx";
import { cn } from "../libs/utils.ts";

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

  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <Highlight>I want to use them</Highlight> in
          my project. Framer motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can
          easily be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];

  return (
    <div
      data-name="TIME TO CONNECT"
      ref={(el) => (elementsRef.current[8] = el)}
      className="lets-connect-container">
      <div>
        <div className="lets-connect-col-1">
          <h2>DESIGN EXCELLENCE</h2>
          <p>
            My core belief is always to under-commit and over-deliver. I have
            the strategic ability to understand an idea and convert it into
            meaningful designs in various form factors that meet the objectives
            of clients.
          </p>
          <p>
            Now that you’ve reached this section of my website, I think we have
            a strong potential to be great friends, and I always treat my
            friends to something special.
          </p>
          <p>
            Here’s a quick sneak peek into some of my creative lines of thought
            that I’ve executed for various global brands in the past.
          </p>
          <p className="first">
            Now, you be the judge and tell me if I have made sense all this
            while, no pressure!
          </p>
          <p className="last">So, why me?</p>
        </div>
        <div className="connect-col-2">
          <div className="connect-col-2-1">
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
          <div className="connect-col-2-2">
            <CardStack items={CARDS} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
}
