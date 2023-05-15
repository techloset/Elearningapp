import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from "../../src/images/linaslider.png";
// import Img2 from "../../src/images/linaslider.png";
import leftfacearrow from "../../src/images/leftsideslider.png";
import rightfacearrow from "../../src/images/rightsidearrow.png";
import android from "../../src/images/androidimg.png";
import ios from "../../src/images/iosimg.png";
import { useRef } from "react";

const MyFun = () => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      {
        breakpoint: 1513,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-sm:pt-10 w-[1920px] relative bg-[#9DCCFF] bg-opacity-[0.2] pl-[147px]  ">
      <p className="font-poppins font-[600] text-[36px] leading-[54px] text-[#2D3436] pt-[80px]">
        What our students have to say
      </p>
      <Slider className="pt-[50px]" ref={slider} {...settings}>
        <div className="  !w-[384px] !h-[395px] bg-[white]  rounded-[20px] text-center  ">
          <div className="flex flex-col justify-center items-center">
            <img className="  " src={Img1} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-poppins  font-[600] text-[24px] text-[#2D3436] pt-[20px]  ">
              Bulkin Simons
            </p>
            <p className="font-poppins text-[18px] leading-[27px] w-[329px]  pt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="  !w-[384px] !h-[395px] bg-[white]  rounded-[20px] text-center  ">
          <div className="flex flex-col justify-center items-center">
            <img className="  " src={Img1} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-poppins  font-[600] text-[24px] text-[#2D3436] pt-[20px]  ">
              Bulkin Simons
            </p>
            <p className="font-poppins text-[18px] leading-[27px] w-[329px]  pt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="  !w-[384px] !h-[395px] bg-[white]  rounded-[20px] text-center  ">
          <div className="flex flex-col justify-center items-center">
            <img className="  " src={Img1} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-poppins  font-[600] text-[24px] text-[#2D3436] pt-[20px]  ">
              Bulkin Simons
            </p>
            <p className="font-poppins text-[18px] leading-[27px] w-[329px]  pt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="  !w-[384px] !h-[395px] bg-[white]  rounded-[20px] text-center  ">
          <div className="flex flex-col justify-center items-center">
            <img className="  " src={Img1} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-poppins  font-[600] text-[24px] text-[#2D3436] pt-[20px]  ">
              Bulkin Simons
            </p>
            <p className="font-poppins text-[18px] leading-[27px] w-[329px]  pt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="  !w-[384px] !h-[395px] bg-[white]  rounded-[20px] text-center  ">
          <div className="flex flex-col justify-center items-center">
            <img className="  " src={Img1} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-poppins  font-[600] text-[24px] text-[#2D3436] pt-[20px]  ">
              Bulkin Simons
            </p>
            <p className="font-poppins text-[18px] leading-[27px] w-[329px]  pt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="  !w-[384px] !h-[395px] bg-[white]  rounded-[20px] text-center  ">
          <div className="flex flex-col justify-center items-center">
            <img className="  " src={Img1} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-poppins  font-[600] text-[24px] text-[#2D3436] pt-[20px]  ">
              Bulkin Simons
            </p>
            <p className="font-poppins text-[18px] leading-[27px] w-[329px]  pt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
      </Slider>
      <div className="sm:flex gap-[33.5px] max-sm:flex max-sm:gap-[20px] sm:pt-[26.12px] pb-[46px] ">
        <button
          className=" absolute top-[310px] left-[100px]"
          onClick={() => slider?.current?.slickPrev()}
        >
          <img src={leftfacearrow} alt="" />
        </button>

        <button
          className=" absolute top-[310px] left-[1850px]"
          onClick={() => slider?.current?.slickNext()}
        >
          <img src={rightfacearrow} alt="" />
        </button>
      </div>

      <div className="w-[1682px] h-[218px] bg-[#252641] rounded-[37px] flex justify-around items-center gap-[400px]  ">
        <p className=" font-poppins font-[600] text-[36px] text-white ">
          APP is available for free
        </p>

        <div className="flex justify-center items-center gap-[24px] ">
          <div>
            <img src={android} alt="" />
          </div>
          <div>
            <img src={ios} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFun;
