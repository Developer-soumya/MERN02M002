// import React, { useContext } from 'react'
// import {  colorContext, nameContext } from '../App'

import { useContext } from "react"
import { childContext } from "../App"



// import { useContext } from "react";
// import { countContext } from "../App";

function ChildB() {

  // let obj=useContext(nameContext);
  // let color=useContext(colorContext);
let {theme,setTheme}=useContext(childContext)
  // let {count} = useContext(countContext);
  return (
    <div>
      {/* Name is :{name} <br /> */}

      {/* Object value are  <br /> */}
      {/* Name is :{obj.name} <br />
        Age is :{obj.age}
         <br />

        color is {color} */}
      {/* this is my child b */}

      {/* <h1>Count {count}</h1> */}
      {/* {props.children} */}

      <div style={{ backgroundColor: `${theme === "light" ? 'black' : "white"}`, width: '100vw', height: "150px", border: '1px solid black' }}>
        <button>SIgn In</button>
        <p style={{ color: `${theme === "light" ? 'white' : 'black'}` }} >this the content page</p>
      </div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>toggle</button>
    </div>
  )
}

export default ChildB