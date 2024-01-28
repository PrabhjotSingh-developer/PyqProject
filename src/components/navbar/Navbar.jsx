import React from 'react'
import './Navbar.css' //css added 
import { Link } from 'react-router-dom' //anchor gi jagah
const Navbar = () => {
  return (
    <div className='navbar'>
       <Link to={"path"}>Home</Link>
    </div>
  )
} 

export default Navbar
