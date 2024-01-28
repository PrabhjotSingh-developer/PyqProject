import React from 'react'
import './Navbar.css' //css added 
// import  {Link}  from 'react-router-dom' //anchor gi jagah
import { useContext } from 'react'
import MyContext from '../../context/data/MyContext.jsx'
const Navbar = () => {
  const context = useContext(MyContext);
  const {mode,toggleMode} = context;
  console.log(context)
  return (
    

    <div className={`navbar`}>
        
        <nav className="navbar-container">

            <div className="logo-box"></div>

            <ul className={`nav-links`}>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Admin</a></li>
            </ul>


        </nav>
       
    </div>
  )
} 

export default Navbar
