import group from "../../src/images/search/Group.png";
import sqbox from "../../src/images/foursquarebox.png";
import linasm from "../../src/images/linasmall.png";
import clock from "../../src/images/clock.png";
import img5 from "../../src/images/search/img5.png";
import img4 from "../../src/images/search/img4.png";
import img6 from "../../src/images/search/img6.png";
import img7 from "../../src/images/search/img7.png";
import lady from "../../src/images/search/lady1.png";
import adam from "../../src/images/search/adam.png";
import tomara from "../../src/images/search/tomara.png";
import coloredlady from "../../src/images/search/coloredlady.png";
import twitter from "../../src/images/search/twitter.png";
import fb from "../../src/images/search/facebook.png";
import ig from "../../src/images/search/instagram.png";
import Ellipse1 from "../../src/images/search/Ellipse2.png";
import Ellipse2 from "../../src/images/search/Ellipse3.png";
import Ellipse3 from "../../src/images/search/Ellipse4.png";
import Ellipse4 from "../../src/images/search/Ellipse1.png";
import Footer from "./footer";
const Search2 = () => {
  return (
    <div>
      <div className="w-[88%] bg-[#9DCCFF] bg-opacity-[0.2] flex flex-wrap justify-around item  ml-[6.2%] pt-[50px]">
        <div className="    ">
          <p className="font-poppins font-[600] text-[30px] text-[#252641] pt-[5%] leading-[45px]">
            Know about learning <br /> learning platform
          </p>
          <div className="flex flex-col gap-3  py-[25px]">
            <div className="flex gap-[16px] justify-start items-center">
              <div className="bg-[#55EFC4] w-[20px] h-[20px]"></div>
              <p className="font-poppins text-[18px] text-[#2D3436]">
                Free E-book, video & consolation
              </p>{" "}
            </div>
            <div className="flex gap-[16px] justify-start items-center">
              <div className="bg-[#55EFC4] w-[20px] h-[20px]"></div>
              <div>
                <p className="font-poppins text-[18px] text-[#2D3436]">
                  Free E-book, video & consolation
                </p>{" "}
              </div>
            </div>
            <div className="flex gap-[16px] justify-start items-center">
              <div className="bg-[#55EFC4] w-[20px] h-[20px]"></div>
              <div>
                <p className="font-poppins text-[18px] text-[#2D3436]">
                  Free E-book, video & consolation
                </p>{" "}
              </div>
            </div>
          </div>

          <button className="bg-[#49BBBD] text-white rounded-[12px]  max-sm:text-[18px] max-sm:px-[30px] max-sm:py-[10px] font-poppins font-[700] text-[24px] py-[16px] px-[39px]  ">
            Start learning now
          </button>
        </div>

        <div>
          <img src={group} alt="" />
        </div>
      </div>

      <div className="bg-[#9DCCFF] bg-no-repeat bg-opacity-[0.2] pt-[50px] w-[100%] flex    flex-col  mt-[65px] pb-[213px]">
        <div className="flex text-center flex-wrap justify-center  sm:justify-between px-[80px] sm:px-[138px]  pb-[50px] ">
          <p className="font-poppins font-[500] text-[30px] ">
            {" "}
            Recommended for you
          </p>
          <p className="font-poppins font-[700] text-[20px]   text-[#49BBBD]">
            See all
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[50px]">
          <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img4} alt="" />
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

            <div className="pt-[20px] ">
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
                <img className="  " src={img5} alt="" />
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
                <img className="  " src={img7} alt="" />
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
                <img className="  " src={img6} alt="" />
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

      <div className="flex justify-between sm:px-[138px] px-[30px]   pt-[90px] pb-[150px]">
        <p className="font-poppins max-md:w-[250px] max-sm:w-[500px]  font-[500] max-md:text-[20px] text-[30px] ">
          Classes tought by real creators
        </p>
        <p className="font-poppins text-[20px] max-lg:hidden font-[700] text-[#49BBBD]">
          See all
        </p>
      </div>

      <div className="pt-[50px] flex flex-wrap gap-[130px] gap-y-56  justify-center">
        <div className="w-[516px] h-[303px] shadow-2xl border-[5px] flex flex-col gap-[10px] justify-center items-center pt-[50px] relative">
          <img className="absolute bottom-[190px]" src={lady} alt="" />
          <p className="font-poppins text-[24px] font-[500] ">Jane Cooper</p>
          <p className="font-poppins text-[18px]  w-[379px] max-sm:pl-[50px] ">
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="w-[516px] h-[303px] shadow-2xl border-[5px] flex flex-col gap-[10px] justify-center items-center pt-[50px] relative">
          <img className="absolute bottom-[190px]" src={adam} alt="" />
          <p className="font-poppins text-[24px] font-[500] ">Jane Cooper</p>
          <p className="font-poppins text-[18px]  w-[379px]">
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="w-[516px] h-[303px] shadow-2xl border-[5px] flex flex-col gap-[10px] justify-center items-center pt-[50px] relative">
          <img className="absolute bottom-[190px]" src={tomara} alt="" />
          <p className="font-poppins text-[24px] font-[500] ">Jane Cooper</p>
          <p className="font-poppins text-[18px]  w-[379px]">
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="w-[516px] h-[303px] shadow-2xl border-[5px] flex flex-col gap-[10px] justify-center items-center pt-[50px] relative">
          <img className="absolute bottom-[190px]" src={lady} alt="" />
          <p className="font-poppins text-[24px] font-[500] ">Jane Cooper</p>
          <p className="font-poppins text-[18px]  w-[379px]">
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="w-[516px] h-[303px] shadow-2xl border-[5px] flex flex-col gap-[10px] justify-center items-center pt-[50px] relative">
          <img className="absolute bottom-[190px]" src={lady} alt="" />
          <p className="font-poppins text-[24px] font-[500] ">Jane Cooper</p>
          <p className="font-poppins text-[18px]  w-[379px]">
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="w-[516px] h-[303px] shadow-2xl border-[5px] flex flex-col gap-[10px] justify-center items-center pt-[50px] relative">
          <img className="absolute bottom-[190px]" src={lady} alt="" />
          <p className="font-poppins text-[24px] font-[500] ">Jane Cooper</p>
          <p className="font-poppins text-[18px]  w-[379px]">
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>

      <div className="bg-[#9DCCFF] bg-opacity-[0.2] ">
        <div className="flex items-center flex-col">
          <p className="font-poppins font-500 text-[30px] py-[70px] pl-[90px] self-start ">
            What our students have to say
          </p>

          <div className="w-[90%]  bg-white rounded-[40px]  ">
            <div className="flex max-xl:flex-col justify-evenly items-center">
              <div className="pt-[50px]">
                {" "}
                <img src={coloredlady} alt="" />{" "}
              </div>

              <div className="flex flex-wrap justify-between  items-center ">
                <div className="flex   flex-wrap  flex-col pl-[60px] sm:pl-[80px]  gap-[31px]">
                  <p className="font-poppins font-[700]  text-[24px] sm:text-[30px] text-[#252641]">
                    Savannah Nguyen
                  </p>
                  <p className="font-poppins font-[500] text-[15px] sm:text-[24px] text-[#252641]">
                    tanya.hill@example.com
                  </p>
                  <p className="w-[75%] ">
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed
                    do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                    adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit
                    amet, consectetur adipising elit, sed do eiusmod tempor
                  </p>
                  <div className="flex gap-[25px]">
                    <img src={twitter} alt="" />
                    <img src={fb} alt="" />
                    <img src={ig} alt="" />
                  </div>
                </div>
              </div>
              <div className=" max-xl:hidden flex flex-col gap-[25px] pt-[150px] pb-[56px] justify-end items-end">
                <img src={Ellipse1} alt="" />
                <img src={Ellipse2} alt="" />
                <img src={Ellipse3} alt="" />
                <img src={Ellipse4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center max-2xl:gap-[30%] max-lg:gap-[15%] gap-[46%] pt-[158px] ">
          <p className="font-poppins font-[500] text-[30px] max-2xl:text-[25px] ">
            Top Education offers and deals are listed here
          </p>
          <p className=" font-poppins font-[700] text-[20px] text-[#49BBBD]  ">
            See all
          </p>
        </div>

        <div className="flex flex-wrap  justify-center gap-[73.3px] pt-[70px]">
          <div className="checkoutzoom w-[509px] h-[500px] ">
            <div className=" flex  flex-col  pt-[45px] pl-[45px] gap-[18px]  ">
              <div className="w-[126px] h-[124px] bg-[#49BBBD] flex justify-center items-center ">
                <p className="font-[700] text-[50px] font-poppins text-white ">
                  50%
                </p>
              </div>
              <div>
                <p className="font-poppins font-[700] text-[28px] text-white ">
                  Lorem ipsum dolor
                </p>
                <p className="font-poppins w-[320px] font-[500] text-[20px] leading-[36px] text-white ">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                  adipising elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          <div className="checkoutkid w-[509px] h-[500px] ">
            <div className=" flex  flex-col  pt-[45px] pl-[45px] gap-[18px]  ">
              <div className="w-[126px] h-[124px] bg-[#49BBBD] flex justify-center items-center ">
                <p className="font-[700] text-[50px] font-poppins text-white ">
                  10%
                </p>
              </div>
              <div>
                <p className="font-poppins font-[700] text-[28px] text-white ">
                  Lorem ipsum dolor
                </p>
                <p className="font-poppins w-[320px] font-[500] text-[20px] leading-[36px] text-white ">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                  adipising elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          <div className="checkoutcat w-[509px] h-[500px] ">
            <div className=" flex  flex-col  pt-[45px] pl-[45px] gap-[18px]  ">
              <div className="w-[126px] h-[124px] bg-[#49BBBD] flex justify-center items-center ">
                <p className="font-[700] text-[50px] font-poppins text-white ">
                  50%
                </p>
              </div>
              <div>
                <p className="font-poppins font-[700] text-[28px] text-white ">
                  Lorem ipsum dolor
                </p>
                <p className="font-poppins w-[320px] font-[500] text-[20px] leading-[36px] text-white ">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                  adipising elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <Footer />
      </div>
    </div>
  );
};

export default Search2;
