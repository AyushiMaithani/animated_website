import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='max-w-screen-xl mx-auto flex py-20 gap-2 '>
        <Card width={"basis-1/3"} start={false} para={true}/>
        <Card width={"basis-2/3"} start={true} para={false}  hoverClass="hover:bg-violet-600" />
    </div>
  )
}

export default Cards