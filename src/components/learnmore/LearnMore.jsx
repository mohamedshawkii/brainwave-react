import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
function LearnMore() {
  return (
    <button className='
    flex flex-row justify-center items-center 
    rounded-md
    text-white
    font-base
    text-base
    py-2 px-4 gap-2'>
        <p>Learn more</p>
        <HiArrowLongRight size={30} />
    </button>

  )
}

export default LearnMore