import { useEffect, useState } from "react";
import PagepopUp from "../Popup";
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function Carousels({ elementsRef }) {
  const [data, setData] = useState([]);
  const [popup, togglePopup] = useState(false);
  const [pdfFile, setPdfFile] = useState("");

  useEffect(() => {
    async function fetchAllProjects() {
      const response = await fetch(`${backendURL}/api/projects?db=carousels`);
      const appsData = await response.json();
      if (appsData.status == "success") {
        setData(appsData.results);
      }
    }

    fetchAllProjects();
  }, []);

  useEffect(() => {
    if (popup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [popup]);

  return (
    <>
      <div
        id="carousels"
        data-name="CAROUSELS"
        ref={(el) => (elementsRef.current[8] = el)}
        className="social-projects-showcase">
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <img
                key={index}
                src={`${backendURL}${item.image}`}
                onClick={() => {
                  if (item.pdf && item.pdf.length > 0) {
                    setPdfFile(item.pdf);
                    togglePopup(true);
                  }
                }}
              />
            );
          })}
      </div>
      {popup && pdfFile.length > 0 && (
        <PagepopUp togglePopup={togglePopup} pdfFile={pdfFile} />
      )}
    </>
  );
}
