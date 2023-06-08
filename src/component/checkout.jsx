import paypal from "../../src/images/checkout/paypal.png";
import ae from "../../src/images/checkout/americanexpress.png";
import visa from "../../src/images/checkout/visa.png";
import mastercard from "../../src/images/checkout/master.png";
import teacher from "../../src/images/checkout/confidentteacher.png";
import zoom from "../../src/images/checkout/zoom.png";
import kid from "../../src/images/checkout/kid.png";
import cat from "../../src/images/checkout/cat.png";
import Footer from "./footer";
const Checkout = () => {
  return (
    <div>
      <div className="flex flex-wrap  justify-center items-center gap-[52px]">
        <div className=" flex flex-col  justify-center pt-[4.6%] rounded-[20px] border-spacing-1  max-sm:ml-[10%]  ">
          <p className="font-poppins font-[600] text-[36px] pt-[50px] ">
            Checkout
          </p>
          <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B] pt-[9px]">
            Cart Type
          </p>

          <div className="flex flex-wrap gap-[20px] pt-[38px]">
            <img src={paypal} alt="" />
            <img src={ae} alt="" />
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
          </div>

          <div className="flex flex-col w-[100%]  gap-[10px] pt-[30px]">
            <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B]   ">
              Name on Card
            </p>
            <input
              className="font-poppins text-[18px] text-[#9D9B9B] py-[16px] pl-[21px] rounded-[10px] border-[1px] "
              type="text"
              placeholder="Enter name on Card"
            />
            <p className="font-poppins font-[600] pt-[20px] text-[18px] text-[#5B5B5B]">
              Card Number{" "}
            </p>
            <input
              className="font-poppins text-[18px] text-[#9D9B9B] py-[16px] pl-[21px] rounded-[10px] border-[1px]     "
              type="text"
              placeholder="Enter Card Number"
            />
          </div>
          <>
            <div className="flex gap-[36px] justify-start flex-wrap  items-center pt-[30px] ">
              <div className="flex flex-col ">
                <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B]  ">
                  Enter Expiration Date
                </p>
                <input
                  className="py-[17px]  pl-[21px]  rounded-[10px] border-[1px]  "
                  type="text"
                  placeholder="Enter Expiration Date"
                />
              </div>

              <div className="flex flex-col ">
                <p className="font-poppins font-[600] text-[18px] text-[#5B5B5B]  ">
                  CVC
                </p>

                <input
                  className="py-[17px]  pl-[21px]  rounded-[10px] border-[1px]  "
                  type="text"
                  placeholder="Enter CVC"
                />
              </div>
            </div>
          </>
          <div className="flex max-sm:justify-center  justify-start items-center  gap-[7px] pt-[17px]">
            <input
              className="rounded-[4px] w-[14px] h-[14px] border-[#D9D9D9] border-[1px]"
              type="radio"
            />
            <p className="font-poppins text-[18px] text-[#9D9B9B] ">
              Save my information for faster checkout
            </p>
          </div>
          <div className="pt-[50px]  ">
            <button className="bg-[#49BBBD] rounded-[12px] max-sm:px-[10%] max-sm:py-[10px] max-lg:px-[10%] font-poppins text-[26px] text-white px-[298px] py-[18px]  text-center ">
              Confirm Payment
            </button>
          </div>
        </div>

        <div className=" bg-[#9DCCFF]  max-sm:w-[100%] rounded-[20px] bg-opacity-[0.2] flex flex-wrap flex-col justify-center pt-[30px]   pl-[35px]">
          <div className="  pb-4 border-b-4  border-black border-opacity-[0.2]">
            <p className="font-poppins text-[24px] ">Summary</p>

            <div className="flex flex-wrap gap-[22px] pt-[50px] pl-[30px]  ">
              <img src={teacher} alt="" />
              <div className="flex flex-col gap-[3px]">
                <p className="font-poppins size-[18px] ">
                  adipising elit, sed do eiusmod tempor
                </p>
                <p className="font-poppins text-[18px] text-[#5B5B5B]">
                  Lorem ipsum dollar...
                </p>
                <p className="font-poppins text-[24px] ">$24.69</p>
              </div>
            </div>
          </div>
          <div className="  rounded-[20px]">
            <div className="flex flex-wrap  gap-[22px] pt-[50px] pl-[30px]  ">
              <img src={teacher} alt="" />
              <div className="flex flex-col gap-[3px]">
                <p className="font-poppins size-[18px] ">
                  adipising elit, sed do eiusmod tempor
                </p>
                <p className="font-poppins text-[18px] text-[#5B5B5B]">
                  Lorem ipsum dollar...
                </p>
                <p className="font-poppins text-[24px] ">$24.69</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mr-[36px] gap-[6px] pt-[10px]">
            {" "}
            <div className="flex justify-between items-center border-t-4  border-black border-opacity-[0.2] pt-[10px] ">
              <p className="font-poppins font-[600] text-[20px] text-[#5B5B5B] ">
                Subtotal
              </p>
              <p className="font-poppins font-[600] text-[20px] text-[#5B5B5B] ">
                $51.38
              </p>
            </div>
            <div className="flex justify-between items-center border-t-4  border-black border-opacity-[0.2] pt-[10px]">
              <p className="font-poppins font-[600] text-[20px] text-[#5B5B5B] ">
                Coupon Discount
              </p>
              <p className="font-poppins font-[600] text-[20px] text-[#5B5B5B] ">
                0 %
              </p>
            </div>
            <div className="flex justify-between items-center border-t-4  border-black border-opacity-[0.2] pt-[10px]">
              <p className="font-poppins font-[600] text-[20px] text-[#5B5B5B] ">
                TAX
              </p>
              <p className="font-poppins font-[600] text-[20px] text-[#5B5B5B] ">
                5
              </p>
            </div>
            <div className="flex justify-between items-center border-t-4  border-black border-opacity-[0.2] pt-[10px]">
              <p className="font-poppins font-[600] text-[20px] text-[#000000] ">
                Total
              </p>
              <p className="font-poppins font-[600] text-[20px] text-[#000000] ">
                $56.38
              </p>
            </div>
          </div>{" "}
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

export default Checkout;
