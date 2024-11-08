import React from 'react'
import Button from './Button'

function Product({val,count,mover}) {
  
  return (
    <>
  <div onMouseEnter={()=>mover(count)} className='flex p-9 pb-20 justify-between  '>
    <div className='font-semibold text-6xl pl-48 '>
        <h1>{val.name}</h1>
    </div>
    <div className='w-1/4 mr-48'>
       <p className='mb-10 '> {val.desc}</p>
      <div className='flex gap-5 w-fit'>
        {val.live&&<Button/>}
        {val.case&&<Button title='Case Study'/>}
      </div>
    </div>
  
  </div>
  
  </>
  )
}

export default Product