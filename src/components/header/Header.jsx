import React from 'react'
import CTA from '../cta/CTA.jsx'
import SideImg from '../../assets/SideImgHeader.png'
function Header() {
  return (
      <div className='
          py-8
          flex flex-row 
          justify-center items-center 
          gap-[6rem]
          xtsm:max-md:gap-[1rem]
          xtsm:max-sm:flex-col
          xtsm:max-md:px-[32px]
          md:max-lg:px-[72px] 
          lg:max-xl:px-[92px]
          xl:max-wideScreen:px-[224px]'>
        <div className='
          flex 
          flex-col
          justify-start 
          items-start 
          gap-4 
          w-5/12
          xtsm:max-sm:w-8/12'>
          <p className=' text-[#F64B4B] font-normal text-md'>Let’s shift your business</p>
          <p className=' font-black xtsm:max-sm:text-xl text-4xl'>Shift your business fast with Shade Pro.</p>
          <p className=' font-normal text-base'>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
          <CTA/>
        </div>
        <img src={SideImg} alt="" className='
        xtsm:max-sm:w-7/12  
        sm:max-lg:w-5/12 
        lg:max-2xl:w-4/12 
        2xl:max-wideScreen:w-4/12' />
      </div>
  )
}

export default Header