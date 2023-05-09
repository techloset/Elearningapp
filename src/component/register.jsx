//import image from "../../src/images/loginimg.png";
import eyeImg from "../../src/images/eye.png";

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
const Registerpage = () => {
  const [passwordvisible, setpasswordvisible] = useState("password");
  const togglePassvisiblity = () => {
    setpasswordvisible(passwordvisible === "password" ? "test" : "password");
  };
  return (
    <div className="  flex  flex-col md:flex-row  ">
      <div className="hello1 max-sm:hidden mt-[38px] ml-[41px]  w-[731px] bg-contain bg-no-repeat h-[825px]   ">
        <p className="text-white pt-[671px] pl-[69px] pb-[8px] pr-[250px]  font-poppins  font-semibold text-3xl leading-[48px] ">
          Lorem Ipsum is simply <br />
          <span className="font-normal text-xl leading-[38px] ">
            {" "}
            Lorem Ipsum is simply
          </span>
        </p>
      </div>

      <div className="flex flex-col  items-center gap-5 md:pl-[111px]  pt-[113px]  ">
        <div className="  ">
          <p className=" font-poppins font-normal text-base leading-6 text-[#000000]  ">
            Welcome to lorem..!
          </p>
        </div>

        <div className="pt-[12px]">
          <div className="   rounded-[33px] bg-[#49BBBD] bg-opacity-60 flex  py-[10px] pl-[13px] w-[329px] h-[59px] justify-center  ">
            <button className="text-white font-medium text-base leading-6   font-poppins  rounded-[33px] px-[51px] py-[8px] ">
              Login
            </button>

            <div>
              <button className="text-white  font-poppins pl-[40px] pr-[40px] font-normal text-base leading-6 rounded-[33px] px-[51px] py-[8px] bg-[#49BBBD]  ">
                Register
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="   font-poppins pt-[32px] font-normal text-base leading-6 h-[49px] text-[#5B5B5B] ">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry.
          </p>
        </div>
        <div className="pt-[55px]">
          <div>
            <p className="font-poppins font-normal text-base leading-6 ">
              Email Address
            </p>
            <div className="pt-[12px]">
              <input
                className="font-poppins  font-light text-[15px] leading-[22.5px] pl-[31px]  rounded-[40px] border-[1px] border-[#49BBBD] w-[435px] h-[54px]  "
                type="email"
                placeholder="Enter your Email Address"
              />
            </div>
          </div>

          <div className="pt-[30px]">
            <p className="   font-poppins font-normal text-base leading-6  h-[24px]">
              User name
            </p>
          </div>
          <div className=" pt-[12px]">
            <input
              className="rounded-[40px] w-[435px] h-[54px] pl-[31px] pt-[15px] pb-[16px] border-[1px] border-[#49BBBD] font-light text-[15px] leading-[22.5px]   "
              type="text"
              placeholder="Enter your user name"
            />
          </div>
          <br />
          <div className=" ">
            <p className="   font-poppins pt-[30px ] font-normal text-base leading-6 h-[24px]  ">
              Password
            </p>

            <div className=" pt-[12px]">
              <input
                className="rounded-[40px] w-[435px] h-[54px] pl-[31px] pt-[15px] pb-[16px] border-[1px] font-light text-[15px] leading-[22.5px]  border-[#49BBBD]  "
                type="password"
                placeholder="Enter your password"
              />
              <button
                onClick={togglePassvisiblity}
                className="absolute pt-[580px] right-[150px] top-[32px] "
              >
                <img src={eyeImg} alt="eye" />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex w-[100%] justify-end mt-[50px]  ">
          <button className="bg-[#49BBBD] w-[232px] h-[49px] rounded-[36px]  font-poppins font-normal text-base leading-6 text-[#FFFFFF]  ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
