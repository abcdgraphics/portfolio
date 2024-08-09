import EndCards from "./EndCards";
import ScrollSection from "./ScrollSection";
import { Lamp } from "./ui/Lamp";

export default function CreativeSection() {
  return (
    <div className="creative-section">
      {/* <Lamp /> */}
      <h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[30px] font-medium tracking-tight text-transparent md:text-[30px]">
        It has survived not only five centuries, <br />
        but also the leap into electronic typesetting, <br /> remaining
        essentially unchanged.
      </h2>
      <ScrollSection />
      <EndCards />
    </div>
  );
}
