import React, { useState } from 'react'
import { motion, useScroll } from "framer-motion"

function Work() {
  const {scrollYProgress}=useScroll();
 
    const [images,setImages]=useState([
        {url:"https://images.unsplash.com/photo-1556856425-366d6618905d?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"56%",left:"50%",isActive:false},
        {url:"https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"22%",left:"45%",isActive:false},
        {url:"https://images.unsplash.com/photo-1512242712282-774a8bc0d9d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"58%",left:"36%",isActive:false},
        {url:"https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"38%",left:"36%",isActive:false},    
        {url:"https://images.unsplash.com/photo-1526324697630-7ae1a3930c53?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"42%",left:"52%",isActive:false},
        {url:"https://images.unsplash.com/photo-1434470173287-201d57ca8c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"44%",left:"44%",isActive:false},
      ])

      scrollYProgress.on("change",(data)=>{
        function imagesShow(arr){
          setImages((prev)=>
          prev.map((ele,index)=>
            arr.includes(index)?{...ele,isActive:true}:{...ele,isActive:false}
        
        ));}


        switch (Math.floor(data*100)){
          case 0:
            imagesShow([]);
            break;
          case 1:
            imagesShow([0]);
            break;
          case 2:
            imagesShow([0,1]);
            break;
          case 3:
            imagesShow([0,1,2]);
            break;
          case 4:
              imagesShow([0,1,2,3]);
              break;
          case 5:
                imagesShow([0,1,2,3,4]);
                break;
          case 6:
                  imagesShow([0,1,2,3,4,5]);
                  break;      
      }})
  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto text-center  '>
            <h1 className='text-[30vw] leading-none tracking-tight font-regular select-none m-16 '>work</h1>
            <div className='absolute w-full h-full top-0 flex justify-center items-center  '>
          {images.map((ele,index)=>(ele.isActive && <img key={index} src={ele.url} style={{top:ele.top,left:ele.left}} className='h-[240px] w-[240px] absolute w-52 h-[160px] object-cover rounded-lg ' />))}
        
        </div>
        </div>
       
       
    </div>
  )
}

export default Work