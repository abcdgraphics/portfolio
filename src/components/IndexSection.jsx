import PropTypes from "prop-types";
import { CanvasRevealEffect } from "../components/ui/CanvasRevealEffect";
import Card from "../components/ui/Card";

const cardsData = [
  { title: "UI/UX", icon: "/index-icons/ui-ux.svg", link: "#websites" },
  { title: "WEBSITES", icon: "/index-icons/web.svg", link: "#websites" },
  { title: "BRANDING", icon: "/index-icons/brand.svg", link: "#branding" },
  {
    title: "INFOGRAPHICS",
    icon: "/index-icons/infographics.svg",
    link: "#branding",
  },
  { title: "SOCIAL", icon: "/index-icons/social.svg", link: "#social" },
  { title: "CAROUSELS", icon: "/index-icons/carousel.svg", link: "#social" },
  { title: "PRINT", icon: "/index-icons/print.svg", link: "#print" },
  { title: "DOCUMENTS", icon: "/index-icons/document.svg", link: "#packaging" },
  {
    title: "PACKAGING",
    icon: "/index-icons/packaging.svg",
    link: "#packaging",
  },
  {
    title: "PRESENTATIONS",
    icon: "/index-icons/presentation.svg",
    link: "#packaging",
  },
];

const colors = [
  [237, 125, 49],
  [221, 160, 190],
  [129, 179, 226],
];

const CardComponent = ({ title, icon, link }) => (
  <Card title={title} icon={icon} link={link}>
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="#ed7d31"
      colors={colors}
      dotSize={3}
    />
    <div className="absolute inset-0 bg-gradient-radial from-white-500 to-purple-600 [mask-image:radial-gradient(400px_at_center,white,transparent)] opacity-80 dark:opacity-90" />
  </Card>
);

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function IndexSection({ elementsRef }) {
  return (
    <div
      id="my-expertise"
      data-name="MY EXPERTISE"
      ref={(el) => (elementsRef.current[1] = el)}
      className="index-container">
      <h2
        data-option="fade-in"
        className="fade-out index-container-heading animate">
        As you scroll through, I&apos;ll take you along with me on a journey of
        design excellence, showcase a few projects that I&apos;m proud of, and
        in the process, we&apos;ll get to know each other a little better.
      </h2>
      <p
        data-option="fade-in"
        className="index-container-content fade-out animate">
        Step-by-step let&apos;s explore the possibilities, and if all the stars
        align, our conversation will have actual words that we&apos;ll exchange
        over a phone call.
      </p>
      <div
        data-option="fade-in"
        className="index-container-buttons fade-out animate">
        <a href="#intro">
          <button>Who am I</button>
        </a>
      </div>
      <div
        data-option="fade-in"
        className="index fade-out animate grid grid-cols-5 gap-5">
        {cardsData.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

IndexSection.propTypes = {
  elementsRef: PropTypes.object.isRequired,
};
