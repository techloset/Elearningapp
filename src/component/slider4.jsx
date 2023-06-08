import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../src/images/kidusingtablet.png";
import leftfacearrow from "../../src/images/sliderleft.png";
import rightfacearrow from "../../src/images/sliderright.png";
import squarebox from "../../src/images/foursquarebox.png";
import clock from "../../src/images/clock.png";
import { useRef } from "react";
import lina from "../../src/images/linasmall.png";
import coffe from "../../src/images/zandc.png";

const Slider4 = () => {
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
    <div>
      <div className="max-sm:pt-10 w-[100%] h-[1022px] relative bg-[#9DCCFF] bg-opacity-[0.2] pl-[147px]  ">
        <div className=" flex justify-between items-center pt-[50px] mr-[85px] ">
          <div>
            {" "}
            <p className="font-poppins font-[600] text-[36px] leading-[54px] text-[#2D3436]  ">
              Recommended for you{" "}
            </p>
          </div>
          <div>
            <p className="font-poppins font-[700] text-[20px] text-[#49BBBD]">
              See all
            </p>
          </div>
        </div>
        <Slider className="pt-[50px]" ref={slider} {...settings}>
          <div className="  !w-[374px] !h-[617px]  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img1} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={squarebox} alt="" />
                  <div>
                    <p>Design</p>
                  </div>
                </div>
                <div className="flex gap-[10px] pt-[10px] ">
                  <img src={clock} alt="" />
                  <p>3 months</p>
                </div>
              </div>
            </div>

            <div className="pt-[20px]">
              <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
                AWS Certified solutions Architect
              </p>
              <p className="font-poppins text-[18px] pt-[21px] leading-[32.4px] text-[#696984]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex justify-between  pt-[17px] items-center">
              <div className="flex items-center gap-[10px] ">
                <div>
                  {" "}
                  <img src={lina} alt="" />{" "}
                </div>
                <div>
                  <p className="font-[500] text-[18px] leading-[27%] ">Lina</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] ">
                <p className="line-through font-poppins font-[300] italic text-[18px] text-black opacity-[50%] ">
                  $100
                </p>
                <p className="font-poppins font-[700] text-[24px] leading-[36px] text-[#49BBBD]">
                  $80
                </p>
              </div>
            </div>
          </div>

          <div className="  !w-[374px] !h-[617px]   bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={coffe} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={squarebox} alt="" />
                  <div>
                    <p>Design</p>
                  </div>
                </div>
                <div className="flex gap-[10px] pt-[10px] ">
                  <img src={clock} alt="" />
                  <p>3 months</p>
                </div>
              </div>
            </div>

            <div className="pt-[20px]">
              <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
                AWS Certified solutions Architect
              </p>
              <p className="font-poppins pt-[21px] text-[18px] leading-[32.4px] text-[#696984]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex justify-between pt-[17px]  items-center">
              <div className="flex items-center gap-[10px] ">
                <div>
                  {" "}
                  <img src={lina} alt="" />{" "}
                </div>
                <div>
                  <p className="font-[500] text-[18px] leading-[27%] ">Lina</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] ">
                <p className="line-through font-poppins font-[300] italic text-[18px] text-black opacity-[50%] ">
                  $100
                </p>
                <p className="font-poppins font-[700] text-[24px] leading-[36px] text-[#49BBBD]">
                  $80
                </p>
              </div>
            </div>
          </div>
          <div className="  !w-[374px] !h-[617px]   bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={coffe} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={squarebox} alt="" />
                  <div>
                    <p>Design</p>
                  </div>
                </div>
                <div className="flex gap-[10px] pt-[10px] ">
                  <img src={clock} alt="" />
                  <p>3 months</p>
                </div>
              </div>
            </div>

            <div className="pt-[20px]">
              <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
                AWS Certified solutions Architect
              </p>
              <p className="font-poppins pt-[21px] text-[18px] leading-[32.4px] text-[#696984]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex justify-between pt-[17px]  items-center">
              <div className="flex items-center gap-[10px] ">
                <div>
                  {" "}
                  <img src={lina} alt="" />{" "}
                </div>
                <div>
                  <p className="font-[500] text-[18px] leading-[27%] ">Lina</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] ">
                <p className="line-through font-poppins font-[300] italic text-[18px] text-black opacity-[50%] ">
                  $100
                </p>
                <p className="font-poppins font-[700] text-[24px] leading-[36px] text-[#49BBBD]">
                  $80
                </p>
              </div>
            </div>
          </div>
          <div className="  !w-[374px] !h-[617px]  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img1} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={squarebox} alt="" />
                  <div>
                    <p>Design</p>
                  </div>
                </div>
                <div className="flex gap-[10px] pt-[10px] ">
                  <img src={clock} alt="" />
                  <p>3 months</p>
                </div>
              </div>
            </div>

            <div className="pt-[20px]">
              <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
                AWS Certified solutions Architect
              </p>
              <p className="font-poppins pt-[21px] text-[18px] leading-[32.4px] text-[#696984]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex justify-between pt-[17px]  items-center">
              <div className="flex items-center gap-[10px] ">
                <div>
                  {" "}
                  <img src={lina} alt="" />{" "}
                </div>
                <div>
                  <p className="font-[500] text-[18px] leading-[27%] ">Lina</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] ">
                <p className="line-through font-poppins font-[300] italic text-[18px] text-black opacity-[50%] ">
                  $100
                </p>
                <p className="font-poppins font-[700] text-[24px] leading-[36px] text-[#49BBBD]">
                  $80
                </p>
              </div>
            </div>
          </div>
          <div className="  !w-[374px] !h-[617px]  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={coffe} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={squarebox} alt="" />
                  <div>
                    <p>Design</p>
                  </div>
                </div>
                <div className="flex gap-[10px] pt-[10px] ">
                  <img src={clock} alt="" />
                  <p>3 months</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-poppins  font-[500] text-[24px] leading-[36px] text-[#252641]">
                AWS Certified solutions Architect
              </p>
              <p className="font-poppins text-[18px] pt-[21px] leading-[32.4px] text-[#696984]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex justify-between pt-[17px]  items-center">
              <div className="flex items-center gap-[10px] ">
                <div>
                  {" "}
                  <img src={lina} alt="" />{" "}
                </div>
                <div>
                  <p className="font-[500] text-[18px] leading-[27%] ">Lina</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] ">
                <p className="line-through font-poppins font-[300] italic text-[18px] text-black opacity-[50%] ">
                  $100
                </p>
                <p className="font-poppins font-[700] text-[24px] leading-[36px] text-[#49BBBD]">
                  $80
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

export default Slider4;
