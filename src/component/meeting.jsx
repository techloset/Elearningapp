import gear from "../../src/images/meeting/gear.png";
import camera from "../../src/images/meeting/camera.png";
import mic from "../../src/images/meeting/mic.png";
import phone from "../../src/images/meeting/phonered.png";
import tv from "../../src/images/meeting/monitor.png";
import arrow from "../../src/images/meeting/arroe.png";
import img1 from "../../src/images/meeting/member1.png";
import img2 from "../../src/images/meeting/member2.png";
import img3 from "../../src/images/meeting/member3.png";
import content from "../../src/images/meeting/content.png";
import clock from "../../src/images/meeting/clock.png";
import arrowdown from "../../src/images/meeting/arroedown.png";
import book from "../../src/images/meeting/book.png";
import { useState } from "react";
import Meetingdropdown from "./meetingdropdown";
import Meetingthirdcom from "./meetingthirdcom";
const Meeting = () => {
  // const [isOpen, setIsOpen] = useState(
  // [{ showContent: true }, { showContent: true }, { showContent: true }]
  // false
  // );
  // const [data, getdata] = useState([
  //   // { showContent: true, heading: "Get Started" },
  //   // { showContent: true, heading: "Illstarator Structuors" },
  //   // { showContent: true, heading: "Using Illstarator" },
  // ]);
  const [cards, setCards] = useState([
    { showContent: true, data: null, heading: "Get Started" },
    { showContent: true, data: null, heading: "Illstarator Structuors" },
    { showContent: true, data: null, heading: "Using Illstarator" },
    { showContent: true, data: null, heading: "What is Pandas?" },
    { showContent: true, data: null, heading: "Work with Numpy" },
  ]);
  console.log(cards, "cardssssssssss");

  const getIndex = (newindex) => {
    console.log(newindex);
    const updatedIndex = cards.map((updated, index) => {
      if (newindex === index) {
        return { ...updated, showContent: !updated.showContent };
      } else {
        return updated;
      }
    });
    console.log(updatedIndex);
    setCards(updatedIndex);
  };
  return (
    <div>
      <div className="bg-[#9DCCFF] flex justify-around  flex-wrap  bg-opacity-[0.2]">
        <div className=" mt-[97px]  ">
          <div className="flex   bg-white rounded-[26px] justify-between items-center w-[80%] pr-[35px] pb-[35px]">
            <div>
              <p className="font-poppins font-[600] text-[30px] text-[#252641] px-[35px] pt-[35px]">
                UX/UI Design Confrence Meeting
              </p>
              <p className="font-poppins text-[18px] text-[#252641] px-[35px] ">
                9 Lesson 6h 30min
              </p>
            </div>
            <img className="" src={gear} alt="" />
          </div>

          <div className="bgpotrait bg-no-repeat bg-contain  w-[1186px] h-[1070px] ">
            <div className="flex flex-col gap-5 items-end pt-8 pr-[53px]   ">
              <>
                <img
                  className="pt-[27px] border-[2px] border-white rounded-[17px] w-[198px] h-[160px]"
                  src={img1}
                  alt=""
                />
                <img
                  className="pt-[19px] border-white border-[2px] rounded-[17px]   w-[198px] h-[160px]"
                  src={img2}
                  alt=""
                />
                <div className="pt-[19px]  border-[1px] rounded-[17px]  w-[198px] h-[160px]">
                  <img className="border-white" src={img3} alt="" />
                </div>
              </>
            </div>
            <div className=" bg-[#E6F2FF] rounded-[30px] flex  gap-[30px]  justify-center py-[37px] mt-[30%] pb-[24px] max-xl:mx-2  mx-14 max-xl:py-[30 px]   ">
              <img src={camera} alt="" />
              <img src={mic} alt="" />
              <img src={phone} alt="" />
              <img src={tv} alt="" />
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[15px]   flex flex-col gap-[25px] mt-[97px] mr-[90px] ">
          <p className="font-poppins font-[600] text-[30px] text-[#252641] pt-[40px] px-[30px]">
            Course Contents{" "}
          </p>

          <div className="flex justify-between px-[30px] ">
            <p className="text-[#49BBBD] font-poppins font-[500] text-[14px] ">
              2/5 COMPLETED
            </p>
            <img className="pr-[35px]" src={content} alt="" />
          </div>
          <div className="flex justify-center gap-[3px] px-[30px]">
            <div className="w-[85px] bg-[#49BBBD] h-[5px] "></div>
            <div className="w-[85px] bg-[#49BBBD] h-[5px] "></div>
            <div className="w-[85px] bg-[#49BBBD] opacity-[0.25] h-[5px] "></div>
            <div className="w-[85px] bg-[#49BBBD] opacity-[0.25] h-[5px] "></div>
            <div className="w-[85px] bg-[#49BBBD] opacity-[0.25] h-[5px] "></div>
          </div>
          {cards.map((item, index) => {
            return (
              <div className="pr-[35px]">
                <div className="flex justify-between rounded-[19px] flex-col border-[2px] border-[#49BBBD4D] ml-[30px]  ">
                  <div className=" pt-[11px] pl-[30px] pb-[30px] ">
                    <div className="flex justify-between">
                      <p className="font-poppins font-[500] text-[18px]   ">
                        {item.heading}
                      </p>

                      <button onClick={() => getIndex(index)}>
                        {" "}
                        <img src={arrowdown} alt="" />{" "}
                      </button>
                    </div>
                    <div className="flex justify-center gap-[180px] items-center  ">
                      <div className="flex gap-[5px] items-center pt-[5px] ">
                        <img className=" " src={clock} alt="" />
                        <p className="font-poppins font-[500] text-[14px] text-[#252641CC] text-opacity-[80%]   ">
                          1 Hour
                        </p>
                      </div>
                      <div className="flex gap-[10px]">
                        <img className="pt-[10px]    " src={book} alt="" />
                        <p className="font-poppins font-[500] text-[14px] pt-[10px] text-[#252641CC] text-opacity-[80%]  ">
                          5 Lessons
                        </p>
                      </div>
                    </div>
                  </div>
                  {item.showContent && <Meetingdropdown />}
                </div>
              </div>
            );
          })}

          <Meetingthirdcom />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
