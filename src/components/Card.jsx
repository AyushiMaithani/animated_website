import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";



function Card({width,start,para,hoverClass}) {
  return (
    <motion.div whileHover={{padding:"25px"}}  className={`${width} ${hoverClass} cursor-pointer bg-zinc-800 p-5 rounded-xl min-h-[30rem] `}>
        <div className="flex justify-between text-sm font-semibold items-center"> <h1>some heading</h1>
        <FaArrowRightLong />
        </div>
        <h1 className="text-2xl pt-4">some desc</h1>
        <div className="pt-[200px]">
          {start==true &&
          (<>
           <h1 className="font-serif text-8xl">Start a Project</h1>
           <button className="border-2 rounded-full px-3 py-2 mt-6">Contact Us</button>
          </>)
}
            {para && (<p className="text-zinc-500 text-xs  mt-36">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>)}
        </div>
      

    </motion.div>
  )
}

export default Card