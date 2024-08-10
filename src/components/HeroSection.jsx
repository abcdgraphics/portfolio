import PropTypes from 'prop-types';

export default function HeroSection({ elementsRef }) {
  return (
    <section
      ref={(el) => (elementsRef.current[0] = el)}
      className='hero-section'
    >
      <header className='hero-profile-row'>
        <div>
          <div className='profile-name-design'>
            <div className='round'>
              <div></div>
            </div>
            <div className='line'></div>
          </div>
        </div>
        <div>
          <h1
            data-option='strip-slide-up'
            className='portfolio-title animate strip-slide-up'
          >
            AKHIL BANDARU CREATIVE DESIGNER
          </h1>
          <div className='portfolio-title-design'>
            <div></div>
            <div></div>
            <div></div>
            <div className='portfolio-timeline'>
              <p>BORN – 03 NOV 1989</p>
              <p>2024</p>
            </div>
          </div>
        </div>
      </header>
      <nav className='hero-nav-row'>
        <article className='flip-word-col'>
          <h2
            data-option='strip-slide-up'
            className='flip-word-heading animate strip-slide-up'
          >
            LET THE
          </h2>
          <h2
            data-option='strip-slide-up'
            className='flip-word-heading animate strip-slide-up'
          >
            MAGIC UNFOLD!
          </h2>
          <p
            data-option='fade-in'
            className='fade-out flip-word-sub-heading animate'
          >
            HELLO VISITOR!
          </p>
          <p
            data-option='fade-in'
            className='fade-out flip-word-content animate'
          >
            Howdy, my friend (<i>yes, I&apos;ll call you that henceforth).</i>{' '}
            Thanks for stopping by my website, well, this is actually much more
            than just a website.
          </p>
          <p
            data-option='fade-in'
            className='fade-out flip-word-content animate'
          >
            Consider this to be a portal (
            <i> you guessed it, I&apos;ve watched too many sci-fi movies</i>) to
            dive into my world. A world of design possibilities, a place of
            magic, and in this realm, I&apos;m the magician with the magic wand{' '}
            <i>(or a ring, your imaginative choice)!</i>
          </p>
          <a href='#my-expertise'>
            <button>Brace Yourself</button>
          </a>
        </article>
      </nav>
      <div className='navigation'>
        <a href='#my-expertise'>
          <div>
            <img src='/nav-arrow.svg' alt='Navigation Arrow' />
          </div>
        </a>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  elementsRef: PropTypes.object.isRequired,
};
