import roundimg from "../../src/images/literature/roundimg.png";
import star from "../../src/images/literature/star.png";
import eye from "../../src/images/literature/eye.png";
import play from "../../src/images/literature/play.png";
import twitter from "../../src/images/literature/twitter.png";
import youtube from "../../src/images/literature/youtube.png";
import instagram from "../../src/images/literature/instagram.png";
import { useState } from "react";
import Headerpage2 from "./header2";
import Footer from "./footer";
const Literature = () => {
  const [but, setbutton] = useState([
    { title: "About" },
    { title: "Course" },
    { title: "Notes" },
    { title: "Project" },
    { title: "Podcast" },
    { title: "Book" },
    { title: "Review" },
  ]);

  const [showimages, setshowimages] = useState([
    {
      img: require("../../src/images/literature/book1.png"),
      title: "All Benefits of PLUS",
      RS: "$24",
    },
    {
      img: require("../../src/images/literature/book2.png"),
      title: "All Benefits of PLUS",
      RS: "$24",
    },
    {
      img: require("../../src/images/literature/book3.png"),
      title: "All Benefits of PLUS",
      RS: "$24",
    },
    {
      img: require("../../src/images/literature/book4.png"),
      title: "All Benefits of PLUS",
      RS: "$24",
    },
    {
      img: require("../../src/images/literature/book5.png"),
      title: "All Benefits of PLUS",
      RS: "$24",
    },
    {
      img: require("../../src/images/literature/book6.png"),
      title: "All Benefits of PLUS",
      RS: "$24",
    },
  ]);
  return (
    <div>
      <div>
        <Headerpage2 />
      </div>
      <div className="literaturebg  bg-no-repeat w-[100%]  pt-[30px]  bg-center">
        <div className="flex  flex-row justify-center w-[90%]  items-center">
          <div className="   py-[26px]  ">
            <img
              className=" max-sm:hidden  border-white border-[15px] rounded-full   2xl:ml-[170px] "
              src={roundimg}
              alt=""
            />
          </div>
          <>
            <div className=" w-[70%]  bg-[#FFFFFFCC] pl-[30px] sm:px-[50px] pt-[60px] pb-[36px] bg-opacity-[70%] ml-10 rounded-[20px]">
              <div className="flex max-xl:flex-wrap justify-between items-center  ">
                <p className="font-poppins font-[500] text-[20px] md:text-[30px] text-[#000000]">
                  John Anderson
                </p>
                <button className="font-poppins font-[700] text-[18px]  md:text-[24px] py-[16px] px-[27px] rounded-[12px] text-white  bg-[#49BBBD;]">
                  Enroll Now
                </button>
              </div>
              <p className=" font-poppins text-[18px] text-[#2D3436B2] text-opacity-[70%] ">
                Assistant Professor at Mcmaster University{" "}
              </p>
              <p className="font-poppins lg:text-[25px] max-sm:hidden  text-[#2D3436] md:text-[18px] text-[14px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut
                enum ad minim veniam, quis nostrud
              </p>

              <div className="flex  justify-between items-center pb-[36px]">
                <div className="flex gap-[126px] pt-[25px] max-2xl:hidden ">
                  <div className="flex gap-[1px] items-center">
                    <img className="w-[23px] h-[36px]" src={star} alt="" />
                    <p className="font-poppins text-[15px] text-[#2D3436CC] text-opacity-[80%]">
                      4.9 instructor Rating
                    </p>
                  </div>
                  <div className="flex gap-[1px] items-center">
                    {" "}
                    <img className="w-[23px] h-[36px]" src={eye} alt="" />
                    <p className="font-poppins text-[15px] text-[#2D3436CC] text-opacity-[80%]">
                      1,592 Students
                    </p>
                  </div>
                  <div className="flex gap-[1px] items-center">
                    <img className="w-[23px] h-[36px]" src={play} alt="" />
                    <p className="font-poppins text-[15px] text-[#2D3436CC] text-opacity-[80%]">
                      Courses
                    </p>
                  </div>
                </div>

                <div className="flex gap-[25px] items-center">
                  <img src={twitter} alt="" />
                  <img src={youtube} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>
          </>
        </div>
      </div>

      {/* <div className="flex gap-[26px]  ml-[120px] pt-[28px]">
        {" "}
      
        {but.map((item, index) => {
          console.log("index", index);
        
          return (
            <button
              className={`py-[16px] px-[40px] leading-[36px] font-poppins font-[700] text-[24px]  rounded-[12px] ${
                index === 5
                  ? "bg-[#49BBBD] text-white"
                  : "bg-[#BBBBBB80] text-[#696969] bg-opacity-[80%]"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div> */}
      <div>
        <p className="font-poppins  font-[500] text-[30px] ml-[120px] pt-[68px] ">
          Literature course
        </p>
      </div>

      <div className="pt-[50px]">
        <div className="w-[100%]  h-[646px] flex flex-wrap justify-center items-center gap-[86px] ">
          {showimages.map((item, index) => {
            return (
              <div className="  ">
                <div className="">
                  <div className="bg-white p-[5px]">
                    <img
                      className="w-[450px] h-[518px] border-[5px] "
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-around items-center">
                    <p className="font-poppins text-[25px] text-[#000000CC] text-opacity-[80%]">
                      {item.title}
                    </p>
                    <p className="font-poppins font-[800] text-[30px] text-[#49BBBDCC] text-opacity-[80%]">
                      {item.RS}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-[850px]">
        <Footer />
      </div>
    </div>
  );
};

export default Literature;
