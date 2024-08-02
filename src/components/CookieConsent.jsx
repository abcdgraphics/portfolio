import { useState } from "react";
import { useCookies } from "react-cookie";

export default function CookieConsent() {
  const [cookies, setCookie] = useCookies(["userConsent"]);
  const [visible, setVisible] = useState(!cookies.userConsent);

  const acceptCookies = () => {
    setCookie("userConsent", true, { path: "/", maxAge: 31536000 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <p>
        This site uses cookies. View our <a href="/">Privacy Policy</a> for more
        information.
      </p>
      <div>
        <button onClick={acceptCookies}>
          <span className="btn-text">OK</span>
          <span className="btn-ani-bg"></span>
        </button>
      </div>
    </div>
  );
}
