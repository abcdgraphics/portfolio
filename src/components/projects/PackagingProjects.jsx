import { useEffect, useState } from "react";
const imageUrl = import.meta.env.VITE_IMAGE_URL;

export default function PackagingProjects({ elementsRef }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAllProjects() {
      const response = await fetch(`${imageUrl}api/projects?db=packaging`);
      const appsData = await response.json();
      if (appsData.status == "success") {
        setData(appsData.results);
      }
    }

    fetchAllProjects();
  }, []);
  return (
    <div
      id="packaging"
      data-name="PACKAGING"
      ref={(el) => (elementsRef.current[11] = el)}
      className="packaging-projects-showcase">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return <img key={index} src={`${imageUrl}${item.image}`} />;
        })}
    </div>
  );
}
