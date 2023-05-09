import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

import headerimg2 from "../../src/images/totcgray.png";
import linaonline from "../../src/images/linasmall.png";
import downarrow from "../../src/images/arrowdown.png";

const Headerpage2 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="   ">
      <div className="  pt-[30px] w-[100%]    ">
        <div className="list-none flex justify-between items-center    w-[100%] ">
          <button className="ml-[6%]">
            <img className="text-[#5B5B5B]" src={headerimg2} alt="" />
          </button>
          <div className="flex w-[100%] pl-[15%] justify-end lg:gap-[3.5%] xl:gap-[4.4%]  items-center ">
            <div className="flex w-[100%] pl-[15%] justify-end lg:gap-[8.5%] xl:gap-[11.4%] max-lg:hidden  items-center ">
              <li>
                <button className=" text-[#5B5B5B] font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Home
                </button>
              </li>
              <li>
                <button className=" text-[#5B5B5B] font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Courses
                </button>
              </li>
              <li>
                <button className=" text-[#5B5B5B] font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Careers
                </button>
              </li>
              <li>
                <button className=" text-[#5B5B5B]  font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter">
                  Blog
                </button>
              </li>
              <li>
                <button className=" text-[#5B5B5B] font-poppins font-normal text-[22px] leading-[33px]  tracking-tighter whitespace-nowrap">
                  About Us
                </button>
              </li>
            </div>

            <div className="flex gap-[15px] items-center">
              <img src={linaonline} alt="" />
              <p className="font-poppins font-[500] size-[18px] leading-[27px]  ">
                {" "}
                Lina
              </p>
              <img src={downarrow} alt="" /><div></div>
            </div>
            {/* <CiMenuBurger
              className="md:hidden  max-sm:pl-[2%]"
              size={30}
              onClick={() => setToggle(!toggle)}
            /> */}
          </div>
        </div>
      </div>
      {/* <div>
        {toggle && (
          <div className="sm:hidden  list-none  bg-[#1F2022] text-white font-Josefin Sans flex flex-col space-y-2 p-4    ">
            <li className="text-cyan-500  ">
              <button>Portfolio</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Client reviews</button>
            </li>
            <li>
              <button>Contact me</button>
            </li>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Headerpage2;
