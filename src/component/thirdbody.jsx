import groupcall from "../../src/images/callsession.png";
import tag from "../../src/images/blueyellow.png";
import yandbbox from "../../src/images/yellownadbluebox.png";
import smsocial from "../../src/images/smallsocial.png";
import hand1 from "../../src/images/hand.png";
import stuimg from "../../src/images/studentimg.png";
import scen from "../../src/images/scenry.png";
import starstudent from "../../src/images/starsstudent.png";
import discussion from "../../src/images/pvtdiscussion.png";
import classroom from "../../src/images/classroom.png";
const Thirdbody = () => {
  return (
    <div className="  mt-[190px]  max-sm:mt-[100px] ">
      {/* <div className=" flex max-2xl:flex-wrap  pl-[50px] ">
        <div className="flex    pt-[4%] w-[720px]">
          <p className="grendot  bg-no-repeat text-[#2F327D] font-poppins font-[500] leading-[57.6px] text-[36px]   text-start pt-4 pb-[30px] pl-6 ">
            Everything you can do in a physical <br /> classroom,{" "}
            <span className="text-[#00CBB8]"> you can do with TOTC </span>
          </p>
          <div className="smdot    bg-right-bottom bg-no-repeat   font-poppins font-[400px] text-[24px] leading-[43.2px] pl-[30px]  text-start text-[#696984] ">
            <div>
              
              <p>
                TOTC’s school management software helps traditional <br /> and
                online schools manage scheduling, attendance, <br /> payments
                and virtual classrooms all in one secure cloud- <br /> based
                system.
              </p>
            </div>
          </div>
          <div className="pb-[50px] flex justify-start absolute  ">
            <button className="text-[#696984] pl-[30px] pt-[30px] border-b border-[#696984]  font-[400] text-[22px] leading-[39.6px] ">
              Learn more
            </button>
          </div>
        </div>
        <div>
          {" "}
          <img src={classroom} alt="" />{" "}
        </div>
      </div> */}

      <div className="flex max-xl:flex-wrap justify-center   max-xl:ml-[90px] gap-[67px] items-center   ">
        <div className="w-[700px]">
          <div className="w-[73px] h-[73px] bg-[#33EFA0] rounded-full absolute  "></div>
          <div>
            <p className="font-poppins font-[500] text-[36px] leading-[57.6px] text-[#2F327D]  relative ">
              Everything you can do in a physical <br /> classroom,{" "}
              <span className="text-[#00CBB8]">you can do with TOTC</span>
            </p>
          </div>
          <div className="flex relative w-[100%] ">
            <p className="font-poppins text-[24px] leading-[43.2px] text-[#696984] w-[] max-lg:text-[20px] relative">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud- based system.
            </p>
            <div className="w-[30px] h-[30px] bg-[#33EFA0] rounded-full absolute right-0 bottom-16"></div>
          </div>
          <button className="font-poppins text-[22px] max-lg:text-[20px] leading-[39.6px] text-[#696984] border-b-2 border-[#696984] ">
            Learn more
          </button>
        </div>

        <div className=" ">
          <img className="" src={classroom} width={705} height={471} alt="" />
        </div>
      </div>

      <div className="flex  justify-center text-center pt-[180.9px]">
        <div className="max-lg:pl-[5%]">
          <p className="font-poppins text-[#2F327D] font-[700px] text-[36px] leading-[64.8px]">
            Our
            <span className="text-[#00CBB8] font-[700px] text-[36px] leading-[64.8px] ">
              Features
            </span>
          </p>
          <p className="font-poppins font-[400] text-[24px] leading-[43.2px] text-[#696984]  ">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>
      </div>

      <div className="flex max-xl:flex-wrap justify-center gap-[78px] pt-[100px]">
        <div className="  ">
          <img
            className="max-lg:w-[800px] max-lg:pl-[10%] "
            src={groupcall}
            alt=""
          />
        </div>

        <div className="flex flex-col max-lg:pl-[10%]   justify-center pb-[50px] ">
          <p>
            {" "}
            <p className="font-poppins font-[600] text-[40px] leading-[64px] text-[#2F327D] ">
              A <span className="text-[#00CBB8]"> user interface</span> designed{" "}
              <br />
              for the classroom
            </p>
          </p>
          <div className=" flex pt-[40px] ">
            <div>
              {" "}
              <img src={tag} alt="" />
            </div>
            <p className="font-poppins font-[400] text-[22px] leading-[39.6px] text-[#696984] ">
              Teachers don’t get lost in the grid view <br /> and have a
              dedicated Podium space.
            </p>
          </div>
          <div>
            <div className=" flex pt-[40px] ">
              <div className="">
                {" "}
                <img src={yandbbox} alt="" />
              </div>
              <p className="font-poppins font-[400] text-[22px] leading-[39.6px] text-[#696984]">
                TA’s and presenters can be moved to <br /> the front of the
                class.
              </p>
            </div>
            <div className=" flex pt-[40px]  ">
              <div>
                {" "}
                <img src={smsocial} alt="" />
              </div>
              <p className="font-poppins font-[400] text-[22px] leading-[39.6px] text-[#696984]">
                Teachers can easily see all students <br /> and class data at
                one time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-xl:flex-wrap justify-center items-center relative max-w-[1600px]   mx-auto  pt-[177px]  ">
        <div className="w-[50%]  ">
          <p className="font-poppins font-[600] text-[40px] leading-[64px] text-[#2F327D]  ">
            <span className="text-[#00CBB8]"> Tools </span> For Teachers And
            Learners
          </p>
          <div>
            <img
              className="absolute left-[340px] bottom-[340px] max-xl:hidden z-0  w-[37.96px] h-[55px] "
              src={hand1}
              alt=""
            />
          </div>
          <p className="font-poppins font-[400] z-50   text-[22px]leading-[39.6px] text-[#696984]   ">
            Class has a dynamic set of teaching tools built to <br /> be
            deployed and used during class. Teachers can <br /> handout
            assignments in real-time for students to <br /> complete and submit.
          </p>
        </div>
        <div>
          <div>
            {" "}
            <img className=" " src={stuimg} alt="" />
          </div>
        </div>
      </div>

      <div className="flex max-xl:flex-wrap max-xl:w-[100%] w- justify-between ml-[317px] max-sm:ml-[75px] mr-[265px]  pt-[177px] items-center max-lg: ">
        <div className="w-[465px]    ">
          <img className="   " src={scen} width={465} height={562} alt="" />
        </div>
        <div className="w-[596px]   ">
          <p className="font-poppins font-[600] text-[40px]  max-sm:text-[30px] leading-[40px] text-[#2F327D] w-[71%] ">
            Assessments,{" "}
            <span className="text-[#00CBB8] font-nunito-sans w-[100%] ">
              {" "}
              Quizzes{" "}
            </span>
            , Tests
          </p>
          <p className="font-poppins font-[400] text-[#696984] text-[22px] w-[91%] ">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>

      <div>
        <div className="flex max-xl:flex-wrap max-xl:w-[100%] w- justify-between max-sm:ml-[75px] ml-[317px] mr-[265px]  pt-[177px] items-center ">
          <div className="w-[596px]">
            <p className="font-poppins font-[600] text-[40px] leading-[40px] max-sm:text-[30px] w-[71%] text-[#00CBB8] ">
              Class Managment,{" "}
              <span className=" font-nunito-sans text-[#2F327D]  ">
                Tools for Educators
              </span>
            </p>
            <p className="font-poppins font-[400] text-[#696984] text-[22px] ">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
          <div className=" w-[465px] ">
            <img src={starstudent} width={717} height={479} alt="" />
          </div>
        </div>
      </div>
      <div className="flex max-xl:flex-wrap max-xl:w-[100%] w- justify-between max-sm:ml-[75px] ml-[317px] mr-[265px]  pt-[177px] items-center ">
        <div className="w-[465px] ">
          <img src={discussion} width={658} height={363} alt="" />
        </div>
        <div className="w-[596px]">
          <p className="font-poppins font-[600] text-[40px] leading-[40px] text-[#2F327D]  ">
            One-on-One{" "}
            <span className="text-[#00CBB8] font-nunito-sans ">
              {" "}
              Discussions{" "}
            </span>
            ,
          </p>
          <p className="font-poppins font-[400] text-[#696984] text-[22px] ">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <div className=" flex justify-center pt-[150px] max-sm:pt-[100px]  ">
        <button className="font-[400] text-[24px] rounded-[80px] border-[1px] border-[#49BBBD] max-sm:w-[200px] max-sm:h-[40px] w-[280px] h-[80px] text-[#49BBBD] ">
          See more features
        </button>
      </div>
    </div>
  );
};

export default Thirdbody;
