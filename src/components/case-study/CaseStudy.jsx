import React from 'react'
import ImgeOne from '../../assets/Img-1.png'
import ImgeTwo from '../../assets/Img-2.png'
import ImgeThree from '../../assets/Img-3.png'
import ImgeFour from '../../assets/Img-4.png'
import SeeAllButton from '../../subcomponents/seeAllWorks/SeeAllButton.jsx'
import { MdOutlineArrowForward } from "react-icons/md";

function CaseStudy() {
  return (
    <div className='flex flex-col
    justify-center items-center 
    gap-[4rem]
    py-[4rem]
    xtsm:max-md:px-[32px]
    md:max-lg:px-[72px] 
    lg:max-xl:px-[92px]
    xl:max-wideScreen:px-[224px]'>
      <div className='
      py-4
      flex flex-col
      justify-center items-center gap-4'>
        <p className='font-base text-sm text-[#F64B4B]'>Case studies</p>
        <p className='font-bold text-2xl w-3/4 text-center'>Our works describe why we are the best in the business</p>
      </div>
      <div className=' grid grid-cols-2 grid-rows-1 xtsm:max-md:w-4/6 xtsm:max-md:grid-cols-1  gap-16'>
        <div className='row-span-2'>
          <img src={ImgeTwo} alt=""/>
          <div className=' ml-8 my-4'>
            <p>Graphic Design</p>
            <p  className='font-bold text-lg'>AB.S Snack Packaging</p>
          </div>
        </div>
        <div className=''>
          <img src={ImgeOne} alt=""/>
          <div className=' ml-8 my-4'>
            <p>Graphic Design</p>
            <p className='font-bold text-lg'>Aura Branding Design</p>
          </div>
        </div>
        <div className='row-span-2'>
          <img src={ImgeThree} alt=""/>
          <div className=' ml-8 my-4'>
            <p>Web Development</p>
            <p  className='font-bold text-lg'>Gradient Website Development</p>
          </div>
        </div>
        <div className=''>
          <img src={ImgeFour} alt=""/>
          <div className='ml-8 my-4'>
            <p>Content Writing</p>
            <p  className='font-bold text-lg'>Magazine Content Writing</p>
          </div>
        </div>
      </div>
      <SeeAllButton title={'See all works'} Icon={<MdOutlineArrowForward size={27}/>}/>
    </div>
  )
}

export default CaseStudy