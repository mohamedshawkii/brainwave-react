import React from "react";
import OvalTwo from "../../assets/Oval-2.png";

function Testimonial() {
  return (
    <div className=' flex flex-col justify-center items-center gap-8 text-white h-[40rem] bg-[url("/src/assets/BG-2.png")]'>
      <p className=" text-[#83FFA3]">Testimonial</p>
      <p className="text-2xl w-5/12 xtsm:max-sm:w-10/12 text-center">
        “Simply the best. Better than all the rest. I’d recommend this product
        to beginners and advanced users.”
      </p>
      <div className=" flex flex-col justify-center items-center gap-2">
        <img src={OvalTwo} alt="" className="my-4" />
        <p className="font-bold text-base">Ian Klein</p>
        <p className="font-thin text-lg">Digital Marketer</p>
      </div>
    </div>
  );
}

export default Testimonial;
