import React from 'react'

function ReasonProfile({ProfileImg,title,pragraph,styles}){
  return (
    <>
    <div className='flex flex-row justify-start items-start gap-4 xtsm:max-sm:text-center xtsm:max-sm:justify-center xtsm:max-sm:items-center xtsm:max-sm:flex-col'>
        <img src={ProfileImg} alt="" />
        <div className='flex flex-col gap-4'>
            <p className=' font-bold text-base'>{title}</p>
            <p className=' font-base text-sm'>{pragraph}</p>
        </div>
    </div>
    </>
  )
}

export default ReasonProfile