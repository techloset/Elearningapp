import clock from "../../src/images/meeting/clock.png";
import arrowdown from "../../src/images/meeting/arroedown.png";
import book from "../../src/images/meeting/book.png";
import arrowup from "../../src/images/meeting/arrowup.png";
import lock from "../../src/images/meeting/lock.png";

const Meetingdropdown = () => {
  return (
    <div className="w-[437px] rounded-[19px]   py-[17px] px-[30px]  ">
      <div>
        {/* <div className=" flex  justify-between items-center ">
          <p className="text-[#49BBBD] font-poppins text-[500] text-[18px]">
            Illstarator Structuors
          </p>
          <img className=" w-[15px] h-[13px] " src={arrowup} alt="" />
        </div> */}
        {/* <div className="flex items-center justify-between  ">
          <div className="flex items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src={clock} alt="" />
            <p>2 hours</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <img className="w-[15px] h-[15px]" src={book} alt="" />
            <p>3 Lessons</p>
          </div>
        </div> */}
        {/* <div className="pt-[5px]  ">
          <div className="w-[387px] bg-[#D9D9D9] border-[1px]  "></div>
        </div> */}

        <div className="flex justify-between py-[17px]  ">
          <p className="font-poppins font-[500] text-[14px] text-[#49BBBD]   ">
            1. Lorem ipsum dolor sit amet
          </p>
          <p className="font-poppins font-[500] text-[14px] text-[#49BBBD]  ">
            65:00
          </p>
        </div>
        <div className="pt-[5px]  ">
          <div className="w-[387px] bg-[#D9D9D9] border-[1px]  "></div>
        </div>
        <div className="flex justify-between py-[17px] ">
          <p className="font-poppins font-[500] text-[14px] text-[#252641] ">
            2. Lorem ipsum dolor
          </p>
          <div className="flex gap-[8px] ">
            <p className="font-poppins font-[500] text-[14px] text-[#252641]">
              25:00
            </p>
            <img className="w-[15px] h-[18px]" src={lock} alt="" />
          </div>
        </div>
        <div className="pt-[5px] ">
          <div className="w-[387px] bg-[#D9D9D9] border-[1px]  "></div>
        </div>
        <div className="flex justify-between py-[17px] ">
          <p className="font-poppins font-[500] text-[14px] text-[#252641] ">
            3. Lorem ipsum dolor sit amet
          </p>
          <div className="flex gap-[8px] ">
            <p className="font-poppins font-[500] text-[14px] text-[#252641]">
              30:00
            </p>
            <img className="w-[15px] h-[18px]" src={lock} alt="" />
          </div>
        </div>
        <div className="pt-[5px]  ">
          <div className="w-[387px] bg-[#D9D9D9] border-[1px]  "></div>
        </div>
      </div>
    </div>
  );
};

export default Meetingdropdown;
