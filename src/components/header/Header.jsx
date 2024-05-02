import React from "react";
import CTA from "../../subcomponents/cta/CTA.jsx";
import SideImg from "../../assets/SideImgHeader.png";
function Header() {
  return (
    <div
      className="
          py-8
          flex flex-row 
          justify-center items-center 
          gap-[6rem]
          xtsm:max-md:gap-[1rem]
          xtsm:max-sm:flex-col
          xtsm:max-md:px-[24px]
          md:max-lg:px-[48px]
          lg:max-xl:px-[96px]
          xl:px-[224px]"
    >
      <div
        className="
          flex 
          flex-col
          justify-start 
          items-start 
          gap-4 
          w-5/12
          xtsm:max-sm:w-full"
      >
        <p className=" text-[#F64B4B] font-normal text-md">
          Let’s shift your business
        </p>
        <p className=" font-black xtsm:max-sm:text-xl text-4xl">
          Shift your business fast with Shade Pro.
        </p>
        <p className=" font-normal text-base">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
        <div className=" xtsm:max-sm:hidden">
          <CTA />
        </div>
      </div>
      <img
        src={SideImg}
        alt=""
        className="
        xtsm:max-sm:w-7/12  
        sm:max-2xl:w-2/6
        2xl:max-wideScreen:w-1/6  "
      />
    </div>
  );
}

export default Header;
