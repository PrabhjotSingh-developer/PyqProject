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
  const [isActive, setActive] = useState();
  console.log(context);
  const arr = [
    {
      id: "1",
      name: "Home",
      path: "",
    },
    {
      id:"2",
      name:"About",
      path:"#about"
    },
    {
      id: "3",
      name: "Contact",
      path: "",
    },
    {
      id: "4",
      name: "Admin",
      path: "admin",
    },
  ];
  const bg_color = mode === "light" ? "light-mode" : "dark-mode";

  return (
    // navbbar
    <div className={`navbar ${bg_color}`}>
      {/* navbar-container */}
      <nav className="navbar-container padding-inline d-flex align-center justify-between">
        {/* logo */}
        <div className="logo-box">
          <h1 className="logo">
            Paper
            <span className="primary-color-text">Dekho</span>
            <span className="dotcom">.com</span>
          </h1>
        </div>

        {/* nav-links */}
        <ul className="nav-links d-flex align-center">
        {
             arr.map((item)=>(
             <li> 
                 <Link  to={item.path} onClick={()=>setActive(item.id)} className={`${item.name==='Home' && isActive ===false ?'active-nav-link':''} ${(isActive === item.id  ? 'active-nav-link':'')}`}>
               {item.name}
            </Link>
          </li>
          ))
        
        }
       


          {/* <li>
            <Link to={""}>About</Link>
          </li>
          <li>
            <Link to={""}>Contact</Link>
          </li>
          <li>
            <Link to={"admin"}>Admin</Link>
          </li> */}

          {/* switch-mode-btn */}
          <span className="switch-mode-btn" onClick={toggleMode}>
            {mode === "light" ? (
              <IoIosMoon className="switch-mode-icon" />
            ) : (
              <FaSun className="switch-mode-icon" />
            )}
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
