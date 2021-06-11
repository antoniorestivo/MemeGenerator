import React from "react";
 import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?" />
      <p>Meme Generator</p>
      <Link to="/memes">Memes</Link>
      <Link to="/">Home</Link>
    </header>
  );
}

export default Header;
