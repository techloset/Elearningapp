import Headerpage from "../component/header";
import play from "../../src/images/play.png";
import calend from "../../src/images/calender.png";
import dp from "../../src/images/dp.png";
import letter from "../../src/images/letter.png";
import grap from "../../src/images/graph.png";
import Secbody from "./secbody";
import Thirdbody from "./thirdbody";
import Fourthbody from "./fourthbody";
import FifthBody from "./fifthbody";
import Footer from "./footer";
import backgroundimage from "../../src/images/headerbg.png";
import Membership from "./membership";
import Course from "./course";
const Landingpage = () => {
  return (
    <div className="">
      <div className="bodimg  bg-no-repeat bg-cover">
        {/* <Headerpage /> */}

        {/* <div className="      ">
          <div className="flex items-center   max-lg:flex-col     w-[100%]">
            <div className="w-[45%] max-xl:w-[80%]  xl:items-end ">
              <div className="flex  justify-center items-center xl:items-end   mt-[-130px] max-lg:mt-20 flex-col ">
                <div className="">
                  <p className="font-poppins text-white text-5xl leading-[73px]  font-bold ">
                    <span className="font-poppins text-[#F48C06] text-5xl leading-[81px]  font-bold ">
                      Studying
                    </span>{" "}
                    Online is now <br /> much easier
                  </p>
                  <p className="text-white text-start  font-nunito-sans font-[400] leading-[38px] mt-[34px] text-[24px]  ">
                    TOTC is an interesting platform that will teach <br /> you
                    in more an interactive way
                  </p>
                  <div className=" flex rounded-[88px] gap-[20px] mt-[52px]  ">
                    <button className=" text-white px-[38px] py-[22px]  rounded-[80px] font-poppins text-[24px] font-[600px] bg-[#FFFFFF4D]  ">
                      Join for free
                    </button>

                    <div>
                      <button className=" bg-white rounded-[88px]  ">
                        <img
                          className="p-[20px] pl-[25px] "
                          src={play}
                          alt=""
                        />
                      </button>
                    </div>
                    <p className="text-[#252641] font-poppins font-normal text-[24px] leading-[36px] pt-5 pl-[15px] ">
                      Watch how it works
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[60%] max-lg:w-[90%] flex justify-center ">
              <div className="lady w-full ml-[10%]  bg-center bg-no-repeat  h-[992px]  flex items-center   ">
                <div className="w-[100%]    ">
                  <div className="flex justify-between    pt-[200px]  ">
                    <div className="w-[300px] h-[100px] bg-[#FFFFFF] bg-opacity-[90%] rounded-[20px] flex    ">
                      <div>
                        <img
                          className="pl-[28px] py-[25px]"
                          src={calend}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col pl-[22px]   ">
                        {" "}
                        <p className="font-nunito-sans  text-[#595959] font-bold text-[24px]   pt-[15px] ">
                          250k
                        </p>{" "}
                        <p className="font-nunito-sans text-[#595959] font-semibold text-[20px]   ">
                          Assisted Student{" "}
                        </p>
                      </div>
                    </div>
                    <div className=" pb-[50px]  mt-[-106px]  mr-[15%]        ">
                      <img className=" " src={grap} alt="" />
                    </div>
                  </div>
                  <div className="  w-[100%]    ">
                    <div className=" flex justify-end pb-[90px] mr-[100px]    ">
                      <div className="w-[370px] h-[110px] bg-[#FFFFFF] bg-opacity-[80%] rounded-[20px] mt-[95px] flex ">
                        <div className="pl-[26px] pt-[30px] ">
                          <img src={letter} alt="" />
                        </div>

                        <div className="pl-[24px] pt-[20px] ">
                          <p className="font-nunito-sans font-bold text-2xl text-[#595959]  ">
                            Congratulations
                          </p>
                          <p className="text-[#595959] font-nunito-sans font-semibold text-lg ">
                            Your admission completed{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[390px] h-[187px] bg-[#FFFFFF] opacity-[80%] rounded-[20px] pt-[20px] pl-[26px] flex  gap-[20px]  ">
                    <div>
                      <img className="w-[56px] h-[56px]   " src={dp} alt="" />
                    </div>{" "}
                    <div className="flex flex-col">
                      <p className="font-nunito-sans text-[#595959] font-bold text-[24px] pt-[4px]  ">
                        {" "}
                        User Experience Class
                      </p>
                      <p className="font-nunito-sans text-[#595959] font-semibold text-[20px]   ">
                        Today at 12.00 PM
                      </p>
                      <div className="pt-[19px]   ">
                        <button className="bg-[#D8587E] w-[180px] h-[50px]   rounded-[80px] font-nunito-sans font-bold text-[20px] text-white ">
                          Join Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <Secbody /> */}
        {/* <Thirdbody /> */}
        {/* <Fourthbody /> */}
        {/* <FifthBody /> */}
        {/* <Membership/> */}
        <Course/>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Landingpage;
