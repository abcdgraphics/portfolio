import BrandProjects from "./projects/BrandProjects";
import PackagingProjects from "./projects/PackagingProjects";
import PrintProjects from "./projects/PrintProjects";
import SocialProjects from "./projects/SocialProjects";
import WebProjects from "./projects/WebProjects";

export default function ProjectsSection({ elementsRef }) {
  return (
    <div className="projects-section">
      <div className="projets-main-heading">
        <h2>PROJECTS THAT I’M PROUD OF</h2>
      </div>
      <WebProjects elementsRef={elementsRef} />
      <SocialProjects elementsRef={elementsRef} />
      <PrintProjects elementsRef={elementsRef} />
      <BrandProjects elementsRef={elementsRef} />
      <PackagingProjects elementsRef={elementsRef} />
    </div>
  );
}
