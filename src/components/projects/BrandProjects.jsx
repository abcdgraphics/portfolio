export default function BrandProjects({ elementsRef }) {
  return (
    <div
      id="brand"
      data-name="BRAND"
      ref={(el) => (elementsRef.current[6] = el)}
      className="brand-projects-showcase">
      <img src="/projects/brand-1.png" />
      <img src="/projects/brand-2.jpg" />
      <img src="/projects/brand-3.png" />
      <img src="/projects/brand-4.png" />
      <img src="/projects/brand-5.png" />
      <img src="/projects/brand-6.png" />
    </div>
  );
}
