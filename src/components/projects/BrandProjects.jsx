import { useEffect, useState } from "react";
const imageUrl = import.meta.env.VITE_IMAGE_URL;

export default function BrandProjects({ elementsRef }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAllProjects() {
      const response = await fetch(`${imageUrl}api/projects?db=branding`);
      const appsData = await response.json();
      if (appsData.status == "success") {
        setData(appsData.results);
      }
    }

    fetchAllProjects();
  }, []);
  return (
    <div
      id="branding"
      data-name="BRANDING"
      ref={(el) => (elementsRef.current[5] = el)}
      className="brand-projects-showcase">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return <img key={index} src={`${imageUrl}${item.image}`} />;
        })}
    </div>
  );
}
