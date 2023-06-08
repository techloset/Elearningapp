import downarrow from "../../src/images/search/downarrow.png";
import sqbox from "../../src/images/foursquarebox.png";
import linasm from "../../src/images/linasmall.png";
import clock from "../../src/images/clock.png";
import kid from "../../src/images/pressrelease.png";
import img1 from "../../src/images/search/img1.png";
import img2 from "../../src/images/search/img2.png";
import img3 from "../../src/images/search/img3.png";
import img4 from "../../src/images/search/img4.png";
import img5 from "../../src/images/search/img5.png";
import img6 from "../../src/images/search/img6.png";
import img7 from "../../src/images/search/img7.png";
import img8 from "../../src/images/search/img8.png";
import Search2 from "./search2";
const Search = () => {
  return (
    <div>
      <div className="searchbg w-[100%]  bg-cover pt-[80px] max:sm:mb-[80px]  bg-no-repeat flex flex-col justify-center items-center   ">
        <div className=" flex  justify-between  w-[80%]    sm:pl-[50px]   bg-[white] pr-[8px] py-2 ">
          {" "}
          <input
            className="py-[25px] font-poppins  text-[20px] text-[#83839A99] text-opacity-[60%]    focus:out rounded-[10px]  "
            type="text"
            placeholder="Search your favourite course"
          />
          <button className="text-[24px]  max-sm:hidden font-poppins font-[700]   text-white bg-[#49BBBD] py-[16px]   rounded-[12px] px-[40px]   top-[86px] right-[13%] ">
            Search
          </button>
        </div>
        <button className="text-[24px]  sm:hidden font-poppins font-[700]   text-white bg-[#49BBBD] py-[16px]   rounded-[12px] px-[40px]   top-[86px] right-[13%] ">
          Search
        </button>
        <div className="flex flex-wrap justify-center items-center gap-[20px] pt-[20px]  pb-[80px]">
          <button className="bg-white flex max-sm:text-[18px]  justify-center items-center gap-[10px] py-[19px] px-[20px] font-poppins font-[500] text-[24px]  text-[#252641] rounded-[10px]">
            Subject <img src={downarrow} alt="" />{" "}
          </button>
          <button className="bg-white max-sm:hidden flex justify-center items-center gap-[10px] py-[19px] px-[20px] font-poppins font-[500] text-[24px]  text-[#252641] rounded-[10px]">
            Partner <img src={downarrow} alt="" />{" "}
          </button>
          <button className="bg-white flex max-sm:text-[18px] justify-center items-center gap-[10px] py-[19px] px-[20px] font-poppins font-[500] text-[24px]  text-[#252641] rounded-[10px]">
            Program <img src={downarrow} alt="" />{" "}
          </button>
          <button className="bg-white flex max-sm:hidden justify-center items-center gap-[10px] py-[19px] px-[20px] font-poppins font-[500] text-[24px]  text-[#252641] rounded-[10px]">
            Language <img src={downarrow} alt="" />{" "}
          </button>
          <button className="bg-white max-sm:hidden flex justify-center items-center gap-[10px] py-[19px] px-[20px] font-poppins font-[500] text-[24px]  text-[#252641] rounded-[10px]">
            Abaliability <img src={downarrow} alt="" />{" "}
          </button>
          <button className="bg-white flex  max-sm:hidden justify-center items-center gap-[10px] py-[19px] px-[20px] font-poppins font-[500] text-[24px]   text-[#252641] rounded-[10px]">
            Learning Type <img src={downarrow} alt="" />{" "}
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap px-16 justify-center items-center ">
        <div className="flex flex-wrap justify-center gap-[50px] pt-[50px]">
          <div className="  !w-[374px] !h-[617px] shadow-xl  bg-[white]  rounded-[20px] text-center   ">
            <div className="pl-[20px] pt-[20px]">
              <div className="flex flex-col justify-center items-center">
                <img className="  " src={img1} alt="" />
              </div>
              <div className="flex justify-around gap-[139px] items-center pt-[20px]">
                <div className="flex gap-[10px] ">
                  <img src={sqbox} alt="" />
                  <div>
                    <p>Design</p>
                  </div>
                </div>
                <div className="flex gap-[10px] pt-[10px] pr-[20px] ">
                  <img src={clock} alt="" />
                  <p>3 months</p>
                </div>
              </div>
            </div>

            <div className="pt-[20px] px-[20px] ">
              <p className="font-poppins font-[500] text-[24px] text-left leading-[36px] text-[#252641]">
                AWS Certified solutions Architect
              </p>
              <p className="font-poppins text-left text-[18px] pt-[21px] leading-[32.4px] text-[#696984]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex justify-between px-[20px] pt-[17px] items-center">
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
                <img className="  " src={img2} alt="" />
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
                <img className="  " src={img3} alt="" />
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
                <img className="  " src={img8} alt="" />
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
      <Search2 />
    </div>
  );
};

export default Search;
