import React from "react";
import Cards from "../../subcomponents/servicescards/Cards.jsx";
import DesignerRafiki from "../../assets/Designer-rafiki.png";
import ProgrammingRafiki from "../../assets/Programming-rafiki.png";
import NotesRafiki from "../../assets/Notes-rafiki.png";
import Oval1 from "../../assets/Oval-1.png";
import stars from "../../assets/stars.svg";
import { motion, spring } from "framer-motion";

const varientCard = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

function CardServices() {
  return (
    <>
      <div
        className="
        flex flex-col 
        justify-center
        items-center 
        gap-2
        xtsm:max-md:px-[24px]
        md:max-lg:px-[48px]
        lg:max-xl:px-[96px]
        xl:px-[224px]"
      >
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className="flex flex-col justify-center items-center my-[4rem] w-6/12 text-center">
            <p className=" text-base font-medium xtsm:max-sm:text-sm text-[#F64B4B]">
              Our services
            </p>
            <p className=" text-2xl font-black xtsm:max-sm:text-base">
              We provide great services for our customers based on needs
            </p>
          </div>
          <motion.div
            className="grid grid-rows-1 gap-4 "
            variants={varientCard}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="row-start-1 xtsm:max-sm:row-start-1 sm:max-lg:row-start-1"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <Cards
                styles={{ backgroundColor: "#83FFA3" }}
                ImgeWidth={{ height: 100 }}
                CardImg={DesignerRafiki}
                title={"Graphic Design"}
                paragraph={
                  "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                }
              />
            </motion.div>
            <motion.div
              className="row-start-1 xtsm:max-sm:row-start-2 sm:max-lg:row-start-1"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <Cards
                styles={{ backgroundColor: "#473BF0" }}
                ImgeWidth={{ height: 100 }}
                CardImg={ProgrammingRafiki}
                title={"Web Development"}
                paragraph={
                  "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                }
              />
            </motion.div>
            <motion.div
              className="row-start-1 xtsm:max-sm:row-start-3 sm:max-lg:row-start-3"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <Cards
                styles={{ backgroundColor: "#F64B4B" }}
                ImgeWidth={{ height: 100 }}
                CardImg={NotesRafiki}
                title={"Content Writing"}
                paragraph={
                  "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
                }
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 my-[4rem] xtsm:max-md:flex-col">
          <motion.div
            className="flex flex-row justify-center items-center"
            initial={{ opacity: "", x: 100 }}
            whileInView={{ opacity: "", x: 0 }}
            transition={{ type: "spring" }}
          >
            <img src={Oval1} alt="profile pic" className="w-3/4" />
          </motion.div>
          <div
            className="
          flex flex-col line-clamp-3 gap-4 w-4/6 
          xtsm:max-md:justify-center 
          xtsm:max-md:items-center 
          xtsm:max-md:text-center "
          >
            <motion.div
              initial={{ opacity: "", x: -100 }}
              whileInView={{ opacity: "", x: 0 }}
              transition={{ type: "spring" }}
            >
              <img src={stars} className="w-20 font-bold" alt="svg stars" />
            </motion.div>
            <motion.p
              className="font-bold"
              initial={{ opacity: "", x: 240 }}
              whileInView={{ opacity: "", x: 0}}
              transition={{ type: "spring",}}
            >
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Albino. It was super easy to edit and publish.”
            </motion.p>
            <motion.p
              initial={{ opacity: "", x: -100 }}
              whileInView={{ opacity: "", x: 0 }}
              transition={{ type: "spring" }}
            >
              <span className=" font-semibold mr-1">Franklin Hicks</span>Web
              Developer
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardServices;
