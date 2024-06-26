import React from "react";
import ImgeOne from "../../assets/Img-1.png";
import ImgeTwo from "../../assets/Img-2.png";
import ImgeThree from "../../assets/Img-3.png";
import ImgeFour from "../../assets/Img-4.png";
import SeeAllButton from "../../subcomponents/seeAllWorks/SeeAllButton.jsx";
import { MdOutlineArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

function CaseStudy() {
  return (
    <section>
      <div
        className="flex flex-col
    justify-center items-center 
    gap-[4rem]
    py-[4rem]
    xtsm:max-md:px-[24px]
    md:max-lg:px-[48px]
    lg:max-xl:px-[96px]
    xl:px-[224px]"
      >
        <div
          className="
      py-4
      flex flex-col
      justify-center items-center gap-4"
        >
          <p className="font-base text-sm text-[#F64B4B]">Case studies</p>
          <p className="font-bold text-2xl w-3/4 text-center">
            Our works describe why we are the best in the business
          </p>
        </div>
        <div className=" grid grid-cols-2 grid-rows-1 xtsm:max-md:w-4/6 xtsm:max-md:grid-cols-1 gap-16">
          <div className="row-span-2">
            <motion.img
              src={ImgeTwo}
              alt=""
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            />
            <motion.div
              className=" ml-8 my-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeIn" }}
            >
              <p>Graphic Design</p>
              <p className="font-bold text-lg">AB.S Snack Packaging</p>
            </motion.div>
          </div>
          <div className="">
            <motion.img
              src={ImgeOne}
              alt=""
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            />
            <motion.div
              className=" ml-8 my-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeIn" }}
            >
              <p>Graphic Design</p>
              <p className="font-bold text-lg">Aura Branding Design</p>
            </motion.div>
          </div>
          <div className="row-span-2">
            <motion.img
              src={ImgeThree}
              alt=""
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            />
            <motion.div
              className=" ml-8 my-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeIn" }}
            >
              <p>Web Development</p>
              <p className="font-bold text-lg">Gradient Website Development</p>
            </motion.div>
          </div>
          <div className="">
            <motion.img
              src={ImgeFour}
              alt=""
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            />
            <motion.div
              className="ml-8 my-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeIn" }}
            >
              <p>Content Writing</p>
              <p className="font-bold text-lg">Magazine Content Writing</p>
            </motion.div>
          </div>
      >
        <p className="font-base text-sm text-[#F64B4B]">Case studies</p>
        <p className="font-bold text-2xl w-3/4 text-center">
          Our works describe why we are the best in the business
        </p>
      </div>
      <div className=" grid grid-cols-2 grid-rows-1 xtsm:max-md:w-4/6 xtsm:max-md:grid-cols-1 gap-16">
        <div className="row-span-2">
          <motion.img src={ImgeTwo} alt="" 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ duration: 1.5, ease:"easeIn" }}
          />
          <motion.div className=" ml-8 my-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ delay: 0.20, duration: 1.5, ease:"easeIn" }}
          >
            <p>Graphic Design</p>
            <p className="font-bold text-lg">AB.S Snack Packaging</p>
          </motion.div>
        </div>
        <div className="">
          <motion.img src={ImgeOne} alt="" 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ duration: 1.5, ease:"easeIn" }}
          />
          <motion.div className=" ml-8 my-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ delay: 0.20, duration: 1.5, ease:"easeIn" }}
          >
            <p>Graphic Design</p>
            <p className="font-bold text-lg">Aura Branding Design</p>
          </motion.div>
        </div>
        <div className="row-span-2">
          <motion.img src={ImgeThree} alt="" 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ duration: 1.5, ease:"easeIn" }}
          />
          <motion.div className=" ml-8 my-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ delay: 0.20, duration: 1.5, ease:"easeIn" }}
          >
            <p>Web Development</p>
            <p className="font-bold text-lg">Gradient Website Development</p>
          </motion.div>
        </div>
        <div className="">
          <motion.img src={ImgeFour} alt="" 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ duration: 1.5, ease:"easeIn" }}
          />
          <motion.div className="ml-8 my-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1,  x:0}}
          transition={{ delay: 0.20, duration: 1.5, ease:"easeIn" }}
          >
            <p>Content Writing</p>
            <p className="font-bold text-lg">Magazine Content Writing</p>
          </motion.div>
        </div>
        <SeeAllButton
          title={"See all works"}
          Icon={<MdOutlineArrowForward size={27} />}
        />
      </div>
    </section>
  );
}

export default CaseStudy;
