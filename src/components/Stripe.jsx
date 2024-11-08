import React from 'react'

function Stripe({val}) {
  return (
    <div className='border-b-[1px] border-t-[1px] border-r-[1px] border-zinc-800 p-5 w-[16.66%] flex  justify-between  '>
        <img className='invert w-[70px]'  src={val.url}  />
        <span>{val.num}</span>
    </div>
  )
}

export default Stripe