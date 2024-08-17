export default function PrintProjects({ elementsRef }) {
  return (
    <div
      id="collaterals"
      data-name="COLLATERALS"
      ref={(el) => (elementsRef.current[9] = el)}
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
