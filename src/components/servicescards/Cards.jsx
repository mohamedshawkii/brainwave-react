import React from 'react'
import LearnMore from '../learnmore/LearnMore'

function Cards({title,paragraph,CardImg,styles,ImgeWidth}) {
  return (
    <div
    style={styles} 
    className='
    flex flex-col 
    justify-center items-center 
    rounded-md 
    px-4 py-8 gap-4
    text-center
    text-white
    w-[18rem] h-[25rem]'>
      <img  style={ImgeWidth} src={CardImg} alt="illustration"/>
      <p className=' text-lg font-bold'>{title}</p>
      <p  className=' text-sm font-thin leading-6'>{paragraph}</p>
      <div className='mt-1'>
        <LearnMore/>
      </div>
    </div>
    
  )
}

export default Cards