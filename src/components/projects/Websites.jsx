import { useEffect, useState } from "react";
const imageUrl = import.meta.env.VITE_IMAGE_URL;

export default function Websites({ elementsRef }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAllProjects() {
      const response = await fetch(`${imageUrl}api/apps?db=websites`);
      const appsData = await response.json();
      if (appsData.status == "success") {
        setData(appsData.results);
      }
    }

    fetchAllProjects();
  }, []);
  return (
    <div
      id="websites"
      data-name="WEBSITES"
      ref={(el) => (elementsRef.current[4] = el)}
      className="projects-showcase">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={`${imageUrl}${item.image}`}
                />
                <div className="project-navigation">
                  <a href="/">
                    <div>
                      <img src="/nav-arrow.svg" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="project-details">
                <a href="/"> VISIT</a>
                <p className="project-title">{item.title}</p>
                <p className="project-brief">{item.content}</p>
                <p className="project-category">{item.category}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
