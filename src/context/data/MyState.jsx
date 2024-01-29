import React from 'react'
import { useState } from 'react'
import MyContext from './MyContext.jsx'
const MyState = (props) => {
    const [mode,setMode] = useState('light');
    const html = document.getElementsByTagName("html") 

    const toggleMode = () =>{
        if(mode === 'light')
        {
         setMode('dark')
          html[0].classList.remove("light-mode")
          html[0].classList.add("dark-mode")
          console.log("yes work")
        }
      else
        {
          html[0].classList.add("light-mode")
          html[0].classList.remove("dark-mode")
          setMode('light')
       }
    }
  return (
    <MyContext.Provider value = {{mode,toggleMode}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
 