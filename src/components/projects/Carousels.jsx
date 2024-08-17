export default function Carousels({ elementsRef }) {
  return (
    <div
      id="carousels"
      data-name="CAROUSELS"
      ref={(el) => (elementsRef.current[8] = el)}
      className="social-projects-showcase">
      <img src="/projects/creative-1.jpg" />
      <img src="/projects/creative-2.jpg" />
      <img src="/projects/creative-3.jpg" />
      <img src="/projects/creative-4.jpg" />
      <img src="/projects/creative-5.jpg" />
      <img src="/projects/creative-6.jpg" />
      <img src="/projects/creative-7.jpg" />
      <img src="/projects/creative-8.jpg" />
    </div>
  );
}
