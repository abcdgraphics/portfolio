import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ name }) {
  const [menuActive, setActive] = useState(false);

  return (
    <>
      <div className="fixed-side-bar">
        <div>
          <a href="/">
            <img className="logo" src="/logo/logo-main.svg" />
          </a>
          <p className="side-bar-dynamic-name">{name}</p>
          <a className="logo-holder" href="/">
            <img className="logo" src="/logo/abcd-logo_orange.svg"></img>
          </a>
          <div onClick={() => setActive(!menuActive)} className="mobile-nav">
            <img src="/mobile-nav.svg" />
          </div>
        </div>
      </div>
      <MobileMenu menuActive={menuActive} setActive={setActive} />
    </>
  );
}

function MobileMenu({ menuActive, setActive }) {
  return (
    <div className={`mobile-menu ${menuActive ? "active" : ""}`}>
      <div className="mobile-menu-nav">
        <img className="mobile-menu-logo" src="/abcd-white.svg" />
        <img
          onClick={() => setActive(!menuActive)}
          className="cross"
          src="/cross.png"
        />
      </div>
      <div className="mobile-menu-nav-links">
        <a onClick={() => setActive(!menuActive)} href="/">
          HOME
        </a>
        <a onClick={() => setActive(!menuActive)} href="#my-expertise">
          EXPERTISE
        </a>
        <a onClick={() => setActive(!menuActive)} href="#intro">
          WHO AM I
        </a>
        <a onClick={() => setActive(!menuActive)} href="#works">
          WORKS
        </a>
        <a onClick={() => setActive(!menuActive)} href="#ecm">
          ECM
        </a>
        <a onClick={() => setActive(!menuActive)} href="#contact">
          CONTACT
        </a>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
};
