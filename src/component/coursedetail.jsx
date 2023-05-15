import Headerpage2 from "./header2";
import smallheaderimg from "../../src/images/coursedetails/smallbg.png";
import star from "../../src/images/coursedetails/star.png";
import camera from "../../src/images/coursedetails/camera.png";
import page from "../../src/images/coursedetails/page.png";
import graph from "../../src/images/coursedetails/graph.png";
import twitter from "../../src/images/coursedetails/twitter.png";
import yt from "../../src/images/coursedetails/youtube.png";
import fb from "../../src/images/coursedetails/facebook.png";
import tg from "../../src/images/coursedetails/telegram.png";
import ig from "../../src/images/coursedetails/instagram.png";
import wa from "../../src/images/coursedetails/whatsapp.png";
import star5 from "../../src/images/coursedetails/5star.png";
import lina from "../../src/images/coursedetails/lina.png";
import clock from "../../src/images/coursedetails/clock.png";
import classroom from "../../src/images/classroom.png";
import sqbox from "../../src/images/foursquarebox.png";
import linasm from "../../src/images/linasmall.png";
import kid from "../../src/images/pressrelease.png";
import Footer from "./footer";

const Coursedetail = () => {
  return (
    <div>
      <div>
        <Headerpage2 />
      </div>
      <div className="poster bg-no-repeat bg-contain w-[1920px] h-[652px]  "></div>
      <div className="  flex justify-around ">
        <div>
          <div className="flex gap-[50px]">
            <div>
              <button className="bg-[#000000] bg-opacity-[10%] text-[#000000] rounded-[12px] px-[50px] py-[17px]">
                Overview
              </button>
            </div>
            <div>
              <button className="bg-[#000000] bg-opacity-[10%]  text-[#000000] rounded-[12px] px-[50px] py-[17px]">
                Overview
              </button>
            </div>
            <div>
              <button className="bg-[#000000] bg-opacity-[10%] text-[#000000] rounded-[12px] px-[50px] py-[17px]">
                Overview
              </button>
            </div>
            <div>
              <button className="bg-[#49BBBD] text-white   rounded-[12px] px-[50px] py-[17px]">
                Overview
              </button>
            </div>
          </div>
          <div className="pt-[83px] ">
            <div className="w-[950px] h-[764px] bg-[#9DCCFF4D] p-[50px]">
              <div className="  flex gap-[46px] ">
                <div className="w-[257px] h-[199px] bg-white rounded-[20px]">
                  <div className="p-[48px] flex flex-col gap-[18px] ">
                    <p className="font-poppins font-[600] text-[30px]  ">
                      4 out of 5
                    </p>
                    <img src={star5} alt="" />
                    <p className="font-poppins text-[20px] text-[#00000080]">
                      {" "}
                      Top Raiting
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  gap-[12px]  ">
                  <div className="flex items-center gap-[45px]">
                    <p className="text-[#00000080] tetx-[20px] leading-[30px]">
                      5 Star{" "}
                    </p>
                    <div className="w-[432px] bg-[#D9D9D9] h-[8px]">
                      <div className="w-[332px] bg-[#49BBBD] h-[8px] "></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[45px]">
                    <p className="text-[#00000080] tetx-[20px] leading-[30px]">
                      4 Star{" "}
                    </p>
                    <div className="w-[432px] bg-[#D9D9D9] h-[8px]">
                      <div className="w-[332px] bg-[#49BBBD] h-[8px] "></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[45px]">
                    <p className="text-[#00000080] tetx-[20px] leading-[30px]">
                      3 Star{" "}
                    </p>
                    <div className="w-[432px] bg-[#D9D9D9] h-[8px]">
                      <div className="w-[332px] bg-[#49BBBD] h-[8px] "></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[45px]">
                    <p className="text-[#00000080] tetx-[20px] leading-[30px]">
                      2 Star{" "}
                    </p>
                    <div className="w-[432px] bg-[#D9D9D9] h-[8px]">
                      <div className="w-[332px] bg-[#49BBBD] h-[8px] "></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[45px]">
                    <p className="text-[#00000080] tetx-[20px] leading-[30px]">
                      1 Star{" "}
                    </p>
                    <div className="w-[432px] bg-[#D9D9D9] h-[8px]">
                      <div className="w-[332px] bg-[#49BBBD] h-[8px] "></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between pt-[81px] ">
                  <div className="flex">
                    <img src={lina} alt="" />
                    <div>
                      <p className="font-[500] text-[18px]">Lina</p>
                      <img src={star5} alt="" />
                    </div>
                  </div>

                  <div className="flex gap-[10px] mr-[20px] ">
                    <img src={clock} alt="" />
                    <p>3 months</p>
                  </div>
                </div>
                <p className="font-poppins text-[20px] leading-[36px] text-[#696984] pt-[23px]">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
                <div className="pt-[23px]">
                  <div className="w-[94%] bg-[#696984] border-[0.5px]"></div>
                </div>{" "}
              </div>
              <div>
                <div className="flex items-center justify-between pt-[81px] ">
                  <div className="flex">
                    <img src={lina} alt="" />
                    <div>
                      <p className="font-[500] text-[18px]">Lina</p>
                    </div>
                  </div>

                  <div className="flex gap-[10px] mr-[20px] ">
                    <img src={clock} alt="" />
                    <p>3 months</p>
                  </div>
                </div>
                <p className="font-poppins text-[20px] leading-[36px] text-[#696984] pt-[23px]">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="  mt-[-245px] bg-white p-[30px] rounded-[20px] ">
          <div className="  ">
            <img src={smallheaderimg} alt="" />
            <div className="flex items-center gap-[22px] ">
              <p className="font-poppins font-[600] text-[45px] leading-[67.5%] pt-[18px]">
                $49.65
              </p>
              <p className="line-through font-[600] text-[28px] leading-[42px] text-[#00000080] ">
                {" "}
                $99.99
              </p>
              <p className="line-through font-[600] text-[28px] leading-[42px] text-[#00000080] ">
                50% Off
              </p>
            </div>
          </div>
          <p className="font-[600] text-[20px] text-[#49BBBD] pt-[30px] ">
            11 hour left at this price
          </p>
          <div className="pt-[35px]">
            <button className="bg-[#49BBBD] px-[177px] py-[17px] text-white font-poppins font-[700] text-[20px]   rounded-[12px]">
              Buy Now{" "}
            </button>
          </div>
          <div className="pt-[29px]">
            <div className="w-[442px] bg-[#696984] border-[1px] border-[#696984]    "></div>
          </div>
          <p className="font-poppins font-[600]  text-[30px] pt-[30px]">
            This Course included
          </p>
          <div className=" pt-[30px]  ">
            <div className="">
              <div className="flex gap-[9px] ">
                <img src={star} alt="" />
                <p className="font-poppins font-[600] text-[14px] text-[#00000080]">
                  Money Back Guarantee
                </p>
              </div>
              <div>
                <div className="flex gap-[9px] pt-[12px]">
                  <img src={camera} alt="" />
                  <p className="font-poppins font-[600] text-[14px] text-[#00000080]">
                    Access on all devices
                  </p>
                </div>
              </div>
              <div>
                <div className="flex gap-[9px] pt-[12px]">
                  <img src={page} alt="" />
                  <p className="font-poppins font-[600] text-[14px] text-[#00000080]">
                    Certification of completion
                  </p>
                </div>
              </div>
              <div>
                <div className="flex gap-[9px] pt-[12px]">
                  <img src={graph} alt="" />
                  <p className="font-poppins font-[600] text-[14px] text-[#00000080]">
                    32 Moduls
                  </p>
                </div>
              </div>
              <div className="pt-[29px]">
                <div className="w-[442px] bg-[#696984] border-[1px] border-[#696984]    "></div>
              </div>
              <p className="font-poppins font-[600] text-[30px] pt-[34px]">
                Training 5 or more people
              </p>
              <p className="font-poppins font-[400] text-[14px] text-[#696984] leading-[25.2px] w-[425px]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <div className="pt-[39px]">
                <div className="w-[442px] bg-[#696984] border-[1px] border-[#696984]    "></div>
              </div>
              <p className="font-poppins font-[600] text-[30px]  pt-[39px] ">
                Share this course
              </p>
              <div className="flex gap-[25px] pt-[53px]">
                <img src={twitter} alt="" />
                <img src={fb} alt="" />
                <img src={yt} alt="" />
                <img src={ig} alt="" />
                <img src={tg} alt="" />
                <img src={wa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9DCCFF] bg-opacity-[0.2%] w-[1920px] h-[896px] ">
        <div className="flex justify-center gap-[50px] pt-[50px] items-center bg-[#9DCCFF30]    w-[1920px] h-[896px]">
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
      </div>
      <div className="flex max-xl:flex-wrap justify-center   max-xl:ml-[90px] gap-[67px] items-center   ">
        <div className="w-[700px]">
          <div className="w-[73px] h-[73px] bg-[#33EFA0] rounded-full absolute  "></div>
          <div>
            <p className="font-poppins font-[500] text-[36px] leading-[57.6px] text-[#2F327D]  relative ">
              Everything you can do in a physical <br /> classroom,{" "}
              <span className="text-[#00CBB8]">you can do with TOTC</span>
            </p>
          </div>
          <div className="flex relative w-[100%] ">
            <p className="font-poppins text-[24px] leading-[43.2px] text-[#696984] w-[] max-lg:text-[20px] relative">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud- based system.
            </p>
            <div className="w-[30px] h-[30px] bg-[#33EFA0] rounded-full absolute right-0 bottom-16"></div>
          </div>
          <button className="font-poppins text-[22px] max-lg:text-[20px] leading-[39.6px] text-[#696984] border-b-2 border-[#696984] ">
            Learn more
          </button>
        </div>

        <div className=" ">
          <img className="" src={classroom} width={705} height={471} alt="" />
        </div>
      </div>
      <div className="pt-[223px]">
        <div className="flex justify-between">
          <p className="font-poppins font-[500] text-[30px] ml-[190px] ">
            Top Education offers and deals are listed here
          </p>
          <p className="font-poppins font-[700] text-[20px] text-[#49BBBD] mr-[230px]">
            See all
          </p>
        </div>
      </div>

      <div className=" flex justify-center gap-[70px] pt-[60px] ">
        <div className="ladyinblack w-[506px] h-[477px] rounded-[20px] flex flex-col justify-center pl-[50px] gap-[30px] ">
          <div className="w-[100px] h-[100px] rounded-[12px] bg-[#FF000099] font-poppins font-[700] text-[24px] text-white py-[35px] px-[20px] ">
            {" "}
            50%
          </div>
          <div>
            <p className="font-poppins font-[600] text-[32px] text-white ">
              FOR INSTRUCTORS
            </p>
            <p className="font-poppins text-[24px]  leading-[43px] text-white">
              TOTC’s school management software helps traditional and online
              schools manage scheduling,
            </p>
          </div>
        </div>
        <div className="ladyinblack w-[506px] h-[477px] rounded-[20px] flex flex-col justify-center pl-[50px] gap-[30px] ">
          <div className="w-[100px] h-[100px] rounded-[12px] bg-[#FF000099] font-poppins font-[700] text-[24px] text-white py-[35px] px-[20px] ">
            {" "}
            50%
          </div>
          <div>
            <p className="font-poppins font-[600] text-[32px] text-white ">
              FOR INSTRUCTORS
            </p>
            <p className="font-poppins text-[24px]  leading-[43px] text-white">
              TOTC’s school management software helps traditional and online
              schools manage scheduling,
            </p>
          </div>
        </div>
        <div className="ladyinblack w-[506px] h-[477px] rounded-[20px] flex flex-col justify-center pl-[50px] gap-[30px] ">
          <div className="w-[100px] h-[100px] rounded-[12px] bg-[#FF000099] font-poppins font-[700] text-[24px] text-white py-[35px] px-[20px] ">
            {" "}
            50%
          </div>
          <div>
            <p className="font-poppins font-[600] text-[32px] text-white ">
              FOR INSTRUCTORS
            </p>
            <p className="font-poppins text-[24px]  leading-[43px] text-white">
              TOTC’s school management software helps traditional and online
              schools manage scheduling,
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default Coursedetail;
