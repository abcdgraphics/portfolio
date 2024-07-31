import { ContainerScroll } from "./ui/ContainerScrollAnimation";
import { Lamp } from "./ui/Lamp";

export default function CreativeSection() {
  return (
    <div className="creative-section">
      <Lamp />
      <div className="container-scroll-row">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl leading-8 font-semibold text-[#ed7d31] dark:text-white">
                EFFORTLESS <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  CREATIVE MANAGEMENT
                </span>
              </h1>
            </>
          }>
          <img
            src={`/banner.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
