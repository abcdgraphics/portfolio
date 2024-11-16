import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { saveAs } from "file-saver";
const backendURL = import.meta.env.VITE_BACKEND_URL;

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PagepopUp({ togglePopup, pdfFile }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const pagesRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!pagesRef.current) return;

      const pageElements = pagesRef.current.querySelectorAll(".pdf-page");
      let currentPage = 1;

      pageElements.forEach((pageElement, index) => {
        const rect = pageElement.getBoundingClientRect();
        if (rect.top <= 400) {
          currentPage = index + 1;
        }
      });

      setPageNumber(currentPage);
    };

    const pagesContainer = pagesRef.current;
    pagesContainer.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => pagesContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadPdf = () => {
    const fileUrl = `https://proxy.abcd.graphics/${backendURL}/${pdfFile}`;
    const fileName = "file";

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, fileName);
      })
      .catch((error) => console.error("Error downloading the File:", error));
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="page-popup">
      <div className="page-count-holder">
        <div className="page-count">
          {pageNumber} / {numPages}
        </div>
      </div>
      <div className="pages" ref={pagesRef}>
        <div className="mobile-pdf-nav">
          <div className="page-count">
            {pageNumber} / {numPages}
          </div>
          <div className="popup-close" onClick={() => togglePopup(false)}>
            <img src="/cross.svg" />
          </div>
          <div onClick={downloadPdf} className="popup-download">
            <img src="/progress.svg" />
          </div>
        </div>
        <Document
          file={`https://proxy.abcd.graphics/${backendURL}/${pdfFile}`}
          // file="/test.pdf"
          onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              className="pdf-page"
            />
          ))}
        </Document>
      </div>
      <div className="popup-nav">
        <div className="popup-close" onClick={() => togglePopup(false)}>
          <img src="/cross.svg" />
        </div>
        <div onClick={downloadPdf} className="popup-download">
          <img src="/progress.svg" />
        </div>
      </div>
    </div>
  );
}
