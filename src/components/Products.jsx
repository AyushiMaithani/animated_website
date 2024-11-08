import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import vid1 from '../assets/vid1.mp4'
import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid3.mp4'
import vid4 from '../assets/vid4.mp4'

function Products() {
    var data=[
        {
            name:"Testing",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi accusantium natus neque necessitatibus excepturi suscipit odio dignissimos doloremque, facere, ipsam cumque reiciendis omnis.",
            live:true,
            case:false

        },
        {
            name:"TTR",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi accusantium natus neque necessitatibus excepturi suscipit odio dignissimos doloremque, facere, ipsam cumque reiciendis omnis.",
            live:true,
            case:true
            
        },
        {
            name:"Avery",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi accusantium natus neque necessitatibus excepturi suscipit odio dignissimos doloremque, facere, ipsam cumque reiciendis omnis.",
            live:true,
            case:true
            
        },
        {
            name:"Jungle",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi accusantium natus neque necessitatibus excepturi suscipit odio dignissimos doloremque, facere, ipsam cumque reiciendis omnis.",
            live:false,
            case:true
            
        }
    ];

    const[pos,setPos]=useState(0);
    const mover=(val)=>{
        setPos(val*319);
    }
     

  return (
     <div className='relative flex flex-col mt-48'>
     {data.map((item,index)=>
    <Product key={index} val={item} count={index} mover={mover}/>)}
    <div className='absolute top-0 w-full h-full pointer-events-none '>
        <motion.div 
        initial={{y:pos}}
        animate={{y:pos+`px`}}
        
        className='window absolute w-[26rem] h-[319px] left-[30%] overflow-hidden rounded-3xl '>
             <motion.div animate={{y:-pos+`px`}} className=' w-[26rem] h-[320px]  '>
                <video className=' absolute object-cover rounded-3xl' src={vid1} autoPlay loop muted></video>
             </motion.div>
             <motion.div  animate={{y:-pos+`px`}}  className=' w-[26rem] h-[320px] '>
             <video className='absolute rounded-3xl' src={vid2} autoPlay loop muted></video>
             </motion.div>
             <motion.div  animate={{y:-pos+`px`}}  className=' w-[26rem] h-[320px]  '>
             <video className='absolute rounded-3xl' src={vid3} autoPlay loop muted></video>
             </motion.div>
             <motion.div  animate={{y:-pos+`px`}}  className=' w-[26rem] h-[320px]  '>
             <video className='absolute rounded-3xl' src={vid4} autoPlay loop muted></video>
             </motion.div>

        </motion.div>
    </div>
    </div>
  )
}

export default Products