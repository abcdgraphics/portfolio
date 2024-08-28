import { useState } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export default function PagepopUp({ togglePopup, pdfFile }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="page-popup">
      <div>
        <div className="page-count">
          {numPages ? `1/${numPages}` : "Loading..."}
        </div>
      </div>
      <div className="pages">
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document">
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
        <div className="popup-download">
          <img src="/progress.svg" />
        </div>
      </div>
    </div>
  );
}
