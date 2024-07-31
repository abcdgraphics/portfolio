import BrandProjects from "./projects/BrandProjects";
import PackagingProjects from "./projects/PackagingProjects";
import PrintProjects from "./projects/PrintProjects";
import SocialProjects from "./projects/SocialProjects";
import WebProjects from "./projects/WebProjects";
import { saveAs } from "file-saver";

export default function ProjectsSection({ elementsRef }) {
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
    <div className="projects-section">
      <div className="projets-main-heading">
        <h2>RECENT PROJECTS</h2>
        <p className="resume-text">It has survived not only five centuries?</p>
        <button onClick={downloadPdf} className="resume-download">
          Download Resume
        </button>
      </div>
      <WebProjects elementsRef={elementsRef} />
      <SocialProjects elementsRef={elementsRef} />
      <PrintProjects elementsRef={elementsRef} />
      <BrandProjects elementsRef={elementsRef} />
      <PackagingProjects elementsRef={elementsRef} />
    </div>
  );
}
