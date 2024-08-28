import { useEffect, useState } from "react";
const imageUrl = import.meta.env.VITE_IMAGE_URL;

export default function PrintProjects({ elementsRef }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAllProjects() {
      const response = await fetch(`${imageUrl}api/projects?db=collaterals`);
      const appsData = await response.json();
      if (appsData.status == "success") {
        setData(appsData.results);
      }
    }

    fetchAllProjects();
  }, []);
  return (
    <div
      id="collaterals"
      data-name="COLLATERALS"
      ref={(el) => (elementsRef.current[9] = el)}
      className="print-projects-showcase">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return <img key={index} src={`${imageUrl}${item.image}`} />;
        })}
    </div>
  );
}
