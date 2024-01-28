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
    <div className='navbar'>
   
       navbar code
       {/* <Link to={""}>hello</Link> */}
    </div>
  )
} 

export default Navbar
