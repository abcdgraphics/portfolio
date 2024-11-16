import BrandProjects from "./projects/BrandProjects";
import Carousels from "./projects/Carousels";
import Documents from "./projects/Documents";
import Infographics from "./projects/Infographics";
import PackagingProjects from "./projects/PackagingProjects";
import Presentations from "./projects/Presentations";
import PrintProjects from "./projects/PrintProjects";
import SocialProjects from "./projects/SocialProjects";
import WebProjects from "./projects/WebProjects";
import Websites from "./projects/Websites";


export default function ProjectsSection({ elementsRef }) {
  return (
    <div id="works" className="projects-section">
      <div className="projets-main-heading" >
        <h2>PROJECTS THAT I’M PROUD OF</h2>
      </div>
      <WebProjects elementsRef={elementsRef} />
      <Websites elementsRef={elementsRef} />
      <BrandProjects elementsRef={elementsRef} />
      <Presentations elementsRef={elementsRef} />
      <SocialProjects elementsRef={elementsRef} />
      <Carousels elementsRef={elementsRef} />
      <PrintProjects elementsRef={elementsRef} />
      <Documents elementsRef={elementsRef} />
      <PackagingProjects elementsRef={elementsRef} />
      <Infographics elementsRef={elementsRef} />
    </div>
  );
}
