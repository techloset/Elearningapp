import fotlog from "../../src/images/totc.png";

const Footer = () => {
  return (
    <div className="bg-[#252641] w-[1920px] flex flex-col gap-[95px]  ">
      <div className="flex justify-center gap-[77px] pt-[74px] ">
        <div>
          <img src={fotlog} alt="" />{" "}
        </div>
        {/* <div className=" ] bg-[#626381] border-[1px] rotate-90 "></div> */}
        <div className="pl-[41px] border-l-2 border-[#626381]  ">
          <p className="font-poppins font-[400] text-[22px] leading-[33px] text-[#FFFFFF]  ">
            Virtual Class <br /> for Zoom
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div>
          <p className="font-poppins font-[500] text-[26px] leading-[39px] text-[#B2B3CF]  text-center ">
            Subscribe to get our Newsletter
          </p>
        </div>

        <div className="flex justify-center gap-[20px]   ">
          <div className="w-[400px] h-[60px] border-[1px] border-[#83839A] rounded-[80px]">
            <input
              className="font-poppins font-[400] text-[20px] leading-[30px] bg-[#252641] pt-[15px] pl-[30px] "
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="w-[179px] h-[60px] rounded-[60px]  ">
            <button className="bg-[#49BBBD] w-[179px] h-[60px] rounded-[60px] font-poppins font-[500] text-[22px] text-white  ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center gap-[20px]  ">
          <p className="font-poppins font-[400] text-[22px] leading-[33px] text-[#B2B3CF]   ">
            Careers
          </p>
          <p className="font-poppins font-[400] text-[22px] leading-[33px] text-[#B2B3CF] border-l-[2px] border-[#626381]  pl-[20px] ">
            Privacy Policy
          </p>
          <p className="font-poppins font-[400] text-[22px] leading-[33px]  text-[#B2B3CF] border-l-[2px] border-[#626381] pl-[20px] ">
            Terms & Conditions
          </p>
        </div>
      </div>
      <div className="">
        <p className="font-poppins font-[400] text-[22px] leading-[33px] text-[#B2B3CF] text-center ">
          © 2021 Class Technologies Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
