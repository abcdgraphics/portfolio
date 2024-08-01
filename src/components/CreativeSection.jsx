import EndCards from "./EndCards";
import ScrollSection from "./ScrollSection";
import { Lamp } from "./ui/Lamp";

export default function CreativeSection() {
  return (
    <div className="creative-section">
      <Lamp />
      <ScrollSection />
      <EndCards />
    </div>
  );
}
