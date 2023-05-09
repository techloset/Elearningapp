import React, { Component } from "react";
import Slider from "react-slick";
import { useRef } from "react";
import l1 from "../../src/images/l1.png";
import l2 from "../../src/images/l2.png";
import l3 from "../../src/images/l3.png";
import l4 from "../../src/images/l4.png";
import l5 from "../../src/images/l5.png";
import l6 from "../../src/images/l6.png";
import l7 from "../../src/images/l7.png";
import l8 from "../../src/images/l8.png";
import greenimg from "../../src/images/Rectangle.png";
const Slider1 = () => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 7,
    slidesToScroll: 1,
    innerWidth: 200,
  };
  return (
    <div className="bg-[#EBF5FF]    ">
      {/* <Slider ref={slider} {...settings}>
        <div className="      ">
          <img className="   " src={l1} alt="" />
        </div>
        <div className="     ">
          <img className="  ] " src={l2} alt="" />
        </div>
        <div className="">
          <img className="  " src={l3} alt="" />
        </div>
        <div className="">
          {" "}
          <img className="  " src={l4} alt="" />{" "}
        </div>
        <div className="">
          {" "}
          <img className="  " src={l5} alt="" />{" "}
        </div>
        <div className="">
          {" "}
          <img className="   " src={l6} alt="" />{" "}
        </div>
        <div className="">
          {" "}
          <img className="   " src={l7} alt="" />{" "}
        </div>
        <div className=" ">
          {" "}
          <img className="  " src={l8} alt="" />{" "}
        </div>
      </Slider>{" "}
      <div>
        <div className="         bg-black w-[104px] h-[418px] transform rotate-[-4deg]  pr-10  mt-[30px] rounded-[24px]  ">
          <div className="bg-[green]  w-[80px] h-[382px] left-[14.1px] transform rotate-[deg]  mr-10  mt-[30px] rounded-[14px] pl-[35px] ">
            <div className="bg-[orange] w-[62px] h-[319px] rounded-[24px  ] rotate-[-2deg] "></div>
          </div>
        </div>
      </div> */}

      
    </div>
  );
};
export default Slider1;
