import EndCards from "./EndCards";
import ScrollSection from "./ScrollSection";
import { Lamp } from "./ui/Lamp";

export default function CreativeSection({ elementsRef }) {
  return (
    <div
      id="ecm"
      data-name=""
      ref={(el) => (elementsRef.current[10] = el)}
      className="creative-section">
      {/* <Lamp /> */}
      <h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[30px] font-medium tracking-tight text-transparent md:text-[30px] creative-section-top-heading">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </h2>
      <ScrollSection />
      <EndCards />
    </div>
  );
}
