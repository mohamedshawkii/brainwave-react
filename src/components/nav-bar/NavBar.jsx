import CTA from "../cta/CTA"
import logo from "../../assets/logo.svg"
import { CiMenuFries,CiMenuBurger  } from "react-icons/ci";
import { useState } from "react";

function NavBar() {
  const [isCollapsed,setIsCollapsed] = useState(false);
  return (
    <div className='p-6 flex flex-row justify-between items-center gap-6 bg-transparent'>
      <img src={logo} alt="logo" className="pb-1"/>
      <ul className="
        flex
        flex-row
        gap-3
        justify-end
        items-end
        xtsm:max-sm:hidden
        align-middle">
        <li className="
          text-[#161C2D]
          hover:bg-[#473BF0]
          hover:text-white
          rounded-md
          text-1xl
          font-medium
          py-2 px-4 "><a  href="">Demos</a></li>
        <li className="
          text-[#161C2D]
          hover:bg-[#473BF0]
          hover:text-white
          rounded-md 
          text-1xl 
          font-medium 
          py-2 px-4"><a href="">Pages</a></li>
        <li className="
          text-[#161C2D]
          hover:bg-[#473BF0]
          hover:text-white
          rounded-md 
          text-1xl 
          font-medium 
          py-2 px-4"><a href="">Support</a></li>
        <li className="
          text-[#161C2D]
          hover:bg-[#473BF0]
          hover:text-white
          rounded-md 
          text-1xl 
          font-medium 
          py-2 px-4"><a href="">Contact</a></li>
      </ul>

      <div className="flex flex-row justify-end items-center ml-auto">
        <div className="mr-6 sm:hidden relative flex flex-col justify-between items-end"> 
          {isCollapsed ? 
          <CiMenuBurger size={27} className=" text-[#473BF0] cursor-pointer" onClick={()=>setIsCollapsed(prev => (!prev))} />
          :<CiMenuFries size={27} className=" text-[#473BF0] cursor-pointer" onClick={()=>setIsCollapsed(prev => (!prev))} />}
          <div className="mt-10 absolute">
            {isCollapsed ? 
            <ul className="
              scale-up-center
              flex
              flex-col
              gap-2
              justify-end
              items-end
              sm:hidden 
              bg-[#473BF0]
              rounded-md
              p-6">
              <li className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                align-middle"><a href="">Demos</a></li>
              <li className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                align-middle"><a href="">Pages</a></li>
              <li className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                align-middle"><a href="">Support</a></li>
              <li className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                align-middle"><a href="">Contact</a></li>
            </ul> : null }
          </div>

        </div>
        <CTA/>
      </div>
    </div>
  )
}

export default NavBar