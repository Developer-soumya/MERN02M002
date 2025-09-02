
// import { createContext } from 'react'
import { createContext, useState } from 'react';
import './App.css'
import ChildB from './component/ChildB';
// import ChildA from './component/ChildA';

// let nameContext=createContext();
// let colorContext=createContext();


// export let countContext = createContext({});
export let childContext=createContext();

function App() {

  let [count, setCount] = useState(0)
  const [theme,setTheme]=useState("light")


  function handleClick() {
    setCount(count + 1)
  }


  let contextObj = {
    count,
    setCount,
  }

  return (
    <>
      {/* <h1>Count : {count}</h1> */}
      {/* <br /> */}

      {/* <countContext.Provider value={contextObj}>
        <div>
          <ChildB />
        </div>
      </countContext.Provider>
      <button onClick={handleClick}>Increment</button> */}


        <childContext.Provider value={{theme,setTheme}}>
          
        <ChildB>
        
        </ChildB>
        </childContext.Provider>
    </>
  )
}

// export {nameContext,colorContext}


export default App


  // to create a context object
  // step 1: create a context object by using a method createContext()
  // step 2:give provider to the context object
  // step 3: give the value to the context object provider
  // step 4: export the context object

  // how to access inside the child components
  //  by using useContext() hook we can get the value from the context object

  // let obj={
  //   name:"xyz",
  //   age:20,
  //   arr:[1,2,3,4,5]
  // }

  // let arr=[1,2,3,4,5];






  // < nameContext.Provider value = { obj } >
  //   <colorContext.Provider value={"red"}>
  //     <ChildA />handleClick
  //   </colorContext.Provider> 
 
