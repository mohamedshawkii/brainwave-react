import CTAOnLightBg from "../../subcomponents/cta/CTAOnLightBg.jsx";
import logo from "../../assets/logo.svg";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

function NavBar() {
  const NavLinks = [
    {
      LinkName: "Demos",
    },
    {
      LinkName: "Pages",
    },
    {
      LinkName: "Support",
    },
    {
      LinkName: "Contact",
    },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isActive, setIsActive] = useState("Demos");
  return (
    <nav
      className="
    py-4
    flex flex-row
    justify-between
    sm:max-md:gap-1
    items-center gap-6
    bg-transparent
    xtsm:max-md:px-[24px]
    md:max-lg:px-[48px]
    lg:max-xl:px-[96px]
    xl:px-[192px]"
    >
      <img src={logo} alt="logo" className="pb-1" />
      {NavLinks.map((item) => (
        <div
          className="
        flex
        flex-row
        gap-5
        justify-end
        items-end
        xtsm:max-sm:hidden
        align-middle
        text-center"
        >
          <button
            onClick={() => setIsActive(item.LinkName)}
            href=""
            className={`
           rounded-md
           font-medium
           py-1 px-3
           ${
             item.LinkName === isActive
               ? "text-white bg-[#473BF0] "
               : "text-[#161C2D]"
           }
           `}
          >
            {item.LinkName}
          </button>
        </div>
      ))}
      <div className="flex flex-row justify-end items-center ml-auto">
        <div className="sm:hidden relative flex flex-col justify-between items-end">
          {isCollapsed ? (
            <CiMenuBurger
              size={27}
              className=" text-[#473BF0] cursor-pointer"
              onClick={() => setIsCollapsed((prev) => !prev)}
            />
          ) : (
            <CiMenuFries
              size={27}
              className="text-[#473BF0] cursor-pointer"
              onClick={() => setIsCollapsed((prev) => !prev)}
            />
          )}
          <div className="mt-10 absolute">
            {isCollapsed ? (
              <nav>
                <ul
                  className="
              scale-up-center
              flex
              flex-col
              gap-2
              justify-center
              items-center
              sm:hidden 
              bg-[#473BF0]
              rounded-md
              p-6"
                >
                  <a href="">
                    <li
                      className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                text-center"
                    >
                      Demos
                    </li>
                  </a>
                  <a href="">
                    <li
                      className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                text-center"
                    >
                      Pages
                    </li>
                  </a>
                  <a href="">
                    <li
                      className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                text-center"
                    >
                      Support
                    </li>
                  </a>
                  <a href="">
                    <li
                      className="
                text-white
                hover:bg-[#F64B4B]
                hover:text-[#161C2D]
                rounded-md 
                font-medium 
                w-full
                py-2 px-8
                text-center"
                    >
                      Contact
                    </li>
                  </a>
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
        <div className=" xtsm:max-sm:hidden">
          <CTAOnLightBg />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
