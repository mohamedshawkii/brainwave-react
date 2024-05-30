import React from "react";
import PeopleOne from "../../assets/people-1.png";
import PeopleTwo from "../../assets/people-2.png";
import OneMil from "../../assets/1M+.svg";
import GPA from "../../assets/GPA.svg";
import DivPercentage from "../../assets/percent.svg";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";

function Rates() {
  return (
    <div
      className="
      flex flex-col justify-center items-center
      py-8
      xtsm:max-md:gap-[1rem]
      xtsm:max-sm:flex-col 
      xtsm:max-md:px-[24px]
          md:max-lg:px-[48px]
          lg:max-xl:px-[96px]
          xl:px-[224px]"
    >
      <div className="w-full flex flex-col justify-center items-center md:max-wideScreen:items-start md:max-wideScreen:justify-start gap-2">
        <p className="font-base text-[#F64B4B] xtsm:max-md:self-center xtsm:max-md:text-sm">
          Our Story
        </p>
        <p className="font-bold text-2xl w-4/12 xtsm:max-md:text-base xtsm:max-md:text-center xtsm:max-md:w-3/4 xtsm:max-md:self-center">
          We know how everything works and why your business is failing over and
          over again.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center xtsm:max-md:flex-col gap-20 md:max-lg:gap-8">
        <motion.img
          src={PeopleOne}
          alt=""
          className="w-4/12 mt-[8rem] mr-auto xtsm:max-md:w-2/4 md:max-lg:w-5/12 xtsm:max-md:mx-auto"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />
        <div className="flex flex-col justify-center items-center mb-auto gap-16 ">
          <motion.img
            src={PeopleTwo}
            alt=""
            className="w-9/12  mr-auto md:max-lg:mr-auto xtsm:max-md:w-3/4 md:max-lg:w-3/4"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          />
          <motion.p
            className="font-base my-auto mb-12 xtsm:max-md:font-normal text-lg xtsm:max-md:text-base  
            xtsm:max-md:mx-auto xtsm:max-md:w-auto xtsm:max-md:text-center"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand. With lots of unique
            blocks, you can easily build a page without coding. Build your next
            landing page.
          </motion.p>
        </div>
      </div>
      <div className="flex flex-row xtsm:max-md:flex-col justify-center items-center gap-8 my-10">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={OneMil} alt="" className="w-1/6" />
          <p className="font-bold text-base xtsm:max-sm:w-3/4">
            Customers visit Omega every month to get their service done.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={GPA} alt="" className="w-2/6 " />
          <p className="font-bold text-base xtsm:max-sm:w-3/4">
            Satisfaction rate comes from our awesome customers.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={DivPercentage} alt="" className="w-1/6" />
          <p className="font-bold text-base xtsm:max-sm:w-3/4">
            Average customer ratings we have got all over internet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rates;
