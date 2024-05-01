import React from "react";
import CTA from "../cta/CTA";
import Logo from "../../assets/logo-white.svg";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

function Footer() {
  return (
    <div className="bg-[#161C2D]">
      <div
        className="
      flex
      flex-col
      gap-8
      py-[8rem]
      text-gray-300
      xtsm:max-md:px-[32px]
      md:max-lg:px-[72px] 
      lg:max-xl:px-[92px]
      xl:max-wideScreen:px-[224px]"
      >
        <div
          className="
        flex flex-row
        xtsm:max-lg:flex-col
        justify-start items-center
        xtsm:max-md:gap-8
        xtsm:max-sm:py-[2rem]"
        >
          <div className=" mr-auto flex flex-col xtsm:max-lg:items-center xtsm:max-lg:justify-center xtsm:max-lg:text-center gap-4">
            <p className=" font-bold text-2xl">
              Ready to launch your next project?
            </p>
            <p className=" font-base text-base w-3/4">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <CTA />
        </div>

        <hr className=" border-[#F4F7FA] rounded-sm my-12" />

        <div className=" flex flex-row items-start justify-between gap-16 font-thin">
          <div className="flex flex-col justify-start items-start gap-8 w-1/4">
            <img src={Logo} alt="" />
            <p className="w-full">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <nav>
              <ul className=" flex flex-row justify-start items-center gap-4 hover:[&>li]:text-[#83FFA3]">
                <li>
                  <a href="">
                    <TiSocialTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <TiSocialFacebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <TiSocialInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <TiSocialLinkedin />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col justify-start items-start gap-8">
            <p className=" font-thin text-sm ">Company</p>
            <ul className=" flex flex-col gap-2 font-normal text-base hover:[&>li]:text-[#83FFA3]">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-8">
            <p className=" font-thin text-sm">Product</p>
            <ul className=" flex flex-col gap-2 font-normal text-base hover:[&>li]:text-[#83FFA3]">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Help desk</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-8">
            <p className=" font-thin text-sm">Services</p>
            <ul className=" flex flex-col gap-2 font-normal text-base hover:[&>li]:text-[#83FFA3]">
              <li>
                <a href="">Digital Marketing</a>
              </li>
              <li>
                <a href="">Content Writing</a>
              </li>
              <li>
                <a href="">SEO for Business</a>
              </li>
              <li>
                <a href="">UI Design</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-8">
            <p className=" font-thin text-sm">Legal</p>
            <ul className=" flex flex-col gap-2 font-normal text-base hover:[&>li]:text-[#83FFA3]">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Return Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
