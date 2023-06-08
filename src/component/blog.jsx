import work from "../../src/images/working.png";
import ui from "../../src/images/uxui.png";
import reactimg from "../../src/images/react.png";
import phpimg from "../../src/images/php.png";
import javaimg from "../../src/images/javascript.png";
import ladyinblack from "../../src/images/blackdresslady.png";
import lina from "../../src/images/lina.png";
import eye from "../../src/images/eye1.png";
import workcoffe from "../../src/images/zoomwithcoffee.png";
import whitearrow from "../../src/images/whitearrow.png";
import whitearrright from "../../src/images/whitearrowright.png";
import kidtablet from "../../src/images/kidusingtablet.png";
import squarebox from "../../src/images/foursquarebox.png";
import clock from "../../src/images/clock.png";
import smalllina from "../../src/images/linasmall.png";
import ladyonzoom from "../../src/images/uxui.png";
import zoom from "../../src/images/zoomwithcoffee.png";
import catnew from "../../src/images/catnews.png";
import Footer from "./footer";
import Headerpage from "./header";
import Headerpage2 from "./header2";
const Blog = () => {
  return (
    <div>
      <Headerpage2 />
      <div className="flex max-xl:flex-wrap justify-center gap-[176px] mt-[127px]">
        <div>
          <p className="font-poppins font-[700] text-[24px] leading-[36px] ">
            By Themadbrains in{" "}
            <span className="text-[#49BBBD]">inspiration</span>
          </p>
          <p className="font-poppins font-[600] text-[44px] leading-[66px] text-[#2F327D] ">
            Why Swift UI Should Be on the <br /> Radar of Every Mobile <br />{" "}
            Developer
          </p>
          <p className="font-poppins font-[400] text-[24px] leading-[43.2px] text-[#696984] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempos Lorem ipsum dolor sitamet, <br /> consectetur
            adipiscing elit, sed do eiusmod tempor
          </p>
          <div>
            <button
              className="font-poppins font-[700] text-[16px] leading-[24px] px-[40px] pt-[20px] pb-[12px]
             text-white bg-[#49BBBD] rounded-[12px] "
            >
              Start learning now
            </button>
          </div>
        </div>
        <div>
          <img className="w-[779px] h-[526.88px] " src={work} alt="" />
        </div>
      </div>
      <div className="pt-[150px] ml-[7.5%]  ">
        <p className="font-poppins font-[700] text-[30px] text-[#000000CC] opacity-[80%]  ">
          Reading blog list
        </p>
      </div>
      <div className="flex max-lg:flex-wrap justify-center gap-[76px] pt-[26px]">
        <div className="">
          <div className="relative  ">
            <img src={ui} alt="" />
            <button className="font-poppins font-[700] text-[24px] w-[236px] leading-[36px] rounded-[12px] px-[80px] py-[18px] bg-white bg-opacity-[70%] text-[black] opacity-[80%] absolute left-[60px] bottom-[30px] ">
              UX/UI
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={reactimg} alt="" />
            <button className="font-poppins font-[700] w-[236px] text-[24px] leading-[36px] rounded-[12px] px-[80px] py-[18px] bg-white bg-opacity-[70%] text-[black] opacity-[80%] absolute left-[60px] bottom-[30px] ">
              React
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={phpimg} alt="" />
            <button className="font-poppins font-[700] w-[236px] text-[24px] leading-[36px] rounded-[12px] px-[80px] py-[18px] bg-white bg-opacity-[70%] text-[black] opacity-[80%] absolute left-[60px] bottom-[30px] ">
              PHP
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={javaimg} alt="" />
            <button className="font-poppins max-2xl:w-[200px] max-zxl:tex-[18px] max-2xl:px-[20px] w-[236px] font-[700] text-[24px] leading-[36px] rounded-[12px] px-[40px] py-[16px] bg-white bg-opacity-[70%] text-[black] opacity-[80%] absolute left-[60px] bottom-[30px] ">
              JavaScript
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[150px] ml-[7.5%]">
        <p className="font-poppins font-[500] text-[30px] leading-[45px] opacity-[80%]">
          Related Blog{" "}
        </p>
      </div>
      <div className="flex max-lg:flex-wrap justify-center pt-[101px] gap-[132px]">
        <div>
          <img src={ladyinblack} alt="" />
          <p className="font-poppins font-[500] text-[26px] leading-[46.8px] ">
            Class adds $30 million to its balance sheet for a <br />{" "}
            Zoom-friendly edtech solution
          </p>
          <img src={lina} alt="" />
          <p className="font-poppins font-[400] text-[20px] leading-[36px] text-[#696984]">
            Class, launched less than a year ago by Blackboard co-founder <br />
            Michael Chasen, integrates exclusively...
          </p>
          <div className="pb-[50px]  justify-between   flex   ">
            <div>
              {" "}
              <button className="text-[#696984] pl-[30px] pt-[30px] border-b border-[#696984]  font-[400] text-[22px] leading-[39.6px] ">
                Read more
              </button>
            </div>
            <div className="flex items-center gap-[22.49px] ">
              <div>
                <img src={eye} alt="" />
              </div>
              <div>
                <p>251,232</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div>
            <img src={workcoffe} alt="" />
            <p className="font-poppins font-[500] text-[26px] leading-[46.8px] ">
              Class adds $30 million to its balance sheet for a <br />{" "}
              Zoom-friendly edtech solution
            </p>
            <img src={lina} alt="" />
            <p className="font-poppins font-[400] text-[20px] leading-[36px] text-[#696984]">
              Class, launched less than a year ago by Blackboard co-founder{" "}
              <br />
              Michael Chasen, integrates exclusively...
            </p>
            <div className="pb-[50px]  justify-between   flex   ">
              <div>
                {" "}
                <button className="text-[#696984] pl-[30px] pt-[30px] border-b border-[#696984]  font-[400] text-[22px] leading-[39.6px] ">
                  Read more
                </button>
              </div>
              <div className="flex items-center gap-[22.49px] ">
                <div>
                  <img src={eye} alt="" />
                </div>
                <div>
                  <p>251,232</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-[23px] gap-[20px]">
              {" "}
              <div className="w-[50px] h-[50px] bg-[#49BBBD] bg-opacity-[80%] rounded-[4px] relative">
                {" "}
                <img
                  className="absolute left-[17px] bottom-[17px]"
                  src={whitearrow}
                  alt=""
                />{" "}
              </div>
              <div className="w-[50px] h-[50px] bg-[#49BBBD]   rounded-[4px] relative">
                {" "}
                <img
                  className="absolute left-[17px] bottom-[17px]"
                  src={whitearrright}
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-[7.5%]">
        <p className="font-poppins font-[500] text-[30px] leading-[45px] ">
          Marketing Articles
        </p>
      </div>{" "}
      <div className="flex max-lg:flex-wrap justify-center gap-[88px] pt-[70px] ">
        <div>
          <div>
            <img src={kidtablet} alt="" />
          </div>
          <div className="flex gap-[139px] pt-[20px] ">
            <div className="flex gap-[10px]">
              <img src={squarebox} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] text-[#696984]">
                Design
              </p>
            </div>
            <div className="flex gap-[10px]">
              <img src={clock} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] ">
                3 Month
              </p>
            </div>
          </div>
          <div>
            {" "}
            <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
              AWS Certified solutions <br /> Architect
            </p>
            <p className="font-poppins font-[400] text-[18px] leading-[32.4px] text-[#696984] pt-[21px] ">
              Lorem ipsum dolor sit amet, <br /> consectetur adipising elit, sed
              do <br />
              eiusmod tempor
            </p>
            <div className="flex gap-[108px]  pt-[17px]  ">
              <div className="flex gap-[17.78px] items-center">
                <div>
                  <img src={smalllina} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="flex gap-[14px] items-center ">
                <p className="line-through font-poppins italic font-[300] text-[18px] leading-[27px] text-[#00000080]   ">
                  $100
                </p>
                <p className="text-[#49BBBD] font-poppins font-[700]  text-[24px] leading-[36px]">
                  $80
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="w-[338px] h-[239px]" src={ladyonzoom} alt="" />
          </div>
          <div className="flex gap-[139px] pt-[20px] ">
            <div className="flex gap-[10px]">
              <img src={squarebox} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] text-[#696984]">
                Design
              </p>
            </div>
            <div className="flex gap-[10px]">
              <img src={clock} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] ">
                3 Month
              </p>
            </div>
          </div>
          <div>
            {" "}
            <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
              AWS Certified solutions <br /> Architect
            </p>
            <p className="font-poppins font-[400] text-[18px] leading-[32.4px] text-[#696984] pt-[21px] ">
              Lorem ipsum dolor sit amet, <br /> consectetur adipising elit, sed
              do <br />
              eiusmod tempor
            </p>
            <div className="flex gap-[108px]  pt-[17px]  ">
              <div className="flex gap-[17.78px] items-center">
                <div>
                  <img src={smalllina} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="flex gap-[14px] items-center ">
                <p className="line-through font-poppins italic font-[300] text-[18px] leading-[27px] text-[#00000080]   ">
                  $100
                </p>
                <p className="text-[#49BBBD] font-poppins font-[700]  text-[24px] leading-[36px]">
                  $80
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="w-[338px] h-[239px]" src={zoom} alt="" />
          </div>
          <div className="flex gap-[139px] pt-[20px] ">
            <div className="flex gap-[10px]">
              <img src={squarebox} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] text-[#696984]">
                Design
              </p>
            </div>
            <div className="flex gap-[10px]">
              <img src={clock} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] ">
                3 Month
              </p>
            </div>
          </div>
          <div>
            {" "}
            <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
              AWS Certified solutions <br /> Architect
            </p>
            <p className="font-poppins font-[400] text-[18px] leading-[32.4px] text-[#696984] pt-[21px] ">
              Lorem ipsum dolor sit amet, <br /> consectetur adipising elit, sed
              do <br />
              eiusmod tempor
            </p>
            <div className="flex gap-[108px]  pt-[17px]  ">
              <div className="flex gap-[17.78px] items-center">
                <div>
                  <img src={smalllina} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="flex gap-[14px] items-center ">
                <p className="line-through font-poppins italic font-[300] text-[18px] leading-[27px] text-[#00000080]   ">
                  $100
                </p>
                <p className="text-[#49BBBD] font-poppins font-[700]  text-[24px] leading-[36px]">
                  $80
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="w-[338px] h-[239px]" src={catnew} alt="" />
          </div>
          <div className="flex gap-[139px] pt-[20px] ">
            <div className="flex gap-[10px]">
              <img src={squarebox} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] text-[#696984]">
                Design
              </p>
            </div>
            <div className="flex gap-[10px]">
              <img src={clock} alt="" />
              <p className="font-poppins font-[500] text-[14px] leading-[25.2px] ">
                3 Month
              </p>
            </div>
          </div>
          <div>
            {" "}
            <p className="font-poppins font-[500] text-[24px] leading-[36px] text-[#252641]">
              AWS Certified solutions <br /> Architect
            </p>
            <p className="font-poppins font-[400] text-[18px] leading-[32.4px] text-[#696984] pt-[21px] ">
              Lorem ipsum dolor sit amet, <br /> consectetur adipising elit, sed
              do <br />
              eiusmod tempor
            </p>
            <div className="flex gap-[108px]  pt-[17px]  ">
              <div className="flex gap-[17.78px] items-center">
                <div>
                  <img src={smalllina} alt="" />
                </div>
                <p className="font-poppins font-[500] text-[18px] leading-[27px]">
                  Lina
                </p>
              </div>
              <div className="flex gap-[14px] items-center ">
                <p className="line-through font-poppins italic font-[300] text-[18px] leading-[27px] text-[#00000080]   ">
                  $100
                </p>
                <p className="text-[#49BBBD] font-poppins font-[700]  text-[24px] leading-[36px]">
                  $80
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[171px]">
        <Footer />
      </div>
    </div>
  );
};
export default Blog;
