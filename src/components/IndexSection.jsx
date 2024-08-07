import PropTypes from 'prop-types';
import { CanvasRevealEffect } from '../components/ui/CanvasRevealEffect';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

const cardsData = [
  { title: 'INTRO', icon: '/index-icons/intro.svg', link: '#intro' },
  { title: 'WEB', icon: '/index-icons/web.svg', link: '#web' },
  { title: 'SOCIAL', icon: '/index-icons/social.svg', link: '#social' },
  { title: 'PRINT', icon: '/index-icons/print.svg', link: '#print' },
  { title: 'BRAND', icon: '/index-icons/brand.svg', link: '#brand' },
  { title: 'EXTRA', icon: '/index-icons/extra.svg', link: '#extra' },
  { title: 'CONTACT', icon: '/index-icons/contact.svg', link: '#contact' },
];

const colors = [
  [236, 72, 153],
  [232, 121, 249],
];

const CardComponent = ({ title, icon, link }) => (
  <Card title={title} icon={icon} link={link}>
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName='bg-black'
      colors={colors}
      dotSize={2}
    />
    <div className='absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90' />
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
      id='index'
      ref={(el) => (elementsRef.current[1] = el)}
      className='index-container'
    >
      <h2
        data-option='fade-in'
        className='fade-out index-container-heading animate'
      >
        As you scroll through, I&apos;ll take you along with me on a journey of
        design excellence, showcase a few projects that I&apos;m proud of, and
        in the process, we&apos;ll get to know each other a little better.
      </h2>
      <p
        data-option='fade-in'
        className='index-container-content fade-out animate'
      >
        Step-by-step let&apos;s explore the possibilities, and if all the stars
        align, our conversation will have actual words that we&apos;ll exchange
        over a phone call.
      </p>
      <div
        data-option='fade-in'
        className='index-container-buttons fade-out animate'
      >
        <button>Brace Yourself!</button>
        <Link to='#intro'>
          <button>Who am I</button>
        </Link>
      </div>
      <div data-option='fade-in' className='index fade-out animate'>
        {cardsData.map((card) => (
          <CardComponent key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

IndexSection.propTypes = {
  elementsRef: PropTypes.object.isRequired,
};
