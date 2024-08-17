export default function Infographics({ elementsRef }) {
  return (
    <div
      id="infographics"
      data-name="INFOGRAPHICS"
      ref={(el) => (elementsRef.current[12] = el)}
      className="packaging-projects-showcase">
      <img src="/projects/packaging-1.png" />
      <img src="/projects/packaging-2.png" />
    </div>
  );
}
