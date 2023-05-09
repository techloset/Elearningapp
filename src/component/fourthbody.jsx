import Slider from "./slider";
import colorb from "../../src/images/paintboard.png";
import catg1 from "../../src/images/Category1.png";
import world from "../../src/images/smallworld.png";
import arrow from "../../src/images/rightarrow.png";
import catg2 from "../../src/images/category2.png";
import catg3 from "../../src/images/category3.png";
import ribn from "../../src/images/ribbon.png";
import arrowsm from "../../src/images/rightarrowsm.png";
import roundarr from "../../src/images/circleright.png";
import star from "../../src/images/singlestar.png";
const Fourthbody = () => {
  return (
    <div
      className="flex justify-around max-xl:flex-wrap  max-sm:pl-[35%] pt-[190px]
     "
    >
      <div className="  ">
        <div className="flex items-center ">
          <div className="w-[80px] h-[0px] bg-[#525596] border-[1px] border-[#525596]"></div>
          <div lassName=" font-[400] text-[20px] text-[#525596] ">
            <p className="text-[#525596] text-[20px] font-nunito-sans">
              TESTIMONIAL
            </p>
          </div>
        </div>
        <div>
          <p className="font-nunito-sans  font-[700] text-[60px] leading-[81.84px] text-[#2F327D]">
            What They Say?
          </p>
          <p className="font-poppins text-[26px] leading-[41.6px] max-sm:w-[400px]  w-[607px] text-[#696984]">
            TOTC has got more than 100k positive ratings from our users around
            the world. Some of the students and teachers were greatly helped by
            the Skilline. Are you too? Please give your assessment
          </p>
        </div>
        <div className="w-[400px] border-[1px] border-[#49BBBD] rounded-[80px] flex flex-row items-center justify-center mt-[43px] ">
          <p className=" font-poppins text-[22px] pl-10  pr-6 text-[#49BBBD]  ">
            Write your assessment
          </p>
          <div className=" border-l-[2px] border-[#49BBBD] rounded-full w-[80px] h-[80px] flex items-center justify-center">
            <img src={arrowsm} alt="" className="absolute" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="smilinglady w-[560px] h-[700px] flex flex-col  justify-end ">
          {" "}
          <div className="border-l-2 bg-white border-[#BDBDD1] h-[140px] pl-[85px]   ">
            <p className="w-[534px] h-[160px] font-nunito-sans font-[400]   text-[22px] leading-[39.6px] text-[#5F5F7E] ">
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-[31px] pl-[80px]">
          <p className="font-nunito-sans font-[600] text-[24px] leading-[43.2px] text-[#5F5F7E]">
            Gloria Rose{" "}
          </p>
          <div>
            <div className="flex">
              {" "}
              <img className="w-[24px] h-[24px]" src={star} alt="" />
              <img className="w-[24px] h-[24px]" src={star} alt="" />
              <img className="w-[24px] h-[24px]" src={star} alt="" />
              <img className="w-[24px] h-[24px]" src={star} alt="" />
              <img className="w-[24px] h-[24px]" src={star} alt="" />
            </div>
            <p className="text-[#80819A] font-nunito-sans font-[600] text-[18px]     ">
              12 reviews at Yelp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthbody;
