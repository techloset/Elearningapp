import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

import headerimg from "../../src/images/headerimg.png";
const Headerpage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="  bg-[#49BBBD]  ">
      <div className="  pt-[30px] w-[100%]    ">
        <div className="list-none flex justify-between items-center    w-[100%] ">
          <button className="ml-[6%]">
            <img className="  " src={headerimg} alt="" />
          </button>
          <div className="flex w-[100%] pl-[15%]   lg:gap-[3.5%] xl:gap-[4.4%] justify-center  items-center ">
            <div className="flex w-[100%] pl-[15%] justify-end lg:gap-[8.5%] xl:gap-[11.4%] max-lg:hidden  items-center ">
              <li>
                <button className=" text-white font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Home
                </button>
              </li>
              <li>
                <button className=" text-white font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Courses
                </button>
              </li>
              <li>
                <button className=" text-white font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Careers
                </button>
              </li>
              <li>
                <button className=" text-white  font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Blog
                </button>
              </li>
              <li>
                <button className=" text-white font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter whitespace-nowrap">
                  About Us
                </button>
              </li>
            </div>

            <div className="flex max-lg:justify-center items-center  gap-[26px] mr-[6.3%]  max-sm:hidden  ">
              <li>
                <button className="  rounded-[80px]     bg-white w-[120px] h-[40px] xl:w-[160px] xl:h-[60px] font-poppins font-medium text-[22px] leading-[33px] tracking-tighter ">
                  Login
                </button>
              </li>
              <li>
                <button className="   rounded-[80px]    bg-[#FFFFFF4D] w-[120px] h-[40px] xl:w-[160px] xl:h-[60px] text-white font-[500px] text-[22px] leading-[33px] font-poppins  ">
                  Sign Up
                </button>
              </li>
            </div>
          </div>
          <CiMenuBurger
            className="lg:hidden    max-sm:pl-[2%]"
            size={50}
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      <div>
        {toggle && (
          <div className="sm:hidden  list-none  bg-[#1F2022] text-white font-Josefin Sans flex flex-col space-y-2 p-4 ">
            <li className="text-cyan-500  ">
              <button>Home</button>
            </li>
            <li>
              <button>Courses</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button> About Us</button>
            </li>

            <div className="flex gap-2">
              <li className=" ">
                <button className=" max-sm:w-[120px] max-sm:h-[50px]  rounded-[80px] max-sm:bg-[#FFFFFF4D]  bg-white w-[160px] h-[60px] font-poppins font-medium text-[22px] leading-[33px] tracking-tighter ">
                  Login
                </button>
              </li>
              <li>
                <button className="  max-sm:w-[120px] max-sm:h-[50px]  rounded-[80px]   bg-[#FFFFFF4D]  w-[160px] h-[60px] text-white font-[500px] text-[22px] leading-[33px] font-poppins  ">
                  Sign Up
                </button>
              </li>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headerpage;
