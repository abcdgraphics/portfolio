export default function SocialProjects({ elementsRef }) {
  return (
    <div
      id="social"
      data-name="SOCIAL"
      ref={(el) => (elementsRef.current[4] = el)}
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
