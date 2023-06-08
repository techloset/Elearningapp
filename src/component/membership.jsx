import Headerpage2 from "./header2";
import icong from "../../src/images/icon.png";
import individ from "../../src/images/Individual.png";
import icongold from "../../src/images/goldenicon.png";
import iconblue from "../../src/images/iconblue.png";
import carporate from "../../src/images/Corporate.png";
import dot from "../../src/images/lightgreen.png";
import da from "../../src/images/downarrow.png";
import MyFun from "./slider2";
import zoomwithCoffe from "../../src/images/zoomwithcoffee.png";
import Footer from "./footer";
import { useState } from "react";
const Membership = () => {
  const [data, setData] = useState([
    { showContent: false, heading: "Lorem ipsum dolor sit amet" },
    { showContent: false, heading: "Consectetur adipiscing elit, sed do" },
    { showContent: false, heading: "Eiusmod tempos Lorem ipsum" },
    { showContent: false, heading: "Lorem ipsum dolor sit amet" },
    { showContent: false, heading: "Lorem ipsum dolor sit amet" },
  ]);
  function getIndex(selectedIndex) {
    console.log(selectedIndex);
    const updatedData = data.map((item, index) => {
      if (selectedIndex === index) {
        return {
          showContent: !item.showContent,
          heading: item.heading,
        };
      } else {
        return item;
      }
    });
    setData(updatedData);
  }
  return (
    <div>
      <Headerpage2 />
      <div>
        <p className="font-   font-[800] text-[64px]  text-[#49BBBD] text-center pt-[150px] ">
          Affordable pricing
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[62px] pt-[109px] ">
        <div className="flex flex-col gap-[18px] max-xl:gap-[20px] max-xl:px-[20px]">
          <p className="font-iner font-[700] text-[18px] text-[#49BBBD] leading-[32px]">
            Like a pussy
          </p>
          <p className="font-iner font-[800] text-[48px] leading-[56px]      ">
            {" "}
            Free{" "}
            <span className="font-iner font-[700] leading- text-[20px] ">
              {" "}
              / Forever{" "}
            </span>
          </p>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icong} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Components-driven system</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icong} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Sales-boosting landing pages</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icong} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Awesome Feather icons pack</p>
            </div>
          </div>
          <div className="pt-[119px]">
            <div className="  w-[306px] h-[64px] rounded-[16px] bg-white border-[1px] border-[#ADADAD]  ">
              {" "}
              <p className="font-iner font-[700] text-[24px] leading-[24px]  text-center py-[16px] text-[#49BBBD] ">
                Try for free
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <div className="flex justify-between  items-center">
            <div>
              <img src={individ} alt="" />
              showContent
            </div>
            <div className="w-[90px] h-[32px] rounded-[99px] border-[#6C5CE7] border-[1px]  ">
              {" "}
              <p className="font-iner font-[800] text-[12px] px-[20px] py-[8px] leading-[14.52px] ">
                BEST!
              </p>{" "}
            </div>
          </div>
          <p className="font-iner font-[800] text-[48px] leading-[56px]      ">
            $24
            <span className="font-iner font-[700] leading- text-[20px] ">
              {" "}
              / MONTH{" "}
            </span>
          </p>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icongold} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Components-driven system</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icongold} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Sales-boosting landing pages</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icongold} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Awesome Feather icons pack</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icongold} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Themed into 3 different styles</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={icongold} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Will help to learn Figma</p>
            </div>
          </div>
          <div className="pt-[16px]">
            <div className="bg-[#49BBBD] w-[306px] h-[64px] rounded-[16px]  ">
              {" "}
              <p className="font-iner font-[700] text-[24px] leading-[24px] text-white text-center py-[16px] ">
                Regular license
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <div>
            <img src={carporate} alt="" />
          </div>
          <p className="font-iner font-[800] text-[48px] leading-[56px]      ">
            {" "}
            $12
            <span className="font-iner font-[700] leading- text-[20px] ">
              {" "}
              / EDITOR{" "}
            </span>
          </p>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={iconblue} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Components-driven system</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={iconblue} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Sales-boosting landing pages</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={iconblue} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Awesome Feather icons pack</p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div>
              {" "}
              <img src={iconblue} alt="" />{" "}
            </div>

            <div className="font-iner  text-[18px] text-[#2D3436] leading-[32px] ">
              <p>Awesome Feather icons pack</p>
            </div>
          </div>
          <div className="pt-[72px]">
            <div className="bg-[white] w-[306px] h-[64px] rounded-[16px] border-[1px] border-[#ADADAD]  ">
              {" "}
              <p className="font-iner font-[700] text-[24px] leading-[24px] text-[#49BBBD] text-center py-[16px]  ">
                Extended license
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
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
            <div className="w-[263px] h-[63px] max-sm:h-[50px] max-sm:pt-2 max-sm:w-[200px] bg-[#49BBBD] rounded-[12px]">
              <p className="text-white font-poppins font-[700] max-sm:text-[14px] text-[16px] leading-[24px] max-sm:px-[30px] max-sm:py-[5px] px-[40px] py-[20px]">
                Start learning now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="        ">
        <p className="font-poppins max-lg:font-[500] max-lg:text-[25px] font-[600] text-[36px] text-center  pt-[77px]">
          Online coaching lessons for remote learning
        </p>
      </div>
      <>
        {data.map((item, index) => {
          return (
            <>
              <div className=" sm:mx-[142px] mx-10 mt-[83px] ">
                <div className="flex justify-between ">
                  <div className="flex justify-center items-center gap-[16px]">
                    <img src={dot} alt="" />{" "}
                    <p className="font-iner  text-[#2D3436] text-[18px]">
                      {item.heading}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        getIndex(index);
                      }}
                    >
                      <img className="" src={da} alt="" />
                    </button>
                  </div>
                </div>

                {item.showContent && (
                  <div>
                    <p className=" pl-[2%] pt-[15px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempos Lorem ipsum dolor sitamet,
                      consectetur adipiscing elit, sed do eiusmod temporLorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempos Lorem ipsum dolor sitamet, consectetur
                      adipiscing elit, sed do eiusmod temporLorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempos Lorem ipsum dolor sitamet, consectetur adipiscing
                      elit, sed do eiusmod temporLorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempos Lorem
                      ipsum dolor sitamet, consectetur adipiscing elit, sed do
                      eiusmod tempor
                    </p>
                  </div>
                )}
                <div className="pt-[15px]">
                  <div className="  border-[0.5px] border-[#696984] align-middle  "></div>
                </div>
              </div>
            </>
          );
        })}
      </>
      <MyFun />
      <div className="flex flex-wrap justify-center gap-[108px]">
        <div className="w-[786px] h-[762px] rounded-[20px] pt-[59px]  shadow-xl pl-[33px] ">
          <div>
            <img src={zoomwithCoffe} alt="" />
            <div>
              <p className="font-poppins font-[500] text-[26px] leading-[46.8px] text-[#252641] ">
                Become a Teacher
              </p>
              <p className="font-poppins text-[20px] leading-[36px] text-[#696984]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
            <div className="pt-[48px] flex justify-end max-sm:justify-center  ">
              <button className="font-poppins font-[500] text-[20px] leading-[36px] bg-[#49BBBD] text-white rounded-[12px] px-[47px] py-[14px]">
                {" "}
                Apply a Teacher{" "}
              </button>
            </div>{" "}
          </div>
        </div>
        <div className="w-[786px] h-[762px] rounded-[20px] pt-[59px]  shadow-xl pl-[33px] ">
          <div>
            {" "}
            <img src={zoomwithCoffe} alt="" />
            <div>
              <p className="font-poppins font-[500] text-[26px] leading-[46.8px] text-[#252641] ">
                Become a Teacher
              </p>
              <p className="font-poppins text-[20px] leading-[36px] text-[#696984]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
            <div className="pt-[48px] flex justify-end max-sm:justify-center ">
              <button className="font-poppins font-[500] text-[20px] leading-[36px] bg-[#49BBBD] text-white rounded-[12px] px-[47px] py-[14px]">
                {" "}
                Apply a Teacher{" "}
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Membership;
