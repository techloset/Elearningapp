import pr from "../../src/images/pressrelease.png";
import work from "../../src/images/working.png";
import news from "../../src/images/news.png";
import catnews from "../../src/images/catnews.png";
const FifthBody = () => {
  return (
    <div>
      <div className=" ">
        <p className="font-nunito-sans font-[700] text-[36px] leading-[64.8px] text-[#2F327D] text-center mt-[150px] ">
          Lastest News and Resources
        </p>
        <p className="font-nunito-sans font-[400] text-[24px] text-[#696984] leading-[43.2px] text-center pt-[20px] ">
          See the developments that have occurred to TOTC in the world
        </p>
      </div>

      <div className="flex max-xl:flex-wrap justify-center gap-[120px] pt-[100px]   ">
        <div className="  flex  flex-col items-center justify-center  ">
          <img src={work} alt="" />

          <div className="w-[130px] h-[40px] rounded-[80px] bg-[#49BBBD] my-[42px] ">
            {" "}
            <button className="font-poppins font-[500] text-[20px] leading-[36px] text-white pl-[35px] pt-[2px] ">
              NEWS
            </button>{" "}
          </div>
          <div className="w-[609px] max-sm:w-[390px] flex flex-col  text-end items-center ">
            <p className="font-poppins font-[500px] text-[26px] leading-[46.8px] text-[#252641] max-sm:text-[18px] ">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </p>
            <p className="font-poppins font-[400] text-[20px] leading-[36px] text-[#696984] pt-[20px]  ">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>

            <button className="font-poppins font-[400] text-[20px] border-b-2  border-[#696984] text-[#696984]  pt-[28px] ">
              Read more
            </button>
          </div>
        </div>

        <div className="flex flex-col  justify-start gap-[50px]  ">
          <div className="flex items-center max-xl:flex-wrap  gap-[25px]   max-sm:justify-center   max-sm:pl-[12%]  ">
            <img src={pr} alt="" />
            <div className="  ">
              <p className="font-poppins font-[500] flex justify-center items-center  text-[22px] leading-[39.6px] text-[#252641] ">
                Class Technologies Inc. Closes $30 Million <br /> Series A
                Financing to Meet High Demand
              </p>
              <p className="font-poppins font-[400] text-[20px] leading-[36px]     text-[#696984] ">
                Class Technologies Inc., the company that <br /> created
                Class,...
              </p>
            </div>
          </div>
          <div className="flex items-center max-xl:flex-wrap gap-[25px]   max-sm:justify-center max-sm:pl-[12%]   ">
            <img src={news} alt="" />
            <div className="  ">
              <p className="font-poppins font-[500] text-[22px] leading-[39.6px] text-[#252641] ">
                Zoom’s earliest investors are betting <br /> millions on a
                better Zoom for schools
              </p>
              <p className="font-poppins font-[400] text-[20px] leading-[36px] text-[#696984] ">
                Zoom was never created to be a consumer <br /> product.
                Nonetheless, the...
              </p>
            </div>
          </div>
          <div className="flex items-center max-xl:flex-wrap gap-[25px]  max-sm:justify-center  max-sm:pl-[12%]    ">
            <img src={catnews} alt="" />
            <div className="  ">
              <p className="font-poppins font-[500] text-[22px] leading-[39.6px] text-[#252641] ">
                Former Blackboard CEO Raises $16M to <br /> Bring LMS Features
                to Zoom Classrooms
              </p>
              <p className="font-poppins font-[400] text-[20px] leading-[36px] text-[#696984] ">
                This year, investors have reaped big <br /> financial returns
                from betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FifthBody;
