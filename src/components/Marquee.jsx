import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'

function Marquee({imageurls,direction}) {
    
  return (    
   <div className='flex w-full overflow-hidden'>
     <motion.div initial={{x:direction==='left'? "0" :"-100%"}} animate={{x:direction==='left'? "-100%" :"0"}} transition={{duration:15,ease:"linear",repeat:Infinity}}
     className='flex flex-shrink-0 gap-40 py-10 pr-40'>
      {imageurls.map((image,index)=> (
        <img key={index} src={image} />
      ))}
     </motion.div>
     <motion.div initial={{x:direction==='left'? "0" :"-100%"}} animate={{x:direction==='left'? "-100%" :"0"}} transition={{duration:15,ease:"linear",repeat:Infinity}}
     className='flex flex-shrink-0 gap-40 py-10 pr-40'>
      {imageurls.map((image,index)=> (
        <img key={index} src={image} />
      ))}
     </motion.div>
   </div>
    
  )
}

export default Marquee