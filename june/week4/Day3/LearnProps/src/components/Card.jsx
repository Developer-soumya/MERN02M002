import React from 'react'

function Card(props) {
  return (
    <div className='w-[300px] border-2 border-solid border-blue-500 p-3'>
        <div>
            <img src={props.img} alt="" className='rounded-[50%]'/>
        </div>
        <div className='p-4'>
            <h4 className='p-2 text-center font-bold text-2xl'>{props.name}</h4>
            <p className='text-gray-600 text-center'>{props.desc}</p>
        </div>


    </div>
  )
}

export default Card