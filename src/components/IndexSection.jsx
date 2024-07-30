export default function IndexSection({ elementsRef }) {
  return (
    <div
      id="index"
      data-name=""
      ref={(el) => (elementsRef.current[6] = el)}
      className="index-container">
      <div className="index">
        <a href="#intro">
          <img src="/index-icons/intro.svg" />
          <p>INTRO</p>
        </a>
      </div>
      <div className="index">
        <a href="#web">
          <img src="/index-icons/web.svg" />
          <p>WEB</p>
        </a>
      </div>
      <div className="index">
        <a href="#social">
          <img src="/index-icons/social.svg" />
          <p>SOCIAL</p>
        </a>
      </div>
      <div className="index">
        <a href="#print">
          <img src="/index-icons/print.svg" />
          <p>PRINT</p>
        </a>
      </div>
      <div className="index">
        <a href="#brand">
          <img src="/index-icons/brand.svg" />
          <p>BRAND</p>
        </a>
      </div>
      <div className="index">
        <a href="#extra">
          <img src="/index-icons/extra.svg" />
          <p>EXTRA</p>
        </a>
      </div>
      <div className="index">
        <a href="#contact">
          <img src="/index-icons/contact.svg" />
          <p>CONTACT</p>
        </a>
      </div>
    </div>
  );
}
