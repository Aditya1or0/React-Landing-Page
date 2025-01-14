import React from "react";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="./images/logo.png"></img>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
