import React from 'react'
import Cards from '../servicescards/Cards.jsx'
import DesignerRafiki from '../../assets/Designer-rafiki.png'
import ProgrammingRafiki from '../../assets/Programming-rafiki.png'
import NotesRafiki from '../../assets/Notes-rafiki.png'
import Oval1 from '../../assets/Oval-1.png'
import stars from '../../assets/stars.svg'

function CardServices() {
  return (
    <>
      <div className='
        flex flex-col 
        justify-center
        items-center 
        xtsm:max-md:px-[32px]
        md:max-lg:px-[72px] 
        lg:max-xl:px-[92px]
        xl:max-wideScreen:px-[224px]
        gap-4'>
        <div className='flex flex-col justify-center items-center gap-4 '>
          <div className='flex flex-col justify-center items-center my-[4rem] w-6/12 text-center'>
            <p className=' text-base font-medium text-[#F64B4B]'>Our services</p>
            <p className=' text-2xl font-black'>We provide great services for our customers based on needs</p>
          </div>
          <div className='grid grid-rows-1 gap-4 '>
            <div className='row-start-1 xtsm:max-sm:row-start-1 sm:max-lg:row-start-1'>
              <Cards
              styles={{backgroundColor: "#83FFA3",}}
              ImgeWidth={{height: 100,}}
              CardImg={DesignerRafiki}
              title={'Graphic Design'} 
              paragraph={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'}/>
            </div>
            <div className='row-start-1 xtsm:max-sm:row-start-2 sm:max-lg:row-start-1'>
              <Cards
              styles={{backgroundColor: "#473BF0"}}
              ImgeWidth={{height: 100,}}
              CardImg={ProgrammingRafiki}
              title={'Web Development'} 
              paragraph={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'}/>
            </div>
            <div className='row-start-1 xtsm:max-sm:row-start-3 sm:max-lg:row-start-3'>
              <Cards
              styles={{backgroundColor: "#F64B4B"}}
              ImgeWidth={{height: 100,}}
              CardImg={NotesRafiki}
              title={'Content Writing'} 
              paragraph={'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'}/>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 my-[4rem] xtsm:max-md:flex-col'>
          <div className='flex flex-row justify-center items-center'>
            <img src={Oval1} alt="profile pic" className='w-3/4'/>
          </div>
          <div className='
          flex flex-col line-clamp-3 gap-4 w-4/6 
          xtsm:max-md:justify-center 
          xtsm:max-md:items-center 
          xtsm:max-md:text-center '>
            <img src={stars} className='w-20 font-bold' alt="svg stars" />
            <p className='font-bold'>“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”</p>
            <p><span className=' font-semibold mr-1'>Franklin Hicks</span>Web Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardServices