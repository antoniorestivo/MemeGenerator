import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="./Trollface.png" alt="Problem?" />
      <p>Meme Generator</p>

      <Link to="/memes" style={linkStyle}>
        Memes
      </Link>

      <Link to="/" style={linkStyle}>Home</Link>
    </header>
  );
}
const linkStyle = {
  paddingLeft: "65px",
  paddingRight: "15px",
  marginRight: "45px",
  color: "lightBlue"
};

export default Header;
