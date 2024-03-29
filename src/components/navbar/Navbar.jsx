import React, { useState } from "react";
import "./Navbar.css"; // add css
import { Link } from "react-router-dom"; //anchor gi jagah
import { useContext } from "react";
import MyContext from "../../context/data/MyContext.jsx";
import { IoIosMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const [isActive, setActive] = useState(false);
  console.log(context);
  const arr = [
    {
      id: "1",
      name: "Home",
      path: "",
    },
    {
      id: "2",
      name: "About",
      path: "#about",
    },
    {
      id: "3",
      name: "Contact",
      path: "#contact",
    },
    {
      id: "4",
      name: "Admin",
      path: "admin",
    },
  ];
  const bg_color = mode === "light" ? "light-mode" : "dark-mode";
  function addClassActive(e)
  {
      let anc = e.target;
      let allAnc = document.getElementsByTagName("a")
      // console.log(allAnc[0])
      allAnc.map((item,index)=>{
        console.log(item[0])
        // if(item.className === "active-nav-link")
        //     item.className = ""
      })
      
      anc.classList.add("active-nav-link")
      
  }
  function clickHandler()
  {
    
  }
  return (
    // navbbar
    <div className={`navbar ${bg_color}`}>
      {/* navbar-container */}
      <nav className="navbar-container common-padding-inline d-flex align-center justify-between">
        {/* logo */}
        <div>
          <h1 className="logo">
            paper
            <span className="primary-color-text"> dekho</span>
            <span>.com</span>
          </h1>
        </div>

        {/* nav-links */}
        <ul className="nav-links d-flex align-center">
          {/* {arr.map((item) => (
            (item.id === ("1"||"4"))?
            (
            <li>
              <Link
                to={item.path}
                onClick={() => setActive(item.id)}
                className={`${
                  item.name === "Home" && isActive === false
                    ? "active-nav-link"
                    : ""
                } ${isActive === item.id ? "active-nav-link" : ""}`}
              >
                {item.name}
              </Link>
            </li>):(
              <li>
                    <a href={item.path}  onClick={() => setActive(item.id)}
                className={`${
                  item.name === "Home" && isActive === false
                    ? "active-nav-link"
                    : ""
                } ${isActive === item.id ? "active-nav-link" : ""}`}>{item.name}</a>
              </li>
            )
          ))} */}
           <li>
            <Link to={"/"} onClick={addClassActive} className="active-nav-link">Home</Link>
          </li>
          <li>
            <Link to={""} onClick={addClassActive}>About</Link>
          </li>
          <li>
            <Link to={""} onClick={addClassActive}>Contact</Link>
          </li>
          <li>
            <Link to={"admin"} onClick={addClassActive}>Admin</Link>
          </li>
      
          {/* switch-mode-btn */}
          <span className="switch-mode-btn" onClick={toggleMode}>
            {mode === "light" ? (
              <IoIosMoon className="switch-mode-icon" />
            ) : (
              <FaSun className="switch-mode-icon" />
            )}
          </span>

          {/* toggle-menu-btn on mobiles */}
          <div className="toggle-menu-btn" onClick={clickHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
