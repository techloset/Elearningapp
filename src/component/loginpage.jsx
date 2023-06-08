//import image from "../../src/images/loginimg.png";
import eyeImg from "../../src/images/eye.png";

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
const Loginpage = () => {
  const [passwordvisible, setpasswordvisible] = useState("password");
  const togglePassvisiblity = () => {
    setpasswordvisible(passwordvisible === "password" ? "text" : "password");
  };
  return (
    <div className="  flex  flex-col lg:flex-row pr-5  ">
      <div className="flex justify-center">
        <div
          className="hello max-sm:hidden mt-[38px] ml-[41px]  min-w-[500px] 
        bg-no-repeat h-[825px] w-[737px] rounded-[29px]   "
        >
          <p className="text-white pt-[671px] pl-[69px] pb-[8px] pr-[250px]  font-poppins  font-semibold text-3xl leading-[48px] ">
            Lorem Ipsum is simply <br />
            <span className="font-normal text-xl leading-[38px] ">
              {" "}
              Lorem Ipsum is simply
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col  items-center gap-5 md:pl-[111px]  pt-[145px]    ">
        <div className="  ">
          <p className=" font-poppins font-normal text-base leading-6 text-[#000000]  ">
            Welcome to lorem..!
          </p>
        </div>

        <div className="pt-[24px]">
          <div className="   rounded-[33px] bg-[#49BBBD] bg-opacity-60 flex max-sm:ml-[10px] py-[10px] pl-[13px]  h-[59px] justify-center  ">
            <button className="text-white font-medium text-base leading-6   font-poppins bg-[#49BBBD] rounded-[33px] px-[51px] py-[8px] ">
              Login
            </button>

            <button className="text-white max-sm:pl-[20px]  font-poppins pl-[45px] pr-[60px] font-normal text-base leading-6 ">
              Register
            </button>
          </div>
        </div>
        <div>
          <p className=" sm:pl-[6.5%] max-sm:pl-[6%] font-poppins pt-[52px] font-normal text-base max-sm:w-[331px]  leading-6 h-[49px] text-[#5B5B5B] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="pt-[55px] max-sm:w-[317px] max-sm:pt-[92px]   w-[100%] sm:ml-[19%] ">
          <p className="   font-poppins font-normal text-base leading-6 max-sm:pl-[5%] h-[24px] w-[100%] ">
            User name
          </p>
          <div className=" pt-[12px]">
            <input
              className="rounded-[40px] w-[100%] sm:w-[80%] max-sm:ml-[3%]  max-sm:w-[317px] h-[54px] pl-[31px] pt-[15px] pb-[16px] border-[1px] border-[#49BBBD] font-light text-[15px] leading-[22.5px]   "
              type="text"
              placeholder="Enter your user name"
            />
          </div>
          <br />
          <div className=" max-sm:pl-[3%]  ">
            <p className=" max-sm:w-[317px]  font-poppins max-sm:pl-[5%] pt-[30px ] font-normal text-base leading-6 h-[24px]  ">
              Password
            </p>

            <div className="relative pt-[12px] ">
              <input
                className="rounded-[40px]    max-sm:w-[317px] w-[100%] sm:w-[80%] h-[54px] pl-[31px] pt-[15px] pb-[16px] border-[1px] font-light text-[15px] leading-[22.5px]  border-[#49BBBD]  "
                type={passwordvisible}
                placeholder="Enter your password"
              />
              <button onClick={togglePassvisiblity} className=" ">
                <img
                  className=" absolute right-7 bottom-5 sm:right-[25%] max-sm:top-[35px] "
                  src={eyeImg}
                  alt="eye"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="  flex justify-between max-sm:justify-center  sm:ml-[19%] max-sm:gap-[17%]  sm:justify-between sm:w-[100%]   w-[100%] ">
          <div className="flex max-sm:pl-7 max-sm:gap-1  gap-2 sm:pr-[50px] max-sm:pr-[2px] ">
            <input className="  " type="checkbox" />

            <p className="font-poppins font-light text-xs leading-4  ">
              Remember me
            </p>
          </div>
          <p className="font-light text-xs leading-4 sm:pr-[20%] ">
            Forgot Password ?
          </p>
        </div>
        <div className=" flex w-[100%]  justify-center lg:justify-end mt-[50px] max-sm:w-[45%]  ">
          <button className="bg-[#49BBBD] w-[232px] h-[49px] rounded-[36px]  font-poppins font-normal text-base leading-6 text-[#FFFFFF]  ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
