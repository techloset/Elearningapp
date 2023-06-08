import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../src/images/zoomwithcoffee.png";
import img2 from "../../src/images/dealing.png";
import img3 from "../../src/images/workinglaptop.png";
import leftfacearrow from "../../src/images/sliderleft.png";
import rightfacearrow from "../../src/images/sliderright.png";
import linasm from "../../src/images/linasmall.png";

import { useRef } from "react";

const Slider3 = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      // {
      //   breakpoint: 1513,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: false,
      //   },
      // },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 500,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  return (
    <div>
      <div className="max-sm:pt-10  relative bg-[#9DCCFF] bg-opacity-[0.2] pl-[147px]  ">
        <div className=" flex flex-wrap justify-between items-center pt-[50px] mr-[85px] ">
          <div>
            {" "}
            <p className="font-poppins font-[600] text-[36px] leading-[54px] text-[#2D3436]  ">
              Welcome back, ready for your next lesson?{" "}
            </p>
          </div>
          <div>
            <p className="font-poppins font-[700] text-[20px] text-[#49BBBD]">
              View hisotry
            </p>
          </div>
        </div>
        <Slider className="pt-[50px]" ref={slider} {...settings}>
          <div className="  !w-[529px] !h-[474px] bg-[white]  rounded-[20px] text-center !mr-[25px]  ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img1} alt="" />
              </div>
              <div className=" flex flex-col   items-center">
                <p className="font-poppins  font-[500] text-[24px] text-[#252641]   pt-[20px]  ">
                  AWS Certified Solutions Architect
                </p>
              </div>
              <div className="flex justify-start gap-[15px] items-center">
                <div>
                  <img src={linasm} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="pt-[25px]">
                <div className="w-[483px] h-[8px] bg-[#D9D9D9] ">
                  <div className="w-[372px] h-[8px] bg-[#49BBBD]"></div>
                </div>
              </div>
              <div className="flex justify-end pr-[45px] pt-[12px] ">
                <p className="font-poppins font-[600] text-[14px] text-[#000000] opacity-[50%]">
                  Lesson 5 of 7
                </p>
              </div>
            </div>
          </div>

          <div className="  !w-[529px] !h-[474px] bg-[white]  rounded-[20px] text-center  ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img2} alt="" />
              </div>
              <div className=" flex flex-col   items-center">
                <p className="font-poppins  font-[500] text-[24px] text-[#252641]   pt-[20px]  ">
                  AWS Certified Solutions Architect
                </p>
              </div>
              <div className="flex justify-start gap-[15px] items-center">
                <div>
                  <img src={linasm} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="pt-[25px]">
                <div className="w-[483px] h-[8px] bg-[#D9D9D9] ">
                  <div className="w-[372px] h-[8px] bg-[#49BBBD]"></div>
                </div>
              </div>
              <div className="flex justify-end pr-[45px] pt-[12px] ">
                <p className="font-poppins font-[600] text-[14px] text-[#000000] opacity-[50%]">
                  Lesson 5 of 7
                </p>
              </div>
            </div>
          </div>
          <div className="  !w-[529px] !h-[474px] bg-[white]  rounded-[20px] text-center  ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img3} alt="" />
              </div>
              <div className=" flex flex-col   items-center">
                <p className="font-poppins  font-[500] text-[24px] text-[#252641]   pt-[20px]  ">
                  AWS Certified Solutions Architect
                </p>
              </div>
              <div className="flex justify-start gap-[15px] items-center">
                <div>
                  <img src={linasm} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="pt-[25px]">
                <div className="w-[483px] h-[8px] bg-[#D9D9D9] ">
                  <div className="w-[372px] h-[8px] bg-[#49BBBD]"></div>
                </div>
              </div>
              <div className="flex justify-end pr-[45px] pt-[12px] ">
                <p className="font-poppins font-[600] text-[14px] text-[#000000] opacity-[50%]">
                  Lesson 5 of 7
                </p>
              </div>
            </div>
          </div>

          <div className="  !w-[529px] !h-[474px] bg-[white]  rounded-[20px] text-center  ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img1} alt="" />
              </div>
              <div className=" flex flex-col   items-center">
                <p className="font-poppins  font-[500] text-[24px] text-[#252641]   pt-[20px]  ">
                  AWS Certified Solutions Architect
                </p>
              </div>
              <div className="flex justify-start gap-[15px] items-center">
                <div>
                  <img src={linasm} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="pt-[25px]">
                <div className="w-[483px] h-[8px] bg-[#D9D9D9] ">
                  <div className="w-[372px] h-[8px] bg-[#49BBBD]"></div>
                </div>
              </div>
              <div className="flex justify-end pr-[45px] pt-[12px] ">
                <p className="font-poppins font-[600] text-[14px] text-[#000000] opacity-[50%]">
                  Lesson 5 of 7
                </p>
              </div>
            </div>
          </div>
          <div className="  !w-[529px] !h-[474px] bg-[white]  rounded-[20px] text-center  ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img2} alt="" />
              </div>
              <div className=" flex flex-col   items-center">
                <p className="font-poppins  font-[500] text-[24px] text-[#252641]   pt-[20px]  ">
                  AWS Certified Solutions Architect
                </p>
              </div>
              <div className="flex justify-start gap-[15px] items-center">
                <div>
                  <img src={linasm} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="pt-[25px]">
                <div className="w-[483px] h-[8px] bg-[#D9D9D9] ">
                  <div className="w-[372px] h-[8px] bg-[#49BBBD]"></div>
                </div>
              </div>
              <div className="flex justify-end pr-[45px] pt-[12px] ">
                <p className="font-poppins font-[600] text-[14px] text-[#000000] opacity-[50%]">
                  Lesson 5 of 7
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="sm:flex gap-[33.5px] max-sm:flex max-sm:gap-[20px] sm:pt-[26.12px] pb-[46px] ">
          <button
            className=" absolute  right-[135px]"
            onClick={() => slider?.current?.slickPrev()}
          >
            <img src={leftfacearrow} alt="" />
          </button>

          <button
            className=" absolute   right-[65px]"
            onClick={() => slider?.current?.slickNext()}
          >
            <img src={rightfacearrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
