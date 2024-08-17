export default function Documents({ elementsRef }) {
  return (
    <div
      id="documents"
      data-name="DOCUMENTS"
      ref={(el) => (elementsRef.current[10] = el)}
      className="print-projects-showcase">
      <img src="/projects/print-1.png" />
      <img src="/projects/print-2.png" />
      <img src="/projects/print-3.png" />
      <img src="/projects/print-4.png" />
      <img src="/projects/print-5.png" />
      <img src="/projects/print-6.png" />
      <img src="/projects/print-7.png" />
      <img src="/projects/print-8.png" />
    </div>
  );
}
