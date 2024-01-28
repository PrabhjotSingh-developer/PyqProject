import React from 'react'
import { useState } from 'react'
import MyContext from './MyContext.jsx'
const MyState = (props) => {
    const [mode,setMode] = useState('light');
    const toggleMode = () =>{
        (mode === 'light')?setMode('dark'):setMode('light')
    }
  return (
    <MyContext.Provider value = {{mode,toggleMode}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
 