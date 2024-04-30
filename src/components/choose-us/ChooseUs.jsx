import React from 'react'
import ReasonProfile from './reasonprofile/ReasonProfile'
import IconZero from '../../assets/Icon-0.png'
import IconOne from '../../assets/Icon-1.png'
import IconTwo from '../../assets/Icon-2.png'
import IconThree from '../../assets/Icon-3.png'
import DarkHalftone from '../../assets/dark-halftone.svg'
import CTA from '../cta/CTA'

function ChooseUs() {
  return (
    <div className='
    bg-[#F4F7FA] 
      relative
      flex flex-col
      justify-center items-center 
      gap-[5rem]
      py-10
      xtsm:max-md:gap-8
      xtsm:max-md:px-[32px]
      md:max-lg:px-[72px] 
      lg:max-xl:px-[92px]
      xl:px-[224px]'>
        <div className='
        py-4
        flex flex-col
        justify-center items-center gap-4'>
          <p className='font-base text-sm text-[#F64B4B]'>Why choose us</p>
          <p className='font-bold text-2xl w-3/4 text-center'>People choose us because we serve the best for everyone</p>
        </div>
      <img src={DarkHalftone} alt="" className=' absolute top-0 left-0'/>
      <div className=' grid grid-cols-2 grid-rows-2 gap-8 w-4/6 content-center xtsm:max-sm:w-5/6 xtsm:max-lg:grid-row-none xtsm:max-lg:grid-cols-1'>
        <ReasonProfile ProfileImg={IconZero} title={'Dedicated project manager'} pragraph={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'}/>
        <ReasonProfile ProfileImg={IconOne} title={'Organized tasks'} pragraph={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'}/>
        <ReasonProfile ProfileImg={IconTwo} title={'Easy feedback sharing'} pragraph={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'}/>
        <ReasonProfile ProfileImg={IconThree} title={'Never miss deadline'} pragraph={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'}/>
      </div>
      <div className='
      py-[4rem]
      flex flex-row
      xtsm:max-lg:flex-col
      justify-center items-center
      gap-20
      xtsm:max-md:gap-8
      xtsm:max-sm:py-[2rem]'>
        <div className='flex flex-col xtsm:max-lg:items-center xtsm:max-lg:justify-center xtsm:max-lg:text-center gap-4'>
          <p  className=' font-bold text-2xl'>Ready to launch your next project?</p>
          <p  className=' font-base text-base w-3/4'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <CTA/>
      </div>
    </div>
  )
}

export default ChooseUs