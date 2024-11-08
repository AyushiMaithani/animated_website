import React from 'react'

function Footer() {
  return (
  <div className='w-full'>
    <div className='max-w-screen-xl mx-auto flex '>
        <div className='bais-1/2'>
        <h1 className='text-[10rem] font-[550] font-serif  leading-none tracking-tighter mt-14 pb-12'>refokus.</h1></div>
        <div className='bais-1/2 flex gap-32 font-thin font-serif pt-8'>
        <div className='ml-20 text-zinc-600'><h4 className='pb-14  text-white'>Socials</h4>{["Instagram","Twitter(X?)","LinkedIn"].map((item,index)=> <div key={index}>{item}</div>)}</div>
        <div className=' text-zinc-600'>
          <h4 className='pb-14 text-white'> Socials</h4>{["Instagram","Twitter(X?)","LinkedIn"].map((item,index)=> <div key={index}>{item}</div>)}</div>
       
       <div>
       
        <div className='font-thin mb-16 text-sm'>Refokus is pioneering digital agency driven by design and empowered by technology.</div>
        <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"alt="img" />
          </div>
          </div>
    </div>
  </div>
  )
}

export default Footer