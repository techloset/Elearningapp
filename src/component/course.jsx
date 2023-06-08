import Slider3 from "./slider3";
import img1 from "../../src/images/fvtcourse/brush.png";
import img2 from "../../src/images/fvtcourse/monitor.png";
import img3 from "../../src/images/fvtcourse/brger.png";
import img4 from "../../src/images/fvtcourse/business.png";
import img5 from "../../src/images/fvtcourse/marketing.png";
import img6 from "../../src/images/fvtcourse/photography.png";
import img7 from "../../src/images/fvtcourse/acting.png";
import Slider4 from "./slider4";
import sqbox from "../../src/images/foursquarebox.png";
import linasm from "../../src/images/linasmall.png";
import clock from "../../src/images/clock.png";
import kid from "../../src/images/pressrelease.png";
import Footer from "./footer";
import Headerpage2 from "./header2";

const Course = () => {
  return (
    <div>
      <div>
        <Headerpage2 />
      </div>

      <div className="pt-[30px]">
        <Slider3 />
      </div>
      <p className="font-poppins  font-[600] text-[36px] max-lg:text-[25px] text-[#252641] text-center lg:ml-[120px] ">
        Choice favourite course from top category
      </p>
      <div className="flex  gap-[80px] flex-wrap justify-center items-center pt-[53px] px-16">
        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img1} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Design</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img2} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Development</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img3} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Development</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img4} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Business</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>

        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img5} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Marketing</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img6} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Photography</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img7} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Actine</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-[349px] h-[377px] rounded-[20px] shadow-xl bg-white flex gap-[23px] flex-col justify-center items-center">
            <div>
              <img src={img4} alt="" />
            </div>
            <p className="font-poppins font-[600] text-[30px] ">Business</p>
            <p className="font-poppins text-[18px] leading-[27px] text-[#696984] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[100px]">{<Slider4 />}</div>
      {
        <div>
          <p className="font-poppins font-[500px] text-[25px] text-center lg:text-[30px] leading-[45px] lg:ml-[6.77%] pt-[90px] ">
            Get choice of your course
          </p>
        </div>
      }
      {
        <div className="flex flex-wrap justify-center gap-[50px] pt-[50px] items-center">
          <div className="  !w-[374px] !h-[617px]  bg-[white]  rounded-[20px] text-center shadow-xl  ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
                  <img src={linasm} alt="" />{" "}
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
          <div className="  !w-[374px] !h-[617px]  bg-[white]  rounded-[20px] text-center shadow-xl   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
              <p className="font-poppins font-[500]  text-[24px] leading-[36px] text-[#252641]">
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
                  <img src={linasm} alt="" />{" "}
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
          <div className="  !w-[374px] !h-[617px] shadow-xl   bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
                  <img src={linasm} alt="" />{" "}
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

          <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
                  <img src={linasm} alt="" />{" "}
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
        </div>
      }
      <div>
        <div className="flex  justify-center pt-[197px]">
          <div className="w-[81%] bg-[#252641] flex flex-col  items-center pt-[70px] rounded-[37px]  ">
            <p className="font-poppins text-white  font-[400] text-center text-[24px]  sm:text-[30px] lg:text-[36px] leading-[54px]  ">
              Online coaching lessons for remote learning.
            </p>
            <p className="font-poppins text-[16px] sm:text-[24px] leading-[43px] text-white text-center w-[81%] pt-[30px]     ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
              elit, sed do eiusmod tempor
            </p>

            <div className="pt-[73px] pb-[83px]">
              <div className="w-[263px] h-[63px] bg-[#49BBBD] rounded-[12px]">
                <p className="text-white font-poppins font-[700] text-[16px] leading-[24px] px-[40px] py-[20px]">
                  Start learning now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[7%] pt-[90px] ">
          <p className="font-poppins font-[500] text-[25px] text-center lg:text-[30px] leading-[45px] ">
            The course in personal development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[50px] pt-[50px]">
          <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
                  <img src={linasm} alt="" />{" "}
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
          <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
                  <img src={linasm} alt="" />{" "}
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
          <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
                  <img src={linasm} alt="" />{" "}
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
          <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={kid} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
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
                  <img src={linasm} alt="" />{" "}
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
        </div>

        <div className="  bg-[#9DCCFF] bg-opacity-[0.2] pt-[90px] ">
          <div className="ml-[7%] pt-[90px] ">
            <p className="font-poppins font-[500] text-[25px] text-center lg:text-[30px] leading-[45px] ">
              Student are viewing
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-[50px] pt-[50px]">
            <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
              <div className="pl-[20px] pt-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <img className="  " src={kid} alt="" />
                </div>
                <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                  <div className="flex gap-[10px] ">
                    <img src={sqbox} alt="" />
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
                    <img src={linasm} alt="" />{" "}
                  </div>
                  <div>
                    <p className="font-[500] text-[18px] leading-[27%] ">
                      Lina
                    </p>
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
            <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
              <div className="pl-[20px] pt-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <img className="  " src={kid} alt="" />
                </div>
                <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                  <div className="flex gap-[10px] ">
                    <img src={sqbox} alt="" />
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
                    <img src={linasm} alt="" />{" "}
                  </div>
                  <div>
                    <p className="font-[500] text-[18px] leading-[27%] ">
                      Lina
                    </p>
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
            <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
              <div className="pl-[20px] pt-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <img className="  " src={kid} alt="" />
                </div>
                <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                  <div className="flex gap-[10px] ">
                    <img src={sqbox} alt="" />
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
                    <img src={linasm} alt="" />{" "}
                  </div>
                  <div>
                    <p className="font-[500] text-[18px] leading-[27%] ">
                      Lina
                    </p>
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
            <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
              <div className="pl-[20px] pt-[20px]">
                <div className="flex flex-col justify-center items-center">
                  <img className="  " src={kid} alt="" />
                </div>
                <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                  <div className="flex gap-[10px] ">
                    <img src={sqbox} alt="" />
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
                    <img src={linasm} alt="" />{" "}
                  </div>
                  <div>
                    <p className="font-[500] text-[18px] leading-[27%] ">
                      Lina
                    </p>
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
          </div>
          <div className="pt-[132px]">{<Footer />}</div>
        </div>
      </div>
    </div>
  );
};
export default Course;
