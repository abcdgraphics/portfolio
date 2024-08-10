export default function PackagingProjects({ elementsRef }) {
  return (
    <div
      id="packaging"
      data-name="PACKAGING"
      ref={(el) => (elementsRef.current[7] = el)}
      className="packaging-projects-showcase">
      <img src="/projects/packaging-1.png" />
      <img src="/projects/packaging-2.png" />
    </div>
  );
}
