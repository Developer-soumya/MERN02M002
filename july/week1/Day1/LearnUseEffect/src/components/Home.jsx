import React, { useEffect, useState } from 'react'
import axios from "axios"

function Home() {

    let [data,setData]=useState([])

    useEffect(()=>{
        async function fetchData(){

            // let resp=await fetch("https://jsonplaceholder.typicode.com/posts");
            // let data=await resp.json();
            // console.log(data)

            let resData=await axios.post("https://jsonplaceholder.typicode.com/posts/",{name:"xyz",age:30})
            setData(resData.data)
            console.log(resData.data)

        }
        fetchData()
    },[])
  return (
    <div>
        {/* <h1>This is my Home page</h1>
        <div className='w-screen'>
           <ul className='flex flex-wrap gap-2'>
            {data?.map((e)=>
                <li className='w-[200px] h-[200px] border bg-blue-300'>{e.title}</li>
            )}
           </ul>
        </div> */}
    </div>
  )
}

export default Home