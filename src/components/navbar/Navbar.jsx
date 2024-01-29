import React from "react";
import "./Navbar.css"; // add css
import  {Link}  from 'react-router-dom' //anchor gi jagah
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
            <Link className="active-nav-link" to={"home"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"home"}>About</Link>
          </li>
          <li>
            <Link to={"home"}>Contact</Link>
          </li>
          <li>
            <Link to={"admin"}>Admin</Link>
          </li>

          <span className="switch-mode-btn" onClick={toggleMode}>change</span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
