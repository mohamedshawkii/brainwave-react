import CTAOnLightBg from "../../subcomponents/cta/CTAOnLightBg.jsx";
import SideImg from "../../assets/SideImgHeader.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <header>
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
          <motion.p
            className=" text-[#F64B4B] font-normal text-md"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, eae: "easeOut", delay: 0.2 }}
          >
            Let’s shift your business
          </motion.p>
          <motion.p
            className=" font-black xtsm:max-sm:text-xl text-4xl"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, eae: "easeOut", delay: 0.2 }}
          >
            Shift your business fast with Shade Pro.
          </motion.p>
          <motion.p
            className=" font-normal text-base"
            initial={{ opacity: 0, x: -130 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, eae: "easeOut", delay: 0.2 }}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </motion.p>
          <motion.div
            className=" xtsm:max-sm:hidden"
            initial={{ opacity: 0, x: -135 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, eae: "easeOut", delay: 0.2 }}
          >
            <CTAOnLightBg />
          </motion.div>
        </div>
        <motion.div
          className="
          xtsm:max-sm:w-7/12  
          sm:max-2xl:w-2/6
          2xl:w-2/6 "
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, eae: "easeOut", delay: 0.2 }}
        >
          <img src={SideImg} alt="" />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
