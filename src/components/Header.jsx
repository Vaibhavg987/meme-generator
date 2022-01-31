import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={require("../images/troll-face.png")}
        alt=""
      />
      <h2>Meme Generator</h2>
    </header>
  );
}

export default Header;
