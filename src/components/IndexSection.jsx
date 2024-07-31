import { useState } from "react";
import Card from "./Card";

export default function IndexSection({ elementsRef }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="index"
      data-name=""
      ref={(el) => (elementsRef.current[6] = el)}
      className="index-container">
      <div className="index-container-content">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
      </div>
      <div className="index">
        <Card title="INTRO" icon="/index-icons/intro.svg" />
        <Card title="WEB" icon="/index-icons/web.svg" />
        <Card title="SOCIAL" icon="/index-icons/social.svg" />
        <Card title="PRINT" icon="/index-icons/print.svg" />
        <Card title="BRAND" icon="/index-icons/brand.svg" />
        <Card title="EXTRA" icon="/index-icons/extra.svg" />
        <Card title="CONTACT" icon="/index-icons/contact.svg" />
      </div>
    </div>
  );
}
