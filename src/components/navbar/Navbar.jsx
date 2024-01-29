import React from "react";
import "./Navbar.css"; // add css
// import  {Link}  from 'react-router-dom' //anchor gi jagah
import { useContext } from "react";
import MyContext from "../../context/data/MyContext.jsx";
const Navbar = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  console.log(context);
  const bg_color = mode === "light" ? "light-mode" : "dark-mode";
  return (
    // navbbar
    <div className={`navbar ${bg_color}`}>
      {/* navbar-container */}
      <nav className="navbar-container d-flex align-center justify-between">
        {/* logo */}
        <div className="logo-box">
          <h1 className="logo">
            <span className="primary-color-text">Paper</span> Dekho
            <span className="dotcom">.com</span>
          </h1>
        </div>

        {/* nav-links */}
        <ul className="nav-links d-flex align-center">
          <li>
            <a className="active-nav-link" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Admin</a>
          </li>

          <span className="switch-mode-btn">change</span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
