import booking from "../../src/images/meeting/booking.png";
import kid from "../../src/images/meeting/kid.png";
import cat from "../../src/images/meeting/cat.png";
const Meetingthirdcom = () => {
  return (
    <div className="      ">
      <div className="flex justify-around gap-[50px]  items-center    w-[100%]    ">
        <p className="font-poppins font-[600] pb-[15px] text-[30px]">
          Book for you
        </p>
        <img src={booking} alt="" />
      </div>
      <div className="flex justify-center gap-[20px]">
        <div>
          <div className="rounded-[20px] w-[205px] border-[2px]">
            <img
              className=" px-[14px] py-[10px]  border-[2px]  shadow-xl"
              src={kid}
              alt=""
            />
            <p className="font-poppins font-[500] text-[24px] text-[#252641] px-[14px] py-[7px]">
              All Benefits of PLUS
            </p>
            <p className="font-poppins font-[600] text-[30px] text-[#49BBBD] px-[14px]  ">
              $24
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-[20px] w-[205px] border-[2px]">
            <img className=" px-[14px] py-[10px] " src={cat} alt="" />
            <p className="font-poppins font-[500] text-[24px] text-[#252641] px-[14px] py-[7px]">
              All Benefits of PLUS
            </p>
            <p className="font-poppins font-[600] text-[30px] text-[#49BBBD] px-[14px]  ">
              $24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetingthirdcom;
