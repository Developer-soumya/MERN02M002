
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
   
  // let [count,setCount]=useState(0)
  // let [total,setTotal]=useState(0)




  // useEffect

  // useEffect(() => {
  //   // first
  //   // set of code
  
  //   return () => {
  //     second
  //   }
  // }, [third])


  // Case 1
  //  useEffect will execute at every render
  // useEffect(()=>{
  //   alert("use effct trigger")
  // })

  // case 2
  //  it will execute at first render only
  // useEffect(()=>{
  //   alert("use effct trigger at first render")
  // },[])

  // case 3 
  //  it will give the return when the component is unmounted
  // useEffect(()=>{
  //   alert("value updated")
  //   return ()=>{
  //     alert("value unmounted")
  //   }
  // })

  // case 4
  // it will execute based on the dependency
  // useEffect(()=>{
  //   alert("based on dep")
  // },[count,total])
  

  return (
    <>
      {/* <h1>Hello</h1> <br />
      <strong>Count :{count}</strong><br />

      <button onClick={()=>setCount(count+1)}>Inc</button>
      <br />
      <strong>Total :{total}</strong> <br />
      <button onClick={()=>setTotal(total+1)}>Inc Total</button> */}

      <Home/>
    </>
  )
}

export default App
